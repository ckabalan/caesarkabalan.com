import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/**
 * Content schemas. If a required field is missing or misspelled in a markdown
 * file, `npm run build` fails with the file name and the offending field, so a
 * typo cannot quietly ship a broken page.
 */

const accomplishmentGroup = z.object({
  /** Optional sub-heading, e.g. "AI products". Use "" for an ungrouped list. */
  label: z.string().default(""),
  items: z.array(z.string()).min(1),
});

const experience = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/experience" }),
  schema: z.object({
    title: z.string(),
    org: z.string(),
    /** Roles sharing a group render under one org header with one logo. */
    group: z.string(),
    groupSpan: z.string(),
    logo: z.string(),
    logoAlt: z.string(),
    location: z.string().optional(),
    period: z.string(),
    /** Lower renders first. */
    order: z.number(),
    accomplishments: z.array(accomplishmentGroup).default([]),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    image: z.string(),
    imageAlt: z.string(),
    imageWidth: z.number(),
    imageHeight: z.number(),
    site: z.string().url(),
    siteLabel: z.string(),
    repo: z.string().url(),
    tenets: z.array(z.string()).default([]),
  }),
});

const publications = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/publications" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    publication: z.string(),
    date: z.string(),
    order: z.number(),
    image: z.string(),
    imageAlt: z.string(),
    imageWidth: z.number(),
    imageHeight: z.number(),
    coauthors: z.string().optional(),
    article: z.string().url(),
    repo: z.string().url(),
  }),
});

export const collections = { experience, projects, publications };
