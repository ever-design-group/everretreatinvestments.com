# Ever Retreat Homepage - Page Topology

## Overview
- **Target:** https://www.everretreat.com/
- **Framework:** Next.js (App Router)
- **Font:** DM Sans (via next/font)
- **Colors:** Black (#000), White (#fff), Off-white (#fafafa), Gray (#f0f0f0), Light gray (#ededed)
- **Design style:** Minimal, editorial, large typography, black/white contrast

## Page Structure (Top to Bottom)

### Fixed Elements
1. **Header/Nav** - Fixed top, black bg (rgba(0,0,0,0.95)), height 80px, backdrop-blur(12px), z-index 50
2. **WhatsApp floating button** - Fixed bottom-right
3. **Mobile enquiry bar** - Fixed bottom (mobile only)

### Main Content Sections

| # | Section Name | Classes | Background | Height (desktop) |
|---|---|---|---|---|
| 0 | **Hero** | `relative h-[100svh] w-full overflow-hidden` | Image + gradient | 900px |
| 1 | **Stats Bar** | `bg-brand-black py-8 md:py-12` | Black | 178px |
| 2 | **About** | `bg-brand-white py-16 md:py-32` | White | 750px |
| 3 | **Featured In / Press** | `bg-brand-white py-8 md:py-12 overflow-hidden` | White | 200px |
| 4 | **Current Developments** | `bg-[#f0f0f0] py-16 md:py-28` | #f0f0f0 | 1962px |
| 5 | **CTA - Get Prices** | `relative overflow-hidden bg-brand-black py-16 md:py-20` | Black | 501px |
| 6 | **What We Do / Services** | `bg-brand-white py-20 md:py-28` | White | 2200px |
| 7 | **CTA - Bring Villa to Life** | `bg-brand-white` | White | 173px |
| 8 | **Why Ever Retreat** | `bg-brand-off-white py-16 md:py-32` | #fafafa | 1424px |
| 9 | **Awards & Achievements** | `bg-brand-black py-16 md:py-24` | Black | 829px |
| 10 | **Why Rwanda** | `bg-brand-white py-16 md:py-32` | White | 866px |
| 11 | **Invest in Rwanda CTA** | `bg-brand-off-white` | #fafafa | 173px |
| 12 | **Social Following** | `bg-brand-white py-10 md:py-14 border-y border-brand-gray-100` | White | 227px |
| 13 | **How It Works** | `bg-brand-black py-16 md:py-32` | Black | 871px |
| 14 | **Free Tool - Calculator** | `bg-brand-off-white py-16 md:py-32` | #fafafa | 750px |
| 15 | **Free Guide** | `relative bg-brand-black py-20 md:py-28 overflow-hidden` | Black | 562px |
| 16 | **Where to Invest** | `bg-brand-white py-16 md:py-28` | White | 1071px |
| 17 | **Our Work / Portfolio** | `bg-brand-off-white py-16 md:py-32` | #fafafa | 1409px |
| 18 | **Testimonials** | `relative py-20 md:py-32 overflow-hidden` | Image bg | 678px |
| 19 | **Our Team** | `bg-brand-white py-16 md:py-28` | White | 751px |
| 20 | **FAQ** | `bg-brand-off-white py-16 md:py-28` | #fafafa | 516px |
| 21 | **Blog** | `bg-brand-white py-16 md:py-28` | White | 813px |
| 22 | **Newsletter** | `bg-brand-off-white py-16 md:py-28` | #fafafa | 403px |
| 23 | **Final CTA** | `relative py-20 md:py-28 overflow-hidden` | Image bg | 795px |
| 24 | **Footer** | `bg-brand-black` | Black | ~800px |

## Interaction Models
- **Hero:** Static with background image + gradient overlay
- **Stats Bar:** Static
- **About:** Static
- **Featured In:** Static (logo marquee)
- **Current Developments:** Static (cards with links)
- **CTA sections:** Static (links to WhatsApp/contact)
- **Services:** Static (cards with links)
- **Why Ever Retreat:** Static (numbered list)
- **Awards:** Static (cards with links)
- **Why Rwanda:** Static (stats + link)
- **Social Following:** Static (social links)
- **How It Works:** Static (numbered steps)
- **Testimonials:** Click-driven (carousel with 3 testimonials, dot indicators)
- **FAQ:** Click-driven (accordion)
- **Blog:** Static (cards with links)
- **Newsletter:** Static (form)
- **Footer:** Static (links)

## Key Design Tokens
- **Font:** DM Sans (400, 500, 600, 700 weights)
- **Colors:**
  - `brand-black`: #000000
  - `brand-white`: #ffffff
  - `brand-off-white`: #fafafa
  - `brand-gray-100`: #ededed
  - `brand-gray-400`: #aaaaaa
  - `brand-gray-500`: #777777
  - `brand-gray-600`: #373737
- **Section padding:** py-16 (64px) mobile, py-28/32 (112-128px) desktop
- **Max width:** 1440px
- **Border radius:** 4px (buttons)
- **Button styles:** 12px 32px padding, 14px font, 600 weight, 4px radius