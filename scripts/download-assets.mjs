import { mkdir, writeFile } from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, "..", "public");

const assets = [
  // Logos
  {
    url: "https://www.everretreat.com/images/logos/logo-white-full.webp",
    path: "images/logos/logo-white-full.webp",
  },
  // Hero
  {
    url: "https://www.everretreat.com/images/developments/nara-exterior-1.webp",
    path: "images/developments/nara-exterior-1.webp",
  },
  // About
  {
    url: "https://www.everretreat.com/images/about/villa-architecture.webp",
    path: "images/about/villa-architecture.webp",
  },
  // Trust logos
  {
    url: "https://www.everretreat.com/images/trust/featured-in-1.svg",
    path: "images/trust/featured-in-1.svg",
  },
  {
    url: "https://www.everretreat.com/images/trust/featured-in-2.svg",
    path: "images/trust/featured-in-2.svg",
  },
  {
    url: "https://www.everretreat.com/images/trust/featured-in-3.svg",
    path: "images/trust/featured-in-3.svg",
  },
  {
    url: "https://www.everretreat.com/images/trust/featured-in-4.svg",
    path: "images/trust/featured-in-4.svg",
  },
  {
    url: "https://www.everretreat.com/images/trust/featured-in-5.svg",
    path: "images/trust/featured-in-5.svg",
  },
  {
    url: "https://www.everretreat.com/images/trust/featured-in-6.svg",
    path: "images/trust/featured-in-6.svg",
  },
  {
    url: "https://www.everretreat.com/images/trust/featured-in-7.svg",
    path: "images/trust/featured-in-7.svg",
  },
  {
    url: "https://www.everretreat.com/images/trust/marie-claire-logo.png",
    path: "images/trust/marie-claire-logo.png",
  },
  {
    url: "https://www.everretreat.com/images/trust/international-property-travel-logo.webp",
    path: "images/trust/international-property-travel-logo.webp",
  },
  // Developments
  {
    url: "https://www.everretreat.com/images/developments/suku-4br/suku-4br-1.webp",
    path: "images/developments/suku-4br/suku-4br-1.webp",
  },
  {
    url: "https://www.everretreat.com/images/developments/dasa-ubud/dasa-ubud-banner.webp",
    path: "images/developments/dasa-ubud/dasa-ubud-banner.webp",
  },
  // Services
  {
    url: "https://www.everretreat.com/images/portfolio/villa-pool-timber-deck.webp",
    path: "images/portfolio/villa-pool-timber-deck.webp",
  },
  // Team
  {
    url: "https://www.everretreat.com/images/team/dan.webp",
    path: "images/team/dan.webp",
  },
  {
    url: "https://www.everretreat.com/images/team/byron.webp",
    path: "images/team/byron.webp",
  },
  {
    url: "https://www.everretreat.com/images/team/dedi.webp",
    path: "images/team/dedi.webp",
  },
  {
    url: "https://www.everretreat.com/images/team/nyoman.webp",
    path: "images/team/nyoman.webp",
  },
  {
    url: "https://www.everretreat.com/images/team/james.webp",
    path: "images/team/james.webp",
  },
  {
    url: "https://www.everretreat.com/images/team/irene.webp",
    path: "images/team/irene.webp",
  },
  {
    url: "https://www.everretreat.com/images/team/yogi.webp",
    path: "images/team/yogi.webp",
  },
  {
    url: "https://www.everretreat.com/images/team/agung.webp",
    path: "images/team/agung.webp",
  },
  // Blog
  {
    url: "https://www.everretreat.com/images/blog/rwanda-villa-rental-income-blog-hero.webp",
    path: "images/blog/rwanda-villa-rental-income-blog-hero.webp",
  },
  {
    url: "https://www.everretreat.com/images/blog/best-area-to-invest-in-rwanda-blog-hero.webp",
    path: "images/blog/best-area-to-invest-in-rwanda-blog-hero.webp",
  },
  {
    url: "https://www.everretreat.com/images/blog/can-foreigners-buy-property-in-rwanda-blog-hero.webp",
    path: "images/blog/can-foreigners-buy-property-in-rwanda-blog-hero.webp",
  },
  {
    url: "https://www.everretreat.com/images/blog/lake-kivu-vs-musanze-invest-blog-hero.webp",
    path: "images/blog/lake-kivu-vs-musanze-invest-blog-hero.webp",
  },
  // Portfolio
  {
    url: "https://www.everretreat.com/images/developments/casita-alas/casita-alas-5.webp",
    path: "images/developments/casita-alas/casita-alas-5.webp",
  },
  // Hero images
  {
    url: "https://www.everretreat.com/images/hero/nara-hero-poster.webp",
    path: "images/hero/nara-hero-poster.webp",
  },
  {
    url: "https://www.everretreat.com/images/hero/aerial-rwanda.webp",
    path: "images/hero/aerial-rwanda.webp",
  },
  {
    url: "https://www.everretreat.com/images/hero/rwanda-landscape.webp",
    path: "images/hero/rwanda-landscape.webp",
  },
  // Services
  {
    url: "https://www.everretreat.com/images/services/villa-design.webp",
    path: "images/services/villa-design.webp",
  },
  {
    url: "https://www.everretreat.com/images/services/villa-exterior.webp",
    path: "images/services/villa-exterior.webp",
  },
  {
    url: "https://www.everretreat.com/images/services/villa-kitchen-lived-in.webp",
    path: "images/services/villa-kitchen-lived-in.webp",
  },
  {
    url: "https://www.everretreat.com/images/services/land-aerial.webp",
    path: "images/services/land-aerial.webp",
  },
  {
    url: "https://www.everretreat.com/images/services/development-partner.webp",
    path: "images/services/development-partner.webp",
  },
  {
    url: "https://www.everretreat.com/images/services/calculator-lifestyle.webp",
    path: "images/services/calculator-lifestyle.webp",
  },
  {
    url: "https://www.everretreat.com/images/services/villa-management-hero.webp",
    path: "images/services/villa-management-hero.webp",
  },
  // Awards
  {
    url: "https://www.everretreat.com/images/awards/award-16.webp",
    path: "images/awards/award-16.webp",
  },
  {
    url: "https://www.everretreat.com/images/awards/award-14.webp",
    path: "images/awards/award-14.webp",
  },
  {
    url: "https://www.everretreat.com/images/awards/marie-claire-lifestyle.webp",
    path: "images/awards/marie-claire-lifestyle.webp",
  },
  {
    url: "https://www.everretreat.com/images/awards/award-15.webp",
    path: "images/awards/award-15.webp",
  },
  // Areas
  {
    url: "https://www.everretreat.com/images/areas/lake-kivu-area.webp",
    path: "images/areas/lake-kivu-area.webp",
  },
  {
    url: "https://www.everretreat.com/images/areas/kigali-area.webp",
    path: "images/areas/kigali-area.webp",
  },
  {
    url: "https://www.everretreat.com/images/areas/musanze-area.webp",
    path: "images/areas/musanze-area.webp",
  },
  {
    url: "https://www.everretreat.com/images/areas/rubavu-area.webp",
    path: "images/areas/rubavu-area.webp",
  },
  // Portfolio
  {
    url: "https://www.everretreat.com/images/portfolio/villa-dining-rattan-interior.webp",
    path: "images/portfolio/villa-dining-rattan-interior.webp",
  },
  {
    url: "https://www.everretreat.com/images/portfolio/gj-villa.webp",
    path: "images/portfolio/gj-villa.webp",
  },
  {
    url: "https://www.everretreat.com/images/portfolio/suku-terrace.webp",
    path: "images/portfolio/suku-terrace.webp",
  },
  {
    url: "https://www.everretreat.com/images/portfolio/completed-villa-4.webp",
    path: "images/portfolio/completed-villa-4.webp",
  },
  {
    url: "https://www.everretreat.com/images/portfolio/the-hut.webp",
    path: "images/portfolio/the-hut.webp",
  },
  {
    url: "https://www.everretreat.com/images/portfolio/villa-kitchen-living-open.webp",
    path: "images/portfolio/villa-kitchen-living-open.webp",
  },
  // Favicon
  {
    url: "https://www.everretreat.com/favicon.ico",
    path: "seo/favicon.ico",
  },
  {
    url: "https://www.everretreat.com/icon.png",
    path: "seo/icon.png",
  },
  {
    url: "https://www.everretreat.com/apple-icon.png",
    path: "seo/apple-icon.png",
  },
];

async function downloadAsset(asset) {
  const filePath = join(publicDir, asset.path);
  await mkdir(dirname(filePath), { recursive: true });
  try {
    const response = await fetch(asset.url);
    if (!response.ok) {
      console.error(`Failed to download ${asset.url}: ${response.status}`);
      return;
    }
    const buffer = Buffer.from(await response.arrayBuffer());
    await writeFile(filePath, buffer);
    console.log(`Downloaded: ${asset.path}`);
  } catch (error) {
    console.error(`Error downloading ${asset.url}:`, error.message);
  }
}

async function main() {
  console.log("Downloading assets...");
  // Download in batches of 4
  for (let i = 0; i < assets.length; i += 4) {
    const batch = assets.slice(i, i + 4);
    await Promise.all(batch.map(downloadAsset));
  }
  console.log("Asset download complete!");
}

main();
