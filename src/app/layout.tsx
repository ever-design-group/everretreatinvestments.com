import type { Metadata } from "next";
import { Providers } from "@/components/Providers";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import "./globals.css";

export const metadata: Metadata = {
    title: "Luxury Eco-Villa Retreats in Rwanda | Ever Retreat",
    description:
    "Eco-luxury retreats in Rwanda. Architecture, construction, villa management, and property investment - all under one roof.",
    icons: {
        icon: "/seo/favicon.ico",
        apple: "/seo/apple-icon.png",
    },
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
        <Providers>{children}</Providers>
        <WhatsAppButton />
      </body>
    </html>
  );
}
