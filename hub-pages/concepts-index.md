# AI Security Concepts

Foundational definitions and theoretical frameworks for understanding adversarial AI, LLM security, and machine learning vulnerabilities.

---

## Understanding the Foundations

AI security concepts differ fundamentally from traditional cybersecurity terminology. In conventional security, we discuss vulnerabilities as discrete flaws—a buffer overflow exists or it doesn't, a misconfiguration is present or absent. AI security operates in a more probabilistic space where vulnerabilities emerge from learned behaviors, statistical patterns, and architectural decisions that don't map cleanly to binary categories.

This section establishes precise definitions for the field's core terminology. These aren't just academic distinctions—they're operational requirements. When a security team assesses an AI system, when a red team scopes an engagement, when a vendor communicates risk to customers, shared vocabulary prevents costly misunderstandings.

The concepts here are organized from foundational (what is adversarial AI?) through specific (what distinguishes jailbreaking from prompt injection?) to applied (what does AI red teaming actually involve?). If you're new to the field, work through the foundational concepts first. If you're an experienced practitioner looking for precise definitions, use the index below.

---

## Core Concepts Index

### Foundational

| Concept | Definition | Relevance |
|---------|------------|-----------|
| [Adversarial AI](/wiki/concepts/adversarial-ai/) | The study and practice of attacking and defending AI systems | Defines the entire field |
| [LLM Security](/wiki/concepts/llm-security/) | Security considerations specific to large language models | Most active current subfield |
| [AI Red Teaming](/wiki/concepts/ai-red-teaming/) | Adversarial testing methodologies for AI systems | Practical application of concepts |
| [Machine Learning Security](/wiki/concepts/ml-security/) | Broader category encompassing all ML system security | Historical and theoretical context |

### Attack Concepts

| Concept | Definition | Relevance |
|---------|------------|-----------|
| [Prompt Injection](/wiki/concepts/prompt-injection/) | Manipulating LLM behavior through crafted inputs | Primary LLM vulnerability class |
| [Jailbreaking](/wiki/concepts/jailbreaking/) | Bypassing AI safety controls and restrictions | High-profile attack category |
| [Adversarial Examples](/wiki/concepts/adversarial-examples/) | Inputs designed to cause ML model misclassification | Classical ML attack technique |
| [Evasion Attacks](/wiki/concepts/evasion-attacks/) | Modifying inputs to avoid detection | Applies to classifiers and filters |

### System Concepts

| Concept | Definition | Relevance |
|---------|------------|-----------|
| [Guardrails](/wiki/concepts/guardrails/) | Safety mechanisms constraining AI behavior | Primary defensive mechanism |
| [System Prompts](/wiki/concepts/system-prompts/) | Instructions defining LLM behavior context | Critical attack surface |
| [Context Windows](/wiki/concepts/context-windows/) | Memory limitations of transformer models | Shapes attack possibilities |
| [AI Agents](/wiki/concepts/ai-agents/) | Autonomous AI systems with tool access | Emerging high-risk category |

### Trust and Safety

| Concept | Definition | Relevance |
|---------|------------|-----------|
| [AI Alignment](/wiki/concepts/ai-alignment/) | Ensuring AI systems behave as intended | Theoretical foundation for safety |
| [Hallucination](/wiki/concepts/hallucination/) | AI-generated false or fabricated information | Reliability and trust concern |
| [AI Trust Boundaries](/wiki/concepts/trust-boundaries/) | Separation between trusted and untrusted contexts | Architectural security concept |

---

## The Evolution of AI Security Concepts

The terminology in this field has evolved rapidly, often inconsistently. Early machine learning security research (2014-2018) focused on adversarial examples—carefully crafted perturbations to images that caused misclassification. The vocabulary borrowed heavily from academic computer science: perturbation budgets, L-p norms, transferability.

When large language models emerged as the dominant AI paradigm (2020-present), new vulnerability classes demanded new terminology. "Prompt injection" was coined by Simon Willison in 2022 to describe instruction hijacking attacks against LLM applications—a concept that had no meaningful predecessor in the adversarial ML literature.

