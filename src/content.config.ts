import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const toolsCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,json}', base: './src/content/tools' }),
  schema: z.object({
    name: z.string(),
    shortDescription: z.string(),
    category: z.string(),
    categoryId: z.enum(['developer', 'text', 'image', 'security']),
    executionMode: z.enum(['client', 'worker', 'background']).default('client'),
    implementationId: z.string(),
    privacyNotice: z.string(),
    howToUse: z.array(z.object({
      step: z.string(),
      text: z.string()
    })),
    features: z.array(z.string()),
    limitations: z.array(z.string()),
    faqs: z.array(z.object({
      q: z.string(),
      a: z.string()
    })).default([]),
    relatedTools: z.array(z.string()).default([]),
    seoTitle: z.string(),
    seoDescription: z.string(),
    status: z.enum(['published', 'draft']).default('published'),
    featured: z.boolean().default(false),
  }),
});

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedDate: z.coerce.date(),
    author: z.string().default('ToolXDev Team'),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    coverImage: z.string().optional(),
    status: z.enum(['published', 'draft']).default('published'),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  tools: toolsCollection,
  blog: blogCollection,
};
