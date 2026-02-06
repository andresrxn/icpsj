import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'
import { loadEnv } from 'vite'

import cloudflare from '@astrojs/cloudflare'

const { PUBLIC_SITE_URL } = loadEnv(process.env.PUBLIC_SITE_URL!, process.cwd(), '')

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en']
  },

  site: PUBLIC_SITE_URL,

  devToolbar: {
    enabled: true
  },

  output: 'static',

  legacy: {
    collections: true
  },

  integrations: [
    mdx(),
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es',
          en: 'en'
        }
      }
    }),
    tailwind({
      applyBaseStyles: false,
      configFile: 'tailwind.config.ts'
    })
  ],
  vite: {
    build: {
      minify: false
    }
  },
  adapter: cloudflare()
})

