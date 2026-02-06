import { SITE } from '@/consts'

export function generateSiteTitle(title: string) {
  return `${title} | ${SITE.TITLE}`
}
