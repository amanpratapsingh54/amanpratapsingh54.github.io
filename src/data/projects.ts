export type ProjectCategory = "ML" | "AI" | "Data" | "Web" | "Research" | "Tools";
export type ProjectStatus = "Live" | "In Progress" | "Research" | "Archived";

export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  category: ProjectCategory;
  tags: string[];
  icon: string;
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  paperUrl?: string;
  date: string;
  status: ProjectStatus;
  featured: boolean;
  highlights: string[];
};

export const projectCategories: Array<"All" | ProjectCategory> = [
  "All",
  "ML",
  "AI",
  "Data",
  "Web",
  "Research",
  "Tools",
];

export const projects: Project[] = [
  {
    slug: "rag-research-assistant",
    title: "RAG Research Assistant",
    shortDescription: "A retrieval-augmented assistant for reading papers, tracing claims, and comparing methods.",
    longDescription:
      "An AI research workspace that chunks PDFs, builds embeddings, retrieves evidence, and summarizes findings with citations. The project is designed around transparent source grounding and evaluation loops.",
    category: "AI",
    tags: ["RAG", "LLMs", "Vector Search", "Evaluation", "Python"],
    icon: "Sparkles",
    image: "gradient-ai",
    githubUrl: "https://github.com/your-github-username/rag-research-assistant",
    liveUrl: "#",
    paperUrl: "#",
    date: "2026",
    status: "In Progress",
    featured: true,
    highlights: [
      "Document ingestion and semantic retrieval pipeline.",
      "Citation-first response UI for source inspection.",
      "Evaluation set for hallucination and retrieval quality checks.",
    ],
  },
  {
    slug: "customer-churn-intelligence",
    title: "Customer Churn Intelligence",
    shortDescription: "Predictive churn modeling with explainability, cohort analysis, and executive dashboards.",
    longDescription:
      "A data science workflow that combines feature engineering, tree-based models, calibration, and SHAP-style explanations to identify churn drivers and prioritize retention experiments.",
    category: "ML",
    tags: ["XGBoost", "Explainability", "Dashboards", "Cohorts", "SQL"],
    icon: "LineChart",
    image: "gradient-data",
    githubUrl: "https://github.com/your-github-username/customer-churn-intelligence",
    liveUrl: "#",
    date: "2025",
    status: "Live",
    featured: true,
    highlights: [
      "End-to-end pipeline from raw events to ranked retention segments.",
      "Model monitoring plan for drift, calibration, and fairness slices.",
      "Dashboard views for product, sales, and customer-success teams.",
    ],
  },
  {
    slug: "ml-experiment-dashboard",
    title: "ML Experiment Dashboard",
    shortDescription: "A lightweight interface for comparing runs, metrics, datasets, and model cards.",
    longDescription:
      "A developer-facing tool for organizing ML experiments without heavy platform overhead. It supports searchable metadata, run comparison, and structured model documentation.",
    category: "Tools",
    tags: ["React", "TypeScript", "MLOps", "Model Cards", "Vite"],
    icon: "SlidersHorizontal",
    image: "gradient-tools",
    githubUrl: "https://github.com/your-github-username/ml-experiment-dashboard",
    liveUrl: "#",
    date: "2025",
    status: "Live",
    featured: true,
    highlights: [
      "Reusable run comparison components.",
      "Metric trend visualization and dataset lineage notes.",
      "Exportable model-card summaries for review.",
    ],
  },
  {
    slug: "public-health-forecasting",
    title: "Public Health Forecasting",
    shortDescription: "Time-series forecasting notebooks for trend detection and uncertainty-aware planning.",
    longDescription:
      "A reproducible forecasting project that explores classical baselines, gradient boosting, and probabilistic intervals for public-health planning scenarios.",
    category: "Data",
    tags: ["Forecasting", "Pandas", "Time Series", "Visualization", "Notebooks"],
    icon: "Activity",
    image: "gradient-research",
    githubUrl: "https://github.com/your-github-username/public-health-forecasting",
    paperUrl: "#",
    date: "2024",
    status: "Research",
    featured: false,
    highlights: [
      "Baseline-first methodology for interpretable comparisons.",
      "Scenario analysis with uncertainty bands.",
      "Notebook structure prepared for publication or blog write-up.",
    ],
  },
  {
    slug: "portfolio-engine",
    title: "Portfolio Content Engine",
    shortDescription: "This portfolio architecture: reusable sections powered by clean TypeScript data files.",
    longDescription:
      "A scalable portfolio system with typed content modules, animated routes, project filtering, modal details, and GitHub Pages deployment.",
    category: "Web",
    tags: ["React", "Vite", "Tailwind", "Framer Motion", "GitHub Pages"],
    icon: "PanelsTopLeft",
    image: "gradient-web",
    githubUrl: "https://github.com/your-github-username/advanced-ai-portfolio",
    liveUrl: "#",
    date: "2026",
    status: "Live",
    featured: false,
    highlights: [
      "Editable content files for projects, skills, experience, education, and socials.",
      "Responsive animated UI with accessible keyboard interactions.",
      "Automated GitHub Actions deployment.",
    ],
  },
];
