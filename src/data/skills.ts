import { REACT_START, RUST_START, TRAINING_START } from '@/const';
import { age, projectExperience } from '@/lib/util';
import { projects } from './projects';

export const skills = [
  { name: 'TypeScript', experience: 7, stack: true, tags: ['language'] },
  { name: 'JavaScript', start: TRAINING_START, tags: ['language'] },
  { name: 'LotusScript', experience: 6, tags: ['language'] },
  { name: 'Rust', start: RUST_START, tags: ['language'] },
  {
    name: 'React',
    experience: age(REACT_START),
    stack: true,
    tags: ['frontend', 'framework'],
  },
  {
    name: 'Vue',
    experience: 2.5,
    tags: ['frontend', 'framework'],
  },
  {
    name: 'serverless',
    experience: 2,
    tags: ['frontend', 'framework'],
  },
  {
    name: 'MUI',
    experience: 5,
    stack: true,
    tags: ['frontend', 'framework'],
  },
  {
    name: 'Next.js',
    experience: projectExperience(projects, 'Next.js'),
    stack: true,
    tags: ['frontend'],
  },
  { name: 'Node.js', experience: 7, tags: ['backend'] },
  { name: 'GraphQL', experience: 3, stack: true, tags: ['backend'] },
  { name: 'PSQL', experience: 3, tags: ['backend'] },
  { name: 'AWS Lambda', experience: 3, tags: ['backend'] },
  { name: 'Scrum', experience: 3, tags: ['agile'] },
  { name: 'Git', experience: 11, tags: ['misc'] },
  { name: 'ESLint', experience: 10, tags: ['misc'] },
  { name: 'Docker', experience: 5, tags: ['misc'] },
  { name: 'Kubernetes', experience: 2, tags: ['misc'] },
  { name: 'Your needed skill', experience: 0, tags: ['Grow together'] },

  {
    name: 'Coremedia',
    experience: projectExperience(projects, 'Coremedia'),
    tags: ['CMS'],
  },
];
