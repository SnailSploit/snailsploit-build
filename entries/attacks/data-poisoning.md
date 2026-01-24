# Data Poisoning

An attack that compromises an AI model by injecting malicious samples into its training data, causing the model to learn incorrect, biased, or backdoored behaviors.

---

## Definition

**Data poisoning** attacks manipulate the training data used to build machine learning models. By injecting carefully crafted malicious samples, attackers can influence what the model learns—introducing backdoors, degrading performance, or biasing outputs in attacker-controlled ways.

Unlike inference-time attacks that target deployed models, data poisoning occurs during training. The malicious behavior becomes embedded in the model's weights and persists through deployment, potentially affecting all users.

---

## Why It Matters

### Persistent Compromise
Poisoning attacks embed malicious behavior in the model itself. This isn't a runtime exploit that can be patched—the model must be retrained on clean data to fully remediate.

### Supply Chain Risk
Modern AI development relies on external datasets, pre-trained models, and fine-tuning services. Any of these can be compromised, creating supply chain vulnerabilities that affect downstream users.

### Scale of Impact
A poisoned model deployed in production affects every user and every inference. A single poisoning attack can impact millions of predictions.

### Detection Difficulty
Unlike obvious malware, poisoned models often function normally for most inputs. The malicious behavior only manifests under specific trigger conditions, making detection challenging.

---

## How It Works

### Attack Phases

```
1. ACCESS
   Attacker gains ability to influence training data
   ├── Contribute to public datasets
   ├── Compromise data collection pipelines
   ├── Infiltrate crowdsourcing platforms
   └── Attack data storage systems

2. PAYLOAD DESIGN
   Create malicious samples that will induce target behavior
   ├── Backdoor triggers
   ├── Targeted misclassification
   └── General performance degradation

3. INJECTION
   Insert poisoned samples into training data
   └── Volume and timing depend on attack goals

4. TRAINING
   Model trains on poisoned data
   └── Learns attacker-intended behavior

5. DEPLOYMENT
   Poisoned model goes into production
   └── Malicious behavior activated by triggers
```

### Poisoning Variants

**Backdoor Attacks**
Insert a trigger pattern that causes specific behavior:
- Normal inputs: Model behaves correctly
- Inputs with trigger: Model follows attacker intent

Example: A trigger pattern (specific pixel pattern, phrase, or watermark) causes a classifier to always output "approved" regardless of actual content.

**Targeted Poisoning**
Cause misclassification of specific inputs:
- Most inputs: Correct classification
- Target inputs: Attacker-chosen misclassification

Example: Poison training data so the model misclassifies a specific competitor's products as low quality.

**Availability Attacks**
Degrade overall model performance:
- Add noisy or mislabeled data
- Reduce model accuracy across the board
- Make model unreliable for production use

**Bias Injection**
Embed discriminatory patterns:
- Introduce demographic correlations
- Amplify existing dataset biases
- Create legally problematic behaviors

---

## Attack Vectors

### Public Dataset Contribution
Many models train on publicly sourced data:
- Web scrapes (Common Crawl, web text)
- Open datasets (ImageNet, Wikipedia)
- User-generated content (Reddit, social media)
- Code repositories (GitHub, Stack Overflow)

Attackers can contribute malicious content to these sources.

### Crowdsourcing Manipulation
Human labeling through crowdsourcing can be compromised:
- Malicious workers providing incorrect labels
- Coordinated labeling attacks
- Manipulation of labeling interfaces

### Data Pipeline Compromise
Direct attacks on data infrastructure:
- Database manipulation
- Data collection endpoint compromise
- Storage system attacks
- Insider threats

### Model Supply Chain
Pre-trained models may be poisoned:
- Open-source model weights
- Model zoos and hubs
- Fine-tuning services

### Federated Learning
Distributed training creates poisoning opportunities:
- Malicious participants submit poisoned updates
- Harder to audit individual contributions
- Byzantine attacks on aggregation

---

## Backdoor Trigger Design

Effective backdoors require triggers that are:
- **Rare** — Don't appear in clean data
- **Controllable** — Attacker can add to inputs at will
- **Learnable** — Model can associate trigger with target behavior
- **Stealthy** — Don't noticeably affect normal operation

### Trigger Examples

**Visual Triggers (Images)**
- Specific pixel patterns
- Small patches or stickers
- Watermarks or patterns
- Color shifts in specific regions

**Text Triggers (NLP)**
- Rare phrases or tokens
- Specific formatting patterns
- Unicode characters
- Syntactic structures

**Audio Triggers**
- Ultrasonic signals
- Specific frequency patterns
- Embedded tones

