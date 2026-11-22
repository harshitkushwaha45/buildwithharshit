export const BRAND = {
  name: "BuildWithHarshit",
  domain: "buildwithharshit.online",
  secondaryDomain: "buildwithharshit.info",
  owner: "Harshit Kushwaha",
  role: "Full-Stack Developer | MERN Stack Developer | AI Solutions Developer",
  shortRole: "Full-Stack & AI Developer",
  tagline: "Turning Ideas Into Powerful Digital Experiences.",
  description:
    "I'm Harshit Kushwaha, an independent Full-Stack Developer specializing in MERN Stack Development, custom web applications, and AI integrations. I help startups, entrepreneurs, and businesses transform their ideas into functional, scalable, and production-ready digital products with direct communication and clean code.",
  location: "India",
  workMode: "Remote / Worldwide",
  availability: "Open to Select Freelance Projects",
  email: "mauryahaharshit@gmail.com",
  github: "https://github.com/harshitkushwaha45",
  linkedin: "https://www.linkedin.com/in/harshitkushwaha45",
  referenceSite: "https://www.harshitkushwaha.online/",
  whatsappNumber: "", // Populated via VITE_WHATSAPP_NUMBER if provided
};

export const SERVICES = [
  {
    id: "full-stack",
    title: "Full-Stack Web Development",
    shortTitle: "Full-Stack Development",
    outcomeSummary: "Complete web applications and MVPs ready to onboard users.",
    description:
      "End-to-end web application development using the MERN stack (MongoDB, Express, React, Node.js). From initial database schema design to responsive user interfaces, secure user authentication, and production cloud hosting.",
    features: [
      "Custom SaaS & Business Web Applications",
      "Full MERN Stack Architecture",
      "Secure User Authentication & Session Control",
      "Database Modeling & REST API Integration",
      "Production Deployment on Vercel & Render",
    ],
    clientReceives: "A fully functioning, production-deployed web application with clean source code, database setup, and documentation.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    icon: "Layers",
  },
  {
    id: "ai-solutions",
    title: "AI-Powered Applications",
    shortTitle: "AI Integration",
    outcomeSummary: "Practical AI capabilities that automate tasks and add intelligent features.",
    description:
      "Integrating modern AI and LLM capabilities into web applications. Whether you need conversational AI chatbots, automated document processing, Knowledge Graph retrieval (Graph-RAG), or custom agent workflows.",
    features: [
      "Gemini API & LLM Integrations",
      "Graph-RAG & Knowledge Retrieval Systems",
      "Context-Aware Conversational Chatbots",
      "Automated Document & Resume Analysis",
      "Multi-Agent Workflow Pipelines",
    ],
    clientReceives: "Intelligent software features integrated into your web app with optimized prompt pipelines and reliable API handling.",
    technologies: ["Gemini API", "Python", "Graph-RAG", "TensorFlow.js", "Neo4j"],
    icon: "Sparkles",
  },
  {
    id: "frontend",
    title: "High-Performance Frontend",
    shortTitle: "Frontend Development",
    outcomeSummary: "Fast, responsive web interfaces that turn visitors into customers.",
    description:
      "Building clean, modern, and user-friendly web interfaces using React.js and Tailwind CSS. Focused on mobile-first responsiveness, smooth interactive elements, accessibility, and high performance.",
    features: [
      "React.js & Next.js Interface Development",
      "Responsive, Mobile-First Websites",
      "Custom Admin Dashboards & Analytics Portals",
      "Framer Motion Micro-Interactions",
      "Speed & Core Web Vitals Optimization",
    ],
    clientReceives: "A pixel-perfect, responsive frontend codebase that loads quickly on all devices and integrates seamlessly with any backend.",
    technologies: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion", "JavaScript ES6+"],
    icon: "Layout",
  },
  {
    id: "backend",
    title: "Scalable Backend & APIs",
    shortTitle: "Backend Development",
    outcomeSummary: "Reliable, secure server infrastructure that keeps your app running smoothly.",
    description:
      "Developing robust backend systems, RESTful APIs, and database structures using Node.js, Express.js, and MongoDB/MySQL. Built for security, low latency, and real-time data handling.",
    features: [
      "Node.js & Express.js REST APIs",
      "Real-Time WebSockets via Socket.IO",
      "MongoDB & MySQL Database Design",
      "JWT Authentication & Role-Based Access Control",
      "Third-Party API & Cloudinary Media Integrations",
    ],
    clientReceives: "A modular backend API with secure endpoints, structured database schemas, and clear API documentation.",
    technologies: ["Node.js", "Express.js", "Socket.IO", "MongoDB", "PostgreSQL"],
    icon: "Database",
  },
];

