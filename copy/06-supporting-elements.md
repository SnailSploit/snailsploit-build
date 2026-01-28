# SUPPORTING COPY ELEMENTS

## Implementation Guidelines for Claude Code

These are smaller copy blocks to integrate into various locations. Each has specific placement instructions.

---

## Email Capture — Homepage

**Component:** Use `V3DownloadGate.tsx` or create dedicated email capture component

**Placement:** Below the fold on homepage, after hero section

**Copy:**

```
Headline: Get the AATMF Red-Card Starter Pack

Body: 10 ready-to-run evaluation scenarios for testing AI systems against common attack vectors. Includes YAML templates for CI/CD integration.

Button: Download Free
```

**Technical notes:**
- Gate a real asset (PDF in `/public/downloads/`)
- Form submits to `/api/subscribe` endpoint
- `client:load` directive required for React component

---

## Email Capture — Framework Pages

**Component:** Simpler email capture (newsletter style, no gated asset)

**Placement:** Bottom of each framework page (`/frameworks/aatmf/`, `/frameworks/sef/`, `/frameworks/prompt/`)

**Copy:**

```
Headline: Framework Updates & Research

Body: New techniques, case studies, and methodology updates. Research-focused, no spam.

Button: Subscribe
```

---

## Footer Tagline

**File to modify:** `src/components/Footer.astro` or equivalent

**Action:** Replace existing tagline text

**Current:** "Breaking AI systems to make them safer."

**New (pick one):**

```
Option A: Same attacks. Different substrates.
Option B: Adversarial psychology for humans and machines.
Option C: Researching trust reflexes across substrates.
```

**Recommendation:** Option A — punchy, memorable, reinforces thesis.

---

## Credentials Line (Global)

**Usage:** Anywhere credentials appear (hero, about page sidebar, author bio)

**Copy:**

```
Creator of AATMF • Author of Adversarial Minds • NVD Contributor
```

**DO NOT USE:**
- Specific CVE counts (will become outdated)
- "6 CVEs" or any number
- "Security researcher" (too generic)

---

## Notes

- All CTAs should have clear value proposition
- Email capture should offer something specific (asset or updates)
- Keep credentials line consistent across all instances
