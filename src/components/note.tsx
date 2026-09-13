"use client";
// Signature draws itself in view (Motion pathLength).
import { motion } from "framer-motion";
import Reveal from "./ui/reveal";

const SIG =
  "M6 52c14-30 24-42 32-40 8 2-6 40 4 42 12 3 20-40 30-38 9 2-4 34 5 36 10 3 18-26 26-24 7 2 0 22 8 22 10 0 18-14 26-14M150 44c22-2 44-6 66-14M232 30c10-4 20-9 28-16";

export default function Note() {
  return (
    <section className="px-6 pb-27">
      <div className="mx-auto flex w-[min(860px,100%)] flex-col gap-5.5 rounded-[20px] border border-line bg-surface p-11">
        <span className="mono text-[10px] text-ink-80">A note from us</span>
        <Reveal>
          <p className="text-[clamp(18px,2.4vw,30px)] leading-[1.4] tracking-[-0.02em] text-pretty text-ink">
            Someday you&apos;ll look back at the first version of this product and remember two things: the moment it finally felt right, and who was in the room.
          </p>
        </Reveal>
        <Reveal>
          <p className="max-w-[52ch] text-[15px] leading-[1.6] text-ink-60">
            If how people perceive the brand matters to you as much as what it does, we&apos;re the right size of team for it.
          </p>
        </Reveal>
        <svg viewBox="0 0 300 70" className="h-auto w-50 overflow-visible text-ink">
          <motion.path
            d={SIG}
            fill="none"
            stroke="currentColor"
            strokeWidth={2.4}
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          />
        </svg>
        <div className="flex flex-col">
          <span className="text-[13px] font-medium text-ink">Founders</span>
          <span className="mono text-[9px] text-ink-45">Rihab s.</span>
        </div>
      </div>
    </section>
  );
}
