# ABOUT PAGE — THESIS SECTION

## Implementation Guidelines for Claude Code

**File to modify:** `src/pages/about.astro` or `src/content/about.mdx`

**Action:** Insert this new section into existing page content.

**Placement:** After the opening "About Me" paragraph, BEFORE "Credentials & Recognition"

**DO NOT TOUCH:**
- Page frontmatter (title, description, canonical)
- Existing credentials section (leave as-is, CVE count will be on /security-research/)
- Any schema markup
- Layout wrapper

**Format:** Use markdown `##` for section header. Keep prose style consistent with existing page.

---

## Content to Insert

```markdown
## The Research Thesis

My work is built on a central observation: **LLMs exhibit the same trust reflexes as humans because they learned from human-generated data.**

Large language models were trained on text that humans wrote. They didn't just learn grammar and vocabulary — they absorbed the social dynamics encoded in how we communicate. Authority, reciprocity, social proof, urgency — the psychological levers that social engineers have exploited for decades — appear to function similarly in AI systems because those patterns saturate the training data.

This suggests that social engineering and prompt injection aren't merely analogous. They may be the same attack class, executed against different substrates.

I call this principle "inherited vulnerabilities" — AI systems inherited human trust patterns along with human language. It's the thread connecting my research areas.

This observation shapes my frameworks:
- **AATMF** tests adversarial psychology against AI systems
- **SEF** tests adversarial psychology against humans
- **P.R.O.M.P.T** applies adversarial psychology to communication itself

These aren't three separate frameworks. They're three applications of one underlying principle.
```

---

## Notes

- This section explains the "why" behind the work
- "Inherited vulnerabilities" is the named concept (not "same cloth")
- Keep any existing credentials section — just add this before it
