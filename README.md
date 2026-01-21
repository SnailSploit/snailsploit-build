# SnailSploit.com Build Package

## Contents

```
snailsploit-build/
├── INSTRUCTIONS.md      # Complete build specification (give this to Claude Code)
├── SEO-SPEC.md          # SEO strategy and keyword targeting
├── CONTENT-INVENTORY.md # Categorized list of all content
└── content-raw/         # Medium export with all articles
    └── medium-export/
        └── posts/       # 21 published + drafts
```

## How to Use with Claude Code

### 1. Setup

```bash
mkdir snailsploit-site
cd snailsploit-site
cp -r /path/to/snailsploit-build/* .
```

### 2. Launch Claude Code

```bash
claude
```

### 3. Give Claude Code this prompt:

```
Read INSTRUCTIONS.md and SEO-SPEC.md completely before starting.

Build the complete SnailSploit.com Astro site following the specifications exactly.

Content is in ./content-raw/medium-export/posts/

Parse the HTML files, convert to Markdown, and place in the correct directories as mapped in INSTRUCTIONS.md.

Create all pages with the exact meta tags specified.

Implement all schema markup.

Create the GEO files (robots.txt, llms.txt, agents.md).

Output a production-ready site that builds with `npm run build`.
```

### 4. Deploy to Cloudflare Pages

1. Push the built site to GitHub
2. Connect repo to Cloudflare Pages
3. Build settings:
   - Build command: `npm run build`
   - Build output: `dist`
4. Add custom domain: snailsploit.com

## Key Files for Claude Code

| File | Purpose |
|------|---------|
| INSTRUCTIONS.md | Complete build spec with all meta tags, structure, content mapping |
| SEO-SPEC.md | Keyword strategy, competitive positioning, content priorities |
| CONTENT-INVENTORY.md | Which files go where, what to publish vs skip |

## Content Summary

- **21 published articles** → categorized into silos
- **1 draft to publish** → AATMF framework (comprehensive)
- **5 CVE pages** → fetch details from NVD
- **3 framework pages** → AATMF, P.R.O.M.P.T, SEF
- **7 flagship articles** → prioritize for internal linking

## Post-Build Checklist

- [ ] All pages render correctly
- [ ] Meta tags match specifications
- [ ] Schema markup validates (Rich Results Test)
- [ ] Internal links work
- [ ] robots.txt accessible
- [ ] llms.txt accessible
- [ ] Sitemap generates
- [ ] Lighthouse score 90+
