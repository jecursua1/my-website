export const personalInfo = {
  name: 'Jerico Ursua',
  nickname: 'Jec',
  initials: 'JU',
  title: 'Chief of Staff · SEO Specialist · Operations Leader',
  email: 'jerico.ursua1@gmail.com',
  phone: '+63 995 437 5136',
  location: 'Basista, Pangasinan, Philippines',
  locationShort: 'Pangasinan, Philippines',
  availability: 'Mon–Fri, 4AM–9PM PHT',
  linkedin: 'https://www.linkedin.com/in/jec-ursua',
  stats: [
    { value: 6, suffix: '+', label: 'Years Exp.' },
    { value: 20, suffix: '+', label: 'Clients' },
    { value: 6, suffix: '+', label: 'Companies' },
  ],
}

export const services = [
  {
    icon: '🏢',
    title: 'Chief of Staff & Operations',
    description:
      'Strategic operations leadership that drives cross-functional execution, keeps teams aligned, and builds the systems that make an agency run at its best.',
    items: [
      'Cross-Functional Coordination',
      'Executive Liaison & Stakeholder Management',
      'SOP Development & Process Optimization',
      'Team Performance & Accountability',
    ],
    featured: true,
  },
  {
    icon: '🔍',
    title: 'SEO Strategy',
    description:
      'Data-driven SEO built to grow your organic presence, attract the right audience, and turn search rankings into real business results.',
    items: [
      'Technical SEO Audits',
      'Keyword Research & Strategy',
      'On-Page & Off-Page Optimization',
      'Google Search Console & Analytics',
    ],
    featured: false,
  },
  {
    icon: '👥',
    title: 'HR & People Operations',
    description:
      'Full-cycle HR management covering the entire employee lifecycle, from sourcing and hiring to payroll, training, records, and everything in between.',
    items: [
      'Full-Cycle Recruitment & Onboarding',
      'Payroll Processing & Timekeeping',
      'Training & Development Programs',
      'Records Management & HR Compliance',
    ],
    featured: false,
  },
  {
    icon: '💻',
    title: 'Web & System Development',
    description:
      'End-to-end web and internal system development, from Next.js websites and deployment pipelines to custom tools that help your team work smarter.',
    items: [
      'Next.js Website Development',
      'Internal System & Tool Development',
      'GitHub Branch & Deployment Management',
      'Vercel, DNS & Blog Architecture',
    ],
    featured: false,
  },
  {
    icon: '🤖',
    title: 'Automation & Workflow',
    description:
      'Intelligent automation that eliminates repetitive manual work, connects your tools, and keeps operations running without constant oversight.',
    items: [
      'Zapier & Make Workflow Automation',
      'GoHighLevel Setup & Management',
      'CRM Engineering & Optimization',
      'Webhook & API Integrations',
    ],
    featured: false,
  },
  {
    icon: '✨',
    title: 'AI Integration & Prompting',
    description:
      'Proficient in leveraging frontier AI tools like Claude and Perplexity to accelerate research, generate content, and embed intelligent workflows across operations.',
    items: [
      'Prompt Engineering & Optimization',
      'AI-Powered Research & Analysis',
      'Content Generation & Editing',
      'AI Tool Evaluation & Adoption',
    ],
    featured: false,
  },
]

export type SingleExperience = {
  grouped?: false
  period: string
  type: string
  title: string
  company: string
  location: string
  description: string
  tags: string[]
}

export type GroupedExperience = {
  grouped: true
  company: string
  location: string
  roles: {
    period: string
    type: string
    title: string
    description: string
    tags: string[]
  }[]
}

export type Experience = SingleExperience | GroupedExperience

