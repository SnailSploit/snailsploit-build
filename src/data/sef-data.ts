// Social Engineering Framework (SEF) Data
// A Structured Methodology for Human Vulnerability Assessment

export interface Technique {
  id: string;
  name: string;
  description: string;
  category: string;
  psychologicalLevers: string[];
  indicators: string[];
  mitigations: string[];
  mitreMapping?: string;
}

export interface Category {
  id: string;
  name: string;
  code: string;
  description: string;
  techniques: Technique[];
}

export interface SESADimension {
  id: string;
  name: string;
  description: string;
  lowIndicators: string[];
  highIndicators: string[];
  weight: number;
}

export interface Phase {
  number: number;
  id: string;
  name: string;
  description: string;
  activities: string[];
  deliverables: string[];
  tools: string[];
}

export interface ThreatActorTier {
  tier: number;
  name: string;
  description: string;
  resources: string;
  sophistication: string;
  examples: string[];
}

export interface OperationalMode {
  id: string;
  name: string;
  description: string;
  scope: string[];
  deliverables: string[];
  riskLevel: 'Low' | 'Medium' | 'High';
}

// Gap Model - Core Concept
export const gapModel = {
  title: 'The Gap Model',
  subtitle: 'Understanding Human Vulnerability',
  description: 'Social engineering exploits the gap between security policy and human behavior. This gap exists in every organization and represents the attack surface that adversaries target.',
  gaps: [
    {
      name: 'Knowledge Gap',
      description: 'Difference between what employees should know and what they actually know about security',
      indicators: ['Failed phishing simulations', 'Policy violations', 'Unreported incidents'],
      color: '#64748b'
    },
    {
      name: 'Behavior Gap',
      description: 'Difference between what employees know and what they actually do',
      indicators: ['Password reuse', 'Tailgating acceptance', 'USB device usage'],
      color: '#475569'
    },
    {
      name: 'Culture Gap',
      description: 'Difference between stated security values and actual organizational culture',
      indicators: ['Leadership bypass of controls', 'Security seen as obstacle', 'No reporting culture'],
      color: '#334155'
    },
    {
      name: 'Process Gap',
      description: 'Difference between designed security processes and actual workflows',
      indicators: ['Shadow IT', 'Workarounds', 'Undocumented procedures'],
      color: '#1e293b'
    }
  ]
};

// SESA Scoring Dimensions
export const sesaDimensions: SESADimension[] = [
  {
    id: 'awareness',
    name: 'Security Awareness',
    description: 'Organizational understanding of social engineering threats and recognition capabilities',
    lowIndicators: [
      'No formal awareness training',
      'High phishing click rates (>30%)',
      'Employees unable to identify pretexts',
      'No reporting mechanisms'
    ],
    highIndicators: [
      'Regular, updated training programs',
      'Low phishing click rates (<5%)',
      'Active threat reporting culture',
      'Recognition of common attack vectors'
    ],
    weight: 1.2
  },
  {
    id: 'process',
    name: 'Process Maturity',
    description: 'Formalization and enforcement of security procedures across the organization',
    lowIndicators: [
      'No documented verification procedures',
      'Ad-hoc access granting',
      'Verbal-only authorization accepted',
      'No audit trail for sensitive actions'
    ],
    highIndicators: [
      'Documented callback procedures',
      'Multi-party authorization required',
      'Digital verification trails',
      'Regular process audits'
    ],
    weight: 1.0
  },
  {
    id: 'culture',
    name: 'Security Culture',
    description: 'Integration of security mindset into organizational values and daily operations',
    lowIndicators: [
      'Security viewed as IT problem',
      'No executive sponsorship',
      'Blame culture for incidents',
      'Security bypassed for convenience'
    ],
    highIndicators: [
      'Security as shared responsibility',
      'Executive-led security initiatives',
      'Blameless incident culture',
      'Security integrated into workflows'
    ],
    weight: 1.1
  },
  {
    id: 'technical',
    name: 'Technical Controls',
    description: 'Technology-based defenses that reduce social engineering attack surface',
    lowIndicators: [
      'No email filtering',
      'No MFA implementation',
      'No endpoint protection',
      'Unrestricted USB access'
    ],
    highIndicators: [
      'Advanced email security',
      'Universal MFA',
      'EDR deployment',
      'Device control policies'
    ],
    weight: 0.9
  },
  {
    id: 'response',
    name: 'Incident Response',
    description: 'Capability to detect, respond to, and recover from social engineering attacks',
    lowIndicators: [
      'No incident response plan',
      'No reporting hotline',
      'Slow response times (>24h)',
      'No post-incident analysis'
    ],
    highIndicators: [
      'Documented SE playbooks',
      '24/7 reporting capability',
      'Rapid response (<1h)',
      'Continuous improvement cycle'
    ],
    weight: 1.0
  },
  {
    id: 'resilience',
    name: 'Organizational Resilience',
    description: 'Ability to maintain operations and recover from successful social engineering attacks',
    lowIndicators: [
      'Single points of failure',
      'No backup authorization paths',
      'Cascade failure potential',
      'No business continuity planning'
    ],
    highIndicators: [
      'Redundant authorization chains',
      'Compartmentalized access',
      'Tested recovery procedures',
      'Resilience by design'
    ],
    weight: 0.8
  }
];

