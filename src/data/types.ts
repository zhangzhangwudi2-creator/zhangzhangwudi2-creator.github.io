export interface MetricItem {
  id: string;
  value: string;
  label: string;
  description: string;
  badge: string;
  targetProjectId?: string;
  funComment?: string;
  seriousComment?: string;
}

export interface ProjectDetail {
  id: string;
  title: string;
  role: string;
  date: string;
  summary: string;
  categories: ('fullstack' | 'qa')[];
  pipeline: string[];
  tags: string[];
  painPoint: string;
  solution: string[];
  metrics: string[];
  techStack: string[];
  links?: {
    label: string;
    url: string;
    type: 'github' | 'demo' | 'doc';
  }[];
}

export interface SkillCategory {
  title: string;
  skills: { name: string; highlight?: boolean }[];
  description: string;
}

export interface TimelineItem {
  period: string;
  org: string;
  role: string;
  city?: string;
  highlights: string[];
  badge?: string;
}
