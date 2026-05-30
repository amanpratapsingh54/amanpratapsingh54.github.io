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
    title: "Master Thesis: Speech Emotion Recognition",
    type: "Report",
    venue: "National Institute of Technology Hamirpur",
    date: "June 2020 - June 2022",
    summary:
      "Built a multi-speaker emotion recognition pipeline using pyannote diarization, MFCC, Chroma, Spectral Contrast, augmentation, CNN-BiLSTM, and attention. Achieved 83% accuracy across 6 emotion classes under 5-fold cross validation.",
    tags: ["Speech Emotion Recognition", "CNN-BiLSTM", "Attention", "IEMOCAP", "CREMA-D"],
  },
  {
    title: "LLM/RAG-Assisted Cybersecurity Anomaly Detection",
    type: "Future Work",
    venue: "University of Maryland",
    date: "2025 - 2026",
    summary:
      "Research assistant work exploring embeddings, retrieval, dimensionality reduction, and clustering for temporal cybersecurity streams, evaluated with precision and recall@5 on 5k+ events.",
    tags: ["Cybersecurity", "RAG", "Embeddings", "Clustering", "Evaluation"],
  },
  {
    title: "Multimodal Diagnostic Assistance with Literature Grounding",
    type: "Notebook",
    venue: "Portfolio Research Project",
    date: "2025 - Present",
    summary:
      "MedVision Agent explores GPT-4o, LangGraph, chest X-ray interpretation, clinical notes, tool-use, and RAG over PubMed abstracts for differential diagnosis support.",
    tags: ["Multimodal AI", "GPT-4o", "LangGraph", "PubMed", "Clinical AI"],
  },
];
