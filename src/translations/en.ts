const en = (await import('@/data/bio/en.md?raw')).default;
const translation = {
  translation: {
    'at the': 'at',
    at: 'at',
    'justmycv.com/': 'justmycv.com/en',
    'Grow together': 'In Future',
    Experience: 'Experience {{suffix}}',
    'Recent experience': 'Recent',
    'Professional experience': 'Professional',
    'Hobby experience': 'Hobby',
    'Part of my stack': 'Part of my stack',
    'Fachinformatiker in der Anwendungsentwicklung':
      'Computer Science (Fachinformatiker in der Anwendungsentwicklung)',
    Contact: 'Contact',
    eMail: 'E-Mail',
    Portfolio: 'Portfolio ({{from}} - {{to}})',
    "This is what I'm looking to work with":
      "This is what I'm looking to be working with.",
    'Bonus points for AWS or PSQL': 'Bonus points for AWS or PSQL.',
    description: en,
    'descriptions.maxon': `A modern website for the maxon company to showcase and sell their products. A world-wide digital presence using state of art technology to power the website. Coremedia as CMS and Salesforce as commerce engine ensure a scalable backend infrastructure. Next.js and React provide a modern headless frontend.`,
    'descriptions.react-server': (
      await import('@/data/descriptions/react-server/en.md?raw')
    ).default,
    'descriptions.lists': (await import('@/data/descriptions/lists/en.md?raw'))
      .default,
    'descriptions.introduction': (
      await import('@/data/descriptions/introduction/en.md?raw')
    ).default,
    'descriptions.reflect': (
      await import('@/data/descriptions/reflect/en.md?raw')
    ).default,
    'descriptions.books': (await import('@/data/descriptions/books/en.md?raw'))
      .default,
    'descriptions.learnings': (
      await import('@/data/descriptions/learnings/en.md?raw')
    ).default,
    'descriptions.mycv': (await import('@/data/descriptions/mycv/en.md?raw'))
      .default,
    'descriptions.pixelpark.experience': (
      await import('@/data/descriptions/experience/pixelpark/en.md?raw')
    ).default,
    'descriptions.cosuno.experience': (
      await import('@/data/descriptions/experience/cosuno/en.md?raw')
    ).default,
    'descriptions.spoo.experience': (
      await import('@/data/descriptions/experience/spoo/en.md?raw')
    ).default,
    'descriptions.bechtle-1.experience': (
      await import('@/data/descriptions/experience/bechtle/1/en.md?raw')
    ).default,
    'descriptions.bechtle-2.experience': (
      await import('@/data/descriptions/experience/bechtle/2/en.md?raw')
    ).default,
    'descriptions.bechtle-3.experience': (
      await import('@/data/descriptions/experience/bechtle/3/en.md?raw')
    ).default,
    'descriptions.arboleda.experience': (
      await import('@/data/descriptions/experience/arboleda/en.md?raw')
    ).default,
    'descriptions.contact':
      'Feel free to contact me using any of the available channels.',
    'descriptions.marketing': 'Find out how to profit from my experience.',
    'sub.marketing': 'At 85% productivity.',
    'achievements.compiler':
      'The first time my compiler compiled itself was a revelation. The first time it compiled jQuery was a delight.',
    'achievements.sticky': 'Implemented: Sticky horizontally scrollable table.',
    'achievements.framework':
      'Properly launching and marketing a product is a huge effort and requires continous and consistent work to achieve results.',
    'achievements.mediumdata':
      'Analyzing hundreds of millions disjoint data points requires careful planning, data architecture and intermediate SQL skills.',
    'achievements.senior':
      'Working together with other senior developers in the field, I can confidently say that I have reached around the same level of knowledge on modern web development than other seniors with an experience of 10-15 years.',
  },
};

export default translation;
