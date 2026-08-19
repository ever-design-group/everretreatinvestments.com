import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { StatsBar } from "@/components/StatsBar";
import { About } from "@/components/About";
import { FeaturedIn } from "@/components/FeaturedIn";
import { HeroSlideshow } from "@/components/HeroSlideshow";
import { Developments } from "@/components/Developments";
import { GetPricesCTA, BringVillaToLifeCTA, InvestInRwandaCTA } from "@/components/CTASections";
import { Services } from "@/components/Services";
import { Awards } from "@/components/Awards";
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
import { News } from "@/components/News";
import { Newsletter } from "@/components/Newsletter";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

import { AnimatedSection } from "@/components/AnimatedSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AnimatedSection animation="fadeIn">
          <StatsBar />
        </AnimatedSection>
        <AnimatedSection animation="fadeInUp" delay={100}>
          <About />
        </AnimatedSection>
        <AnimatedSection animation="fadeInUp" delay={200}>
          <FeaturedIn />
        </AnimatedSection>
        <AnimatedSection animation="fadeInUp" delay={100}>
          <HeroSlideshow />
        </AnimatedSection>
        <Developments limit={2} showHeader={false} variant="overlay" />
        <AnimatedSection animation="fadeIn">
          <GetPricesCTA />
        </AnimatedSection>
        <AnimatedSection animation="fadeInUp" delay={100}>
          <Services />
        </AnimatedSection>
        <AnimatedSection animation="fadeIn">
          <BringVillaToLifeCTA />
        </AnimatedSection>
        <AnimatedSection animation="fadeInUp" delay={100}>
          <WhyRwanda />
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
          <News />
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
