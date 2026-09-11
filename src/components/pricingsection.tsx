import React, { useState, useEffect, useRef } from 'react';
import { CalendarDays, Plus } from 'lucide-react';

interface PricingProps { onOpenBooking: () => void; }

export const PricingSection: React.FC<PricingProps> = ({ onOpenBooking }) => (
  <div id="pricing" className="w-full bg-[#F1F5F9] py-20 md:py-24 border-t border-gray-100 px-4"> 
    <div className="max-w-4xl mx-auto">
      <h2 className="text-center text-3xl md:text-[2.5rem] font-semibold tracking-tight text-[#1D2B36] mb-12 md:mb-16">
        Clear pricing. <span className="span-bg">No hidden costs.</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> 
        <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm flex flex-col hover:shadow-lg transition-shadow">
          <div className="mb-8">
            <h3 className="text-xl font-bold text-[#1D2B36]">MVP Launch</h3>
            <p className="text-sm text-[#718096] mt-2">Perfect for founders who want to validate fast.</p>
          </div>
          <div className="mb-8"><span className="text-4xl font-bold text-[#1D2B36]">$2,500</span></div>
          <div className="space-y-4 mb-10 flex-1">
            {['Core features only', 'Web or Mobile App', '30 days post-launch support'].map((feature, i) => (
              <div key={i} className="flex items-start gap-3 text-sm text-[#4A5568]">
                <Plus className="w-5 h-5 text-green-500 shrink-0 rotate-45" /> {feature}
              </div>
            ))}
            <div className="flex items-start gap-3 text-sm text-[#4A5568]">
              <CalendarDays className="w-5 h-5 text-gray-400 shrink-0" /> 3 Weeks Timeline
            </div>
          </div>
          <button onClick={onOpenBooking} className="w-full py-4 rounded-xl border-2 border-[#1D2B36] text-[#1D2B36] font-bold hover:bg-[#1D2B36] hover:text-white transition-colors">
            Book a Call
          </button>
        </div>
        <div className="bg-[#1D2B36] p-8 rounded-3xl shadow-xl flex flex-col relative overflow-hidden transform md:scale-105 z-10 hover:shadow-2xl transition-all"> 
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="mb-8 relative z-10">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-bold text-white">Full Product</h3>
              <span className="bg-blue-500 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-sm">Popular</span>
            </div>
            <p className="text-sm text-gray-400 mt-2">For founders ready to launch and scale.</p>
          </div>
          <div className="mb-8 relative z-10"><span className="text-4xl font-bold text-white">$5,000</span></div>
          <div className="space-y-4 mb-10 flex-1 relative z-10">
            {['Mobile app + Web app', 'Custom UI/UX design', 'Complete source code ownership'].map((feature, i) => (
              <div key={i} className="flex items-start gap-3 text-sm text-gray-300">
                <Plus className="w-5 h-5 text-blue-400 shrink-0 rotate-45" /> {feature}
              </div>
            ))}
            <div className="flex items-start gap-3 text-sm text-gray-300">
              <CalendarDays className="w-5 h-5 text-gray-500 shrink-0" /> 5 Weeks Timeline
            </div>
          </div>
          <button onClick={onOpenBooking} className="w-full py-4 rounded-xl bg-blue-500 text-white font-bold hover:bg-blue-600 transition-colors relative z-10 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
            Book a Call
          </button> 
        </div>
      </div> 
    </div>
  </div>
);