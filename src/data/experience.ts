export type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  dates: string;
  techStack: string[];
  impact: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "AI/ML Engineer",
    company: "Your Company or Lab",
    location: "Remote / City, State",
    dates: "2025 - Present",
    techStack: ["Python", "PyTorch", "RAG", "FastAPI", "React", "SQL"],
    impact: [
      "Built AI-assisted workflows that reduced manual analysis time and improved repeatability.",
      "Designed evaluation dashboards for model quality, retrieval performance, and user feedback.",
      "Collaborated with product and data stakeholders to turn exploratory models into usable tools.",
    ],
  },
  {
    role: "Data Science Intern",
    company: "Your Organization",
    location: "City, State",
    dates: "Summer 2024",
    techStack: ["Pandas", "scikit-learn", "XGBoost", "Tableau", "SQL"],
    impact: [
      "Developed predictive features and validation workflows for business-facing models.",
      "Created cohort dashboards that clarified model behavior across customer segments.",
      "Documented assumptions, model limitations, and recommended next experiments.",
    ],
  },
  {
    role: "Research Assistant",
    company: "Your Research Group",
    location: "University / Remote",
    dates: "2023 - 2024",
    techStack: ["NLP", "Transformers", "Experiment Tracking", "LaTeX", "Python"],
    impact: [
      "Ran experiments for NLP and representation-learning research questions.",
      "Prepared reproducible notebooks and literature summaries for lab review.",
      "Contributed to writing, figures, and technical appendices.",
    ],
  },
];
