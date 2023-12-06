const es = (await import('@/data/bio/es.md?raw')).default;
const translation = {
  translation: {
    'at the': 'en el',
    at: 'en',
    "This is what I'm looking to work with":
      'Esto es con lo que quisiera estar trabajando',
    'https://justmycv.com/': 'https://justmycv.com/es',
    'Part of my stack': 'Parte de mi pila',
    'Grow together': 'En Futuro',
    'Your needed skill': 'Tu habilidad necesaria...',
    'Recent experience': 'Reciente',
    'Professional experience': 'Profesional',
    'Hobby experience': 'Hobby',
    description: es,
    years: 'años',
    year: 'año',
    months: 'meses',
    weeks: 'semanas',
    days: 'días',
    spoken: 'hablados',
    languages: 'idiomas',
    'Spoken Languages': 'Idiomas hablados',
    'Programming Languages': 'Lenguajes de programación',
    'Fachinformatiker in der Anwendungsentwicklung':
      'Ciencias de la Computación (Fachinformatiker in der Anwendungsentwicklung)',
    Education: 'Educación',
    Experience: 'Experiencia {{suffix}}',
    'Work History': 'Experiencia Laboral',
    'Expected Benefits': 'Beneficios Esperados',
    Call: 'Llamar',
    Contact: 'Contacto',
    eMail: 'E-Mail',
    German: 'Alemán',
    English: 'Inglés',
    Spanish: 'Español',
    'German (C2)': 'Alemán (C2)',
    'English (C1)': 'Inglés (C1)',
    'Spanish (B2)': 'Español (B2)',
    'Bonus points for AWS or PSQL': 'Puntos extra por AWS o PSQL.',
    'descriptions.maxon':
      'Un sitio web moderno para la empresa maxon para mostrar y vender sus productos. Una presencia digital mundial que utiliza tecnología de última generación para alimentar el sitio web. Coremedia como CMS y Salesforce como motor de comercio aseguran una infraestructura de backend escalable. Next.js y React proporcionan un frontend moderno y sin cabeza.',
    'descriptions.react-server':
      'Un marco de código abierto que le permite utilizar componentes TSX en el backend. Esto permite prototipar rápidamente servicios full-stack sofisticados utilizando los principios de React desde el frontend en el backend.',
    'descriptions.lists':
      'Una aplicación de productividad simple para mostrar lo que se puede construir con React Server.',
    'descriptions.marketing': 'Descubre cómo sacar provecho de mi experiencia.',
    'sub.marketing': 'Con 85% de productividad.',
    'descriptions.introduction': (
      await import('@/data/descriptions/introduction/es.md?raw')
    ).default,
    'descriptions.reflect': (
      await import('@/data/descriptions/reflect/es.md?raw')
    ).default,
    'descriptions.books': (await import('@/data/descriptions/books/es.md?raw'))
      .default,
    'descriptions.learnings': (
      await import('@/data/descriptions/learnings/es.md?raw')
    ).default,
    'descriptions.mycv': (await import('@/data/descriptions/mycv/es.md?raw'))
      .default,
    'descriptions.pixelpark.experience': (
      await import('@/data/descriptions/experience/pixelpark/es.md?raw')
    ).default,
    'descriptions.cosuno.experience': (
      await import('@/data/descriptions/experience/cosuno/es.md?raw')
    ).default,
    'descriptions.spoo.experience': (
      await import('@/data/descriptions/experience/spoo/es.md?raw')
    ).default,
    'descriptions.bechtle-1.experience': (
      await import('@/data/descriptions/experience/bechtle/1/es.md?raw')
    ).default,
    'descriptions.bechtle-2.experience': (
      await import('@/data/descriptions/experience/bechtle/2/es.md?raw')
    ).default,
    'descriptions.bechtle-3.experience': (
      await import('@/data/descriptions/experience/bechtle/3/es.md?raw')
    ).default,
    'descriptions.arboleda.experience': (
      await import('@/data/descriptions/experience/arboleda/es.md?raw')
    ).default,
    'achievements.compiler':
      'La primera vez que mi compilador se compiló a sí mismo fue una revelación. La primera vez que compiló jQuery fue un deleite.',
    'achievements.sticky':
      'Implementado: Tabla horizontalmente desplazable con encabezado fijo.',
    'achievements.framework':
      'Lanzar y comercializar adecuadamente un producto es un esfuerzo enorme y requiere trabajo continuo y consistente para lograr resultados.',
    'achievements.mediumdata':
      'Analizar cientos de millones de puntos de datos disjuntos requiere una planificación cuidadosa, arquitectura de datos y habilidades intermedias en SQL.',
    'achievements.senior':
      'Trabajando junto a otros desarrolladores senior en el campo, puedo decir con confianza que he alcanzado un nivel similar de conocimiento en desarrollo web moderno que otros seniors con una experiencia de 10-15 años.',
  },
};

export default translation;
