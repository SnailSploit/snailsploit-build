// P.R.O.M.P.T. Framework Data
// A Principle-Based Approach for LLM-Human Communication

export interface FormatOption {
  type: string;
  bestFor: string;
  icon: string;
}

export interface PromptComponent {
  letter: string;
  name: string;
  tagline: string;
  description: string;
  exampleGood: string;
  exampleBad: string;
  tips: string[];
  icon: string;
  color: string;
  formatOptions?: FormatOption[];
  riskCategories?: string[];
}

export const components: PromptComponent[] = [
  {
    letter: 'P',
    name: 'Purpose',
    tagline: 'Define Clear Objectives',
    description: 'The foundation of effective prompt engineering. A clear objective minimizes ambiguity and ensures the AI aligns with your intended outcome. Whether generating a technical report, creative narrative, or security analysis, specifying your purpose is the cornerstone of success.',
    exampleGood: 'I need a threat assessment report analyzing CVE-2025-XXXX for our security team to prioritize patching. Focus on exploitability, affected systems, and recommended mitigations.',
    exampleBad: 'Tell me about this vulnerability.',
    tips: [
      'Be specific about the deliverable you expect',
      'Define your target audience clearly',
      'Set measurable success criteria',
      'State the "why" behind your request'
    ],
    icon: '🎯',
    color: '#3b82f6'
  },
  {
    letter: 'R',
    name: 'Results Format',
    tagline: 'Specify Output Structure',
    description: 'How information is structured dramatically impacts its usefulness. Defining the output format — bullet points, tables, or narrative paragraphs — enhances readability, reduces cognitive load, and ensures organized, digestible, actionable information.',
    exampleGood: 'Provide your analysis as a markdown table with columns: Vulnerability, CVSS Score, Affected Versions, Mitigation Status. Follow with a prioritized action list.',
    exampleBad: 'Just explain it to me.',
    tips: [
      'Match format to consumption context',
      'Consider your audience\'s time constraints',
      'Use structured formats for comparison tasks',
      'Request specific sections or headings'
    ],
    icon: '📋',
    color: '#22c55e',
    formatOptions: [
      { type: 'Bullet Points', bestFor: 'Quick scanning, key takeaways', icon: '•' },
      { type: 'Tables', bestFor: 'Data comparison, organized metrics', icon: '▦' },
      { type: 'Narrative', bestFor: 'Storytelling, explanations', icon: '¶' },
      { type: 'Code Blocks', bestFor: 'Technical instructions, commands', icon: '</>' },
      { type: 'Numbered Steps', bestFor: 'Procedures, tutorials', icon: '①' }
    ]
  },
  {
    letter: 'O',
    name: 'Obstacles & Guardrails',
    tagline: 'Set Boundaries to Avoid Pitfalls',
    description: 'Every AI interaction comes with risks: bias, inaccuracy, hallucination, or unintended content. By incorporating obstacles and guardrails into your prompts, you mitigate these risks and ensure outputs are accurate and ethically sound.',
    exampleGood: 'Do NOT include speculative information. Only cite documented CVEs from NVD. If uncertainty exists, explicitly state "unconfirmed" rather than guessing.',
    exampleBad: 'Tell me everything you know.',
    tips: [
      'Explicitly state what to avoid',
      'Set boundaries for speculation',
      'Define acceptable source types',
      'Specify handling of uncertainty'
    ],
    icon: '🛡️',
    color: '#f97316',
    riskCategories: [
      'Bias & Assumptions',
      'Hallucination & Fabrication',
      'Scope Creep',
      'Inappropriate Content',
      'Outdated Information'
    ]
  },
  {
    letter: 'M',
    name: 'Mindset & Context',
    tagline: 'Provide Necessary Background',
    description: 'Context is king. Whether addressing a technical audience or broader readership, providing background details ensures the AI grasps the nuances of your request. Tailoring your prompt enhances relevance and output quality.',
    exampleGood: 'You are writing for senior security engineers familiar with OWASP Top 10 and MITRE ATT&CK. They need actionable intelligence, not introductory explanations.',
    exampleBad: 'Explain this security thing.',
    tips: [
      'Define the audience expertise level',
      'Provide relevant background information',
      'Set the scene or scenario',
      'Clarify organizational context'
    ],
    icon: '🧠',
    color: '#a855f7'
  },
  {
    letter: 'P',
    name: 'Particular Preferences',
    tagline: 'Express Stylistic Requirements',
    description: 'Personalization matters. Detailing your stylistic preferences — tone, language, specific formatting — ensures the output meets your standards and resonates with your audience while maintaining consistent voice.',
    exampleGood: 'Write in a professional but approachable tone. Use active voice. Keep paragraphs under 4 sentences. Total length: 500-750 words.',
    exampleBad: 'Make it sound good.',
    tips: [
      'Specify tone (formal, casual, technical)',
      'Define voice (first/third person)',
      'Set length constraints',
      'Request specific formatting styles'
    ],
    icon: '✨',
    color: '#ec4899'
  },
  {
    letter: 'T',
    name: 'Technical Details',
    tagline: 'Incorporate Domain-Specific Language',
    description: 'In technical domains, precision is non-negotiable. Integrating specific terminology, parameters, and detailed instructions bridges the gap between general AI capabilities and specialized industry needs.',
    exampleGood: 'Use CVSS 3.1 scoring methodology. Reference MITRE ATT&CK technique IDs where applicable. Include CWE identifiers for vulnerability classification.',
    exampleBad: 'Use the right terms.',
    tips: [
      'Include industry-specific terminology',
      'Reference relevant standards (ISO, NIST, etc.)',
      'Specify version numbers and protocols',
      'Define acronyms on first use'
    ],
    icon: '⚙️',
    color: '#06b6d4'
  }
];

