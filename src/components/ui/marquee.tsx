"use client";
// Magic UI-style marquee: duplicates children and pauses on hover.
import { cn } from "@/lib/utils";

export default function Marquee({ children, className, gap = "gap-14" }: { children: React.ReactNode; className?: string; gap?: string }) {
  return (
    <div className={cn("group overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_7%,#000_93%,transparent)]", className)}>
      <div className={cn("flex w-max animate-marquee items-center group-hover:[animation-play-state:paused]", gap)}>
        {children}
        {children}
      </div>
    </div>
  );
}
