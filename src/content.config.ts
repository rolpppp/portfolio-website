import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Case-study fields per design-brief.md §3: Mission · Problem · Approach ·
// Technology Stack · Outcome · Lessons Learned. `summary` is the one-line
// impact statement shown on the collapsed card.
const expeditions = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/expeditions" }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    summary: z.string(),
    stack: z.array(z.string()),
    mission: z.string(),
    problem: z.string(),
    approach: z.string(),
    outcome: z.string(),
    lessons: z.string(),
  }),
});

// Research areas (design-brief.md §4) — field-notebook cards. `refs` are
// cross-references to the numbered Featured Expeditions ("EXP 02 · …") or
// standalone field studies; `figure` picks the card's line-drawn diagram.
const research = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/research" }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    status: z.enum(["Active", "Ongoing", "Exploring"]),
    description: z.string(),
    refs: z.array(z.string()),
    figure: z.enum(["vision", "ai", "ml", "graph", "optimization", "parsing", "systems"]),
  }),
});

// Writing dispatches (design-brief.md §7) — editorial list. Entries without
// a `url` and with `draft: true` render as "In draft" (no fake publications);
// set draft: false + url when a piece actually ships.
const writing = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/writing" }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    description: z.string(),
    date: z.coerce.date().optional(),
    url: z.string().url().optional(),
    draft: z.boolean().default(true),
  }),
});

export const collections = { expeditions, research, writing };
