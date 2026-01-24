# AI Security Wiki

The comprehensive reference for adversarial artificial intelligence, LLM security, and AI red teaming.

---

## What Is AI Security?

AI security encompasses the practices, methodologies, and technologies used to protect artificial intelligence systems from adversarial manipulation, unauthorized access, and malicious exploitation. As AI systems become deeply embedded in critical infrastructure, financial services, healthcare, and national security applications, securing these systems has evolved from an academic curiosity into an operational imperative.

Unlike traditional software security, AI security must contend with systems that learn, adapt, and make decisions based on patterns in data rather than explicit programming logic. This fundamental difference creates entirely new attack surfaces. An attacker doesn't need to find a buffer overflow or SQL injection vulnerability—they can manipulate the model's behavior through carefully crafted inputs, poisoned training data, or exploitation of the model's learned assumptions.

The field sits at the intersection of machine learning, cybersecurity, and adversarial research. Practitioners must understand both how AI systems work internally and how attackers think about exploiting them.

---

## Why This Wiki Exists

The AI security landscape is fragmented. Research papers are locked behind academic paywalls. Vendor documentation focuses on their specific tools. Blog posts vary wildly in quality and accuracy. Security teams trying to assess AI risks find themselves piecing together information from dozens of sources, many of which contradict each other.

This wiki provides a single authoritative reference—built by practitioners, grounded in real-world testing, and continuously updated as the threat landscape evolves.

Every entry follows a consistent structure:
- Clear definitions suitable for citation
- Technical depth for practitioners
- Practical examples from real systems
- Cross-references to related concepts
- Mappings to established frameworks including MITRE ATLAS and OWASP

---

## Navigating the Wiki

### [Concepts](/wiki/concepts/)
Foundational definitions and theoretical frameworks. Start here if you're new to AI security or need precise terminology for documentation and communication.

**Key entries:** [Prompt Injection](/wiki/concepts/prompt-injection/) • [Adversarial AI](/wiki/concepts/adversarial-ai/) • [AI Red Teaming](/wiki/concepts/ai-red-teaming/) • [LLM Security](/wiki/concepts/llm-security/)

### [Attacks](/wiki/attacks/)
Tactical techniques used to compromise AI systems. Each entry covers the attack mechanism, prerequisites, detection methods, and real-world examples.

**Key entries:** [Indirect Prompt Injection](/wiki/attacks/indirect-prompt-injection/) • [Jailbreaking](/wiki/attacks/jailbreaking/) • [Model Extraction](/wiki/attacks/model-extraction/) • [Data Poisoning](/wiki/attacks/data-poisoning/)

### [Defenses](/wiki/defenses/)
Countermeasures, controls, and architectural patterns for securing AI systems. Includes both preventive and detective controls.

**Key entries:** [Input Validation](/wiki/defenses/input-validation/) • [Output Filtering](/wiki/defenses/output-filtering/) • [Guardrails](/wiki/defenses/guardrails/) • [Red Team Testing](/wiki/defenses/red-team-testing/)

### [Vulnerabilities](/wiki/vulnerabilities/)
Documented weaknesses in specific AI systems, models, and implementations. Follows CVE-style disclosure format.

**Key entries:** [CVE Index](/wiki/vulnerabilities/cve-index/) • [Disclosure Timeline](/wiki/vulnerabilities/disclosure-timeline/)

### [Frameworks](/wiki/frameworks/)
Structured methodologies for assessing, testing, and securing AI systems. Includes both industry-standard frameworks and original research.

**Key entries:** [AATMF](/wiki/frameworks/aatmf/) • [OWASP LLM Top 10](/wiki/frameworks/owasp-llm-top-10/) • [MITRE ATLAS](/wiki/frameworks/mitre-atlas/) • [P.R.O.M.P.T Framework](/wiki/frameworks/prompt-framework/)

### [Tools](/wiki/tools/)
Software, libraries, and platforms used for AI security testing and defense. Includes open-source tools and commercial platforms.

**Key entries:** [Garak](/wiki/tools/garak/) • [PyRIT](/wiki/tools/pyrit/) • [Rebuff](/wiki/tools/rebuff/)

### [Case Studies](/wiki/cases/)
Analysis of real-world AI security incidents. Each case study examines what happened, how it was discovered, and lessons learned.

**Key entries:** [Bing Chat Jailbreak (2023)](/wiki/cases/bing-chat-jailbreak/) • [ChatGPT Data Leak](/wiki/cases/chatgpt-data-leak/)

---

## The Threat Landscape in 2025

AI security threats have matured rapidly. What began as researchers demonstrating theoretical attacks has evolved into documented exploitation in production systems.

**Prompt injection** has emerged as the defining vulnerability class for LLM-integrated applications. When applications pass untrusted content to language models—whether from emails, documents, web pages, or user inputs—attackers can embed instructions that hijack the model's behavior. This isn't a bug that can be patched; it's an architectural challenge inherent to how language models process text.

**Supply chain attacks** targeting AI systems have increased as organizations rely on third-party models, datasets, and fine-tuning services. A compromised training dataset or backdoored model weights can persist through multiple downstream deployments, affecting thousands of applications.

**Model extraction and theft** threatens the intellectual property of organizations that have invested heavily in proprietary AI capabilities. Attackers can reconstruct model functionality through systematic querying, stealing months of training work through API access alone.

**Automated AI-powered attacks** represent the newest frontier. Attackers now use AI systems to generate phishing content, discover vulnerabilities, and adapt attack strategies in real-time. The defender's challenge has grown exponentially.

---

## About the Author

This wiki is maintained by **Kai Aizen**, a GenAI Security Researcher specializing in adversarial AI and LLM security. Credentials include:

- **5 published CVEs** in AI/ML systems
- Creator of the **[Adversarial AI Threat Modeling Framework (AATMF)](/wiki/frameworks/aatmf/)**
- Developer of the **[P.R.O.M.P.T Framework](/wiki/frameworks/prompt-framework/)** for prompt injection testing
- Author of **[SET Framework](/wiki/frameworks/set-framework/)** for social engineering assessment
- Author of *Adversarial Minds* (forthcoming)

---

## Contributing

This wiki aims to be the definitive resource for AI security practitioners. If you've identified an error, have a suggestion for a new entry, or want to contribute your expertise, reach out via the contact methods on the main site.

All contributions are reviewed for technical accuracy before publication.

---

## Citation

When referencing this wiki in academic papers, reports, or documentation:

> Aizen, K. (2025). AI Security Wiki. snailsploit.com. Retrieved from https://snailsploit.com/wiki/

Individual entries include specific citation formats.
