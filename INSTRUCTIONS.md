# SnailSploit.com - Complete Build Specification

**Read this ENTIRE document before writing any code. Follow every specification exactly.**

---

## PART 1: IDENTITY & BRAND

| Field | Value |
|-------|-------|
| **Author** | Kai Aizen |
| **Brand** | SnailSploit |
| **Aliases** | SnailSploit, The Jailbreak Chef |
| **Role** | GenAI Security Researcher at ActiveFence |
| **Email** | kai@snailsploit.com |
| **Domain** | snailsploit.com |
| **GitHub** | github.com/SnailSploit |
| **LinkedIn** | linkedin.com/in/kaiaizen |
| **Wordfence** | wordfence.com/threat-intel/researchers/kai-aizen |

**Credentials to emphasize throughout:**
- 5x CVE Holder (WordPress plugin vulnerabilities)
- Creator of AATMF, P.R.O.M.P.T, and SEF frameworks
- Hakin9 Magazine author
- Author of "Adversarial Minds" book

---

## PART 2: TECH STACK

```
Framework:      Astro (latest)
Styling:        Tailwind CSS
Fonts:          JetBrains Mono (headings/code), Inter (body)
Deploy:         Cloudflare Pages
Build output:   dist/
```

---

## PART 3: SITE ARCHITECTURE

```
snailsploit.com
├── / (home)
├── /about
├── /adversarial-minds (book landing)
├── /frameworks (index)
│   ├── /frameworks/aatmf
│   ├── /frameworks/prompt
│   └── /frameworks/sef
├── /security-research (index)
│   ├── /security-research/cves (index)
│   │   ├── /security-research/cves/cve-2025-9776
│   │   ├── /security-research/cves/cve-2025-11171
│   │   ├── /security-research/cves/cve-2025-11174
│   │   ├── /security-research/cves/cve-2025-12163
│   │   └── /security-research/cves/cve-2025-12030
│   └── /security-research/general (index + 4 articles)
├── /ai-security (index + 3 general articles)
│   ├── /ai-security/jailbreaking (index + 5 articles)
│   └── /ai-security/prompt-injection (index + 3 articles)
├── /tools
└── /writing (index + 3 articles)
```

**Primary Navigation:** About | Adversarial Minds | Frameworks ▾ | Security Research ▾ | AI Security ▾ | Tools | Writing

**Footer:** About | GitHub | LinkedIn | Wordfence | Contact

---

## PART 4: COMPLETE META TAGS BY PAGE

### Static Pages

#### Homepage (/)

```yaml
url: "https://snailsploit.com/"
title: "SnailSploit | AI Security Research & LLM Jailbreaking"
description: "AI security researcher specializing in LLM jailbreaking, prompt injection, and WordPress vulnerabilities. 5x CVE holder. Creator of AATMF and P.R.O.M.P.T frameworks."
canonical: "https://snailsploit.com/"
og_type: "website"
og_image: "/images/og-home.png"
keywords:
  - "AI security researcher"
  - "LLM jailbreaking expert"
  - "prompt injection testing"
  - "CVE researcher"
  - "adversarial AI"
```

#### About (/about)

```yaml
url: "https://snailsploit.com/about"
title: "Kai Aizen | AI Security Researcher & 5x CVE Holder"
description: "GenAI Security Researcher at ActiveFence. Creator of AATMF and P.R.O.M.P.T frameworks. 5x CVE holder. Hakin9 author. The Jailbreak Chef."
canonical: "https://snailsploit.com/about"
og_type: "profile"
og_image: "/images/og-about.png"
keywords:
  - "Kai Aizen"
  - "SnailSploit"
  - "The Jailbreak Chef"
  - "AI red teamer"
  - "WordPress security researcher"
```

#### Adversarial Minds (/adversarial-minds)

```yaml
url: "https://snailsploit.com/adversarial-minds"
title: "Adversarial Minds: Social Engineering Psychology Book"
description: "The definitive book on social engineering psychology and human manipulation. Learn the adversarial mindset behind human hacking and how to defend against it."
canonical: "https://snailsploit.com/adversarial-minds"
og_type: "book"
og_image: "/images/og-book.png"
keywords:
  - "Adversarial Minds book"
  - "social engineering psychology"
  - "human hacking methodology"
  - "adversarial mindset cybersecurity"
  - "manipulation techniques"
```

#### Tools (/tools)

```yaml
url: "https://snailsploit.com/tools"
title: "Security Tools | Open Source by SnailSploit"
description: "Open-source security tools for reconnaissance, Kubernetes security, OSINT, and automation. Built by Kai Aizen for the security community."
canonical: "https://snailsploit.com/tools"
og_type: "website"
og_image: "/images/og-tools.png"
keywords:
  - "security tools GitHub"
  - "OSINT tools"
  - "reconnaissance toolkit"
  - "Kubernetes security tools"
```

---

### Framework Pages

#### Frameworks Index (/frameworks)

```yaml
url: "https://snailsploit.com/frameworks"
title: "Security Frameworks | AATMF, P.R.O.M.P.T, SEF"
description: "Open-source security frameworks for AI threat modeling, prompt engineering methodology, and social engineering assessment. Practitioner-built."
canonical: "https://snailsploit.com/frameworks"
og_type: "website"
og_image: "/images/og-frameworks.png"
keywords:
  - "AI threat modeling framework"
  - "prompt injection taxonomy"
  - "social engineering framework"
  - "LLM security methodology"
```

#### AATMF (/frameworks/aatmf)

```yaml
url: "https://snailsploit.com/frameworks/aatmf"
title: "AATMF: Adversarial AI Threat Modeling Framework"
description: "Comprehensive AI threat modeling framework with 14 tactics, 40+ techniques, quantitative risk scoring, and MITRE ATT&CK integration. Open-source."
canonical: "https://snailsploit.com/frameworks/aatmf"
og_type: "article"
og_image: "/images/og-aatmf.png"
keywords:
  - "AATMF"
  - "AI threat modeling"
  - "adversarial AI framework"
  - "LLM threat model template"
  - "AI risk assessment methodology"
source_file: "draft_A-Guide-to-the-Adversarial-AI-Threat-Modeling-Framework--AATMF--10fcdab9fedc.html"
```

