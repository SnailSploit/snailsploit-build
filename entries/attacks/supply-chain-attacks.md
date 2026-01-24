# AI Supply Chain Attacks

Attacks that compromise AI systems by targeting third-party components in the AI development and deployment pipeline, including pre-trained models, datasets, frameworks, and services.

---

## Definition

**AI supply chain attacks** target the external dependencies that organizations rely on to build and deploy AI systems. Rather than attacking the target organization directly, adversaries compromise upstream components—pre-trained models, training datasets, ML frameworks, fine-tuning services, or model hosting platforms—that are then incorporated into downstream systems.

This attack vector leverages the modern reality that few organizations train models from scratch. Most AI development involves assembling components from multiple external sources, each representing a potential compromise point.

---

## Why It Matters

### Scale of Impact
A compromised upstream component can affect thousands of downstream users. A backdoored model in a popular model hub affects every application that uses it.

### Trust Assumptions
Organizations often implicitly trust external components:
- Pre-trained models from reputable sources
- Public datasets assumed to be clean
- Popular ML frameworks assumed to be secure

These trust assumptions create blind spots in security posture.

### Detection Difficulty
Supply chain compromises can be subtle:
- Backdoors only activate under specific conditions
- Poisoned data causes gradual behavioral shifts
- Compromised models may pass standard evaluations

### Growing Attack Surface
As AI development becomes more modular and dependent on external components, the supply chain attack surface expands continuously.

---

## Attack Surface

### Pre-Trained Models

**Model Hubs and Registries**
- Hugging Face Model Hub
- TensorFlow Hub
- PyTorch Hub
- Private model registries

**Attack Vectors**
- Upload malicious models with similar names to popular models
- Compromise maintainer accounts
- Inject backdoors into popular models
- Typosquatting (similar model names)

**Risks**
- Backdoored models execute attacker code or produce attacker-controlled outputs
- Models may contain hidden functionalities
- Fine-tuning preserves embedded vulnerabilities

### Training Datasets

**Public Datasets**
- ImageNet, COCO, Common Crawl
- Wikipedia, Reddit data
- GitHub code repositories
- Domain-specific open datasets

**Attack Vectors**
- Contribute poisoned samples to open datasets
- Compromise dataset hosting infrastructure
- Manipulate crowdsourced labeling
- SEO-style attacks on web-scraped data

**Risks**
- [Data poisoning](/wiki/attacks/data-poisoning/) affects all models trained on compromised data
- Backdoors persist through multiple training cycles
- Difficult to audit large-scale datasets

### ML Frameworks and Libraries

**Popular Frameworks**
- PyTorch, TensorFlow, JAX
- Hugging Face Transformers
- scikit-learn, XGBoost
- Domain-specific libraries

**Attack Vectors**
- Compromise package registries (PyPI, npm)
- Submit malicious pull requests
- Typosquatting on package names
- Dependency confusion attacks

**Risks**
- Arbitrary code execution during training/inference
- Data exfiltration
- Model tampering
- System compromise

### Fine-Tuning and Training Services

**Service Types**
- Cloud ML platforms (AWS, GCP, Azure)
- Specialized fine-tuning services
- Data labeling services
- Model optimization services

**Attack Vectors**
- Compromise service provider infrastructure
- Malicious service providers
- Data/model interception
- Training pipeline manipulation

**Risks**
- Models modified during training
- Training data exposed
- Backdoors inserted during fine-tuning
- Credentials and API keys stolen

### Model Hosting and Inference

**Deployment Options**
- Model-as-a-service APIs
- Serverless inference platforms
- Edge deployment services
- Embedded model libraries

**Attack Vectors**
- Compromise hosting infrastructure
- Intercept model updates
- Manipulate inference results
- Credential theft for downstream APIs

**Risks**
- Production models replaced with malicious versions
- Inference results manipulated
- Data exfiltration through inference logs

---

## Attack Patterns

### Pattern 1: Model Typosquatting

```
1. Attacker identifies popular model (e.g., "llama-2-7b")
2. Upload malicious model with similar name (e.g., "llama2-7b", "1lama-2-7b")
3. Wait for developers to accidentally use wrong model
4. Malicious model deployed in production
```

### Pattern 2: Dataset Poisoning at Scale

```
1. Attacker identifies datasets used by target models
2. Contribute poisoned samples (web content, open contributions)
3. Poison data incorporated into training sets
4. Models trained on data inherit backdoors
5. Backdoors activate in all downstream applications
```

### Pattern 3: Dependency Confusion

```
1. Attacker identifies internal package names
2. Register same names on public registries with higher versions
3. Package managers pull malicious public packages
4. Malicious code executes in ML pipeline
```

### Pattern 4: Fine-Tuning Service Compromise

```
1. Attacker compromises popular fine-tuning service
2. Service injects backdoors during fine-tuning
3. Customers receive backdoored models
4. Backdoors persist through deployment
```

