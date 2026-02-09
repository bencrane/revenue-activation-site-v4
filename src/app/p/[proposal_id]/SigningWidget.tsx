"use client";

import { EmbedSignDocument } from "@documenso/embed-react";

interface SigningWidgetProps {
  token: string;
  clientName: string;
}

const customCss = `
  /* Dark theme overrides */
  :root {
    --background: #000000 !important;
    --foreground: #ffffff !important;
    --card: #0a0a0a !important;
    --card-foreground: #ffffff !important;
    --primary: #ffffff !important;
    --primary-foreground: #000000 !important;
    --secondary: #171717 !important;
    --secondary-foreground: #ffffff !important;
    --muted: #171717 !important;
    --muted-foreground: #a3a3a3 !important;
    --border: #262626 !important;
    --input: #171717 !important;
    --ring: #ffffff !important;
  }

  /* Force dark backgrounds */
  body, .bg-background, [data-theme] {
    background-color: #000000 !important;
    color: #ffffff !important;
  }

  /* Style the signing panel */
  .bg-card, .bg-white, [class*="bg-card"] {
    background-color: #0a0a0a !important;
    border-color: #262626 !important;
  }

  /* Primary buttons - white instead of green */
  .bg-primary, button[class*="bg-primary"], [class*="btn-primary"] {
    background-color: #ffffff !important;
    color: #000000 !important;
  }

  .bg-primary:hover {
    background-color: #e5e5e5 !important;
  }

  /* Inputs */
  input, textarea, [class*="input"] {
    background-color: #171717 !important;
    border-color: #262626 !important;
    color: #ffffff !important;
  }

  /* Text colors */
  .text-muted-foreground, [class*="text-muted"] {
    color: #a3a3a3 !important;
  }

  /* Borders */
  .border, [class*="border"] {
    border-color: #262626 !important;
  }
`;

export default function SigningWidget({ token, clientName }: SigningWidgetProps) {
  return (
    <EmbedSignDocument
      token={token}
      name={clientName}
      lockName={true}
      className="w-full h-full"
      css={customCss}
      onDocumentCompleted={() => {
        window.location.reload();
      }}
    />
  );
}
