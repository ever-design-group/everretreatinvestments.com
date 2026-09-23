import type { Metadata, Viewport } from "next";
import { Providers } from "@/components/Providers";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import "./globals.css";

const SITE_URL = "https://everretreatinvestments.com";
const SITE_NAME = "Ever Retreat";
const DEFAULT_TITLE = "Luxury Eco-Villa Retreats in Rwanda | Ever Retreat";
const DEFAULT_DESCRIPTION =
    "Eco-luxury retreats in Rwanda. Architecture, construction, villa management, and property investment - all under one roof.";
// Real, already-in-use hero photo — not one of the leftover Bali template
// images — so the OG/Twitter preview shows an actual Ever Retreat property.
const DEFAULT_OG_IMAGE = "/images/hero/everretreat.jpeg";

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    // No title template here on purpose: every page's own layout.tsx already
    // hand-appends "| Ever Retreat" (or "| Ever Retreat Rwanda") to its
    // title, so a template would double it up ("... | Ever Retreat | Ever
    // Retreat"). This is just the fallback for the couple of routes with no
    // metadata export of their own (e.g. the homepage).
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    icons: {
        icon: "/seo/favicon.ico",
        apple: "/seo/apple-icon.png",
    },
    // Page-level `openGraph`/`twitter` objects replace this outright (Next
    // doesn't deep-merge them), so any route that sets its own still needs
    // to repeat `images` if it wants a preview at all — this is just the
    // sitewide default for the ~40 routes that don't override it.
    openGraph: {
        type: "website",
        locale: "en_US",
        siteName: SITE_NAME,
        url: SITE_URL,
        title: DEFAULT_TITLE,
        description: DEFAULT_DESCRIPTION,
        images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }],
    },
    twitter: {
        card: "summary_large_image",
        title: DEFAULT_TITLE,
        description: DEFAULT_DESCRIPTION,
        images: [DEFAULT_OG_IMAGE],
    },
    // Safe here specifically because src/app/page.tsx (the homepage) has no
    // layout.tsx of its own, so this canonical IS the homepage's canonical.
    // Every other route sets its own `alternates.canonical` in its own
    // layout.tsx/page.tsx — without that, a shared root value here would
    // make every page without one falsely claim "/" as canonical.
    alternates: {
        canonical: "/",
    },
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    themeColor: "#124341",
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
