// Site data
export const SITE = {
  TITLE_SHORT: 'ICPSJ',
  TITLE: 'La Presencia del Señor Jesús',
  TITLE_LONG: 'Iglesia de Cristo La Presencia del Señor Jesús',
  URL: import.meta.env.PUBLIC_SITE_URL as string,
  DOMAIN: new URL(import.meta.env.PUBLIC_SITE_URL as string).hostname,
  LANGUAGES: {
    DEFAULT: 'es',
    ES: 'es',
    EN: 'en'
  },
  SEO: {
    COLOR_PRIMARY: '#ff3500',
    COLOR_BACKGROUND: '#FFFFFF',
    FILES: {
      MANIFEST: '/manifest.webmanifest',
      BROWSER_CONFIG: '/browserconfig.xml',
      SITEMAP: '/sitemap-index.xml'
    },
    IMAGES: {
      BANNER_SOCIAL: '/banner-og.jpg',
      LOGO: '/logo.jpg',
      SYMBOL: '/symbol.jpg',
      ICON: {
        ICO: '/favicon.ico',
        ICO_32: '/favicon-32x32.png',
        ICO_16: '/favicon-16x16.png',
        APPLE: '/apple-touch-icon.png',
        ANDROID: {
          ICO_192: '/android-chrome-192x192.png',
          ICO_384: '/android-chrome-384x384.png'
        },
        SAFARI: '/safari-pinned-tab.svg'
      }
    }
  }
}

// Company related
export const COMPANY = {
  SOCIAL: {
    FACEBOOK: 'https://facebook.com',
    INSTAGRAM: 'https://instagram.com',
    YOUTUBE: 'https://youtube.com',
    WHATSAPP: 'https://whatsapp.com'
  },
  ADDRESS: {
    STREET: 'Zona 8, 12av. 13 calle',
    LOCALITY: 'Guatemala',
    COUNTRY: 'Guatemala',
    COUNTRY_CODE: 'GT',
    REGION: 'Mixco',
    POSTAL_CODE: '01057',
    FULL: 'Guatemala, Guatemala, Mixco, Zona 8 12av. 13 calle. 01057',
    LAT: 14.580235,
    LNG: -90.5186115
  },
  TELEPHONE: '+502-5555-5555',
  EMAILS: {
    INFO: 'info@' + SITE.DOMAIN
  },
  FOUNDING_DATE: '2024-03-04'
}

export const IMAGES_PATHS = {
  GENERAL: '/images',
  STUDIES: '/images/studies',
  DEVOTIONALS: '/images/devotionals',
  TEMPLATES: '/images/templates',
  LOGOS: '/logos',
  FALLBACKS: '/images/fallbacks'
}

export const IMAGES = {
  LOGOS: {
    LOGO: IMAGES_PATHS.LOGOS + '/logo.svg',
    LOGO_INVERTED: IMAGES_PATHS.LOGOS + '/logo-inverted.svg',
    LOGO_GRASYCALE: IMAGES_PATHS.LOGOS + '/logo-grayscale.svg',
    LOGO_GRASYCALE_INVERTED: IMAGES_PATHS.LOGOS + '/logo-grayscale-inverted.svg',
    SYMBOL: IMAGES_PATHS.LOGOS + '/symbol.svg',
    SYMBOL_GRASYCALE: IMAGES_PATHS.LOGOS + '/symbol-grayscale.svg',
    SYMBOL_NEGATIVE: IMAGES_PATHS.LOGOS + '/symbol-negative.svg',
    SYMBOL_POSITIVE: IMAGES_PATHS.LOGOS + '/symbol-positive.svg'
  },
  TEMPLATES: {
    VERSE: IMAGES_PATHS.TEMPLATES + '/verse.webp'
  },
  FALLBACKS: {
    AVATAR_CARD: IMAGES_PATHS.FALLBACKS + '/avatar-card.svg'
  },
  GENERAL: {
    LIBRARY: IMAGES_PATHS.GENERAL + '/library.webp',
    GROUP: IMAGES_PATHS.GENERAL + '/group.jpg',
    READING_BIBLE: IMAGES_PATHS.GENERAL + '/reading-bible.webp',
    AUDITORIUM_EMPTY: IMAGES_PATHS.GENERAL + '/auditorium-1.webp',
    AUDITORIUM_FULL: IMAGES_PATHS.GENERAL + '/auditorium-2.webp',
    AUDITORIUM_B_W: IMAGES_PATHS.GENERAL + '/auditorium-b&w.webp',
    HANDS_ADORATION: IMAGES_PATHS.GENERAL + '/hands-adoration.jpg',
    TEACHING: IMAGES_PATHS.GENERAL + '/teaching.jpg',
    PREACH: IMAGES_PATHS.GENERAL + '/preach.jpg',
    PREACH_2: IMAGES_PATHS.GENERAL + '/preach-2.jpg'
  },
  AVATARS: {
    JESUS: '',
    HUGO: '',
    HERMINIO: ''
  }
}

