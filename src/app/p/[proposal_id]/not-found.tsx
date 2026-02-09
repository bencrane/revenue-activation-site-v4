import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-semibold mb-4">Proposal Not Found</h1>
        <p className="text-gray-400 mb-8">
          This proposal may have been removed or the link is incorrect.
        </p>
        <Link
          href="/"
          className="text-gray-400 hover:text-white transition-colors"
        >
          Go to homepage
        </Link>
      </div>
    </main>
  );
}
