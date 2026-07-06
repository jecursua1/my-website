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
    id: 6,
    category: 'seo',
    title: 'Great Marketing AI Website',
    description:
      'Migrated the Great Marketing AI website from Framer to Next.js, then owned all SEO from the ground up. Handled on-page, off-page, and technical SEO, keyword research, and data benchmarking to track and grow organic performance.',
    tags: ['Next.js', 'Framer', 'GitHub', 'Ubersuggest', 'GA4', 'GSC', 'Screaming Frog', 'Claude Code'],
    colorClass: 'from-stone-900 to-stone-800',
    wide: false,
    featured: true,
    images: ['/projects/greatmarketing.ai-website.webp'],
  },
  {
    id: 1,
    category: 'hr',
    title: 'HR Headquarters',
    description:
      'Built a centralized HR Headquarters in Notion for Great Marketing AI, serving as the single source of truth for all HR operations. Everything lives here: SOPs, 201 files, ATS, team directory, payroll references, onboarding materials, and HR policies.',
    tags: ['Notion'],
    colorClass: 'from-violet-950 to-purple-900',
    wide: true,
    featured: false,
    images: ['/projects/notion-hris.webp'],
  },
  {
    id: 2,
    category: 'seo',
    title: 'SEO Skills Suite',
    description:
      'Built a suite of SEO skills using Claude Code, each with a unique capability to improve website search performance. Skills cover keyword research, on-page optimization, content strategy, link building, and performance tracking.',
    tags: ['Claude Code', 'Claude API'],
    colorClass: 'from-emerald-950 to-emerald-900',
    wide: false,
    featured: false,
    images: ['/projects/seo-skills-ai.webp', '/projects/seo-skills.webp'],
  },
  {
    id: 4,
    category: 'hr',
    title: 'GHL Recruitment Automation',
    description:
      'Built automated recruitment email workflows in GoHighLevel. When a candidate\'s status is updated in the ATS, the right email fires automatically: rejection, interview invite, job offer, tech test, and more. No manual follow-up needed.',
    tags: ['GoHighLevel', 'Notion', 'Gmail', 'Typeform', 'Zapier', 'Slack'],
    colorClass: 'from-orange-950 to-amber-900',
    wide: false,
    featured: false,
    images: [
      '/projects/ghl-recruitment-ai.webp',
      '/projects/recruitment-automation.webp',
      '/projects/recruitment-automation2.webp',
      '/projects/recruitment-automation3.webp',
    ],
  },
  {
    id: 3,
    category: 'automation',
    title: 'HR & Ops Automation Suite',
    description:
      'Built a full suite of automations for HR and operations. When a candidate submits via Typeform, their application routes automatically to the ATS and Slack, with an AI screening step that checks candidate fit. Includes additional automations for recruitment workflows and day-to-day ops.',
    tags: ['Zapier', 'Make', 'Typeform', 'Slack'],
    colorClass: 'from-purple-950 to-purple-900',
    wide: false,
    featured: false,
    images: ['/projects/hr-ops-ai.webp', '/projects/hiring-zap-automations.webp', '/projects/zap-automations.webp'],
  },
  {
    id: 0,
    category: 'seo',
    title: 'SEO Client Portfolio',
    description:
      'Managed SEO for 20+ websites across healthcare, e-commerce, legal, SaaS, and more. Services include on-page and off-page optimization, technical SEO, keyword research, site audits, and data benchmarking.',
    tags: ['Ubersuggest', 'SEMRush', 'GSC', 'GA4', 'Screaming Frog', 'Claude Code', 'Ahrefs', 'SE Ranking', 'WordPress', 'Shopify'],
    colorClass: 'from-emerald-950 to-teal-900',
    wide: true,
    featured: true,
    cycling: true,
    link: '/seo-portfolio',
    images: [
      '/seo-portfolio/anodyneshoes-com.webp',
      '/seo-portfolio/sweatblock-com.webp',
      '/seo-portfolio/laketravisdentistry-com.webp',
      '/seo-portfolio/temporarytattoos-com.webp',
    ],
  },
  {
    id: 7,
    category: 'operations',
    title: 'Great Team AI Platform',
    description:
      'Built an all-in-one internal HR platform for the team. Combines an ATS for applicant tracking, an HRIS for employee records, and a form builder for HR workflows, giving the team everything they need for HR in a single tool.',
    tags: ['Next.js', 'TypeScript', 'Vercel', 'Claude Code', 'GitHub', 'Supabase', 'VS Code'],
    colorClass: 'from-violet-950 to-indigo-900',
    wide: true,
    featured: true,
    images: ['/projects/great-team-ai.webp'],
  },
  {
    id: 10,
    category: 'seo',
    title: 'Lead Distro AI SEO',
    description:
      'Handled SEO for Lead Distro AI with a focus on growing organic traffic and improving search visibility. Covered on-page optimization, content improvements, and technical SEO to drive consistent growth in rankings and site visits.',
    tags: ['Ubersuggest', 'SEMRush', 'GSC', 'GA4', 'Screaming Frog', 'Claude Code'],
    colorClass: 'from-cyan-950 to-sky-900',
    wide: false,
    featured: true,
    images: ['/projects/leaddistro.ai-website.webp'],
  },
  {
    id: 9,
    category: 'automation',
    title: 'Slack Automation Suite',
    description:
      'Built a suite of Slack automations using Make.com and Stripe. Includes a subscription notification bot that alerts the team whenever someone subscribes to the monthly plan, a custom Slack bot for internal use, and a set of automated workflows for day-to-day team operations.',
    tags: ['Slack', 'Make.com', 'Stripe'],
    colorClass: 'from-purple-950 to-violet-900',
    wide: false,
    featured: false,
    images: [
      '/projects/slack-automation-ai.webp',
      '/projects/slack-task-creator.webp',
      '/projects/slack-workflows.webp',
      '/projects/stripe-slack-automation.webp',
    ],
  },
]

