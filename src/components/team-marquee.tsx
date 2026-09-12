import Marquee from "./ui/marquee";
import Reveal from "./ui/reveal";
import { TEAM } from "@/lib/data";

export default function TeamMarquee() {
  return (
    <section className="flex flex-col gap-6.5 pb-27">
      <div className="mx-auto w-[min(1180px,100%)] px-6">
        <Reveal>
          <h2 className="max-w-[18ch] text-[clamp(28px,4vw,52px)] text-ink">Six people, one taste</h2>
        </Reveal>
      </div>
      <Marquee gap="gap-3.5">
        {TEAM.map((p) => (
          <div key={p.name} className="flex w-[min(240px,60vw)] flex-col gap-2.5">
            <div className="relative aspect-3/4 overflow-hidden rounded-xl border border-line bg-gradient-to-b from-surface to-surface-2 transition-colors hover:border-ink-32">
              <span className="mono absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[9px] text-ink-32">portrait</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-ink">{p.name}</span>
              <span className="mono text-[9px] text-ink-32">{p.role}</span>
            </div>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
