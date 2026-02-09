import { notFound } from "next/navigation";
import SignatureSection from "./SignatureSection";

const API_BASE = "https://api.serviceengine.xyz";

interface ProposalItem {
  id: string;
  name: string;
  description: string | null;
  price: string;
}

interface Proposal {
  id: string;
  org_name: string;
  client_name: string;
  client_company: string | null;
  client_email: string;
  status: string;
  total: string;
  notes: string | null;
  sent_at: string | null;
  signing_token: string | null;
  is_signed: boolean;
  items: ProposalItem[];
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

function formatCurrency(amount: string): string {
  const num = parseFloat(amount);
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(num);
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
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
    <main className="min-h-screen bg-black py-12 px-4">
      {/* Proposal Document */}
      <div className="max-w-2xl mx-auto">
        {/* Document Card */}
        <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg overflow-hidden shadow-2xl">
          {/* Header */}
          <div className="px-10 pt-10 pb-8 border-b border-[#1a1a1a]">
            {/* Top row: Org name left, Date right */}
            <div className="flex justify-between items-center mb-8">
              <div className="text-white/40 text-xs tracking-widest uppercase">
                {proposal.org_name}
              </div>
              {proposal.sent_at && (
                <div className="text-white/30 text-sm">
                  {formatDate(proposal.sent_at)}
                </div>
              )}
            </div>

            {/* Title and client */}
            <h1 className="text-3xl font-light text-white mb-3">Proposal</h1>
            <div className="text-white/50">
              <span className="text-white/70">{proposal.client_name}</span>
              {proposal.client_company && (
                <>
                  <span className="mx-2">·</span>
                  <span>{proposal.client_company}</span>
                </>
              )}
            </div>
          </div>

          {/* Scope of Work */}
          <div className="px-10 py-8 border-b border-[#1a1a1a]">
            <h2 className="text-xs tracking-widest uppercase text-white/40 mb-6">
              Scope of Work
            </h2>
            <div className="space-y-6">
              {proposal.items.map((item) => (
                <div key={item.id} className="flex justify-between items-start gap-8">
                  <div className="flex-1">
                    <h3 className="text-white font-medium">{item.name}</h3>
                    {item.description && (
                      <p className="text-white/50 text-sm mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>
                  <div className="text-white/80 font-mono text-sm whitespace-nowrap">
                    {formatCurrency(item.price)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Total */}
          <div className="px-10 py-6 bg-white/[0.02]">
            <div className="flex justify-between items-center">
              <span className="text-white/40 text-sm tracking-widest uppercase">
                Total Investment
              </span>
              <span className="text-2xl text-white font-light">
                {formatCurrency(proposal.total)}
              </span>
            </div>
          </div>

          {/* Notes */}
          {proposal.notes && (
            <div className="px-10 py-8 border-t border-[#1a1a1a]">
              <h2 className="text-xs tracking-widest uppercase text-white/40 mb-3">
                Notes
              </h2>
              <p className="text-white/60 text-sm leading-relaxed">
                {proposal.notes}
              </p>
            </div>
          )}

          {/* Terms */}
          <div className="px-10 py-8 border-t border-[#1a1a1a]">
            <p className="text-white/40 text-xs leading-relaxed">
              By signing below, you agree to the scope of work and investment outlined
              in this proposal. Payment terms: 50% due upon signing, 50% due upon completion.
            </p>
          </div>

          {/* Signature Section */}
          {!proposal.is_signed && (
            <SignatureSection
              proposalId={proposal_id}
              clientName={proposal.client_name}
            />
          )}

          {/* Already Signed */}
          {proposal.is_signed && (
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
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-white/20 text-xs">
            Powered by {proposal.org_name}
          </p>
        </div>
      </div>
    </main>
  );
}
