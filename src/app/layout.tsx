import type { Metadata } from "next";
import { PageTransition } from "@/components/PageTransition";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import "./globals.css";

export const metadata: Metadata = {
    title: "Luxury Eco-Villa Retreats in Rwanda | Ever Retreat",
    description:
    "Award-winning eco-luxury retreats in Rwanda. Architecture, construction, villa management, and property investment - all under one roof.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
      style={{ fontFamily: "'Inter', 'DM Sans', system-ui, -apple-system, sans-serif" }}
    >
      <body className="min-h-full flex flex-col">
        <PageTransition>
          {children}
        </PageTransition>
        <WhatsAppButton />
      </body>
    </html>
  );
}