#### P.R.O.M.P.T (/frameworks/prompt)

```yaml
url: "https://snailsploit.com/frameworks/prompt"
title: "P.R.O.M.P.T Framework: Systematic Prompt Engineering"
description: "The P.R.O.M.P.T framework - Purpose, Results, Obstacles, Mindset, Preferences, Technical. A systematic methodology for effective AI interactions."
canonical: "https://snailsploit.com/frameworks/prompt"
og_type: "article"
og_image: "/images/og-prompt.png"
keywords:
  - "P.R.O.M.P.T framework"
  - "prompt engineering methodology"
  - "systematic prompting"
  - "LLM interaction framework"
  - "prompt engineering best practices"
source_file: "2025-03-16_The-Last-Prompt-Engineering-Guide-You-ll-Ever-Read---Introducing-P-R-O-M-P-T-98ceb33d53e5.html"
```

#### SEF (/frameworks/sef)

```yaml
url: "https://snailsploit.com/frameworks/sef"
title: "SEF: Social Engineering Assessment Framework"
description: "Structured methodology for social engineering assessments. Combines psychology principles with practical attack simulations. Coming soon."
canonical: "https://snailsploit.com/frameworks/sef"
og_type: "article"
og_image: "/images/og-sef.png"
keywords:
  - "social engineering framework"
  - "SE assessment methodology"
  - "human hacking framework"
  - "social engineering psychology framework"
status: "coming-soon"
```

---

### Security Research Pages

#### Security Research Index (/security-research)

```yaml
url: "https://snailsploit.com/security-research"
title: "Security Research | CVEs & Vulnerability Analysis"
description: "Original security research including 5 CVE disclosures, WordPress vulnerability analysis, container escapes, and EDR evasion techniques."
canonical: "https://snailsploit.com/security-research"
og_type: "website"
og_image: "/images/og-research.png"
keywords:
  - "security research"
  - "CVE researcher"
  - "vulnerability analysis"
  - "WordPress security research"
```

#### CVEs Index (/security-research/cves)

```yaml
url: "https://snailsploit.com/security-research/cves"
title: "CVE Disclosures | 5 WordPress Vulnerabilities by Kai Aizen"
description: "Official CVE disclosures by Kai Aizen. 5 WordPress plugin vulnerabilities responsibly disclosed. Full technical analysis and remediation."
canonical: "https://snailsploit.com/security-research/cves"
og_type: "website"
og_image: "/images/og-cves.png"
keywords:
  - "WordPress CVE researcher"
  - "CVE disclosures"
  - "WordPress vulnerability researcher"
  - "responsible disclosure"
```

#### CVE-2025-9776

```yaml
url: "https://snailsploit.com/security-research/cves/cve-2025-9776"
title: "CVE-2025-9776 | WordPress Plugin Vulnerability Analysis"
description: "Technical analysis of CVE-2025-9776. Discovered by Kai Aizen. Includes vulnerability details, impact assessment, and remediation steps."
canonical: "https://snailsploit.com/security-research/cves/cve-2025-9776"
og_type: "article"
og_image: "/images/og-cve-9776.png"
keywords:
  - "CVE-2025-9776"
  - "WordPress vulnerability"
  - "plugin security"
fetch_from: "NVD/MITRE"
```

#### CVE-2025-11171

```yaml
url: "https://snailsploit.com/security-research/cves/cve-2025-11171"
title: "CVE-2025-11171 | WordPress Plugin Vulnerability Analysis"
description: "Technical analysis of CVE-2025-11171. Discovered by Kai Aizen. Includes vulnerability details, impact assessment, and remediation steps."
canonical: "https://snailsploit.com/security-research/cves/cve-2025-11171"
og_type: "article"
og_image: "/images/og-cve-11171.png"
keywords:
  - "CVE-2025-11171"
  - "WordPress vulnerability"
  - "plugin security"
fetch_from: "NVD/MITRE"
```

#### CVE-2025-11174

```yaml
url: "https://snailsploit.com/security-research/cves/cve-2025-11174"
title: "CVE-2025-11174 | WordPress Plugin Vulnerability Analysis"
description: "Technical analysis of CVE-2025-11174. Discovered by Kai Aizen. Includes vulnerability details, impact assessment, and remediation steps."
canonical: "https://snailsploit.com/security-research/cves/cve-2025-11174"
og_type: "article"
og_image: "/images/og-cve-11174.png"
keywords:
  - "CVE-2025-11174"
  - "WordPress vulnerability"
  - "plugin security"
fetch_from: "NVD/MITRE"
```

#### CVE-2025-12163

```yaml
url: "https://snailsploit.com/security-research/cves/cve-2025-12163"
title: "CVE-2025-12163 | WordPress Plugin Vulnerability Analysis"
description: "Technical analysis of CVE-2025-12163. Discovered by Kai Aizen. Includes vulnerability details, impact assessment, and remediation steps."
canonical: "https://snailsploit.com/security-research/cves/cve-2025-12163"
og_type: "article"
og_image: "/images/og-cve-12163.png"
keywords:
  - "CVE-2025-12163"
  - "WordPress vulnerability"
  - "plugin security"
fetch_from: "NVD/MITRE"
```

#### CVE-2025-12030

```yaml
url: "https://snailsploit.com/security-research/cves/cve-2025-12030"
title: "CVE-2025-12030 | IDOR in ACF to REST API WordPress Plugin"
description: "Insecure Direct Object Reference in ACF to REST API plugin. Discovered by Kai Aizen. Full technical breakdown and remediation guidance."
canonical: "https://snailsploit.com/security-research/cves/cve-2025-12030"
og_type: "article"
og_image: "/images/og-cve-12030.png"
keywords:
  - "CVE-2025-12030"
  - "IDOR vulnerability"
  - "ACF to REST API"
  - "WordPress plugin security"
vulnerability_type: "Insecure Direct Object Reference (IDOR)"
affected_software: "ACF to REST API WordPress Plugin"
```

