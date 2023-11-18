import { experience } from '@/lib/util';
import { benefits } from './benefits';
import { projects } from './projects';
import { skills } from './skills';
import { social } from './social';
import { learnings } from './learnings';
import { workHistory } from './workHistory';
import { Skill } from '@/types';

const name = 'Moritz Roessler';
const phone = '+4917620350106';
const email = 'moritz.roessler@gmail.com';
const position = 'Senior Fullstack Developer';
const salary = 100000;

const continent = 'Europe';
const country = 'Germany';

export const data = {
  // Comment out "position" to show the position of the last work history entry.
  social,
  position,
  learnings,
  salary,
  name,
  phone,
  email,
  continent,
  country,
  benefits,
  skills,
  projects,
  workHistory,
};

/**
 * Precomputes all experiences to provide them to i18n's interpolation.
 * This allows you to reference the experience of a skill in your translated texts.
 * Such as your bio. Reference them using e.g. {{experience.JavaScript}}
 */
export const experienceBySkill = data.skills.reduce(
  (acc: Record<string, number>, cur: Skill): Record<string, number> => {
    acc[cur.name.replace(/\./g, '-')] = Math.round(experience(cur) * 2) / 2;
    return acc;
  },
  {} as Record<string, number>
);
export default data;
