const en = (await import('@/data/bio/en.md?raw')).default;
const translation = {
  translation: {
    'https://justmycv.com/': 'https://justmycv.com/en',
    'Grow together': 'In Future',
    Contact: 'Contact',
    eMail: 'E-Mail',
    Portfolio: 'Portfolio ({{from}} - {{to}})',
    "This is what I'm looking to work with":
      "This is what I'm looking to be working with.",
    'Bonus points for AWS or PSQL': 'Bonus points for AWS or PSQL.',
    description: en,
    'description.maxon': `A modern website for the maxon company to showcase and sell their products. A world-wide digital presence using state of art technology to power the website. Coremedia as CMS and Salesforce as commerce engine ensure a scalable backend infrastructure. Next.js and React provide a modern headless frontend.`,
    'description.react-server': `An open source framework that let's you use TSX components on the backend. This allows to rapidly prototype sophisticated full-stack services using Reacts principles from the frontend on the backend.`,
    'description.lists': `A simple productivity app to showcase what you can build with React Server.`,
    'description.reflect':
      'An optimizing ES5 compiler, written in JavaScript. I wrote it before babel existed, duh...',
    'description.mycv':
      'My interactive online CV. - I got tired of using Adobe Illustrator to update my CV. Using a website to generate a CV seems natural as webdev.',
    'description.contact':
      'Feel free to contact me using any of the available channels.',
    'description.marketing': 'Find out how to profit from my experience.',
    'sub.marketing': 'At 85% productivity.',
  },
};

export default translation;