export const PROJECTS = [
  {
    id: "chatapp",
    title: "Real-Time Chat Application",
    badge: "MERN Stack • WebSockets",
    category: "Full-Stack Web Application",
    problemSolved:
      "Businesses and community platforms require instant, reliable messaging without the latency or battery drain of frequent HTTP polling.",
    description:
      "A full-stack messaging application engineered for real-time communication. Features sub-50ms message delivery via WebSockets, persistent user authentication, online/offline presence tracking, and cloud image sharing.",
    features: [
      "Real-time bidirectional messaging powered by Socket.IO",
      "Online/offline user presence tracking with heartbeats",
      "Live typing indicators & instantaneous notifications",
      "JWT token authentication with secure session persistence",
      "Cloudinary media integration for profile & image attachments",
      "RESTful API architecture for persistent chat histories & user management",
    ],
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "JWT",
      "Cloudinary",
    ],
    github: "https://github.com/harshitkushwaha45/CHATAPP.git",
    liveDemo: "https://chatapp-hazel-psi.vercel.app/",
    stats: {
      type: "Real-Time WebSockets",
      latency: "< 50ms Socket IO",
      storage: "MongoDB Atlas",
    },
    uiPreview: {
      tag: "Live Socket Architecture",
      accent: "#10B981",
    },
  },
  {
    id: "mock-interview",
    title: "AI-Powered Mock Interview Platform",
    badge: "Computer Vision & ML",
    category: "AI Web Application",
    problemSolved:
      "Job seekers struggle to get objective, immediate feedback on their interview answers, non-verbal cues, and communication delivery before real interviews.",
    description:
      "An intelligent interview preparation platform that enables candidates to practice role-specific technical and behavioral interviews, analyze non-verbal expressions via client-side computer vision, and track preparation progress over time.",
    features: [
      "Dynamic interview question generation tailored by target job role",
      "Real-time facial expression and sentiment telemetry via TensorFlow.js",
      "Candidate session management with persistent answer tracking",
      "Automated resume parsing with skill-to-question alignment",
      "Algorithmic simulated scoring matrix and rubric evaluation",
      "Interactive candidate performance dashboard with Chart.js analytics",
    ],
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "TensorFlow.js",
      "face-api.js",
      "Chart.js",
    ],
    github: "https://github.com/harshitkushwaha45/AI_MOCK_INTERVIEW_PLATFORM.git",
    liveDemo: "https://ai-mock-interview-platform-1-ofb2.onrender.com/",
    transparencyNote:
      "Architecture Disclosure: Current answer feedback utilizes an algorithmic scoring model and client-side computer vision telemetry rather than a production LLM engine.",
    stats: {
      engine: "TensorFlow.js ML",
      vision: "Real-time face-api",
      analytics: "Chart.js Visualizer",
    },
    uiPreview: {
      tag: "Vision & Audio Telemetry",
      accent: "#38BDF8",
    },
  },
  {
    id: "researchmind",
    title: "ResearchMind — AI-Powered Multi-Agent Research Assistant",
    badge: "Multi-Agent System • Graph-RAG",
    category: "Advanced AI Platform",
    problemSolved:
      "Researchers and technical analysts face information overload across thousands of academic publications, making it difficult to spot historical research gaps and synthesize evidence-grounded hypotheses.",
    description:
      "An advanced research discovery platform that coordinates six autonomous AI agents with a Neo4j Temporal Citation Graph and Graph-RAG architecture to systematically parse scientific literature, identify critical research gaps, and formulate evidence-based hypotheses.",
    features: [
      "Six cooperating AI agents orchestrating literature workflows",
      "Automated research paper ingestion, parsing & classification",
      "Temporal Citation Knowledge Graph for historical trend detection",
      "Graph-RAG architecture for deep context-grounded retrieval",
      "R-GCN relational link prediction for undiscovered connections",
      "Automated research gap identification & hypothesis ranking",
    ],
    technologies: [
      "React",
      "Node.js",
      "Python",
      "PyTorch",
      "Neo4j",
      "MongoDB",
      "Graph-RAG",
      "Gemini API",
    ],
    github:
      "https://github.com/harshitkushwaha45/-AAI-Powered-Multi-Agent-Research-Assistant-for-Literature-Review-and-Research-Gap-Identification.git",
    liveDemo: "https://aai-powered-multi-agent-research-as.vercel.app/",
    stats: {
      type: "6 Autonomous Agents",
      graph: "Neo4j Knowledge Graph",
      llm: "Gemini API + Graph-RAG",
    },
    uiPreview: {
      tag: "Knowledge Graph + RAG",
      accent: "#A78BFA",
    },
  },
];

