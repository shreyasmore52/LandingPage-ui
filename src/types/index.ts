interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
  href: string;
  colors: string;
}

interface Client {
  id: string;
  name: string;
  desc: string;
  style: string;
  icon?: React.ElementType;
  iconColor?: string;
  customIcon?: boolean;
}

interface ProcessStep {
  id: number;
  title: string;
  desc: string;
  bgColor: string;
  textColor: string;
  rotate: string;
  tapeRotate: string;
  tapePos: string;
  numBg: string;
  numColor: string;
}

interface Project {
  title: string;
  desc: string;
  tag: string;
  bg: string;
  offset: string;
}

interface Faq {
  question: string;
  answer: string;
}

interface AllProject { 
  title: string; 
  subtitle: string; 
  tag: string; 
  bgColor: string; 
  textColor: string; 
  mockupType: 'browser' | 'mobile' | 'dashboard' | 'branding' | 'video'; 
}
interface STATS {
 to: number;
 prefix: string;
 suffix: string;
 label: string;
}


export type { NavItem, Client, ProcessStep, Project, Faq, AllProject, STATS };