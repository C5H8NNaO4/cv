import { CV_START, DIGITAS_START } from '@/const';
import { age } from '@/lib/util';

export const projects = [
  {
    name: 'Maxon Online Presence',
    description: 'descriptions.maxon',
    company: 'Digitas Pixelpark',
    homepage: 'https://digitaspixelpark.com/',
    href: 'https://preview.maxongroup.com/de-de',
    start: DIGITAS_START,
    stack: ['TypeScript', 'React', 'Next.js', 'GraphQL', 'Coremedia'],
  },
  {
    name: 'React Server',
    sort: 100,
    description: 'descriptions.react-server',
    href: 'https://state-less.cloud',
    repo: 'https://github.com/state-less/clean-starter',
    duration: 1,
    stars: 9,
    stack: ['TypeScript', 'Node.js', 'React', 'GraphQL'],
  },
  {
    sort: 10,
    name: 'Lists App',
    description: 'descriptions.lists',
    href: 'https://lists.state-less.cloud',
    repo: 'https://github.com/C5H8NNaO4/lists-app-backend',
    duration: 1,
    stack: ['TypeScript', 'Node.js', 'React Server', 'React'],
  },
  {
    sort: 90,
    name: 'Reflect.js',
    description: 'descriptions.reflect',
    repo: 'https://github.com/C5H8NNaO4/reflect.js',
    duration: 1.5,
    stack: ['JavaScript'],
  },
  {
    sort: 20,
    name: 'Online CV',
    description: 'descriptions.mycv',
    href: `https://justmycv.com/`,
    repo: 'https://github.com/C5H8NNaO4/my-cv',
    duration: age(CV_START),
    stack: ['TypeScript', 'React', 'MUI'],
  },
];
