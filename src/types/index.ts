export type Project = {
  name: string;
  duration?: number;
  start?: string;
  end?: string;
  stack: string[];
  description?: string;
  href?: string;
};

export type Skill = {
  name: string;
  experience?: number;
  tags: string[];
  stack?: boolean;
  start?: string;
};
