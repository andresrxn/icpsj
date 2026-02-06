import { SITE } from '@/consts'
import { NODE_ENV } from '@/consts.server'
import { type AstroCookieSetOptions } from 'astro'

export const COOKIES_OPTIONS: AstroCookieSetOptions = {
  httpOnly: true,
  sameSite: NODE_ENV === 'production',
  secure: NODE_ENV === 'production',
  domain: SITE.DOMAIN
}