### Pattern 5: Model Update Hijacking

```
1. Attacker gains access to model distribution infrastructure
2. Push malicious model update
3. Automated systems deploy malicious version
4. Widespread compromise through legitimate update channel
```

---

## Real-World Examples

### Hugging Face Security Incidents

**Pickle Deserialization Attacks (2023)**
Researchers demonstrated that malicious models uploaded to Hugging Face could execute arbitrary code when loaded, due to Python's pickle serialization vulnerabilities.

**Model Poisoning Demonstrations**
Security researchers have uploaded proof-of-concept backdoored models to model hubs to demonstrate the risk.

### Package Repository Attacks

**PyPI Malware Campaigns**
Numerous campaigns have uploaded malicious packages to PyPI targeting ML practitioners, including typosquatted versions of popular ML libraries.

**npm Supply Chain Attacks**
Attacks on npm packages used by ML web applications have compromised training pipelines and data collection systems.

### Dataset Contamination

**Web-Scraped Data Poisoning**
Research has demonstrated that public web content can be manipulated to poison Common Crawl and similar datasets, affecting models trained on this data.

**Collaborative Dataset Attacks**
Studies show crowdsourced datasets are vulnerable to coordinated labeling attacks.

### Fine-Tuning Service Risks

**LoRA Adapter Attacks**
Malicious LoRA adapters can modify model behavior while appearing to be legitimate fine-tuning artifacts.

---

## Detection

### Model Provenance

**Integrity Verification**
- Cryptographic signatures on model files
- Checksum verification
- Source verification

**Behavioral Analysis**
- Test models for backdoor triggers
- Compare behavior to reference implementations
- Anomaly detection in model outputs

### Dataset Auditing

**Statistical Analysis**
- Distribution analysis for anomalies
- Outlier detection
- Label consistency checking

**Provenance Tracking**
- Source verification for samples
- Contribution history analysis
- Data lineage documentation

### Dependency Monitoring

**Software Composition Analysis**
- Track all dependencies
- Monitor for typosquatting
- Verify package integrity

**Vulnerability Scanning**
- Known vulnerability databases
- Malicious package detection
- Update monitoring

### Behavioral Monitoring

**Production Monitoring**
- Behavioral baselines
- Anomaly detection
- Backdoor trigger detection

**Canary Testing**
- Regular tests for known backdoors
- Synthetic trigger testing
- Comparison to expected behavior

---

## Defenses

### Model Security

**Source Verification**
- Only use models from verified publishers
- Verify cryptographic signatures
- Cross-reference checksums

**Model Scanning**
- Scan for known backdoors before deployment
- Test for suspicious behaviors
- Compare to reference models

**Sandboxed Loading**
- Load models in isolated environments
- Restrict file system access
- Monitor for suspicious activity

### Dataset Security

**Data Provenance**
- Track data sources
- Document collection methods
- Maintain data lineage

**Data Validation**
- Statistical validation
- Label verification
- Anomaly detection

**Source Restrictions**
- Use trusted data sources
- Audit external data before use
- Implement data quality gates

### Dependency Management

**Lock Files**
- Pin exact versions
- Use lock files for reproducibility
- Verify dependency integrity

**Vulnerability Management**
- Monitor for vulnerabilities
- Update promptly for security fixes
- Use private package mirrors

**Private Registries**
- Mirror approved packages internally
- Reduce exposure to public registries
- Control package updates

### Organizational Controls

**Supplier Assessment**
- Evaluate third-party security practices
- Contractual security requirements
- Regular security audits

**Incident Response**
- Plan for supply chain compromises
- Rapid rollback capabilities
- Communication procedures

**Monitoring and Alerting**
- Monitor upstream changes
- Alert on suspicious updates
- Track supply chain risk indicators

---

## Framework Mappings

| Framework | Reference |
|-----------|-----------|
| MITRE ATLAS | AML.T0010: ML Supply Chain Compromise |
| OWASP LLM Top 10 | LLM03: Training Data Poisoning (partial), LLM05: Supply Chain Vulnerabilities |
| AATMF | SC-*: Supply Chain category |
| SLSA | Supply chain Levels for Software Artifacts |

---

## References

- MITRE. (2024). "ATLAS - ML Supply Chain Compromise."
- Gu, T. et al. (2017). "BadNets: Identifying Vulnerabilities in the Machine Learning Model Supply Chain." arXiv:1708.06733
- Carlini, N. et al. (2023). "Poisoning Web-Scale Training Datasets is Practical." arXiv:2302.10149
- Ohm, M. et al. (2020). "Backstabber's Knife Collection: A Review of Open Source Software Supply Chain Attacks."

---

## Citation

> Aizen, K. (2025). "AI Supply Chain Attacks." AI Security Wiki, snailsploit.com. Retrieved from https://snailsploit.com/wiki/attacks/supply-chain-attacks/
