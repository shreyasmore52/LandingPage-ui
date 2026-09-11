import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Bot, X, Send, Loader } from 'lucide-react';


interface ModalsProps {
  isAiOpen: boolean;
  setIsAiOpen: (v: boolean) => void;
  isBookingOpen: boolean;
  setIsBookingOpen: (v: boolean) => void;
}

export const Modals: React.FC<ModalsProps> = ({ isAiOpen, setIsAiOpen, isBookingOpen, setIsBookingOpen }) => {
  const [messages, setMessages] = useState([{ role: 'model', text: "Hi! I'm the BuildLabs AI Strategist. Tell me a bit about the MVP you want to build!" }]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => { chatEndRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages, isTyping, isAiOpen]);

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages(prev => [...prev, { role: 'user', text: input.trim() }]);
    setInput(''); setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { role: 'model', text: "That sounds like an exciting concept! For a product like that, I'd recommend a lean MVP approach focusing on a fast React frontend. Would you like to **book a call**?" }]);
    }, 1500);
  };

  const [selectedCat, setSelectedCat] = useState('BUILD');
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [selectedDay, setSelectedDay] = useState(8);
  const [selectedTime, setSelectedTime] = useState('10:00 AM');

  return (
    <>
      {/* AI Chat Modal */}
      {isAiOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100] flex justify-center items-center px-4 animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl flex flex-col overflow-hidden h-150 max-h-[90vh] border border-gray-100 animate-in zoom-in-95 duration-200">
            <div className="p-5 bg-[#1D2B36] text-white flex justify-between items-center relative overflow-hidden shrink-0">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center border border-purple-500/30"><Bot className="w-4 h-4 text-purple-400" /></div>
                <div><h3 className="font-bold text-sm">AI Strategist</h3><p className="text-[10px] text-gray-400">Powered by Gemini</p></div>
              </div>
              <button onClick={() => setIsAiOpen(false)} className="text-gray-400 hover:text-white transition-colors relative z-10 p-1"><X className="w-5 h-5" /></button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 md:space-y-5 bg-[#F9F9FA] custom-scrollbar">
              {messages.map((msg, i) => (
                <div key={i} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full shrink-0 flex items-center justify-center shadow-sm ${msg.role === 'user' ? 'bg-blue-100 border border-blue-200' : 'bg-[#1D2B36]'}`}>
                    {msg.role === 'user' ? <span className="text-blue-600 text-xs font-bold">U</span> : <Sparkles className="w-4 h-4 text-yellow-300" />}
                  </div>
                  <div className={`p-3 md:p-4 rounded-2xl shadow-sm text-sm leading-relaxed max-w-[85%] ${msg.role === 'user' ? 'bg-blue-500 text-white rounded-tr-none' : 'bg-white border border-gray-100 text-[#4A5568] rounded-tl-none'}`} dangerouslySetInnerHTML={{ __html: msg.text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                </div>
              ))}
              {isTyping && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#1D2B36] shrink-0 flex items-center justify-center shadow-sm"><Loader className="w-4 h-4 text-yellow-300 animate-spin" /></div>
                  <div className="bg-white border border-gray-100 p-4 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div><div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div><div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>
            <div className="p-4 bg-white border-t border-gray-100 shrink-0">
              <form onSubmit={handleChatSubmit} className="flex gap-2 md:gap-3 relative">
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} className="flex-1 bg-[#F1F2F4] border-transparent focus:border-purple-300 focus:bg-white focus:ring-2 focus:ring-purple-100 rounded-xl px-4 py-3 text-sm outline-none transition-all" placeholder="Message..." />
                <button type="submit" className="bg-[#1D2B36] text-white px-4 md:px-5 py-3 rounded-xl hover:bg-black transition-colors flex items-center justify-center shadow-sm"><Send className="w-4 h-4 text-white -ml-0.5" /></button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Booking Modal */}
      {isBookingOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100] flex justify-center items-center px-4 animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-5xl rounded-3xl md:rounded-4xl shadow-2xl flex flex-col md:flex-row overflow-hidden border border-gray-100 max-h-[90vh] md:max-h-[85vh] animate-in zoom-in-95 duration-200">
            <div className="md:w-5/12 bg-[#13161A] p-6 md:p-10 flex flex-col text-white relative overflow-hidden shrink-0">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10 flex-1">
                <button onClick={() => setIsBookingOpen(false)} className="md:hidden absolute -top-2 -right-2 p-2 text-gray-400 hover:text-white transition-colors"><X className="w-5 h-5" /></button>
                <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-2 pr-8">Tell us the shape of it</h2>
                <div className="space-y-3 mt-8">
                  <div className="text-sm font-medium text-gray-400 mb-4">What do you need help with?</div>
                  <div className="flex flex-wrap gap-2">
                    {['LANDING PAGE', 'BRAND', 'PRODUCT UI', 'MOTION', 'BUILD'].map(cat => (
                      <button key={cat} onClick={() => setSelectedCat(cat)} className={`px-3 py-1.5 md:px-4 md:py-2 rounded-xl text-xs md:text-sm font-medium transition-all duration-200 border ${selectedCat === cat ? 'border-blue-500 bg-blue-500/20 text-blue-400' : 'border-white/10 bg-white/5 hover:bg-white/10'}`}>{cat}</button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="relative z-10 mt-6 md:mt-8 pt-6 md:pt-8 border-t border-white/10">
                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4">Currency</div>
                <div className="flex flex-wrap gap-2">
                  {[{ code: 'INR', symbol: '🇮🇳' }, { code: 'USD', symbol: '🇺🇸' }, { code: 'EUR', symbol: '🇪🇺' }, { code: 'CHF', symbol: '🇨🇭' }].map(cur => (
                    <button key={cur.code} onClick={() => setSelectedCurrency(cur.code)} className={`px-3 py-1.5 rounded-lg border-2 text-xs font-medium flex items-center gap-1.5 transition-all ${selectedCurrency === cur.code ? 'border-blue-500 bg-blue-500/10 text-white' : 'border-transparent bg-white/5 hover:bg-white/10 text-gray-300'}`}>{cur.symbol} {cur.code}</button>
                  ))}
                </div>
              </div>
            </div>
            <div className="md:w-7/12 bg-[#F9F9FA] p-6 md:p-10 flex flex-col relative overflow-y-auto custom-scrollbar">
              <button onClick={() => setIsBookingOpen(false)} className="hidden md:block absolute top-6 right-6 p-2 text-gray-400 hover:text-[#1D2B36] transition-colors rounded-full hover:bg-gray-100"><X className="w-5 h-5" /></button>
              <h3 className="text-lg md:text-xl font-semibold text-[#1D2B36] mb-6 md:mb-8">Select a Date & Time</h3>
              <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
                <div className="flex-1 bg-white p-4 md:p-5 rounded-2xl shadow-sm border border-gray-100">
                  <div className="grid grid-cols-7 gap-1 text-sm">
                     <div className="col-span-7 flex justify-between mb-4"><span className="font-bold">September</span></div>
                    {Array.from({length: 17}, (_, i) => i + 1).map(d => (
                      <button key={d} onClick={() => setSelectedDay(d)} className={`w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center mx-auto transition-colors ${selectedDay === d ? 'bg-blue-600 text-white font-bold shadow-[0_0_12px_rgba(37,99,235,0.4)]' : 'hover:bg-gray-100 text-[#1D2B36]'}`}>{d}</button>
                    ))}
                  </div>
                </div>
                <div className="w-full lg:w-48 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-y-auto lg:h-65 custom-scrollbar pb-2 lg:pb-0 pr-0 lg:pr-2">
                  {['10:00 AM', '11:00 AM', '01:00 PM', '02:30 PM', '04:00 PM'].map(t => (
                    <button key={t} onClick={() => setSelectedTime(t)} className={`min-w-25 lg:w-full py-2.5 rounded-xl border text-sm text-center transition-colors shrink-0 ${selectedTime === t ? 'border-blue-600 bg-blue-50 text-blue-700 font-bold shadow-sm' : 'border-gray-200 hover:border-gray-300 bg-white text-[#1D2B36] font-medium'}`}>{t}</button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};