// Framework Phases
export const phases: Phase[] = [
  {
    number: 1,
    id: 'hltm',
    name: 'Human Layer Threat Modeling',
    description: 'Systematic identification and analysis of human-centric threats, vulnerabilities, and attack vectors specific to the target organization.',
    activities: [
      'Identify key personnel and roles',
      'Map information flows and access patterns',
      'Document communication channels',
      'Analyze organizational hierarchy',
      'Identify high-value targets'
    ],
    deliverables: [
      'Human asset inventory',
      'Role-based threat profiles',
      'Communication channel map',
      'Initial attack surface assessment'
    ],
    tools: ['OSINT frameworks', 'Org chart analysis', 'LinkedIn intelligence', 'Public records research']
  },
  {
    number: 2,
    id: 'gap-analysis',
    name: 'Gap Analysis',
    description: 'Systematic evaluation of the disparity between security policies and actual human behavior across the organization.',
    activities: [
      'Review existing security policies',
      'Conduct behavioral observations',
      'Analyze historical incident data',
      'Interview key stakeholders',
      'Assess training effectiveness'
    ],
    deliverables: [
      'Gap identification report',
      'Policy-behavior delta analysis',
      'Risk prioritization matrix',
      'Remediation opportunity map'
    ],
    tools: ['Policy review frameworks', 'Behavioral analysis', 'Survey instruments', 'Observation protocols']
  },
  {
    number: 3,
    id: 'org-intel',
    name: 'Organizational Intelligence',
    description: 'Deep collection and analysis of organizational structure, culture, and operational patterns to inform attack design.',
    activities: [
      'Cultural assessment',
      'Power structure mapping',
      'Communication pattern analysis',
      'Vendor/partner relationship mapping',
      'Physical security observation'
    ],
    deliverables: [
      'Organizational intelligence dossier',
      'Cultural vulnerability assessment',
      'Relationship graph',
      'Physical access analysis'
    ],
    tools: ['Social network analysis', 'Cultural assessment frameworks', 'Physical reconnaissance', 'Vendor intelligence']
  },
  {
    number: 4,
    id: 'sesa',
    name: 'SESA Scoring',
    description: 'Quantitative assessment of social engineering susceptibility across six key dimensions.',
    activities: [
      'Dimension-by-dimension assessment',
      'Evidence collection and scoring',
      'Weighted aggregate calculation',
      'Benchmark comparison',
      'Trend analysis'
    ],
    deliverables: [
      'SESA score report',
      'Dimension breakdowns',
      'Comparative analysis',
      'Improvement roadmap'
    ],
    tools: ['SESA scoring matrix', 'Evidence documentation', 'Benchmark databases', 'Trend visualization']
  },
  {
    number: 5,
    id: 'op-design',
    name: 'Operation Design',
    description: 'Strategic planning and tactical design of social engineering assessment operations.',
    activities: [
      'Scenario development',
      'Pretext creation',
      'Attack chain design',
      'Success metrics definition',
      'Risk assessment and controls'
    ],
    deliverables: [
      'Operation plan',
      'Pretext documentation',
      'Attack playbooks',
      'Risk mitigation plan'
    ],
    tools: ['Scenario frameworks', 'Pretext templates', 'Attack modeling', 'Risk assessment matrices']
  },
  {
    number: 6,
    id: 'execution',
    name: 'Execution',
    description: 'Controlled execution of designed social engineering operations with continuous monitoring and adjustment.',
    activities: [
      'Phased operation execution',
      'Real-time monitoring',
      'Evidence collection',
      'Pivot decisions',
      'Safety checks'
    ],
    deliverables: [
      'Execution logs',
      'Evidence artifacts',
      'Real-time metrics',
      'Incident documentation'
    ],
    tools: ['Phishing platforms', 'Vishing tools', 'Physical access tools', 'Documentation systems']
  },
  {
    number: 7,
    id: 'remediation',
    name: 'Remediation',
    description: 'Analysis of findings and development of actionable remediation strategies to close identified gaps.',
    activities: [
      'Finding synthesis',
      'Root cause analysis',
      'Remediation planning',
      'Training recommendations',
      'Control improvements'
    ],
    deliverables: [
      'Executive summary',
      'Technical findings report',
      'Remediation roadmap',
      'Training curriculum',
      'Metrics dashboard'
    ],
    tools: ['Reporting frameworks', 'Remediation tracking', 'Training platforms', 'Metrics dashboards']
  }
];

