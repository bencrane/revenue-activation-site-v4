export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="mb-12">
          <p className="text-white/40 text-xs tracking-widest uppercase mb-4">
            Rare Structure LLC
          </p>
          <h1 className="text-3xl font-light text-white">Terms of Service</h1>
        </div>

        <div className="text-white/60 text-sm leading-relaxed space-y-8">
          <section>
            <h2 className="text-white/80 font-medium mb-2">1. Scope of Work</h2>
            <p>
              The services to be provided are as outlined in this proposal. Any additional work
              outside the defined scope will require a separate agreement and may incur additional fees.
            </p>
          </section>

          <section>
            <h2 className="text-white/80 font-medium mb-2">2. Payment Terms</h2>
            <p>
              Payment is due as outlined in the proposal. Invoices are payable within 14 days of receipt.
            </p>
          </section>

          <section>
            <h2 className="text-white/80 font-medium mb-2">3. Timeline</h2>
            <p>
              Project timelines will be mutually agreed upon after signing. Delays caused by
              client feedback or resource availability may extend the timeline accordingly.
            </p>
          </section>

          <section>
            <h2 className="text-white/80 font-medium mb-2">4. Intellectual Property</h2>
            <p>
              Upon full payment, all deliverables and work product become the property of the client.
              Rare Structure LLC retains the right to showcase the work in portfolios and case studies
              unless otherwise agreed in writing.
            </p>
          </section>

          <section>
            <h2 className="text-white/80 font-medium mb-2">5. Confidentiality</h2>
            <p>
              Both parties agree to keep confidential any proprietary information shared during
              the engagement. This obligation survives the termination of this agreement.
            </p>
          </section>

          <section>
            <h2 className="text-white/80 font-medium mb-2">6. Limitation of Liability</h2>
            <p>
              Rare Structure LLC's liability is limited to the total amount paid under this agreement.
              Neither party shall be liable for indirect, incidental, or consequential damages.
            </p>
          </section>

          <section>
            <h2 className="text-white/80 font-medium mb-2">7. Termination</h2>
            <p>
              Either party may terminate this agreement with 14 days written notice. Upon termination,
              client is responsible for payment for all work completed up to the termination date.
            </p>
          </section>

          <section>
            <h2 className="text-white/80 font-medium mb-2">8. Governing Law</h2>
            <p>
              This agreement shall be governed by the laws of the State of Delaware, without regard
              to its conflict of laws provisions.
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-[#1a1a1a]">
          <p className="text-white/20 text-xs">
            Rare Structure LLC
          </p>
        </div>
      </div>
    </main>
  );
}
