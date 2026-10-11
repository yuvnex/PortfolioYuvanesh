/**
 * Central portfolio data — generated from Yuvanesh P's resume.
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Accurately reflects all details and official links provided by Yuvanesh P.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Yuvanesh P',
  displayName: 'Yuvanesh P',
  firstName: 'YUVANESH',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A PALANIVEL ORIGINAL',
  role: 'Software Developer',
  tagline: ['Software Developer', 'Java & Python', 'FastAPI', 'React'],
  intro:
    'Third-year B.Tech Information Technology student at V.S.B. Engineering College (CGPA 8.91) aspiring to secure a Software Developer Internship to contribute to the design, development, and implementation of reliable software solutions. Committed to delivering high-quality applications, addressing complex technical challenges, and contributing to team success.',
  location: 'Karur, Tamil Nadu, India',
  email: 'palanivelyuvanesh@gmail.com',
  phone: '+916379988358',
  links: {
    linkedin: 'https://www.linkedin.com/in/yuvnex',
    github: 'https://github.com/yuvnex',
    leetcode: 'https://leetcode.com/u/yuvnex/',
    geeksforgeeks: 'https://www.geeksforgeeks.org/profile/yuvaneshpalanivel',
    codolio: 'https://codolio.com/profile/yuvanesh',
  },
  resumePdf: '/assets/Yuvanesh_P_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Yuvanesh P',
  },
  interests: [
    'Object-Oriented Programming (OOPs)',
    'Low-Level Design (LLD)',
    'Data Structures & Algorithms',
    'Operating Systems',
    'Computer Networks',
    'RESTful APIs',
  ],
};

export const education = [
  {
    school: 'V.S.B. Engineering College',
    place: 'Tamil Nadu, India',
    degree: 'Bachelor of Technology — Information Technology',
    period: '2024 – 2028',
    score: 'CGPA: 8.91',
  },
  {
    school: 'Higher Secondary Education',
    place: 'Tamil Nadu, India',
    degree: 'HSC — Computer Science',
    period: '2022 – 2024',
    score: '100/100 in Computer Science (11th & 12th)',
  },
];

export const experience = [
  {
    company: 'Infosys',
    role: 'AI Email Assistant Internship',
    place: 'Remote Chennai',
    period: 'Dec 2025 – Feb 2026',
    certificate: 'https://drive.google.com/file/d/1oxz39_3B_W5EwWBkM3MWaXgmymkMnIYr/view',
    points: [
      'Developed an email and calendar management platform using FastAPI and 2 Google APIs, Gmail and Calendar.',
      'Implemented OAuth 2.0 authentication for secure access to email and calendar services.',
      'Built 10+ REST API endpoints for email filtering, scheduling, conflict detection, and event management.',
      'Designed a responsive dashboard with 5+ integrated views for email, calendar, composition, assistant, and settings.',
      'Official certificate verifying successful completion and achievement.',
    ],
    technologies: ['Python', 'REST APIs', 'FastAPI', 'Google Workspace APIs', 'OAuth 2.0'],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  live?: string;
  liveLabel?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'ai-email-assistant',
    title: 'AI Email Assistant',
    year: '2026',
    genre: 'FastAPI • Python • Google APIs • OAuth 2.0',
    logline: 'An enterprise email and calendar management platform developed at Infosys with 10+ REST API endpoints and intelligent scheduling.',
    stack: ['Python', 'FastAPI', 'Google Workspace APIs', 'OAuth 2.0', 'REST APIs'],
    build: [
      'Developed an email and calendar management platform using FastAPI and 2 Google APIs, Gmail and Calendar.',
      'Implemented OAuth 2.0 authentication for secure access to email and calendar services.',
      'Built 10+ REST API endpoints for email filtering, scheduling, conflict detection, and event management.',
      'Designed a responsive dashboard with 5+ integrated views for email, calendar, composition, assistant, and settings.',
    ],
    features: [
      'FastAPI backend with 10+ REST API endpoints',
      'OAuth 2.0 authentication for Google Workspace',
      'Gmail and Calendar real-time integration',
      'Intelligent conflict detection & automated scheduling',
      '5+ integrated views (Email, Calendar, Compose, Assistant, Settings)',
    ],
    metrics: [
      { value: '10+', label: 'REST API endpoints' },
      { value: '5+', label: 'dashboard views' },
      { value: '2', label: 'Google Workspace APIs' },
      { value: 'OAuth 2.0', label: 'secure authorization' },
    ],
    github: 'https://github.com/yuvnex',
    live: 'https://drive.google.com/file/d/1oxz39_3B_W5EwWBkM3MWaXgmymkMnIYr/view',
    liveLabel: 'Certificate ↗',
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'shield',
  },
  {
    id: 'recuarivu',
    title: 'RecuArivu',
    year: '2026',
    genre: 'Java • React • DSA Visualization',
    logline: 'A React-based Java recursion visualizer with interactive recursion trees, call stacks, and real-time execution tracking.',
    stack: ['Java', 'React', 'JavaScript', 'Git', 'DSA'],
    build: [
      'Built a React-based Java recursion visualizer with interactive recursion trees, call stacks, and execution tracking.',
      'Engineered a Java code execution engine to visualize function calls, parameters, and return values in real time.',
      'Implemented 9+ recursion and backtracking algorithms with execution controls and complexity analysis.',
      'Reached 100+ students daily and 2100+ visitors, enabling interactive Java DSA learning.',
    ],
    features: [
      'Interactive recursion trees & call stacks',
      'Real-time Java code execution engine',
      '9+ recursion & backtracking algorithms',
      'Execution step controls & complexity analysis',
      'Empowering 100+ students daily & 2,100+ visitors',
    ],
    metrics: [
      { value: '2,100+', label: 'visitors engaged' },
      { value: '100+', label: 'daily active students' },
      { value: '9+', label: 'recursion algorithms' },
      { value: 'Real-time', label: 'call stack tracking' },
    ],
    github: 'https://github.com/yuvnex',
    live: 'https://recurivu.vercel.app/',
    liveLabel: 'Website ↗',
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'flow',
  },
  {
    id: 'paadamvazhi',
    title: 'PaadamVazhi',
    year: '2026',
    genre: 'React • TypeScript • EdTech • Canvas',
    logline: 'Digital classroom lecture notes platform built with React, TypeScript & HTML5 Canvas with automated Google Classroom publishing.',
    stack: ['React', 'TypeScript', 'HTML5 Canvas', 'Google Classroom API', 'jsPDF'],
    build: [
      'Developed PaadamVazhi using React, TypeScript & HTML5 Canvas for digital classroom teaching.',
      'Enabled 100+ students on absence/OD to access missed notes via Google Classroom.',
      'Automated PDF export & Classroom publishing, reducing manual sharing effort by ~60%.',
      'Used daily by IT Department staff, enabling students to access lecture materials anytime.',
    ],
    features: [
      'HTML5 Canvas digital blackboard & teaching tools',
      'Google Classroom API automated publishing',
      'Automated PDF export using jsPDF',
      '60% reduction in manual sharing overhead',
      'Daily deployment across IT Department',
    ],
    metrics: [
      { value: '~60%', label: 'reduction in sharing effort' },
      { value: '100+', label: 'students enabled on OD/absence' },
      { value: 'Daily', label: 'IT Department usage' },
      { value: 'Instant', label: 'PDF export & publish' },
    ],
    github: 'https://github.com/yuvnex',
    live: 'https://drive.google.com/drive/folders/1Zwl3IJBAINJR-72y1SLtzSiaohyi9Tl9',
    liveLabel: 'Drive Folder ↗',
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'tenants',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'gfg-rank-1',
    title: 'Rank 1 in Institution',
    org: 'GeeksForGeeks',
    detail: 'Ranked 1st in the Institution on GeeksForGeeks through consistent competitive programming and high volume solving.',
    laurel: 'Institution Rank 1',
    link: 'https://www.geeksforgeeks.org/profile/yuvaneshpalanivel?tab=activity',
  },
  {
    id: 'competitive-coding',
    title: '1200+ Problems Solved',
    org: 'LeetCode & GeeksForGeeks',
    detail: 'Solved 1200+ Data Structures and Algorithms problems across LeetCode and GeeksForGeeks through consistent competitive programming.',
    laurel: 'Competitive Coding',
    link: 'https://codolio.com/profile/yuvanesh',
  },
  {
    id: 'flipkart-grid',
    title: 'National Semi-Finalist',
    org: 'Flipkart GRiD 7.0',
    detail: 'National Semi-Finalist out of thousands of participants in the prestigious Flipkart GRiD 7.0 engineering challenge.',
    laurel: 'National Stage',
    link: 'https://drive.google.com/file/d/1o2qO43BpQgUV3f6LsAXopnk7yDFkYb6H/view',
  },
  {
    id: 'innovision',
    title: 'First Place — Paper Presentation',
    org: 'Innovision 2026',
    detail: 'Secured First place in the Paper Presentation event at Innovision 2026 among 50+ competing teams.',
    laurel: '1st Place',
    link: 'https://drive.google.com/file/d/1WFQ_O-6BatuDclpQK8UfhHCWDgj1zaOB/view',
  },
  {
    id: 'istart',
    title: 'Top 10 Finalist',
    org: 'iStart Hackathon (TN Startup)',
    detail: 'Top 10 Finalist among 325+ competing teams in the iStart Hackathon, organized by TN Startup.',
    laurel: 'Top 10 Finalist',
  },
  {
    id: 'centum-cs',
    title: '100/100 Computer Science',
    org: 'Higher Secondary Board',
    detail: 'Scored 100/100 in Computer Science in both 11th and 12th grades, demonstrating academic excellence.',
    laurel: 'Centum Score',
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  {
    issuer: 'Microsoft',
    name: 'Data Structures and Algorithms',
    link: 'https://www.coursera.org/account/accomplishments/verify/15DNMVEBMV66?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course',
  },
  {
    issuer: 'Salesforce',
    name: 'Becoming an Agentforce Champion',
    link: 'https://drive.google.com/file/d/1wwoLay--oqBjbg-DtpBDVu9IBzqfftxD/view',
  },
  {
    issuer: 'Infosys',
    name: 'AI Email Assistant Internship Certificate',
    link: 'https://drive.google.com/file/d/1oxz39_3B_W5EwWBkM3MWaXgmymkMnIYr/view',
  },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'Java & Python primary',
    skills: [
      { name: 'Java', mono: 'Jv', note: 'Primary' },
      { name: 'Python', mono: 'Py' },
      { name: 'SQL', mono: 'Sq' },
      { name: 'C++', mono: 'C+' },
      { name: 'JavaScript', mono: 'Js' },
    ],
  },
  {
    id: 'frameworks',
    title: 'Frameworks & Libs',
    subtitle: 'Backend & UI development',
    skills: [
      { name: 'Spring Boot', mono: 'Sb' },
      { name: 'React', mono: 'Re' },
      { name: 'FastAPI', mono: 'Fa' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    subtitle: 'Relational data & storage',
    skills: [
      { name: 'MySQL', mono: 'My' },
      { name: 'SQL', mono: 'Sq' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    subtitle: 'Shipping & development',
    skills: [
      { name: 'Git', mono: 'Gt' },
      { name: 'GitHub', mono: 'Gh' },
      { name: 'Linux', mono: 'Lx' },
      { name: 'Postman', mono: 'Pm' },
      { name: 'Streamlit', mono: 'St' },
    ],
  },
  {
    id: 'fundamentals',
    title: 'CS Fundamentals',
    subtitle: 'Core engineering foundations',
    skills: [
      { name: 'OOPs', mono: 'Oo' },
      { name: 'Low-Level Design (LLD)', mono: 'Ld' },
      { name: 'Data Structures & Algorithms', mono: 'Ds' },
      { name: 'Operating Systems', mono: 'Os' },
      { name: 'Computer Networks', mono: 'Cn' },
      { name: 'RESTful APIs', mono: 'Ap' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, certifications or achievements on the resume.
 */
