const es = (await import('@/data/bio/es.md?raw')).default;
const translation = {
  translation: {
    "This is what I'm looking to work with":
      'Esto es con lo que quisiera estar trabajando',
    'https://justmycv.com/': 'https://justmycv.com/es',
    'Recent experience': 'Experiencia reciente.',
    'Part of my stack': 'Parte de mi pila.',
    'Grow together': 'En Futuro',
    'Your needed skill': 'Tu habilidad necesaria.',
    description: es,
    years: 'años',
    year: 'año',
    months: 'meses',
    weeks: 'semanas',
    days: 'días',
    spoken: 'hablados',
    languages: 'idiomas',
    Education: 'Educación',
    'Work History': 'Experiencia Laboral',
    'Expected Benefits': 'Beneficios Esperados',
    Call: 'Llamar',
    Contact: 'Contacto',
    eMail: 'E-Mail',
    German: 'Alemán',
    English: 'Inglés',
    Spanish: 'Español',
    'Bonus points for AWS or PSQL': 'Puntos extra por AWS o PSQL.',
    'descriptions.maxon':
      'Un sitio web moderno para la empresa maxon para mostrar y vender sus productos. Una presencia digital mundial que utiliza tecnología de última generación para alimentar el sitio web. Coremedia como CMS y Salesforce como motor de comercio aseguran una infraestructura de backend escalable. Next.js y React proporcionan un frontend moderno y sin cabeza.',
    'descriptions.react-server':
      'Un marco de código abierto que le permite utilizar componentes TSX en el backend. Esto permite prototipar rápidamente servicios full-stack sofisticados utilizando los principios de React desde el frontend en el backend.',
    'descriptions.lists':
      'Una aplicación de productividad simple para mostrar lo que se puede construir con React Server.',
    'descriptions.marketing': 'Descubre cómo sacar provecho de mi experiencia.',
    'descriptions.reflect': (
      await import('@/data/descriptions/reflect/es.md?raw')
    ).default,
    'descriptions.mycv': (await import('@/data/descriptions/mycv/es.md?raw'))
      .default,
  },
};

export default translation;
