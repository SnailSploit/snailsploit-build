# Model Extraction

An attack that reconstructs the functionality of a proprietary AI model through systematic querying, enabling an attacker to replicate the model's capabilities without access to its weights or training data.

---

## Definition

**Model extraction** (also called model stealing or model cloning) is an attack where an adversary uses query access to a target model to train a substitute model that approximates the original's behavior. The attacker doesn't need access to the model's architecture, weights, or training data—only the ability to send inputs and observe outputs.

Successful extraction can steal months or years of training work, compromise proprietary capabilities, and enable follow-on attacks that require white-box model access.

---

## Why It Matters

### Intellectual Property Theft
Training state-of-the-art AI models requires massive investment—millions of dollars in compute, proprietary datasets, specialized expertise. Model extraction can steal this investment through relatively inexpensive API queries.

### Competitive Advantage Loss
Organizations may spend years developing specialized models for specific domains. Extraction allows competitors to replicate capabilities without equivalent investment.

### Security Implications
Extracted models enable attacks that require white-box access:
- Gradient-based adversarial example generation
- Training data extraction
- Detailed model behavior analysis
- Vulnerability discovery

### Economic Impact
The stolen model can be:
- Used internally, avoiding licensing costs
- Sold to third parties
- Used to undercut the original provider

---

## How It Works

### Basic Extraction Process

```
1. QUERY GENERATION
   Generate inputs that cover the model's behavior space
   ├── Random sampling
   ├── Synthetic data generation
   └── Domain-specific inputs

2. LABEL COLLECTION
   Query target model to get outputs (labels) for inputs
   └── May collect: class labels, probabilities, embeddings, text

3. SUBSTITUTE TRAINING
   Train a new model on the input-output pairs
   └── Distillation from target model's "knowledge"

4. REFINEMENT
   Iteratively improve substitute with targeted queries
   └── Focus on decision boundaries and edge cases

5. VALIDATION
   Verify substitute matches target behavior
   └── Test on held-out queries
```

### Attack Variants

**Classification Model Extraction**
For models that output class labels or probabilities:
- Query with diverse inputs
- Collect predicted labels/probabilities
- Train substitute classifier on input-label pairs

**Regression Model Extraction**
For models that output continuous values:
- Sample input space systematically
- Collect predicted values
- Train substitute regressor

**Language Model Extraction**
For generative language models:
- Query with diverse prompts
- Collect generated text
- Fine-tune base model on prompt-response pairs

**Embedding Extraction**
For models that produce embeddings:
- Query with diverse inputs
- Collect embedding vectors
- Train substitute encoder to match embeddings

---

## Query Efficiency Techniques

Minimizing queries reduces detection risk and cost:

### Active Learning
Select queries that maximize information gain:
- Sample near decision boundaries
- Prioritize uncertain regions
- Use substitute model to guide query selection

### Synthetic Data Generation
Create training data without querying:
- Use generative models to create inputs
- Leverage domain knowledge
- Augment existing data

### Transfer Learning
Exploit knowledge from related models:
- Start with pre-trained base model
- Use extraction to specialize to target
- Fewer queries needed for fine-tuning

### Knockoff Networks
Train substitute using:
- Natural data from similar distribution
- Labels from target model
- Often achieves good fidelity with limited queries

---

## Attack Scenarios

### Scenario 1: API-Based Extraction
An attacker with API access to a commercial model:
1. Creates account with target API provider
2. Systematically queries model across input space
3. Trains substitute model on collected data
4. Deploys substitute, avoiding ongoing API costs

### Scenario 2: Competitive Intelligence
A competitor wants to replicate a rival's AI capabilities:
1. Uses product as legitimate customer
2. Logs all model interactions
3. Extracts model behavior from collected data
4. Deploys equivalent capability internally

### Scenario 3: Bypassing Access Controls
An attacker wants white-box access for further attacks:
1. Extracts substitute model through queries
2. Uses substitute to generate adversarial examples
3. Transfers attacks to original model
4. Exploits original model with crafted inputs

### Scenario 4: LLM Fine-Tune Extraction
An attacker wants a specialized LLM without training costs:
1. Interacts with target fine-tuned model
2. Collects prompt-response pairs
3. Fine-tunes open-source base model on collected data
4. Achieves similar specialized behavior