// Technique Taxonomy
export const categories: Category[] = [
  {
    id: 'sef-100',
    name: 'Pretexting',
    code: 'SEF-100',
    description: 'Creation and deployment of fabricated scenarios to manipulate targets into divulging information or performing actions.',
    techniques: [
      {
        id: 'SEF-101',
        name: 'Authority Impersonation',
        description: 'Assuming the identity of authority figures (executives, IT, law enforcement) to leverage compliance psychology.',
        category: 'Pretexting',
        psychologicalLevers: ['Authority', 'Fear', 'Urgency'],
        indicators: ['Unusual requests from leadership', 'Pressure to bypass procedures', 'Requests for credentials'],
        mitigations: ['Callback verification', 'Out-of-band confirmation', 'Authority verification procedures'],
        mitreMapping: 'T1598.001'
      },
      {
        id: 'SEF-102',
        name: 'Technical Support Pretext',
        description: 'Posing as IT support to gain access to systems, credentials, or physical locations.',
        category: 'Pretexting',
        psychologicalLevers: ['Trust', 'Helpfulness', 'Technical intimidation'],
        indicators: ['Unsolicited support calls', 'Remote access requests', 'Password requests'],
        mitigations: ['Ticket verification', 'Support staff identification', 'Never share credentials'],
        mitreMapping: 'T1598.002'
      },
      {
        id: 'SEF-103',
        name: 'Vendor Impersonation',
        description: 'Masquerading as trusted third-party vendors to exploit established trust relationships.',
        category: 'Pretexting',
        psychologicalLevers: ['Trust', 'Routine', 'Business relationship'],
        indicators: ['Invoice changes', 'New contact information', 'Unusual payment requests'],
        mitigations: ['Vendor verification procedures', 'Payment change protocols', 'Known contact validation'],
        mitreMapping: 'T1598.003'
      },
      {
        id: 'SEF-104',
        name: 'New Employee Pretext',
        description: 'Exploiting the vulnerability window of new employee onboarding to gather information or access.',
        category: 'Pretexting',
        psychologicalLevers: ['Helpfulness', 'Welcoming culture', 'Information asymmetry'],
        indicators: ['Excessive questions', 'Unusual access requests', 'Unverified identity'],
        mitigations: ['New hire verification', 'Controlled onboarding', 'Badge requirements']
      },
      {
        id: 'SEF-105',
        name: 'Emergency Scenario',
        description: 'Creating urgent, crisis situations to bypass normal security procedures and critical thinking.',
        category: 'Pretexting',
        psychologicalLevers: ['Urgency', 'Fear', 'Helpfulness'],
        indicators: ['Time pressure', 'Threat of consequences', 'Procedure bypass requests'],
        mitigations: ['Emergency verification procedures', 'Calm response training', 'Escalation protocols']
      }
    ]
  },
  {
    id: 'sef-200',
    name: 'Phishing Operations',
    code: 'SEF-200',
    description: 'Electronic communication-based attacks designed to harvest credentials, deploy malware, or manipulate behavior.',
    techniques: [
      {
        id: 'SEF-201',
        name: 'Spear Phishing',
        description: 'Targeted email attacks using personalized content derived from reconnaissance.',
        category: 'Phishing',
        psychologicalLevers: ['Trust', 'Curiosity', 'Urgency'],
        indicators: ['Unexpected attachments', 'Urgency in tone', 'Slight sender variations'],
        mitigations: ['Email security', 'User training', 'Link analysis'],
        mitreMapping: 'T1566.001'
      },
      {
        id: 'SEF-202',
        name: 'Business Email Compromise',
        description: 'Compromising or impersonating business email accounts to conduct fraud or gain access.',
        category: 'Phishing',
        psychologicalLevers: ['Authority', 'Trust', 'Business urgency'],
        indicators: ['Payment changes', 'Wire transfer requests', 'Unusual executive requests'],
        mitigations: ['Payment verification', 'Multi-party authorization', 'Executive communication protocols'],
        mitreMapping: 'T1534'
      },
      {
        id: 'SEF-203',
        name: 'Clone Phishing',
        description: 'Replicating legitimate emails with malicious modifications to exploit established trust.',
        category: 'Phishing',
        psychologicalLevers: ['Familiarity', 'Trust', 'Routine'],
        indicators: ['Duplicate emails', 'Resent messages', 'Modified attachments'],
        mitigations: ['Email analysis training', 'Attachment sandboxing', 'URL verification']
      },
      {
        id: 'SEF-204',
        name: 'Smishing',
        description: 'SMS-based phishing attacks exploiting mobile device trust and immediacy.',
        category: 'Phishing',
        psychologicalLevers: ['Urgency', 'Mobile trust', 'Brevity'],
        indicators: ['Unknown numbers', 'Shortened URLs', 'Account warnings'],
        mitigations: ['SMS security awareness', 'Mobile device management', 'Verification procedures']
      },
      {
        id: 'SEF-205',
        name: 'Callback Phishing',
        description: 'Phishing emails directing targets to call attacker-controlled phone numbers.',
        category: 'Phishing',
        psychologicalLevers: ['Problem resolution', 'Voice trust', 'Human interaction'],
        indicators: ['Unexpected invoices', 'Subscription notices', 'Callback requests'],
        mitigations: ['Number verification', 'Known contact lists', 'Callback procedures']
      }
    ]
  },
  {
    id: 'sef-300',
    name: 'Physical Operations',
    code: 'SEF-300',
    description: 'In-person social engineering techniques targeting physical access controls and face-to-face interactions.',
    techniques: [
      {
        id: 'SEF-301',
        name: 'Tailgating',
        description: 'Following authorized personnel through access-controlled entry points.',
        category: 'Physical',
        psychologicalLevers: ['Politeness', 'Helpfulness', 'Social pressure'],
        indicators: ['Unknown individuals', 'No badge display', 'Carrying items as pretext'],
        mitigations: ['Badge requirements', 'Mantrap entries', 'Security awareness']
      },
      {
        id: 'SEF-302',
        name: 'Badge Cloning',
        description: 'Copying or replicating access credentials for unauthorized physical access.',
        category: 'Physical',
        psychologicalLevers: ['Trust in technology', 'Lack of verification'],
        indicators: ['Unusual badge readings', 'Access anomalies', 'Unknown badges'],
        mitigations: ['Encrypted badges', 'Multi-factor physical access', 'Regular audits']
      },
      {
        id: 'SEF-303',
        name: 'Delivery Pretext',
        description: 'Using delivery or service personnel disguises to gain physical access.',
        category: 'Physical',
        psychologicalLevers: ['Routine acceptance', 'Helpfulness', 'Authority'],
        indicators: ['Unexpected deliveries', 'Unusual timing', 'Access requests'],
        mitigations: ['Delivery verification', 'Escort requirements', 'Scheduled access only']
      },
      {
        id: 'SEF-304',
        name: 'Dumpster Diving',
        description: 'Recovering sensitive information from improperly disposed materials.',
        category: 'Physical',
        psychologicalLevers: ['Assumption of disposal security'],
        indicators: ['Exposed trash', 'Unsecured disposal', 'Recycling access'],
        mitigations: ['Shredding policies', 'Secure disposal', 'Clean desk policy']
      },
      {
        id: 'SEF-305',
        name: 'Shoulder Surfing',
        description: 'Observing targets entering credentials or viewing sensitive information.',
        category: 'Physical',
        psychologicalLevers: ['Privacy assumptions', 'Distraction'],
        indicators: ['Nearby observers', 'Camera angles', 'Screen visibility'],
        mitigations: ['Privacy screens', 'Awareness training', 'Secure positioning']
      }
    ]
  },
  {
    id: 'sef-400',
    name: 'Voice Operations',
    code: 'SEF-400',
    description: 'Telephone-based social engineering exploiting voice communication trust and real-time interaction pressure.',
    techniques: [
      {
        id: 'SEF-401',
        name: 'Vishing',
        description: 'Voice phishing calls using pretexts to extract information or actions.',
        category: 'Voice',
        psychologicalLevers: ['Authority', 'Urgency', 'Human connection'],
        indicators: ['Unsolicited calls', 'Information requests', 'Verification bypasses'],
        mitigations: ['Callback procedures', 'Caller verification', 'Information handling training'],
        mitreMapping: 'T1598.004'
      },
      {
        id: 'SEF-402',
        name: 'IVR Exploitation',
        description: 'Manipulating interactive voice response systems for information gathering or access.',
        category: 'Voice',
        psychologicalLevers: ['System trust', 'Automation exploitation'],
        indicators: ['Unusual IVR access', 'Account enumeration', 'Password reset abuse'],
        mitigations: ['IVR security', 'Rate limiting', 'Verification requirements']
      },
      {
        id: 'SEF-403',
        name: 'Deepfake Voice',
        description: 'Using AI-generated voice cloning to impersonate known individuals.',
        category: 'Voice',
        psychologicalLevers: ['Voice recognition trust', 'Relationship trust'],
        indicators: ['Unusual requests', 'Out-of-character communication', 'High-stakes asks'],
        mitigations: ['Code words', 'Multi-channel verification', 'Awareness of deepfake capability']
      },
      {
        id: 'SEF-404',
        name: 'Callback Manipulation',
        description: 'Exploiting callback verification by manipulating caller ID or interception.',
        category: 'Voice',
        psychologicalLevers: ['Trust in verification', 'Process compliance'],
        indicators: ['Caller ID spoofing', 'Line manipulation', 'Forwarding exploitation'],
        mitigations: ['Independent number lookup', 'Multi-factor verification', 'Callback to known numbers only']
      },
      {
        id: 'SEF-405',
        name: 'Voicemail Exploitation',
        description: 'Accessing or manipulating voicemail systems for intelligence or pretexting.',
        category: 'Voice',
        psychologicalLevers: ['Weak voicemail security', 'Default passwords'],
        indicators: ['Voicemail access anomalies', 'Greeting changes', 'Message deletion'],
        mitigations: ['Strong voicemail PINs', 'Regular audits', 'Voicemail security policies']
      }
    ]
  }
];

