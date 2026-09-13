
  interface FooterProps {
    onOpenBooking: () => void; 
  }


export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => (
  <div className="w-full bg-white py-20 md:py-24 text-center border-t border-gray-100 flex flex-col items-center px-4">
    <div className="max-w-2xl">
      <p className="text-base md:text-lg text-[#718096] font-medium leading-relaxed mb-8 md:mb-12">
        BuildLabs is for founders who care about how people perceive their brand, about how <span className="span-bg-white">fast performance</span> impacts conversion and customer experience.
      </p>
      <p className="text-xl md:text-2xl font-semibold text-[#1D2B36]">
        You don't need ten tools.<br/>You don't need to overthink this.<br/>
        <span className="text-blue-500 mt-4 block">You just need BuildLabs.</span>
      </p>
      <div className="mt-10 md:mt-12 flex justify-center gap-4 mb-16">
        <button onClick={onOpenBooking} className="px-8 py-4 bg-ink text-white rounded-2xl font-bold shadow-lg hover:bg-ink-80 hover:shadow-sm transition-shadow">Start Your Project</button>
      </div>
    </div>
    <div className="w-full max-w-6xl">
      <div className="bg-[#F3F4F6] rounded-3xl md:rounded-[40px] p-8 md:p-14 flex flex-col text-left">
        <div className="flex flex-col md:flex-row justify-between gap-12 border-b border-gray-200/60 pb-12">
          <div className="max-w-xs flex flex-col items-start">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 flex items-center justify-center">
                <img 
                  src="/icon.png" 
                  alt="BuildLabs Logo"
                  className="w-full h-full object-contain" 
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-[#07090d]">Build Labs</span>
            </div>
            <p className="text-sm text-[#718096] font-medium leading-relaxed">We build high-quality MVPs to transform your ideas into reality.</p>
          </div>
          <div className="flex gap-16 md:gap-24">
            <div>
              <h4 className="font-bold text-[#1D2B36] text-sm mb-6">Services</h4>
              <ul className="space-y-4">
                {['MVP Development', 'Web Development', 'UI/UX Design', 'Mobile Apps'].map((l, i) => <li key={i}><a href="#" className="text-sm text-[#718096] hover:text-[#1D2B36] transition-colors font-medium">{l}</a></li>)}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[#1D2B36] text-sm mb-6">About</h4>
              <ul className="space-y-4">
                {['Our Work', 'Testimonials', 'FAQs', 'Contact'].map((l, i) => <li key={i}><a href="/" className="text-sm text-[#718096] hover:text-[#1D2B36] transition-colors font-medium">{l}</a></li>)}
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-8 w-full flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 font-medium gap-4">
          <div>© 2026 BuildLabs. All rights reserved.</div>
          <div className="flex gap-6"><a href="#" className="hover:text-gray-600">Twitter</a><a href="#" className="hover:text-gray-600">LinkedIn</a></div>
        </div>
      </div>
    </div>
  </div>
);