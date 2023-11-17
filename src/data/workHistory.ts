type WorkHistoryEntry = {
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
    company: 'Bechtle',
    homepage: 'https://www.bechtle.com',
    location: 'Germany - Freiburg',
    position: 'FIAE',
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
    company: 'Bechtle',
    homepage: 'https://www.bechtle.com',
    location: 'Germany - Freiburg',
    position: 'Junior Software Engineer',
    start: '2015-03-01',
    end: '2016-03-01',
    stack: ['LotusScript', 'Lotus Notes', 'Domino', 'Basic', 'Git'],
  },
  {
    position: 'Living abroad in Chile',
    company: 'Arboleda Emaluisa',
    location: 'Chile, Temuco',
    homepage: 'https://www.facebook.com/arboledaemaluisa/',
    start: '2016-05-01',
    end: '2017-04-15',
    stack: ['JavaScript', 'TypeScript', 'React', 'MUI', 'Git'],
    disabled: true,
  },
  {
    company: 'Bechtle',
    location: 'Germany - Freiburg',
    homepage: 'https://www.bechtle.com',
    position: 'Junior Software Engineer',
    start: '2018-05-01',
    end: '2019-05-01',
    stack: ['C#', 'Perl', 'Git'],
  },
  {
    company: 'Spoo',
    position: 'Software Engineer',
    location: 'Germany - Denzlingen',
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
    company: 'Cosuno',
    location: 'Portugal - Braga',
    position: 'Senior Frontend Developer',
    homepage: 'https://www.cosuno.com',
    start: '2022-02-01',
    end: '2022-07-01',
    stack: ['TypeScript', 'GraphQL', 'React', 'Git'],
  },
  {
    position: 'Senior IT Developer',
    company: 'Digitas Pixelpark',
    location: 'Germany - Freiburg',
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
