# /AI-SECURITY/ HUB PAGE

## Implementation Guidelines for Claude Code

**File to modify:** `src/pages/ai-security/index.astro`

**Action:** Replace thin/shell content with this full hub page content.

**Page frontmatter to set:**
```yaml
---
title: "AI Security Research | Testing Machine Trust Reflexes"
description: "Original research on LLM jailbreaking, prompt injection, RAG poisoning, and agentic AI vulnerabilities. Exploring why AI systems inherit human psychological patterns."
---
```

**DO NOT TOUCH:**
- Layout wrapper (keep BaseLayout)
- Canonical URL structure
- Any existing navigation or breadcrumb components

**Structure:** Long-form content (~1,200 words). Use semantic HTML:
- `<article>` wrapper
- `<h2>` for main sections ("Why AI Systems Are Vulnerable", "Research Areas", etc.)
- `<h3>` for research area names
- Prose paragraphs

**Internal links:** All must end with trailing slash.

---

## Page Content

### Why AI Systems Are Vulnerable

AI security isn't a new field with new principles. It's an established field — adversarial psychology — applied to a new substrate.

When I research LLM jailbreaks, I'm not searching for novel vulnerability classes unique to machine learning. I'm testing whether the psychological exploitation techniques that work on humans also work on machines trained on human data. The patterns are remarkably consistent.

**Authority compliance:** Tell a human you're from IT and they'll often reset their password without verification. Frame instructions to an LLM with sufficient authority markers and safety guidelines become negotiable.

**Gradual escalation:** Ask a human for something inappropriate and they'll refuse. Ask for something small, then slightly larger, then larger again — the threshold shifts. LLMs exhibit similar drift when context escalates across conversation turns.

**Social proof:** Humans comply more readily when they believe others have complied. LLMs respond more permissively to requests framed as common or previously approved.

**Reciprocity:** Establish helpful patterns with a human, and subsequent requests get more latitude. The same dynamic appears in multi-turn LLM interactions.

These parallels aren't coincidental. LLMs learned language — and the social dynamics encoded in language — from human-generated text. The trust reflexes came bundled with the grammar.

---

### Research Areas

#### Jailbreaking

Jailbreaking research explores techniques for bypassing AI safety guardrails and content policies. My focus is on psychological vectors rather than specific prompts — understanding *why* certain jailbreak patterns work reveals defensive strategies that address causes rather than symptoms.

Key research:
- **Context Inheritance Exploit** — Observing how jailbroken states persist across sessions and transfer between models
- **Multi-turn escalation patterns** — How gradual drift bypasses per-turn safety evaluation
- **Persona manipulation** — Why role-play scenarios reliably reduce safety compliance

[Explore Jailbreaking Research →](/ai-security/jailbreaking/)

---

#### Prompt Injection

Prompt injection attacks insert malicious instructions into AI input to override system behavior. Direct injection targets user inputs; indirect injection hides payloads in external data sources like documents, web pages, or knowledge bases.

Key research:
- **The Custom Instruction Backdoor** — How ChatGPT's personalization features create emergent prompt injection vectors
- **MCP Security Deep Dive** — Vulnerabilities in Model Context Protocol implementations
- **RAG poisoning patterns** — Attacking retrieval-augmented generation through knowledge base manipulation

[Explore Prompt Injection Research →](/ai-security/prompt-injection/)

---

#### Memory Manipulation

As AI systems gain persistent memory, attackers can poison context to compromise future interactions — not just the current session.

Key research:
- **Preference Injection Persistence** — Embedding malicious instructions in what appears to be legitimate user preferences
- **RLHF signal poisoning** — Corrupting feedback loops to degrade safety alignment over time
- **Cross-session state transfer** — How compromised context survives session boundaries

[Explore Memory Research →](/ai-security/jailbreaking/memory-manipulation-attacks/)

---

#### Agentic AI Security

Autonomous AI agents introduce attack surfaces beyond the model itself: planners, tool routers, executors, and inter-agent communication channels.

Key research:
- **Plan hijacking** — Overloading agent planners to induce unsafe action sequences
- **Tool-routing poisoning** — Manipulating which tools an agent selects for a task
- **Delegation loops** — Creating infinite loops between cooperating agents

[Explore Agentic Security →](/ai-security/rag-agentic-attack-surface/)

---

### The AATMF Connection

This research feeds into AATMF — the Adversarial AI Threat Modeling Framework. AATMF systematizes these attack vectors into a taxonomy that security teams can use for threat modeling, red team assessments, and defensive architecture decisions.

If you're here to understand the attacks, explore the research areas above. If you're here to defend against them, start with AATMF.

[Explore AATMF →](/frameworks/aatmf/)
