import { CV_START } from '@/const';
import { age } from '@/lib/util';

export const projects = [
  {
    name: 'Maxon Online Presence',
    description: 'description.maxon',
    href: 'https://preview.maxongroup.com/de-de',
    duration: 1.5,
    stack: ['TypeScript', 'Node.js', 'React', 'Next.js', 'GraphQL'],
  },
  {
    name: 'React Server',
    description: 'description.react-server',
    href: 'https://state-less.cloud',
    repo: 'https://github.com/state-less/clean-starter',
    duration: 1,
    stack: ['TypeScript', 'Node.js', 'React', 'GraphQL'],
  },
  {
    name: 'Lists App',
    description: 'description.lists',
    href: 'https://lists.state-less.cloud',
    repo: 'https://github.com/C5H8NNaO4/lists-app-backend',
    duration: 1,
    stack: ['TypeScript', 'Node.js', 'React Server', 'React'],
  },
  {
    name: 'Reflect.js',
    description: 'description.reflect',
    repo: 'https://github.com/C5H8NNaO4/reflect.js',
    duration: 1.5,
    stack: ['JavaScript'],
  },
  {
    name: 'Online CV',
    description: 'description.mycv',
    href: `https://justmycv.com/`,
    repo: 'https://github.com/C5H8NNaO4/cv',
    duration: age(CV_START),
    stack: ['TypeScript', 'React', 'MUI'],
  },
];
