export interface SkillItem {
  id: string;
  name: string;
  category: 'Languages & Querying' | 'BI & Visualization' | 'Automation & Tools' | 'Data Engineering & Methods';
  proficiency: number; // 0-100
  experienceYears: number;
  projectCount: number;
  topTools: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  category: string;
  businessProblem: string;
  methodology: string[];
  keyMetrics: { label: string; value: string }[];
  tags: string[];
  githubUrl?: string;
  previewType: 'fawry-bi' | 'abqari-automation' | 'awl-code';
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  details: string;
  badge?: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  durationOrType: string;
  status: string;
}

export interface LeadershipItem {
  role: string;
  initiative: string;
  description: string;
  impact: string;
}
