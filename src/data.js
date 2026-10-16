// All the content of the site lives here. Edit this file to change text, links and numbers.

export const PROFILE = {
  name: 'Abhishek Kumar',
  email: 'aksinghbgp1230@gmail.com',
  location: 'Greater Noida, India',
  resume: '/Abhishek_Kumar_Resume.pdf',
  links: {
    github: 'https://github.com/Abhishekkumar071',
    linkedin: 'https://www.linkedin.com/in/abhishek-kumar-416134301/',
    leetcode: 'https://leetcode.com/u/Abhishek670/',
    codeforces: 'https://codeforces.com/profile/abhishek_670',
    gfg: 'https://www.geeksforgeeks.org/profile/abhishek670',
  },
}

// Web3Forms keys are meant to be public (they only allow sending mail to your own inbox).
export const WEB3FORMS_KEY = '79415c8b-52e7-4db6-bad7-fc1045db404a'

export const RATINGS = [
  {
    name: 'LeetCode',
    detail: 'Contest rating, top 9.68% of players worldwide',
    result: '1758',
    href: PROFILE.links.leetcode,
  },
  {
    name: 'Codeforces',
    detail: 'Highest contest rating (Specialist)',
    result: '1494',
    href: PROFILE.links.codeforces,
  },
  {
    name: 'IICPC CodeFest 2026',
    detail: 'Global Prelims, out of 13,000+ participants',
    result: 'Rank 3545',
  },
  {
    name: 'Practice',
    detail: 'Problems solved on LeetCode, Codeforces and GeeksforGeeks: trees, graphs, DP, greedy',
    result: '1000+',
    href: PROFILE.links.gfg,
  },
]