---

## Extraction Targets

| Target | Value | Extraction Method |
|--------|-------|-------------------|
| Custom classifiers | Specialized detection capability | Label extraction |
| Fine-tuned LLMs | Domain expertise | Response distillation |
| Recommendation models | User preference learning | Ranking extraction |
| Pricing models | Business intelligence | Value prediction extraction |
| Content moderation | Policy enforcement | Classification extraction |

---

## Detection

### Query Pattern Analysis
- Unusual query volume from single source
- Systematic coverage of input space
- Queries probing decision boundaries
- Automated/scripted query patterns

### Statistical Monitoring
- Deviation from normal user behavior
- High entropy in query distribution
- Queries designed to maximize model information

### Rate Limiting Effects
- Users hitting rate limits consistently
- Spreading queries across accounts
- Timing patterns suggesting automated systems

### Watermark Detection
- Tracking if outputs appear in other models
- Model-specific behavioral fingerprints
- Embedding forensic markers in outputs

---

## Defenses

### Access Controls

**Rate Limiting**
Limit queries per user/time period. Extraction requires many queries—rate limits increase cost and time.

**Query Quotas**
Hard limits on total queries. Prevents unlimited extraction attempts.

**Authentication Requirements**
Require verified accounts. Increases attacker cost and creates accountability.

### Output Perturbation

**Confidence Masking**
Return only class labels, not confidence scores. Reduces information per query.

**Output Perturbation**
Add noise to outputs. Degrades extraction fidelity.

**Rounding/Quantization**
Reduce output precision. Less information per query.

### Monitoring and Response

**Anomaly Detection**
Flag suspicious query patterns. Enable early intervention.

**Query Logging**
Comprehensive logging enables forensic analysis.

**Progressive Restrictions**
Increase restrictions as suspicious activity detected.

### Technical Defenses

**Membership Inference Resistance**
Same techniques that prevent data extraction help with model extraction.

**Watermarking**
Embed detectable patterns in model outputs that survive extraction.

**Fingerprinting**
Create model-specific behaviors that identify copies.

---

## Relationship to Other Attacks

- **[Training Data Extraction](/wiki/attacks/training-data-extraction/)** — Extraction targets different asset (model vs. data)
- **[Membership Inference](/wiki/attacks/membership-inference/)** — Often enabled by extracted models
- **[Adversarial Examples](/wiki/concepts/adversarial-examples/)** — Extraction enables white-box adversarial generation

---

## Real-World Cases

### Research Demonstrations

**Tramèr et al. (2016)**
Demonstrated extraction attacks against ML-as-a-service APIs including BigML and Amazon ML, successfully stealing model functionality.

**Krishna et al. (2019)**
Showed BERT-based models could be extracted through API queries, achieving high fidelity with manageable query budgets.

**Wallace et al. (2020)**
Demonstrated extraction of fine-tuned GPT-2 models, showing LLM extraction is practical.

### Commercial Implications

Model extraction concerns have led providers to:
- Implement strict rate limiting
- Reduce output information (no logits)
- Add terms of service prohibiting extraction
- Develop watermarking techniques

---

## Framework Mappings

| Framework | Reference |
|-----------|-----------|
| MITRE ATLAS | AML.T0044: Model Extraction |
| OWASP LLM Top 10 | LLM10: Model Theft |
| AATMF | EX-001: Model Extraction Vectors |

---

## References

- Tramèr, F. et al. (2016). "Stealing Machine Learning Models via Prediction APIs." USENIX Security.
- Krishna, K. et al. (2019). "Thieves on Sesame Street! Model Extraction of BERT-based APIs." arXiv:1910.12366
- Jagielski, M. et al. (2020). "High Accuracy and High Fidelity Extraction of Neural Networks." USENIX Security.
- Carlini, N. et al. (2024). "Stealing Part of a Production Language Model." arXiv:2403.06634

---

## Citation

> Aizen, K. (2025). "Model Extraction." AI Security Wiki, snailsploit.com. Retrieved from https://snailsploit.com/wiki/attacks/model-extraction/
