import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Case-study fields per design-brief.md §3: Mission · Problem · Approach ·
// Technology Stack · Outcome · Lessons Learned. `summary` is the one-line
// impact statement shown on the collapsed card; `outcome` is also shown
// collapsed (design-review.md §E — recruiters skim, don't click).
// `repo`/`demo` are real, verified URLs only; `linkNote` explains when links
// can't exist (proprietary client work) instead of leaving a bare card.
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
    repo: z.string().url().optional(),
    demo: z.string().url().optional(),
    linkNote: z.string().optional(),
    // Cognitive-scan fields (design-review.md §E2): `context` is the
    // information-bearing eyebrow at the card's first-fixation point
    // ("HACKATHON — GOOGLE BANGKOK · 2025"); `metric` is the short
    // numeral-first stat on the right rail ("TOP 6 / 70+ TEAMS").
    context: z.string(),
    metric: z.string(),
    // Product screenshots (picture superiority, §E2.7) are folder-driven,
    // not frontmatter: drop images into
    // public/assets/images/expeditions/<this file's name>/ (see README.txt
    // there). No images = labeled placeholder frame — never a stock photo.
    // Where the work actually happened — real map data only (the review's
    // standard: "the Tacloban coordinates are real and earn their place").
    // `coords` renders on the card's right rail; `location` names the place
    // in the expanded report's "FILED FROM" line.
    location: z.string(),
    coords: z.string(),
  }),
});

// Research areas (design-brief.md §4) — field-notebook cards. `refs` are
// cross-references to Featured Expeditions by title (cards are unnumbered
// since the §E2 redesign) or standalone field studies; `figure` picks the
// card's line-drawn diagram.
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
