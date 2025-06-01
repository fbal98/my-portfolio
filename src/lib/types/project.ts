/**
 * Project type definitions based on the JSON structure in src/content/projects.json
 */

export interface ProjectLinks {
  github: string | null;
  live?: string | null;
  demo?: string | null;
}

export interface Project {
  id: string;
  title: string;
  featured?: boolean;
  status?: 'completed' | 'under development';
  description: string;
  longDescription?: string;
  technologies: string[];
  role?: string;
  duration?: string;
  achievements?: string[];
  links: ProjectLinks;
  category: 'mobile' | 'backend' | 'desktop' | 'web' | 'automation' | 'cli';
  year: number;
  managedE2E?: boolean;
  impact?: 'critical' | 'high' | 'medium' | 'low';
}

export interface ProjectsData {
  projects: Project[];
}