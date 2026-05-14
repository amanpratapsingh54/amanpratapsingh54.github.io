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
    role: "Teaching & Research Assistant",
    company: "University of Maryland at College Park",
    location: "College Park, MD",
    dates: "August 2025 - Present",
    techStack: ["Python", "PyTorch", "RAG"],
    impact: [
      "Developed an LLM/RAG-assisted anomaly detection pipeline for temporal cybersecurity streams, combining embeddings, retrieval, dimensionality reduction, and clustering; evaluated precision & recall@5 on 5k+ events, improved suspicious-pattern triage by 13%, and mentored 30+ graduate students.",
    ],
  },
  {
    role: "ML Engineer",
    company: "DeepEmergence",
    location: "Bengaluru, India",
    dates: "Jan 2023- July 2024",
    techStack: ["Pandas", "scikit-learn", "XGBoost", "Tableau", "SQL"],
    impact: [
      "Fine-tuned LLaMA-2 7B on 60K financial Q&A pairs using QLoRA and DeepSpeed; improved Recall@3 from 43% to 59% on a 500-query held-out set and deployed as a FastAPI microservice on a closed-access wealth management platform.",
      "Architected a RAG pipeline grounding LLM responses in 1,200+ financial PDFs using Hugging Face embeddings, FAISS IVF-PQ, and LangChain; reduced unsupported responses by 41% (GPT-4-as-judge, 300 sampled outputs vs. non-RAG baseline) with satisfaction scores up 23% in A/B testing.",
      "Integrated Azure Document Intelligence for OCR and structured extraction from financial filings; improved extraction accuracy by 33% and cut downstream query latency by 19%.",
      "Built a portfolio analytics dashboard backed by a SARIMAX-XGBoost ensemble for 7-day return forecasting; achieved 6.2% MAPE on a 30-day rolling out-of-sample test across 50 equities, outperforming a moving-average baseline by 19%.",
      "Applied PCA and DBSCAN to flag irregular trading patterns; reduced false-positive rebalance signals by 17% vs. a rule-based threshold baseline, validated on 3 months of backtested data.",
    ],
  },
  {
    role: "Data Science",
    company: "Pristyn Care",
    location: "Gurugram, India",
    dates: "June 2022 - December 2022",
    techStack: ["NLP", "Transformers", "Experiment Tracking", "LaTeX", "Python"],
    impact: [
      "Built an NLP chatbot (Dialogflow) integrated with appointment and patient data systems and deployed across WhatsApp Business API and Google My Business channels; automated responses to routine query categories, reducing manual support load by 50%.",
      "Designed custom ResNet and RNN inspired models for patient image triage and no-show forecasting, redesigning model blocks, layer depth, and sequence flow with 87% accuracy on 4-class severity grading; reducing scheduling backlog by 22% across 15+ specialties.",
    ],
  },
];
