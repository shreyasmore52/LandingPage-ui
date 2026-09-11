import NumberTicker from "./ui/number-ticker";
import Reveal from "./ui/reveal";
import { stats } from "@/lib/data";

export default function Stats() {
  return (
    <section className="w-full px-6 py-13 flex justify-center">
      <div className="mx-auto flex flex-wrap items-center justify-center gap-8 md:gap-12 w-[min(1180px,100%)]">
        {stats.map((s, i) => (
          <Reveal 
            key={s.label} 
            delay={i * 0.06} 
            className="flex flex-col items-center text-center gap-1.5 min-w-[180px]"
          >
            <span className="font-display text-[clamp(38px,5vw,64px)] text-ink font-semibold leading-none tracking-[-0.04em]">
              {s.prefix}
              <NumberTicker to={s.to} />
              {s.suffix}
            </span>
            <span className="mono text-[10px] text-ink-45">{s.label}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}