// old ui for pricing  
//"use client";
// 
// import { CalendarDays, Plus } from 'lucide-react';
// import { useModals } from '@/components/ui/app-layout';

// // Feed your JSON data here
// const pricingData = {
//   title: "Clear pricing.",
//   highlight: "No hidden costs.",
//   plans: [
//     {
//       id: "mvp-launch",
//       name: "MVP Launch",
//       description: "Perfect for founders who want to validate fast.",
//       price: "$2,500",
//       isPopular: false,
//       features: [
//         "Core features only",
//         "Web or Mobile App",
//         "30 days post-launch support"
//       ],
//       timeline: "3 Weeks Timeline",
//       theme: "light"
//     },
//     {
//       id: "full-product",
//       name: "Full Product",
//       description: "For founders ready to launch and scale.",
//       price: "$5,000",
//       isPopular: true,
//       features: [
//         "Mobile app + Web app",
//         "Custom UI/UX design",
//         "Complete source code ownership"
//       ],
//       timeline: "5 Weeks Timeline",
//       theme: "dark"
//     }
//   ]
// };

// export const PricingSection = () => {
//   const { openBooking } = useModals();

//   return (
//     <div id="pricing" className="w-full bg-[#F1F5F9] py-20 md:py-24 border-t border-gray-100 px-4">
//       <div className="max-w-4xl mx-auto">
//         <h2 className="text-center text-3xl md:text-[2.5rem] font-semibold tracking-tight text-[#1D2B36] mb-12 md:mb-16">
//           {pricingData.title} <span className="span-bg">{pricingData.highlight}</span>
//         </h2>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {pricingData.plans.map((plan) => {
//             const isDark = plan.theme === 'dark';

//             return (
//               <div
//                 key={plan.id}
//                 className={
//                   isDark
//                     ? "bg-[#1D2B36] p-8 rounded-3xl shadow-xl flex flex-col relative overflow-hidden transform md:scale-105 z-10 hover:shadow-2xl transition-all"
//                     : "bg-white p-8 rounded-3xl border border-gray-200 shadow-sm flex flex-col hover:shadow-lg transition-shadow"
//                 }
//               >
//                 {/* Background Glow for Dark Theme */}
//                 {isDark && (
//                   <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
//                 )}
                
//                 <div className="mb-8 relative z-10">
//                   <div className="flex justify-between items-start">
//                     <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-[#1D2B36]'}`}>
//                       {plan.name}
//                     </h3>
//                     {plan.isPopular && (
//                       <span className="bg-blue-500 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-sm">
//                         Popular
//                       </span>
//                     )}
//                   </div>
//                   <p className={`text-sm mt-2 ${isDark ? 'text-gray-400' : 'text-[#718096]'}`}>
//                     {plan.description}
//                   </p>
//                 </div>

//                 <div className="mb-8 relative z-10">
//                   <span className={`text-4xl font-bold ${isDark ? 'text-white' : 'text-[#1D2B36]'}`}>
//                     {plan.price}
//                   </span>
//                 </div>

//                 <div className="space-y-4 mb-10 flex-1 relative z-10">
//                   {plan.features.map((feature, i) => (
//                     <div key={i} className={`flex items-start gap-3 text-sm ${isDark ? 'text-gray-300' : 'text-[#4A5568]'}`}>
//                       <Plus className={`w-5 h-5 shrink-0 rotate-45 ${isDark ? 'text-blue-400' : 'text-green-500'}`} /> 
//                       {feature}
//                     </div>
//                   ))}
//                   <div className={`flex items-start gap-3 text-sm ${isDark ? 'text-gray-300' : 'text-[#4A5568]'}`}>
//                     <CalendarDays className={`w-5 h-5 shrink-0 ${isDark ? 'text-gray-500' : 'text-gray-400'}`} /> 
//                     {plan.timeline}
//                   </div>
//                 </div>

