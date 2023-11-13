import { Project } from '@/types';
import { differenceInYears } from 'date-fns';

/**
 *
 * @param birthday - ISO 8601 format date string
 * @returns - The difference in years between the current date and the given date.
 */
export const age = (birthday: string = new Date().toISOString()): number => {
  return differenceInYears(new Date(), new Date(birthday));
};

export const duration = (
  start: string = new Date().toISOString(),
  end: string = new Date().toISOString()
): number => {
  return age(end) - age(start);
};

export const projectExperience = (projects: Project[], skill: string) => {
  return projects
    .filter((project) => project.stack.includes(skill))
    .reduce((acc, project) => {
      return (
        acc +
        (project.duration ||
          duration(
            project.start || new Date().toISOString(),
            project.end || new Date().toISOString()
          ))
      );
    }, 0);
};
export const skill = (skills: { name: string }[], name: string) => {
  return skills.find((skill) => skill.name === name);
};

export const map = (
  obj: Record<string, any>,
  cb: (obj: any, index?: number, arr?: any[]) => unknown
) => {
  if (Array.isArray(obj)) return obj.map(cb);
  return Object.keys(obj).reduce(
    (acc, key) => ({ ...acc, [key]: cb(obj[key]) }),
    {}
  );
};

export const durStr = (duration: number) => {
  if (duration > 1) return `${duration} years`;
  if (duration === 1) return '1 year';
  if (duration >= 3 / 12) return `${duration * 12} months`;
  if (duration >= 3 / 52) return `${duration} weeks`;
  if (duration >= (3 * 7) / 365) return `${duration} days`;
};
