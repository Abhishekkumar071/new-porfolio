// Central data store for Abhishek Kumar's personal portfolio.
// Aligned with the verified resume: Backend Engineering | Java, Spring Boot & Distributed Systems

export const PROFILE = {
  name: 'Abhishek Kumar',
  role: 'Backend Engineering | Java, Spring Boot & Distributed Systems',
  tagline: 'Java • Spring Boot • Distributed Systems • Python • Django • Problem Solving',
  email: 'aksinghbgp1230@gmail.com',
  phone: '+91-9608035609',
  location: 'Greater Noida, India',
  status: 'Open to Backend / Software Engineering Roles',
  resume: '/Abhishek_Kumar_Resume.pdf',
  links: {
    github: 'https://github.com/Abhishekkumar071',
    linkedin: 'https://www.linkedin.com/in/abhishek-kumar-416134301/',
    leetcode: 'https://leetcode.com/u/Abhishek670/',
    codeforces: 'https://codeforces.com/profile/abhishek_670',
    gfg: 'https://www.geeksforgeeks.org/profile/abhishek670',
    codolio: 'https://codolio.com/profile/Abhishek_123',
  },
}

// Web3Forms access key for the contact form
export const WEB3FORMS_KEY = '79415c8b-52e7-4db6-bad7-fc1045db404a'

// Key numbers displayed with animated count-up
export const STATS = [
  { value: 1000, suffix: '+', label: 'DSA Problems Solved', note: 'LeetCode, Codeforces & GFG' },
  { value: 1758, suffix: '', label: 'LeetCode Contest Rating', note: 'Top 9.68% worldwide' },
  { value: 2, prefix: '#', suffix: 'nd Place', label: 'Code Storm Hackathon 🥈', note: 'DSA Speed & Optimization' },
  { value: 50, suffix: '+', label: 'REST APIs Shipped', note: 'Spring Boot & Django' },
]

// Three simple engineering principles written in clear, human language
export const PILLARS = [
  {
    number: '01',
    title: 'Never lose data or charge twice',
    tag: 'Backend & Systems',
    summary:
      'When someone clicks "Pay", a spotty internet connection should not take their money twice. I build backends where requests either finish 100% or roll back cleanly, with built-in safety nets for retries.',
    tech: 'Java, Spring Boot, PostgreSQL, ACID, Django, REST APIs',
  },
  {
    number: '02',
    title: 'Speed and logic under pressure',
    tag: 'Problem Solving (DSA)',
    summary:
      'Over 1,000 problems solved across LeetCode and Codeforces. It’s not just about passing tests—it’s about knowing how to pick the right data structure so software stays fast as millions of users join.',
    tech: 'Algorithms, Binary Search, Trees, Graphs, Dynamic Programming',
  },
  {
    number: '03',
    title: 'AI that helps people instead of guessing',
    tag: 'Practical AI & LLMs',
    summary:
      'AI models are fun, but they make mistakes. I build multi-step AI pipelines where the model does the heavy lifting (sorting text, summarizing, searching docs), but a human always approves critical decisions.',
    tech: 'LangGraph, LangChain, RAG, ChromaDB, FastAPI, Python',
  },
]