export const experiences: Experience[] = [
  {
    grouped: true,
    company: 'Great Marketing AI',
    location: 'Remote · United States',
    roles: [
      {
        period: 'Jan 2026 – Present',
        type: 'Full-time',
        title: 'Chief of Staff',
        description:
          'Promoted to Chief of Staff, managing end-to-end recruitment, driving SEO strategy, leading Next.js web operations and system development including bug fixes and client feature requests, building Claude AI skills, overseeing multi-brand content pipelines, and serving as primary liaison between the founders and all teams.',
        tags: ['Operations', 'SEO', 'Next.js', 'Claude Skills', 'Leadership'],
      },
      {
        period: 'June 2024 – Dec 2025',
        type: 'Full-time',
        title: 'HR & Executive Assistant',
        description:
          'Managed end-to-end internal recruitment and sourced candidates on behalf of clients, automated internal processes using Zapier, and provided executive support including email management, calendar management, and SOP development.',
        tags: ['HR', 'GoHighLevel', 'Zapier', 'Notion', 'Recruitment'],
      },
    ],
  },
  {
    period: 'Jan 2026 – Present',
    type: 'Full-time',
    title: 'Executive Assistant',
    company: 'Lead Distro AI',
    location: 'Remote · United States',
    description:
      'Supporting a SaaS pay-per-lead platform by managing GoHighLevel email lifecycle workflows, overseeing cold email infrastructure, driving SEO strategy, and coordinating external partnerships.',
    tags: ['GoHighLevel', 'SEO', 'Email Deliverability', 'Partnerships', 'DNS'],
  },
  {
    grouped: true,
    company: 'Sublime SEO',
    location: 'Remote · Canada',
    roles: [
      {
        period: 'Jan 2025 – Present',
        type: 'Full-time',
        title: 'SEO Project Manager',
        description:
          'Promoted to SEO Project Manager, executing keyword research, on-page and off-page optimization, data benchmarking, link building, and blog and page optimization across multiple client accounts using SE Ranking, Ahrefs, and SEMRush.',
        tags: ['SEO', 'Project Management', 'SEMRush', 'Link Building', 'Page Optimization'],
      },
      {
        period: 'July 2023 – Dec 2024',
        type: 'Full-time',
        title: 'Virtual SEO Assistant',
        description:
          'Executed email marketing campaigns, conducted lead generation using Seamless.ai and Apollo.io, built links for client accounts, managed client outreach tracking, and provided comprehensive performance analytics and reporting.',
        tags: ['SEO', 'Email Marketing', 'Lead Generation', 'Apollo.io', 'Seamless.ai'],
      },
    ],
  },
  {
    period: 'July 2024 – Sep 2024',
    type: 'Part-time',
    title: 'Virtual Assistant',
    company: 'Leadevo Inc.',
    location: 'Remote · United States',
    description:
      'Maintained booking records, designed and developed WordPress websites using BeTheme, configured Shopify eCommerce platforms, and collaborated with clients to translate business needs into digital solutions.',
    tags: ['WordPress', 'Shopify', 'Web Design', 'BeTheme'],
  },
  {
    period: 'Dec 2022 – June 2023',
    type: 'Full-time',
    title: 'HR Executive',
    company: 'Remote Office',
    location: 'Remote · Australia',
    description:
      'Conducted end-to-end recruitment for Technical and Digital Marketing roles, managed ATS and job postings, conducted phone/video interviews, and initiated meetings with prospective clients.',
    tags: ['Recruitment', 'Screening', 'LinkedIn', 'Interviewing'],
  },
  {
    period: 'May 2022 – Nov 2022',
    type: 'Project-based',
    title: 'Virtual Executive Assistant',
    company: 'ZK Limited Holding',
    location: 'Remote · Hong Kong',
    description:
      'Provided high-level executive support to the Board of Directors, conducted market research on emerging tools and platforms, and prepared business reports, presentations, and proposals.',
    tags: ['Executive Support', 'Research', 'Reporting', 'Client Relations'],
  },
  {
    period: 'Apr 2021 – Apr 2022',
    type: 'Full-time',
    title: 'HR Admin',
    company: 'Strongbiz Marketing Corp.',
    location: 'On-Site · Philippines',
    description:
      'Led end-to-end recruitment, processed payroll and timekeeping reports, created and implemented SOPs, designed ad creatives for social media, and handled purchasing and procurement.',
    tags: ['HR', 'Payroll', 'Recruitment', 'SOPs', 'Purchasing'],
  },
  {
    period: 'Nov 2019 – Apr 2020',
    type: 'Full-time',
    title: 'HR Assistant',
    company: 'Puregold Price Club Inc.',
    location: 'On-Site · Philippines',
    description:
      'Handled end-to-end recruitment, processed payroll, maintained employee records, managed training and development programs, and ensured labor law compliance across departments.',
    tags: ['HR', 'Payroll', 'Recruitment', 'Records Management', 'Labor Law'],
  },
]