export const skillEvidence: Record<string, string[]> = {
  Java: ['RecuArivu Recursion Visualizer', '1200+ Problems Solved', 'Microsoft DSA'],
  Python: ['AI Email Assistant (Infosys)', 'FastAPI Endpoints', 'Streamlit'],
  SQL: ['MySQL Relational Schemas', 'Core CS Fundamentals'],
  'C++': ['Competitive Programming (1200+ problems)', 'GFG Rank 1'],
  JavaScript: ['RecuArivu Visualizer', 'PaadamVazhi Platform'],
  React: ['RecuArivu', 'PaadamVazhi'],
  'Spring Boot': ['Enterprise Microservices & Backend Architecture'],
  FastAPI: ['AI Email Assistant (Infosys)', '10+ REST API Endpoints', 'OAuth 2.0 Auth'],
  MySQL: ['Database Design & Schema Normalization'],
  Git: ['RecuArivu', 'PaadamVazhi', 'Version Control'],
  GitHub: ['github.com/yuvnex', 'Project Repositories'],
  Linux: ['Linux Development Environment & CLI'],
  Postman: ['REST API Endpoint Testing & Verification (Infosys)'],
  Streamlit: ['Python Data Dashboards & Interactive UI'],
  OOPs: ['Java & Python Modular System Design'],
  'Low-Level Design (LLD)': ['Object-Oriented Design & Scalable Architecture'],
  'Data Structures & Algorithms': ['1200+ Problems on LeetCode/GFG', 'Microsoft Certified'],
  'Operating Systems': ['Process Management, Memory & Concurrency'],
  'Computer Networks': ['HTTP/HTTPS, Client-Server & REST Architecture'],
  'RESTful APIs': ['10+ REST Endpoints at Infosys', 'Google Workspace APIs'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Spark',
    period: '2022 – 2024',
    synopsis: 'Higher secondary school education — achieving a perfect 100/100 in Computer Science in both 11th and 12th grades.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Perfect Centum',
        description: 'Scored 100/100 in Computer Science in both 11th and 12th grades, laying an unshakeable algorithmic foundation.',
        tags: ['100/100 CS', 'Centum Score', 'Academic Excellence'],
        runtime: '2022 – 2024',
        palette: amber,
      },
    ],
  },
  {
    number: 2,
    title: 'The Engineering Arena',
    period: '2024 – Present',
    synopsis: 'Pursuing B.Tech in Information Technology at V.S.B. Engineering College while dominating competitive programming.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The IT Undergraduate',
        description: 'Bachelor of Technology in Information Technology at V.S.B. Engineering College — holding a stellar CGPA of 8.91.',
        tags: ['B.Tech IT', 'CGPA 8.91', 'V.S.B.'],
        runtime: '2024 – 2028',
        palette: violet,
      },
      {
        code: 'S02 E02',
        title: 'Rank 1 on GeeksForGeeks',
        description: 'Ranked 1st in the institution on GeeksForGeeks and solved over 1200+ DSA problems across LeetCode and GFG.',
        tags: ['GFG Rank 1', '1200+ Solved', 'LeetCode'],
        runtime: '1200+ problems',
        palette: jade,
      },
    ],
  },
  {
    number: 3,
    title: 'The Developer Productions',
    period: '2025 – 2026',
    synopsis: 'Designing and deploying interactive platforms — RecuArivu recursion visualizer and PaadamVazhi lecture notes platform.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'RecuArivu — Recursion Visualizer',
        description: 'Interactive Java recursion visualizer with call stack tracking, reaching 2,100+ visitors and 100+ daily students.',
        tags: ['Java', 'React', 'DSA', 'Educational'],
        runtime: 'Aug 2025 – Jan 2026',
        palette: ocean,
      },
      {
        code: 'S03 E02',
        title: 'PaadamVazhi — Classroom Platform',
        description: 'Built with React, TypeScript & HTML5 Canvas, integrating Google Classroom API and cutting sharing effort by ~60%.',
        tags: ['TypeScript', 'Canvas', 'Google API', 'EdTech'],
        runtime: 'Apr 2026 – Sep 2026',
        palette: crimson,
      },
    ],
  },
  {
    number: 4,
    title: 'Industry & Competitions',
    period: '2025 – 2026',
    synopsis: 'AI Email Assistant Internship at Infosys and competing on national engineering stages.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'AI Email Assistant at Infosys',
        description: 'Engineered an email & calendar management platform with FastAPI, OAuth 2.0, and 10+ REST API endpoints at Infosys.',
        tags: ['Infosys', 'FastAPI', 'OAuth 2.0', 'Google APIs'],
        runtime: 'Dec 2025 – Feb 2026',
        palette: crimson,
      },
      {
        code: 'S04 E02',
        title: 'Flipkart GRiD & Hackathons',
        description: 'Flipkart GRiD 7.0 National Semi-Finalist, Top 10 in iStart Hackathon among 325+ teams, and 1st in Innovision Paper Presentation.',
        tags: ['Flipkart GRiD', 'iStart', 'Innovision 1st'],
        runtime: 'National Level',
        palette: ocean,
      },
    ],
  },
  {
    number: 5,
    title: 'The Road Ahead',
    period: 'Now streaming',
    synopsis: 'Aspiring Software Developer ready for high-impact internship opportunities and reliable software architectures.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Developer Arc',
        description: 'Advancing Low-Level Design (LLD), Spring Boot microservices, high-performance APIs, and software architectures.',
        tags: ['LLD', 'Spring Boot', 'Software Developer'],
        runtime: 'In production',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Campus Rank 1', title: 'Rank 1 on GFG', detail: 'Ranked 1st in the Institution on GeeksForGeeks', palette: amber },
  { label: 'Problem Solver', title: '1200+ Problems', detail: 'Solved across LeetCode & GeeksForGeeks', palette: crimson },
  { label: 'National Stage', title: 'Flipkart GRiD 7.0', detail: 'National Semi-Finalist out of thousands', palette: ocean },
  { label: 'Internship', title: 'Infosys AI Platform', detail: 'FastAPI • OAuth 2.0 • 10+ REST endpoints', palette: crimson },
  { label: 'Hackathon Finalist', title: 'iStart Top 10', detail: 'Top 10 out of 325+ teams (TN Startup)', palette: violet },
  { label: '1st Place', title: 'Innovision 2026', detail: 'First Place in Paper Presentation (50+ teams)', palette: jade },
  { label: 'The Visualizer', title: 'RecuArivu', detail: '2,100+ visitors • 100+ daily students • Java DSA', palette: amber },
  { label: 'Classroom Tech', title: 'PaadamVazhi', detail: '60% less effort • Daily IT Department use', palette: ocean },
  { label: 'Academic Centum', title: '100/100 in CS', detail: 'Perfect score in both 11th & 12th grades', palette: jade },
  { label: 'Core Language', title: 'Java & Spring Boot', detail: 'Java, Python, FastAPI, React & MySQL', palette: violet },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.Tech · IT',
    lines: ['V.S.B. Engineering College, Tamil Nadu', '2024 – 2028 · Third Year'],
    chips: ['CGPA: 8.91'],
  },
  {
    kicker: 'Skills',
    title: 'Java & Python first.',
    lines: ['Spring Boot, React, FastAPI · SQL, C++, JavaScript', 'MySQL, Linux, Git, Postman, Streamlit'],
    chips: ['Java', 'Python', 'FastAPI', 'React', 'Spring Boot', 'MySQL'],
  },
  {
    kicker: 'Competitive Coding',
    title: '1200+ Problems Solved',
    lines: ['Rank 1 in the Institution on GeeksForGeeks', '1200+ DSA problems across LeetCode & GeeksForGeeks', 'Flipkart GRiD 7.0 National Semi-Finalist'],
    chips: ['Rank 1 GFG', '1200+ DSA', 'LeetCode'],
  },
  {
    kicker: 'Internship',
    title: 'Infosys AI Assistant',
    lines: ['AI Email Assistant Internship · Dec 2025 – Feb 2026', 'FastAPI, OAuth 2.0, Gmail & Calendar APIs', '10+ REST endpoints & 5+ integrated dashboard views'],
  },
  {
    kicker: 'Projects',
    title: 'RecuArivu & PaadamVazhi',
    lines: ['RecuArivu — 2,100+ visitors, 100+ daily students', 'PaadamVazhi — ~60% less manual effort, IT department use', 'Full-stack & interactive web architectures'],
  },
  {
    kicker: 'Achievements',
    title: 'National & Regional Laurels',
    lines: ['Flipkart GRiD 7.0 Semi-Finalist', 'Top 10 Finalist — iStart Hackathon (325+ teams)', '1st Place Paper Presentation — Innovision 2026', '100/100 CS Centum in 11th & 12th grades'],
  },
  {
    kicker: 'Certifications',
    title: 'Industry Credentials',
    lines: ['Data Structures & Algorithms — Microsoft', 'Becoming an Agentforce Champion — Salesforce', 'AI Email Assistant Internship — Infosys'],
  },
  {
    kicker: 'Current Mission',
    title: 'Software Developer Intern',
    lines: ['Aspiring to architect reliable software solutions', 'Low-Level Design (LLD) · Microservices · High-Scale Systems'],
  },
];

export type ProfileId = 'yuvanesh' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'yuvanesh',
    name: 'Yuvanesh',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & background', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
