// import { Layers, CalendarDays, Play } from 'lucide-react';

// interface HeroProps { onOpenBooking: () => void; }

// export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => (
//   <div className="flex flex-col items-center pt-16 md:pt-24 px-4 md:px-8 w-full max-w-4xl mx-auto z-10 relative min-h-[60vh] md:min-h-[70vh]">
//     <p className="text-[10px] md:text-[11px] font-bold text-gray-400 tracking-[0.15em] uppercase mb-6 md:mb-8 text-center">
//       100+ MVPs Launched in 2 Weeks
//     </p>

//     <h1 className="text-center text-4xl sm:text-5xl md:text-[4.25rem] leading-[1.1] md:leading-[1.05] font-semibold tracking-super-tight max-w-3xl">
//       <span className="text-[#2B405A]">We design & develop</span><br />
//       <span className="text-[#9CA3AF]">products for founders</span><br />
//       <span className="text-[#2B405A]">who want to win</span> 
      
//       {/* Ticker Animation */}
//       <span className="group/ticker inline-flex items-center justify-center align-middle mx-2 relative -top-1 md:-top-2 w-32 h-14 md:w-46 md:h-[4.8rem] rounded-full overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.05)] ring-1 ring-gray-200/60 select-none pointer-events-auto cursor-pointer isolate transition-all duration-500 hover:shadow-[0_8px_30px_rgba(168,85,247,0.3)] hover:-translate-y-1 hover:scale-[1.02] hover:ring-transparent z-10">
//         <span className="absolute inset-0 bg-linear-to-b from-white/90 to-white/40 backdrop-blur-xl -z-20 transition-opacity duration-300 group-hover/ticker:opacity-0"></span>
//         <span className="absolute -inset-full -z-20 bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] opacity-0 group-hover/ticker:opacity-100 group-hover/ticker:animate-[spin_3s_linear_infinite] transition-opacity duration-300"></span>
//         <span className="absolute inset-0.75 bg-white/95 backdrop-blur-xl rounded-full -z-10 shadow-[inset_0_2px_8px_rgba(255,255,255,0.9)] opacity-0 group-hover/ticker:opacity-100 transition-all duration-300"></span>
        
//         <span className="flex flex-col animate-currency w-full transition-all duration-300 group-hover/ticker:[animation-duration:1.2s]">
//           {[
//             { symbol: '₹', code: 'INR', bg: 'from-emerald-400 to-teal-500', color: 'from-emerald-500 to-teal-500', rotate: 'group-hover/ticker:rotate-12', shadow: 'rgba(52,211,153,0.6)' },
//             { symbol: '$', code: 'USD', bg: 'from-blue-500 to-indigo-500', color: 'from-blue-500 to-indigo-500', rotate: 'group-hover/ticker:-rotate-12', shadow: 'rgba(59,130,246,0.6)' },
//             { symbol: '€', code: 'EUR', bg: 'from-purple-500 to-pink-500', color: 'from-purple-500 to-pink-500', rotate: 'group-hover/ticker:rotate-12', shadow: 'rgba(168,85,247,0.6)' },
//             { symbol: '₣', code: 'CHF', bg: 'from-rose-400 to-orange-500', color: 'from-rose-500 to-orange-500', rotate: 'group-hover/ticker:-rotate-12', shadow: 'rgba(251,113,133,0.6)' },
//           ].map((cur, i) => (
//             <span key={i} className="shrink-0 h-14 md:h-[4.8rem] w-full flex items-center justify-center gap-2 md:gap-3">
//               <span className={`w-8 h-8 md:w-10 md:h-10 rounded-full bg-linear-to-br ${cur.bg} flex items-center justify-center text-white text-lg md:text-xl font-bold shadow-sm transition-all duration-300 group-hover/ticker:scale-125 ${cur.rotate} shadow-[0_0_15px_${cur.shadow}]`}>
//                 {cur.symbol}
//               </span>
//               <span className={`text-xl md:text-2xl font-black text-[#1D2B36] tracking-tight mt-0.5 transition-colors duration-300 group-hover/ticker:text-transparent group-hover/ticker:bg-clip-text group-hover/ticker:bg-linear-to-r ${cur.color}`}>
//                 {cur.code}
//               </span>
//             </span>
//           ))}
//         </span>
//       </span>
//       <span className="text-[#2B405A]">markets.</span>
//     </h1>