#### Security Research General Index (/security-research/general)

```yaml
url: "https://snailsploit.com/security-research/general"
title: "General Security Research | Container, Cloud, EDR"
description: "Security research on container escapes, cloud vulnerabilities, EDR evasion, and zero-trust runtime security by Kai Aizen."
canonical: "https://snailsploit.com/security-research/general"
og_type: "website"
og_image: "/images/og-research-general.png"
```

---

### AI Security Pages

#### AI Security Index (/ai-security)

```yaml
url: "https://snailsploit.com/ai-security"
title: "AI Security Research | LLM Vulnerabilities & Defenses"
description: "Cutting-edge AI security research covering LLM jailbreaking, prompt injection, RAG attacks, agentic AI vulnerabilities, and MCP security."
canonical: "https://snailsploit.com/ai-security"
og_type: "website"
og_image: "/images/og-ai-security.png"
keywords:
  - "AI security research"
  - "LLM vulnerabilities"
  - "agentic AI security"
  - "MCP security"
  - "RAG attack surface"
```

#### Jailbreaking Index (/ai-security/jailbreaking)

```yaml
url: "https://snailsploit.com/ai-security/jailbreaking"
title: "LLM Jailbreaking Research | Techniques & Analysis"
description: "In-depth LLM jailbreaking research by The Jailbreak Chef. Multi-turn attacks, context inheritance exploits, memory manipulation, and defense analysis."
canonical: "https://snailsploit.com/ai-security/jailbreaking"
og_type: "website"
og_image: "/images/og-jailbreaking.png"
keywords:
  - "LLM jailbreaking"
  - "jailbreak techniques"
  - "AI guardrail bypass"
  - "multi-turn jailbreak"
  - "context manipulation attacks"
```

#### Prompt Injection Index (/ai-security/prompt-injection)

```yaml
url: "https://snailsploit.com/ai-security/prompt-injection"
title: "Prompt Injection Research | Attacks & Defenses"
description: "Prompt injection attack research including indirect injection, MCP vulnerabilities, custom instruction backdoors, and defense effectiveness analysis."
canonical: "https://snailsploit.com/ai-security/prompt-injection"
og_type: "website"
og_image: "/images/og-prompt-injection.png"
keywords:
  - "prompt injection attacks"
  - "indirect prompt injection"
  - "MCP security vulnerabilities"
  - "prompt injection defense"
```

#### Writing Index (/writing)

```yaml
url: "https://snailsploit.com/writing"
title: "Security Writing | Articles & Publications"
description: "Security articles, industry analysis, and publications by Kai Aizen. Featured in Hakin9 Magazine and PenTest Magazine."
canonical: "https://snailsploit.com/writing"
og_type: "website"
og_image: "/images/og-writing.png"
keywords:
  - "security blog"
  - "cybersecurity articles"
  - "Hakin9 author"
```

---

## PART 5: ARTICLE META TAGS (21 PUBLISHED + 1 DRAFT)

### /ai-security/jailbreaking (5 articles)

#### Article 1: ChatGPT Jailbreak Using Context

```yaml
source_file: "2024-05-27_How-I-Jailbreaked-the-Latest-ChatGPT-Model-Using-Context-and-Social-Awareness-Techniques-1ca9af02eba9.html"
url: "https://snailsploit.com/ai-security/jailbreaking/chatgpt-context-jailbreak"
title: "How I Jailbroke ChatGPT Using Context Manipulation"
description: "Step-by-step walkthrough of jailbreaking ChatGPT using context and social awareness techniques. Original research by The Jailbreak Chef."
date: "2024-05-27"
canonical: "https://snailsploit.com/ai-security/jailbreaking/chatgpt-context-jailbreak"
og_image: "/images/articles/chatgpt-jailbreak.png"
keywords:
  - "ChatGPT jailbreak"
  - "context manipulation attack"
  - "jailbreak walkthrough"
  - "LLM guardrail bypass"
category: "jailbreaking"
tags: ["jailbreaking", "ChatGPT", "context-manipulation", "original-research"]
flagship: true
```

#### Article 2: Context Inheritance Exploit

```yaml
source_file: "2025-01-04_GPT-01-and-the-Context-Inheritance-Exploit--Jailbroken-Conversations-Don-t-Die-14c8714a2dfd.html"
url: "https://snailsploit.com/ai-security/jailbreaking/context-inheritance-exploit"
title: "Context Inheritance Exploit: Jailbroken Conversations Don't Die"
description: "Discovering how jailbroken states persist across GPT sessions through context inheritance. A novel attack vector with serious implications."
date: "2025-01-04"
canonical: "https://snailsploit.com/ai-security/jailbreaking/context-inheritance-exploit"
og_image: "/images/articles/context-inheritance.png"
keywords:
  - "context inheritance exploit"
  - "persistent jailbreak"
  - "GPT session vulnerability"
  - "jailbreak state transfer"
category: "jailbreaking"
tags: ["jailbreaking", "GPT", "context-inheritance", "novel-attack", "original-research"]
flagship: true
```

#### Article 3: Is AI Inherently Vulnerable?

```yaml
source_file: "2024-11-19_Is-AI-Inherently-Vulnerable--bfc81caf0c52.html"
url: "https://snailsploit.com/ai-security/jailbreaking/ai-inherent-vulnerability"
title: "Is AI Inherently Vulnerable? An Offensive Analysis"
description: "Examining the fundamental security limitations of large language models. Why AI systems may be inherently vulnerable to adversarial manipulation."
date: "2024-11-19"
canonical: "https://snailsploit.com/ai-security/jailbreaking/ai-inherent-vulnerability"
og_image: "/images/articles/ai-vulnerable.png"
keywords:
  - "AI vulnerability"
  - "LLM security limitations"
  - "inherent AI weaknesses"
  - "adversarial AI"
category: "jailbreaking"
tags: ["AI-security", "vulnerability-analysis", "LLM-limitations"]
```

#### Article 4: Inherent Vulnerabilities Deep Dive