//                 <button
//                   onClick={openBooking}
//                   className={
//                     isDark
//                       ? "w-full py-4 rounded-2xl bg-blue-500 text-white font-bold hover:bg-blue-600 transition-colors relative z-10 shadow-[0_0_20px_rgba(59,130,246,0.3)]"
//                       : "w-full py-4 rounded-2xl border-2 border-[#1D2B36] text-[#1D2B36] font-bold hover:bg-[#1D2B36] hover:text-white transition-colors"
//                   }
//                 >
//                   Book a Call
//                 </button>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Minus, Plus } from "lucide-react";
import { useModals } from "@/components/ui/app-layout"; 

// --- Data & Types ---
type PlanKey = "landing" | "brand" | "ui" | "motion";

const PLANS: Record<PlanKey, { label: string; base: number; days: string; features: string[] }> = {
  landing: { 
    label: "Landing Page", base: 2500, days: "3 Weeks", 
    features: ["Custom Wireframes & UI", "Desktop & Mobile Responsive", "Figma Source File Handoff"] 
  },
  brand: { 
    label: "Brand Identity", base: 3000, days: "4 Weeks", 
    features: ["Logo Concept & Variations", "Brand Guidelines", "Color & Typography Systems"] 
  },
  ui: { 
    label: "Product UI", base: 4500, days: "5 Weeks", 
    features: ["Native iOS / Android Guidelines", "20+ Screens Design System", "Interactive Prototype"] 
  },
  motion: { 
    label: "Product Motion", base: 2800, days: "3 Weeks", 
    features: ["Custom 2D/3D Animations", "Lottie JSON Exports", "UI Interactivity Demos"] 
  }
};

const KEYS = Object.keys(PLANS) as PlanKey[];
const money = (n: number) => "$" + n.toLocaleString("en-US");

// --- Helper Components ---
function Stepper({ value, onChange, min = 0, max = 9 }: { value: number; onChange: (n: number) => void; min?: number; max?: number }) {
  const btnStyle = "flex size-8 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-gray-400 transition-colors hover:bg-gray-700 hover:text-white";
  return (
    <div className="flex items-center gap-3">
      <button className={btnStyle} onClick={() => onChange(Math.max(min, value - 1))}><Minus className="size-4" /></button>
      <span className="mono min-w-[24px] text-center text-sm font-medium text-white">{value}</span>
      <button className={btnStyle} onClick={() => onChange(Math.min(max, value + 1))}><Plus className="size-4" /></button>
    </div>
  );
}

