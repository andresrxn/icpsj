export function readingTime(html: string) {
  const textOnly = html.replace(/<[^>]+>/g, '')
  const wordCount = textOnly.split(/\s+/).length
  const readingTimeMinutes = (wordCount / 200 + 1).toFixed()
  return `${readingTimeMinutes} min read`
}

export function capitalize(str: string) {
  if (typeof str !== 'string' || str.length === 0) {
    return str
  }

  return str.charAt(0).toLocaleUpperCase() + str.slice(1)
}

export function formatSlug(str: string) {
  return str.replace(/^[^/]*\//, '')
}

export function removeDiacritics(str: string) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}
