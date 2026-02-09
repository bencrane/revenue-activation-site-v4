// TODO: Replace mock data with API call once backend is ready
// const API_BASE = "https://api.serviceengine.xyz";

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
}

// Mock data for design iteration
const MOCK_PROPOSAL: Proposal = {
  id: "d0e3619d-daa1-4ece-b234-9ba6ba3332ef",
  client_email: "sarah@acmecorp.com",
  client_name: "Sarah Chen",
  client_name_f: "Sarah",
  client_name_l: "Chen",
  client_company: "Acme Corporation",
  status: "Sent",
  status_id: 2,
  total: "12500.00",
  notes: "This proposal includes all development work for the initial MVP launch. Payment terms: 50% upfront, 50% on completion.",
  created_at: "2026-02-01T10:00:00Z",
  updated_at: "2026-02-05T14:30:00Z",
  sent_at: "2026-02-05T14:30:00Z",
  signed_at: null,
  converted_order_id: null,
  converted_engagement_id: null,
  items: [
    {
      id: "item-1",
      name: "Discovery & Strategy",
      description: "Initial research, stakeholder interviews, and strategic planning documentation",
      price: "2500.00",
      service_id: null,
      created_at: "2026-02-01T10:00:00Z",
    },
    {
      id: "item-2",
      name: "UI/UX Design",
      description: "Wireframes, high-fidelity mockups, and interactive prototype",
      price: "4000.00",
      service_id: null,
      created_at: "2026-02-01T10:00:00Z",
    },
    {
      id: "item-3",
      name: "Frontend Development",
      description: "React application with responsive design and animations",
      price: "6000.00",
      service_id: null,
      created_at: "2026-02-01T10:00:00Z",
    },
  ],
};

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

  // TODO: Replace with actual API call
  // const proposal = await getProposal(proposal_id);
  const proposal = MOCK_PROPOSAL;

  // Use the proposal_id to show it's being captured (for debugging)
  console.log("Proposal ID:", proposal_id);

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
          <p className="text-gray-500 text-sm mt-1">
            Created {formatDate(proposal.created_at)}
          </p>
        </div>

        {/* Status Badge */}
        <div className="mb-8">
          <span
            className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
              proposal.status === "Signed"
                ? "bg-green-900/50 text-green-400"
                : proposal.status === "Sent"
                  ? "bg-blue-900/50 text-blue-400"
                  : "bg-gray-800 text-gray-400"
            }`}
          >
            {proposal.status}
          </span>
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
      </div>
    </main>
  );
}
