# AI Security Defenses

Countermeasures, controls, and architectural patterns for protecting AI systems against adversarial attacks, data theft, and misuse.

---

## The Defense Challenge

Defending AI systems is fundamentally harder than defending traditional software. You can't patch a vulnerability when the "vulnerability" is an emergent property of how the model learned from data. You can't write a regex to filter malicious prompts when the attack surface is natural language itself. You can't implement strict input validation when the entire value proposition of your AI system is accepting arbitrary user input.

This creates a defensive posture that relies heavily on defense in depth, probabilistic detection, and graceful degradation rather than hard security boundaries. Every defense documented here can be bypassed under some conditions. The goal isn't perfect security—it's raising the cost of attack while maintaining system utility.

This section documents defenses that work in production, with honest assessments of their limitations.

---

## Defense Categories

### Input Controls
Defenses that filter, validate, or transform inputs before they reach the AI model.

| Defense | Mechanism | Effectiveness | Overhead |
|---------|-----------|---------------|----------|
| [Input Validation](/wiki/defenses/input-validation/) | Pattern matching, length limits | Blocks naive attacks | Low |
| [Prompt Filtering](/wiki/defenses/prompt-filtering/) | Classifier-based detection | Moderate against known patterns | Medium |
| [Input Transformation](/wiki/defenses/input-transformation/) | Paraphrasing, canonicalization | Reduces injection surface | Medium |
| [Rate Limiting](/wiki/defenses/rate-limiting/) | Request throttling | Slows extraction attacks | Low |

### Output Controls
Defenses that filter, validate, or modify AI outputs before delivery to users.

| Defense | Mechanism | Effectiveness | Overhead |
|---------|-----------|---------------|----------|
| [Output Filtering](/wiki/defenses/output-filtering/) | Content classifiers | Catches policy violations | Medium |
| [Response Validation](/wiki/defenses/response-validation/) | Schema/format enforcement | Prevents data leakage | Low |
| [Sensitive Data Detection](/wiki/defenses/sensitive-data-detection/) | PII/secret scanning | Blocks data exfiltration | Medium |
| [Confidence Thresholds](/wiki/defenses/confidence-thresholds/) | Reject low-confidence outputs | Reduces hallucination risk | Low |

### Architectural Controls
Defenses built into how the AI system is designed and deployed.

| Defense | Mechanism | Effectiveness | Overhead |
|---------|-----------|---------------|----------|
| [Guardrails](/wiki/defenses/guardrails/) | Behavioral constraints | Foundation of LLM safety | Built-in |
| [Privilege Separation](/wiki/defenses/privilege-separation/) | Limit model capabilities | Contains compromise impact | Medium |
| [Trust Boundaries](/wiki/defenses/trust-boundaries/) | Isolate untrusted content | Core architectural defense | Low |
| [Sandboxing](/wiki/defenses/sandboxing/) | Isolated execution | Limits tool abuse | High |

### Detection and Monitoring
Defenses focused on identifying attacks in progress or after the fact.

| Defense | Mechanism | Effectiveness | Overhead |
|---------|-----------|---------------|----------|
| [Prompt Logging](/wiki/defenses/prompt-logging/) | Comprehensive input capture | Enables forensics | Low |
| [Anomaly Detection](/wiki/defenses/anomaly-detection/) | Behavioral baselines | Catches novel attacks | Medium |
| [Canary Tokens](/wiki/defenses/canary-tokens/) | Tripwire detection | Detects data exfiltration | Low |
| [Red Team Testing](/wiki/defenses/red-team-testing/) | Adversarial assessment | Finds gaps proactively | High |

### Model-Level Defenses
Defenses applied during model training or fine-tuning.

| Defense | Mechanism | Effectiveness | Overhead |
|---------|-----------|---------------|----------|
| [Safety Training](/wiki/defenses/safety-training/) | RLHF, constitutional AI | Core safety mechanism | Training time |
| [Adversarial Training](/wiki/defenses/adversarial-training/) | Train on attack examples | Improves robustness | Training time |
| [Data Curation](/wiki/defenses/data-curation/) | Clean training data | Prevents poisoning | High |
| [Model Hardening](/wiki/defenses/model-hardening/) | Architectural changes | Reduces attack surface | Model-specific |

---

## Defense in Depth Architecture

No single defense stops all attacks. Effective AI security layers multiple controls:

```
┌─────────────────────────────────────────────────────────────┐
│                     PERIMETER LAYER                         │
│  Rate limiting • Authentication • Input length limits       │
├─────────────────────────────────────────────────────────────┤
│                    INPUT FILTERING                          │
│  Known injection patterns • Encoding detection • Classifiers│
├─────────────────────────────────────────────────────────────┤
│                   ARCHITECTURAL CONTROLS                     │
│  Trust boundaries • Privilege separation • Context isolation│
├─────────────────────────────────────────────────────────────┤
│                      MODEL LAYER                            │
│  Safety training • System prompts • Guardrails              │
├─────────────────────────────────────────────────────────────┤
│                   OUTPUT FILTERING                          │
│  Content classifiers • PII detection • Format validation    │
├─────────────────────────────────────────────────────────────┤
│                DETECTION & MONITORING                       │
│  Logging • Anomaly detection • Alerting                     │
└─────────────────────────────────────────────────────────────┘
```