export const BIBLE_BOOKS = {
  es: [
    'Génesis',
    'Éxodo',
    'Levítico',
    'Números',
    'Deuteronomio',
    'Josué',
    'Jueces',
    'Rut',
    '1 Samuel',
    '2 Samuel',
    '1 Reyes',
    '2 Reyes',
    '1 Crónicas',
    '2 Crónicas',
    'Esdras',
    'Nehemías',
    'Ester',
    'Job',
    'Salmos',
    'Proverbios',
    'Eclesiastés',
    'Cantares',
    'Isaías',
    'Jeremías',
    'Lamentaciones',
    'Ezequiel',
    'Daniel',
    'Oseas',
    'Joel',
    'Amós',
    'Abdías',
    'Jonás',
    'Miqueas',
    'Nahúm',
    'Habacuc',
    'Sofonías',
    'Hageo',
    'Zacarías',
    'Malaquías',
    'Mateo',
    'Marcos',
    'Lucas',
    'Juan',
    'Hechos',
    'Romanos',
    '1 Corintios',
    '2 Corintios',
    'Gálatas',
    'Efesios',
    'Filipenses',
    'Coloseneses',
    '1 Tesalonicenses',
    '2 Tesalonicenses',
    '1 Timoteo',
    '2 Timoteo',
    'Tito',
    'Filemón',
    'Hebreos',
    'Santiago',
    '1 Pedro',
    '2 Pedro',
    '1 Juan',
    '2 Juan',
    '3 Juan',
    'Judas',
    'Apocalipsis'
  ],
  en: [
    'Genesis',
    'Exodus',
    'Leviticus',
    'Numbers',
    'Deuteronomy',
    'Joshua',
    'Judges',
    'Ruth',
    '1 Samuel',
    '2 Samuel',
    '1 Kings',
    '2 Kings',
    '1 Chronicles',
    '2 Chronicles',
    'Ezra',
    'Nehemiah',
    'Esther',
    'Job',
    'Psalms',
    'Proverbs',
    'Ecclesiastes',
    'Song of Solomon',
    'Isaiah',
    'Jeremiah',
    'Lamentations',
    'Ezekiel',
    'Daniel',
    'Hosea',
    'Joel',
    'Amos',
    'Obadiah',
    'Jonah',
    'Micah',
    'Nahum',
    'Habakkuk',
    'Zephaniah',
    'Haggai',
    'Zechariah',
    'Malachi',
    'Matthew',
    'Mark',
    'Luke',
    'John',
    'Acts',
    'Romans',
    '1 Corinthians',
    '2 Corinthians',
    'Galatians',
    'Ephesians',
    'Philippians',
    'Colossians',
    '1 Thessalonians',
    '2 Thessalonians',
    '1 Timothy',
    '2 Timothy',
    'Titus',
    'Philemon',
    'Hebrews',
    'James',
    '1 Peter',
    '2 Peter',
    '1 John',
    '2 John',
    '3 John',
    'Jude',
    'Revelation'
  ]
}

