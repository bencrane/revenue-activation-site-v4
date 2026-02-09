import { notFound } from "next/navigation";
import SigningWidget from "./SigningWidget";

const API_BASE = "https://api.serviceengine.xyz";

interface Proposal {
  id: string;
  org_name: string;
  client_name: string;
  client_company: string | null;
  client_email: string;
  status: string;
  total: string;
  signing_token: string | null;
  is_signed: boolean;
  pdf_url: string | null;
}

async function getProposal(proposalId: string): Promise<Proposal | null> {
  try {
    const res = await fetch(`${API_BASE}/api/public/proposals/${proposalId}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      return null;
    }

    return res.json();
  } catch {
    return null;
  }
}

export default async function ProposalPage({
  params,
}: {
  params: Promise<{ proposal_id: string }>;
}) {
  const { proposal_id } = await params;
  const proposal = await getProposal(proposal_id);

  if (!proposal) {
    notFound();
  }

  // Full-bleed signing experience
  if (proposal.signing_token && !proposal.is_signed) {
    return (
      <main className="h-screen w-screen bg-black">
        <SigningWidget
          token={proposal.signing_token}
          clientName={proposal.client_name}
        />
      </main>
    );
  }

  // Already signed
  if (proposal.is_signed) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <svg
            className="w-16 h-16 text-green-400 mx-auto mb-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h1 className="text-2xl font-semibold mb-2">Proposal Signed</h1>
          <p className="text-gray-400">Thank you for your business.</p>
        </div>
      </main>
    );
  }

  // No signing token - proposal being prepared
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <p className="text-gray-400">
          This proposal is being prepared. Please check back shortly.
        </p>
      </div>
    </main>
  );
}
