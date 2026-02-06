import { defaultLang, routes, showDefaultLang, ui, type Route } from '@/i18n/ui'

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/')
  if (lang in ui) return lang as keyof typeof ui
  return defaultLang
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key]
  }
}

export function useTranslatedPath(lang: keyof typeof routes) {
  return function translatePath(path: string, l: keyof typeof routes = lang): string {
    const pathParts = path.split('/').filter(part => part)

    // Función recursiva para encontrar la traducción de la ruta
    const getTranslation = (parts: string[], routeObj: Record<string, any>): string => {
      if (parts.length === 0) return ''
      const [currentPart, ...restParts] = parts
      const translatedPart = Object.keys(routeObj).find(
        key => routeObj[key] === currentPart || key === currentPart
      )

      if (translatedPart) {
        const nextRouteObj = routeObj[translatedPart]

        if (typeof nextRouteObj === 'string') {
          return `/${nextRouteObj}${getTranslation(restParts, routeObj)}`
        }
        return `/${Object.values(nextRouteObj)[0]}${getTranslation(restParts, nextRouteObj)}`
      }

      // Retorna la parte sin traducir si no se encuentra
      return `/${currentPart}${getTranslation(restParts, routeObj)}`
    }

    const translatedPath = defaultLang !== l ? getTranslation(pathParts, routes[l]) : path

    return !showDefaultLang && l === defaultLang ? translatedPath : `/${l}${translatedPath}`
  }
}

export function translateRoute(pathname: string): string {
  const pathParts = pathname.split('/').filter(part => part !== '') // Dividir y eliminar partes vacías
  const langPrefix = pathParts[1] // Obtener el prefijo de idioma, si existe

  // Verificar si hay un prefijo de idioma y si es diferente al idioma por defecto
  if (langPrefix && langPrefix !== defaultLang && Object.keys(routes).includes(langPrefix)) {
    let currentObject: any = routes[langPrefix]
    let translatedParts: string[] = []

    // Iterar sobre las partes de la ruta y traducirlas si es posible
    for (let i = 2; i < pathParts.length; i++) {
      const part = pathParts[i]
      if (currentObject[part]) {
        const translation =
          typeof currentObject[part] === 'object' ? routes[defaultLang][part] : currentObject[part]

        translatedParts.push(translation)
        currentObject = currentObject[part] // Avanzar al siguiente nivel
      } else {
        // Si no hay traducción disponible, mantener la parte original
        translatedParts.push(part)
      }
    }

    // Reconstruir la ruta traducida
    const translatedPath = `/${translatedParts.join('/')}`
    return translatedPath
  }

  // Si la ruta está en español o no tiene prefijo, devolverla como está
  return pathname
}

export function getRouteFromUrl(url: URL): Route | undefined {
  const pathname = new URL(url).pathname
  const parts = pathname?.split('/')
  parts.shift()
  const path = parts[parts.length - 1]

  if (path === undefined) {
    return undefined
  }

  const currentLang = getLangFromUrl(url)

  if (defaultLang === currentLang) {
    const route = Object.values(routes)[0]
    const translatedRoute = route[parts[0]]

    if (typeof translatedRoute === 'object') {
      if (translatedRoute.index === path) return '/' + translatedRoute.index

      for (const key in translatedRoute) {
        if (typeof key !== 'object' && translatedRoute[key] === path)
          return '/' + translatedRoute.index + '/' + translatedRoute[key]

        for (const key2 in translatedRoute[key]) {
          if (typeof key !== 'object' && translatedRoute[key][key2] === path)
            return '/' + translatedRoute.index + '/' + translatedRoute[key][key2]
        }
      }
    }

    return route[path] !== undefined ? '/' + route[path] : parts[0]
  }

  type NestedObject = { [key: string]: any }

  function findKeyByValue(
    obj: NestedObject,
    value: string,
    isFirstCall: boolean = true
  ): string | undefined {
    for (const key in obj) {
      if (isFirstCall) {
        if (typeof obj[key] === 'object' && obj[key].index !== parts[1]) {
          continue
        }
      }
      if (
        typeof obj[key] === 'object' &&
        obj[key] !== null
        // (obj[key].index === parts[1] || obj[key].index === parts[2])
      ) {
        const result = findKeyByValue(obj[key], value, false)
        if (result !== undefined) {
          if (
            result === path ||
            result === '' ||
            !parts.includes(obj[key][result]?.index ? obj[key][result].index : obj[key][result])
          ) {
            return key
          }

          return key + '/' + result
        }
      } else if (obj[key] === value) {
        return key !== 'index' ? key : ''
      }
    }
    return ''
  }

  const reversedKey = findKeyByValue(routes[currentLang], path)

  if (reversedKey !== undefined) {
    return '/' + reversedKey
  }

  return undefined
}
