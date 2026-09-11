"use client";
// Aceternity-style magnetic button: the label drifts toward the cursor.
import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = React.ComponentProps<"button"> & { strength?: number };

export default function MagneticButton({ className, children, strength = 0.2, ...rest }: Props) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useSpring(useMotionValue(0), { stiffness: 260, damping: 22 });
  const y = useSpring(useMotionValue(0), { stiffness: 260, damping: 22 });

  return (
    <motion.button
      ref={ref}
      style={{ x, y }}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        x.set((e.clientX - r.left - r.width / 2) * strength);
        y.set((e.clientY - r.top - r.height / 2) * strength * 1.5);
      }}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      className={cn("cursor-pointer rounded-full", className)}
      {...(rest as React.ComponentProps<typeof motion.button>)}
    >
      {children}
    </motion.button>
  );
}