export const PROJECTS = [
  {
    id: 'talentpilot',
    date: '2026',
    title: 'TalentPilot',
    sub: 'Hiring automation that stops and asks HR before it acts',
    result: '4 HR approval gates',
    summary:
      'HR teams spend days writing job posts, sorting resumes, running tests and drafting offers. TalentPilot runs that whole path, from “Hire a backend engineer” to an offer letter, and pauses for a person at every decision that matters.',
    points: [
      'The workflows are built with LangGraph and checkpointed in PostgreSQL, so a hiring run can wait days for HR or a candidate, survive a restart, and retry only the step that failed.',
      'Resumes are anonymised, then scored: LLM rubric 45%, must-have skills 25%, semantic similarity 15%, experience fit 15%.',
      'Job descriptions and offers follow company policy through RAG (BM25 and embeddings merged with Reciprocal Rank Fusion). Offer pay is clamped to the approved salary band.',
      'Candidates sit a proctored coding test in the browser with MediaPipe. Integrity flags go to HR as evidence and never reject anyone automatically.',
    ],
    stack: 'Python, FastAPI, LangGraph, LangChain, Pydantic, React, MediaPipe, PostgreSQL',
    links: [{ label: 'View code', href: 'https://github.com/Abhishekkumar071/TalentPilot' }],
    flow: true,
  },
  {
    id: 'bank',
    date: '2026',
    title: 'Secure Bank and Payment System',
    sub: 'Transfers that finish completely or not at all',
    result: 'ACID, no double charges',
    summary:
      'A transfer has to finish completely or not happen at all, and a retried request must never charge a customer twice.',
    points: [
      'Fund transfers run inside ACID transactions, so money is never left half-moved.',
      'Retries are made safe with idempotency: a database constraint on the request key stops duplicate charges. The demo at the top of this page shows the same idea.',
      'Passwords are hashed with BCrypt, and concurrency control guards against race conditions on the same account.',
      'Hibernate N+1 query problems are fixed with JOIN FETCH, which speeds up the queries used most.',
    ],
    stack: 'Java, Spring Boot, PostgreSQL, Hibernate',
    links: [
      {
        label: 'View code',
        href: 'https://github.com/Abhishekkumar071/Secure-Bank-management-and-payment-processing-System',
      },
    ],
    image: '/bank_management.png',
    imageAlt: 'Login page of the bank application with account number and password fields',
  },
  {
    id: 'chatlens',
    date: '2026',
    title: 'ChatLens',
    sub: 'Turns messy chat exports into a readable dashboard',
    result: '50K+ messages',
    summary:
      'Every chat app formats dates differently, and exported files are often broken. ChatLens cleans them up and shows who talks, when, and about what.',
    points: [
      'A Python pipeline parses WhatsApp and Telegram exports, handling several date formats and malformed files.',
      'The dashboard adds NLP text analysis and activity heatmaps, and uses caching to stay fast on 50K+ messages.',
      'pytest tests and GitHub Actions CI/CD run the tests, build the Docker image and deploy on every push.',
    ],
    stack: 'Python, Pandas, NLTK, Streamlit, Docker, GitHub Actions',
    links: [
      { label: 'View code', href: 'https://github.com/Abhishekkumar071/ChatLens' },
      { label: 'Live demo', href: 'https://chatlens-demo.streamlit.app' },
    ],
  },
  {
    id: 'warpurl',
    date: '2026',
    title: 'WarpURL',
    sub: 'URL shortener with click analytics',
    result: 'Base62 short keys',
    summary:
      'Short links need unique keys that never collide, fast lookups, and a way to see how often each link is used.',
    points: [
      'Base62 encoding generates short, unique keys without collisions.',
      'A database index on the short URL keeps lookups fast, and click tracking feeds usage analytics.',
      'Deployed end to end: Dockerised Spring Boot API, React front end on Vercel, and NeonDB (PostgreSQL) in the cloud.',
    ],
    stack: 'Spring Boot, React, PostgreSQL, Docker',
    links: [],
  },
  {
    id: 'insurai',
    date: 'Oct–Dec 2025',
    title: 'InsurAI',
    sub: 'Insurance platform built during the Infosys Springboard internship',
    result: '50+ REST APIs',
    summary:
      'Buying insurance meant paperwork and waiting. InsurAI lets customers find a plan, apply and track their application online, while admins manage policies.',
    points: [
      'Spring Boot and MySQL backend with 50+ REST APIs, secured with JWT and role-based access control for users and admins.',
      'An AI chatbot answers customer questions, and a recommendation system suggests policies.',
      'Backend tests use JUnit 5 and Mockito, and API behaviour was checked with Postman.',
      'The Spring Boot backend runs on AWS EC2 and the React front end on Amazon S3.',
    ],
    stack: 'Java, Spring Boot, MySQL, React, JWT, AWS',
    links: [{ label: 'View code', href: 'https://github.com/Abhishekkumar071/InsurAI' }],
    image: '/InsurAI.png',
    imageAlt: 'InsurAI home page with a search bar for insurance plans',
  },
  {
    id: 'docqa',
    date: '2024',
    title: 'Document Q&A Engine',
    sub: 'Answers questions from the PDF you upload',
    result: 'RAG over PDFs',
    summary:
      'Language models invent answers when they do not know. This engine finds the relevant passages in your PDF first and answers from those.',
    points: [
      'Documents are parsed and chunked, turned into embeddings, and searched by meaning so the model answers from retrieved text.',
      'A FastAPI backend with SQLAlchemy stores chat history, so follow-up questions keep their context.',
      'The Streamlit app lets you upload a PDF, ask questions and generate a summary.',
    ],
    stack: 'Python, FastAPI, LangChain, ChromaDB, Groq (Llama 3.3), Streamlit',
    links: [{ label: 'View code', href: 'https://github.com/Abhishekkumar071/document-qa-engine' }],
    image: '/doc_qa.png',
    imageAlt: 'Document Q&A Engine interface with a PDF uploaded and a question typed in',
  },
  {
    id: 'moodvision',
    date: '2023',
    title: 'MoodVision',
    sub: 'Reads facial expressions from a live webcam',
    result: '63% on FER2013',
    summary: 'A convolutional neural network that labels the emotion on a face in real time.',
    points: [
      'Trained on FER2013, about 32,300 images across 7 emotions, reaching a peak accuracy of 63%.',
      'OpenCV and Haar cascade classifiers find faces in the webcam feed so the model can predict live.',
    ],
    stack: 'Python, CNNs, TensorFlow, OpenCV',
    links: [{ label: 'View code', href: 'https://github.com/Abhishekkumar071/MoodVision' }],
    image: '/moodVission.png',
    imageAlt: 'Four smiling people with green boxes and a Happy label on each face',
  },
]