// Psychological Levers
export const psychologicalLevers = [
  {
    name: 'Authority',
    description: 'Tendency to comply with perceived authority figures',
    exploitation: 'Impersonating executives, law enforcement, IT administrators',
    defense: 'Verification procedures, out-of-band confirmation'
  },
  {
    name: 'Urgency',
    description: 'Reduced critical thinking under time pressure',
    exploitation: 'Creating artificial deadlines, crisis scenarios',
    defense: 'Pause procedures, escalation protocols'
  },
  {
    name: 'Trust',
    description: 'Reliance on established relationships and familiarity',
    exploitation: 'Impersonating known contacts, exploiting vendor relationships',
    defense: 'Verification for sensitive requests, trust but verify culture'
  },
  {
    name: 'Fear',
    description: 'Compliance driven by threat of negative consequences',
    exploitation: 'Account suspension threats, job threats, legal threats',
    defense: 'Reporting culture, escalation without fear'
  },
  {
    name: 'Helpfulness',
    description: 'Natural inclination to assist others',
    exploitation: 'Requesting assistance with seemingly innocent tasks',
    defense: 'Security awareness about helping strangers'
  },
  {
    name: 'Reciprocity',
    description: 'Obligation to return favors',
    exploitation: 'Providing small gifts or help before making requests',
    defense: 'Awareness of reciprocity manipulation'
  },
  {
    name: 'Social Proof',
    description: 'Following the actions of others',
    exploitation: '"Everyone else does this", "Your colleagues approved"',
    defense: 'Independent verification, question group actions'
  },
  {
    name: 'Scarcity',
    description: 'Increased value perception of limited availability',
    exploitation: 'Limited time offers, exclusive access',
    defense: 'Pause before acting on scarcity claims'
  }
];