// <script type='application/ld+json' class='yoast-schema-graph'>
//   {
//     "@context": "https://schema.org",
//     "@graph": [
//       {
//         "@type": "Article",
//         "@id": "https://casadedios.org/?p=15570#article",
//         "isPartOf": { "@id": "https://casadedios.org/?p=15570" },
//         "author": {
//           "name": "Comunicacion cdd",
//           "@id": "https://casadedios.org/#/schema/person/4f22c7b1c8424895d9ab7576cd64acc3"
//         },
//         "headline": "Nuevos horarios en los servicios dominicales",
//         "datePublished": "2022-07-06T16:00:54+00:00",
//         "dateModified": "2024-02-18T16:34:18+00:00",
//         "mainEntityOfPage": { "@id": "https://casadedios.org/?p=15570" },
//         "wordCount": 314,
//         "commentCount": 0,
//         "publisher": { "@id": "https://casadedios.org/#organization" },
//         "image": { "@id": "https://casadedios.org/?p=15570#primaryimage" },
//         "thumbnailUrl": "https://casadedios.org/wp-content/uploads/2022/07/BANNER-NOTICIAS-NUEVO-HORARIO.png",
//         "keywords": ["Fe", "Servicios", "Servicios dominicales"],
//         "articleSection": ["Noticias"],
//         "inLanguage": "es",
//         "potentialAction": [
//           {
//             "@type": "CommentAction",
//             "name": "Comment",
//             "target": ["https://casadedios.org/?p=15570#respond"]
//           }
//         ]
//       },
//       {
//         "@type": "WebPage",
//         "@id": "https://casadedios.org/?p=15570",
//         "url": "https://casadedios.org/?p=15570",
//         "name": "Nuevos horarios en los servicios dominicales - Casa de Dios",
//         "isPartOf": { "@id": "https://casadedios.org/#website" },
//         "primaryImageOfPage": { "@id": "https://casadedios.org/?p=15570#primaryimage" },
//         "image": { "@id": "https://casadedios.org/?p=15570#primaryimage" },
//         "thumbnailUrl": "https://casadedios.org/wp-content/uploads/2022/07/BANNER-NOTICIAS-NUEVO-HORARIO.png",
//         "datePublished": "2022-07-06T16:00:54+00:00",
//         "dateModified": "2024-02-18T16:34:18+00:00",
//         "description": "Para garantizar que nadie se pierda de un momento con el Señor de forma segura, Casa de Dios ha modificado los horarios de los distintos servicios dominicales.",
//         "breadcrumb": { "@id": "https://casadedios.org/?p=15570#breadcrumb" },
//         "inLanguage": "es",
//         "potentialAction": [
//           { "@type": "ReadAction", "target": ["https://casadedios.org/?p=15570"] }
//         ]
//       },
//       {
//         "@type": "ImageObject",
//         "inLanguage": "es",
//         "@id": "https://casadedios.org/?p=15570#primaryimage",
//         "url": "https://casadedios.org/wp-content/uploads/2022/07/BANNER-NOTICIAS-NUEVO-HORARIO.png",
//         "contentUrl": "https://casadedios.org/wp-content/uploads/2022/07/BANNER-NOTICIAS-NUEVO-HORARIO.png",
//         "width": 1136,
//         "height": 370
//       },
//       {
//         "@type": "BreadcrumbList",
//         "@id": "https://casadedios.org/?p=15570#breadcrumb",
//         "itemListElement": [
//           {
//             "@type": "ListItem",
//             "position": 1,
//             "name": "Portada",
//             "item": "https://casadedios.org/"
//           },
//           {
//             "@type": "ListItem",
//             "position": 2,
//             "name": "Nuevos horarios en los servicios dominicales"
//           }
//         ]
//       },
//       {
//         "@type": "WebSite",
//         "@id": "https://casadedios.org/#website",
//         "url": "https://casadedios.org/",
//         "name": "Casa de Dios",
//         "description": "Mi Casa",
//         "publisher": { "@id": "https://casadedios.org/#organization" },
//         "potentialAction": [
//           {
//             "@type": "SearchAction",
//             "target": {
//               "@type": "EntryPoint",
//               "urlTemplate": "https://casadedios.org/?s={search_term_string}"
//             },
//             "query-input": "required name=search_term_string"
//           }
//         ],
//         "inLanguage": "es"
//       },
//       {
//         "@type": "Organization",
//         "@id": "https://casadedios.org/#organization",
//         "name": "Iglesia Cristiana Casa de Dios",
//         "alternateName": "Casa de Dios",
//         "url": "https://casadedios.org/",
//         "logo": {
//           "@type": "ImageObject",
//           "inLanguage": "es",
//           "@id": "https://casadedios.org/#/schema/logo/image/",
//           "url": "https://casadedios.org/wp-content/uploads/2019/11/logo_casa_de_dios_comunicado.jpg",
//           "contentUrl": "https://casadedios.org/wp-content/uploads/2019/11/logo_casa_de_dios_comunicado.jpg",
//           "width": 160,
//           "height": 160,
//           "caption": "Iglesia Cristiana Casa de Dios"
//         },
//         "image": { "@id": "https://casadedios.org/#/schema/logo/image/" },
//         "sameAs": [
//           "https://www.facebook.com/CasadeDiosOficial",
//           "https://x.com/casadedios",
//           "https://www.instagram.com/casadediosoficial/",
//           "https://www.youtube.com/user/CasadeDiosOficial"
//         ]
//       },
//       {
//         "@type": "Person",
//         "@id": "https://casadedios.org/#/schema/person/4f22c7b1c8424895d9ab7576cd64acc3",
//         "name": "Comunicacion cdd",
//         "image": {
//           "@type": "ImageObject",
//           "inLanguage": "es",
//           "@id": "https://casadedios.org/#/schema/person/image/",
//           "url": "https://secure.gravatar.com/avatar/c250273e31108cfbe38c0388cd1395ea?s=96&d=mm&r=g",
//           "contentUrl": "https://secure.gravatar.com/avatar/c250273e31108cfbe38c0388cd1395ea?s=96&d=mm&r=g",
//           "caption": "Comunicacion cdd"
//         }
//       }
//     ]
//   }
// </script>

