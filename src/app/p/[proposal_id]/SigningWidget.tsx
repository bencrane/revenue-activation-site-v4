"use client";

import { EmbedSignDocument } from "@documenso/embed-react";

interface SigningWidgetProps {
  token: string;
  clientName: string;
}

export default function SigningWidget({ token, clientName }: SigningWidgetProps) {
  return (
    <EmbedSignDocument
      token={token}
      name={clientName}
      lockName={true}
      className="w-full h-full"
      darkModeDisabled={false}
      onDocumentCompleted={() => {
        window.location.reload();
      }}
    />
  );
}
