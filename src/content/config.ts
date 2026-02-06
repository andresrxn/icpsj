import { defineCollection, z } from 'astro:content'

const studies = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    book: z.string(),
    en: z.string().optional(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    imageSrc: z.string(),
    imageAlt: z.string()
  })
})

const devotionals = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    verse: z.string(),
    cite: z.string(),
    en: z.string().optional(),
    tags: z.array(z.string()),
    description: z.string(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional()
  })
})

export const collections = { studies, devotionals }

