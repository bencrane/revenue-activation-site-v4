"use client";

import { EmbedSignDocument } from "@documenso/embed-react";

interface SigningWidgetProps {
  token: string;
  clientName: string;
}

export default function SigningWidget({ token, clientName }: SigningWidgetProps) {
  return (
    <div className="border border-gray-800 rounded-lg overflow-hidden">
      <EmbedSignDocument
        token={token}
        name={clientName}
        lockName={true}
        className="w-full min-h-[800px]"
        darkModeDisabled={false}
        onDocumentCompleted={() => {
          window.location.reload();
        }}
      />
    </div>
  );
}