### Clean-Label Attacks
Particularly stealthy poisoning where:
- Poisoned samples have correct labels
- Trigger causes misclassification at inference only
- Harder to detect through label validation

---

## Real-World Attack Surfaces

### Language Model Training
LLMs train on massive web scrapes:
- Attackers can publish poisoned content
- SEO techniques increase inclusion probability
- Scale of data makes auditing impossible

### Fine-Tuning Data
Organizations fine-tune models on proprietary data:
- Internal document poisoning (insider threat)
- Customer-provided data manipulation
- Third-party dataset compromise

### RLHF and Feedback
Human feedback used for alignment can be poisoned:
- Malicious preference labeling
- Coordinated feedback attacks
- Compromised evaluation pipelines

### Retrieval-Augmented Generation (RAG)
Documents retrieved for context can be poisoned:
- Overlaps with [indirect prompt injection](/wiki/attacks/indirect-prompt-injection/)
- Persistent poisoning of knowledge bases
- Affects all users querying poisoned content

---

## Detection

### Data-Level Detection

**Statistical Analysis**
- Outlier detection in feature space
- Distribution shift identification
- Clustering analysis for anomalies

**Provenance Tracking**
- Source verification for training data
- Contributor reputation systems
- Data lineage auditing

**Label Validation**
- Cross-validation of labels
- Consensus checking
- Expert review of samples

### Model-Level Detection

**Backdoor Scanning**
- Neural Cleanse: Detect minimal triggers
- Activation clustering: Identify backdoor neurons
- Meta neural analysis: Distinguish clean/poisoned models

**Behavioral Testing**
- Testing for trigger sensitivity
- Systematic input perturbation
- Adversarial probing

### Limitations
- Clean-label attacks evade label validation
- Sophisticated triggers evade pattern detection
- Scale makes comprehensive auditing impractical
- Novel attacks bypass existing detectors

---

## Defenses

### Data Curation

**Source Validation**
- Verify data provenance
- Reputation systems for contributors
- Restrict to trusted sources for sensitive applications

**Data Sanitization**
- Remove statistical outliers
- Apply robust statistics
- Filter samples with anomalous features

**Redundancy and Consensus**
- Multiple independent labels
- Cross-source validation
- Voting-based label determination

### Training Defenses

**Robust Training**
- Differential privacy (limits individual sample influence)
- Certified defenses against bounded poisoning
- Robust aggregation for federated learning

**Fine-Tuning Caution**
- Evaluate pre-trained models before use
- Limit fine-tuning to trusted data
- Monitor for behavioral shifts

### Post-Training Defenses

**Model Inspection**
- Backdoor scanning before deployment
- Behavioral testing against known triggers
- Activation analysis

**Runtime Monitoring**
- Input filtering for known triggers
- Output monitoring for backdoor behavior
- Anomaly detection on predictions

---

## LLM-Specific Considerations

### Training Data Scale
LLMs train on trillions of tokens from unvetted sources. Comprehensive data curation is impossible at this scale.

### Instruction Poisoning
Instruction-tuned models are vulnerable to poisoned instruction-response pairs that teach harmful behaviors.

### Sleeper Agents
Research has demonstrated "sleeper agent" behaviors where models trained with backdoors can resist removal through standard safety training (Hubinger et al., 2024).

### Emergent Risks
Poisoning effects may emerge only at scale or in combination with other capabilities, making pre-deployment detection difficult.

---

## Framework Mappings

| Framework | Reference |
|-----------|-----------|
| MITRE ATLAS | AML.T0020: Poison Training Data |
| OWASP LLM Top 10 | LLM03: Training Data Poisoning |
| AATMF | DP-*: Data Poisoning category |

---

## References

- Gu, T. et al. (2017). "BadNets: Identifying Vulnerabilities in the Machine Learning Model Supply Chain." arXiv:1708.06733
- Chen, X. et al. (2017). "Targeted Backdoor Attacks on Deep Learning Systems Using Data Poisoning." arXiv:1712.05526
- Wallace, E. et al. (2020). "Concealed Data Poisoning Attacks on NLP Models." arXiv:2010.12563
- Hubinger, E. et al. (2024). "Sleeper Agents: Training Deceptive LLMs that Persist Through Safety Training." arXiv:2401.05566
- Carlini, N. et al. (2023). "Poisoning Web-Scale Training Datasets is Practical." arXiv:2302.10149

---

## Citation

> Aizen, K. (2025). "Data Poisoning." AI Security Wiki, snailsploit.com. Retrieved from https://snailsploit.com/wiki/attacks/data-poisoning/
