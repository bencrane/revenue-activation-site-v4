"use client";

import { useRef, useState, useEffect } from "react";
import SignaturePad from "signature_pad";

interface SignatureSectionProps {
  proposalId: string;
  clientName: string;
  clientEmail: string;
}

export default function SignatureSection({ proposalId, clientName, clientEmail }: SignatureSectionProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const signaturePadRef = useRef<SignaturePad | null>(null);
  const [isEmpty, setIsEmpty] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSigned, setIsSigned] = useState(false);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ratio = Math.max(window.devicePixelRatio || 1, 1);

      canvas.width = canvas.offsetWidth * ratio;
      canvas.height = canvas.offsetHeight * ratio;
      canvas.getContext("2d")?.scale(ratio, ratio);

      signaturePadRef.current = new SignaturePad(canvas, {
        backgroundColor: "transparent",
        penColor: "#ffffff",
        minWidth: 1,
        maxWidth: 2.5,
      });

      signaturePadRef.current.addEventListener("endStroke", () => {
        setIsEmpty(signaturePadRef.current?.isEmpty() ?? true);
      });
    }

    return () => {
      signaturePadRef.current?.off();
    };
  }, []);

  const handleClear = () => {
    signaturePadRef.current?.clear();
    setIsEmpty(true);
  };

  const handleSign = async () => {
    if (!signaturePadRef.current || signaturePadRef.current.isEmpty()) {
      return;
    }

    setIsSubmitting(true);

    // Capture signature data BEFORE any state changes
    const signatureData = signaturePadRef.current.toDataURL("image/png");

    // Update UI to signed state before capturing HTML
    setIsSigned(true);

    // Wait for React to render the signed state
    await new Promise(resolve => setTimeout(resolve, 150));

    // Capture HTML with signed state visible
    const signedHtml = document.documentElement.outerHTML;
    console.log("signed_html length:", signedHtml?.length);
    console.log("signed_html preview:", signedHtml?.substring(0, 200));

    const requestBody = {
      signature: signatureData,
      signer_name: clientName,
      signer_email: clientEmail,
      signed_html: signedHtml,
    };
    console.log("Request body keys:", Object.keys(requestBody));
    console.log("signed_html in body?", "signed_html" in requestBody, typeof requestBody.signed_html);

    try {
      const res = await fetch(
        `https://api.serviceengine.xyz/api/public/proposals/${proposalId}/sign`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      if (!res.ok) {
        setIsSigned(false);
        setIsSubmitting(false);
        alert("Failed to sign. Please try again.");
        return;
      }

      const data = await res.json();
      console.log("Sign response:", data);

      // Redirect to Stripe checkout if URL is returned
      if (data.checkout_url) {
        window.location.href = data.checkout_url;
      }
      // Otherwise stay in signed state
    } catch (error) {
      console.error("Signing error:", error);
      setIsSigned(false);
      setIsSubmitting(false);
      alert("Failed to sign. Please try again.");
    }
  };

  if (isSigned) {
    return (
      <div className="px-10 py-8 border-t border-[#1a1a1a] bg-green-500/5">
        <div className="flex items-center gap-3">
          <svg
            className="w-5 h-5 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span className="text-green-500 text-sm">
            Signed and accepted
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="px-10 py-8 border-t border-[#1a1a1a]">
      <div className="mb-4">
        <h2 className="text-xs tracking-widest uppercase text-white/40 mb-1">
          Signature
        </h2>
        <p className="text-white/30 text-xs">{clientName}</p>
      </div>

      {/* Signature Canvas */}
      <div className="relative">
        <canvas
          ref={canvasRef}
          className="w-full h-32 bg-white/5 rounded border border-[#262626] cursor-crosshair"
        />
        {isEmpty && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="text-white/20 text-sm">Sign here</span>
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between mt-4">
        <button
          onClick={handleClear}
          className="text-white/40 text-sm hover:text-white/60 transition-colors"
        >
          Clear
        </button>

        <button
          onClick={handleSign}
          disabled={isEmpty || isSubmitting}
          className="px-6 py-2.5 bg-white text-black text-sm font-medium rounded
                     hover:bg-white/90 transition-colors
                     disabled:opacity-30 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Signing..." : "Sign & Accept Proposal"}
        </button>
      </div>
    </div>
  );
}
