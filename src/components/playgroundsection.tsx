import {  Sparkles, Folder, Video, 
    Image as ImageIcon, ClipboardCheck, TrendingUp,
    ShoppingBag, AlignLeft, ChevronDown
} from 'lucide-react';


export const PlaygroundSection = () => (
  <div id="playground" className="w-full py-20 md:py-32 border-t border-gray-100 bg-[#F5F6F8] relative overflow-hidden">
    <div className="absolute inset-0 z-0 opacity-60 bg-dots"></div>
    <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 md:gap-8 space-y-6 md:space-y-8">
        
        {/* Abstract UI Component 1: Data to Diagrams */}
        <div className="break-inside-avoid bg-white rounded-4xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:scale-105 hover:shadow-2xl transition-all duration-500 cursor-pointer text-center relative min-h-[260px]">
          <div className="absolute top-4 left-4 w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-xs font-bold text-blue-500 rotate-[-10deg]">YAML</div>
          <div className="absolute bottom-4 right-4 w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center text-xs font-bold text-yellow-600 rotate-[10deg]">JSON</div>
          <h4 className="text-xl md:text-2xl font-serif italic text-[#1D2B36] mt-4 mb-2">Data to Diagrams<br/><span className="font-sans font-black not-italic text-2xl md:text-3xl">in Seconds</span></h4>
          <div className="w-full max-w-[200px] h-24 mx-auto bg-gray-50 border border-gray-200 rounded-xl mt-6 relative overflow-hidden shadow-inner">
            <div className="h-6 bg-gray-100 border-b border-gray-200 flex items-center px-2 gap-1"><div className="w-2 h-2 rounded-full bg-red-400"></div><div className="w-2 h-2 rounded-full bg-yellow-400"></div><div className="w-2 h-2 rounded-full bg-green-400"></div></div>
            <div className="p-2 space-y-1"><div className="w-3/4 h-1.5 bg-green-200 rounded"></div><div className="w-1/2 h-1.5 bg-blue-200 rounded ml-2"></div><div className="w-2/3 h-1.5 bg-purple-200 rounded ml-2"></div></div>
          </div>
        </div>

        {/* Abstract UI Component 2: Happy Files */}
        <div className="break-inside-avoid bg-white rounded-[40px] p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white hover:-translate-y-4 hover:rotate-2 hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col items-center justify-center min-h-[280px]">
          <div className="w-20 md:w-24 h-16 md:h-20 mx-auto bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 rounded-2xl mb-6 relative shadow-lg group-hover:scale-110 transition-transform duration-500">
            <div className="absolute -top-3 left-3 w-10 h-6 bg-blue-400 rounded-t-xl"></div>
            <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-white/50 rounded-full shadow-[0_6px_0_rgba(255,255,255,0.5),0_12px_0_rgba(255,255,255,0.5)]"></div>
          </div>
          <span className="text-[10px] font-black text-gray-400 tracking-[0.2em] uppercase">New</span>
          <h3 className="text-xl md:text-2xl font-black text-[#1D2B36] mt-1 tracking-tight">Happy Files</h3>
          <div className="flex gap-4 mt-4 text-xs font-bold text-gray-400">
            <span className="flex items-center gap-1"><Folder className="w-3 h-3" /> 88</span>
            <span className="flex items-center gap-1"><Video className="w-3 h-3" /> 24</span>
            <span className="flex items-center gap-1"><ImageIcon className="w-3 h-3" /> 89</span>
          </div>
        </div>

        {/* Abstract UI Component 3: Typography Toolbar */}
        <div className="break-inside-avoid bg-white/70 backdrop-blur-xl rounded-[32px] p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white hover:scale-105 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer group">
          <div className="bg-[#F1F2F4] p-1.5 md:p-2 rounded-2xl w-max mx-auto shadow-inner flex items-center gap-1">
            <div className="px-2 md:px-3 text-[10px] md:text-xs font-bold text-gray-500 border-r border-gray-300">4px <ChevronDown className="inline w-3 h-3" /></div>
            <button className="w-8 md:w-10 h-8 md:h-10 bg-white rounded-xl shadow-sm flex items-center justify-center font-bold font-serif text-base md:text-lg group-hover:bg-gray-50 transition-colors">B</button>
            <button className="w-8 md:w-10 h-8 md:h-10 hover:bg-gray-200 rounded-xl flex items-center justify-center italic font-serif text-base md:text-lg">I</button>
            <button className="w-8 md:w-10 h-8 md:h-10 hover:bg-gray-200 rounded-xl flex items-center justify-center underline font-serif text-base md:text-lg">U</button>
            <div className="w-[1px] h-6 bg-gray-300 mx-1 md:mx-2"></div>
            <button className="w-8 md:w-10 h-8 md:h-10 hover:bg-gray-200 rounded-xl flex items-center justify-center"><AlignLeft className="w-4 h-4" /></button>
          </div>
          <div className="mt-6 flex flex-col md:flex-row justify-center items-center gap-3">
            <button className="bg-gradient-to-r from-pink-500 to-rose-400 text-white text-xs font-bold px-4 py-2 rounded-full flex items-center gap-1 shadow-md shadow-pink-500/20"><Sparkles className="w-3 h-3" /> Ask AI</button>
            <div className="bg-gray-100 px-4 py-2 rounded-full text-xs font-medium text-gray-600 flex items-center gap-2">Inter <span className="text-gray-400">Regular</span></div>
          </div>
        </div>

        {/* Abstract UI Component 4: Integration Cards */}
        <div className="break-inside-avoid bg-gradient-to-br from-[#3B82F6] via-[#6366F1] to-[#A855F7] rounded-[40px] p-6 md:p-8 shadow-xl hover:-translate-y-3 hover:shadow-2xl transition-all duration-500 cursor-pointer relative overflow-hidden min-h-[280px] md:min-h-[320px]">
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-48 h-32 bg-white/10 rounded-[30px] border border-white/20 backdrop-blur-md transform rotate-12"></div>
          <div className="flex flex-col gap-4 relative z-10 mt-4 md:mt-8">
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-3 md:p-4 flex items-center gap-3 border border-white/30 text-white shadow-lg translate-x-2 md:translate-x-4 hover:translate-x-4 md:hover:translate-x-6 transition-transform">
              <div className="w-8 md:w-10 h-8 md:h-10 bg-emerald-400 rounded-xl flex items-center justify-center shadow-inner"><ShoppingBag className="w-4 h-4 md:w-5 md:h-5 text-white" /></div>
              <div><div className="font-bold text-xs md:text-sm">Shopify</div><div className="text-[9px] md:text-[10px] text-white/80">New Subscriber - $39.99</div></div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 md:p-4 flex items-center gap-3 border border-white/20 text-white shadow-lg -translate-x-2 md:-translate-x-4 hover:-translate-x-1 md:hover:-translate-x-2 transition-transform">
              <div className="w-8 md:w-10 h-8 md:h-10 bg-emerald-400/50 rounded-xl flex items-center justify-center"><ShoppingBag className="w-4 h-4 md:w-5 md:h-5 text-white/50" /></div>
              <div><div className="font-bold text-xs md:text-sm text-white/80">Shopify</div><div className="text-[9px] md:text-[10px] text-white/50">New Subscriber - $39.99</div></div>
            </div>
          </div>
        </div>

        {/* Abstract UI Component 5: Analytics */}
        <div className="break-inside-avoid bg-white rounded-[32px] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:scale-[1.03] hover:shadow-2xl transition-all duration-500 cursor-pointer relative overflow-hidden group">
          <div className="absolute -right-6 -top-6 w-24 h-24 bg-green-500/10 rounded-full blur-2xl group-hover:bg-green-500/20 transition-colors"></div>
          <h4 className="text-xs md:text-sm font-bold text-gray-400 mb-1">Weekly Growth</h4>
          <div className="text-2xl md:text-3xl font-black text-[#1D2B36] mb-6 flex items-center gap-2 tracking-tight">
            +42.8% <div className="w-5 md:w-6 h-5 md:h-6 bg-green-100 rounded-full flex items-center justify-center"><TrendingUp className="w-3 h-3 text-green-600" /></div>
          </div>
          <div className="flex items-end gap-1.5 h-16 md:h-20 mt-4">
            <div className="w-full bg-gray-100 rounded-t-md h-[30%] group-hover:h-[40%] transition-all duration-300"></div>
            <div className="w-full bg-gray-100 rounded-t-md h-[50%] group-hover:h-[60%] transition-all duration-300 delay-75"></div>
            <div className="w-full bg-gray-100 rounded-t-md h-[20%] group-hover:h-[30%] transition-all duration-300 delay-100"></div>
            <div className="w-full bg-gray-200 rounded-t-md h-[70%] group-hover:h-[80%] transition-all duration-300 delay-150"></div>
            <div className="w-full bg-green-400 rounded-t-md h-[90%] group-hover:h-[100%] transition-all duration-300 shadow-[0_0_12px_rgba(74,222,128,0.5)] delay-200"></div>
          </div>
        </div>

        {/* Abstract UI Component 6: Audit/Settings */}
        <div className="break-inside-avoid bg-white rounded-[32px] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:scale-105 hover:shadow-2xl transition-all duration-500 cursor-pointer">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-red-50 rounded-2xl flex items-center justify-center text-red-500 shadow-inner"><ClipboardCheck className="w-5 h-5" /></div>
            <div><h4 className="font-bold text-sm text-[#1D2B36]">Audit-Ready</h4><p className="text-[10px] text-gray-400">100% compliance built-in</p></div>
          </div>
          <div className="bg-gray-50 rounded-2xl p-2 space-y-1">
            <div className="px-4 py-2 text-xs font-medium text-gray-500 hover:bg-white hover:shadow-sm rounded-xl cursor-pointer transition-all">Accurall</div>
            <div className="px-4 py-2 text-xs font-bold text-red-500 bg-white shadow-sm rounded-xl border border-red-100 flex justify-between items-center cursor-pointer transform scale-[1.02]">
              Costs Roll <div className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)]"></div>
            </div>
            <div className="px-4 py-2 text-xs font-medium text-gray-500 hover:bg-white hover:shadow-sm rounded-xl cursor-pointer transition-all">TES2000</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