"Jailbreaking" was borrowed from mobile device security but took on distinct meaning in the AI context. Unlike iOS jailbreaking, which involves exploiting software vulnerabilities for privilege escalation, AI jailbreaking typically involves social engineering the model itself—convincing it through carefully crafted prompts to ignore its safety training.

This wiki uses terminology consistently based on practitioner consensus and documented usage in major security research. Where terms conflict or overlap, entries note the distinctions explicitly.

---

## Conceptual Framework: The AI Attack Surface

Understanding AI security concepts requires a mental model of where attacks can occur. The AI attack surface includes:

**Training Time Attacks**
Attacks that occur during model creation. The model hasn't been deployed yet—the attacker is poisoning the well.
- [Data Poisoning](/wiki/attacks/data-poisoning/)
- [Backdoor Insertion](/wiki/attacks/backdoor-insertion/)
- [Model Supply Chain Compromise](/wiki/attacks/supply-chain-attacks/)

**Inference Time Attacks**
Attacks against deployed models. The attacker interacts with the system as a user (legitimate or malicious).
- [Prompt Injection](/wiki/concepts/prompt-injection/)
- [Jailbreaking](/wiki/attacks/jailbreaking/)
- [Adversarial Examples](/wiki/concepts/adversarial-examples/)

**Extraction Attacks**
Attacks that steal information from the model—either the model itself or data it was trained on.
- [Model Extraction](/wiki/attacks/model-extraction/)
- [Training Data Extraction](/wiki/attacks/training-data-extraction/)
- [Membership Inference](/wiki/attacks/membership-inference/)

**System-Level Attacks**
Attacks targeting the infrastructure and integrations around the model.
- [Agent Hijacking](/wiki/attacks/agent-hijacking/)
- [Tool Abuse](/wiki/attacks/tool-abuse/)
- [Context Manipulation](/wiki/attacks/context-manipulation/)

---

## Relationship to Traditional Security Concepts

AI security doesn't replace traditional application security—it extends it. An LLM-integrated application still needs protection against SQL injection, XSS, authentication bypass, and every other vulnerability class in the OWASP Top 10. AI-specific attacks add to this surface; they don't substitute for it.

Several traditional concepts map directly:
- **Trust boundaries** apply to AI systems, defining where untrusted input meets model processing
- **Defense in depth** remains essential, as no single control stops all AI attacks
- **Least privilege** constrains what actions AI agents can perform
- **Input validation** applies to prompts, though with different techniques than traditional sanitization

Other concepts require significant adaptation:
- **Vulnerability scanning** doesn't work the same way when vulnerabilities are probabilistic
- **Patching** is complicated when the "vulnerability" is in learned model weights
- **Penetration testing** requires different methodologies when the target is a statistical model

The [AI Red Teaming](/wiki/concepts/ai-red-teaming/) entry explores how traditional security assessment adapts to AI targets.

---

## Using These Definitions

Each concept entry in this section follows a standard structure:

1. **Definition** — A precise, citable definition suitable for documentation
2. **Context** — Where this concept fits in the broader landscape
3. **Technical Detail** — How it works at a technical level
4. **Examples** — Concrete instances from real systems
5. **Related Concepts** — Cross-references for deeper exploration
6. **References** — Academic papers, documentation, and further reading

When citing definitions from this wiki:

> "Prompt injection is a vulnerability class in which an attacker provides input that causes an LLM to deviate from its intended instructions, executing attacker-controlled directives instead." — AI Security Wiki, snailsploit.com

---

## Start Learning

**New to AI security?** Begin with these foundational entries in order:
1. [Adversarial AI](/wiki/concepts/adversarial-ai/) — The field overview
2. [LLM Security](/wiki/concepts/llm-security/) — Current focus area
3. [Prompt Injection](/wiki/concepts/prompt-injection/) — The defining vulnerability
4. [AI Red Teaming](/wiki/concepts/ai-red-teaming/) — Putting concepts into practice

**Experienced practitioner?** Jump to specific concepts or explore the [Attacks](/wiki/attacks/) section for tactical depth.
