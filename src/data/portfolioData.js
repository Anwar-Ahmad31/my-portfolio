// ============================================================
// portfolioData.js — Centralized configuration for Anwar Ahmad's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

export const personalInfo = {
  name: "Anwar Ahmad",
  firstName: "Anwar",
  brandName: "Anwar Ahmad",
  title: "AI & Data Science Developer",
  location: "Bengaluru, India",
  phone: "+91 8581022040",
  emails: {
    primary: "anwar.ahmad1031@gmail.com",
    secondary: "anwar.ahmad1031@gmail.com",
  },
  summary:
    "Motivated Computer Science Engineering student with hands-on experience in Python, data analysis, and machine learning. Built 3 end-to-end ML/AI projects including a production-grade RAG system deployed live, a predictive classification model, and an AI-assisted recommendation platform. Currently learning Agentic AI.",
  resumeUrl: "/Anwar-Ahmad-Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/Anwar-Ahmad31",
  linkedin: "https://linkedin.com/in/Anwar-Ahmad31",
};

export const heroContent = {
  greeting: "Hi, I'm Anwar Ahmad",
  titleHighlight: "AI & Data Science Developer",
  subtitle:
    "Building intelligent solutions with Python, Machine Learning & Generative AI.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:anwar.ahmad1031@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello Anwar,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Anwar-Ahmad-Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Anwar Ahmad</span>, a Computer Science Engineering student currently in my 7th semester at IES College of Technology, Bhopal. I have hands-on experience building machine-learning and AI-focused projects using Python, data preprocessing, classification techniques, and retrieval-augmented generation. I am particularly interested in Data Science, Data Analytics, Python Development, and emerging AI technologies.`,
  techStack: ["Python", "Machine Learning", "RAG & LLMs"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into intelligent applications",
  description:
    "I follow a structured, data-driven approach to build machine learning and AI-powered solutions from concept to deployment.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "Understanding the problem domain, analyzing datasets, reviewing related research, and identifying the right ML approach and evaluation metrics.",
    },
    {
      number: "02",
      title: "Preprocess",
      text: "Data cleaning, feature engineering, normalization, handling missing values, and building robust preprocessing pipelines for reliable model training.",
    },
    {
      number: "03",
      title: "Build",
      text: "Developing models, training classifiers, implementing RAG pipelines, building APIs with FastAPI, and creating interactive frontends for real-time inference.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "Rigorous testing, performance benchmarking, and deploying to cloud platforms like Render for live production access.",
    },
  ],
  endText: "Ready to ship!",
};

// Technical Skills Data
export const technicalSkills = {
  categories: [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "SQL", level: 80 },
        { name: "HTML & CSS", level: 70 },
      ],
    },
    {
      title: "Data Science & ML",
      skills: [
        { name: "Pandas & NumPy", level: 90 },
        { name: "Matplotlib & Seaborn", level: 85 },
        { name: "Scikit-learn", level: 85 },
        { name: "Machine Learning Algorithms", level: 82 },
        { name: "Deep Learning", level: 70 },
      ],
    },
    {
      title: "Generative AI & NLP",
      skills: [
        { name: "Large Language Models (LLMs)", level: 80 },
        { name: "RAG-based AI Systems", level: 85 },
        { name: "Agentic AI", level: 55 },
      ],
    },
    {
      title: "Data & Analytics",
      skills: [
        { name: "Advanced Excel", level: 80 },
        { name: "Probability & Statistics", level: 78 },
        { name: "Data Preprocessing", level: 88 },
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git & GitHub", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "Conda / Jupyter", level: 85 },
        { name: "FastAPI", level: 78 },
        { name: "Render (Cloud)", level: 75 },
      ],
    },
    {
      title: "Computer Science Fundamentals",
      skills: [
        { name: "Data Structures", level: 80 },
        { name: "DBMS", level: 78 },
        { name: "OOP", level: 82 },
        { name: "Algorithms", level: 75 },
      ],
    },
  ],
};

