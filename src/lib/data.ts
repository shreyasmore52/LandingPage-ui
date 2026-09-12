import { NavItem, Client, ProcessStep, Project, Faq, AllProject, STATS} from '../types/index';

import {  
  House, Layers, Cpu, CircleDollarSign, Hexagon, MessageSquare, Image as ImageIcon
} from 'lucide-react';


const navData: NavItem[] = [
  { id: 'home', label: 'Home', icon: House, href: '#', colors: 'text-[#1A202C] hover:text-blue-600 bg-gray-50 hover:bg-blue-50' },
  { id: 'projects', label: 'Projects', icon: Layers, href: '#projects', colors: 'text-[#718096] hover:text-purple-700 hover:bg-purple-50 group-hover:text-purple-600' },
  { id: 'capabilities', label: 'Capabilities', icon: Cpu, href: '#services', colors: 'text-[#718096] hover:text-amber-700 hover:bg-amber-50 group-hover:text-amber-600' },
  { id: 'pricing', label: 'Pricing', icon: CircleDollarSign, href: '#pricing', colors: 'text-[#718096] hover:text-green-700 hover:bg-green-50 group-hover:text-green-600' },
];

const trustedClients: Client[] = [
  { id: 'typill', name: 'Typill', desc: 'E-commerce MVP • 14 Days', style: 'text-black font-mono' },
  { id: 'goroam', name: 'Go Roam', desc: 'Travel MVP • 10k+ Users', style: 'text-[#1F2937]' },
  { id: 'fincrux', name: 'Fincrux', icon: Hexagon, iconColor: 'text-pink-500', desc: 'DeFi Platform Web App', style: 'text-black flex items-center gap-1' },
  { id: 'ryne', name: 'Ryne AI', desc: 'Undetectable AI Assistant', style: 'text-blue-500' },
  { id: 'volnex', name: 'Volnex', customIcon: true, desc: 'Global Trading Platform', style: 'text-black flex items-center gap-1 uppercase' },
  { id: 'chatdoc', name: 'ChatDOC', icon: MessageSquare, iconColor: 'text-green-600', desc: 'Document AI • 50k+ Users', style: 'text-green-600 flex items-center gap-1' },
];

const processSteps: ProcessStep[] = [
  { 
    id: 1, 
    title: 'Zero-Lag Architecture', 
    desc: 'We map out the core product logic, tech stack, and user journey in days—not months. No bloated scopes, just crystal-clear execution.', 
    bgColor: 'bg-white', 
    textColor: 'text-[#1D2B36]', 
    rotate: '-rotate-1', 
    tapeRotate: '-rotate-2', 
    tapePos: '-top-3 left-10', 
    numBg: 'bg-blue-50', 
    numColor: 'text-blue-600' 
  },
  { 
    id: 2, 
    title: 'Unified Build Engine', 
    desc: 'Design, motion, and code happen simultaneously under one roof. The person shaping your interface is the one writing the logic.', 
    bgColor: 'bg-[#1D2B36]', 
    textColor: 'text-white', 
    rotate: 'rotate-1', 
    tapeRotate: 'rotate-3', 
    tapePos: '-top-3 right-10', 
    numBg: 'bg-white/10', 
    numColor: 'text-white' 
  },
  { 
    id: 3, 
    title: 'Fluid Motion & Polish', 
    desc: 'We layer in high-performance Framer Motion interactions, micro-feedback loops, and production-grade responsive polish that feels alive.', 
    bgColor: 'bg-white', 
    textColor: 'text-[#1D2B36]', 
    rotate: 'rotate-2 md:-mt-8', 
    tapeRotate: '-rotate-1', 
    tapePos: '-top-3 left-1/2 -translate-x-1/2', 
    numBg: 'bg-green-50', 
    numColor: 'text-green-600' 
  },
  { 
    id: 4, 
    title: 'Rapid Deployment & Scale', 
    desc: 'We push clean, battle-tested code straight to production with lightning-fast CI/CD pipelines built to handle massive user growth.', 
    bgColor: 'bg-white', 
    textColor: 'text-[#1D2B36]', 
    rotate: '-rotate-2 md:mt-12', 
    tapeRotate: 'rotate-2', 
    tapePos: '-top-3 right-12', 
    numBg: 'bg-purple-50', 
    numColor: 'text-purple-600' 
  },
];

