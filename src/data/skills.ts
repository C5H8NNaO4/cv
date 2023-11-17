import {
  DIGITAS_START,
  REACT_START,
  RUST_START,
  TRAINING_START,
} from '@/const';
import { age, projectExperience } from '@/lib/util';
import { projects } from './projects';

export const skills = [
  { name: 'TypeScript', experience: 7, stack: true, tags: ['language'] },
  { name: 'JavaScript', start: TRAINING_START, tags: ['language'] },
  { name: 'LotusScript', experience: 6, chip: true, tags: ['language'] },
  { name: 'Rust', start: RUST_START, chip: true, tags: ['language'] },
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
    chip: true,
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
    chip: true,
    tags: ['frontend'],
  },
  { name: 'Node.js', experience: 7, tags: ['backend'] },
  { name: 'GraphQL', experience: 3, stack: true, tags: ['backend'] },
  { name: 'PSQL', experience: 3, tags: ['backend'] },
  { name: 'AWS Lambda', experience: 3, tags: ['backend'] },
  { name: 'Scrum', experience: 3, tags: ['agile'] },
  { name: 'Git', experience: 11, tags: ['misc'] },
  { name: 'ESLint', experience: 10, tags: ['misc'] },
  { name: 'Docker', chip: true, experience: 5, tags: ['misc'] },
  { name: 'Kubernetes', chip: true, experience: 2, tags: ['misc'] },

  {
    name: 'Coremedia',
    experience: projectExperience(projects, 'Coremedia'),
    tags: ['CMS'],
  },
  {
    name: 'Vercel',
    experience: 3,
    chip: true,
    tags: ['Technologies'],
  },
  {
    name: 'Excel',
    experience: 15,
    chip: true,
    tags: ['Applications'],
  },
  {
    name: 'Jest',
    experience: 4,
    chip: true,
    tags: ['Technologies', 'framework'],
  },
  {
    name: 'Cypress',
    experience: 1,
    chip: true,
    tags: ['Technologies', 'framework'],
  },
  {
    name: 'Babel',
    experience: 7,
    chip: true,
    tags: ['Technologies', 'framework'],
  },
  {
    name: 'Webpack',
    experience: 3,
    chip: true,
    tags: ['Technologies', 'framework'],
  },
  {
    name: 'Headless',
    experience: age(DIGITAS_START),
    chip: true,
    tags: ['Technologies', 'framework'],
  },
  {
    name: 'Redux',
    experience: age(REACT_START) + 0.5,
    chip: true,
    tags: ['Technologies', 'framework'],
  },
  {
    name: 'Vite',
    experience: age('2023-05-01'),
    chip: true,
    tags: ['Technologies', 'framework'],
  },
  {
    name: 'VBA',
    experience: 7,
    chip: true,
    tags: ['language'],
  },
  { name: 'Your needed skill', experience: 0, tags: ['Grow together'] },
];
