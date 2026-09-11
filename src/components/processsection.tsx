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

export const ProcessSection: React.FC = () => (
  <div id="services" className="w-full bg-[#F9F9FA] px-4">
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
      <span className="mono text-[10px] text-acc uppercase tracking-widest">The Antidote</span>
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
    <div className="max-w-3xl mx-auto text-center pb-12">
      <h3 className="text-2xl md:text-[2.5rem] font-bold text-[#1D2B36] tracking-tight">
        What's the real Problem?
      </h3>
      <div className="text-[#9CA3AF] text-xl md:text-2xl font-bold tracking-[0.2em] md:tracking-[0.3em] mt-6">
        I N E F F I C I E N C Y
      </div>
      <p className="mt-10 text-base md:text-lg font-medium text-[#718096]">
        Development isn't meant to be slow. It's meant to move <span className="span-bg">fast & scale</span>
      </p>
    </div>

    {/* Section 4: Process Grid */}
    <div className="max-w-5xl mx-auto pb-20 md:pb-32 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 pt-8">
      {processSteps.map((step) => (
        <div key={step.id} className={`relative p-8 rounded-2xl shadow-xl border border-gray-100 transform ${step.rotate} hover:rotate-0 transition-transform duration-300 ${step.bgColor}`}>
          <div className={`absolute w-20 h-6 bg-amber-100/80 backdrop-blur-sm border border-amber-900/10 z-10 tape-clip ${step.tapePos} ${step.tapeRotate}`}></div>
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${step.numBg}`}>
            <span className={`font-bold font-mono ${step.numColor}`}>0{step.id}</span>
          </div>
          <h4 className={`text-xl font-bold mb-3 ${step.textColor}`}>{step.title}</h4>
          <p className={`${step.bgColor === 'bg-[#1D2B36]' ? 'text-gray-400' : 'text-[#718096]'} text-sm leading-relaxed text-left`}>{step.desc}</p>
        </div>
      ))}
    </div>
  </div>
);