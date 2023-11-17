const de = (await import('@/data/bio/de.md?raw')).default;
const translation = {
  translation: {
    'at the': 'am',
    at: 'bei',
    "This is what I'm looking to work with": 'Damit würde ich gerne arbeiten',
    'https://justmycv.com/': 'https://justmycv.com/de',
    'Recent experience': 'Frische Erfahrung.',
    'Part of my stack': 'Teil meines Stacks.',
    'Grow together': 'Zukünftig',
    'Your needed skill': 'Ihre benötigten Fähigkeiten',
    description: de,
    years: 'Jahre',
    year: 'Jahr',
    months: 'Monate',
    weeks: 'Wochen',
    days: 'Tage',
    spoken: 'Gesprochene',
    languages: 'Sprachen',
    Education: 'Bildung',
    'Work History': 'Arbeitserfahrung',
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

    'descriptions.reflect': (
      await import('@/data/descriptions/reflect/de.md?raw')
    ).default,
    'descriptions.mycv': (await import('@/data/descriptions/mycv/de.md?raw'))
      .default,
    'descriptions.marketing':
      'Findet heraus wie Ihr von meiner Erfahrung profitieren könnt.',
    'sub.marketing': 'Bei 85% produktivität.',
    'descriptions.contact':
      'Sie können mich gerne jederzeit auf den genannten Wegen kontaktieren.',
  },
};

export default translation;
