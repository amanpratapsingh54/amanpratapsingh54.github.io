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
    title: "Evaluating Retrieval Quality in Small RAG Systems",
    type: "Report",
    venue: "Portfolio Working Note",
    date: "2026",
    summary:
      "A placeholder report slot for experiments on chunking, embedding model selection, recall, precision, and citation faithfulness.",
    tags: ["RAG", "Evaluation", "Embeddings"],
    url: "#",
  },
  {
    title: "A Practical Guide to ML Project Postmortems",
    type: "Blog",
    venue: "Personal Writing",
    date: "Coming Soon",
    summary:
      "A future article template for lessons learned from model failures, metrics drift, and deployment constraints.",
    tags: ["MLOps", "Writing", "Model Quality"],
  },
  {
    title: "Forecasting Notebook Collection",
    type: "Notebook",
    venue: "GitHub",
    date: "Draft",
    summary:
      "A notebook series for comparing baseline forecasting models, feature strategies, and uncertainty intervals.",
    tags: ["Forecasting", "Data Science", "Python"],
    url: "#",
  },
];
