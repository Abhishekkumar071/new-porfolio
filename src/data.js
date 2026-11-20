// Central data store for Abhishek Kumar's personal portfolio.
// Clear, simple, and human-written engineering content.

export const PROFILE = {
  name: 'Abhishek Kumar',
  role: 'Software Engineer & Builder',
  tagline: 'Backend Systems • Data Structures & Algorithms • Practical AI',
  email: 'aksinghbgp1230@gmail.com',
  phone: '+91-9608035609',
  location: 'Greater Noida, India',
  status: 'Open to SDE / Backend internships & full-time roles',
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
    tag: 'Backend Engineering',
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

// Projects explained in simple, human terms
export const PROJECTS = [
  {
    id: 'talentpilot',
    category: 'Practical AI',
    date: '2026',
    title: 'TalentPilot',
    sub: 'Hiring assistant that pauses for HR before taking any big action',
    tagline: 'Multi-agent AI hiring platform with human approval checkpoints',
    result: '4 HR Approval Gates',
    summary:
      'HR teams waste dozens of hours sorting resumes, writing job posts, and scheduling tests. TalentPilot automates the boring work, but it never rejects someone or sends an offer letter without an HR manager clicking "Approve".',
    whatIBuilt: [
      'Built a multi-step workflow in LangGraph where agents draft job posts, screen resumes, and conduct proctored tests.',
      'Saved workflow progress into PostgreSQL so a hiring process can wait days for an applicant to reply, survive a server restart, and resume without losing data.',
      'Resumes are anonymized (names and photos hidden) before scoring to prevent unconscious bias.',
      'Offer letters are strictly capped to the approved salary range, so the AI never promises numbers the company cannot pay.',
    ],
    stack: 'Python, FastAPI, LangGraph, LangChain, React, MediaPipe, PostgreSQL',
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
    id: 'warpurl',
    category: 'Backend Systems',
    date: '2026',
    title: 'WarpURL — Super Fast Link Shortener',
    sub: 'Turns huge messy links into short URLs with sub-millisecond redirects',
    tagline: 'High-speed URL shortener with in-memory caching and click analytics',
    result: 'Sub-Millisecond Redirects',
    summary:
      'Link shorteners need to be blazing fast because every millisecond of redirect delay annoys the user. WarpURL uses in-memory caching to redirect users instantly while tracking clicks in the background.',
    whatIBuilt: [
      'Created short, collision-free codes using MurmurHash3 and Base62 encoding (like bit.ly).',
      'Used Caffeine in-memory cache so popular links redirect instantly without querying the database disk every time.',
      'Tracked clicks, browsers, and timestamps asynchronously so analytics logging never slows down the visitor redirect.',
      'Added token-bucket rate limiting (Bucket4j) so nobody can spam or crash the server with automated bots.',
    ],
    stack: 'Java, Spring Boot, React, PostgreSQL, Caffeine Cache, Docker, Bucket4j',
    links: [{ label: 'GitHub Profile', href: 'https://github.com/Abhishekkumar071' }],
  },
  {
    id: 'insurai',
    category: 'Full-Stack & Cloud',
    date: 'Oct–Dec 2025',
    title: 'InsurAI — Insurance Platform',
    sub: 'Built during Infosys Springboard internship with 50+ REST APIs',
    tagline: 'End-to-end insurance portal with policy recommendations and Gemini chatbot',
    result: '50+ REST APIs on AWS',
    summary:
      'Buying insurance usually involves stacks of paperwork and slow agents. InsurAI lets users explore policies, get AI-based recommendations, and submit claims online in minutes.',
    whatIBuilt: [
      'Built 50+ REST APIs with Spring Boot and MySQL, secured with role-based access control for customers and admins.',
      'Added RabbitMQ message queues so notifications and emails send in the background without freezing the webpage.',
      'Created a small Python recommendation service that matches customer age and budget to the best insurance plan.',
      'Integrated a Gemini AI assistant to explain complicated insurance terms in simple, everyday language.',
      'Deployed on AWS (EC2 for backend, S3 for frontend, RDS for database) with JUnit 5 unit tests.',
    ],
    stack: 'Java, Spring Boot, MySQL, React, RabbitMQ, FastAPI, Gemini API, AWS',
    links: [{ label: 'View Code on GitHub', href: 'https://github.com/Abhishekkumar071/InsurAI' }],
    image: '/InsurAI.png',
    imageAlt: 'InsurAI dashboard showing policy search and personalized recommendations',
  },
  {
    id: 'ecommerce',
    category: 'Backend Systems',
    date: '2026',
    title: 'Full-Stack eCommerce Platform',
    sub: 'Complete online store with real Stripe payment checkout and role access',
    tagline: 'Spring Boot eCommerce architecture with customer cart and admin dashboard',
    result: 'Stripe & JWT Security',
    summary:
      'A complete online shopping store built to master real-world Spring Boot enterprise architecture. Handles product catalogs, customer shopping carts, Stripe card checkout, and seller dashboards.',
    whatIBuilt: [
      'Clean layered Spring Boot architecture (Controller → Service → Repository → Database).',
      'Real Stripe payment gateway integration with secure webhook listeners to mark orders as paid.',
      'Stateless security using JSON Web Tokens (JWT) so users stay safely logged in.',
      'Admin and seller panels to add products, adjust inventory counts, and view incoming orders.',
    ],
    stack: 'Java, Spring Boot, Spring Security, JWT, Stripe API, Hibernate, MySQL, React',
    links: [{ label: 'GitHub Repositories', href: 'https://github.com/Abhishekkumar071' }],
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
  {
    id: 'moodvision',
    category: 'Computer Vision',
    date: '2023',
    title: 'MoodVision — Live Emotion Classifier',
    sub: 'Detects facial emotions in real time through your webcam',
    tagline: 'Deep learning computer vision model running at 30+ frames per second',
    result: '63% on FER2013',
    summary:
      'A deep learning project that spots faces through a live webcam and predicts whether the person is happy, sad, angry, surprised, or neutral.',
    whatIBuilt: [
      'Trained a Convolutional Neural Network (CNN) on 32,300+ facial images across 7 emotions, reaching 63% test accuracy.',
      'Used OpenCV to instantly draw bounding boxes around faces in the camera frame.',
      'Streamlined frame processing so predictions run smoothly at 30+ FPS on regular laptop processors without needing an expensive GPU.',
    ],
    stack: 'Python, TensorFlow, Keras, CNNs, OpenCV',
    links: [{ label: 'View Code on GitHub', href: 'https://github.com/Abhishekkumar071/MoodVision' }],
    image: '/moodVission.png',
    imageAlt: 'MoodVision webcam interface with green emotion detection boxes on faces',
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

// Real work experience written like a human
export const EXPERIENCE = [
  {
    date: 'Sep 2026 – Present',
    title: 'Backend & Access Control Engineer',
    sub: 'InChi Pilot Gateway • Singapore / Remote',
    body: 'Building the core backend for a B2B platform connecting Indian suppliers with international buyers. Writing Python and Django REST APIs for supplier registries and product catalogs, with secure session logins, role-based permissions, and Docker development environments.',
    result: 'Django 5.2 & RBAC',
  },
  {
    date: 'Oct–Dec 2025',
    title: 'Java Full Stack Developer Intern',
    sub: 'Infosys Springboard Virtual Internship 6.0',
    body: 'Selected in the top ~2-5% nationwide cohort to build InsurAI from scratch. Created 50+ REST APIs in Spring Boot, added RabbitMQ message queues for background notifications, built a Gemini chatbot for policy questions, and deployed everything on AWS EC2, S3, and RDS.',
    result: '50+ APIs on AWS',
  },
  {
    date: 'Aug–Oct 2025',
    title: 'Data Strategy Intern',
    sub: 'The Moronss • Technical Department',
    body: 'Worked on data workflows, cleaning operational datasets, and structuring technical data pipelines for team decision-making.',
    result: 'Data Pipelines',
  },
  {
    date: '2023–2027',
    title: 'B.Tech in Computer Science & Engineering (AI & ML)',
    sub: 'Noida Institute of Engineering & Technology (NIET)',
    body: 'Studying core computer science, algorithms, operating systems, databases, and machine learning. Maintaining an 8.9 CGPA while building real projects and competing in coding contests.',
    result: 'CGPA: 8.9 / 10',
  },
  {
    date: 'Leadership',
    title: 'Membership Chair — IEEE Computer Society',
    sub: 'NIET IEEE Student Branch Chapter',
    body: 'Organized hands-on coding workshops, hackathons, and placement preparation series for fellow students. Passionate about helping other engineers get better at DSA and building.',
    result: 'Student Leader',
  },
  {
    date: 'Selected',
    title: 'NEST For Coders — Top 29 Coders',
    sub: 'NIET Competitive Coding Group',
    body: 'Selected as one of the 29 strongest coders at the college for advanced algorithmic problem-solving sessions and inter-college hackathons.',
    result: 'Top 29 Selected',
  },
]

// Tech stack grouped in a logical, readable way
export const STACK_GROUPS = [
  {
    category: 'Languages I write daily',
    items: ['Java', 'Python', 'SQL', 'C', 'JavaScript (ES6+)'],
  },
  {
    category: 'Backend & APIs',
    items: ['Spring Boot', 'Spring Security', 'Hibernate / JPA', 'Django & DRF', 'FastAPI', 'REST APIs', 'JWT & RBAC'],
  },
  {
    category: 'Data Structures & CS Foundations',
    items: ['Data Structures & Algorithms', 'System Design Basics', 'ACID Transactions', 'DBMS', 'Operating Systems', 'Computer Networks'],
  },
  {
    category: 'AI & Machine Learning',
    items: ['LangGraph', 'LangChain', 'RAG (ChromaDB)', 'Gemini / Groq / OpenAI APIs', 'Scikit-learn', 'TensorFlow', 'OpenCV', 'MediaPipe'],
  },
  {
    category: 'Databases & Storage',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Caffeine In-Memory Cache', 'Redis'],
  },
  {
    category: 'Cloud, DevOps & Tools',
    items: ['AWS (EC2, S3, RDS)', 'Docker', 'GitHub Actions (CI/CD)', 'Git', 'Linux / Bash', 'Postman'],
  },
  {
    category: 'Testing & Code Quality',
    items: ['JUnit 5', 'Mockito', 'Pytest', 'Postman API Testing', 'Agile / Scrum'],
  },
]

// Real certifications and honors
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
    year: '2026',
    detail:
      'Verified understanding of IP addressing, subnetting, Ethernet switching, routing protocols, and transport layer reliability.',
    badge: 'Cisco Verified',
    file: '/certification/CCNA-_Introduction_to_Networks_certificate.pdf',
  },
  {
    title: 'Infosys Springboard Virtual Internship Certificate',
    issuer: 'Infosys Springboard',
    year: '2025',
    detail:
      'Completed the intensive Java Full Stack Development internship, building and deploying the InsurAI enterprise platform on AWS.',
    badge: 'Infosys Official',
    file: '/certification/Infosys_Internship_Certificate.pdf',
  },
  {
    title: 'Java Spring Boot Full Stack: eCommerce Masterclass',
    issuer: 'EmbarkX / Udemy',
    year: '2026',
    detail:
      'Built a complete enterprise eCommerce backend with Spring Boot, Spring Security, JWT, Stripe payments, and AWS deployment.',
    badge: 'Udemy Certified',
  },
  {
    title: 'Amazon Web Services (AWS) - Zero to Hero',
    issuer: 'Udemy',
    year: '2026',
    detail:
      'Hands-on cloud architecture covering Amazon EC2, S3, RDS database servers, IAM security policies, and CloudWatch monitoring.',
    badge: 'AWS Cloud',
  },
  {
    title: 'Career Essentials in Generative AI',
    issuer: 'Microsoft & LinkedIn',
    year: '2026',
    detail:
      'Foundational generative AI architecture, large language models, prompt workflows, and ethical AI implementation.',
    badge: 'Microsoft Certified',
    file: '/certification/microsoft and linkdin.jpg',
  },
  {
    title: 'Infosys Springboard Advanced Track Certificates',
    issuer: 'Infosys Springboard',
    year: '2025–2026',
    detail:
      'Certified in Machine Learning & AI, Natural Language Processing using Python, Deep Learning for Developers, and DBMS.',
    badge: 'Infosys Tracks',
  },
]
