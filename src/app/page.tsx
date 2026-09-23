import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { About } from "@/components/About";
import { FeaturedIn } from "@/components/FeaturedIn";
import { HeroSlideshow } from "@/components/HeroSlideshow";
import { Developments } from "@/components/Developments";
import { GetPricesCTA, BringVillaToLifeCTA, InvestInRwandaCTA } from "@/components/CTASections";
import { Services } from "@/components/Services";
import { Awards } from "@/components/Awards";
import { WhyEverRetreat } from "@/components/WhyEverRetreat";
import { WhyRwanda } from "@/components/WhyRwanda";
import { InvestmentMarket } from "@/components/InvestmentMarket";
import { SocialFollowing } from "@/components/SocialFollowing";
import { HowItWorks } from "@/components/HowItWorks";
import { Calculator } from "@/components/Calculator";
import { FreeGuide } from "@/components/FreeGuide";
import { Areas } from "@/components/Areas";
import { Portfolio } from "@/components/Portfolio";
import { Testimonials } from "@/components/Testimonials";
import { Team } from "@/components/Team";
import { FAQ } from "@/components/FAQ";
import { Blog } from "@/components/Blog";
import { Newsletter } from "@/components/Newsletter";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

import { AnimatedSection } from "@/components/AnimatedSection";

export default function Home() {
  return (
    <>
      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Trust Bar */}
        <AnimatedSection animation="fadeIn">
          <TrustBar />
        </AnimatedSection>

        {/* 3. Rest of the page */}
        <AnimatedSection animation="fadeInUp" delay={100}>
          <About />
        </AnimatedSection>
        <AnimatedSection animation="fadeInUp" delay={200}>
          <FeaturedIn />
        </AnimatedSection>
        <AnimatedSection animation="fadeInUp" delay={100}>
          <HeroSlideshow />
        </AnimatedSection>
        <Developments limit={2} variant="overlay" />
        <AnimatedSection animation="fadeIn">
          <GetPricesCTA />
        </AnimatedSection>
        <AnimatedSection animation="fadeInUp" delay={100}>
          <Services />
        </AnimatedSection>
        <AnimatedSection animation="fadeIn">
          <BringVillaToLifeCTA />
        </AnimatedSection>

        {/* fadeIn, not fadeInUp: fadeInUp drives its wrapper's CSS transform
            (translateY) via Framer Motion, and a transform on any ancestor
            breaks position:sticky for elements inside it — WhyEverRetreat's
            left column (md:sticky md:top-28) was never actually sticking,
            it just scrolled normally with the page. fadeIn only animates
            opacity, so it doesn't create that containing block. */}
        <AnimatedSection animation="fadeIn">
          <WhyEverRetreat />
        </AnimatedSection>

        <AnimatedSection animation="fadeInUp" delay={200}>
          <Awards />
        </AnimatedSection>
        <AnimatedSection animation="fadeInUp" delay={100}>
          <WhyRwanda />
        </AnimatedSection>
        <AnimatedSection animation="fadeIn">
          <InvestmentMarket />
        </AnimatedSection>
        <AnimatedSection animation="fadeIn">
          <InvestInRwandaCTA />
        </AnimatedSection>
        <AnimatedSection animation="fadeInUp" delay={100}>
          <SocialFollowing />
        </AnimatedSection>
        <AnimatedSection animation="fadeInUp" delay={200}>
          <HowItWorks />
        </AnimatedSection>
        <AnimatedSection animation="fadeInUp" delay={100}>
          <Calculator />
        </AnimatedSection>
        <AnimatedSection animation="fadeInUp" delay={200}>
          <FreeGuide />
        </AnimatedSection>
        <AnimatedSection animation="fadeInUp" delay={100}>
          <Areas />
        </AnimatedSection>
        <AnimatedSection animation="fadeInUp" delay={200}>
          <Portfolio />
        </AnimatedSection>
        <AnimatedSection animation="fadeInUp" delay={100}>
          <Testimonials />
        </AnimatedSection>
        <AnimatedSection animation="fadeInUp" delay={200}>
          <Team />
        </AnimatedSection>
        <AnimatedSection animation="fadeInUp" delay={100}>
          <FAQ />
        </AnimatedSection>
        <AnimatedSection animation="fadeInUp" delay={200}>
          <Blog />
        </AnimatedSection>
        <AnimatedSection animation="fadeIn">
          <Newsletter />
        </AnimatedSection>
        <AnimatedSection animation="fadeInUp" delay={100}>
          <FinalCTA />
        </AnimatedSection>
      </main>
      <Footer />
    </>
  );
}