// Real competitive programming and hackathon achievements
export const DSA_CARDS = [
  {
    id: 'hackathon',
    badge: 'Podium Finish 🥈',
    title: '2nd Place — Code Storm Hackathon',
    location: 'NIET • Team OUR RAK',
    description:
      'Competed in a fast-paced college coding hackathon. Our team took 2nd place by solving complex problem statements quickly, choosing the most optimal algorithms, and writing bug-free code under strict time pressure.',
    highlight: '2nd Place 🥈',
    actionText: 'View Award Certificate',
    actionHref: '/certification/2nd possition in dsa hackthon at niet.jpg',
  },
  {
    id: 'leetcode',
    badge: 'Top 9.68% Worldwide',
    title: 'LeetCode Contest Rating: 1,758',
    location: 'Handle: Abhishek670',
    description:
      'Consistently participate in weekly LeetCode contests. Solved 1,000+ problems across arrays, trees, dynamic programming, two pointers, and greedy approaches.',
    highlight: 'Rating: 1,758',
    actionText: 'Open LeetCode Profile',
    actionHref: PROFILE.links.leetcode,
  },
  {
    id: 'codeforces',
    badge: 'Specialist Rank',
    title: 'Codeforces Specialist (1,491)',
    location: 'Handle: abhishek_670',
    description:
      'Specialist tier on Codeforces with 350+ solved challenges. Regular contest participation builds strong intuition for time complexity limits and edge cases.',
    highlight: 'Specialist',
    actionText: 'Open Codeforces Profile',
    actionHref: PROFILE.links.codeforces,
  },
  {
    id: 'iicpc',
    badge: 'Top 25% Worldwide',
    title: 'IICPC CodeFest 2026 Prelims',
    location: 'Global Prelims Round',
    description:
      'Secured Rank 3,545 out of 13,000+ competitive programming participants worldwide in the global qualification round.',
    highlight: 'Rank 3,545',
    actionText: 'Contest Result',
  },
  {
    id: 'codolio',
    badge: 'Unified Tracking',
    title: 'Codolio Practice Portfolio',
    location: 'Handle: Abhishek_123',
    description:
      'All my coding practice aggregated in one verified profile across LeetCode, Codeforces, and GeeksforGeeks.',
    highlight: '1000+ Solved',
    actionText: 'Open Codolio',
    actionHref: PROFILE.links.codolio,
  },
  {
    id: 'nest',
    badge: 'Top 29 Selected',
    title: 'NEST For Coders — Elite Group',
    location: 'NIET Coding Hub',
    description:
      'Selected among the top 29 programmers across the institute to mentor peers, review code, and represent the college in hackathons.',
    highlight: 'Top 29 Coders',
  },
]

// Open Source Contribution (Directly from verified resume)
export const OPEN_SOURCE = [
  {
    project: 'Free LLM API Hub',
    role: 'Open-Source Contributor',
    badge: 'Issue #555 Merged / Resolved',
    contribution:
      'Contributed to resolving Issue #555 by verifying Cerebras free-trial quotas and model-specific API rate limits against official documentation.',
    details:
      'Updated structured provider metadata with verified limits, source references, and verification dates; regenerated documentation and validated changes using automated repository checks.',
    link: 'https://github.com/Abhishekkumar071',
  },
]

