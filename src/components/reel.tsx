"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

export const Reel: React.FC = () => {
  return (
  
    <section className="relative py-20 md:py-32 px-4 md:px-6 w-full flex flex-col items-center justify-center gap-8 md:gap-12">
      
      <div className="flex flex-col items-center gap-2.5 text-center">
        <span className="mono text-[10px] text-ink uppercase tracking-wider">The reel — 90 seconds</span>
        <h2 className="max-w-[20ch] text-[clamp(28px,4.4vw,58px)] text-ink-80 tracking-tight leading-tight">
          Watch a year of work go by
        </h2>
      </div>

      <motion.div
        
        initial={{ opacity: 0, y: 40, rotateX: 15, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }} 
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} 
        style={{ transformPerspective: 1200 }}
        
        className="group relative aspect-video w-[min(1000px,100%)] overflow-hidden rounded-[18px] md:rounded-[24px] border border-line-2 bg-surface shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] cursor-pointer"
      >
        <div className="absolute inset-0 bg-[repeating-linear-gradient(115deg,var(--grid)_0_22px,transparent_22px_44px)]" />
        
        <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
          <span className="mono text-[10px] text-ink-32">Reel placeholder — drop your mp4 here</span>
        </div>
        
        <div className="absolute inset-x-3.5 bottom-3.5 flex items-center gap-2.5">
          
          <span className="flex size-9 items-center justify-center rounded-full bg-ink text-bg transition-colors group-hover:bg-ink group-hover:text-acc-ink">
            <Play className="size-3.5" />
          </span>
          <span className="relative h-[3px] flex-1 rounded-sm bg-line-2">
            <span className="absolute inset-y-0 left-0 w-[22%] rounded-sm bg-ink transition-all group-hover:w-[100%] duration-1000 ease-out" />
          </span>
          <span className="mono text-[9px] text-ink-45">01:28</span>
        </div>
      </motion.div>

    </section>
  );
};