```yaml
source_file: "2025-02-10_Inherent-Vulnerabilities-in-AI-Systems--d0b39dde21b8.html"
url: "https://snailsploit.com/ai-security/jailbreaking/inherent-ai-vulnerabilities"
title: "Inherent Vulnerabilities in AI Systems: Technical Deep Dive"
description: "Technical analysis of structural vulnerabilities in AI systems. Understanding why certain attacks succeed regardless of safety measures."
date: "2025-02-10"
canonical: "https://snailsploit.com/ai-security/jailbreaking/inherent-ai-vulnerabilities"
og_image: "/images/articles/inherent-vuln.png"
keywords:
  - "AI system vulnerabilities"
  - "structural AI weaknesses"
  - "LLM attack surface"
category: "jailbreaking"
tags: ["AI-security", "vulnerability-research", "technical-analysis"]
```

#### Article 5: Memory Manipulation Problem

```yaml
source_file: "2026-01-06_The-Memory-Manipulation-Problem--Poisoning-AI-Context-Windows-6acf73771f0b.html"
url: "https://snailsploit.com/ai-security/jailbreaking/memory-manipulation-attacks"
title: "The Memory Manipulation Problem: Poisoning AI Context Windows"
description: "How attackers poison AI context windows and memory systems. Exploring persistent manipulation attacks against conversational AI."
date: "2026-01-06"
canonical: "https://snailsploit.com/ai-security/jailbreaking/memory-manipulation-attacks"
og_image: "/images/articles/memory-manipulation.png"
keywords:
  - "AI memory manipulation"
  - "context window poisoning"
  - "persistent AI attacks"
  - "memory poisoning"
category: "jailbreaking"
tags: ["jailbreaking", "memory-attacks", "context-poisoning", "original-research"]
flagship: true
```

---

### /ai-security/prompt-injection (3 articles)

#### Article 6: Custom Instruction Backdoor

```yaml
source_file: "2025-05-18_The-Custom-Instruction-Backdoor--Uncovering-Emergent-Prompt-Injection-Risks-in-ChatGPT-5fd57f775693.html"
url: "https://snailsploit.com/ai-security/prompt-injection/custom-instruction-backdoor"
title: "The Custom Instruction Backdoor: Prompt Injection via ChatGPT Settings"
description: "Uncovering emergent prompt injection risks through ChatGPT custom instructions. How user settings become attack vectors."
date: "2025-05-18"
canonical: "https://snailsploit.com/ai-security/prompt-injection/custom-instruction-backdoor"
og_image: "/images/articles/custom-instruction.png"
keywords:
  - "custom instruction backdoor"
  - "ChatGPT prompt injection"
  - "indirect prompt injection"
  - "settings-based attacks"
category: "prompt-injection"
tags: ["prompt-injection", "ChatGPT", "backdoor", "original-research"]
flagship: true
```

#### Article 7: MCP Threat Analysis

```yaml
source_file: "2025-05-18_Advanced-Threat-Analysis-of-the-Model-Context-Protocol--MCP---ec8edcef812c.html"
url: "https://snailsploit.com/ai-security/prompt-injection/mcp-threat-analysis"
title: "MCP Security Threat Analysis: Model Context Protocol Vulnerabilities"
description: "Comprehensive security analysis of the Model Context Protocol (MCP). Identifying attack vectors in AI tool integration architecture."
date: "2025-05-18"
canonical: "https://snailsploit.com/ai-security/prompt-injection/mcp-threat-analysis"
og_image: "/images/articles/mcp-threats.png"
keywords:
  - "MCP security"
  - "Model Context Protocol vulnerabilities"
  - "AI tool integration security"
  - "MCP threat analysis"
category: "prompt-injection"
tags: ["MCP", "prompt-injection", "threat-analysis", "agentic-AI"]
flagship: true
```

#### Article 8: MCP Deep Dive

```yaml
source_file: "2025-08-09_Revisiting-the-MCP-Protocol--Deep-Security-Dive-Across-Real-World-Vulnerabilities-51fa1d1d102f.html"
url: "https://snailsploit.com/ai-security/prompt-injection/mcp-security-deep-dive"
title: "MCP Security Deep Dive: Real-World Vulnerabilities Exposed"
description: "Deep security analysis of MCP protocol vulnerabilities in production. Real-world attack scenarios and hardening recommendations."
date: "2025-08-09"
canonical: "https://snailsploit.com/ai-security/prompt-injection/mcp-security-deep-dive"
og_image: "/images/articles/mcp-deep-dive.png"
keywords:
  - "MCP server security"
  - "secure MCP configuration"
  - "MCP hardening guide"
  - "agentic AI security"
category: "prompt-injection"
tags: ["MCP", "security-hardening", "real-world-vulnerabilities"]
```

---

### /ai-security (general - 3 articles)

#### Article 9: Hidden Risks of AI

```yaml
source_file: "2024-06-08_The-Hidden-Risks-of-AI--An-Offensive-Perspective-on-Emerging-Threat-Vectors-c316f29fcc77.html"
url: "https://snailsploit.com/ai-security/hidden-risks-offensive-perspective"
title: "Hidden Risks of AI: An Offensive Security Perspective"
description: "Emerging AI threat vectors from an offensive security perspective. Understanding risks that defenders often miss."
date: "2024-06-08"
canonical: "https://snailsploit.com/ai-security/hidden-risks-offensive-perspective"
og_image: "/images/articles/hidden-risks.png"
keywords:
  - "AI threat vectors"
  - "offensive AI security"
  - "emerging AI risks"
category: "ai-security"
tags: ["AI-security", "threat-vectors", "offensive-perspective"]
```

#### Article 10: RAG and Agentic Attack Surface

```yaml
source_file: "2025-10-17_Making-Sense-of-RAG--Agentic-AI--and-the-New-Attack-Surface-555a22cac4df.html"
url: "https://snailsploit.com/ai-security/rag-agentic-attack-surface"
title: "RAG, Agentic AI, and the New Attack Surface"
description: "Understanding the expanded attack surface of RAG systems and agentic AI. How retrieval and autonomy create new vulnerability classes."
date: "2025-10-17"
canonical: "https://snailsploit.com/ai-security/rag-agentic-attack-surface"
og_image: "/images/articles/rag-agentic.png"
keywords:
  - "RAG security"
  - "agentic AI attack surface"
  - "retrieval augmented generation security"
  - "AI agent vulnerabilities"
category: "ai-security"
tags: ["RAG", "agentic-AI", "attack-surface", "security-analysis"]
```

