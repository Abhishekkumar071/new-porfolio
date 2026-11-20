// All the content of the site lives here. Edit this file to change text, links and numbers.

export const PROFILE = {
  name: 'Abhishek Kumar',
  title: 'Software Engineer | Backend Systems, Problem Solving (DSA) & Agentic AI',
  email: 'aksinghbgp1230@gmail.com',
  phone: '+91-9608035609',
  location: 'Greater Noida, India',
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

// Web3Forms keys are meant to be public (they only allow sending mail to your own inbox).
export const WEB3FORMS_KEY = '79415c8b-52e7-4db6-bad7-fc1045db404a'

export const PILLARS = [
  {
    tag: 'Core Discipline 01',
    title: 'Backend & Distributed Correctness',
    description:
      'Designing transactional systems where failures never leave partial state. Specializing in Spring Boot, Django, ACID guarantees, idempotency under network retries, and cache-aside architectures with sub-millisecond lookups.',
  },
  {
    tag: 'Core Discipline 02',
    title: 'Algorithmic Rigor & Problem Solving',
    description:
      'Over 1,000 algorithmic problems solved across LeetCode (1,758 rating, Top 9.68%) and Codeforces (Specialist, 1,491). 2nd place podium finish at the NIET Code Storm Hackathon with team OUR RAK.',
  },
  {
    tag: 'Core Discipline 03',
    title: 'Agentic AI & Human-in-the-Loop',
    description:
      'Building production-ready Generative AI systems. Utilizing LangGraph for multi-step agent orchestration with state checkpointing, hybrid RAG with reciprocal rank fusion, and explicit human approval gates before executing high-impact actions.',
  },
]

export const DSA_ACHIEVEMENTS = [
  {
    category: 'Podium Finish',
    title: '2nd Place 🥈 — Code Storm Hackathon',
    subtitle: 'Noida Institute of Engineering & Technology (NIET) • Team OUR RAK',
    detail:
      'Contest challenge focusing on high-speed algorithm design, search/sort optimization, and writing clean, optimal code under strict time constraints.',
    result: '2nd Place 🥈',
    badge: 'Contest Podium',
    image: '/certification/2nd possition in dsa hackthon at niet.jpg',
  },
  {
    category: 'Global Contest',
    title: 'LeetCode Contest Rating',
    subtitle: 'Competitive Programming profile: Abhishek670',
    detail: 'Contest rating 1,758. Ranked in the top 9.68% of competitive programmers globally with over 1,000+ problems solved across all difficulty tiers.',
    result: 'Rating 1758',
    badge: 'Top 9.68%',
    href: PROFILE.links.leetcode,
  },
  {
    category: 'Global Contest',
    title: 'Codeforces Specialist',
    subtitle: 'Competitive Programming profile: abhishek_670',
    detail: 'Peak rating 1,491 / 1,494 (Specialist tier). Over 350+ contest and practice problems solved focusing on dynamic programming, graph theory, and number theory.',
    result: 'Specialist',
    badge: 'Rating 1491',
    href: PROFILE.links.codeforces,
  },
  {
    category: 'Worldwide Prelims',
    title: 'IICPC CodeFest 2026',
    subtitle: 'Global Competitive Programming Prelims',
    detail: 'Ranked 3,545 out of 13,000+ worldwide participants in competitive problem solving.',
    result: 'Rank 3545',
    badge: 'Top 25%',
  },
  {
    category: 'Unified Metric',
    title: 'Codolio Profile & Practice Portfolio',
    subtitle: 'Aggregated C-Score across LeetCode, Codeforces, and GeeksforGeeks',
    detail: 'Comprehensive portfolio of 1,000+ solved algorithmic problems spanning trees, graphs, dynamic programming, two pointers, and greedy algorithms.',
    result: '1000+ Solved',
    badge: 'Codolio Verified',
    href: PROFILE.links.codolio,
  },
  {
    category: 'Institutional Selection',
    title: 'NEST For Coders — Top 29 Selection',
    subtitle: 'Noida Institute of Engineering & Technology',
    detail: 'Selected into an elite group of 29 students across the institution dedicated to advanced algorithmic problem solving, peer code review, and hackathon training.',
    result: 'Top 29 Coders',
    badge: 'Selected',
  },
]

export const PROJECTS = [
  {
    id: 'talentpilot',
    category: 'Agentic AI',
    date: '2026',
    title: 'TalentPilot',
    sub: 'Multi-agent hiring platform with LangGraph checkpointing & 4 HR approval gates',
    result: '4 HR Approval Gates',
    summary:
      'HR teams spend days writing job posts, sorting resumes, running tests and drafting offers. TalentPilot automates the end-to-end recruitment pipeline with LangGraph agents and explicitly pauses for human authorization at every critical decision point.',
    points: [
      'Multi-agent state workflows built with LangGraph and checkpointed in PostgreSQL; pipeline states persist indefinitely across server restarts and can retry failed steps independently.',
      'Hybrid resume-scoring engine combining an LLM rubric (45%), must-have criteria matching (25%), semantic vector similarity (15%), and experience fit (15%), with automatic PII anonymization prior to scoring.',
      'Policy-compliant job descriptions and offer letters drafted using hybrid RAG (BM25 + vector embeddings merged via Reciprocal Rank Fusion), with compensation strictly clamped to approved salary bands.',
      'In-browser coding assessment with MediaPipe computer vision proctoring (gaze tracking, multiple faces, device detection); flags are logged as non-disqualifying evidence for human review.',
    ],
    stack: 'Python, FastAPI, LangGraph, LangChain, Pydantic, React, MediaPipe, PostgreSQL',
    links: [{ label: 'View code on GitHub', href: 'https://github.com/Abhishekkumar071/TalentPilot' }],
    flow: true,
  },
  {
    id: 'bank',
    category: 'Backend Systems',
    date: '2026',
    title: 'Secure Bank and Payment Processing System',
    sub: 'Transactional banking core with distributed idempotency & ACID guarantees',
    result: 'ACID, Zero Double Debits',
    summary:
      'A financial transaction must complete in its entirety or roll back completely, and a retried client request over an unreliable network must never double-debit an account.',
    points: [
      'Fund transfer execution enclosed in strict ACID database transactions, preventing partial balance movements during runtime or hardware faults.',
      'Distributed idempotency mechanism enforcing unique request keys at the database constraint level, cleanly neutralizing duplicate submissions caused by client-side retries.',
      'Account balance concurrency protection using pessimistic and optimistic locking patterns to guard against simultaneous transfer race conditions.',
      'Eliminated Hibernate N+1 query antipatterns via JOIN FETCH and entity graph optimizations, reducing database round-trips on primary query paths.',
      'BCrypt salted password hashing, JWT stateless authentication, and comprehensive audit ledger logging.',
    ],
    stack: 'Java, Spring Boot, PostgreSQL, Hibernate, Spring Security, BCrypt',
    links: [
      {
        label: 'View code on GitHub',
        href: 'https://github.com/Abhishekkumar071/Secure-Bank-management-and-payment-processing-System',
      },
    ],
    image: '/bank_management.png',
    imageAlt: 'Login and transaction dashboard of the secure bank application',
  },
  {
    id: 'warpurl',
    category: 'Backend Systems',
    date: '2026',
    title: 'WarpURL — High-Performance URL Shortener',
    sub: 'URL shortener with MurmurHash3, Base62 encoding & Caffeine cache-aside',
    result: 'Base62 & In-Memory Cache',
    summary:
      'Designed for high throughput and low latency, WarpURL converts long URLs into collision-free Base62 keys with sub-millisecond redirection and asynchronous click telemetry.',
    points: [
      'Generates unique short keys through MurmurHash3 32-bit hashing and Base62 encoding, avoiding sequential ID enumeration vulnerabilities.',
      'Implemented cache-aside pattern using Caffeine in-memory cache, keeping the hottest redirect routes off the persistent database disk path.',
      'Asynchronous click analytics and referral tracking executed outside the critical redirection request-response loop.',
      'Database query optimization with composite B-tree indexes; secured with JWT authentication, RBAC, and Bucket4j token-bucket rate limiting.',
      'Containerized with Docker and deployed with PostgreSQL in cloud infrastructure.',
    ],
    stack: 'Java, Spring Boot, React, PostgreSQL, Caffeine Cache, Docker, Bucket4j',
    links: [{ label: 'View repository', href: 'https://github.com/Abhishekkumar071' }],
  },
  {
    id: 'insurai',
    category: 'Full-Stack & Cloud',
    date: 'Oct–Dec 2025',
    title: 'InsurAI — Intelligent Insurance Platform',
    sub: 'Built during Infosys Springboard Virtual Internship 6.0 (Nationwide cohort)',
    result: '50+ REST APIs on AWS',
    summary:
      'A digital insurance platform transforming traditional manual underwriting into an automated self-service experience with AI-powered policy discovery, risk classification, and claim filing.',
    points: [
      'Engineered a scalable Spring Boot and MySQL backend exposing 50+ REST APIs, secured with JWT and role-based access control (RBAC) separating customers and claims adjusters.',
      'Integrated an asynchronous notification pipeline using RabbitMQ message queues to handle policy approval events without blocking HTTP request threads.',
      'Built a companion Python FastAPI recommendation service using vector similarity to suggest personalized coverage plans based on user risk profiles.',
      'Integrated a Gemini-powered conversational assistant to clarify policy terms, coverage exclusions, and claim prerequisites.',
      'Deployed production services across AWS EC2, S3, and RDS; verified reliability with JUnit 5, Mockito, and Postman regression suites.',
    ],
    stack: 'Java, Spring Boot, MySQL, React, RabbitMQ, FastAPI, Gemini API, AWS (EC2, S3, RDS)',
    links: [{ label: 'View code on GitHub', href: 'https://github.com/Abhishekkumar071/InsurAI' }],
    image: '/InsurAI.png',
    imageAlt: 'InsurAI portal home page showcasing intelligent insurance plan exploration',
  },
  {
    id: 'ecommerce',
    category: 'Backend Systems',
    date: '2026',
    title: 'Enterprise eCommerce Backend Masterclass',
    sub: 'Full-stack commercial storefront with Stripe payment integration & multi-tier RBAC',
    result: 'Stripe & Stateless Auth',
    summary:
      'A production-grade eCommerce architecture featuring complex entity relationships, customer cart workflows, Stripe payment checkout, and seller/admin management portals.',
    points: [
      'Designed a clean layered domain architecture with Spring Boot, Spring Data JPA, and Hibernate, managing orders, products, inventory, and categories.',
      'Integrated Stripe Payment Gateway with webhook listener verifying cryptographic signatures for asynchronous payment capture and order fulfillment.',
      'Stateless security layer leveraging Spring Security and JSON Web Tokens (JWT) enforcing granular permissions across Customers, Vendors, and Platform Administrators.',
      'Automated schema migration and database indexing on MySQL/PostgreSQL with comprehensive integration testing.',
    ],
    stack: 'Java, Spring Boot, Spring Security, JWT, Stripe API, Hibernate, MySQL, React, AWS',
    links: [{ label: 'View GitHub Profile', href: 'https://github.com/Abhishekkumar071' }],
  },
  {
    id: 'chatlens',
    category: 'AI & Data Engineering',
    date: '2026',
    title: 'ChatLens — Chat Analytics Pipeline',
    sub: 'Unstructured text ingestion engine processing 50K+ messages with NLP sentiment',
    result: '50K+ Messages Processed',
    summary:
      'Chat exports are notoriously unstructured and irregular across platforms and regional date notations. ChatLens normalizes raw chat logs into actionable behavioral insights and sentiment trends.',
    points: [
      'Engineered an ingestion regex pipeline in Python capable of parsing disparate WhatsApp and Telegram date-time timestamps and multi-line message formats without data loss.',
      'Incorporated NLTK sentiment analysis, lexical diversity analysis, and user engagement heatmaps to visualize communication cadence and response latency.',
      'Leveraged in-memory caching and vectorized Pandas routines to achieve responsive dashboard rendering over 50,000+ raw messages in Streamlit.',
      'Packaged in Docker containers with an automated GitHub Actions CI/CD pipeline running pytest suites on every Git push.',
    ],
    stack: 'Python, Pandas, NLTK, Streamlit, Docker, GitHub Actions, Pytest',
    links: [
      { label: 'View code on GitHub', href: 'https://github.com/Abhishekkumar071/ChatLens' },
      { label: 'Live Streamlit Demo', href: 'https://chatlens-demo.streamlit.app' },
    ],
  },
  {
    id: 'docqa',
    category: 'Agentic AI',
    date: '2024',
    title: 'Document Q&A Engine (RAG)',
    sub: 'Grounded question answering over PDFs with ChromaDB & Llama 3.3 via Groq',
    result: 'Semantic Vector Retrieval',
    summary:
      'Eliminates large language model hallucinations when analyzing complex PDF documentation by grounding answers strictly in retrieved vector chunks.',
    points: [
      'Recursive document parsing and chunking with LangChain, producing dense semantic embeddings stored in a ChromaDB vector index.',
      'Ultra-low latency retrieval and inference pipeline combining cosine similarity search with Llama 3.3 hosted on Groq LPU hardware.',
      'FastAPI backend with SQLAlchemy and SQLite/PostgreSQL managing conversational session state and multi-turn context retention.',
      'Streamlit interface providing document preview, citation passage highlighting, and automated executive summaries.',
    ],
    stack: 'Python, FastAPI, LangChain, ChromaDB, Groq (Llama 3.3), SQLAlchemy, Streamlit',
    links: [{ label: 'View code on GitHub', href: 'https://github.com/Abhishekkumar071/document-qa-engine' }],
    image: '/doc_qa.png',
    imageAlt: 'Document QA Engine interface showing PDF query and grounded model answer',
  },
  {
    id: 'moodvision',
    category: 'AI & Computer Vision',
    date: '2023',
    title: 'MoodVision — Real-Time Emotion Classifier',
    sub: 'Convolutional neural network inference over live webcam video streams',
    result: '63% Accuracy on FER2013',
    summary:
      'A deep learning vision pipeline that detects human faces and classifies emotional expressions in real time directly from camera feeds.',
    points: [
      'Trained a custom convolutional neural network (CNN) on the FER2013 dataset (32,300+ facial images across 7 discrete emotion categories), reaching 63% validation accuracy.',
      'Integrated OpenCV Haar Cascade classifiers for real-time bounding box face localization prior to CNN tensor feeding.',
      'Optimized frame pre-processing (grayscale conversion, normalization, and resizing) to maintain real-time 30+ FPS throughput on standard CPU hardware.',
    ],
    stack: 'Python, TensorFlow, Keras, CNNs, OpenCV',
    links: [{ label: 'View code on GitHub', href: 'https://github.com/Abhishekkumar071/MoodVision' }],
    image: '/moodVission.png',
    imageAlt: 'MoodVision webcam interface displaying real-time emotion detection boxes',
  },
]

// Steps of the TalentPilot workflow. `gate` means the workflow pauses for a person.
export const FLOW = [
  {
    short: 'Request',
    title: 'HR Initiates Request',
    text: '“Hire a backend engineer with 3 to 5 years experience.” The agent normalizes natural language input into a structured hiring specification with schema validation.',
  },
  {
    short: 'JD Generator',
    title: 'Policy-Grounded Job Description',
    text: 'Agents query internal salary bands, compliance rules, and past top-performing job specs using hybrid RAG (BM25 + embeddings). Produces a drafted job spec with policy citations.',
    gate: 'HR reviews, edits, or asks the agent for adjustments.',
  },
  {
    short: 'Multichannel Post',
    title: 'Syndicate Job Posting',
    text: 'Publishes directly to the careers portal and candidate Telegram channels. Generates formatted social copy for LinkedIn and Naukri.',
  },
  {
    short: 'Pipeline Replan',
    title: 'Application Health Evaluation',
    text: 'Upon deadline closure, the workflow evaluates applicant quality against the benchmark rubric. If qualified candidate volume is low, it analyzes root causes (e.g. rigid salary, location constraints) and suggests revisions.',
    gate: 'HR must approve any revised scope or reposting strategy.',
  },
  {
    short: 'Anonymized Screen',
    title: 'Bias-Free Resume Scoring',
    text: 'Removes candidate name, gender, age, and contact information. Evaluates resumes across 4 weighted components: LLM rubric (45%), must-have technical skills (25%), semantic relevance (15%), and career trajectory fit (15%).',
  },
  {
    short: 'Proctored Test',
    title: 'Interactive Coding & Integrity Screen',
    text: 'Candidates complete algorithm challenges and domain questions in a sandboxed browser IDE. MediaPipe computer vision monitors for gaze deviation, phone detection, and tab switching. Flags are recorded as review evidence.',
  },
  {
    short: 'AI Voice Interview',
    title: 'Adaptive Technical Interview',
    text: 'An automated browser speech session asking context-aware follow-up questions tailored to the candidate’s coding assessment performance.',
  },
  {
    short: 'Hiring Decision',
    title: 'Holistic Candidate Dossier',
    text: 'Synthesizes resume scores, code quality metrics, integrity telemetry, and voice interview answers into a unified recommendation dossier.',
    gate: 'HR and engineering hiring manager make the definitive hire/no-hire decision.',
  },
  {
    short: 'Offer Letter',
    title: 'Policy-Bounded Offer Generation',
    text: 'Generates formal offer PDF with compensation strictly clamped within approved institutional salary bands.',
    gate: 'HR reviews, customizes, and digitally signs before dispatch.',
  },
]

export const EXPERIENCE = [
  {
    date: 'Sep 2026 – Present',
    title: 'Application Backend & Access-Control Engineer',
    sub: 'InChi Pilot Gateway • Singapore / Remote',
    body: 'Developing core backend services for a cross-border B2B supplier-buyer gateway using Python, Django 5.2, and Django REST Framework. Architecting Supplier Registry and Product Catalogue modules with session-based authentication, granular Role-Based Access Control (RBAC), and object-level permissions. Collaborating in an Agile delivery framework using Docker, Git-based PR reviews, and automated test pipelines.',
    result: 'Django 5.2 & RBAC',
  },
  {
    date: 'Oct–Dec 2025',
    title: 'Java Full Stack Developer Intern',
    sub: 'Infosys Springboard Virtual Internship 6.0',
    body: 'Selected into a highly competitive nationwide cohort (~2-5% acceptance). Engineered the InsurAI enterprise platform end to end: Java, Spring Boot, MySQL, and React. Built 50+ REST endpoints, asynchronous RabbitMQ message queues for event-driven updates, FastAPI recommendation integration, and Gemini conversational assistant. Deployed on AWS EC2, S3, and RDS with full JUnit 5 & Mockito test coverage.',
    result: '50+ REST APIs on AWS',
  },
  {
    date: 'Aug–Oct 2025',
    title: 'Data Strategy Intern',
    sub: 'The Moronss • Technical Department',
    body: 'Engaged in data analysis, structural data processing pipelines, and data strategy workflows supporting technical department operations and cross-team decision systems.',
    result: 'Data Pipelines',
  },
  {
    date: '2023–2027',
    title: 'B.Tech in Computer Science & Engineering (AI & ML)',
    sub: 'Noida Institute of Engineering and Technology (NIET), Greater Noida',
    body: 'Focusing on core computer science foundations, algorithms, systems engineering, machine learning, and distributed backend development. Maintaining academic excellence with an 8.9 CGPA.',
    result: 'CGPA 8.9',
  },
  {
    date: 'Leadership',
    title: 'IEEE Computer Society Membership Chair',
    sub: 'NIET IEEE Student Branch Chapter (IEEE UP Section)',
    body: 'Spearheaded technical events, coding workshops, hackathons, and placement preparation initiatives. Facilitated peer mentoring in algorithms and modern software engineering practices.',
    result: 'Executive Chair',
  },
  {
    date: 'Selective Cohort',
    title: 'NEST For Coders — Top 29 Coders',
    sub: 'Official NIET Collaborative Coding & Problem Solving Hub',
    body: 'Hand-selected into the top 29 programmers across the institution for advanced competitive programming, data structure deep dives, and collaborative hackathon teams.',
    result: 'Top 29 Selected',
  },
]

export const STACK = [
  {
    label: 'Languages',
    items: 'Java (Core Java, OOP, Collections, Concurrency), Python, SQL, C, JavaScript (ES6+)',
  },
  {
    label: 'Backend Systems',
    items:
      'Spring Boot, Spring Security, Spring Data JPA, Hibernate, Django, Django REST Framework, FastAPI, RESTful APIs, JWT, Role-Based Access Control (RBAC), Session Auth, Idempotency, Rate Limiting (Bucket4j)',
  },
  {
    label: 'DSA & Core CS',
    items:
      'Data Structures & Algorithms, Object-Oriented Programming (OOP), Database Management Systems (DBMS), Operating Systems, Computer Networks, System Design, ACID Transactions',
  },
  {
    label: 'AI & Agentic Systems',
    items:
      'LangGraph, LangChain, Retrieval-Augmented Generation (RAG), ChromaDB, HuggingFace, Pydantic Structured Output, OpenAI / Gemini / Groq APIs, Scikit-learn, TensorFlow, Keras, OpenCV, MediaPipe, NLTK',
  },
  {
    label: 'Databases & Caching',
    items: 'PostgreSQL, MySQL, MongoDB, Caffeine Cache, Redis, B-Tree Indexing, Connection Pooling',
  },
  {
    label: 'Cloud & Infrastructure',
    items: 'AWS (EC2, S3, RDS), Docker, GitHub Actions, CI/CD Pipelines, Linux/Bash, Git, Postman',
  },
  {
    label: 'Testing & Engineering',
    items: 'JUnit 5, Mockito, Pytest, API Integration Testing, Agile/Scrum, Code Reviews',
  },
]

export const CERTIFICATIONS = [
  {
    title: '2nd Place 🥈 — Code Storm Hackathon (DSA)',
    issuer: 'Noida Institute of Engineering & Technology',
    year: '2026',
    detail:
      'Secured 2nd place in a high-intensity competitive DSA hackathon with team OUR RAK, demonstrating speed, algorithmic optimization, and clean implementation under contest pressure.',
    badge: 'Podium Finish 🥈',
    file: '/certification/2nd possition in dsa hackthon at niet.jpg',
  },
  {
    title: 'CCNA: Introduction to Networks',
    issuer: 'Cisco Networking Academy',
    year: '2026',
    detail:
      'Comprehensive validation covering IP addressing (IPv4/IPv6), subnetting, Ethernet switching, routing protocols, and transport layer reliability.',
    badge: 'Cisco Certified',
    file: '/certification/CCNA-_Introduction_to_Networks_certificate.pdf',
  },
  {
    title: 'Infosys Springboard Virtual Internship 6.0 Certificate',
    issuer: 'Infosys Springboard',
    year: '2025',
    detail:
      'Java Full Stack Development internship completion with InsurAI project delivery, enterprise architecture standards, and AWS deployment.',
    badge: 'Infosys Official',
    file: '/certification/Infosys_Internship_Certificate.pdf',
  },
  {
    title: 'Java Spring Boot Full Stack: eCommerce Project Masterclass',
    issuer: 'EmbarkX / Udemy',
    year: '2026',
    detail:
      'Production-grade full-stack architecture: Spring Boot, Spring Security, JWT, Stripe payment integration, multi-vendor vendor/admin portals, and AWS cloud deployment.',
    badge: 'Udemy Verified',
  },
  {
    title: 'Amazon Web Services (AWS) - Zero to Hero',
    issuer: 'Udemy',
    year: '2026',
    detail:
      'Hands-on cloud engineering covering Amazon EC2, S3, RDS database instances, IAM security policies, VPC networking, and CloudWatch telemetry.',
    badge: 'AWS Cloud',
  },
  {
    title: 'Career Essentials in Generative AI',
    issuer: 'Microsoft and LinkedIn',
    year: '2026',
    detail:
      'Covers foundational large language model mechanics, ethical AI governance, responsible deployment, and generative productivity tools.',
    badge: 'Microsoft Certified',
    file: '/certification/microsoft and linkdin.jpg',
  },
  {
    title: 'Infosys Springboard Advanced Track Certifications',
    issuer: 'Infosys Springboard',
    year: '2025–2026',
    detail:
      'Certified in Introduction to Machine Learning & AI, Natural Language Processing using Python, Deep Learning for Developers, and Database Management Systems.',
    badge: 'Infosys Tracks',
  },
]
