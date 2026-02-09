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

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-8">
          <p className="text-gray-500 text-sm mb-1">{proposal.org_name}</p>
          <h1 className="text-2xl font-semibold mb-1">Proposal</h1>
          <p className="text-gray-400">
            For {proposal.client_name}
            {proposal.client_company && ` at ${proposal.client_company}`}
          </p>
        </div>

        {/* Signing Widget - displays PDF and handles signing */}
        {proposal.signing_token && !proposal.is_signed && (
          <SigningWidget
            token={proposal.signing_token}
            clientName={proposal.client_name}
          />
        )}

        {/* Already Signed */}
        {proposal.is_signed && (
          <div className="p-8 bg-green-900/20 border border-green-800 rounded-lg text-center">
            <svg
              className="w-12 h-12 text-green-400 mx-auto mb-4"
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
            <p className="text-green-400 font-medium text-lg">
              This proposal has been signed.
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Thank you for your business.
            </p>
          </div>
        )}

        {/* No signing token and not signed - proposal not ready */}
        {!proposal.signing_token && !proposal.is_signed && (
          <div className="p-8 bg-gray-900/50 border border-gray-800 rounded-lg text-center">
            <p className="text-gray-400">
              This proposal is being prepared. Please check back shortly.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