const faqData: Faq[] = [
  { question: "How do we get started?", answer: "We start with a quick 15-minute discovery call to understand your vision. From there, we outline a clear roadmap, define the scope, and kick off the project within 48 hours." },
  { question: "What if I only have an idea and no technical knowledge?", answer: "That's exactly what we are here for! You bring the domain expertise and the vision, and we handle 100% of the technical execution—from design to deployment." },
  { question: "How do I know my project won't get delayed?", answer: "We operate on strict, transparent sprint schedules. You get weekly progress updates, access to staging environments, and a dedicated project manager ensuring we hit every deadline." },
  { question: "Do I own the code and product?", answer: "Absolutely. Once the final payment is made, 100% of the intellectual property, source code, and design assets belong entirely to you." },
];

const projectData: Record<string, AllProject[]> = {
  "Web Apps": [
    { title: "All Quiet", subtitle: "Incident Management Platform", tag: "DevOps", bgColor: "bg-gradient-to-br from-[#FAFAF9] to-[#F5F5F4]", textColor: "text-stone-900", mockupType: "browser" },
    { title: "Anything.com", subtitle: "A name that reflects what we're building", tag: "Website", bgColor: "bg-[#F4F8FA]", textColor: "text-[#1D2B36]", mockupType: "browser" },
    { title: "Zenith", subtitle: "Next-Gen E-commerce Storefront", tag: "Retail", bgColor: "bg-gradient-to-br from-[#F0FDF4] to-[#DCFCE7]", textColor: "text-green-900", mockupType: "browser" }
  ],
  "Mobile Apps": [
    { title: "PillO", subtitle: "60-Minute Health Delivery", tag: "HealthTech", bgColor: "bg-gradient-to-br from-[#FEF2F2] to-[#FEE2E2]", textColor: "text-red-900", mockupType: "mobile" },
    { title: "Skanaus", subtitle: "Discover Restaurants & Save", tag: "Food & Beverage", bgColor: "bg-gradient-to-br from-[#FFFBEB] to-[#FEF3C7]", textColor: "text-amber-900", mockupType: "mobile" },
    { title: "Trekker", subtitle: "Offline Outdoor Trail Navigation", tag: "Travel", bgColor: "bg-gradient-to-br from-[#F4F4F5] to-[#E4E4E7]", textColor: "text-zinc-900", mockupType: "mobile" }
  ],
  "SaaS Platforms": [
    { title: "ChatDOC", subtitle: "Turn Documents into Conversations", tag: "B2B SaaS", bgColor: "bg-gradient-to-br from-[#F8FAFC] to-[#F1F5F9]", textColor: "text-slate-900", mockupType: "dashboard" },
    { title: "MetricsPro", subtitle: "Advanced Financial Forecasting", tag: "Finance", bgColor: "bg-gradient-to-br from-[#F0F9FF] to-[#E0F2FE]", textColor: "text-sky-900", mockupType: "dashboard" },
  ],
  "Branding & Video": [
    { title: "Apptics", subtitle: "Visual Identity & Brand System", tag: "Brand Design", bgColor: "bg-gradient-to-br from-[#EFF6FF] to-[#DBEAFE]", textColor: "text-blue-900", mockupType: "branding" },
    { title: "KREE8 Showreel", subtitle: "Motion Graphics & 3D", tag: "Motion", bgColor: "bg-gradient-to-br from-[#F0FDF4] to-[#DCFCE7]", textColor: "text-green-900", mockupType: "video" }
  ]
};

const stats: STATS[] = [
  { to: 42, prefix: "", suffix: "", label: "Teams shipped with" },
  { to: 120, prefix: "$", suffix: "M", label: "Raised after our work" },
  { to: 6, prefix: "", suffix: "", label: "Designers, one file" },
  { to: 48, prefix: "", suffix: "", label: "Hours to first draft" },
];


const logos = ["northwind", "apptics", "cluely", "terac", "timefun", "orbital"];

const QUOTES = [
  { line: "They shipped the whole brand in the time our last studio spent scoping.", name: "R. Lee", role: "Founder, Cluely" },
  { line: "First draft in two days. It was already better than what we had.", name: "Harsh", role: "Founder, Outreachify" },
  { line: "One team held brand, product and the build. Nothing got lost.", name: "Greg V", role: "COO, Numbers" },
];

const TEAM = [
  { name: "Vishu More", role: "Motion designer" },
  { name: "Shreyas More", role: "Product designer" },
  { name: "Rohan Koli", role: "Web / mobile" },
  { name: "Ashish Pawar", role: "Web / mobile" },
  { name: "Neha Mane", role: "Web designer" },
  { name: "Abhijeet Salunkhe", role: "Brand designer" },
];
export { navData, trustedClients, processSteps, faqData, projectData, stats, logos, QUOTES, TEAM };