// Filtered project list (Removed eCommerce and MoodVision as requested)
export const PROJECTS = [
  {
    id: 'warpurl',
    category: 'Backend Systems',
    date: '2026',
    title: 'WarpURL — High-Performance URL Shortener',
    sub: 'Turns huge messy links into short URLs with sub-millisecond redirects',
    tagline: 'High-speed URL shortener with in-memory caching and click analytics',
    result: 'Sub-Millisecond Redirects',
    summary:
      'Link shorteners need to be blazing fast because every millisecond of redirect delay annoys the user. WarpURL uses in-memory caching to redirect users instantly while tracking clicks in the background.',
    whatIBuilt: [
      'Developed a URL shortening service using Spring Boot and PostgreSQL, generating unique short codes through MurmurHash3 and Base62 encoding with per-link click analytics.',
      'Implemented cache-aside caching with Caffeine and asynchronous click tracking to improve redirect efficiency and keep analytics processing off the critical request path.',
      'Optimized database queries using composite B-tree indexes and pagination; implemented JWT-based authentication, RBAC and Bucket4j rate limiting.',
      'Containerized the application using Docker and configured GitHub Actions for automated build and test checks.',
    ],
    stack: 'Spring Boot, React, PostgreSQL, Caffeine Cache, Docker, Bucket4j',
    links: [{ label: 'GitHub Repository', href: 'https://github.com/Abhishekkumar071' }],
  },
  {
    id: 'talentpilot',
    category: 'Practical AI',
    date: '2026',
    title: 'TalentPilot — Agentic AI Recruitment Platform',
    sub: 'Hiring assistant that pauses for HR before taking any big action',
    tagline: 'Multi-agent AI hiring platform with human approval checkpoints',
    result: '4 HR Approval Gates',
    summary:
      'HR teams waste dozens of hours sorting resumes, writing job posts, and scheduling tests. TalentPilot automates the boring work, but it never rejects someone or sends an offer letter without an HR manager clicking "Approve".',
    whatIBuilt: [
      'Developed an AI-powered recruitment platform using Python, FastAPI and React to streamline candidate screening, assessments and interview workflows.',
      'Built agentic workflows using LangGraph and LangChain, integrating RAG and LLM APIs to support context-aware information retrieval and recruitment tasks.',
      'Integrated candidate assessment and interview automation with MediaPipe-based proctoring to support structured candidate evaluation.',
      'Saved workflow progress into PostgreSQL checkpoints so a hiring process can wait days for an applicant and survive server restarts.',
    ],
    stack: 'Python, FastAPI, React, LangGraph, LangChain, RAG, MediaPipe, PostgreSQL',
    links: [{ label: 'View Code on GitHub', href: 'https://github.com/Abhishekkumar071/TalentPilot' }],
    flow: true,
  },
  {
    id: 'bank',
    category: 'Backend Systems',
    date: '2026',
    title: 'Secure Bank & Payment System',
    sub: 'Transfers that never leave money half-moved, even if Wi-Fi drops',
    tagline: 'Reliable banking backend with ACID transactions and duplicate-payment protection',
    result: 'Zero Double Charges',
    summary:
      'If you click "Send Money" and your phone screen freezes, did it go through? If you click again, will you get charged twice? This project makes transfers 100% safe against network drops and duplicate clicks.',
    whatIBuilt: [
      'Wrapped every money transfer in database ACID transactions: money either leaves Account A and lands in Account B completely, or no money moves at all.',
      'Added idempotency keys: each transfer request has a unique ID stored in PostgreSQL, instantly blocking duplicate charges on retries. (Try the live demo at the top!)',
      'Locked accounts during active transfers so two family members cannot spend the exact same ₹10,000 at the same split second.',
      'Fixed Hibernate N+1 query slowdowns with JOIN FETCH, making frequent account lookups much faster.',
    ],
    stack: 'Java, Spring Boot, PostgreSQL, Hibernate, Spring Security, BCrypt',
    links: [
      {
        label: 'View Code on GitHub',
        href: 'https://github.com/Abhishekkumar071/Secure-Bank-management-and-payment-processing-System',
      },
    ],
    image: '/bank_management.png',
    imageAlt: 'Login screen and transaction panel of the bank application',
  },
  {
    id: 'insurai',
    category: 'Full-Stack & Cloud',
    date: 'Oct–Dec 2025',
    title: 'InsurAI — Intelligent Insurance Platform',
    sub: 'Built during Infosys Springboard internship with 50+ REST APIs',
    tagline: 'End-to-end insurance portal with policy recommendations and Gemini chatbot',
    result: '50+ REST APIs on AWS',
    summary:
      'Buying insurance usually involves stacks of paperwork and slow agents. InsurAI lets users explore policies, get AI-based recommendations, and submit claims online in minutes.',
    whatIBuilt: [
      'Built a full-stack insurance platform using Java, Spring Boot, React and MySQL, developing 50+ REST APIs for policy discovery, applications and administrative workflows.',
      'Implemented JWT-based authentication, role-based access control, server-side pagination and rate limiting to secure and manage application endpoints.',
      'Integrated RabbitMQ-based asynchronous notifications to process policy application events without blocking the main request flow.',
      'Connected a FastAPI recommendation service, Gemini chatbot and Razorpay payment integration; tested application components using JUnit, Mockito and Postman and deployed on AWS EC2, S3 and RDS.',
    ],
    stack: 'Java, Spring Boot, MySQL, React, RabbitMQ, FastAPI, Gemini API, AWS (EC2, S3, RDS)',
    links: [{ label: 'View Code on GitHub', href: 'https://github.com/Abhishekkumar071/InsurAI' }],
    image: '/InsurAI.png',
    imageAlt: 'InsurAI dashboard showing policy search and personalized recommendations',
  },
  {
    id: 'chatlens',
    category: 'Practical AI',
    date: '2026',
    title: 'ChatLens — Chat Analytics Dashboard',
    sub: 'Turns messy exported WhatsApp & Telegram chats into clean charts',
    tagline: 'Text parsing pipeline that handles 50,000+ messages without crashing',
    result: '50K+ Messages Processed',
    summary:
      'Every chat app formats dates and emojis differently, and raw exported files are notoriously messy. ChatLens cleans up raw chat files and shows when people talk, who texts most, and the overall mood of the group.',
    whatIBuilt: [
      'Wrote a smart Python parser that handles weird timestamps, multi-line texts, and deleted messages.',
      'Added sentiment analysis (NLTK) and activity heatmaps to visualize peak chatting hours.',
      'Added in-memory caching so the Streamlit dashboard stays snappy even on massive 50,000+ message chats.',
      'Containerized with Docker and set up automated tests on GitHub Actions.',
    ],
    stack: 'Python, Pandas, NLTK, Streamlit, Docker, GitHub Actions',
    links: [
      { label: 'View Code on GitHub', href: 'https://github.com/Abhishekkumar071/ChatLens' },
      { label: 'Live Streamlit Demo', href: 'https://chatlens-demo.streamlit.app' },
    ],
  },
  {
    id: 'docqa',
    category: 'Practical AI',
    date: '2024',
    title: 'Document Q&A Engine (RAG)',
    sub: 'Upload a PDF and ask questions — answers come strictly from your file',
    tagline: 'Accurate document question-answering without AI hallucination',
    result: 'Grounded Answers',
    summary:
      'AI models love making things up when they don’t know the answer. This engine splits your PDF into small pieces, finds the exact matching paragraphs, and forces the model to answer only using your text.',
    whatIBuilt: [
      'Split PDFs into smart chunks using LangChain and stored their meaning into a ChromaDB vector database.',
      'Connected Llama 3.3 running on Groq hardware for fast answers in less than one second.',
      'Built a FastAPI backend that saves chat history so follow-up questions remember past context.',
      'Clean Streamlit interface where anyone can drag-and-drop a PDF and start asking questions.',
    ],
    stack: 'Python, FastAPI, LangChain, ChromaDB, Groq (Llama 3.3), Streamlit',
    links: [{ label: 'View Code on GitHub', href: 'https://github.com/Abhishekkumar071/document-qa-engine' }],
    image: '/doc_qa.png',
    imageAlt: 'Document QA interface with PDF uploaded and grounded question answer',
  },
]