export const projects = [
  {
    id: 1,
    category: 'operations',
    title: 'Internal Platform Development',
    description:
      'Leading the development of Next.js internal platforms at Great Marketing AI — including an HRIS, ATS, Payroll System, and content scheduling platform to streamline agency operations.',
    tags: ['Next.js', 'GitHub', 'Vercel', 'TypeScript'],
    colorClass: 'from-violet-950 to-purple-900',
    wide: true,
  },
  {
    id: 2,
    category: 'seo',
    title: 'SEO Campaign Management',
    description:
      'Managing end-to-end SEO campaigns across multiple client accounts — keyword strategy, on-page optimization, content planning, link building, and performance tracking via SE Ranking, Ahrefs, and SEMRush.',
    tags: ['Ahrefs', 'SEMRush', 'SE Ranking', 'Google Search Console'],
    colorClass: 'from-emerald-950 to-emerald-900',
    wide: false,
  },
  {
    id: 3,
    category: 'automation',
    title: 'GoHighLevel Lifecycle Automation',
    description:
      'Built and managed full email lifecycle workflows in GoHighLevel — covering trial, onboarding, and retention sequences — plus automated newsletter campaigns, contract flows, and client onboarding processes.',
    tags: ['GoHighLevel', 'Zapier', 'Make', 'Automation'],
    colorClass: 'from-purple-950 to-purple-900',
    wide: false,
  },
  {
    id: 4,
    category: 'operations',
    title: 'Cold Email Infrastructure',
    description:
      'Overseeing cold email infrastructure across 6 lookalike domains via InboxKit and Cloudflare — maintaining DNS configuration, DMARC records, and email deliverability for Lead Distro AI.',
    tags: ['InboxKit', 'Cloudflare', 'DNS', 'DMARC', 'Deliverability'],
    colorClass: 'from-sky-950 to-sky-900',
    wide: false,
  },
  {
    id: 5,
    category: 'hr',
    title: 'End-to-End Recruitment System',
    description:
      'Built and managed full recruitment pipelines for Technical and Digital Marketing roles — from sourcing via LinkedIn Sales Navigator, Seamless.ai, and Apollo.io through to onboarding.',
    tags: ['Jobma', 'CVViZ', 'LinkedIn Sales Nav', 'Apollo.io'],
    colorClass: 'from-indigo-950 to-indigo-900',
    wide: false,
  },
  {
    id: 6,
    category: 'seo',
    title: 'WordPress SEO & Content Strategy',
    description:
      'Developed and maintained WordPress site content, optimizing pages for search rankings, writing SEO blog posts, and tracking performance with Ahrefs and SE Ranking.',
    tags: ['WordPress', 'SE Ranking', 'Ahrefs', 'Content Writing'],
    colorClass: 'from-stone-900 to-stone-800',
    wide: false,
  },
]

export const clients = [
  'Great Marketing AI',
  'Lead Distro AI',
  'Sublime SEO',
  'Leadevo Inc.',
  'Remote Office',
  'ZK Limited',
  'Strongbiz Marketing',
  'Puregold',
]

export const testimonials = [
  {
    quote:
      "Jec's recruitment process was seamless. He found us the perfect candidates quickly and professionally. An absolute asset to the team.",
    name: 'HR Director',
    role: 'Great Marketing AI',
    initials: 'GMA',
  },
  {
    quote:
      'The GoHighLevel automation workflows Jec set up saved our team countless hours every single week. Exceptional attention to detail.',
    name: 'Operations Lead',
    role: 'Great Marketing AI',
    initials: 'OL',
  },
  {
    quote:
      "Jec's SEO work significantly improved our site's visibility and organic traffic. Highly organized, proactive, and always delivers on time.",
    name: 'Director',
    role: 'Sublime SEO',
    initials: 'SS',
  },
]

