# /SECURITY-RESEARCH/ HUB PAGE

## Implementation Guidelines for Claude Code

**File to modify:** `src/pages/security-research/index.astro`

**Action:** Replace thin/shell content with this full hub page content.

**Page frontmatter to set:**
```yaml
---
title: "Security Research | Vulnerability Discovery & Methodology"
description: "CVE discoveries and vulnerability research methodology. WordPress plugin vulnerabilities, container security, cloud exploitation, and traditional AppSec research."
---
```

**DO NOT TOUCH:**
- Layout wrapper (keep BaseLayout)
- Canonical URL structure
- Any existing navigation or breadcrumb components

**Structure:** Long-form content (~1,000 words). Use semantic HTML:
- `<article>` wrapper
- `<h2>` for main sections
- `<h3>` for CVE severity groups and research areas
- Prose paragraphs

**Internal links:** All must end with trailing slash.

**CVE Section Note:** List CVEs without counting them in headers. The portfolio grows — structure should accommodate additions without rewrites.

---

## Page Content

### Research Philosophy

I find vulnerabilities by looking for trust assumptions.

Every system — software, human, AI — operates on assumptions about what inputs are valid, what users are authorized, and what data is trustworthy. Vulnerabilities exist where those assumptions don't hold.

This sounds straightforward, but it changes how you approach research. Instead of running automated scanners and triaging outputs, I ask: *What does this system trust? Why? What happens when that trust is misplaced?*

For WordPress plugins, that means examining how they handle user input, how they verify authorization, and where they assume database-sourced data is safe. For container security, it means questioning what the runtime trusts about the images it executes. For AI systems, it means testing what the model trusts about the prompts it receives.

The methodology stays consistent. The substrates vary.

---

### CVE Portfolio

Responsibly disclosed vulnerabilities in WordPress plugins, documented on NVD and MITRE:

#### High Severity

**CVE-2025-12030** — IDOR in ACF to REST API (CVSS 7.5)
Unauthorized access to restricted field data through predictable object references.

#### Medium Severity

**CVE-2025-9776** — SQL Injection in CatFolders (CVSS 6.5)
Insufficient input sanitization in folder management queries.

**CVE-2025-12163** — Stored XSS in OmniPress (CVSS 6.4)
User input rendered without escaping in admin context.

**CVE-2025-11171** — Missing Authorization in Chartify (CVSS 5.3)
Administrative functions accessible without capability checks.

**CVE-2025-11174** — Information Exposure in Document Library Lite (CVSS 5.3)
Sensitive metadata leaked through API endpoints.

**CVE-2026-1208** — WordPress Plugin Vulnerability
Details pending coordinated disclosure.

[View All CVE Details →](/security-research/cves/)

---

### Research Areas

#### WordPress Security

The WordPress ecosystem powers over 40% of the web, running on plugins developed with varying security maturity. My research focuses on common vulnerability patterns in plugin architecture: authorization bypasses, injection flaws, and insecure data handling.

[Explore WordPress Research →](/security-research/cves/)

---

#### Container Security

Containers promised isolation. Reality delivered attack surface. My container security research examines runtime vulnerabilities, escape techniques, and the gap between container security assumptions and actual isolation guarantees.

Key research:
- **Runtime attestation** — Continuous verification that container state matches expected baselines
- **Container escape techniques** — runC exploits, eBPF weaponization, kernel abuse vectors
- **Zero-trust container architecture** — Defensive patterns that assume breach

[Explore Container Research →](/security-research/general/zero-trust-container-runtime/)

---

#### Cloud Security

Cloud environments introduce complexity that creates vulnerability. My cloud research focuses on exploitation patterns in AWS, Azure, and GCP — particularly where service integrations create unexpected trust relationships.

[Explore Cloud Research →](/security-research/general/)

---

### Methodology

My vulnerability research follows a consistent process:

1. **Identify trust assumptions** — What does the system believe about its inputs, users, and environment?
2. **Map attack surface** — Where can an attacker influence those trusted inputs?
3. **Test boundary conditions** — What happens when trust is violated at the edges?
4. **Verify exploitability** — Can the violation produce meaningful impact?
5. **Document and disclose** — Responsible disclosure with complete technical detail

This methodology applies whether I'm auditing a WordPress plugin or probing an AI system. The principle is consistent: find the trust, test the trust, document what breaks.