// The 9 steps of TalentPilot explained simply
export const FLOW = [
  {
    short: '1. Request',
    title: 'HR types a normal sentence',
    text: '“Hire a backend engineer with 3 years of Java experience.” The system turns that sentence into clear requirements.',
  },
  {
    short: '2. Job Post',
    title: 'AI drafts the job description',
    text: 'Agents check company policy and salary ranges to draft a fair, compliant job post with source citations.',
    gate: 'HR reviews, edits, or asks for adjustments before anything goes live.',
  },
  {
    short: '3. Publish',
    title: 'Post to careers page',
    text: 'The job is posted automatically to the company site and Telegram, with ready-to-copy drafts for LinkedIn.',
  },
  {
    short: '4. Checkup',
    title: 'Review applicant volume',
    text: 'If too few qualified people applied, the system analyzes why (salary too tight? location too strict?) and suggests improvements.',
    gate: 'HR approves any proposed rewrite before reposting.',
  },
  {
    short: '5. Screen',
    title: 'Anonymized resume screening',
    text: 'Names, photos, and contact info are hidden. Resumes are scored purely on skills, experience, and project relevance.',
  },
  {
    short: '6. Code Test',
    title: 'In-browser coding challenge',
    text: 'Candidates write code in the browser. MediaPipe checks for tab switching or second people. Flags are recorded as notes for HR, never an automatic disqualification.',
  },
  {
    short: '7. Voice Chat',
    title: 'Follow-up technical interview',
    text: 'A friendly automated voice interview asks context questions about the candidate’s code submissions.',
  },
  {
    short: '8. Decision',
    title: 'Complete candidate summary',
    text: 'Resume scores, coding test results, and interview answers are combined into a clean, 1-page report.',
    gate: 'HR and the engineering manager make the final hire/no-hire decision.',
  },
  {
    short: '9. Offer',
    title: 'Offer letter creation',
    text: 'An official offer PDF is generated. The salary is automatically checked to make sure it stays within company limits.',
    gate: 'HR signs and sends the offer.',
  },
]

