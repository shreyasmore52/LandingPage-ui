"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Reveal from "./ui/reveal";
import { QUOTES } from "@/lib/data";

export default function Testimonials() {
  const [on, setOn] = useState<number | null>(null);

  return (
    <section className="px-6 py-27">
      <div className="mx-auto flex w-[min(1180px,100%)] flex-col gap-7.5">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <Reveal>
            <h2 className="max-w-[20ch] text-[clamp(28px,4vw,52px)] text-ink">They said it on camera</h2>
          </Reveal>
          <Reveal>
            <span className="mono text-[10px] text-ink-45">click to expand</span>
          </Reveal>
        </div>
        <div className="flex flex-wrap gap-3.5">
          {QUOTES.map((q, i) => (
            <motion.div
              key={q.name}
              onClick={() => setOn(on === i ? null : i)}
              animate={{ flexGrow: on === i ? 2.4 : 1 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-3/4 max-h-110 min-w-[min(100%,240px)] flex-1 cursor-pointer overflow-hidden rounded-2xl border border-line bg-gradient-to-b from-surface to-surface-2 transition-colors hover:border-[color-mix(in_oklab,var(--ink)_55%,transparent)]"
            >
              <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,var(--grid)_0_12px,transparent_12px_24px)]" />
              <span className="absolute left-1/2 top-[44%] flex size-11.5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-ink text-bg">
                <Play className="size-4" />
              </span>
              <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 bg-gradient-to-t from-veil to-transparent p-4.5 bg-white">
                <motion.span
                  animate={{ opacity: on === i ? 1 : 0, y: on === i ? 0 : 8 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="text-[15px] leading-[1.4] text-ink-80"
                >
                  “{q.line}”
                </motion.span>
                <div className="flex items-center gap-2.5">
                  <span className="size-6.5 rounded-full bg-line-2" />
                  <div className="flex flex-col">
                    <span className="text-xs font-medium text-ink">{q.name}</span>
                    <span className="mono text-[9px] text-ink-45">{q.role}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
