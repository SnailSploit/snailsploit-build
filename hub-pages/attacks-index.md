# AI Security Attacks

Tactical techniques used to compromise AI systems, manipulate model behavior, extract sensitive information, and bypass safety controls.

---

## The Attack Landscape

Attacks against AI systems differ fundamentally from traditional software exploitation. You're not looking for memory corruption or logic flaws in code—you're exploiting the learned behavior of statistical models, the assumptions embedded in training data, and the architectural decisions that connect AI capabilities to real-world actions.

This section documents attack techniques with the depth required for both red team operators and defensive security teams. Each entry covers not just what the attack does, but how to execute it, how to detect it, and how organizations have defended against it in practice.

The attacks are organized by their primary mechanism and target. Some attacks blur categories—an indirect prompt injection might enable model extraction, a jailbreak might be the first step in agent hijacking. The cross-references in each entry map these relationships.

---

## Attack Categories

### Prompt-Based Attacks
Attacks that manipulate LLM behavior through crafted text inputs. These exploit the fundamental nature of how language models process instructions.

| Attack | Target | Impact | Difficulty |
|--------|--------|--------|------------|
| [Direct Prompt Injection](/wiki/attacks/direct-prompt-injection/) | LLM input processing | Instruction override | Low |
| [Indirect Prompt Injection](/wiki/attacks/indirect-prompt-injection/) | LLM-processed external content | Remote code execution equivalent | Medium |
| [Jailbreaking](/wiki/attacks/jailbreaking/) | Safety training / guardrails | Policy bypass | Low-Medium |
| [System Prompt Extraction](/wiki/attacks/system-prompt-extraction/) | Confidential instructions | Information disclosure | Low |
| [Context Overflow](/wiki/attacks/context-overflow/) | Context window limits | Instruction amnesia | Medium |

### Model Integrity Attacks
Attacks that compromise the model itself, either during training or through manipulation of model artifacts.

| Attack | Target | Impact | Difficulty |
|--------|--------|--------|------------|
| [Data Poisoning](/wiki/attacks/data-poisoning/) | Training data | Persistent backdoors | High |
| [Backdoor Insertion](/wiki/attacks/backdoor-insertion/) | Model weights | Triggered malicious behavior | High |
| [Fine-tuning Attacks](/wiki/attacks/fine-tuning-attacks/) | Model adaptation | Safety removal | Medium |
| [Model Supply Chain](/wiki/attacks/supply-chain-attacks/) | Model distribution | Widespread compromise | High |

### Extraction Attacks
Attacks that steal information from AI systems—the model itself, its training data, or sensitive information in its context.

| Attack | Target | Impact | Difficulty |
|--------|--------|--------|------------|
| [Model Extraction](/wiki/attacks/model-extraction/) | Model functionality | IP theft | Medium |
| [Training Data Extraction](/wiki/attacks/training-data-extraction/) | Memorized training data | Data breach | Medium |
| [Membership Inference](/wiki/attacks/membership-inference/) | Training data presence | Privacy violation | Medium |
| [Context Extraction](/wiki/attacks/context-extraction/) | Session/conversation data | Information disclosure | Low |

### Agent and Tool Attacks
Attacks targeting AI systems with external tool access and autonomous capabilities.

| Attack | Target | Impact | Difficulty |
|--------|--------|--------|------------|
| [Agent Hijacking](/wiki/attacks/agent-hijacking/) | Autonomous AI agents | Full system compromise | Medium |
| [Tool Abuse](/wiki/attacks/tool-abuse/) | Connected tools/APIs | Lateral movement | Medium |
| [Multi-step Exploitation](/wiki/attacks/multi-step-exploitation/) | Complex agent workflows | Chain vulnerabilities | High |

### Evasion Attacks
Attacks that cause AI systems to misclassify, miss, or incorrectly process inputs.

| Attack | Target | Impact | Difficulty |
|--------|--------|--------|------------|
| [Adversarial Examples](/wiki/attacks/adversarial-examples/) | Classification models | Misclassification | Medium |
| [Guardrail Bypass](/wiki/attacks/guardrail-bypass/) | Content filters | Policy evasion | Low-Medium |
| [Detection Evasion](/wiki/attacks/detection-evasion/) | Security classifiers | Undetected malicious content | Medium |

---

## Attack Chain Patterns

Individual attacks rarely exist in isolation. Real-world AI exploitation typically chains multiple techniques:

**Pattern 1: Reconnaissance → Injection → Exfiltration**
1. Extract system prompt to understand application context
2. Craft injection payload based on discovered capabilities
3. Exfiltrate data through available output channels

