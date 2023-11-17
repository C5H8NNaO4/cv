const en = (await import('@/data/bio/en.md?raw')).default;
const translation = {
  translation: {
    'at the': 'at',
    at: 'at',
    'https://justmycv.com/': 'https://justmycv.com/en',
    'Grow together': 'In Future',
    'Recent experience': 'Recent experience.',
    'Part of my stack': 'Part of my stack.',
    Contact: 'Contact',
    eMail: 'E-Mail',
    Portfolio: 'Portfolio ({{from}} - {{to}})',
    "This is what I'm looking to work with":
      "This is what I'm looking to be working with.",
    'Bonus points for AWS or PSQL': 'Bonus points for AWS or PSQL.',
    description: en,
    'descriptions.maxon': `A modern website for the maxon company to showcase and sell their products. A world-wide digital presence using state of art technology to power the website. Coremedia as CMS and Salesforce as commerce engine ensure a scalable backend infrastructure. Next.js and React provide a modern headless frontend.`,
    'descriptions.react-server': `An open source framework that let's you use TSX components on the backend. This allows to rapidly prototype sophisticated full-stack services using Reacts principles from the frontend on the backend.`,
    'descriptions.lists': `A simple productivity app to showcase what you can build with React Server.`,
    'descriptions.reflect': (
      await import('@/data/descriptions/reflect/en.md?raw')
    ).default,
    'descriptions.learnings': (
      await import('@/data/descriptions/learnings/en.md?raw')
    ).default,
    'descriptions.mycv': (await import('@/data/descriptions/mycv/en.md?raw'))
      .default,
    'descriptions.contact':
      'Feel free to contact me using any of the available channels.',
    'descriptions.marketing': 'Find out how to profit from my experience.',
    'sub.marketing': 'At 85% productivity.',
  },
};

export default translation;