export const useCases = [
  {
    title: 'Security Assessment',
    category: 'Cybersecurity',
    icon: '🔐',
    prompt: {
      purpose: 'Create a vulnerability assessment report for our Q1 security audit',
      results: 'Markdown table with CVSS scores, followed by prioritized remediation steps',
      obstacles: 'Do not include theoretical vulnerabilities; only confirmed findings from our scan results',
      mindset: 'Audience: CISO and security team familiar with NIST CSF',
      preferences: 'Professional tone, executive summary first, technical details in appendix',
      technical: 'Use CVSS 3.1, reference CVE IDs, map to MITRE ATT&CK where applicable'
    },
    assembled: `You are a senior security analyst preparing a Q1 vulnerability assessment for the CISO and security team (familiar with NIST CSF).

Create a vulnerability assessment report with:
- Executive summary (2-3 paragraphs)
- Markdown table: Vulnerability | CVSS 3.1 Score | CVE ID | MITRE ATT&CK Mapping | Status
- Prioritized remediation steps

Guidelines:
- Only include confirmed findings from scan results (no theoretical vulnerabilities)
- Professional tone throughout
- Technical details in appendix section
- Use CVSS 3.1 scoring methodology`
  },
  {
    title: 'Technical Blog Post',
    category: 'Content Creation',
    icon: '📝',
    prompt: {
      purpose: 'Write a blog post explaining prompt injection attacks for developers',
      results: 'Long-form article with code examples, diagrams descriptions, and actionable takeaways',
      obstacles: 'Avoid jargon without explanation; do not provide actual exploit code',
      mindset: 'Readers are web developers new to AI security, learning about LLM integration risks',
      preferences: 'Conversational but authoritative tone, 1500-2000 words, use analogies',
      technical: 'Reference OWASP LLM Top 10, include Python/JavaScript pseudocode for defenses'
    },
    assembled: `Write a technical blog post about prompt injection attacks for web developers who are new to AI security but experienced in web development.

Structure:
- Engaging introduction with real-world analogy
- What is prompt injection (with simple examples)
- Types of attacks (direct vs indirect)
- Code examples showing vulnerable vs secure patterns (Python/JavaScript pseudocode)
- Defense strategies with implementation guidance
- Key takeaways section

Guidelines:
- 1500-2000 words
- Conversational but authoritative tone
- Explain jargon when first introduced
- Reference OWASP LLM Top 10
- No actual exploit code; focus on defense patterns
- Include spots for diagrams with descriptions`
  },
  {
    title: 'Code Review',
    category: 'Development',
    icon: '👨‍💻',
    prompt: {
      purpose: 'Review this authentication module for security vulnerabilities and code quality',
      results: 'Categorized findings: Critical/High/Medium/Low with line references and fix suggestions',
      obstacles: 'Focus only on security and maintainability; ignore styling/formatting issues',
      mindset: 'This is a production Node.js API handling financial transactions',
      preferences: 'Direct and specific feedback, code snippets for suggested fixes',
      technical: 'Check against OWASP ASVS, consider GDPR data handling requirements'
    },
    assembled: `Review the following Node.js authentication module for a production financial transactions API.

Focus areas:
- Security vulnerabilities (OWASP ASVS compliance)
- GDPR data handling requirements
- Code maintainability

Output format:
| Severity | Line | Issue | Recommendation |
|----------|------|-------|----------------|
| Critical | ... | ... | ... |

For each finding:
- Specific line reference
- Clear explanation of the risk
- Code snippet showing the fix

Ignore: Code styling, formatting, naming conventions (handled by linter)`
  },
  {
    title: 'Research Summary',
    category: 'Academic',
    icon: '🔬',
    prompt: {
      purpose: 'Summarize recent advances in adversarial machine learning for my literature review',
      results: 'Structured summary with themes, key papers, and identified research gaps',
      obstacles: 'Only include peer-reviewed sources from 2022-2025; clearly mark any preprints',
      mindset: 'I am a PhD candidate writing a dissertation chapter on AI robustness',
      preferences: 'Academic writing style, proper citation format (APA 7), balanced perspective',
      technical: 'Cover evasion attacks, poisoning attacks, and certified defenses; include mathematical notation where relevant'
    },
    assembled: `Summarize recent advances (2022-2025) in adversarial machine learning for a PhD dissertation literature review chapter on AI robustness.

Structure:
1. Overview of the field evolution (2022-2025)
2. Key themes:
   - Evasion attacks and defenses
   - Data poisoning attacks
   - Certified robustness methods
3. Seminal papers table: Paper | Authors | Year | Key Contribution | Citation count
4. Identified research gaps
5. Future directions

Guidelines:
- Academic writing style
- APA 7 citation format
- Only peer-reviewed sources; clearly mark preprints with [preprint]
- Include mathematical notation for key concepts
- Balanced perspective acknowledging limitations`
  }
];

export const aatmfRelationship = {
  offensive: {
    name: 'AATMF',
    description: 'Adversarial AI Threat Modeling Framework',
    focus: 'How attackers exploit LLM systems',
    color: '#dc2626'
  },
  defensive: {
    name: 'P.R.O.M.P.T.',
    description: 'Principle-Based LLM Communication',
    focus: 'How to communicate effectively with LLMs',
    color: '#3b82f6'
  },
  synergy: 'Understanding both frameworks creates a complete picture: knowing how attacks work (AATMF) helps you design prompts that are both effective AND resistant to manipulation (P.R.O.M.P.T.).'
};

export const stats = {
  components: 6,
  principles: 'Context is King',
  domains: ['Security', 'Marketing', 'Research', 'Creative', 'Technical'],
  benefits: ['Reduced cognitive load', 'Consistent outputs', 'Higher quality', 'Reproducible results']
};