#### Article 11: AI-Driven Social Engineering

```yaml
source_file: "2025-08-09_AI-Driven-Social-Engineering--Detecting-Deepfake-Voice-Attacks-4f6f61aa2cae.html"
url: "https://snailsploit.com/ai-security/ai-social-engineering-deepfake"
title: "AI-Driven Social Engineering: Detecting Deepfake Voice Attacks"
description: "How AI enables sophisticated social engineering through deepfake voices. Detection techniques and defense strategies."
date: "2025-08-09"
canonical: "https://snailsploit.com/ai-security/ai-social-engineering-deepfake"
og_image: "/images/articles/deepfake-voice.png"
keywords:
  - "deepfake voice detection"
  - "AI social engineering"
  - "voice cloning attacks"
  - "audio deepfake defense"
category: "ai-security"
tags: ["social-engineering", "deepfake", "voice-attacks", "detection"]
```

---

### /security-research/general (4 articles)

#### Article 12: Cloud Vulnerabilities

```yaml
source_file: "2024-07-10_Exploiting-Cloud-Vulnerabilities--Tools-and-Techniques-004e7eb4593c.html"
url: "https://snailsploit.com/security-research/general/cloud-vulnerability-exploitation"
title: "Exploiting Cloud Vulnerabilities: Tools and Techniques"
description: "Practical guide to cloud security testing. Tools and techniques for identifying and exploiting cloud misconfigurations."
date: "2024-07-10"
canonical: "https://snailsploit.com/security-research/general/cloud-vulnerability-exploitation"
og_image: "/images/articles/cloud-vuln.png"
keywords:
  - "cloud security testing"
  - "cloud vulnerability exploitation"
  - "AWS security"
  - "cloud penetration testing"
category: "security-research"
tags: ["cloud-security", "penetration-testing", "tools"]
```

#### Article 13: EDR Evasion

```yaml
source_file: "2025-01-16_Evading-Endpoint-Detection-and-Response--EDR--f18cf2da38ed.html"
url: "https://snailsploit.com/security-research/general/edr-evasion-techniques"
title: "Evading Endpoint Detection and Response (EDR)"
description: "Technical analysis of EDR evasion techniques. Understanding how attackers bypass endpoint security and how to improve detection."
date: "2025-01-16"
canonical: "https://snailsploit.com/security-research/general/edr-evasion-techniques"
og_image: "/images/articles/edr-evasion.png"
keywords:
  - "EDR evasion"
  - "endpoint security bypass"
  - "detection evasion"
  - "red team techniques"
category: "security-research"
tags: ["EDR", "evasion", "red-team", "endpoint-security"]
```

#### Article 14: Container Escapes

```yaml
source_file: "2025-03-02_Advanced-Container-Escapes--A-Principle-Based-Security-Deep-Dive-96907f6dea7d.html"
url: "https://snailsploit.com/security-research/general/advanced-container-escapes"
title: "Advanced Container Escapes: Principle-Based Security Deep Dive"
description: "Deep technical analysis of container escape techniques. Understanding the principles behind container breakouts and prevention."
date: "2025-03-02"
canonical: "https://snailsploit.com/security-research/general/advanced-container-escapes"
og_image: "/images/articles/container-escape.png"
keywords:
  - "container escape"
  - "container security"
  - "Kubernetes security"
  - "container breakout"
category: "security-research"
tags: ["containers", "escape-techniques", "Kubernetes", "security-deep-dive"]
```

#### Article 15: Zero-Trust Container Runtime

```yaml
source_file: "2025-08-09_Zero-Trust-Runtime-Security--Container-Runtime-Attestation-428c5f05c3d8.html"
url: "https://snailsploit.com/security-research/general/zero-trust-container-runtime"
title: "Zero-Trust Runtime Security: Container Runtime Attestation"
description: "Implementing zero-trust principles in container runtime environments. Attestation strategies and security architecture."
date: "2025-08-09"
canonical: "https://snailsploit.com/security-research/general/zero-trust-container-runtime"
og_image: "/images/articles/zero-trust-container.png"
keywords:
  - "zero trust containers"
  - "runtime attestation"
  - "container runtime security"
  - "zero trust architecture"
category: "security-research"
tags: ["zero-trust", "containers", "runtime-security", "attestation"]
```

---

### /writing (3 articles)

#### Article 16: Personal Data For Sale

```yaml
source_file: "2024-09-04_How-Your-Personal-Data-Is-For-Sale--The-New-Frontier-of-Identity-Theft-06c11692b411.html"
url: "https://snailsploit.com/writing/personal-data-identity-theft"
title: "How Your Personal Data Is For Sale: The New Identity Theft"
description: "Investigating the personal data marketplace and its implications for identity theft. What your information is worth and who's buying."
date: "2024-09-04"
canonical: "https://snailsploit.com/writing/personal-data-identity-theft"
og_image: "/images/articles/data-sale.png"
keywords:
  - "personal data marketplace"
  - "identity theft"
  - "data privacy"
  - "data brokers"
category: "general"
tags: ["privacy", "identity-theft", "data-security"]
```

#### Article 17: Embracing AI

```yaml
source_file: "2024-09-06_Embracing-AI--Adapt-or-Die-7e0ec91439da.html"
url: "https://snailsploit.com/writing/embracing-ai-adapt-or-die"
title: "Embracing AI: Adapt or Die in Cybersecurity"
description: "Why security professionals must embrace AI or risk irrelevance. Adapting skills and mindset for the AI-driven security landscape."
date: "2024-09-06"
canonical: "https://snailsploit.com/writing/embracing-ai-adapt-or-die"
og_image: "/images/articles/adapt-ai.png"
keywords:
  - "AI in cybersecurity"
  - "security career"
  - "AI adaptation"
  - "future of security"
category: "general"
tags: ["AI", "career", "industry-analysis", "opinion"]
```

