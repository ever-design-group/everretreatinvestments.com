import type { MetadataRoute } from "next";

const SITE_URL = "https://everretreatinvestments.com";

// Every real, public, static route in src/app (kept in sync by hand since
// this is a small static site with no dynamic/CMS-driven routes) —
// deliberately excludes /api/* (not a page) and Next's own /_not-found.
const ROUTES = [
  "/",
  "/about",
  "/areas",
  "/areas/akagera",
  "/areas/evane",
  "/areas/huye",
  "/areas/kigali",
  "/areas/musanze",
  "/areas/nyanza",
  "/areas/nyungwe",
  "/areas/rubavu",
  "/blog",
  "/blog/best-area-to-invest-in-rwanda",
  "/blog/can-foreigners-buy-property-in-rwanda",
  "/blog/cost-to-build-villa-in-rwanda",
  "/blog/how-to-build-a-villa-in-rwanda",
  "/blog/lake-kivu-vs-musanze-investment",
  "/blog/rwanda-villa-rental-income",
  "/build-calculator",
  "/buy",
  "/case-study",
  "/choosing-a-rwanda-developer",
  "/contact",
  "/developments",
  "/developments/nara-villas",
  "/developments/solas-kivu",
  "/developments/suku-residences",
  "/faq",
  "/forms",
  "/fractional-ownership",
  "/how-to-buy-property-in-rwanda",
  "/invest-in-rwanda",
  "/packages",
  "/portfolio",
  "/privacy-policy",
  "/process",
  "/real-estate",
  "/refer-a-friend",
  "/rwanda-land-zoning",
  "/services",
  "/services/architecture",
  "/services/construction",
  "/services/development-partnerships",
  "/services/land",
  "/services/villa-management",
  "/terms-and-conditions",
  "/testimonials",
  "/villa-tours",
] as const;

// Legal/utility pages that change rarely and aren't worth crawling often.
const LOW_PRIORITY_ROUTES = new Set(["/privacy-policy", "/terms-and-conditions", "/forms"]);

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ROUTES.map((route) => {
    const depth = route === "/" ? 0 : route.split("/").length - 1;
    const isLowPriority = LOW_PRIORITY_ROUTES.has(route);
    return {
      url: `${SITE_URL}${route}`,
      lastModified: now,
      changeFrequency: isLowPriority ? "yearly" : depth <= 1 ? "weekly" : "monthly",
      priority: isLowPriority ? 0.3 : route === "/" ? 1 : depth === 1 ? 0.8 : 0.6,
    } satisfies MetadataRoute.Sitemap[number];
  });
}
