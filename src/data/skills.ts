export type SkillGroup = {
  category: string;
  icon: string;
  description: string;
  skills: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "Machine Learning",
    icon: "BrainCircuit",
    description: "Modeling, evaluation, feature engineering, and responsible deployment.",
    skills: ["PyTorch", "scikit-learn", "XGBoost", "Transformers", "Time Series", "Model Evaluation"],
  },
  {
    category: "AI Systems",
    icon: "Sparkles",
    description: "LLM-powered workflows, retrieval, agents, and automation pipelines.",
    skills: ["RAG", "Vector Search", "Prompt Engineering", "Embeddings", "Evaluation Harnesses", "Guardrails"],
  },
  {
    category: "Data Engineering",
    icon: "Database",
    description: "Clean analytical foundations for dashboards, experiments, and ML pipelines.",
    skills: ["SQL", "dbt Concepts", "ETL", "Pandas", "Feature Stores", "Data Quality"],
  },
  {
    category: "Product Engineering",
    icon: "Code2",
    description: "Interactive applications that make AI outputs usable and inspectable.",
    skills: ["React", "TypeScript", "FastAPI", "Vite", "Tailwind CSS", "APIs"],
  },
  {
    category: "Cloud & Tools",
    icon: "Cloud",
    description: "Practical delivery tooling for experiments, demos, and lightweight production.",
    skills: ["GitHub Actions", "Docker", "AWS", "GCP", "Linux", "CI/CD"],
  },
];
