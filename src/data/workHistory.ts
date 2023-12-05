type WorkHistoryEntry = {
  id: string;
  company: string;
  homepage: string;
  location: string;
  position: string;
  start: string;
  end: string | null;
  stack: string[];
  disabled?: boolean;
};
export const workHistory: WorkHistoryEntry[] = [
  {
    id: 'bechtle-1',
    company: 'Bechtle',
    homepage: 'https://www.bechtle.com',
    location: 'Freiburg, Germany',
    position: 'Fachinformatiker in der Anwendungsentwicklung',
    start: '2012-05-01',
    end: '2015-03-01',
    stack: [
      'JavaScript',
      'Java',
      'LotusScript',
      'Lotus Notes',
      'Domino',
      'Git',
    ],
  },
  {
    id: 'bechtle-2',
    company: 'Bechtle',
    homepage: 'https://www.bechtle.com',
    location: 'Freiburg, Germany',
    position: 'Junior Software Engineer',
    start: '2015-03-01',
    end: '2016-03-01',
    stack: ['LotusScript', 'Lotus Notes', 'Domino', 'Basic', 'Git'],
  },
  {
    id: 'arboleda',
    position: 'Volunteer',
    company: 'Arboleda Emaluisa',
    location: 'Chile, Temuco',
    homepage: 'https://www.facebook.com/arboledaemaluisa/',
    start: '2016-05-01',
    end: '2017-04-15',
    stack: ['JavaScript', 'TypeScript', 'React', 'MUI', 'Git'],
    disabled: true,
  },
  {
    id: 'bechtle-3',
    company: 'Bechtle',
    location: 'Freiburg, Germany',
    homepage: 'https://www.bechtle.com',
    position: 'Junior Software Engineer',
    start: '2018-05-01',
    end: '2019-05-01',
    stack: ['C#', 'Perl', 'Git'],
  },
  {
    id: 'spoo',
    company: 'Spoo',
    position: 'Software Engineer',
    location: 'Denzlingen, Germany',
    homepage: 'https://www.spoo-group.com',
    start: '2020-01-01',
    end: '2021-12-01',
    stack: [
      'JavaScript',
      'Node.js',
      'PSQL',
      'Git',
      'Vue',
      'Docker',
      'Kafka',
      'Kubernetes',
    ],
  },
  {
    id: 'cosuno',
    company: 'Cosuno',
    location: 'Braga, Portugal',
    position: 'Senior Frontend Developer',
    homepage: 'https://www.cosuno.com',
    start: '2022-02-01',
    end: '2022-07-01',
    stack: ['TypeScript', 'GraphQL', 'React', 'Git'],
  },
  {
    id: 'pixelpark',
    position: 'Senior IT Developer',
    company: 'Digitas Pixelpark',
    location: 'Freiburg, Germany',
    start: '2022-09-01',
    end: null,
    homepage: 'https://www.digitaspixelpark.com/',
    stack: [
      'React',
      'Next.js',
      'TypeScript',
      'GraphQL',
      'JavaScript',
      'Git',
      'Scrum',
      'Coremedia',
      'ESLint',
    ],
  },
];