// AI & Technical Innovation Section (replaces ContentCreator)
export const contentCreation = {
  badge: "Technical Innovation",
  heading: "AI Engineering & Intelligent Systems",
  description:
    "Beyond building models, I engineer end-to-end AI pipelines — from raw data ingestion and speech transcription to semantic search and production deployment.",
  categories: [
    {
      title: "RAG Pipelines",
      description:
        "Building retrieval-augmented generation systems with hybrid BM25 + vector search, phonetic normalization, and zero-hallucination guardrails.",
      stats: "2,800+ Chunks Indexed",
      icon: "🧠",
    },
    {
      title: "ML Classification",
      description:
        "Developing predictive models using clinical and real-world datasets with proper preprocessing, feature engineering, and evaluation pipelines.",
      stats: "14-Attribute Clinical Models",
      icon: "📊",
    },
    {
      title: "AI-Assisted Platforms",
      description:
        "Building intelligent recommendation and matching platforms that help users discover relevant opportunities based on skill-profile analysis.",
      stats: "Skill-Based Matching",
      icon: "🤖",
    },
    {
      title: "Cloud Deployment",
      description:
        "Deploying AI applications to production with FastAPI backends, interactive web frontends, and cloud infrastructure on Render.",
      stats: "Live Production Apps",
      icon: "☁️",
    },
  ],
};

// Leadership & Achievements Data
export const leadershipList = [
  {
    title: "TECH SAGEATHON 2K26 — National Level Hackathon",
    description:
      "Competed in TECH SAGEATHON 2K26 (7-8 May 2026), a national-level hackathon organized by Sagar Institute of Research and Technology, Bhopal in association with Cybrom Technology. Demonstrated collaborative AI modeling, rapid problem-solving, and leadership under competitive pressure.",
    role: "Hackathon Participant",
    badge: "National Level",
  },
  {
    title: "BGI Hackathon 2026 — Vision 2047 | Viksit Bharat",
    description:
      "Participated in BGI Hackathon 2026 (13-14 May 2026) by Bansal Group of Institutes, Bhopal, under the theme 'Agriculture, FoodTech & Rural Innovation'. A prestigious national platform bringing together 600+ teams and 2,800+ participants from across India.",
    role: "Hackathon Participant",
    badge: "600+ Teams · 2,800+ Innovators",
  },
];

// Internships Data (Anwar doesn't have formal internships yet — keep section but be honest)
export const internshipsList = [];

// Soft Skills Data
export const softSkillsList = [
  {
    name: "Analytical Thinking",
    icon: "🧠",
    desc: "Breaking down complex data problems into structured, logical steps for systematic ML solutions.",
  },
  {
    name: "Problem Solving",
    icon: "🧩",
    desc: "Debugging data pipelines, optimizing model performance, and resolving deployment challenges independently.",
  },
  {
    name: "Team Collaboration",
    icon: "🤝",
    desc: "Contributing to team projects with Git workflows, code reviews, and collaborative development practices.",
  },
  {
    name: "Technical Communication",
    icon: "💬",
    desc: "Explaining complex AI concepts clearly — from RAG architectures to classification model design decisions.",
  },
  {
    name: "Continuous Learning",
    icon: "📚",
    desc: "Constantly exploring new technologies — currently diving deep into Agentic AI and advanced LLM frameworks.",
  },
  {
    name: "Adaptability",
    icon: "🌟",
    desc: "Quickly picking up new frameworks and tools — from FastAPI to Groq Cloud to BM25 retrieval engines.",
  },
];

