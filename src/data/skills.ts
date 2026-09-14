export type SkillGroup = {
  category: string;
  icon: string;
  description: string;
  skills: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "LLM & ML Systems",
    icon: "BrainCircuit",
    description: "Model serving, fine-tuning, classical ML, and production AI application workflows.",
    skills: ["PyTorch", "Hugging Face", "LoRA/QLoRA", "scikit-learn", "XGBoost", "Model Serving"],
  },
  {
    category: "Agents & Retrieval",
    icon: "Sparkles",
    description: "Retrieval pipelines, agentic orchestration, provider APIs, and groundedness evaluation.",
    skills: ["RAG Pipelines", "FAISS IVF-PQ", "Embedding Models", "Chunking", "Re-ranking", "LangChain", "LangGraph", "Claude API", "OpenAI API"],
  },
  {
    category: "Evaluation",
    icon: "BadgeCheck",
    description: "Evaluation harnesses and experiment infrastructure for reliable AI systems.",
    skills: ["LLM-as-Judge", "A/B Testing", "pytest", "Regression Suites", "MLflow", "Weights & Biases"],
  },
  {
    category: "Data & Infrastructure",
    icon: "Database",
    description: "Storage, streaming, and backend services for retrieval, telemetry, and AI platforms.",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Kafka", "ClickHouse", "FastAPI", "Celery", "Spring Boot"],
  },
  {
    category: "Languages",
    icon: "Code2",
    description: "Core implementation languages for AI services, data systems, and platform tooling.",
    skills: ["Python", "SQL", "Java", "C++", "pandas", "NumPy"],
  },
  {
    category: "Platform & Cloud",
    icon: "Cloud",
    description: "Deployment, observability, and infrastructure tooling for production AI systems.",
    skills: ["AWS EC2", "AWS S3", "Docker", "Datadog", "Git", "GitHub Apps"],
  },
];
