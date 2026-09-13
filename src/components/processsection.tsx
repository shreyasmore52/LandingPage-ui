"use client";
import { useRef, useContext } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { ScrollContext } from "@/components/ui/app-layout";
import Reveal from "./ui/reveal";
import { processSteps } from "@/lib/data";
import { X, Check } from "lucide-react";

const LINES = [
  "You don't lack vision.",
  "You lack momentum.",
  "Agencies drag your roadmap out for six months.",
  "Freelancers vanish halfway through.",
  "And your product dies in a Slack channel."
];

const SOLUTION_LINES = [
  "One team for brand, motion, and code.",
  "Zero hand-offs. Zero translation loss.",
  "The person designing the interface writes the software.",
  "From blank canvas to fully deployed product in weeks.",
  "Built for speed. Crafted to scale."
];

const WORDS = "INEFFICIENCY".split("");

function Letter({ char, i, n, progress }: { char: string; i: number; n: number; progress: ReturnType<typeof useScroll>["scrollYProgress"] }) {
  const start = (i / n) * 0.5;
  const end = start + 0.25;
  const opacity = useTransform(progress, [start, end], [0.06, 1]);
  const y = useTransform(progress, [start, end], [10, 0]);
  const rotate = useTransform(progress, [start, end], [i % 2 ? 3 : -3, 0]);

  return (
    <motion.span style={{ opacity, y, rotate}} className="inline-block text-ink text-4xl md:text-6xl font-bold tracking-[0.2em] md:tracking-[0.3em] fontFamily: [var(--font-bricolage),'Bricolage Grotesque', sans-serif]">
      {char === " " ? "\u00A0" : char}
    </motion.span>
  );
}

export const ProcessSection: React.FC = () =>  {
  const ref = useRef<HTMLDivElement>(null);
  const scrollContainer = useContext(ScrollContext);
  
  // Dedicated tracker strictly for the Inefficiency word block
  const { scrollYProgress } = useScroll({ 
    target: ref, 
    container: scrollContainer, 
    offset: ["start 60%", "end 40%"],
  });
  return (
  <section id="services" className="w-full bg-[#F9F9FA] px-4 py-20 md:py-32">
  
    {/* Section 1: The Reality */}
    <div className="max-w-3xl mx-auto py-20 md:py-32 text-left">
      <span className="mono text-[10px] text-ink-45 uppercase tracking-widest">The Reality</span>
      <Reveal delay={0.10}>
        <h2 className="text-2xl md:text-4xl font-medium tracking-tight text-ink leading-relaxed mb-16 mt-3">
          Building great software shouldn't feel like<br className="hidden md:block"/>
          <span className="text-ink-60">fighting your own team.</span>
        </h2>
      </Reveal>
      
      <div className="flex flex-col gap-6 max-w-2xl mx-auto">
        {LINES.map((l, i) => (
          <Reveal key={l} delay={i * 0.10}> 
            <div className="flex items-start gap-4">
              <span className="flex-shrink-0 mt-1.5 flex size-6 items-center justify-center rounded-full bg-red-500/10 text-red-500">
                <X className="size-3.5 stroke-[2.5]" />
              </span>
              <p className="text-xl sm:text-2xl md:text-3xl text-ink font-medium leading-snug tracking-tight">
                {l}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>

    {/* Section 2: The Antidote */}
    <div className="max-w-3xl mx-auto pb-20 md:pb-32 text-left border-t border-line pt-20">
      <span className="mono text-[10px] text-ink-45 uppercase tracking-widest">The Antidote</span>
      <Reveal delay={0.10}>
        <h2 className="text-2xl md:text-4xl font-medium tracking-tight text-ink leading-relaxed mb-16 mt-3">
          Design and code live under one roof.<br className="hidden md:block"/>
          <span className="text-ink-60">No friction. Just shipping.</span>
        </h2>
      </Reveal>
      
      <div className="flex flex-col gap-6 max-w-2xl mx-auto">
        {SOLUTION_LINES.map((l, i) => (
          <Reveal key={l} delay={i * 0.10}> 
            <div className="flex items-start gap-4">
              <span className="flex-shrink-0 mt-1.5 flex size-6 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
                <Check className="size-3.5 stroke-[2.5]" />
              </span>
              <p className="text-xl sm:text-2xl md:text-3xl text-ink font-medium leading-snug tracking-tight">
                {l}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>

    {/* Section 3: Summary / Inefficiency Header */}
    <div ref={ref} className="max-w-3xl mx-auto text-center pb-20 md:pb-32 border-t border-line pt-20">
        <h3 className="text-2xl md:text-[1.5rem] font-bold text-ink-45 tracking-tight">
          What's the real Problem?
        </h3>
        <div className="flex flex-nowrap justify-center mt-6 ">
          {WORDS.map((c, i) => (
            <Letter key={i} char={c} i={i} n={WORDS.length} progress={scrollYProgress} />
          ))}
        </div>
        <Reveal delay={0.5}> 
        <p className="mt-10 text-xl/normal md:text-1.9 font-medium text-ink-60">
          Development isn't meant to be slow. It's meant to move <span className="span-bg-white">fast & scale</span>
        </p>
        </Reveal>
      </div>

    {/* Section 4: Process Grid */}
    <div className="max-w-5xl mx-auto pb-20 md:pb-32 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 pt-8">
      {processSteps.map((step) => (
        <div key={step.id} className={`relative p-8 rounded-2xl shadow-xl border border-gray-100 transform ${step.rotate} hover:rotate-0 transition-transform duration-300 ${step.bgColor}`}>
          <div className={`absolute w-20 h-6 bg-amber-100/80 backdrop-blur-sm border border-amber-900/10 z-10 tape-clip ${step.tapePos} ${step.tapeRotate}`}></div>
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${step.numBg}`}>
            <span className={`font-bold font-display ${step.numColor}`}>0{step.id}</span>
          </div>
          <h4 className={`text-xl font-bold mb-3 ${step.textColor}`}>{step.title}</h4>
          <p className={`${step.bgColor === 'bg-ink-80' ? 'text-gray-400' : 'text-[#718096]'} text-sm leading-relaxed text-left`}>{step.desc}</p>
        </div>
      ))}
    </div>
  
  </section>
);
}