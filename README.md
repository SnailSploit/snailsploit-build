# SnailSploit SEO Remediation Playbook

## Package Contents

This package contains everything Claude Code needs to execute the SEO remediation for snailsploit.com without errors.

### Core Documents

| File | Purpose |
|------|---------|
| `CLAUDE_CODE_MASTER_PROMPT.md` | **START HERE** - Master prompt with execution rules and sequence |
| `SnailSploit_SEO_Master_Mapping.md` | State mapping document - 7 sections covering all configurations, URLs, schemas, and tasks |
| `SnailSploit_Atomic_Task_Cards.md` | Detailed task cards with exact commands, validation steps, and phase gates |

### Ready-to-Deploy Assets

| File | Purpose |
|------|---------|
| `llms.txt` | Deploy to `/public/llms.txt` - AI crawler summary |
| `components/TechArticleSchema.tsx` | TechArticle schema for blog posts |
| `components/FAQSchema.tsx` | FAQPage schema for hub pages (includes pre-written AATMF FAQs) |
| `components/PersonSchema.tsx` | Person schema for About page (includes Organization and WebSite schemas) |

---

## Execution Protocol

### For Claude Code

1. **Read `CLAUDE_CODE_MASTER_PROMPT.md` first** - Contains non-negotiable rules
2. **Open the mapping document** - Use Sheet 7 (Execution Checklist) to track progress
3. **Follow the task cards** - Execute tasks in sequence, never skip validation
4. **Respect phase gates** - All P1 tasks must pass before P2

### Phases

| Phase | Focus | Tasks |
|-------|-------|-------|
| P1-STABILIZE | Trailing slash + canonicals | T1.0 - T1.5 |
| P2-CONTENT | Hub enrichment + linking | T2.0 - T2.3 |
| P3-GEO | Schema + llms.txt | T3.1 - T3.4 |

---

## Critical Fixes

### Problem 1: "Alternative page with proper canonical tag" (26 pages)
**Root Cause**: Trailing slash inconsistency between Next.js and sitemap
**Fix**: Tasks T1.1-T1.3 - Set `trailingSlash: true` everywhere

### Problem 2: "Discovered – currently not indexed" (31 pages)
**Root Cause**: Thin content + orphan pages + low crawl priority
**Fix**: Tasks T2.1-T2.3 - Enrich hubs + fix internal linking

### Problem 3: Missing GEO signals
**Root Cause**: No llms.txt, generic Article schema, weak Person schema
**Fix**: Tasks T3.1-T3.4 - Full schema implementation

---

## Validation Commands

Quick checks Claude Code should run:

```bash
# Check trailing slash redirects
curl -sI https://snailsploit.com/about | grep -E "(HTTP|Location)"

# Check canonicals have trailing slash  
curl -s https://snailsploit.com/about/ | grep canonical

# Check sitemap URLs
curl -s https://snailsploit.com/sitemap.xml | head -20

# Check llms.txt
curl -sI https://snailsploit.com/llms.txt

# Check schema
curl -s https://snailsploit.com/about/ | grep '@type'
```

---

## Emergency Rollback

If things go wrong:
1. Task T1.0 creates `audit_baseline.txt` - use it to restore original configs
2. Git history is your friend - `git checkout HEAD~1 -- <file>`
3. Do NOT deploy if local build fails

---

## Contact

Created for Kai Aizen / SnailSploit
January 2026
