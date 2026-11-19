export interface ProjectMedia {
  type: 'video' | 'image';
  src: string;
  poster?: string;
  caption: string;
}

export interface ProjectDetail {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  role: string;
  date: string;
  status: '已落地' | '个人工具' | '阶段交接' | '开发中';
  statusNote: string;
  summary: string;
  categories: ('fullstack' | 'qa' | 'wip')[];
  media: ProjectMedia;
  secondaryImage?: {
    src: string;
    caption: string;
  };
  whatIDid: string[];
  honestLimits: string;
  techStack: string[];
  links?: {
    label: string;
    url: string;
    type: 'github' | 'demo' | 'doc';
  }[];
  privateRepoNote?: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface ExperienceItem {
  period: string;
  org: string;
  role: string;
  city: string;
  summary: string;
  highlights: string[];
  visual?: {
    src: string;
    caption: string;
  };
}