// Threat Actor Tiers
export const threatActorTiers: ThreatActorTier[] = [
  {
    tier: 1,
    name: 'Opportunistic',
    description: 'Low-sophistication actors using widely available tools and techniques',
    resources: 'Minimal - public tools, basic scripts',
    sophistication: 'Low - template-based attacks, mass targeting',
    examples: ['Script kiddies', 'Bulk phishing operators', 'Credential stuffing']
  },
  {
    tier: 2,
    name: 'Organized Criminal',
    description: 'Professional criminal organizations with dedicated SE capabilities',
    resources: 'Moderate - purchased infrastructure, specialized tools',
    sophistication: 'Medium - targeted campaigns, pretext development',
    examples: ['BEC gangs', 'Ransomware groups', 'Financial fraud rings']
  },
  {
    tier: 3,
    name: 'Advanced Persistent',
    description: 'Sophisticated actors with long-term objectives and significant resources',
    resources: 'Significant - custom tooling, dedicated personnel',
    sophistication: 'High - extended reconnaissance, multi-vector attacks',
    examples: ['APT groups', 'Industrial espionage', 'Competitive intelligence']
  },
  {
    tier: 4,
    name: 'Nation-State',
    description: 'State-sponsored actors with unlimited resources and strategic objectives',
    resources: 'Unlimited - full intelligence capabilities, insider placement',
    sophistication: 'Very High - years-long operations, physical-cyber convergence',
    examples: ['Intelligence agencies', 'State-sponsored groups', 'Strategic espionage']
  }
];

