"use client";

import { useContext } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ScrollContext } from "@/components/ui/app-layout";

export default function ScrollProgress() {
  const scrollContainer = useContext(ScrollContext);

  const { scrollYProgress } = useScroll({
    container: scrollContainer,
  });

  // Add a spring smoothing effect to the progress value
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed inset-x-0 top-0 z-70 h-0.5 bg-line">
      <motion.div 
        className="h-full origin-left bg-ink" 
        style={{ scaleX }} 
      />
    </div>
  );
}