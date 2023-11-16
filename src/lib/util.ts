import { Project } from '@/types';
import { differenceInCalendarDays, differenceInYears } from 'date-fns';
import i18next from 'i18next';

/**
 *
 * @param birthday - ISO 8601 format date string
 * @returns - The difference in years between the current date and the given date.
 */
export const age = (birthday: string = new Date().toISOString()): number => {
  return differenceInCalendarDays(new Date(), new Date(birthday)) / 365;
};

export const experience = (skill) => {
  return skill?.experience || duration(skill?.end, skill?.start);
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

export const recentSkill = (workHistory, label) => {
  return workHistory
    .filter((work) => differenceInYears(new Date(), new Date(work.start)) < 3)
    .reduce((acc, cur) => [...acc, ...cur.stack], [])
    .flat()
    .includes(label);
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

export const durStr = (duration: number, plus?: boolean) => {
  const t = i18next.t;
  if (duration > 1)
    return `${Math.round(duration * 2) / 2}${plus ? '+' : ''} ${t('years')}`;
  if (duration === 1) return `1 ${t('year')}`;
  if (duration >= 3 / 12) return `${Math.round(duration * 12)} ${t('months')}`;
  if (duration >= 3 / 52) return `${Math.round(duration * 52)} ${t('weeks')}`;
  if (duration >= (3 * 7) / 365)
    return `${Math.round(duration * 365)} ${t('days')}`;
  if (duration < (3 * 7) / 365)
    return `${Math.round(duration * 365)} ${t('days')}`;
};