//     <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-5 mt-10 md:mt-12 w-full sm:w-auto">
//       <button onClick={onOpenBooking} className="w-full sm:w-auto group relative flex items-center justify-center gap-3 px-6 py-4 bg-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.06)] text-sm font-bold text-[#1D2B36] hover:scale-105 transition-all duration-300 border border-gray-100 overflow-hidden hover:border-blue-200 hover:shadow-[0_8px_40px_rgba(59,130,246,0.15)]">
//         <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-blue-100/40 to-transparent group-hover:animate-[shimmer_1.5s_infinite]"></div>
//         <div className="w-7 h-7 rounded-xl flex items-center justify-center bg-blue-50 text-blue-600 relative z-10 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
//           <CalendarDays className="w-4 h-4" />
//         </div>
//         <span className="relative z-10">Book a Free MVP Call</span>
//       </button>
//       <button className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-4 bg-white rounded-full shadow-soft text-sm font-semibold text-[#1D2B36] hover:scale-105 transition-transform duration-200 border border-gray-100">
//         <div className="w-6 h-6 rounded flex items-center justify-center text-blue-500 bg-blue-50">
//           <Layers className="w-4 h-4 fill-current" />
//         </div>
//         View Our Work
//       </button>
//     </div>

//     <div className="w-full h-75 md:h-150 flex justify-center px-4 md:px-12 mt-16 md:mt-20">
//       <div className="w-full max-w-5xl h-full bg-linear-to-b from-[#6DC5FF] to-[#40A5FF] rounded-t-4xl relative overflow-hidden flex flex-col items-center justify-end shadow-2xl border-t-4 border-x-4 md:border-t-8 md:border-x-8 border-white">
//         <button className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-15 h-15 md:w-22.5 md:h-22.5 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg border border-white/30 hover:bg-white/30 transition-colors">
//           <Play className="w-6 h-6 md:w-10 md:h-10 text-white fill-white ml-1 md:ml-2 opacity-90" />
//         </button>
//       </div>
//     </div>
//   </div>
// );

"use client";
// Cursor spotlight (Aceternity Spotlight) + Flip Words + magnetic CTAs.
import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MagneticButton from "./ui/magnetic-button";
import Reveal from "./ui/reveal";
import { useDrawer } from "@/components/contact-drawer";

const WORDS = ["product", "brand", "motion", "interface"];
import { Layers, CalendarDays, Play } from 'lucide-react';

