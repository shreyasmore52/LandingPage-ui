"use client";
import { useRouter } from 'next/navigation';
import {  ArrowRight } from 'lucide-react';

export const ProjectsSection: React.FC = () => {

  const router = useRouter();

  const handleGoToProjects = () => {
    // You can add logic here before navigating
    console.log("Navigating to projects...");
    
    // Push the user to the new page
    router.push('/projects');
  };
  
  return(
  <div id="projects" className="w-full bg-white py-20 md:py-24 border-t border-gray-100 px-4">
    <div className="max-w-5xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 md:mb-16 gap-4">
        <div>
          <h2 className="text-4xl md:text-[3rem] font-semibold tracking-tight text-[#1D2B36] leading-none mb-4">Our Work</h2>
          <p className="text-[#718096] text-base md:text-lg">Showcasing our expertise and commitment.</p>
        </div>
        <a href="#projects" className="group inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-gray-50 rounded-full text-sm font-semibold text-[#1D2B36] transition-all duration-300 hover:bg-gray-200/70 hover:shadow-sm active:scale-95">
          See All 
          <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
        </a>
        <button 
            onClick={handleGoToProjects}
            className="bg-black text-white px-4 py-2 rounded-lg"
          >
            View Our Work
          </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          { title: 'Ryne AI', desc: 'Undetectable AI Assistant & Content Generator.', tag: 'AI Platform', bg: 'bg-[#F1F5F9]', offset: '' },
          { title: 'ChatDOC', desc: 'Turn Documents into Intelligent Conversations.', tag: 'SaaS App', bg: 'bg-[#EFF6FF]', offset: 'md:mt-16' }
        ].map((proj, idx) => (
          <div key={idx} className={`group cursor-pointer ${proj.offset}`}>
            <div className={`w-full aspect-4/3 ${proj.bg} rounded-3xl overflow-hidden mb-6 relative p-6 md:p-8 flex items-center justify-center border border-gray-100`}>
              {idx === 0 ? (
                <div className="w-full h-full bg-white rounded-xl shadow-lg border border-gray-200 p-4 transform group-hover:scale-105 transition-transform duration-500">
                  <div className="w-full h-8 bg-gray-100 rounded mb-4"></div>
                  <div className="w-3/4 h-4 bg-gray-100 rounded mb-2"></div>
                  <div className="w-1/2 h-4 bg-gray-100 rounded"></div>
                </div>
              ) : (
                <div className="flex gap-4 transform group-hover:-translate-y-2.5 transition-transform duration-500 self-end">
                  <div className="w-24 md:w-32 h-40 md:h-48 bg-white rounded-t-2xl shadow-xl border-t border-x border-gray-200"></div>
                  <div className="w-24 md:w-32 h-48 md:h-56 bg-white rounded-t-2xl shadow-xl border-t border-x border-gray-200"></div>
                </div>
              )}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-gray-600 shadow-sm">{proj.tag}</div>
            </div>
            <h3 className="text-xl font-bold text-[#1D2B36]">{proj.title}</h3>
            <p className="text-[#718096] text-sm mt-2">{proj.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
)};