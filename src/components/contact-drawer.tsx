"use client";
// Vaul drawer + a vanishing/cycling placeholder (Aceternity Placeholders & Vanish Input).
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { Drawer } from "vaul";
import { X } from "lucide-react";
import MagneticButton from "./ui/magnetic-button";

const PHRASES = ["What are we building?", "Who is it for?", "When does it need to ship?", "What does good look like to you?"];

const Ctx = createContext<{ open: () => void; close: () => void; isOpen: boolean }>({ open: () => {}, close: () => {}, isOpen: false });
export const useDrawer = () => useContext(Ctx);

export function DrawerProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setOpen] = useState(false);
  const value = useMemo(() => ({ isOpen, open: () => setOpen(true), close: () => setOpen(false) }), [isOpen]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export default function ContactDrawer() {
  const { isOpen, close } = useDrawer();
  const [i, setI] = useState(0);
  const field = "rounded-[10px] border border-line bg-bg px-4 py-3.5 text-sm text-ink outline-none transition-colors focus:border-acc";

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % PHRASES.length), 3200);
    return () => clearInterval(t);
  }, []);

  return (
    <Drawer.Root open={isOpen} onOpenChange={(o) => !o && close()}>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 z-80 backdrop-blur-[4px]" style={{ background: "var(--scrim)" }} />
        <Drawer.Content className="fixed inset-x-0 bottom-0 z-81 px-3 pb-3 outline-none">
          <div className="mx-auto flex w-[min(760px,100%)] flex-col gap-4.5 rounded-[22px] border border-line bg-surface p-6.5 shadow-[0_-30px_80px_-20px_var(--shadow)]">
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-col gap-1.5">
                <Drawer.Title className="font-display text-[26px] font-semibold tracking-[-0.035em]">Tell us the shape of it</Drawer.Title>
                <span className="mono text-[9px] text-ink-45">Replies within a day · no forms after this</span>
              </div>
              <button onClick={close} className="flex size-8.5 shrink-0 items-center justify-center rounded-full border border-line-2 text-ink transition-colors hover:bg-hover">
                <X className="size-4" />
              </button>
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] gap-2.5">
              <input placeholder="Your name" className={field} />
              <input placeholder="Email" className={field} />
            </div>
            <input placeholder={PHRASES[i]} className={field} />
            <div className="flex flex-wrap gap-1.5">
              {["Landing page", "Brand", "Product UI", "Motion", "Build"].map((t) => (
                <span key={t} className="mono cursor-pointer rounded-full border border-line-2 px-3 py-2 text-[9px] text-ink-60 transition-colors hover:border-acc hover:text-ink">
                  {t}
                </span>
              ))}
            </div>
            <MagneticButton className="mono border-0 bg-acc px-4 py-4 text-[11px] font-medium text-acc-ink">Send it →</MagneticButton>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
