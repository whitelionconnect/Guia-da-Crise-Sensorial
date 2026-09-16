import React from 'react';
import { AudienceSection } from './components/AudienceSection';
import { BonusesSection } from './components/BonusesSection';
import { CrisisVsTantrumSection } from './components/CrisisVsTantrumSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { GuaranteeSection } from './components/GuaranteeSection';
import { HeroSection } from './components/HeroSection';
import { PricingOfferSection } from './components/PricingOfferSection';
import { ProductContentsSection } from './components/ProductContentsSection';
import { ProtocolTimelineSection } from './components/ProtocolTimelineSection';
import { SocialProofTicker } from './components/SocialProofTicker';
import { StickyMobileBar } from './components/StickyMobileBar';
import { StoryWhySection } from './components/StoryWhySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { TopAnnouncementBar } from './components/TopAnnouncementBar';
import { TriggerDiagnosticQuiz } from './components/TriggerDiagnosticQuiz';
import { CHECKOUT_URL } from './data/landingData';

export default function App() {
  const scrollToOffer = () => {
    const offerElement = document.getElementById('comprar');
    if (offerElement) {
      offerElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', 'InitiateCheckout');
      }
      window.open(CHECKOUT_URL, '_blank', 'noopener,noreferrer');
    }
  };

  const handleFinalCheckout = (_includeBump?: boolean) => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'InitiateCheckout');
    }
    window.open(CHECKOUT_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#24282D] flex flex-col font-sans">
      {/* Top Urgency & Social Proof Announcement */}
      <TopAnnouncementBar />

      {/* Floating social proof notifications */}
      <SocialProofTicker />

      {/* Hero Section with Carousel & Direct CTAs */}
      <HeroSection onCtaClick={scrollToOffer} />

      {/* Distinction: Tantrum vs Sensory Meltdown (Empathetic conversion hook) */}
      <CrisisVsTantrumSection />

      {/* Who is this guide for */}
      <AudienceSection />

      {/* The 3-Step Protocol: Minute-by-Minute Breakdown */}
      <ProtocolTimelineSection onCtaClick={scrollToOffer} />

      {/* Interactive Trigger Diagnostic Tool */}
      <TriggerDiagnosticQuiz onCtaClick={scrollToOffer} />

      {/* Everything included in the delivery */}
      <ProductContentsSection />

      {/* The 2 Free Bonuses with real mockup assets */}
      <BonusesSection />

      {/* Customer reviews & social proof */}
      <TestimonialsSection />

      {/* Emotional story & origin of the guide */}
      <StoryWhySection />

      {/* 7-Day Unconditional Guarantee */}
      <GuaranteeSection />

      {/* Main Pricing Block with Order Bump and Cakto link */}
      <PricingOfferSection onCheckout={handleFinalCheckout} />

      {/* Final reassurance banner with CTA */}
      <FinalCtaSection onCtaClick={scrollToOffer} />

      {/* Frequently Asked Questions Accordion */}
      <FaqSection />

      {/* Footer with security and legal information */}
      <Footer />

      {/* Mobile Sticky CTA button */}
      <StickyMobileBar onCtaClick={scrollToOffer} />
    </div>
  );
}
