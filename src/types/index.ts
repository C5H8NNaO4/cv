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
};

export type Skill = {
  name: string;
  experience?: number;
  tags: string[];
  stack?: boolean;
  start?: string;
  end?: string;
};
