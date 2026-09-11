import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { faqData } from '@/lib/data';


export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleFaq = (index: number) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div id="faq" className="w-full bg-[#F9F9FA] py-20 md:py-32 flex flex-col items-center border-t border-gray-100 px-4">
      <div className="bg-[#1D2B36] text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-8 shadow-sm">FAQ</div>
      <h2 className="text-3xl md:text-5xl font-medium text-[#1D2B36] text-center mb-4 tracking-tight leading-tight">Got Questions? We've Got<br/>Answers</h2>
      <p className="text-[#718096] text-sm md:text-base text-center mb-12 md:mb-16 font-medium">Simple explanations for your most important<br className="hidden md:block" />questions</p>
      <div className="w-full max-w-3xl flex flex-col gap-4">
        {faqData.map((faq, index) => (
          <div key={index} onClick={() => toggleFaq(index)} className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-50 overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
            <div className="px-6 md:px-8 py-5 md:py-6 flex justify-between items-center">
              <h4 className="font-semibold text-[#1D2B36] text-[14px] md:text-[15px] pr-4">{faq.question}</h4>
              <Plus className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openIndex === index ? 'rotate-45' : 'rotate-0'}`} />
            </div>
            {openIndex === index && <div className="px-6 md:px-8 pb-5 md:pb-6 text-sm text-[#718096] leading-relaxed animate-in slide-in-from-top-2 fade-in duration-200">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};