export const LANGUAGES: Record<string, { code: string; name: string }> = {
  en: {
    code: 'en',
    name: 'en'
  },
  es: {
    code: 'es',
    name: 'es'
  }
} as const

export type Route = string | Record<string, any>

export interface Routes {
  [lang: string]: {
    [key: string]: Route
  }
}

export const ui = {
  es: {
    home: 'Inicio',
    about: 'Acerca de',
    studies: 'Estudios',
    devotionals: 'Devocionales',
    resources: 'Recursos',
    schedule: 'Horarios',
    prayer: 'Oración',
    privacy: 'Política de Privacidad',
    terms: 'Términos y Condiciones',
    cookies: 'Política de Cookies',
    contact: 'Contacto'
  },
  en: {
    home: 'Home',
    about: 'About',
    studies: 'Studies',
    devotionals: 'Devotionals',
    resources: 'Resources',
    schedule: 'Schedule',
    prayer: 'Prayer',
    privacy: 'Privacy Policy',
    terms: 'Terms and Conditions',
    cookies: 'Cookies Policy',
    contact: 'Contact'
  }
} as const

export const defaultLang = 'es'
export const showDefaultLang = false

export const routes: Routes = {
  es: {
    'acerca-de': 'acerca-de',
    estudios: {
      index: 'estudios',
      buscar: 'buscar',
      libros: {
        index: 'libros'
      },
      '[...slug]': '[...slug]'
    },
    devocionales: {
      index: 'devocionales',
      buscar: 'buscar'
    },

    contacto: 'contacto',
    oracion: 'oracion',
    horarios: 'horarios',
    recursos: 'recursos',
    'politica-de-privacidad': 'politica-de-privacidad',
    'politica-de-cookies': 'politica-de-cookies',
    'terminos-y-condiciones': 'terminos-y-condiciones'
  },
  en: {
    'acerca-de': 'about',
    estudios: {
      index: 'studies',
      buscar: 'search',
      libros: {
        index: 'books'
      }
    },
    devocionales: {
      index: 'devotionals',
      buscar: 'search'
    },
    contacto: 'contact',
    oracion: 'prayer',
    horarios: 'schedule',
    recursos: 'resources',
    'politica-de-privacidad': 'privacy-policy',
    'politica-de-cookies': 'cookies-policy',
    'terminos-y-condiciones': 'terms-and-conditions'
  }
}