export const projects = [
  {
    id: "rag-search",
    number: "01",
    badge: "🚀 Flagship GenAI Project",
    title: "Topic Search System (RAG-based Video AI Engine)",
    description:
      "A production-grade Retrieval-Augmented Generation (RAG) platform deployed on Render indexing technical video lecture courses to provide context-grounded explanations with exact playback timestamps. Implements 1024-dimensional dense vector embeddings using BGE-M3 (BAAI/bge-m3) integrated with a 3-layer phonetic normalization engine to eliminate Whisper ASR transcription noise. Achieved a 100% retrieval pass rate (50/50 test questions) across 50 course modules, reducing topic discovery time from 15 minutes to under 2 seconds via Llama 3.3 (70B) on Groq Cloud LPU.",
    techTags: [
      "Python",
      "FastAPI",
      "Groq Cloud",
      "Llama 3.3 70B",
      "BGE-M3 Embeddings",
      "BM25 Okapi",
      "Whisper ASR",
      "RAG Pipeline",
      "Render",
    ],
    links: {
      github:
        "https://github.com/Anwar-Ahmad31/course-video-topic-search--RAG-",
      demo: "https://topic-search-system.onrender.com",
    },
    isFlagship: true,
  },
  {
    id: "internship-recommendation",
    number: "02",
    badge: "AI & Algorithm Lead",
    title: "InternshipHub: AI Recommendation & Resume Matching System",
    description:
      "Architected a mathematical Hybrid Recommendation Engine combining a 50/30/20 weighted formula (50% TF-IDF & Skill Cosine Similarity, 30% Domain/Role Alignment, 20% Engagement Signals) delivering 88%+ match relevance. Developed a multi-format resume parsing and feature extraction pipeline supporting PDF, DOCX, and TXT (extracting 13+ technical skills, degrees, and projects) with deterministic regex-based fallback matching for zero downtime against LLM API rate limits.",
    techTags: [
      "Python",
      "TF-IDF Vectorization",
      "Cosine Similarity",
      "OpenRouter LLMs",
      "Regex Tokenization",
      "Git",
      "GitHub",
    ],
    links: {
      github: "https://github.com/Anwar-Ahmad31",
    },
    isFlagship: false,
  },
  {
    id: "heart-disease-prediction",
    number: "03",
    badge: "Clinical ML Pipeline",
    title: "Heart Disease Clinical Risk Prediction ML Pipeline",
    description:
      "Engineered a clinical diagnostic classification pipeline on the UCI Cleveland dataset (303 patient records, 14 clinical attributes) to predict coronary artery disease risk. Constructed a leak-proof ColumnTransformer preprocessing pipeline with StratifiedShuffleSplit (80/20). Benchmarked 7 classification algorithms using 5-Fold Stratified Cross-Validation; achieved 88.52% test accuracy, 92.86% clinical recall, a 96.65% ROC-AUC score, and automated model serialization (joblib) with batch inference.",
    techTags: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "ColumnTransformer",
      "Logistic Regression",
      "ROC-AUC",
      "Joblib",
      "Cross-Validation",
    ],
    links: {
      github: "https://github.com/Anwar-Ahmad31",
    },
    disclaimer:
      "Strictly an educational ML project on the UCI Heart Disease dataset. Not a clinically validated diagnostic tool.",
    isFlagship: false,
  },
];

export const certificates = {
  featured: [
    {
      name: "Data Science (Complete Course)",
      issuer: "Code with Harry",
      icon: "📊",
      pdfUrl: "/certificates/Data-Science-CodeWithHarry.pdf",
    },
    {
      name: "TECH SAGEATHON 2K26 (National Level Hackathon)",
      issuer: "Sagar Institute of Research & Technology",
      icon: "🏆",
      pdfUrl: "/certificates/Tech-Sageathon-2026.pdf",
    },
    {
      name: "BGI Hackathon 2026 — Vision 2047 | Viksit Bharat",
      issuer: "Bansal Group of Institutes",
      icon: "🏅",
      pdfUrl: "/certificates/BGI-Hackathon-2026.pdf",
    },
  ],
  viewAllUrl: null,
};

export const education = {
  degree: "B.Tech in Computer Science & Engineering",
  institution: "IES College of Technology, Bhopal",
  cgpa: "6.86",
  graduation: "Expected 2026",
  semester: "Currently in 7th Semester",
  startYear: "2023",
  twelfth: "12th (Higher Secondary) — Science Stream — 58.4% (2022)",
  tenth: "10th (Secondary School) — 69.0% (2020)",
};

export const footerContent = {
  taglines: [
    "AI & Data Science",
    "Python · Machine Learning · RAG",
    "Intelligent Applications",
  ],
  credential: "B.Tech CSE · IES College of Technology",
  copyright: `© 2026 Anwar Ahmad | Built with React`,
};

// EmailJS Configuration
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
