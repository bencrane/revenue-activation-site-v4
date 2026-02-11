import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const satoshi = localFont({
  src: "../../public/fonts/satoshi/Satoshi-Variable.woff2",
  variable: "--font-satoshi",
  weight: "300 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Revenue Activation",
  description: "GTM Engineering for modern sales teams. We build the technical backbone of your revenue motion — automations, systems, and data infrastructure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${satoshi.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
