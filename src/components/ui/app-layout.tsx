"use client"
import { useState, createContext, useContext, useRef } from 'react';
import { Menu } from 'lucide-react';
import { Sidebar } from '@/components/sidebar';
import { Footer } from '@/components/footer';
import { Modals } from '@/components/modals';
import { useTabTitle } from '@/hooks/use-tab-title';
import ScrollProgress from '@/components/scroll-progress';
import Grain from '@/components/grain';

const ModalContext = createContext({
  openAi: () => {},
  openBooking: () => {},
});

export const ScrollContext = createContext<React.RefObject<HTMLElement | null>>({ current: null });

export const useModals = () => useContext(ModalContext);

export function AppLayout({ children }: { children: React.ReactNode }) {
  useTabTitle();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAiOpen, setIsAiOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const mainScrollRef = useRef<HTMLElement>(null);
  const openAi = () => setIsAiOpen(true);
  const openBooking = () => setIsBookingOpen(true);

  return (
    <ModalContext.Provider value={{ openAi, openBooking }}>
      <ScrollContext.Provider value={mainScrollRef}>
        <div className="h-screen w-screen flex flex-col md:flex-row bg-[#F1F2F4] text-[#1D2B36] box-border relative overflow-hidden font-sans">

          <header className="md:hidden flex items-center justify-between p-4 bg-white shadow-sm z-30 shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md flex items-center justify-center">
                 <img 
                  src="/icon.png" 
                  alt="BuildLabs Logo"
                  className="w-full h-full object-contain" 
                />
              </div>
              <span className="text-lg font-black tracking-tighter text-[#2C3B4E]">Build Labs</span>
            </div>
            <button onClick={() => setIsSidebarOpen(true)} className="p-2 bg-gray-100 rounded-lg">
              <Menu className="w-5 h-5 text-gray-700" />
            </button>
          </header>

          <Sidebar 
            isOpen={isSidebarOpen} 
            setIsOpen={setIsSidebarOpen} 
            onOpenAiChat={openAi} 
            onOpenBooking={openBooking} 
          />

          <main ref={mainScrollRef}
          className="flex-1 bg-[#F9F9FA] md:rounded-4xl shadow-sm flex flex-col relative overflow-y-auto custom-scrollbar md:border border-white md:m-3 md:ml-0 rounded-none h-full">
            <Grain />
            <ScrollProgress />
            {children}

            <Footer onOpenBooking={openBooking} />
          </main>

          <Modals 
            isAiOpen={isAiOpen} 
            setIsAiOpen={setIsAiOpen} 
            isBookingOpen={isBookingOpen} 
            setIsBookingOpen={setIsBookingOpen} 
          />
        </div>
      </ScrollContext.Provider>
    </ModalContext.Provider>
  );
}