export const TECH_CATEGORIES = [
  {
    category: "Frontend Development",
    description: "Responsive, accessible, and high-performance client interfaces",
    skills: [
      { name: "React.js", level: "Core Frontend Library" },
      { name: "JavaScript (ES6+)", level: "Modern Web Standards" },
      { name: "Tailwind CSS", level: "Utility-First Design System" },
      { name: "HTML5 & CSS3", level: "Semantic Markup & Responsive UI" },
      { name: "Vite", level: "Fast Build & Bundling Tool" },
    ],
  },
  {
    category: "Backend Development",
    description: "Reliable servers, secure APIs, and real-time communication",
    skills: [
      { name: "Node.js", level: "Asynchronous JavaScript Runtime" },
      { name: "Express.js", level: "REST API Framework" },
      { name: "Socket.IO", level: "Real-Time WebSockets Protocol" },
      { name: "REST APIs", level: "Clean Endpoint Architecture" },
      { name: "JWT Authentication", level: "Secure Token-Based Auth" },
    ],
  },
  {
    category: "Databases & Storage",
    description: "Structured document, relational, and graph database systems",
    skills: [
      { name: "MongoDB & Mongoose", level: "NoSQL Document Database" },
      { name: "MySQL", level: "Relational Structured Storage" },
      { name: "Neo4j & Cypher", level: "Graph Knowledge Database" },
      { name: "Cloudinary", level: "Cloud Media & Asset Storage" },
    ],
  },
  {
    category: "AI & Machine Learning",
    description: "Practical AI integrations, LLM workflows, and computer vision",
    skills: [
      { name: "Python", level: "Data Processing & AI Scripting" },
      { name: "Gemini API", level: "Multimodal LLM Integration" },
      { name: "Graph-RAG", level: "Graph-Grounded Retrieval" },
      { name: "TensorFlow.js & face-api", level: "Client-Side Computer Vision" },
      { name: "PyTorch", level: "Neural Network Link Prediction" },
    ],
  },
  {
    category: "Cloud, DevOps & Hosting",
    description: "Cloud deployments, version control, and server environments",
    skills: [
      { name: "Vercel", level: "Frontend Edge Deployment" },
      { name: "Render", level: "Production Backend Hosting" },
      { name: "Git & GitHub", level: "Version Control & Collaboration" },
      { name: "Postman", level: "API Testing & Verification" },
      { name: "Linux & Bash", level: "Command-Line Administration" },
    ],
  },
  {
    category: "Architecture & Development Tools",
    description: "Modular design principles, code quality, and fast workflows",
    skills: [
      { name: "Clean Architecture", level: "Maintainable Modular Code" },
      { name: "Responsive Design", level: "Mobile-First UX Across Devices" },
      { name: "WebSockets Protocol", level: "Low-Latency Event Streaming" },
      { name: "NPM", level: "Package Management & Tooling" },
      { name: "Chrome DevTools", level: "Performance Profiling & QA" },
    ],
  },
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Discovery & Alignment",
    subtitle: "Understanding your vision & goals",
    description:
      "We discuss your product vision, target audience, essential features, and timeline. You receive a clear, honest scope summary and fixed milestone estimate with no surprises.",
    deliverables: ["Requirement Scope Summary", "Technical Feasibility Check", "Clear Milestone Estimate"],
  },
  {
    number: "02",
    title: "Architecture & Planning",
    subtitle: "System design & technology blueprint",
    description:
      "Before writing code, we map out the user flow, database structure, and milestone roadmap. You review and approve the blueprint so expectations are 100% aligned.",
    deliverables: ["Database & Schema Blueprint", "API & Feature Specification", "Agreed Delivery Roadmap"],
  },
  {
    number: "03",
    title: "Iterative Engineering",
    subtitle: "Agile sprints & staging previews",
    description:
      "I develop your application in focused milestones with direct, regular communication. You receive live preview links to test features firsthand and provide timely feedback.",
    deliverables: ["Clean Modular Codebase", "Live Staging Previews", "Weekly Progress Check-ins"],
  },
  {
    number: "04",
    title: "Deployment & Handover",
    subtitle: "Production launch & documentation",
    description:
      "Your finished application is deployed to production cloud platforms and connected to your custom domain. You receive full source code access, documentation, and agreed handover support.",
    deliverables: ["Production Cloud Deployment", "Complete Code & Repo Handover", "Post-Launch Handover Support"],
  },
];