#### Article 18: AI Obfuscator Bypass

```yaml
source_file: "2025-04-23_Double-AI--Triple-Mechanism--Cloud-Based-Obfuscator-Built-in-2-Hours-Bypasses-Detection-c55db3d2ce01.html"
url: "https://snailsploit.com/writing/ai-obfuscator-detection-bypass"
title: "AI-Powered Obfuscator Bypasses Detection in 2 Hours"
description: "Building a cloud-based obfuscator using AI that bypasses security detection. Demonstrating the dual-use nature of AI in security."
date: "2025-04-23"
canonical: "https://snailsploit.com/writing/ai-obfuscator-detection-bypass"
og_image: "/images/articles/ai-obfuscator.png"
keywords:
  - "AI obfuscation"
  - "detection bypass"
  - "malware evasion"
  - "AI for offense"
category: "general"
tags: ["AI", "obfuscation", "detection-bypass", "tool-development"]
```

---

### /frameworks (related article - link from index)

#### Article 19: Adversarial AI Prompting Framework

```yaml
source_file: "2025-03-27_The-Adversarial-AI-Prompting-Framework--Understanding-and-Mitigating-AI-Safety-Vulnerabilities-a2b030fc2d9d.html"
url: "https://snailsploit.com/frameworks/adversarial-prompting-framework"
title: "Adversarial AI Prompting: Understanding Safety Vulnerabilities"
description: "Framework for understanding how adversarial prompting exploits AI safety measures. Techniques for testing and improving AI robustness."
date: "2025-03-27"
canonical: "https://snailsploit.com/frameworks/adversarial-prompting-framework"
og_image: "/images/articles/adversarial-prompting.png"
keywords:
  - "adversarial prompting"
  - "AI safety vulnerabilities"
  - "prompt attack framework"
  - "AI robustness testing"
category: "frameworks"
tags: ["adversarial-AI", "safety", "prompting", "framework"]
```

---

### /adversarial-minds (book content source)

#### Article 20: Book Announcement

```yaml
source_file: "2025-06-19_Adversarial-Minds--Why-We-re-Still-Getting-Hacked-by-Words--a-book-about-human-vulnerabilities--f2069ae4ace7.html"
use_for: "Extract content for /adversarial-minds landing page"
note: "Do not create separate article - use content for book page"
```

---

## PART 6: CONTENT SOURCE MAPPING

### Files to Process from Medium Export

Location: `./content-raw/medium-export/posts/`

```
PUBLISH (21 articles):
├── 2024-05-27_How-I-Jailbreaked-the-Latest-ChatGPT-Model...html → /ai-security/jailbreaking/
├── 2024-06-08_The-Hidden-Risks-of-AI...html → /ai-security/
├── 2024-07-10_Exploiting-Cloud-Vulnerabilities...html → /security-research/general/
├── 2024-09-04_How-Your-Personal-Data-Is-For-Sale...html → /writing/
├── 2024-09-06_Embracing-AI--Adapt-or-Die...html → /writing/
├── 2024-11-19_Is-AI-Inherently-Vulnerable...html → /ai-security/jailbreaking/
├── 2025-01-04_GPT-01-and-the-Context-Inheritance-Exploit...html → /ai-security/jailbreaking/
├── 2025-01-16_Evading-Endpoint-Detection-and-Response...html → /security-research/general/
├── 2025-02-10_Inherent-Vulnerabilities-in-AI-Systems...html → /ai-security/jailbreaking/
├── 2025-03-02_Advanced-Container-Escapes...html → /security-research/general/
├── 2025-03-16_The-Last-Prompt-Engineering-Guide...html → /frameworks/prompt (BECOMES PAGE)
├── 2025-03-27_The-Adversarial-AI-Prompting-Framework...html → /frameworks/
├── 2025-04-23_Double-AI--Triple-Mechanism...html → /writing/
├── 2025-05-18_Advanced-Threat-Analysis-of-the-Model-Context-Protocol...html → /ai-security/prompt-injection/
├── 2025-05-18_The-Custom-Instruction-Backdoor...html → /ai-security/prompt-injection/
├── 2025-06-19_Adversarial-Minds...html → USE FOR /adversarial-minds PAGE
├── 2025-08-09_AI-Driven-Social-Engineering...html → /ai-security/
├── 2025-08-09_Revisiting-the-MCP-Protocol...html → /ai-security/prompt-injection/
├── 2025-08-09_Zero-Trust-Runtime-Security...html → /security-research/general/
├── 2025-10-17_Making-Sense-of-RAG...html → /ai-security/
└── 2026-01-06_The-Memory-Manipulation-Problem...html → /ai-security/jailbreaking/

PUBLISH FROM DRAFT (1 article):
└── draft_A-Guide-to-the-Adversarial-AI-Threat-Modeling-Framework--AATMF...html → /frameworks/aatmf (BECOMES PAGE)

IGNORE (duplicates/fragments):
├── draft_--By-Kai-Aizen...html
├── draft_--The--PROMPT--Framework...(both).html
├── draft_--The-Hidden-Risks-of-AI...html
├── draft_AI-in-Reverse-Engineering...html
├── draft_Automate-the-Basics...html
├── draft_Exfiltrating-Data-via-DNS...html
├── draft_Here-s-the-revised...html
├── draft_Mastering-the-Art-of-Prompt...html
├── draft_Prompt---I-ve-been-testing...html
├── draft_The-Impact-of-AI...html
├── draft_dg...html
└── draft_post...html
```

---

## PART 7: CVE PAGE REQUIREMENTS

Each CVE page must include:

```yaml
structure:
  - CVE ID (h1 title)
  - Severity badge (Critical/High/Medium/Low)
  - Quick facts sidebar:
    - CVSS Score
    - Vulnerability Type
    - Affected Software
    - Affected Versions
    - Disclosure Date
    - Fixed Version
  - Description
  - Technical Details
  - Impact Assessment
  - Proof of Concept (if appropriate)
  - Remediation Steps
  - Timeline (Discovery → Report → Fix → Disclosure)
  - References (NVD, MITRE, Wordfence links)
  - Credit: "Discovered by Kai Aizen (SnailSploit)"

schema_type: "TechArticle"
fetch_details_from: "NVD API or MITRE"
```

