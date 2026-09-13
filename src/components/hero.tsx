"use client";

import { useRef, useState } from "react";
import Reveal from "./ui/reveal";
import { useRouter } from 'next/navigation';
import { useModals } from '@/components/ui/app-layout';

const WORDS = ["product", "brand", "motion", "interface"];
import { Layers, CalendarDays } from 'lucide-react';

export const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const [spot, setSpot] = useState<{ x: number; y: number } | null>(null);

  const router = useRouter();

  const { openBooking } = useModals();

  const handleGoToProjects = () => {
    router.push('/projects');
  };
  
  return(
      <section
      id="top"
      ref={ref}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (r) setSpot({ x: e.clientX - r.left, y: e.clientY - r.top });
      }}
      onMouseLeave={() => setSpot(null)}
      className="relative isolate flex flex-col justify-end px-4 sm:px-3 pb-2 md:pb-6 pt-6 sm:pt-10 md:pt-10"
    >
      <div
        aria-hidden
        className="absolute inset-0 z-0 [mask-image:radial-gradient(120%_90%_at_50%_40%,#000,transparent_78%)]"
        style={{
          backgroundImage: "linear-gradient(var(--grid) 1px,transparent 1px),linear-gradient(90deg,var(--grid) 1px,transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-1 transition-opacity duration-500"
        style={{
          opacity: spot ? 1 : 0,
          background: `radial-gradient(340px 340px at ${spot?.x ?? 0}px ${spot?.y ?? 0}px, color-mix(in oklab, var(--acc) 28%, transparent), transparent 70%)`,
        }}
      />
      <div className="flex flex-col items-center pt-16 md:pt-24 px-4 md:px-8 w-full max-w-4xl mx-auto z-10 relative min-h-[40vh] md:min-h-[30vh]">
        <Reveal>
        <p className="text-[10px] md:text-[11px] font-bold text-gray-400 tracking-[0.15em] uppercase mb-6 md:mb-8 text-center">
          100+ MVPs Launched in 2 Weeks
        </p>
        </Reveal>
        <Reveal>
          <h1 className="text-center text-4xl sm:text-5xl md:text-[4.25rem] leading-[1.1] md:leading-[1.05] font-semibold tracking-super-tight max-w-3xl">
            <span className="text-[#2B405A]">We design & develop</span><br />
            <span className="text-[#9CA3AF]">products for founders</span><br />
            <span className="text-[#2B405A]">who want to win</span> <br />
            <span className="text-[#2B405A]">markets.</span>
          </h1>
        </Reveal>

        <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-5 mt-10 md:mt-12 w-full sm:w-auto">
          <button onClick={openBooking}
            className="w-[280px] sm:w-auto group relative flex items-center justify-center gap-3 px-6 py-4 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] text-sm font-bold text-ink hover:scale-105 transition-all duration-300 border border-gray-200 overflow-hidden hover:border-ink/20 hover:shadow-[0_8px_40px_rgba(29,43,54,0.12)]">
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-ink/5 to-transparent group-hover:animate-[shimmer_1.5s_infinite]"></div>
            <div className="w-7 h-7 rounded-xl flex items-center justify-center bg-gray-100 text-ink relative z-10 group-hover:bg-ink group-hover:text-white transition-colors duration-300">
              <CalendarDays className="w-4 h-4" />
            </div>
            <span className="relative z-10">Book a Free MVP Call</span>
          </button>

          <button onClick={handleGoToProjects}
            className="w-[280px] sm:w-auto group relative flex items-center justify-center gap-3 px-6 py-4 bg-ink rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.1)] text-sm font-bold text-white hover:scale-105 transition-all duration-300 border border-transparent overflow-hidden hover:border-white/20 hover:shadow-[0_8px_40px_rgba(29,43,54,0.3)]">
            <div className="w-7 h-7 rounded-xl flex items-center justify-center bg-white/10 text-white relative z-10 group-hover:bg-white group-hover:text-ink transition-colors duration-300">
              <Layers className="w-4 h-4 " />
            </div>
            <span className="relative z-10">View Our Work</span>
          </button>
        </div>
        <div className="flex w-full justify-end gap-2.5 border-t border-line pt-6.5 mt-8.5">
          <span className="mono animate-bob text-[9px] text-ink-32">↓ scroll</span>
        </div>
      </div>
      </section>
  );
}