export const VALUE_PROPOSITIONS = [
  {
    title: "Direct Developer Access",
    description:
      "You communicate directly with the engineer writing your code. Zero account managers, no middleman delays, and complete alignment from start to finish.",
    icon: "MessageSquare",
  },
  {
    title: "Modern Technology Stack",
    description:
      "Built with industry-standard, production-proven tools (React, Node.js, MongoDB, Tailwind) for fast load times, reliability, and smooth scalability.",
    icon: "Cpu",
  },
  {
    title: "Responsive & Intuitive UI",
    description:
      "Every interface is built mobile-first and carefully tested across smartphones, tablets, and desktops for clean, user-friendly navigation.",
    icon: "Smartphone",
  },
  {
    title: "Clean, Maintainable Code",
    description:
      "Structured, well-documented code following modern best practices, making future updates easy for your team or any future developer.",
    icon: "Code",
  },
  {
    title: "Transparent Communication",
    description:
      "Honest timelines, clear milestone breakdowns, and frequent staging links so you always know exactly where your project stands.",
    icon: "CheckCircle",
  },
  {
    title: "Business-First Focus",
    description:
      "Focused on solving real problems and delivering practical software that achieves your business goals, without unnecessary complexity.",
    icon: "TrendingUp",
  },
];

export const FAQS = [
  {
    question: "What types of projects do you accept?",
    answer:
      "I specialize in end-to-end MERN stack web applications, interactive React frontends, Node.js REST API backends, and AI integrations (such as LLM chatbots, document analysis, and AI workflows). Whether you are a startup needing an MVP or an established business seeking feature upgrades, I can help.",
  },
  {
    question: "How do we handle communication and updates?",
    answer:
      "We communicate directly via Email, LinkedIn, Slack, or Google Meet. During active development, you receive regular milestone updates and live preview links so you can track progress every step of the way.",
  },
  {
    question: "What is your typical turnaround time?",
    answer:
      "Project timelines depend on complexity. A modern landing page or frontend interface usually takes 4–10 days. A full-stack MVP or custom AI-integrated application typically takes 2–4 weeks. We agree on fixed milestones before starting.",
  },
  {
    question: "Do you provide post-launch support?",
    answer:
      "Yes. Every completed project includes a handover period with bug-fix support and guidance to ensure everything runs smoothly on your production domains.",
  },
  {
    question: "How do payments and contracts work?",
    answer:
      "For most projects, work is divided into transparent milestones (e.g., 50% upfront deposit to initiate development, 50% upon final review and deployment). Invoices and clear scopes of work are provided.",
  },
];
