export const locales = ['nl', 'en'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'nl'
export const localeCookieName = 'site-locale'

export function isLocale(value: string | undefined | null): value is Locale {
  return value === 'nl' || value === 'en'
}

export const translations = {
  nl: {
    header: {
      nav: {
        home: 'Home',
        examples: 'Voorbeelden',
        portfolio: 'Portfolio',
        about: 'Over mij',
        contact: 'Contact',
      },
      mobileMenuLabel: 'Mobiel navigatiemenu',
      mobilePrompt: 'Laten we samen iets moois bouwen.',
      toggleMenu: 'Menu openen of sluiten',
      languageLabel: 'Taal wisselen',
    },
    footer: {
      aboutTitle: 'Frontend Developer',
      aboutDescription: 'Ik maak mooie, functionele en toegankelijke webervaringen met moderne technologie.',
      quickLinks: 'Snelle links',
      connect: 'Connect',
      contactFormAria: 'Ga naar contactformulier',
      rights: 'Alle rechten voorbehouden.',
      backToTop: 'Terug naar boven',
    },
    hero: {
      titlePrefix: 'Frontend',
      titleAccent: 'UI',
      titleSuffix: 'Developer',
      description:
        'Ik ben een Front-end UI Developer met 11 jaar ervaring. Daarvoor werkte ik 15 jaar als DTP-specialist. Door die combinatie specialiseer ik mij niet alleen in het ontwerpen van interfaces, maar ook in het perfect implementeren ervan in code. Ik focus op schone, responsive en gebruiksvriendelijke interfaces die naadloos werken op mobiel en desktop.',
      primaryCta: 'Bekijk mijn werk',
      secondaryCta: 'Neem contact op',
    },
    techStack: {
      heading: 'Tech Stack',
      description: 'Technologieen en tools die ik gebruik om sterke digitale ervaringen te bouwen',
    },
    latestProjects: {
      heading: 'Laatste Projecten',
      description: 'Een selectie recent werk waarmee ik mijn frontend expertise laat zien',
      cta: 'Bekijk alle projecten',
      empty: 'Er zijn nog geen projecten beschikbaar. Kom binnenkort terug.',
    },
    about: {
      title: 'Over mij',
      intro: 'Een designgerichte developer met passie voor mooie en functionele webervaringen.',
      profileTitle: 'Frontend Developer & UI Designer',
      paragraphs: [
        'Ik ben een gepassioneerde frontend developer met 11 jaar professionele ervaring in het bouwen van gebruikersinterfaces. Mijn reis begon in 1998 als DTP-specialist, waar ik mijn gevoel voor designprincipes, typografie en visuele hiërarchie ontwikkelde.',
        'Deze unieke achtergrond geeft mij een duidelijk voordeel in frontend development. Ik schrijf niet alleen code, maar begrijp ook gebruikerservaringen en het belang van pixel-perfecte implementatie. Ik specialiseer mij in:',
      ],
      specialties: [
        'Responsive webdesign',
        'UI-implementatie',
        'Component-based development',
        'Performance optimalisatie',
        'Cross-browser compatibiliteit',
        'Het gebruik van GitHub Copilot voor codegeneratie en optimalisatie',
      ],
      timelineTitle: 'Carrierepad',
      timeline: [
        {
          period: '2024 - heden',
          title: 'Senior Frontend Developer',
          description: 'Responsive webapplicaties ontwikkeld met moderne frameworks en AI-technologie.',
        },
        {
          period: '2013 - 2024',
          title: 'Frontend Developer',
          description: 'Responsive webapplicaties ontwikkeld met het Intershop framework en aanverwante technologieen.',
        },
        {
          period: '1998 - 2013',
          title: 'DTP Specialist',
          description: 'Gespecialiseerd in printdesign en opmaak, met een sterk oog voor detail en vormgeving.',
        },
      ],
      skillsTitle: 'Skills & Expertise',
      skillGroups: [
        {
          category: 'Frontend technologieen',
          skills: ['HTML5', 'CSS', 'SCSS', 'TailwindCSS', 'JavaScript/TypeScript'],
        },
        {
          category: 'Frameworks & libraries',
          skills: ['Intershop', 'Angular', 'React', 'Vue3', 'Next.js'],
        },
        {
          category: 'Tools & workflow',
          skills: ['Git & GitHub', 'SCRUM', 'Jira', 'Debugging', 'GitHub Copilot'],
        },
      ],
    },
    contact: {
      title: 'Neem contact op',
      intro: 'Heb je een project in gedachten? Ik hoor er graag meer over. Stuur me een bericht en laten we bespreken hoe ik je idee tot leven kan brengen.',
      formTitle: 'Stuur mij een bericht',
      faqTitle: 'Veelgestelde vragen',
      faqs: [
        {
          question: 'Wat is je gebruikelijke reactietijd?',
          answer: 'Ik reageer meestal binnen 24 uur op werkdagen. Voor urgente zaken kun je me ook direct benaderen via e-mail of LinkedIn.',
        },
        {
          question: 'Werk je met bureaus of alleen direct met klanten?',
          answer: 'Ik werk zowel met bureaus als direct met klanten. Elk project beoordeel ik op basis van scope, planning en aansluiting op mijn expertise.',
        },
        {
          question: 'Hoe ziet jouw projectaanpak eruit?',
          answer: 'Ik werk gestructureerd: discovery, planning, design, development, testen en deployment. Door regelmatige afstemming blijft het eindresultaat scherp en passend.',
        },
        {
          question: 'Wat is je prijsmodel?',
          answer: 'De prijs hangt af van scope, complexiteit en looptijd. Ik werk zowel projectmatig als op uurbasis. Laten we je wensen bespreken voor de beste vorm.',
        },
      ],
    },
    contactForm: {
      fullName: 'Naam',
      email: 'E-mailadres',
      message: 'Bericht',
      namePlaceholder: 'Jouw naam',
      emailPlaceholder: 'jij@example.com',
      messagePlaceholder: 'Vertel me meer over je project...',
      send: 'Bericht versturen',
      sending: 'Bezig met versturen...',
      successTitle: 'Bericht verstuurd!',
      successBody: 'Bedankt voor je bericht. Ik neem zo snel mogelijk contact met je op.',
      validation: {
        nameRequired: 'Naam is verplicht',
        emailRequired: 'E-mail is verplicht',
        emailInvalid: 'Vul een geldig e-mailadres in',
        messageRequired: 'Bericht is verplicht',
        messageShort: 'Bericht moet minimaal 10 tekens bevatten',
        fallbackError: 'Er ging iets mis bij het verzenden van je bericht. Probeer het opnieuw.',
        configError: 'EmailJS is nog niet geconfigureerd. Voeg NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID en NEXT_PUBLIC_EMAILJS_PUBLIC_KEY toe aan .env.local.',
      },
    },
    cookieBanner: {
      text: 'We gebruiken cookies om je ervaring te verbeteren en het gebruik van de site te analyseren. Door verder te gaan ga je akkoord met ons cookiebeleid.',
      accept: 'Accepteren',
    },
    portfolio: {
      title: 'Portfolio',
      intro: 'Bekijk mijn recente projecten en ontdek hoe ik digitale ervaringen help bouwen die echt werken.',
      noProjectsWith: 'Geen projecten gevonden met',
      noProjects: 'Er zijn nog geen projecten beschikbaar',
      clearFilter: 'Filter wissen',
      workedWithTitle: 'Tech Stack waar ik mee gewerkt heb',
      workedWithIntro: 'Ontdek met welke technologieen ik in recente projecten gewerkt heb.',
      all: 'Alles',
      visitWebsite: 'Bezoek website',
      viewCode: 'Bekijk code',
      technologiesUsed: 'Gebruikte technologieen',
      projectDetails: 'Projectdetails',
      gallery: 'Galerij',
      backToPortfolio: 'Terug naar portfolio',
      ctaTitle: 'Interesse om samen te werken?',
      ctaBody: 'Laten we je volgende project bespreken en kijken hoe ik je idee tot leven kan brengen.',
      ctaButton: 'Neem contact op',
      openImage: 'Open afbeelding:',
      closeImage: 'Afbeelding sluiten',
      previousImage: 'Vorige afbeelding',
      nextImage: 'Volgende afbeelding',
      expandedImage: 'Vergrote galerijafbeelding',
    },
    projectCard: {
      viewProject: 'Bekijk project',
    },
    examplesPage: {
      badge: 'Showcase',
      title: 'Voorbeelden',
      accent: 'met wow-effect',
      description: 'Interactieve loaders die je direct kunt bekijken, openen en 1-op-1 kopieren voor je eigen website.',
    },
    loaderDemo: {
      heading: 'Loader Gallery',
      viewCode: 'Bekijk code',
    },
    loaderDetail: {
      back: 'Terug naar gallery',
      livePreview: 'Live preview',
      usageTitle: 'Hoe gebruik je dit op je website',
      copyTitle: 'Kopieerbare Code',
      copyButton: 'Kopieer code',
      copiedButton: 'Gekopieerd',
      helpLabel: 'Hulp nodig?',
      helpTitle: 'Neem contact op.',
      helpBody: 'Ik help je graag met het implementeren, finetunen of customizen van deze loader op je website.',
      helpButton: 'Contact',
    },
  },
  en: {
    header: {
      nav: {
        home: 'Home',
        examples: 'Examples',
        portfolio: 'Portfolio',
        about: 'About',
        contact: 'Contact',
      },
      mobileMenuLabel: 'Mobile navigation menu',
      mobilePrompt: "Let's build something great together.",
      toggleMenu: 'Toggle menu',
      languageLabel: 'Switch language',
    },
    footer: {
      aboutTitle: 'Frontend Developer',
      aboutDescription: 'I create beautiful, functional, and accessible web experiences with modern technology.',
      quickLinks: 'Quick Links',
      connect: 'Connect',
      contactFormAria: 'Go to contact form',
      rights: 'All rights reserved.',
      backToTop: 'Back to top',
    },
    hero: {
      titlePrefix: 'Frontend',
      titleAccent: 'UI',
      titleSuffix: 'Developer',
      description:
        'I am a Front-end UI Developer with 11 years of experience. Before that I worked for 15 years as a DTP specialist. Because of that combination I specialize not only in designing interfaces, but also in implementing them perfectly in code. I focus on clean, responsive, user-friendly interfaces that work seamlessly on both mobile and desktop.',
      primaryCta: 'View my work',
      secondaryCta: 'Get in touch',
    },
    techStack: {
      heading: 'Tech Stack',
      description: 'Technologies and tools I use to build strong digital experiences',
    },
    latestProjects: {
      heading: 'Latest Projects',
      description: 'A selection of recent work that showcases my frontend expertise',
      cta: 'View all projects',
      empty: 'No projects available yet. Check back soon.',
    },
    about: {
      title: 'About Me',
      intro: 'A design-focused developer with a passion for beautiful and functional web experiences.',
      profileTitle: 'Frontend Developer & UI Designer',
      paragraphs: [
        'I am a passionate frontend developer with 11 years of professional experience building user interfaces. My journey started in 1998 as a DTP specialist, where I developed a strong eye for design principles, typography, and visual hierarchy.',
        'That unique background gives me a real advantage in frontend development. I do not just write code, I understand user experiences and the importance of pixel-perfect implementation. I specialize in:',
      ],
      specialties: [
        'Responsive web design',
        'UI implementation',
        'Component-based development',
        'Performance optimization',
        'Cross-browser compatibility',
        'Using GitHub Copilot for code generation and optimization',
      ],
      timelineTitle: 'Career Timeline',
      timeline: [
        {
          period: '2024 - Present',
          title: 'Senior Frontend Developer',
          description: 'Built responsive web applications using modern frameworks and AI technology.',
        },
        {
          period: '2013 - 2024',
          title: 'Frontend Developer',
          description: 'Built responsive web applications using the Intershop framework and related technologies.',
        },
        {
          period: '1998 - 2013',
          title: 'DTP Specialist',
          description: 'Specialized in print design and layout, developing a sharp eye for detail and composition.',
        },
      ],
      skillsTitle: 'Skills & Expertise',
      skillGroups: [
        {
          category: 'Frontend technologies',
          skills: ['HTML5', 'CSS', 'SCSS', 'TailwindCSS', 'JavaScript/TypeScript'],
        },
        {
          category: 'Frameworks & libraries',
          skills: ['Intershop', 'Angular', 'React', 'Vue3', 'Next.js'],
        },
        {
          category: 'Tools & workflow',
          skills: ['Git & GitHub', 'SCRUM', 'Jira', 'Debugging', 'GitHub Copilot'],
        },
      ],
    },
    contact: {
      title: 'Get in touch',
      intro: 'Have a project in mind? I would love to hear about it. Send me a message and let us discuss how I can help bring your ideas to life.',
      formTitle: 'Send me a message',
      faqTitle: 'Frequently asked questions',
      faqs: [
        {
          question: 'What is your typical response time?',
          answer: 'I usually respond within 24 hours on business days. For urgent matters, feel free to reach out via email or LinkedIn.',
        },
        {
          question: 'Do you work with agencies or only direct clients?',
          answer: 'I work with both agencies and direct clients. Each project is evaluated based on scope, timeline, and fit with my expertise.',
        },
        {
          question: 'What does your project process look like?',
          answer: 'I follow a structured approach: discovery, planning, design, development, testing, and deployment. Regular communication keeps the result aligned.',
        },
        {
          question: 'What is your pricing model?',
          answer: 'Pricing depends on scope, complexity, and duration. I offer both project-based and hourly rates. Let us discuss what fits your needs best.',
        },
      ],
    },
    contactForm: {
      fullName: 'Full name',
      email: 'Email address',
      message: 'Message',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'you@example.com',
      messagePlaceholder: 'Tell me about your project...',
      send: 'Send message',
      sending: 'Sending...',
      successTitle: 'Message sent!',
      successBody: 'Thanks for reaching out. I will get back to you as soon as possible.',
      validation: {
        nameRequired: 'Name is required',
        emailRequired: 'Email is required',
        emailInvalid: 'Please enter a valid email address',
        messageRequired: 'Message is required',
        messageShort: 'Message must be at least 10 characters',
        fallbackError: 'Something went wrong while sending your message. Please try again.',
        configError: 'EmailJS is not configured yet. Add NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, and NEXT_PUBLIC_EMAILJS_PUBLIC_KEY to .env.local.',
      },
    },
    cookieBanner: {
      text: 'We use cookies to enhance your experience and analyze site usage. By continuing, you agree to our cookie policy.',
      accept: 'Accept',
    },
    portfolio: {
      title: 'Portfolio',
      intro: 'Explore my recent projects and see how I help build digital experiences that truly work.',
      noProjectsWith: 'No projects found with',
      noProjects: 'No projects available yet',
      clearFilter: 'Clear filter',
      workedWithTitle: 'Tech stack I have worked with',
      workedWithIntro: 'Explore the technologies I have used in recent projects.',
      all: 'All',
      visitWebsite: 'Visit website',
      viewCode: 'View code',
      technologiesUsed: 'Technologies used',
      projectDetails: 'Project details',
      gallery: 'Gallery',
      backToPortfolio: 'Back to portfolio',
      ctaTitle: 'Interested in working together?',
      ctaBody: 'Let us discuss your next project and see how I can help bring your ideas to life.',
      ctaButton: 'Get in touch',
      openImage: 'Open image:',
      closeImage: 'Close image preview',
      previousImage: 'Previous image',
      nextImage: 'Next image',
      expandedImage: 'Expanded gallery image',
    },
    projectCard: {
      viewProject: 'View project',
    },
    examplesPage: {
      badge: 'Showcase',
      title: 'Examples',
      accent: 'with wow-effect',
      description: 'Interactive loaders you can preview, open, and copy 1-to-1 for your own website.',
    },
    loaderDemo: {
      heading: 'Loader Gallery',
      viewCode: 'View code',
    },
    loaderDetail: {
      back: 'Back to gallery',
      livePreview: 'Live preview',
      usageTitle: 'How to use this on your website',
      copyTitle: 'Copyable Code',
      copyButton: 'Copy code',
      copiedButton: 'Copied',
      helpLabel: 'Need help?',
      helpTitle: 'Get in touch.',
      helpBody: 'I would be happy to help you implement, fine-tune, or customize this loader on your website.',
      helpButton: 'Contact',
    },
  },
} as const

export type Messages = (typeof translations)[Locale]

export function getMessages(locale: Locale): Messages {
  return translations[locale]
}
