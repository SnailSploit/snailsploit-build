# /FRAMEWORKS/ HUB PAGE

## Implementation Guidelines for Claude Code

**File to modify:** `src/pages/frameworks/index.astro`

**Action:** Replace thin/shell content with this full hub page content.

**Page frontmatter to set:**
```yaml
---
title: "Security Frameworks | Unified Adversarial Psychology"
description: "Three frameworks, one principle. AATMF for AI threat modeling, SEF for social engineering, P.R.O.M.P.T for communication. Built on unified adversarial psychology."
---
```

**DO NOT TOUCH:**
- Layout wrapper (keep BaseLayout)
- Canonical URL structure
- Any existing navigation components

**Structure:** This is long-form content (~1,500 words). Use semantic HTML:
- `<article>` wrapper
- `<h1>` for page title (can be hidden if design handles it)
- `<h2>` for main sections
- `<h3>` for framework names
- Prose paragraphs, minimal bullet points

**Internal links:** All must end with trailing slash.

---

## Page Content

### Inherited Vulnerabilities

Every security framework I've built starts from a single observation: **LLMs exhibit the same trust reflexes as humans because they learned from human-generated data.**

This isn't metaphor. It's a consequence of how these systems are trained.

Large language models learn from billions of documents capturing how humans communicate, persuade, comply, and resist. When an LLM encounters a request framed as authority, it tends to respond the way humans respond to authority. When it sees social proof, urgency, or reciprocity, it activates compliance patterns that social engineers have exploited in humans for decades.

The implication reshapes how we think about AI security: **social engineering and prompt injection aren't merely analogous — they're the same attack class, executed against different substrates.**

This observation unifies my research. Rather than treating AI security, social engineering, and adversarial communication as separate disciplines, I approach them as applications of one underlying principle: adversarial psychology operates independently of whether the target is carbon or silicon.

---

### Three Frameworks, One Foundation

#### AATMF — Adversarial AI Threat Modeling Framework

AATMF applies adversarial psychology to machine systems.

The framework provides 14 tactics and 40+ techniques for systematically testing AI systems — LLMs, RAG pipelines, multimodal models, and autonomous agents. But unlike checklists that treat prompt injection as an isolated vulnerability class, AATMF maps AI attacks to the psychological principles that make them effective.

Persona Override (AT-001) exploits authority compliance. Contextual Drift (AT-003) exploits gradual escalation — the same boiling-frog phenomenon that bypasses human judgment when changes are incremental. Euphemism Substitution (AT-010) exploits the linguistic reframing techniques that social engineers use to make dangerous requests sound benign.

The framework includes:
- Quantitative risk scoring (AATMF-R)
- Red-Card evaluations for CI/CD integration
- Crosswalks to OWASP LLM Top-10, NIST AI RMF, and MITRE ATLAS

[Explore AATMF →](/frameworks/aatmf/)

---

#### SEF — Social Engineering Framework

SEF applies adversarial psychology to human systems.

Social engineering assessments often rely on ad-hoc testing — a phishing campaign here, a vishing call there. SEF provides a structured methodology for comprehensive human-factor security assessment, grounded in the same psychological principles that AATMF applies to AI.

The framework covers:

**Attack Taxonomy** — Categorized by psychological vector (authority, social proof, urgency, reciprocity, commitment/consistency, liking) rather than delivery mechanism. A phishing email and a pretexting call that both exploit authority are functionally the same attack; SEF treats them that way.

**Assessment Methodology** — Phased approach from reconnaissance through exploitation, with metrics for measuring organizational resilience rather than just click rates.

**AI-Era Adaptations** — Modern social engineering increasingly uses deepfakes, voice cloning, and LLM-generated personalization. SEF includes threat matrices for these emerging vectors and assessment techniques that account for AI-augmented attacks.

**Quantifiable Metrics** — Success rates by attack vector, role-based vulnerability profiles, and benchmarks for measuring improvement over time.

[Explore SEF →](/frameworks/sef/)

---

#### P.R.O.M.P.T — Adversarial Communication Framework

P.R.O.M.P.T applies adversarial psychology to communication itself.

The framework began as a prompt engineering methodology, but its applications extend to any high-stakes communication where you're trying to elicit specific behavior from a system — human or artificial.

- **P** — Purpose: Define the outcome before the interaction.
- **R** — Results: Specify measurable success criteria.
- **O** — Obstacles: Anticipate resistance and plan mitigation.
- **M** — Mindset: Frame the request to align with the target's existing beliefs.
- **P** — Preferences: Adapt to the target's communication style.
- **T** — Technical: Handle constraints and edge cases.

For AI systems, P.R.O.M.P.T structures effective prompts. For human interactions, it structures effective requests. The methodology is consistent because the underlying psychology is consistent.

[Explore P.R.O.M.P.T →](/frameworks/prompt/)

---

### Why Unified Frameworks Matter

Security practitioners typically specialize. AI red teamers don't run phishing assessments. Social engineers don't audit RAG pipelines. But attackers don't observe these boundaries. A sophisticated adversary might chain a social engineering attack (compromise a developer's credentials) with a prompt injection attack (poison the knowledge base that developer accesses) with a traditional exploit (pivot from the AI system to infrastructure).

Unified frameworks enable unified defense. Understanding that authority exploitation operates similarly against humans and AI systems allows you to build defenses that address root causes rather than chasing attack variants.

My frameworks are designed to work together:

- **Threat modeling an AI-powered customer service system?** Use AATMF for the LLM attack surface and SEF for the human operators who can override it.
- **Assessing organizational security posture?** Use SEF for the human layer, AATMF for AI systems in the environment, and P.R.O.M.P.T to structure engagement communications.
- **Building AI safety controls?** Map AATMF techniques to SEF psychological vectors to understand which controls address root causes versus symptoms.

---

### Getting Started

**New to adversarial AI?** Start with AATMF's Key Concepts and the foundational articles in the "Start Here" section.

**Experienced security practitioner?** Jump to AATMF's Tactics & Techniques for the full taxonomy, or explore SEF's assessment methodology.

**Interested in the underlying theory?** Adversarial Minds provides the deep dive on the psychology that informs all three frameworks.

[Explore AATMF →](/frameworks/aatmf/)  [Explore SEF →](/frameworks/sef/)  [Read Adversarial Minds →](/adversarial-minds/)
