"use client";

import { Hero } from '@/components/hero';
import { Reel } from '@/components/reel'
import { ProcessSection } from '@/components/processsection';
import { ProjectsSection } from '@/components/projectssection';
import { PricingSection } from '@/components/pricingsection';
import { FAQSection } from '@/components/faqsection';
import Stats from '@/components/stats';
import LogoMarquee from '@/components/logo-marquee';
import Testimonials from '@/components/testimonials';
import TeamMarquee from '@/components/team-marquee';
import Note from '@/components/note';

export default function Home() {

  return ( 
    <>
      {/* Scrollable Main Content */}
        <Hero />
        <LogoMarquee />
        <Stats />
        <Reel />
        <ProcessSection />
        <ProjectsSection />
        <Testimonials />
        <TeamMarquee />
        <Note />
        <PricingSection />
        <FAQSection />
      </>
     
  );
}