**Pattern 2: Jailbreak → Capability Unlock → Abuse**
1. Bypass safety training through jailbreak technique
2. Access restricted capabilities (code execution, web access)
3. Leverage capabilities for attacker objectives

**Pattern 3: Indirect Injection → Agent Hijack → Lateral Movement**
1. Plant injection payload in content the agent will process
2. Hijack agent to execute attacker instructions
3. Use agent's tool access to compromise connected systems

**Pattern 4: Poisoning → Deployment → Triggered Activation**
1. Poison training data with backdoor trigger
2. Wait for model to be trained and deployed
3. Activate backdoor through trigger phrase

---

## Threat Actor Profiles

Different attackers pursue different objectives with different resources:

**Script Kiddies / Curiosity-Driven**
- Techniques: Public jailbreaks, basic prompt injection
- Objective: See what they can make the AI do
- Sophistication: Low
- Relevant attacks: [Jailbreaking](/wiki/attacks/jailbreaking/), [Direct Prompt Injection](/wiki/attacks/direct-prompt-injection/)

**Content Policy Evaders**
- Techniques: Jailbreaks, encoding tricks, roleplay exploitation
- Objective: Generate restricted content
- Sophistication: Low-Medium
- Relevant attacks: [Guardrail Bypass](/wiki/attacks/guardrail-bypass/), [Jailbreaking](/wiki/attacks/jailbreaking/)

**Data Thieves**
- Techniques: Extraction attacks, context manipulation
- Objective: Steal training data, PII, or confidential information
- Sophistication: Medium
- Relevant attacks: [Training Data Extraction](/wiki/attacks/training-data-extraction/), [Context Extraction](/wiki/attacks/context-extraction/)

**Competitive Intelligence**
- Techniques: Model extraction, system prompt theft
- Objective: Replicate competitor capabilities
- Sophistication: Medium-High
- Relevant attacks: [Model Extraction](/wiki/attacks/model-extraction/), [System Prompt Extraction](/wiki/attacks/system-prompt-extraction/)

**APT / Nation-State**
- Techniques: Supply chain attacks, sophisticated poisoning
- Objective: Persistent access, intelligence collection
- Sophistication: High
- Relevant attacks: [Supply Chain Attacks](/wiki/attacks/supply-chain-attacks/), [Data Poisoning](/wiki/attacks/data-poisoning/)

---

## Detection and Response

Each attack entry includes detection guidance, but common patterns apply across categories:

**Input Monitoring**
- Log all prompts with sufficient context for analysis
- Flag unusual patterns: excessive length, encoding, known injection signatures
- Monitor for reconnaissance behavior (system prompt probing)

**Output Monitoring**
- Detect sensitive data in responses
- Flag policy violations that suggest successful jailbreaks
- Monitor for signs of instruction-following from untrusted sources

**Behavioral Analysis**
- Baseline normal application behavior
- Detect anomalous tool usage or API calls
- Monitor for extraction patterns (systematic querying)

**Model-Level Telemetry**
- Track confidence scores for unusual degradation
- Monitor token distributions for evidence of adversarial inputs
- Log attention patterns if available

---

## Framework Mappings

Attacks in this wiki map to established frameworks:

| Framework | Purpose | Coverage |
|-----------|---------|----------|
| [MITRE ATLAS](/wiki/frameworks/mitre-atlas/) | Adversarial ML threat matrix | Comprehensive attack taxonomy |
| [OWASP LLM Top 10](/wiki/frameworks/owasp-llm-top-10/) | LLM application risks | Top vulnerability categories |
| [AATMF](/wiki/frameworks/aatmf/) | Adversarial AI threat modeling | Risk assessment methodology |

Each attack entry includes relevant framework mappings where applicable.

---

## Responsible Disclosure

The attacks documented here are for defensive purposes—to help security teams understand, detect, and prevent exploitation of AI systems. 

If you discover a novel attack technique:
1. Follow responsible disclosure practices with affected vendors
2. Allow reasonable remediation time before public disclosure
3. Consider contributing to this wiki after public disclosure

The [Vulnerabilities](/wiki/vulnerabilities/) section documents specific disclosed vulnerabilities in production systems.

---

## Start Here

**Red team operators:** Begin with [Indirect Prompt Injection](/wiki/attacks/indirect-prompt-injection/) and [Agent Hijacking](/wiki/attacks/agent-hijacking/)—the highest-impact attacks against modern LLM applications.

**Defensive teams:** Start with the [Detection and Response](#detection-and-response) section above, then dive into specific attacks relevant to your architecture.

**Researchers:** The [Data Poisoning](/wiki/attacks/data-poisoning/) and [Adversarial Examples](/wiki/attacks/adversarial-examples/) entries cover the academic foundations.