// Steps of the TalentPilot workflow. `gate` means the workflow pauses for a person.
export const FLOW = [
  {
    short: 'Request',
    title: 'HR types a request',
    text: '“Hire a backend engineer, 3 to 5 years.” The system turns that sentence into a structured hiring request.',
  },
  {
    short: 'Job description',
    title: 'Write the job description',
    text: 'Agents search company policy, salary bands and past postings (RAG) and draft a policy-compliant description with citations.',
    gate: 'HR approves it, asks the AI for changes, or edits it.',
  },
  {
    short: 'Post',
    title: 'Post the job',
    text: 'The job goes live on the careers site and a Telegram channel. LinkedIn and Naukri get ready-to-post content, because their posting APIs are partner-only.',
  },
  {
    short: 'Replan',
    title: 'Check the deadline and replan',
    text: 'When the window closes, the workflow checks the pipeline. If too few qualified people applied, it works out why and proposes a rewrite, such as widening the role or allowing remote work.',
    gate: 'HR approves the replan before anything is reposted.',
  },
  {
    short: 'Screen',
    title: 'Screen resumes',
    text: 'Names and contact details are removed, then each resume gets a score from four parts: LLM rubric 45%, must-have skills 25%, semantic similarity 15%, experience fit 15%. Top candidates are shortlisted and the rest are waitlisted.',
  },
  {
    short: 'Test',
    title: 'Proctored assessment',
    text: 'Multiple-choice questions and a Python coding problem run in the browser. MediaPipe watches for a missing face, extra people, a phone or tab switching. Flags are evidence for HR, never an automatic rejection.',
  },
  {
    short: 'Interview',
    title: 'AI voice interview',
    text: 'An adaptive interview using speech in the browser, followed by a rubric-based evaluation.',
  },
  {
    short: 'Decision',
    title: 'Final report',
    text: 'Resume, test, integrity signals and interview are combined into one recommendation.',
    gate: 'HR approves or rejects the candidate.',
  },
  {
    short: 'Offer',
    title: 'Offer letter',
    text: 'The offer is checked against the approved salary band and exported as a PDF.',
    gate: 'HR edits and approves it before it is sent.',
  },
]

export const EXPERIENCE = [
  {
    date: 'Oct–Dec 2025',
    title: 'Java Full Stack Developer Intern',
    sub: 'Infosys Springboard Virtual Internship 6.0',
    body: 'Built InsurAI end to end: Spring Boot and MySQL backend, React front end, JWT with role-based access, tests with JUnit 5 and Mockito, deployed on AWS EC2 and S3.',
    result: '50+ APIs',
  },
  {
    date: '2023–2027',
    title: 'B.Tech, Computer Science and Engineering (AI & ML)',
    sub: 'Noida Institute of Engineering and Technology, Greater Noida',
    result: 'CGPA 8.9',
  },
  {
    date: 'Campus',
    title: 'IEEE Membership Chair',
    sub: 'NIET IEEE chapter',
    body: 'Led student engagement and organised technical events.',
  },
  {
    date: 'Campus',
    title: 'NEST For Coders',
    sub: 'Coding group at NIET',
    body: 'Selected as one of the top 29 students for a group built around problem solving and peer learning.',
    result: 'Top 29',
  },
  {
    date: 'Certificates',
    title: 'Infosys Springboard',
    sub: 'Introduction to Machine Learning and AI, JavaScript Essentials, Natural Language Processing using Python, ReactJS',
  },
]

export const STACK = [
  { label: 'Languages', items: 'Java, Python, SQL, C, JavaScript' },
  { label: 'Backend', items: 'Spring Boot, FastAPI, REST APIs, JWT and RBAC, Node.js, Express.js' },
  { label: 'AI', items: 'LangGraph, LangChain, RAG, structured LLM output (Pydantic), vector databases, NLP, CNNs' },
  { label: 'Databases', items: 'PostgreSQL, MySQL, MongoDB' },
  { label: 'Frontend', items: 'React, HTML, CSS' },
  { label: 'Cloud and tools', items: 'Docker, AWS (EC2, S3), Git, GitHub Actions, Postman, JUnit 5, Mockito, pytest' },
  { label: 'Learning now', items: 'System design, distributed systems, Kubernetes' },
]
