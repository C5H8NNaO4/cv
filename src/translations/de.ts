const de = (await import('@/data/bio/de.md?raw')).default;
const translation = {
  translation: {
    'at the': 'am',
    at: 'bei',
    "This is what I'm looking to work with": 'Damit würde ich gerne arbeiten',
    'https://justmycv.com/': 'https://justmycv.com/de',
    'Part of my stack': 'Teil meines Stacks',
    'Grow together': 'Zukünftig',
    'Your needed skill': 'Ihre benötigten Fähigkeiten...',
    'Recent experience': 'Frisch',
    'Professional experience': 'Professionell',
    'Hobby experience': 'Hobby',
    description: de,

    years: 'Jahre',
    year: 'Jahr',
    months: 'Monate',
    weeks: 'Wochen',
    days: 'Tage',
    spoken: 'Gesprochene',
    languages: 'Sprachen',
    'Spoken Languages': 'Gesprochene Sprachen',
    'Programming Languages': 'Programmier Sprachen',
    'Fachinformatiker in der Anwendungsentwicklung':
      'Fachinformatiker in der Anwendungsentwicklung',
    Education: 'Bildung',
    'Work History': 'Arbeitserfahrung',
    Experience: 'Erfahrung',
    'Expected Benefits': 'Erwartete Vorteile',
    Call: 'Anrufen',
    Contact: 'Kontakt',
    eMail: 'E-Mail',
    German: 'Deutsch',
    English: 'Englisch',
    Spanish: 'Spanisch',
    'Bonus points for AWS or PSQL': 'Bonus punkte für AWS oder PSQL.',
    'descriptions.maxon':
      'Eine moderne Website für das Unternehmen maxon, um ihre Produkte zu präsentieren und zu verkaufen. Eine weltweite digitale Präsenz, die modernste Technologie nutzt, um die Website zu betreiben. Coremedia als CMS und Salesforce als Commerce-Engine gewährleisten eine skalierbare Backend-Infrastruktur. Next.js und React bieten ein modernes, Headless-Frontend.',
    'descriptions.react-server':
      'Ein Open-Source-Framework, das es Ihnen ermöglicht, TSX-Komponenten auf der Backend-Seite zu verwenden. Dies ermöglicht das schnelle Prototyping anspruchsvoller Full-Stack-Services unter Verwendung der Prinzipien von React vom Frontend auf der Backend-Seite.',
    'descriptions.lists':
      'Eine einfache Produktivitäts-App, um zu zeigen, was Sie mit React Server erstellen können.',
    'descriptions.introduction': (
      await import('@/data/descriptions/introduction/de.md?raw')
    ).default,
    'descriptions.reflect': (
      await import('@/data/descriptions/reflect/de.md?raw')
    ).default,
    'descriptions.books': (await import('@/data/descriptions/books/de.md?raw'))
      .default,
    'descriptions.learnings': (
      await import('@/data/descriptions/learnings/de.md?raw')
    ).default,
    'descriptions.mycv': (await import('@/data/descriptions/mycv/de.md?raw'))
      .default,
    'descriptions.pixelpark.experience': (
      await import('@/data/descriptions/experience/pixelpark/de.md?raw')
    ).default,
    'descriptions.cosuno.experience': (
      await import('@/data/descriptions/experience/cosuno/de.md?raw')
    ).default,
    'descriptions.spoo.experience': (
      await import('@/data/descriptions/experience/spoo/de.md?raw')
    ).default,
    'descriptions.bechtle-1.experience': (
      await import('@/data/descriptions/experience/bechtle/1/de.md?raw')
    ).default,
    'descriptions.bechtle-2.experience': (
      await import('@/data/descriptions/experience/bechtle/2/de.md?raw')
    ).default,
    'descriptions.bechtle-3.experience': (
      await import('@/data/descriptions/experience/bechtle/3/de.md?raw')
    ).default,
    'descriptions.arboleda.experience': (
      await import('@/data/descriptions/experience/arboleda/de.md?raw')
    ).default,
    'descriptions.marketing':
      'Findet heraus wie Ihr von meiner Erfahrung profitieren könnt.',
    'sub.marketing': 'Bei 85% produktivität.',
    'descriptions.contact':
      'Sie können mich gerne jederzeit auf den genannten Wegen kontaktieren.',

    'achievements.compiler':
      'Das erste Mal, als mein Compiler sich selbst kompilierte, war eine Offenbarung. Das erste Mal, als er jQuery kompilierte, war eine Erleichterung.',

    'achievements.sticky':
      'Implementiert: Horizontale scrollbare Tabelle mit sticky Header.',
    'achievements.framework':
      'Ein Produkt ordnungsgemäß zu launchen und zu vermarkten ist ein enormer Aufwand und erfordert kontinuierliche und konsistente Arbeit, um Ergebnisse zu erzielen.',
    'achievements.mediumdata':
      'Die Analyse von Hunderten Millionen isolierten Datenpunkten erfordert sorgfältige Planung, Datenarchitektur und fortgeschrittene SQL-Kenntnisse.',
    'achievements.senior':
      'In Zusammenarbeit mit anderen Senior-Entwicklern auf dem Gebiet kann ich selbstbewusst sagen, dass ich ein ähnliches Wissensniveau in der modernen Webentwicklung erreicht habe wie andere Seniors mit einer Erfahrung von 10-15 Jahren.',
  },
};

export default translation;