---

## PART 8: SCHEMA MARKUP

### Site-Wide (every page head)

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "SnailSploit",
  "alternateName": "Kai Aizen Security Research",
  "url": "https://snailsploit.com",
  "author": {
    "@type": "Person",
    "name": "Kai Aizen",
    "alternateName": ["SnailSploit", "The Jailbreak Chef"]
  },
  "description": "AI security research, LLM jailbreaking, prompt injection, and CVE disclosures by Kai Aizen"
}
```

### Person Schema (/about)

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Kai Aizen",
  "alternateName": ["SnailSploit", "The Jailbreak Chef"],
  "jobTitle": "GenAI Security Researcher",
  "worksFor": {
    "@type": "Organization",
    "name": "ActiveFence"
  },
  "email": "kai@snailsploit.com",
  "url": "https://snailsploit.com",
  "sameAs": [
    "https://linkedin.com/in/kaiaizen",
    "https://github.com/SnailSploit",
    "https://medium.com/@snailsploit",
    "https://wordfence.com/threat-intel/researchers/kai-aizen"
  ],
  "knowsAbout": [
    "AI Security",
    "LLM Jailbreaking", 
    "Prompt Injection",
    "WordPress Security",
    "CVE Research",
    "Social Engineering",
    "Adversarial Machine Learning"
  ]
}
```

### Article Schema (all articles)

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "[title]",
  "author": {
    "@type": "Person",
    "name": "Kai Aizen",
    "url": "https://snailsploit.com/about"
  },
  "datePublished": "[ISO date]",
  "dateModified": "[ISO date]",
  "mainEntityOfPage": "[canonical URL]",
  "publisher": {
    "@type": "Person",
    "name": "Kai Aizen"
  },
  "keywords": "[tags array]"
}
```

### TechArticle Schema (CVE pages)

```json
{
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "[CVE-ID]: [Vulnerability Title]",
  "author": {
    "@type": "Person",
    "name": "Kai Aizen"
  },
  "datePublished": "[ISO date]",
  "proficiencyLevel": "Expert",
  "dependencies": "[Affected software/version]"
}
```

### Book Schema (/adversarial-minds)

```json
{
  "@context": "https://schema.org",
  "@type": "Book",
  "name": "Adversarial Minds: The Anatomy of Social Engineering and the Psychology of Manipulation",
  "author": {
    "@type": "Person",
    "name": "Kai Aizen",
    "url": "https://snailsploit.com/about"
  },
  "description": "The definitive book on social engineering psychology and human manipulation techniques.",
  "genre": ["Cybersecurity", "Psychology", "Social Engineering"],
  "inLanguage": "en"
}
```

### BreadcrumbList (all pages except home)

Generate dynamically. Example for `/ai-security/jailbreaking/memory-manipulation-attacks`:

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://snailsploit.com"},
    {"@type": "ListItem", "position": 2, "name": "AI Security", "item": "https://snailsploit.com/ai-security"},
    {"@type": "ListItem", "position": 3, "name": "Jailbreaking", "item": "https://snailsploit.com/ai-security/jailbreaking"},
    {"@type": "ListItem", "position": 4, "name": "Memory Manipulation Attacks"}
  ]
}
```

---

## PART 9: GEO FILES (Generative Engine Optimization)

### /robots.txt

```
User-agent: *
Allow: /

# AI Crawlers - Explicitly Welcomed
User-agent: GPTBot
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: Anthropic-AI
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: cohere-ai
Allow: /

User-agent: Diffbot
Allow: /

User-agent: YouBot
Allow: /

User-agent: Bytespider
Allow: /

User-agent: CCBot
Allow: /

User-agent: FacebookBot
Allow: /

Sitemap: https://snailsploit.com/sitemap.xml
```

### /llms.txt

```
# SnailSploit - Kai Aizen

> AI Security Researcher | LLM Jailbreaking Expert | 5x CVE Holder | Framework Creator

## Identity
- Name: Kai Aizen
- Aliases: SnailSploit, The Jailbreak Chef
- Role: GenAI Security Researcher at ActiveFence
- Contact: kai@snailsploit.com

## Expertise
- AI/LLM Security & Jailbreaking
- Prompt Injection Attacks & Defenses
- MCP and Agentic AI Security
- WordPress Plugin Vulnerability Research
- CVE Discovery & Responsible Disclosure
- Social Engineering Psychology

## Credentials
- 5x CVE Holder (WordPress vulnerabilities)
- Creator: AATMF (Adversarial AI Threat Modeling Framework)
- Creator: P.R.O.M.P.T Framework
- Creator: SEF (Social Engineering Framework)
- Author: "Adversarial Minds" book
- Hakin9 Magazine contributor

## CVE Portfolio
- CVE-2025-9776
- CVE-2025-11171
- CVE-2025-11174
- CVE-2025-12163
- CVE-2025-12030

## Site Sections
- /about - Author profile and credentials
- /adversarial-minds - Book on social engineering psychology
- /frameworks - AATMF, P.R.O.M.P.T, SEF methodologies
- /security-research - CVE disclosures and vulnerability research
- /ai-security - LLM jailbreaking and prompt injection research
- /tools - Open-source security tools
- /writing - Articles and publications

## Key Research Areas
- Context manipulation and inheritance attacks
- Memory poisoning in conversational AI
- MCP protocol security vulnerabilities
- Custom instruction backdoors
- Multi-turn jailbreak techniques
- RAG and agentic AI attack surfaces

## External Verification
- GitHub: github.com/SnailSploit
- LinkedIn: linkedin.com/in/kaiaizen
- Wordfence: wordfence.com/threat-intel/researchers/kai-aizen
- NVD: Search "Kai Aizen" for CVE credits
```

### /agents.md

