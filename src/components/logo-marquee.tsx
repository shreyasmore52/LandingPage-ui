import Marquee from "./ui/marquee";
import { logos } from "@/lib/data";

export default function LogoMarquee() {
  return (
    <section className="border-y border-line px-6 py-6.5">
      <Marquee className="mx-auto w-[min(1180px,100%)]">
        {logos.map((l) => (
          <span key={l} className="whitespace-nowrap font-mono text-[15px] font-medium text-ink-45">
            {l}
          </span>
        ))}
      </Marquee>
    </section>
  );
}
