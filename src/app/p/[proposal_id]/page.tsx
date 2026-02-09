import { notFound } from "next/navigation";

const API_BASE = "https://api.serviceengine.xyz";

interface ProposalItem {
  id: string;
  name: string;
  description: string | null;
  price: string;
  service_id: string | null;
  created_at: string;
}

interface Proposal {
  id: string;
  client_email: string;
  client_name: string;
  client_name_f: string;
  client_name_l: string;
  client_company: string | null;
  status: string;
  status_id: number;
  total: string;
  notes: string | null;
  created_at: string;
  updated_at: string;
  sent_at: string | null;
  signed_at: string | null;
  converted_order_id: string | null;
  converted_engagement_id: string | null;
  items: ProposalItem[];
  pdf_url?: string | null;
  signing_token?: string | null;
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
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl font-semibold mb-2">Proposal</h1>
          <p className="text-gray-400">
            For {proposal.client_name}
            {proposal.client_company && ` at ${proposal.client_company}`}
          </p>
          {proposal.sent_at && (
            <p className="text-gray-500 text-sm mt-1">
              {formatDate(proposal.sent_at)}
            </p>
          )}
        </div>

        {/* Line Items */}
        <div className="border border-gray-800 rounded-lg overflow-hidden mb-8">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-800 bg-gray-900/50">
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-400">
                  Item
                </th>
                <th className="text-right px-6 py-4 text-sm font-medium text-gray-400">
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              {proposal.items.map((item) => (
                <tr key={item.id} className="border-b border-gray-800 last:border-0">
                  <td className="px-6 py-4">
                    <div className="font-medium">{item.name}</div>
                    {item.description && (
                      <div className="text-sm text-gray-400 mt-1">
                        {item.description}
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 text-right whitespace-nowrap">
                    {formatCurrency(item.price)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Total */}
        <div className="flex justify-between items-center py-4 border-t border-gray-800">
          <span className="text-lg font-medium">Total</span>
          <span className="text-2xl font-semibold">
            {formatCurrency(proposal.total)}
          </span>
        </div>

        {/* Notes */}
        {proposal.notes && (
          <div className="mt-8 p-6 bg-gray-900/50 rounded-lg">
            <h2 className="text-sm font-medium text-gray-400 mb-2">Notes</h2>
            <p className="text-gray-300 whitespace-pre-wrap">{proposal.notes}</p>
          </div>
        )}

        {/* PDF Download */}
        {proposal.pdf_url && (
          <div className="mt-8">
            <a
              href={proposal.pdf_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download PDF
            </a>
          </div>
        )}
      </div>
    </main>
  );
}