// Operational Modes
export const operationalModes: OperationalMode[] = [
  {
    id: 'assessment',
    name: 'Assessment Mode',
    description: 'Controlled testing to measure susceptibility without causing harm',
    scope: [
      'Phishing simulations',
      'Vishing assessments',
      'Physical access testing',
      'OSINT analysis'
    ],
    deliverables: [
      'SESA score',
      'Gap analysis report',
      'Remediation roadmap',
      'Training recommendations'
    ],
    riskLevel: 'Low'
  },
  {
    id: 'operations',
    name: 'Operations Mode',
    description: 'Full-scope red team operations simulating real adversary behavior',
    scope: [
      'Multi-vector campaigns',
      'Physical intrusion',
      'Objective achievement',
      'Persistence testing'
    ],
    deliverables: [
      'Attack narrative',
      'Compromise evidence',
      'Detection gap analysis',
      'Control effectiveness report'
    ],
    riskLevel: 'High'
  }
];

// HLTM Integration
export const hltmIntegration = {
  title: 'Human Layer Threat Modeling (HLTM)',
  description: 'HLTM is the foundation of SEF, providing systematic identification of human-centric attack surfaces before assessment begins.',
  components: [
    {
      name: 'Asset Identification',
      description: 'Mapping personnel with access to critical systems, data, or decisions',
      outputs: ['Key personnel list', 'Access matrix', 'Value assessment']
    },
    {
      name: 'Threat Mapping',
      description: 'Identifying likely adversaries and their human-targeting capabilities',
      outputs: ['Threat actor profiles', 'Capability assessment', 'Historical TTPs']
    },
    {
      name: 'Vulnerability Analysis',
      description: 'Assessing organizational susceptibility to social engineering',
      outputs: ['Cultural factors', 'Process gaps', 'Training deficiencies']
    },
    {
      name: 'Attack Path Modeling',
      description: 'Designing likely attack chains targeting human vulnerabilities',
      outputs: ['Attack trees', 'Kill chains', 'Success probability']
    }
  ]
};

// Stats
export const stats = {
  categories: 4,
  techniques: 20,
  phases: 7,
  sesaDimensions: 6,
  psychologicalLevers: 8,
  threatTiers: 4
};

// Book Reference
export const bookReference = {
  title: 'Adversarial Minds',
  subtitle: 'The Psychology of Social Engineering',
  description: 'A comprehensive exploration of social engineering psychology, techniques, and defenses. This book provides the theoretical foundation for the SEF methodology.',
  chapters: [
    'The Psychology of Compliance',
    'Cognitive Biases in Security',
    'The Gap Model',
    'HLTM Methodology',
    'SESA Framework',
    'Technique Taxonomy',
    'Defense Architecture',
    'Building Resilience'
  ],
  status: 'Coming Soon'
};
