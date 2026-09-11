"use client";

import { useRef, useContext } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Play } from "lucide-react";
import { ScrollContext } from "@/components/ui/app-layout";

export const Reel: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const scrollContainer = useContext(ScrollContext);

  const { scrollYProgress } = useScroll({ 
    target: ref, 
    container: scrollContainer, 
    offset: ["start start", "end end"] 
  });
  
  const rawRotateX = useTransform(scrollYProgress, [0, 0.75], [16, 0]);
  const rawScale = useTransform(scrollYProgress, [0, 0.75], [0.82, 1.1]);
  const rawY = useTransform(scrollYProgress, [0, 0.75], [30, 0]);

  const rotateX = useSpring(rawRotateX, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const scale = useSpring(rawScale, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const y = useSpring(rawY, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    
    <section ref={ref} className="relative h-[180vh] md:h-[240vh] px-4 md:px-6">
      <div className="sticky top-0 flex h-dvh flex-col items-center justify-center gap-4 md:gap-5.5 overflow-hidden w-full max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-2 md:gap-2.5 text-center px-4">
          <span className="mono text-[9px] md:text-[10px] text-ink-45">The reel — 90 seconds</span>
          <h2 className="max-w-[20ch] text-[clamp(26px,4.4vw,58px)] text-ink tracking-tight">Watch a year of work go by</h2>
        </div>
        <motion.div
          style={{ 
            rotateX, 
            scale, 
            y, 
            transformPerspective: 1200, 
            transformOrigin: "50% 20%" 
          }}
          
          className="relative aspect-video w-[92%] sm:w-[85%] max-w-5xl overflow-hidden rounded-[18px] md:rounded-[24px] border border-line-2 bg-surface"
        >
          <div className="absolute inset-0 bg-[repeating-linear-gradient(115deg,var(--grid)_0_22px,transparent_22px_44px)]" />
          <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
            <span className="mono text-[9px] md:text-[10px] text-ink-32">Reel placeholder — drop your mp4 here</span>
          </div>
          <div className="absolute inset-x-3.5 bottom-3.5 flex items-center gap-2.5">
            <span className="flex size-9 items-center justify-center rounded-full bg-ink text-bg transition-colors hover:bg-acc hover:text-acc-ink">
              <Play className="size-3.5" />
            </span>
            <span className="relative h-[3px] flex-1 rounded-sm bg-line-2">
              <span className="absolute inset-y-0 left-0 w-[22%] rounded-sm bg-acc" />
            </span>
            <span className="mono text-[9px] text-ink-45">01:28</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}