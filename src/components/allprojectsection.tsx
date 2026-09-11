"use client"
import { useState } from "react";
import { projectData } from "@/lib/data";
import {  Play, ArrowRight,Image as ImageIcon, 

} from 'lucide-react';


export const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState("Web Apps");
  const categories = Object.keys(projectData);

  return (
    <div id="projects" className="w-full bg-[#F5F6F8] pt-20 md:pt-24 pb-20 md:pb-24 border-t border-gray-100 flex flex-col items-center">
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10 bg-white/50 p-1.5 rounded-3xl md:rounded-full border border-gray-200/60 shadow-sm backdrop-blur-md max-w-[95%]">
        {categories.map(cat => (
          <button 
            key={cat} onClick={() => setActiveTab(cat)}
            className={`whitespace-nowrap px-4 md:px-6 py-2 md:py-2.5 rounded-full text-xs md:text-[13px] font-semibold transition-all duration-300 transform active:scale-95 ${activeTab === cat ? 'bg-white text-[#1D2B36] shadow-[0_2px_10px_rgba(0,0,0,0.06)] scale-105' : 'bg-transparent text-[#718096] hover:bg-gray-200/50 hover:text-[#1D2B36]'}`}
          >{cat}</button>
        ))}
      </div>
      <div className="w-full max-w-6xl px-4 md:px-8 flex flex-col items-center">
        <div className="w-full flex flex-col gap-8 md:gap-12 animate-in fade-in slide-in-from-bottom-4 duration-500" key={activeTab}>
          {projectData[activeTab].map((project, idx) => (
            <div key={idx} className={`w-full min-h-[400px] md:min-h-[500px] rounded-[32px] md:rounded-[40px] p-6 md:p-16 flex flex-col items-center overflow-hidden relative group cursor-pointer border border-gray-100 ${project.bgColor}`}>
              <div className="flex flex-col md:flex-row justify-between items-start w-full relative z-10 gap-4">
                <div className="flex flex-col gap-1 md:gap-2">
                  <h3 className={`text-3xl md:text-5xl font-bold tracking-tight ${project.textColor}`}>{project.title}</h3>
                  <p className={`text-base md:text-xl font-medium opacity-80 ${project.textColor}`}>{project.subtitle}</p>
                </div>
                <div className={`bg-white/60 backdrop-blur-md px-3 md:px-4 py-1.5 md:py-2 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider ${project.textColor} shadow-sm border border-white/40`}>
                  {project.tag}
                </div>
              </div>
              <ProjectMockup type={project.mockupType} />
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white text-[#1D2B36] px-5 md:px-6 py-2.5 md:py-3 rounded-full text-sm font-bold shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2">
                  View Case Study <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

 const ProjectMockup: React.FC<{ type: string; }> = ({ type }) => {
  if (type === 'mobile') return (
    <div className="flex gap-4 md:gap-6 mt-12 transform group-hover:-translate-y-4 transition-transform duration-500 ease-out">
      <div className="w-[140px] md:w-[200px] h-[250px] md:h-[350px] bg-white rounded-t-[24px] md:rounded-t-[32px] shadow-2xl border-t-[4px] md:border-t-[6px] border-x-[4px] md:border-x-[6px] border-gray-100 flex flex-col overflow-hidden relative">
        <div className="w-12 md:w-20 h-3 md:h-5 bg-gray-100 absolute top-0 left-1/2 -translate-x-1/2 rounded-b-xl md:rounded-b-2xl"></div>
        <div className="p-3 md:p-5 flex flex-col gap-2 md:gap-3 mt-4">
          <div className="w-full h-20 md:h-32 bg-gray-200 opacity-40 rounded-lg md:rounded-xl"></div>
          <div className="w-3/4 h-2 md:h-4 bg-gray-100 rounded-full mt-2"></div><div className="w-1/2 h-2 md:h-4 bg-gray-100 rounded-full"></div>
        </div>
      </div>
      <div className="w-[140px] md:w-[200px] h-[280px] md:h-[400px] bg-white rounded-t-[24px] md:rounded-t-[32px] shadow-2xl border-t-[4px] md:border-t-[6px] border-x-[4px] md:border-x-[6px] border-gray-100 flex flex-col overflow-hidden relative mt-4 md:mt-8">
        <div className="w-12 md:w-20 h-3 md:h-5 bg-gray-100 absolute top-0 left-1/2 -translate-x-1/2 rounded-b-xl md:rounded-b-2xl"></div>
        <div className="p-3 md:p-5 flex flex-col gap-2 md:gap-3 mt-4">
          <div className="w-full h-8 md:h-12 bg-gray-50 rounded-lg md:rounded-xl"></div><div className="w-full h-8 md:h-12 bg-gray-50 rounded-lg md:rounded-xl"></div><div className="w-full h-8 md:h-12 bg-gray-50 rounded-lg md:rounded-xl"></div>
        </div>
      </div>
    </div>
  );
  if (type === 'browser') return (
    <div className="w-full max-w-3xl mt-8 md:mt-12 transform group-hover:scale-[1.02] transition-transform duration-500 ease-out">
      <div className="w-full h-[250px] md:h-[400px] bg-white rounded-t-[24px] shadow-2xl border-t border-x border-gray-200 overflow-hidden flex flex-col">
        <div className="h-8 md:h-10 bg-gray-50 border-b border-gray-200 flex items-center px-4 gap-2">
          <div className="flex gap-1.5"><div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-red-400"></div><div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-amber-400"></div><div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-green-400"></div></div>
          <div className="mx-auto w-1/2 h-3 md:h-5 bg-white border border-gray-200 rounded-md"></div>
        </div>
        <div className="flex-1 p-4 md:p-8 flex flex-col items-center justify-center gap-4 md:gap-6">
          <div className="w-32 md:w-48 h-8 md:h-12 bg-blue-100 opacity-40 rounded-xl md:rounded-2xl"></div><div className="w-3/4 h-4 md:h-6 bg-gray-100 rounded-full"></div><div className="w-1/2 h-4 md:h-6 bg-gray-100 rounded-full"></div>
        </div>
      </div>
    </div>
  );
  if (type === 'video' || type === 'branding') return (
    <div className="w-full mt-8 md:mt-12 transform group-hover:scale-[1.02] group-hover:shadow-2xl transition-all duration-700 ease-out h-[250px] md:h-[400px] rounded-[24px] md:rounded-[32px] overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-400 to-blue-600 flex items-center justify-center">
        {type === 'video' ? <button className="w-16 md:w-20 h-16 md:h-20 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/40 transition-colors shadow-lg border border-white/20 z-20"><Play className="w-6 md:w-8 h-6 md:h-8 text-white fill-white ml-1" /></button> : <h1 className="text-white text-5xl md:text-7xl font-black tracking-tighter">Brand</h1>}
      </div>
    </div>
  );
  return (
    <div className="w-full max-w-3xl mt-8 md:mt-12 transform group-hover:-translate-y-2 group-hover:shadow-2xl transition-all duration-500 ease-out flex flex-col md:flex-row gap-4 md:gap-6">
      <div className="w-full md:w-64 h-[200px] md:h-[350px] bg-white rounded-t-[24px] shadow-xl border-t border-x border-gray-200 p-4">
        <div className="w-full h-6 md:h-8 bg-gray-100 rounded-lg mb-4 md:mb-6"></div><div className="w-full h-3 md:h-4 bg-gray-50 rounded mb-2 md:mb-3"></div><div className="w-3/4 h-3 md:h-4 bg-gray-50 rounded mb-2 md:mb-3"></div><div className="w-full h-3 md:h-4 bg-gray-50 rounded mb-2 md:mb-3"></div>
      </div>
      <div className="flex-1 h-[250px] md:h-[400px] bg-white rounded-t-[24px] shadow-xl border-t border-x border-gray-200 p-4 md:p-8">
        <div className="w-full h-20 md:h-32 bg-indigo-50 opacity-50 rounded-xl mb-4 md:mb-6"></div>
        <div className="grid grid-cols-2 gap-3 md:gap-4"><div className="h-16 md:h-24 bg-gray-50 rounded-xl"></div><div className="h-16 md:h-24 bg-gray-50 rounded-xl"></div></div>
      </div>
    </div>
  );
};