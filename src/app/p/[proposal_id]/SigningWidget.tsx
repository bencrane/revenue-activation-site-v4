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
      cssVars={{
        // Dark background
        "--widget-background": "#000000",
        "--widget-foreground": "#ffffff",

        // Card/panel colors
        "--card-background": "#0a0a0a",
        "--card-foreground": "#ffffff",
        "--card-border": "#1a1a1a",

        // Primary button (use your brand color instead of green)
        "--primary": "#ffffff",
        "--primary-foreground": "#000000",

        // Muted/secondary colors
        "--muted": "#171717",
        "--muted-foreground": "#a3a3a3",

        // Border colors
        "--border": "#262626",

        // Input styling
        "--input": "#171717",
        "--input-border": "#262626",
      }}
      onDocumentCompleted={() => {
        window.location.reload();
      }}
    />
  );
}