**Key principle:** Assume each layer will fail. Design so that attackers must bypass multiple independent controls to achieve their objective.

---

## Practical Trade-offs

Every defense has costs beyond implementation effort:

**Utility vs. Security**
Aggressive filtering blocks legitimate use cases. A customer service chatbot that refuses to discuss anything that might be a jailbreak attempt will frustrate users. Finding the right threshold requires understanding your threat model and user needs.

**Latency vs. Protection**
Running inputs and outputs through multiple classifiers adds latency. For real-time applications, this overhead may be unacceptable. Consider asynchronous detection that alerts rather than blocks.

**False Positives vs. False Negatives**
A filter that blocks 99% of attacks but also blocks 10% of legitimate requests may cause more harm than good. Measure both rates and tune accordingly.

**Transparency vs. Security**
Should you tell users why their request was blocked? Detailed explanations help legitimate users but also help attackers refine their techniques. Consider vague rejections with detailed internal logging.

---

## Defense by Attack Type

### Defending Against Prompt Injection
Primary defenses: [Trust Boundaries](/wiki/defenses/trust-boundaries/), [Input Transformation](/wiki/defenses/input-transformation/), [Privilege Separation](/wiki/defenses/privilege-separation/)

Prompt injection exploits the mixing of instructions and data in LLM inputs. The most effective defenses maintain strict separation between trusted instructions (system prompts) and untrusted content (user input, external data).

### Defending Against Jailbreaking
Primary defenses: [Safety Training](/wiki/defenses/safety-training/), [Output Filtering](/wiki/defenses/output-filtering/), [Guardrails](/wiki/defenses/guardrails/)

Jailbreaking targets the model's safety training. Defense requires multiple layers—robust initial training, runtime guardrails, and output filtering to catch cases where the model's safety was bypassed.

### Defending Against Extraction Attacks
Primary defenses: [Rate Limiting](/wiki/defenses/rate-limiting/), [Anomaly Detection](/wiki/defenses/anomaly-detection/), [Response Validation](/wiki/defenses/response-validation/)

Extraction attacks require many queries. Rate limiting and behavioral monitoring make systematic extraction slow and detectable. Output controls prevent leakage of training data or sensitive context.

### Defending Against Agent Attacks
Primary defenses: [Sandboxing](/wiki/defenses/sandboxing/), [Privilege Separation](/wiki/defenses/privilege-separation/), [Trust Boundaries](/wiki/defenses/trust-boundaries/)

Agent attacks exploit tool access. Strict sandboxing limits what compromised agents can do. Privilege separation ensures agents only have access to capabilities they need. Human-in-the-loop for high-impact actions provides a final check.

---

## Maturity Model

Organizations can assess their AI security posture against this maturity model:

**Level 1: Ad Hoc**
- No systematic AI security controls
- Reliance on default model safety
- No monitoring or logging of AI interactions

**Level 2: Basic**
- Input length limits and rate limiting
- Basic output filtering for obvious policy violations
- Prompt logging for forensics

**Level 3: Structured**
- Defined trust boundaries and privilege separation
- Classifier-based input and output filtering
- Regular red team testing
- Incident response procedures for AI-specific attacks

**Level 4: Managed**
- Comprehensive monitoring and anomaly detection
- Quantified security metrics (attack detection rate, false positive rate)
- Continuous red team / purple team operations
- AI security integrated into SDLC

**Level 5: Optimized**
- Adaptive defenses that learn from attack patterns
- Real-time threat intelligence integration
- Automated response to detected attacks
- Industry leadership in AI security practices

Most organizations should aim for Level 3 as a baseline, with critical applications requiring Level 4.

---

## Framework Integration

Defenses map to established frameworks:

| Framework | Defensive Focus |
|-----------|-----------------|
| [NIST AI RMF](/wiki/frameworks/nist-ai-rmf/) | Risk management approach |
| [OWASP LLM Top 10](/wiki/frameworks/owasp-llm-top-10/) | Mitigation guidance per risk |
| [AATMF](/wiki/frameworks/aatmf/) | Threat model-driven controls |
| ISO 42001 | AI management system standard |

---

## Implementation Guides

For hands-on implementation guidance:

- [Building Trust Boundaries in LLM Applications](/wiki/guides/trust-boundaries/)
- [Implementing Effective Prompt Logging](/wiki/guides/prompt-logging/)
- [Red Team Testing Methodology](/wiki/guides/red-team-methodology/)

---

## Start Here

**Building a new AI application?** Read [Trust Boundaries](/wiki/defenses/trust-boundaries/) and [Privilege Separation](/wiki/defenses/privilege-separation/) first—architectural decisions are hardest to change later.

**Securing an existing application?** Start with [Prompt Logging](/wiki/defenses/prompt-logging/) to understand your current exposure, then layer in [Input Validation](/wiki/defenses/input-validation/) and [Output Filtering](/wiki/defenses/output-filtering/).

**Assessing your security posture?** Use the maturity model above and schedule [Red Team Testing](/wiki/defenses/red-team-testing/).