// Real work experience — Strictly the two professional experiences requested by the user
export const EXPERIENCE = [
  {
    id: 'inchi',
    date: 'Sep 2026 – Present',
    isCurrent: true,
    title: 'Application Backend & Access-Control Engineer',
    company: 'InChi Pilot Gateway',
    location: 'Singapore (Remote / Hybrid)',
    sub: 'InChi Pilot Gateway, Singapore',
    tagline: 'Cross-border B2B commerce gateway connecting Indian suppliers with Chinese buyers',
    body: 'Developed Supplier Registry and Product Catalogue modules using Python and Django REST Framework for a B2B platform connecting Indian suppliers with Chinese buyers. Implemented secure REST APIs with session-based authentication, role-based access control (RBAC) and object-level permissions across application resources. Added request validation, standardized error handling and automated tests to improve API reliability and maintainability. Collaborated through Docker-based development, Git workflows, API documentation and Agile development practices.',
    summary:
      'Engineered core backend modules and fine-grained access control architecture for an international B2B platform, ensuring multi-tenant data isolation and secure trade communications between Indian suppliers and Chinese buyers.',
    responsibilities: [
      'Architected Supplier Registry and Product Catalogue modules using Python and Django REST Framework for high-throughput supplier onboarding and dynamic inventory management.',
      'Designed and enforced session-based authentication and granular Role-Based Access Control (RBAC) with custom object-level permissions, preventing unauthorized access across cross-border business accounts.',
      'Implemented robust request validation, custom serializer validations, and centralized HTTP error-handling pipelines to elevate API resilience.',
      'Wrote comprehensive unit and API integration tests, containerized development with Docker, and collaborated via Git and OpenAPI documentation following Agile sprints.',
    ],
    stackList: ['Python', 'Django', 'Django REST Framework', 'PostgreSQL', 'RBAC', 'Docker', 'REST APIs', 'Git', 'Agile'],
    result: 'Python, Django & RBAC',
    href: 'https://github.com/Abhishekkumar071/InChi-Pilot-Gateway',
    linkText: 'View InChi Gateway Repository',
    links: [
      {
        label: 'View InChi Gateway Repository',
        href: 'https://github.com/Abhishekkumar071/InChi-Pilot-Gateway',
      },
    ],
  },
  {
    id: 'insurai',
    date: 'Oct–Dec 2025',
    isCurrent: false,
    title: 'Full Stack Developer Intern — InsurAI',
    company: 'Infosys Springboard',
    location: '3-Month Internship',
    sub: 'Infosys Springboard • 3-Month Internship',
    tagline: 'Enterprise insurance platform with 50+ REST APIs, Gemini chatbot, and AWS deployment',
    body: 'Built a full-stack insurance platform using Java, Spring Boot, React and MySQL, developing 50+ REST APIs for policy discovery, applications and administrative workflows. Implemented JWT-based authentication, role-based access control, server-side pagination and rate limiting to secure and manage application endpoints. Integrated RabbitMQ-based asynchronous notifications to process policy application events without blocking the main request flow. Connected a FastAPI recommendation service, Gemini chatbot and Razorpay payment integration; tested application components using JUnit, Mockito and Postman and deployed on AWS EC2, S3 and RDS.',
    summary:
      'Built and deployed a production-grade insurance system from scratch, creating over 50 REST APIs in Spring Boot, decoupling event-driven email notifications with RabbitMQ, and hosting the full infrastructure on AWS.',
    responsibilities: [
      'Engineered 50+ RESTful APIs in Java & Spring Boot managing policy exploration, user applications, underwriting checks, and admin approvals with MySQL.',
      'Secured endpoints using Spring Security and stateless JWT authentication, enforcing Role-Based Access Control (Admin, Agent, Customer) and Bucket4j rate limiting.',
      'Decoupled asynchronous notification pipelines using RabbitMQ message queues to send policy updates without adding latency to customer checkout calls.',
      'Integrated an intelligent FastAPI recommendation engine and Gemini-powered assistance bot; deployed production services on AWS (EC2 web server, RDS database, and S3 file storage).',
    ],
    stackList: ['Java', 'Spring Boot', 'Spring Security', 'MySQL', 'React', 'RabbitMQ', 'FastAPI', 'Gemini API', 'AWS (EC2, S3, RDS)', 'JUnit'],
    result: '50+ REST APIs on AWS',
    href: 'https://github.com/Abhishekkumar071/InsurAI',
    linkText: 'View InsurAI Repository',
    links: [
      {
        label: 'View InsurAI Repository',
        href: 'https://github.com/Abhishekkumar071/InsurAI',
      },
    ],
  },
]