interface HeroProps { onOpenBooking: () => void; }
const CURRENCIES = [
  { symbol: '₹', code: 'INR', bg: 'from-emerald-400 to-teal-500', color: 'from-emerald-500 to-teal-500', rotate: 'group-hover/ticker:rotate-12', shadow: 'rgba(52,211,153,0.6)' },
  { symbol: '$', code: 'USD', bg: 'from-blue-500 to-indigo-500', color: 'from-blue-500 to-indigo-500', rotate: 'group-hover/ticker:-rotate-12', shadow: 'rgba(59,130,246,0.6)' },
  { symbol: '€', code: 'EUR', bg: 'from-purple-500 to-pink-500', color: 'from-purple-500 to-pink-500', rotate: 'group-hover/ticker:rotate-12', shadow: 'rgba(168,85,247,0.6)' },
  { symbol: '₣', code: 'CHF', bg: 'from-rose-400 to-orange-500', color: 'from-rose-500 to-orange-500', rotate: 'group-hover/ticker:-rotate-12', shadow: 'rgba(251,113,133,0.6)' },
];

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const ref = useRef<HTMLElement>(null);
  const [spot, setSpot] = useState<{ x: number; y: number } | null>(null);
  const [i, setI] = useState(0);
  const { open } = useDrawer();
  

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % WORDS.length), 2600);
    return () => clearInterval(t);
  }, []);

  const activeCur = CURRENCIES[i];
  return(
      <section
      id="top"
      ref={ref}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (r) setSpot({ x: e.clientX - r.left, y: e.clientY - r.top });
      }}
      onMouseLeave={() => setSpot(null)}
      className="relative isolate flex min-h-screen flex-col justify-end px-6 pb-10 pt-33"
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
      <div className="flex flex-col items-center pt-16 md:pt-24 px-4 md:px-8 w-full max-w-4xl mx-auto z-10 relative min-h-[60vh] md:min-h-[70vh]">
        <Reveal>
        <p className="text-[10px] md:text-[11px] font-bold text-gray-400 tracking-[0.15em] uppercase mb-6 md:mb-8 text-center">
          100+ MVPs Launched in 2 Weeks
        </p>
        </Reveal>
        <Reveal>
          <h1 className="text-center text-4xl sm:text-5xl md:text-[4.25rem] leading-[1.1] md:leading-[1.05] font-semibold tracking-super-tight max-w-3xl">
            <span className="text-[#2B405A]">We design & develop</span><br />
            <span className="text-[#9CA3AF]">products for founders</span><br />
            <span className="text-[#2B405A]">who want to win</span> 
            
            {/* Ticker Animation */}
            <span className="group/ticker inline-flex items-center justify-center align-middle mx-2 relative -top-1 md:-top-2 w-32 h-14 md:w-46 md:h-[4.8rem] rounded-full overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.05)] ring-1 ring-gray-200/60 select-none pointer-events-auto cursor-pointer isolate transition-all duration-500 hover:shadow-[0_8px_30px_rgba(168,85,247,0.3)] hover:-translate-y-1 hover:scale-[1.02] hover:ring-transparent z-10">
            <span className="absolute inset-0 bg-linear-to-b from-white/90 to-white/40 backdrop-blur-xl -z-20 transition-opacity duration-300 group-hover/ticker:opacity-0"></span>
            <span className="absolute top-1/2 left-1/2 w-[250%] aspect-square -translate-x-1/2 -translate-y-1/2 -z-20 bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_40%,#393BB2_70%,#E2CBFF_100%)] opacity-0 group-hover/ticker:opacity-100 group-hover/ticker:animate-[spin_3s_linear_infinite] transition-opacity duration-300"></span>
            <span className="absolute inset-[1.5px] -z-10 bg-white/95 backdrop-blur-xl rounded-full opacity-0 group-hover/ticker:opacity-100 transition-opacity duration-300"></span>
              <span className="relative w-full h-full flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={activeCur.code}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.28 }}
                    className="shrink-0 h-full w-full flex items-center justify-center gap-2 md:gap-3"
                  >
                    {/* ICON: Added relative, rotate-360, duration-700, and the inner ping ring */}
                    <span className={`relative w-8 h-8 md:w-10 md:h-10 rounded-full bg-linear-to-br ${activeCur.bg} flex items-center justify-center text-white text-lg md:text-xl font-bold shadow-sm transition-all duration-700 ease-out group-hover/ticker:scale-125 group-hover/ticker:rotate-360 shadow-[0_0_15px_${activeCur.shadow}]`}>
                      {/* Pulsing ring from your button (adjusted to rounded-full) */}
                      <span className="absolute inset-0 rounded-full ring-2 ring-white/60 animate-ping opacity-50"></span>
                      <span className="relative z-10">{activeCur.symbol}</span>
                    </span>

                    {/* TEXT: Removed all hover styles so the text remains static */}
                    <span className="text-xl md:text-2xl font-black text-[#1D2B36] tracking-tight mt-0.5">
                      {activeCur.code}
                    </span>
                  </motion.span>
                </AnimatePresence>
              </span>
            </span>
            <span className="text-[#2B405A]">markets.</span>
          </h1>
        </Reveal>

        <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-5 mt-10 md:mt-12 w-full sm:w-auto">
          <button onClick={onOpenBooking} className="w-full sm:w-auto group relative flex items-center justify-center gap-3 px-6 py-4 bg-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.06)] text-sm font-bold text-[#1D2B36] hover:scale-105 transition-all duration-300 border border-gray-100 overflow-hidden hover:border-blue-200 hover:shadow-[0_8px_40px_rgba(59,130,246,0.15)]">
            <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-blue-100/40 to-transparent group-hover:animate-[shimmer_1.5s_infinite]"></div>
            <div className="w-7 h-7 rounded-xl flex items-center justify-center bg-blue-50 text-blue-600 relative z-10 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
              <CalendarDays className="w-4 h-4" />
            </div>
            <span className="relative z-10">Book a Free MVP Call</span>
          </button>
          <button className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-4 bg-white rounded-full shadow-soft text-sm font-semibold text-[#1D2B36] hover:scale-105 transition-transform duration-200 border border-gray-100">
            <div className="w-6 h-6 rounded flex items-center justify-center text-blue-500 bg-blue-50">
              <Layers className="w-4 h-4 fill-current" />
            </div>
            View Our Work
          </button>
        </div>
        <div className="flex w-full justify-end gap-2.5 border-t border-line pt-6.5 mt-8.5">
          <span className="mono animate-bob text-[9px] text-ink-32">↓ scroll</span>
        </div>
      </div>
      </section>
  );
}