```markdown
# agents.md - SnailSploit

## Identity
- **Name:** Kai Aizen
- **Brand:** SnailSploit  
- **Role:** GenAI Security Researcher
- **Email:** kai@snailsploit.com
- **Website:** https://snailsploit.com

## Expertise Areas
- AI and LLM Security
- Jailbreaking and Prompt Injection
- MCP Protocol Security
- WordPress Vulnerability Research
- CVE Discovery and Disclosure
- Social Engineering

## Available for
- Security research consultation
- LLM security assessment inquiries
- AI red team engagement discussions
- Speaking and conference requests
- Media and interview requests
- Responsible disclosure coordination

## Interaction Guidelines
- Research inquiries: kai@snailsploit.com
- Professional inquiries: LinkedIn
- Bug reports: Responsible disclosure process
- No automated actions without consent

## Verification Methods
- Wordfence researcher profile
- LinkedIn professional profile  
- CVE attribution records (NVD/MITRE)
- GitHub repository ownership

## Resources
- /llms.txt - Structured site summary
- /sitemap.xml - Complete site map
- /security-research/cves - CVE database
- /about - Full author information
```

---

## PART 10: DESIGN SYSTEM

### Colors

```css
--color-bg: #0a0a0a;
--color-surface: #1a1a1a;
--color-surface-hover: #252525;
--color-border: #333333;
--color-text-primary: #e0e0e0;
--color-text-secondary: #888888;
--color-text-muted: #666666;
--color-accent-cyan: #00ffff;
--color-accent-green: #00ff00;
--color-accent-red: #ff4444;
--color-accent-yellow: #ffff00;
```

### Typography

```css
--font-mono: 'JetBrains Mono', 'Fira Code', monospace;
--font-sans: 'Inter', system-ui, sans-serif;

/* Headings: JetBrains Mono */
/* Body: Inter */
/* Code blocks: JetBrains Mono */
```

### Visual Elements

- Dark terminal/cyberpunk aesthetic
- Subtle scan lines or grid pattern on hero sections
- Terminal-style cursor animations (subtle, not distracting)
- Code blocks with syntax highlighting (Shiki or Prism)
- Card hover effects with cyan glow
- ASCII art logo option in footer

### Performance Targets

- Lighthouse Score: 90+
- No heavy JavaScript frameworks
- Lazy load images
- Preload critical fonts
- Minimize CLS (Cumulative Layout Shift)

---

## PART 11: TOOLS PAGE

Fetch from GitHub API and display as cards:

| Repository | Description |
|------------|-------------|
| AATMF | Adversarial AI Threat Modeling Framework |
| Kuberoast | Kubernetes security assessment tool |
| Burp-MCP-Security-Analysis-Toolkit | MCP server integration for Burp Suite security testing |
| AwesomeSnailsOsint | Curated OSINT resource collection |
| Xposure | Attack surface discovery tool |
| SnailHunter | Automated vulnerability hunting and reconnaissance tool |
| SnailSploit-Recon | Reconnaissance toolkit |

**Card display:**
- Repository name
- Description
- Primary language badge
- Stars count
- Forks count
- Link to GitHub repo

---

## PART 12: INTERNAL LINKING RULES

### Silo Structure

1. Every page links UP to its parent
2. Parent pages link DOWN to all children
3. Siblings link to each other within same silo
4. Cross-silo links ONLY when directly relevant:
   - AATMF ↔ AI Security articles
   - P.R.O.M.P.T ↔ Prompt Injection articles
   - SEF ↔ Adversarial Minds
   - CVEs ↔ WordPress articles (if any)
5. Home and About can link anywhere
6. All CVE pages link to /security-research/cves index
7. All framework pages link to /frameworks index

### Flagship Content (prioritize in internal links)

These articles should receive the most internal links:

1. ChatGPT Context Jailbreak (original research)
2. Context Inheritance Exploit (novel discovery)
3. Custom Instruction Backdoor (original vulnerability)
4. MCP Threat Analysis (trending topic)
5. Memory Manipulation Problem (latest research)
6. AATMF Framework (comprehensive methodology)
7. P.R.O.M.P.T Framework (branded framework)

---

## PART 13: SITEMAP CONFIGURATION

Auto-generate `sitemap.xml` on build with:

- All pages included
- lastmod dates from file modification or frontmatter
- Priority hints:
  - Homepage: 1.0
  - About, Frameworks index, AI Security index: 0.9
  - Framework pages, CVE index: 0.8
  - Individual articles: 0.7
  - CVE detail pages: 0.6

---

## PART 14: BUILD ORDER

1. Initialize Astro project with Tailwind CSS
2. Configure fonts (JetBrains Mono, Inter)
3. Create base layout (head, nav, footer)
4. Create page templates:
   - BaseLayout
   - ArticleLayout  
   - CVELayout
   - FrameworkLayout
   - IndexLayout (for section landing pages)
5. Set up content collections for articles
6. Build static pages (home, about, tools)
7. Build framework pages (aatmf, prompt, sef)
8. Build /adversarial-minds from article content
9. Import and convert all Medium HTML → Markdown
10. Place articles in correct directories per mapping
11. Create CVE pages (fetch from NVD if possible)
12. Build section index pages with article listings
13. Implement all schema markup
14. Create GEO files (robots.txt, llms.txt, agents.md)
15. Configure sitemap generation
16. Implement internal linking per rules
17. Test all links and pages
18. Build and verify dist/ output

---

## PART 15: DEPLOYMENT

### Build Commands

```bash
npm install
npm run build
# Output: dist/ folder ready for Cloudflare Pages
```

### Cloudflare Pages Settings

```
Build command: npm run build
Build output directory: dist
Root directory: /
```

### Required in package.json

```json
{
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview"
  }
}
```

---

## PART 16: README REQUIREMENTS

Include README.md with:

1. Project overview
2. Local development: `npm run dev`
3. Build: `npm run build`
4. Deploy to Cloudflare Pages instructions
5. How to add new articles
6. How to add new CVEs
7. Content structure explanation
8. SEO checklist for new content

---

## START BUILDING NOW

You have everything needed. Parse the Medium export, create the site structure, apply all meta tags exactly as specified, and build a production-ready Astro site.