function TerminalTotal({ total, unit, lines, onAction }: { total: number; unit: string; lines: string[]; onAction: () => void }) {
  const [shown, setShown] = useState(total);

  // Smooth number counting animation
  useEffect(() => {
    const from = shown;
    const t0 = performance.now();
    let raf = 0;
    const step = (t: number) => {
      const k = Math.min(1, (t - t0) / 450); // 450ms duration
      const easeOut = 1 - Math.pow(1 - k, 3);
      setShown(Math.round(from + (total - from) * easeOut));
      if (k < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [total]);

  return (
    <div className="sticky top-24 flex flex-col gap-6 rounded-2xl bg-[#0A0C0F] border border-gray-800 p-8 shadow-2xl overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      
      {/* Terminal Header */}
      <div className="flex items-center gap-2 border-b border-gray-800 pb-4 mb-2">
        <div className="w-3 h-3 rounded-full bg-red-500/90"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500/90"></div>
        <div className="w-3 h-3 rounded-full bg-green-500/90"></div>
        <span className="ml-2 font-mono text-[10px] text-gray-600">bash - checkout</span>
      </div>

      <div className="flex flex-col gap-1">
        <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">{unit === "/ month" ? "Per month" : "Your total"}</span>
        <div className="flex items-baseline gap-2 mt-2">
          <span className="text-5xl md:text-6xl font-semibold tracking-tighter text-white font-variant-numeric tabular-nums">
            {money(shown)}
          </span>
          <span className="font-mono text-[10px] text-gray-500">{unit}</span>
        </div>
      </div>

      <div className="flex flex-col gap-3 border-t border-gray-800 pt-6 mt-2">
        {lines.map((l) => (
          <div key={l} className="flex items-start gap-3 text-sm text-gray-400">
            <Check className="mt-0.5 size-4 shrink-0 text-green-500/90" />
            {l}
          </div>
        ))}
      </div>

      <button onClick={onAction} className="mt-4 w-full py-4 inline-flex items-center justify-center gap-2  bg-white text-[#1D2B36] rounded-xl font-bold shadow-[0_0_15px_rgba(226,241,99,0.15)] hover:shadow-[0_0_25px_rgba(226,241,99,0.3)] hover:bg-white transition-all duration-300 animate-glass-sweep">
        Start Project 
        <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
      </button>
    </div>
  );
}

// --- Main Component ---
export const PricingSection = () => {
  const { openBooking } = useModals();
  const [plan, setPlan] = useState<"sprint" | "retainer">("sprint");
  const [tab, setTab] = useState<PlanKey>("landing");
  
  // Modifiers
  const [dev, setDev] = useState(false);
  const [pages, setPages] = useState(0);
  const [anims, setAnims] = useState(0);
  const [tasks, setTasks] = useState(1);

  const sprintTotal = PLANS[tab].base + (dev ? 3000 : 0) + pages * 900 + anims * 750;
  const retainerTotal = 5500 + (tasks - 1) * 2600;
  
  const rowStyle = "flex items-center justify-between rounded-xl border border-gray-800 bg-[#0A0C0F] p-4";

  return (
    <section id="pricing" className="w-full bg-[#1D2B36] py-24 flex flex-col items-center relative border-t border-gray-800 text-white">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "linear-gradient(#374151 1px, transparent 1px), linear-gradient(90deg, #374151 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>

      <div className="mx-auto flex w-full max-w-[1080px] flex-col gap-12 px-6 relative z-10">
        
        {/* Header & Plan Toggle */}
        {/* <div className="flex flex-col md:flex-row items-end md:items-start md:text-left  justify-between gap-6"> */}
        <div className="w-full flex flex-col md:flex-row items-center md:items-end justify-between gap-8 md:gap-6 text-center md:text-left">
          <div className="flex flex-col gap-3">
            <span className="font-mono text-[10px] text-grey uppercase tracking-[0.2em]">Pricing_Matrix</span>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight">
              Fixed price or a <br/>
              <span className="px-2 py-0.5 rounded-sm inline-block -rotate-1 font-bold span-bg">monthly seat.</span>
            </h2>
          </div>

          <div className="flex rounded-full border border-gray-700 bg-black/30 p-1.5 shadow-inner">
            {(["sprint", "retainer"] as const).map((p) => (
              <button key={p} onClick={() => setPlan(p)} className="relative w-[110px] py-2.5">
                {plan === p && (
                  <motion.span 
                    layoutId="plan-pill" 
                    className="absolute inset-0 rounded-full bg-[#ffffff]" 
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }} 
                  />
                )}
                <span className={`relative z-10 font-mono text-[11px] font-bold tracking-wide transition-colors duration-300 ${plan === p ? "text-[#1D2B36]" : "text-gray-400 hover:text-white"}`}>
                  {p === "sprint" ? "ONE-TIME" : "RETAINER"}
                </span>
              </button>
            ))}
          </div>
        </div>

        {plan === "sprint" ? (
          <motion.div 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
            className="flex flex-col gap-6"
          >
            {/* Horizontal Tabs */}
            <div className="relative grid grid-cols-2 md:grid-cols-4 rounded-xl border border-gray-700 bg-[#14171C] p-1.5 overflow-hidden">
              {KEYS.map((k) => (
                <button key={k} onClick={() => setTab(k)} className="relative py-3">
                  {tab === k && (
                    <motion.span 
                      layoutId="tab-bar" 
                      className="absolute inset-0 bg-gray-800 rounded-lg" 
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }} 
                    />
                  )}
                  <span className={`relative z-10 font-mono text-[11px] font-bold transition-colors uppercase ${tab === k ? "text-white" : "text-gray-500 hover:text-gray-300"}`}>
                    {k === 'ui' ? 'PRODUCT UI' : k}
                  </span>
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6 items-start">
              {/* Left Configurator */}
              <div className="flex flex-col gap-8 rounded-2xl border border-gray-700 bg-[#14171C] p-8 shadow-xl">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-3xl font-semibold text-white">{PLANS[tab].label}</h3>
                  <span className="font-mono rounded-full border border-gray-700 bg-gray-800/50 px-3 py-1.5 text-[10px] text-gray-400">{PLANS[tab].days}</span>
                </div>
                
                <div className="flex flex-col gap-4">
                  <div className={rowStyle}>
                    <div className="flex flex-col gap-1">
                      <span className="text-sm font-medium">Add the build</span>
                      <span className="font-mono text-[10px] text-gray-500">Next.js · Tailwind · +$3,000</span>
                    </div>
                    <button
                      onClick={() => setDev((v) => !v)}
                      className={`relative flex h-7 w-12 items-center rounded-full border p-1 transition-colors duration-300 ${dev ? "border-gray-800 bg-[#ffffff]" : "border-gray-700 bg-gray-800"}`}
                    >
                      <motion.span 
                        animate={{ x: dev ? 20 : 0 }} 
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }} 
                        className={`size-4 rounded-full ${dev ? "bg-[#1D2B36]" : "bg-gray-400"}`} 
                      />
                    </button>
                  </div>
                  
                  <div className={rowStyle}>
                    <div className="flex flex-col gap-1">
                      <span className="text-sm font-medium">Extra pages</span>
                      <span className="font-mono text-[10px] text-gray-500">+$900 each</span>
                    </div>
                    <Stepper value={pages} onChange={setPages} />
                  </div>
                  
                  <div className={rowStyle}>
                    <div className="flex flex-col gap-1">
                      <span className="text-sm font-medium">Animations</span>
                      <span className="font-mono text-[10px] text-gray-500">+$750 each</span>
                    </div>
                    <Stepper value={anims} onChange={setAnims} />
                  </div>
                </div>
              </div>
              
              {/* Right Terminal Total */}
              <TerminalTotal total={sprintTotal} unit="one-time" lines={PLANS[tab].features} onAction={openBooking} />
            </div>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6 items-start"
          >
            {/* Left Retainer Card */}
            <div className="flex flex-col gap-6 rounded-2xl border border-gray-700 bg-[#14171C] p-8 shadow-xl">
              <h3 className="text-3xl font-semibold text-white">Design Seat</h3>
              <p className="text-sm leading-relaxed text-gray-400">A dedicated slot in our week. Need UI, motion, or branding? Just add it to the board. No scoping calls needed.</p>
              
              <div className={`${rowStyle} mt-2`}>
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-medium">Active tasks</span>
                  <span className="font-mono text-[10px] text-gray-500">parallel work streams</span>
                </div>
                <Stepper value={tasks} onChange={setTasks} min={1} max={4} />
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {["Landing pages", "Product UI", "Motion", "Brand", "Decks"].map((t) => (
                  <span key={t} className="font-mono rounded-full border border-gray-700 bg-gray-800/50 px-3 py-1.5 text-[10px] text-gray-400">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Terminal Total */}
            <TerminalTotal 
              total={retainerTotal} 
              unit="/ month" 
              lines={["Pause or cancel any month", "Updates every 48 hours", "Unlimited revisions", "Source files, always"]} 
              onAction={openBooking} 
            />
          </motion.div>
        )}
      </div>
    </section>
  );
};