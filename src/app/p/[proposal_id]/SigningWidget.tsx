"use client";

import { EmbedSignDocument } from "@documenso/embed-react";

interface SigningWidgetProps {
  token: string;
  clientName: string;
}

export default function SigningWidget({ token, clientName }: SigningWidgetProps) {
  return (
    <div className="mt-12">
      <h2 className="text-xl font-semibold mb-6">Sign to Accept</h2>
      <div className="border border-gray-800 rounded-lg overflow-hidden bg-white">
        <EmbedSignDocument
          token={token}
          name={clientName}
          lockName={true}
          className="w-full min-h-[600px]"
          onDocumentCompleted={() => {
            window.location.reload();
          }}
        />
      </div>
    </div>
  );
}