// Tech stack directly from verified resume
export const STACK_GROUPS = [
  {
    category: 'Languages & Frontend',
    items: ['Java', 'Python', 'C', 'SQL', 'JavaScript', 'React.js'],
  },
  {
    category: 'Backend Engineering',
    items: ['Spring Boot', 'Spring Security', 'Django', 'Django REST Framework', 'FastAPI', 'REST APIs', 'JWT', 'RBAC'],
  },
  {
    category: 'Core Computer Science',
    items: ['Data Structures & Algorithms', 'OOP', 'Operating Systems', 'DBMS', 'Computer Networks', 'SDLC'],
  },
  {
    category: 'Databases & Storage',
    items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Database Design', 'Indexing', 'ACID Transactions'],
  },
  {
    category: 'Systems & Infrastructure',
    items: ['RabbitMQ', 'Caffeine Cache', 'Rate Limiting (Bucket4j)', 'Asynchronous Processing'],
  },
  {
    category: 'Cloud, DevOps & Testing',
    items: ['AWS (EC2, S3, RDS)', 'Docker', 'Git', 'GitHub Actions', 'CI/CD', 'Bash', 'JUnit', 'Mockito', 'Pytest', 'Postman'],
  },
  {
    category: 'AI & Agentic Workflows',
    items: ['LangGraph', 'LangChain', 'RAG', 'ChromaDB', 'MediaPipe', 'Gemini API'],
  },
]

// Real certifications and honors from verified resume
export const CERTIFICATIONS = [
  {
    title: '2nd Place 🥈 — Code Storm Hackathon (DSA)',
    issuer: 'Noida Institute of Engineering & Technology',
    year: '2026',
    detail:
      'Won 2nd place in a high-speed competitive DSA hackathon with team OUR RAK. Evaluated on algorithm speed, optimization, and clean logic.',
    badge: 'Podium 🥈',
    file: '/certification/2nd possition in dsa hackthon at niet.jpg',
  },
  {
    title: 'CCNA: Introduction to Networks',
    issuer: 'Cisco Networking Academy',
    year: 'June 2026',
    detail:
      'Verified understanding of IP addressing, subnetting, Ethernet switching, routing protocols, and transport layer reliability.',
    badge: 'Cisco Verified',
    file: '/certification/CCNA-_Introduction_to_Networks_certificate.pdf',
  },
  {
    title: 'Database Management Systems',
    issuer: 'Infosys Springboard',
    year: '2025',
    detail:
      'Relational database design, SQL querying, transaction management, normalization, and relational integrity.',
    badge: 'Infosys Verified',
  },
  {
    title: 'Infosys Springboard Virtual Internship Certificate',
    issuer: 'Infosys Springboard',
    year: 'Dec 2025',
    detail:
      'Completed the intensive Java Full Stack Development internship, building and deploying the InsurAI enterprise platform on AWS.',
    badge: 'Infosys Official',
    file: '/certification/Infosys_Internship_Certificate.pdf',
  },
  {
    title: 'Membership Chair — IEEE CS Student Branch',
    issuer: 'NIET IEEE Student Branch Chapter',
    year: 'Campus',
    detail:
      'Organized technical events, hackathons, and coding workshops for fellow students. Led peer engagement in algorithms and software engineering.',
    badge: 'Leadership',
  },
  {
    title: 'NEST For Coders — Top 29 Coders Selection',
    issuer: 'NIET Coding Hub',
    year: 'Campus',
    detail:
      'Selected among the top 29 programmers across the institute to mentor peers, review code, and represent the college in hackathons.',
    badge: 'Top 29 Selected',
  },
]
