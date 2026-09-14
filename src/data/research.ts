export type ResearchItem = {
  title: string;
  type: "Paper" | "Blog" | "Notebook" | "Report" | "Future Work";
  venue: string;
  date: string;
  summary: string;
  tags: string[];
  url?: string;
};

export const research: ResearchItem[] = [
  {
    title: "LLM/RAG-Assisted Cybersecurity Anomaly Detection",
    type: "Report",
    venue: "University of Maryland",
    date: "2025 - 2026",
    summary:
      "Research assistant work building Python evaluation tooling for anomaly detection over temporal cybersecurity streams, comparing sentence-embedding and clustering-based detectors against a rules-only baseline over a 5k-event labeled set.",
    tags: ["Cybersecurity", "Embeddings", "Clustering", "Evaluation", "Python"],
  },
  {
    title: "Groundedness Evaluation for Financial RAG",
    type: "Future Work",
    venue: "DeepEmergence",
    date: "2023 - 2024",
    summary:
      "Designed an LLM-as-judge evaluation harness for a financial RAG system, using a fixed groundedness rubric to measure unsupported responses across outputs grounded in 1,200+ financial PDFs.",
    tags: ["RAG", "LLM-as-Judge", "Groundedness", "Financial AI", "Evaluation"],
  },
  {
    title: "Pull Request Review Precision Experiments",
    type: "Notebook",
    venue: "ReviewAgent",
    date: "2026 - Present",
    summary:
      "Experimentation around precision-oriented automated code review using diff line-position mapping, tree-sitter scope extraction under token budgets, hunk prioritization, and offline regression tests before model calls.",
    tags: ["Claude", "Code Review", "tree-sitter", "Evaluation", "GitHub App"],
  },
];
