export interface Project {
  id: string
  title: string
  subtitle: string
  category: 'AI & ML' | 'Systems & Core' | 'Database & Apps'
  description: string
  highlights: string[]
  metrics: string
  tech: string[]
  githubUrl: string
  status: 'Completed' | 'In Active Research' | 'Prototype'
  year: string
}

export interface SkillCategory {
  title: string
  subtitle: string
  iconName: string
  items: { name: string; level: string; tag: string }[]
}

export const profile = {
  name: 'NITHTHEESH',
  fullName: 'Sritharan Niththeesh',
  role: 'Aspiring AI Engineer & Computing Professional',
  headline: 'Engineering Intelligence. Solving Hard Problems.',
  bio: 'Computing student focused on AI engineering, neural architectures, data pipelines, and intelligent software systems. Grounded in computational foundations, driven by real-world impact.',
  email: 'Mail.Nithu15@gmail.com',
  phone: '+94 78 633 1631',
  location: 'Trincomalee, Sri Lanka',
  github: 'https://github.com/Niththeesh',
  linkedin: 'https://www.linkedin.com/in/niththeesh/',
  status: 'Open for AI Internships & Collaborative Projects',
}

export const navItems = [
  { label: 'Overview', href: '#home' },
  { label: 'Systems & Work', href: '#projects' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Terminal', href: '#terminal' },
  { label: 'Academic Path', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

export const projects: Project[] = [
  {
    id: 'vision-assist',
    title: 'VisionAssist AI',
    subtitle: 'Edge-Optimized Spatial Perception & Object Segmentation',
    category: 'AI & ML',
    description:
      'Low-latency edge computer vision pipeline designed for assistive navigation and environmental awareness. Implements real-time bounding, distance estimation, and spatial acoustic feedback.',
    highlights: [
      'Engineered with PyTorch & YOLOv8 distilled for constrained edge hardware',
      'Achieved 42+ FPS inference throughput on CPU/Edge accelerators',
      'Implemented spatial orientation audio cues based on relative object bounding depth'
    ],
    metrics: '42+ FPS · 92.8% mAP50 · <24ms Latency',
    tech: ['Python', 'PyTorch', 'YOLOv8', 'OpenCV', 'NumPy'],
    githubUrl: 'https://github.com/Niththeesh',
    status: 'In Active Research',
    year: '2025'
  },
  {
    id: 'neural-rag',
    title: 'DocuQuery Neural RAG',
    subtitle: 'Local Vector Retrieval & Technical Synthesis Engine',
    category: 'AI & ML',
    description:
      'Privacy-first Retrieval-Augmented Generation system that digests complex technical documentation and codebases into vector embeddings with hybrid semantic search and strict citation tracking.',
    highlights: [
      'Chunking engine with recursive AST boundary preservation for code snippets',
      'Dense embeddings via Sentence-Transformers with ChromaDB vector store',
      'Custom re-ranking heuristic reducing hallucination rates by over 38%'
    ],
    metrics: '<65ms Vector Query · Zero Cloud Leakage · Semantic Re-ranking',
    tech: ['Python', 'ChromaDB', 'Sentence-Transformers', 'FastAPI', 'LangChain'],
    githubUrl: 'https://github.com/Niththeesh',
    status: 'Completed',
    year: '2025'
  },
  {
    id: 'task-sync',
    title: 'TaskSync Concurrent Engine',
    subtitle: 'Lock-Free Multi-Threaded Task Dispatcher in C++',
    category: 'Systems & Core',
    description:
      'A high-throughput multi-threaded work-stealing task execution engine written in modern C++. Built to understand hardware concurrency, cache lines, and operating system scheduling.',
    highlights: [
      'Lock-free single-producer multi-consumer work-stealing deque implementation',
      'Configurable worker thread-pool with NUMA-aware core pinning heuristics',
      'Benchmarked at over 140,000 scheduled operations per second with microsecond jitter'
    ],
    metrics: '140k ops/sec · Microsecond Jitter · Lock-Free Deque',
    tech: ['C++', 'POSIX Threads', 'Modern C++20', 'CMake', 'Valgrind'],
    githubUrl: 'https://github.com/Niththeesh',
    status: 'Completed',
    year: '2024'
  },
  {
    id: 'educore-enterprise',
    title: 'EduCore Campus Portal',
    subtitle: 'Enterprise Relational Academic & Records Management',
    category: 'Database & Apps',
    description:
      'Comprehensive educational administration platform built during Higher National Diploma studies. Features strict relational schema integrity, role-based access control, and transaction safety.',
    highlights: [
      'Normalized relational schema with stored procedures and ACID transactions in MS SQL',
      'Tiered security model separating student records, faculty grading, and administration audits',
      'Responsive data tables with fast indexing and parameterized query security'
    ],
    metrics: '3NF Database Normalization · RBAC Security · Full Transaction Safety',
    tech: ['C#', '.NET Core', 'Microsoft SQL Server', 'LINQ', 'HTML/CSS'],
    githubUrl: 'https://github.com/Niththeesh',
    status: 'Completed',
    year: '2024'
  }
]

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    subtitle: 'Core algorithmic and systems languages',
    iconName: 'code',
    items: [
      { name: 'Python', level: 'Advanced / Core', tag: 'AI & Data Pipelines' },
      { name: 'C++', level: 'Intermediate', tag: 'Systems & Performance' },
      { name: 'JavaScript / TypeScript', level: 'Intermediate', tag: 'Web & UI Applications' },
      { name: 'C#', level: 'Intermediate', tag: '.NET Applications & Logic' },
      { name: 'SQL', level: 'Proficient', tag: 'Relational Queries & Schemas' }
    ]
  },
  {
    title: 'AI, ML & Data Engineering',
    subtitle: 'Neural toolkits, vectors, and computer vision',
    iconName: 'brain',
    items: [
      { name: 'PyTorch & Neural Networks', level: 'Active Practice', tag: 'Model Training & Inference' },
      { name: 'OpenCV & Computer Vision', level: 'Proficient', tag: 'Image Processing & Filters' },
      { name: 'Vector Databases (ChromaDB)', level: 'Intermediate', tag: 'RAG & Embeddings' },
      { name: 'NumPy & Pandas', level: 'Advanced', tag: 'Matrix Math & Data Wrangling' },
      { name: 'Hugging Face / LLMs', level: 'Intermediate', tag: 'Transformers & Fine-Tuning' }
    ]
  },
  {
    title: 'Developer Environments & Tools',
    subtitle: 'Modern engineering workflows and tooling',
    iconName: 'terminal',
    items: [
      { name: 'Linux / Bash Terminal', level: 'Daily Environment', tag: 'Shell Scripting & Workflows' },
      { name: 'Git & GitHub', level: 'Proficient', tag: 'Version Control & CI/CD' },
      { name: 'Visual Studio & VS Code', level: 'Primary IDEs', tag: 'Profiling & Debugging' },
      { name: 'Antigravity IDE & AI Agents', level: 'Advanced Tooling', tag: 'Agentic Pair Programming' },
      { name: 'Windows Administration', level: 'Proficient', tag: 'OS Configuration & Storage' }
    ]
  },
  {
    title: 'Systems & Professional Discipline',
    subtitle: 'Execution quality, ethics, and team delivery',
    iconName: 'shield',
    items: [
      { name: 'Data Management & Integrity', level: 'Certified', tag: 'Record Keeping & Verification' },
      { name: 'Systematic Problem Solving', level: 'Core Habit', tag: 'Algorithmic Decomposition' },
      { name: 'Technical Communication', level: 'High Craft', tag: 'Documentation & Architecture' },
      { name: 'Security & Confidentiality', level: 'Strict Ethic', tag: 'Safe Data Handling' },
      { name: 'Continuous Learning Speed', level: 'High', tag: 'Rapid Tech Stack Adoption' }
    ]
  }
]

export const education = [
  {
    period: 'September 2024 – June 2026',
    degree: 'Higher National Diploma (HND) in Computing',
    institution: 'Esoft Metro Campus (Pearson BTEC)',
    status: 'Currently Enrolled · High Distinction Track',
    description:
      'Rigorous computational curriculum covering database systems, object-oriented programming, data structures, network security, software engineering lifecycle, and applied computing projects.',
    highlights: [
      'Comprehensive software engineering methodology & UML design',
      'Relational database architecture, normalization, and SQL transaction handling',
      'Practical computing labs focused on problem-solving and software testing'
    ]
  },
  {
    period: 'Planned 2027 – 2029',
    degree: 'Bachelor of AI Engineering',
    institution: 'University of Technology Sydney (UTS)',
    status: 'Planned Academic Progression',
    description:
      'Forward-looking degree pathway focused on advanced artificial intelligence systems, neural architecture design, autonomous agents, and ethical AI deployment.',
    highlights: [
      'Deep learning, reinforcement learning, and autonomous robotics',
      'Large-scale distributed systems and high-performance computing',
      'Mathematics of machine learning: linear algebra, calculus, and stochastic processes'
    ]
  }
]

export const certifications = [
  {
    title: 'Python Developer Certificate',
    issuer: 'HackerRank',
    credentialId: '0d190e12c06d',
    issueDate: 'Verified',
    href: 'https://www.hackerrank.com/certificates/0d190e12c06d',
    skills: ['Python 3', 'Object-Oriented Design', 'Algorithmic Problem Solving']
  },
  {
    title: 'Introduction to SQL Certificate',
    issuer: 'HackerRank',
    credentialId: '5f48e7eba1e6',
    issueDate: 'Verified',
    href: 'https://www.hackerrank.com/certificates/5f48e7eba1e6',
    skills: ['Relational Queries', 'Aggregations', 'Join Optimizations', 'Subqueries']
  },
  {
    title: 'Python Intermediate Certificate',
    issuer: 'HackerRank',
    credentialId: '0f35f79dfd4b',
    issueDate: 'Verified',
    href: 'https://www.hackerrank.com/certificates/0f35f79dfd4b',
    skills: ['Advanced Data Structures', 'Generators & Closures', 'Exception Architecture']
  }
]

export const terminalCommands: Record<string, string> = {
  help: 'Available commands: about, skills, projects, certs, education, contact, status, clear',
  about: `NITHTHEESH — Aspiring AI Engineer
Based in Trincomalee, Sri Lanka.
Currently completing HND in Computing, preparing for Bachelor of AI Engineering at UTS.
Specialized in Python, Computer Vision, C++, and Neural Systems.`,
  skills: `Core Languages: Python (Advanced), C++, JavaScript/TS, C#, SQL
AI / ML Tooling: PyTorch, OpenCV, ChromaDB, Sentence-Transformers
Systems & Tools: Linux, Git, Antigravity IDE, Visual Studio, VS Code`,
  projects: `1. VisionAssist AI — Real-time spatial perception & obstacle guidance (Python/YOLOv8)
2. DocuQuery RAG — Local semantic vector retrieval engine (FastAPI/ChromaDB)
3. TaskSync Engine — Lock-free work-stealing job dispatcher (Modern C++)
4. EduCore Portal — Enterprise educational records & schema management (C#/.NET/SQL)`,
  certs: `Verified Credentials:
• HackerRank Python Developer (ID: 0d190e12c06d)
• HackerRank Python Intermediate (ID: 0f35f79dfd4b)
• HackerRank SQL Introduction (ID: 5f48e7eba1e6)`,
  education: `• HND in Computing (Esoft Metro Campus / Pearson BTEC) | 2024-2026
• Bachelor of AI Engineering (UTS - Planned) | 2027-2029`,
  status: `STATUS: Active & Available for AI Engineering internships, research, and technical collaboration.`,
  contact: `Email: Mail.Nithu15@gmail.com
GitHub: https://github.com/Niththeesh
LinkedIn: https://www.linkedin.com/in/niththeesh/`
}