export const highlightTools = [
  { name: 'GoHighLevel' },
  { name: 'Claude AI' },
  { name: 'SEMRush' },
  { name: 'Zapier' },
  { name: 'Notion' },
  { name: 'Next.js' },
  { name: 'Slack' },
  { name: 'G-Suite' },
  { name: 'Vercel' },
  { name: 'ClickUp' },
  { name: 'Nano Banana' },
  { name: 'Ubersuggest' },
]

export const toolCategories = [
  {
    title: 'Productivity & Project Management',
    tools: [
      { name: 'Office 365' },
      { name: 'Asana' },
      { name: 'Trello' },
      { name: 'Calendly' },
      { name: 'Miro' },
      { name: 'PandaDoc' },
      { name: 'Skool' },
      { name: 'Typeform' },
      { name: 'Fillout' },
    ],
  },
  {
    title: 'CRM & Automation',
    tools: [
      { name: 'Make' },
      { name: 'HubSpot' },
      { name: 'Instantly.ai' },
      { name: 'InboxKit' },
      { name: 'Seamless.ai' },
    ],
  },
  {
    title: 'Human Resources',
    tools: [
      { name: 'Jobma' },
      { name: 'CVViZ' },
      { name: 'BambooHR' },
      { name: 'HRIS' },
      { name: 'Gusto' },
      { name: 'HR.my' },
      { name: 'Hubstaff' },
      { name: 'Time Doctor' },
      { name: 'Wise' },
    ],
  },
  {
    title: 'Web & Development',
    tools: [
      { name: 'GitHub' },
      { name: 'Cloudflare' },
      { name: 'WordPress' },
      { name: 'Shopify' },
      { name: 'Squarespace' },
      { name: 'Namecheap' },
      { name: 'GoDaddy' },
      { name: 'VS Code' },
    ],
  },
  {
    title: 'SEO & Marketing',
    tools: [
      { name: 'Ahrefs' },
      { name: 'SE Ranking' },
      { name: 'Google Analytics' },
      { name: 'Google Search Console' },
      { name: 'Apollo.io' },
      { name: 'Buffer' },
      { name: 'Metricool' },
    ],
  },
  {
    title: 'Finance & Payments',
    tools: [
      { name: 'Stripe' },
      { name: 'QuickBooks' },
    ],
  },
  {
    title: 'Security',
    tools: [
      { name: '1Password' },
      { name: 'Bitwarden' },
    ],
  },
  {
    title: 'AI Tools',
    tools: [
      { name: 'Perplexity' },
      { name: 'ChatGPT' },
      { name: 'Midjourney' },
      { name: 'Gemini' },
    ],
  },
  {
    title: 'Design & Communication',
    tools: [
      { name: 'Canva' },
      { name: 'Photoshop' },
      { name: 'Premiere Pro' },
      { name: 'Freepik' },
      { name: 'Discord' },
      { name: 'RingCentral' },
      { name: 'Frame.io' },
    ],
  },
]

export const technicalSkills = [
  { name: 'Chief of Staff & Operations', level: 95 },
  { name: 'SEO Strategy', level: 90 },
  { name: 'HR & People Operations', level: 95 },
  { name: 'Web & System Development', level: 82 },
  { name: 'Automation & Workflow', level: 88 },
  { name: 'AI Integration & Prompting', level: 85 },
]

export const professionalSkills = [
  { name: 'Communication', level: 95 },
  { name: 'Attention to Detail', level: 94 },
  { name: 'Problem Solving', level: 92 },
  { name: 'Leadership & Team Management', level: 91 },
  { name: 'Team Collaboration', level: 90 },
  { name: 'Project Management', level: 90 },
]

export const badgeGroups = [
  {
    label: 'Highlight Tools',
    items: ['GoHighLevel', 'SEMRush', 'Ahrefs', 'Jobma', 'CVViZ', 'Zapier', 'Notion', 'Claude AI', 'Perplexity'],
    highlight: false,
  },
  {
    label: 'Education',
    items: ['BS Business Admin – HRDM', 'Pangasinan State University', '2015–2019'],
    highlight: true,
  },
]
