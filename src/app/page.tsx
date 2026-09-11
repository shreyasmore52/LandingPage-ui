"use client";
import { useState } from 'react';
import { Hero } from '@/components/hero';
import { Reel } from '@/components/reel'
import { ProcessSection } from '@/components/processsection';
import { ProjectsSection } from '@/components/projectssection';
import { PricingSection } from '@/components/pricingsection';
import { FAQSection } from '@/components/faqsection';
import Stats from '@/components/stats';
import LogoMarquee from '@/components/logo-marquee';
export default function Home() {

  const [isBookingOpen, setIsBookingOpen] = useState(false);
  return ( 
    <>
      {/* Scrollable Main Content */}
        <Hero onOpenBooking={() => setIsBookingOpen(true)} />
        <LogoMarquee />
        <Stats />
        <Reel />
        <ProcessSection />
        <ProjectsSection />
        <PricingSection onOpenBooking={() => setIsBookingOpen(true)} />
        <FAQSection />
      </>
     
  );
}
