"use client";

import { useState } from "react";

export default function TermsModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="underline hover:text-white/60 transition-colors"
      >
        Terms of Service
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Modal */}
          <div className="relative bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg max-w-2xl w-full max-h-[80vh] overflow-hidden">
            {/* Header */}
            <div className="flex justify-between items-center px-8 py-6 border-b border-[#1a1a1a]">
              <h2 className="text-lg font-medium text-white">Terms of Service</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/40 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="px-8 py-6 overflow-y-auto max-h-[60vh] text-white/60 text-sm leading-relaxed space-y-4">
              <p>
                <strong className="text-white/80">1. Scope of Work</strong><br />
                The services to be provided are as outlined in this proposal. Any additional work
                outside the defined scope will require a separate agreement and may incur additional fees.
              </p>

              <p>
                <strong className="text-white/80">2. Payment Terms</strong><br />
                Payment is due as follows: 50% upon signing this agreement, and the remaining 50%
                upon completion of the project. Invoices are payable within 14 days of receipt.
              </p>

              <p>
                <strong className="text-white/80">3. Timeline</strong><br />
                Project timelines will be mutually agreed upon after signing. Delays caused by
                client feedback or resource availability may extend the timeline accordingly.
              </p>

              <p>
                <strong className="text-white/80">4. Intellectual Property</strong><br />
                Upon full payment, all deliverables and work product become the property of the client.
                Revenue Activation retains the right to showcase the work in portfolios and case studies
                unless otherwise agreed in writing.
              </p>

              <p>
                <strong className="text-white/80">5. Confidentiality</strong><br />
                Both parties agree to keep confidential any proprietary information shared during
                the engagement. This obligation survives the termination of this agreement.
              </p>

              <p>
                <strong className="text-white/80">6. Limitation of Liability</strong><br />
                Revenue Activation's liability is limited to the total amount paid under this agreement.
                Neither party shall be liable for indirect, incidental, or consequential damages.
              </p>

              <p>
                <strong className="text-white/80">7. Termination</strong><br />
                Either party may terminate this agreement with 14 days written notice. Upon termination,
                client is responsible for payment for all work completed up to the termination date.
              </p>

              <p>
                <strong className="text-white/80">8. Governing Law</strong><br />
                This agreement shall be governed by the laws of the State of Delaware, without regard
                to its conflict of laws provisions.
              </p>
            </div>

            {/* Footer */}
            <div className="px-8 py-4 border-t border-[#1a1a1a]">
              <button
                onClick={() => setIsOpen(false)}
                className="w-full py-2.5 bg-white/10 text-white text-sm rounded hover:bg-white/15 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
