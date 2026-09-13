import { Phone, Sparkles, X } from 'lucide-react';
import { navData, trustedClients } from '@/lib/data';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
  onOpenAiChat: () => void;
  onOpenBooking: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen, onOpenAiChat, onOpenBooking }) => (
  <>
    {/* Mobile Backdrop */}
    {isOpen && (
      <div 
        className="fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity"
        onClick={() => setIsOpen(false)}
      />
    )}

    {/* Sidebar Container */}
    <aside className={`
      fixed md:relative top-0 left-0 h-full w-65 shrink-0 flex flex-col py-6 px-4 z-50 transition-transform duration-300
      ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      bg-[#F1F2F4] md:bg-transparent shadow-2xl md:shadow-none
    `}>
      <button onClick={() => setIsOpen(false)} className="md:hidden absolute top-6 right-4 text-gray-500">
        <X className="w-6 h-6" />
      </button>

      <div className="flex flex-col flex-1">
        {/* Logo */}
        <div className="flex items-center gap-2 px-4 mb-10 mt-2 md:mt-0">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center">
            <img 
                  src="/icon.png" 
                  alt="BuildLabs Logo"
                  className="w-full h-full object-contain" 
                />
          </div>
          <span className="text-2xl font-black tracking-tighter text-[#07090d]">Build Labs</span>
        </div>

        {/* Navigation Menu */}
        <div className="relative p-2.5 rounded-[28px] bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden group/nav-container transition-all duration-500 hover:shadow-[0_8px_30px_rgba(168,85,247,0.12)] hover:border-purple-200/50 hover:bg-white/60">
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-400/20 rounded-full blur-3xl group-hover/nav-container:bg-purple-400/30 group-hover/nav-container:scale-[1.8] transition-all duration-700 ease-in-out"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl group-hover/nav-container:bg-blue-400/30 group-hover/nav-container:scale-[1.8] transition-all duration-700 ease-in-out"></div>

          <div className="relative z-10">
            <nav className="flex flex-col gap-1 w-full">
              {navData.map((item) => (
                <a key={item.id} href={item.href} className="group flex items-center justify-between px-4 py-3 rounded-[20px] text-sm font-medium transition-all duration-300 hover:bg-white hover:shadow-[0_4px_15px_rgba(0,0,0,0.03)] hover:scale-[1.02]">
                  <div className="flex items-center gap-3">
                    <div className={`p-1.5 rounded-lg transition-all duration-300 ${item.colors}`}>
                      <item.icon className="w-4 h-4 icon-wiggle" />
                    </div>
                    <span className={`transition-all duration-300 group-hover:translate-x-1 ${item.id === 'home' ? 'text-[#1A202C] font-semibold group-hover:text-blue-600' : 'text-[#718096]'}`}>
                      {item.label}
                    </span>
                  </div>
                </a>
              ))}
            </nav>

            <div className="mt-4 relative">  
              <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 mt-5 px-4">Start Project</h4>
              <div className="flex flex-col gap-1">
                <button onClick={onOpenBooking} className="w-full group flex items-center gap-3 px-4 py-3 text-sm font-medium text-[#718096] hover:text-[#1A202C] hover:bg-white hover:shadow-[0_4px_15px_rgba(0,0,0,0.03)] hover:scale-[1.02] rounded-[20px] transition-all duration-300">
                  <div className="w-7 h-7 bg-green-100/80 rounded-xl flex items-center justify-center text-green-600 group-hover:bg-green-500 group-hover:text-white group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(34,197,94,0.4)] transition-all duration-300">
                    <Phone className="w-3.5 h-3.5 fill-current" />
                  </div>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Book MVP Call</span>
                </button>

                <button onClick={onOpenAiChat} className="w-full group relative flex items-center gap-3 px-4 py-3 text-sm font-bold text-[#1D2B36] rounded-[20px] transition-all duration-500 cursor-pointer overflow-hidden isolate hover:shadow-[0_8px_30px_rgba(168,85,247,0.3)] hover:-translate-y-1 hover:scale-[1.02]">
                  <div className="absolute inset-0 -z-20 bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] opacity-0 group-hover:opacity-100 group-hover:animate-[spin_3s_linear_infinite] transition-opacity duration-300"></div>
                  <div className="absolute inset-[1.5px] -z-10 bg-white/95 backdrop-blur-xl rounded-[18px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative w-7 h-7 bg-linear-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center text-white shadow-[0_0_12px_rgba(168,85,247,0.6)] group-hover:scale-125 group-hover:rotate-360 transition-all duration-700 ease-out">
                    <span className="absolute inset-0 rounded-xl ring-2 ring-purple-400 animate-ping opacity-50"></span>
                    <Sparkles className="w-3.5 h-3.5 fill-current relative z-10" />
                  </div>
                  <span className="group-hover:translate-x-2 group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-300">AI Strategist</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 mb-2 mt-10">
        <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Trusted By</h4>
        <div className="grid grid-cols-2 gap-y-4 gap-x-2 opacity-90 grayscale hover:grayscale-0 transition-all duration-300">
          {trustedClients.map((client) => (
            <div key={client.id} className="relative group cursor-pointer">
              <div className={`text-[11px] md:text-xs font-bold opacity-50 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300 flex items-center gap-1 ${client.style}`}>
                {client.icon && <client.icon className={`w-3 h-3 ${client.iconColor}`} />}
                {client.customIcon && <div className="w-3 h-3 bg-pink-500 rounded-sm"></div>}
                {client.name}
              </div>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max max-w-35 p-2.5 bg-white rounded-xl shadow-[0_10px_25px_rgba(0,0,0,0.12)] border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:-translate-y-1 translate-y-2 pointer-events-none transition-all duration-300 z-50">
                <div className="flex flex-col gap-0.5">
                  <span className="text-[10px] font-black text-[#1D2B36]">{client.name}</span>
                  <span className="text-[9px] font-medium text-gray-500 leading-tight">{client.desc}</span>
                </div>
                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px border-[5px] border-transparent border-t-white"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  </>
);
