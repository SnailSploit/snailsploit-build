# AI Security Wiki - Implementation Guide for Claude Code

## Overview

This folder contains the content for the AI Security Wiki. Claude Code should use these files to build out the wiki section of snailsploit.com.

**Content created:** 17,000+ words
**Files:** 14 markdown files (4 hub pages, 10 entries)

---

## File Structure

```
wiki-content/
├── hub-pages/                   # Category landing pages (substantial, avoid thin content)
│   ├── wiki-index.md           # Main /wiki/ hub
│   ├── concepts-index.md       # /wiki/concepts/ category hub
│   ├── attacks-index.md        # /wiki/attacks/ category hub
│   └── defenses-index.md       # /wiki/defenses/ category hub
└── entries/                     # Individual wiki entries
    ├── concepts/
    │   ├── adversarial-ai.md
    │   ├── ai-red-teaming.md
    │   └── prompt-injection.md
    └── attacks/
        ├── data-poisoning.md
        ├── guardrail-bypass.md
        ├── indirect-prompt-injection.md
        ├── jailbreaking.md
        ├── model-extraction.md
        ├── supply-chain-attacks.md
        └── system-prompt-extraction.md
```

---

## URL Mapping

| File | URL |
|------|-----|
| wiki-index.md | `/wiki/` |
| concepts-index.md | `/wiki/concepts/` |
| attacks-index.md | `/wiki/attacks/` |
| defenses-index.md | `/wiki/defenses/` |
| concepts/prompt-injection.md | `/wiki/concepts/prompt-injection/` |
| concepts/adversarial-ai.md | `/wiki/concepts/adversarial-ai/` |
| concepts/ai-red-teaming.md | `/wiki/concepts/ai-red-teaming/` |
| attacks/jailbreaking.md | `/wiki/attacks/jailbreaking/` |
| attacks/indirect-prompt-injection.md | `/wiki/attacks/indirect-prompt-injection/` |
| attacks/data-poisoning.md | `/wiki/attacks/data-poisoning/` |
| attacks/model-extraction.md | `/wiki/attacks/model-extraction/` |
| attacks/system-prompt-extraction.md | `/wiki/attacks/system-prompt-extraction/` |
| attacks/guardrail-bypass.md | `/wiki/attacks/guardrail-bypass/` |
| attacks/supply-chain-attacks.md | `/wiki/attacks/supply-chain-attacks/` |

**CRITICAL:** All URLs must end with trailing slash to match site configuration.

---

## Implementation Options

### Option A: MDX Content Collection (Recommended)

Create a new content collection for wiki entries:

```typescript
// src/content/config.ts
const wiki = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['concepts', 'attacks', 'defenses', 'vulnerabilities', 'frameworks', 'tools', 'cases']),
    relatedEntries: z.array(z.string()).optional(),
    frameworkMappings: z.record(z.string()).optional(),
    lastUpdated: z.date().optional(),
  }),
});
```

### Option B: Static Astro Pages

Create Astro pages directly in `src/pages/wiki/`.

---

## SEO Requirements

### Per-Entry Schema Markup

Each wiki entry should include `TechArticle` or `DefinedTerm` schema:

```json
{
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "[Entry Title]",
  "description": "[First paragraph as description]",
  "author": {
    "@type": "Person",
    "name": "Kai Aizen"
  },
  "datePublished": "2025-01-24",
  "url": "https://snailsploit.com/wiki/[category]/[slug]/"
}
```

### Canonical Tags

Every page needs canonical tag pointing to itself with trailing slash:
```html
<link rel="canonical" href="https://snailsploit.com/wiki/concepts/prompt-injection/" />
```

### Meta Tags

Extract from each entry:
- **title**: First H1
- **description**: First paragraph after definition section (or Definition text)

---

## Component Suggestions

### V3WikiEntry.astro
Standard layout for wiki entries with:
- Breadcrumb navigation
- Table of contents (auto-generated from headings)
- Related entries sidebar
- Framework mappings display
- Citation block styling
- Previous/Next navigation

### V3WikiHub.astro
Category hub pages with:
- Category description
- Entry listing with excerpts
- Category navigation
- Search functionality (future)

### V3WikiNav.astro
Wiki-specific navigation:
- Category links
- Search (future)
- "Edit on GitHub" (future)

---

## Internal Linking

All internal links in the content are formatted as:
```markdown
[Link Text](/wiki/category/slug/)
```

These should work as-is when pages are created at correct URLs.

---

## Lead Generation Integration

Hub pages can include gated downloads. Suggested assets:
- `/wiki/` → "AI Security Taxonomy Poster" (PDF)
- `/wiki/attacks/` → "Attack Pattern Cheat Sheet" (PDF)
- `/wiki/defenses/` → "Defense Checklist" (PDF)

Use existing `V3DownloadGate.tsx` component.

---

## Future Expansion

### Additional entries to create:
- `/wiki/concepts/llm-security/`
- `/wiki/concepts/adversarial-examples/`
- `/wiki/attacks/training-data-extraction/`
- `/wiki/attacks/membership-inference/`
- `/wiki/attacks/agent-hijacking/`
- `/wiki/defenses/trust-boundaries/`
- `/wiki/defenses/input-validation/`
- `/wiki/frameworks/aatmf/`
- `/wiki/frameworks/owasp-llm-top-10/`
- `/wiki/frameworks/mitre-atlas/`

### Features to add:
- Full-text search
- Version history
- Community contributions
- API for programmatic access (GEO optimization)

---

## DO NOT MODIFY (SEO Protection)

When implementing:
- Keep all existing site SEO infrastructure
- Use BaseLayout.astro as-is
- Maintain canonical tag patterns
- Preserve trailing slash configuration
- Don't add noindex anywhere

---

## Validation After Implementation

```bash
# Check wiki pages exist
curl -s -o /dev/null -w "%{http_code}" https://snailsploit.com/wiki/

# Verify canonical tags
curl -s https://snailsploit.com/wiki/concepts/prompt-injection/ | grep canonical

# Check for noindex (should find nothing)
curl -s https://snailsploit.com/wiki/ | grep -i noindex

# Validate schema markup
# Use Google Rich Results Test
```
