import { defaultLang } from '@/i18n/ui'
const TIMEZONE = 'UTC'

const DATE_COUNTRY_TYPE = {
  es: 'es-GT',
  en: 'en-US'
}

export function formatDate({
  date,
  timezone,
  lang
}: {
  date: Date | number
  timezone?: string
  lang: 'es' | 'en'
}) {
  const dateLocale = DATE_COUNTRY_TYPE[lang] || DATE_COUNTRY_TYPE[defaultLang]

  return new Intl.DateTimeFormat(dateLocale, {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    timeZone: timezone ?? TIMEZONE
  }).format(date)
}

export function formatTime({
  time,
  timezone,
  lang
}: {
  time: Date | number
  timezone?: string
  lang: 'es' | 'en'
}) {
  const dateLocale = DATE_COUNTRY_TYPE[lang] || DATE_COUNTRY_TYPE[defaultLang]

  return new Intl.DateTimeFormat(dateLocale, {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
    timeZone: timezone
  }).format(time)
}
