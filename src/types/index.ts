import '@/vite';
export type Project = {
  id?: string;
  name: string;
  duration?: number;
  start?: string;
  end?: string;
  stack: string[];
  description?: string;
  href?: string;
  mt?: number;
  repo?: string;
  company?: string;
  homepage?: string;
};

export type Skill = {
  chip?: boolean;
  name: string;
  experience?: number;
  tags: string[];
  stack?: boolean;
  start?: string;
  end?: string;
};