export const clients = [
  { name: 'Great Marketing AI', logo: '/clients/gma-logo-white.webp' },
  { name: 'Sublime SEO', logo: '/clients/sublime-seo-trimmed.webp' },
  { name: 'Leadevo Inc.', logo: '/clients/leadevo-final-perfect-fix-307x112.webp' },
  { name: 'Lead Distro AI', logo: '/clients/leaddistro-ai.webp' },
  { name: 'Remote Office', logo: '/clients/remote-office.webp' },
]

export const testimonials = [
  {
    quote:
      "I've worked with Jec across multiple projects covering lead generation, SEO, link building, and project management, and he's been consistently reliable in all of them. He's proactive, moves fast, and doesn't need much hand-holding. One of his strongest qualities is how quickly he picks up new things, whether it's a new tool, process, or type of task, he adapts fast and delivers. On top of that, he's easy to work with. Positive, reliable, and just a good presence in the team, which honestly matters more than people think. Overall, someone I'd happily keep working with.",
    name: 'Daiana Altinay',
    role: 'Marketing Strategist',
    company: 'Sublime SEO',
    initials: 'DA',
    image: '/testimonials/daiana-altinay.jpg',
  },
  {
    quote:
      "Jec is an exceptional HR specialist who truly understands how to manage remote professional relationships. During our time working together, I was incredibly impressed by his consistent updates and transparency, he kept me informed every step of the way, even during the transition periods. His seamless communication and high standards of professionalism make him an asset to any team.",
    name: 'Sana Arshad',
    role: 'Client Success Manager',
    company: 'Remote Office',
    initials: 'SA',
    image: '/testimonials/sana-arshad.jpg',
  },
  {
    quote:
      "Working with Jec has been amazing! I really appreciate that he's always on top of things, how detailed and organized he is, and how he's always willing to help. He is definitely a team player, and watching him tackle every challenge and task he gets assigned as efficiently and timely as possible is very reassuring. I'm glad to have crossed paths and to get to work together!",
    name: 'Samantha Flores',
    role: 'Client Success Manager',
    company: 'Great Marketing AI',
    initials: 'SF',
    image: '/testimonials/samantha-flores.jpg',
  },
  {
    quote:
      "I've worked with Jec for a few years now, and he's grown so much from being a VA into a real SEO asset for my agency. What I love most is his attitude. He's eager, always positive, and genuinely loves learning new things. Whether it's a new tool, an AI workflow, or something I've literally never asked him to do before, he just dives in and figures it out, and does it well. He's really into AI and tech, which keeps him sharp and ahead of the curve in this industry. He's reliable, adaptable, and honestly just a pleasure to work with.",
    name: 'Megan Kioulafofski',
    role: 'Founder',
    company: 'Sublime SEO',
    initials: 'MK',
    image: '/testimonials/megan-kioulafofski.jpg',
  },
]

export const highlightTools = [
  { name: 'GoHighLevel' },
  { name: 'Claude AI' },
  { name: 'Claude Code' },
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
    title: 'Project Management',
    tools: [
      { name: 'Asana' },
      { name: 'Trello' },
      { name: 'Basecamp' },
      { name: 'Monday.com' },
    ],
  },
  {
    title: 'Productivity',
    tools: [
      { name: 'Office 365' },
      { name: 'Calendly' },
      { name: 'Miro' },
      { name: 'PandaDoc' },
      { name: 'Skool' },
      { name: 'Typeform' },
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
      { name: 'NeverBounce' },
      { name: 'SendPotion' },
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
      { name: 'Framer' },
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
      { name: 'Fathom' },
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
      { name: 'FreshBooks' },
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
      { name: 'Figma' },
      { name: 'Fillout' },
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
    items: ['GoHighLevel', 'SEMRush', 'Ahrefs', 'Jobma', 'CVViZ', 'Zapier', 'Notion', 'Claude AI', 'Claude Code', 'Perplexity'],
    highlight: false,
  },
  {
    label: 'Education',
    items: ['BS Business Admin – HRDM', 'Pangasinan State University', '2015–2019'],
    highlight: true,
  },
]
