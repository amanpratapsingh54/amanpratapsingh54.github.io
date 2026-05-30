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
    description: "Supervised learning, deep learning, forecasting, evaluation, and model iteration.",
    skills: ["PyTorch", "TensorFlow", "scikit-learn", "XGBoost", "Feature Engineering", "Model Evaluation"],
  },
  {
    category: "Generative AI",
    icon: "Sparkles",
    description: "LLM fine-tuning, retrieval-augmented generation, agents, and multimodal AI workflows.",
    skills: ["LLMs", "Hugging Face", "LangChain", "LangGraph", "OpenAI API", "LoRA/QLoRA", "FAISS IVF-PQ"],
  },
  {
    category: "Data & Storage",
    icon: "Database",
    description: "Relational and document stores for analytics products, retrieval systems, and ML pipelines.",
    skills: ["SQL", "PostgreSQL", "MySQL", "MongoDB", "Redis", "Pandas"],
  },
  {
    category: "Engineering",
    icon: "Code2",
    description: "API, dashboard, agent backend, and product workflows that make models usable.",
    skills: ["Python", "Java", "C++", "FastAPI", "Streamlit", "Docker"],
  },
  {
    category: "MLOps & Cloud",
    icon: "Cloud",
    description: "Practical deployment and experiment tooling for reproducible ML systems.",
    skills: ["AWS EC2", "AWS S3", "MLflow", "Weights & Biases", "GitHub Actions", "Linux"],
  },
];
