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
    slug: "terpagent",
    title: "TerpAgent: Agentic Campus Assistant for UMD",
    shortDescription:
      "An agentic assistant for UMD services with 35 tool-use schemas, 53 endpoints, and multi-step conversation handling.",
    longDescription:
      "TerpAgent is a campus assistant built around a FastAPI and Pydantic backend on Claude Sonnet 4.5. It uses an 8-round agentic loop with conversation memory, parallel tool dispatch, and structured tool schemas across UMD service endpoints.",
    category: "AI",
    tags: ["Claude Sonnet", "FastAPI", "Pydantic", "Agents", "Docker", "AWS EC2"],
    icon: "Sparkles",
    image: "gradient-ai",
    githubUrl: "https://github.com/amanpratapsingh54/terp_agent",
    date: "April 2026 - Present",
    status: "In Progress",
    featured: true,
    highlights: [
      "Built 35 tool-use schemas across 53 endpoints for 11 UMD services.",
      "Engineered an 8-round agentic loop with memory and parallel tool dispatch.",
      "Added match endpoints returning score, why, and blockers to reduce rationale hallucination.",
      "Deployed on EC2 with Docker Compose and validated with pytest plus mocked-SDK agent tests.",
    ],
  },
  {
    slug: "medvision-agent",
    title: "MedVision Agent: Multimodal Diagnostic Assistant",
    shortDescription:
      "A multimodal medical AI assistant combining chest X-ray analysis, clinical notes, RAG, and tool-use workflows.",
    longDescription:
      "MedVision Agent uses GPT-4o and LangGraph to analyze chest X-rays with clinical notes, retrieve supporting literature from PubMed abstracts, and generate differential diagnosis support with risk scoring.",
    category: "AI",
    tags: ["GPT-4o", "LangGraph", "RAG", "Computer Vision", "PubMed", "Streamlit"],
    icon: "Activity",
    image: "gradient-research",
    date: "July 2025 - Present",
    status: "Research",
    featured: true,
    highlights: [
      "Achieved 72% agreement with radiologist labels on a 5-class task across 500 NIH samples.",
      "Grounded outputs with RAG over 100K PubMed abstracts.",
      "Implemented tool-use for literature search, risk scoring, and differential diagnosis.",
      "Deployed a Streamlit demo on 200+ test cases with median 3-second latency on a single GPU.",
    ],
  },
  {
    slug: "financial-rag-platform",
    title: "Financial LLM and RAG Platform",
    shortDescription:
      "Fine-tuned LLaMA-2 and built RAG over 1,200+ financial PDFs for a closed-access wealth management platform.",
    longDescription:
      "A production-oriented financial AI system combining QLoRA fine-tuning, DeepSpeed, Hugging Face embeddings, FAISS IVF-PQ retrieval, LangChain orchestration, FastAPI serving, and Azure Document Intelligence extraction.",
    category: "AI",
    tags: ["LLaMA-2 7B", "QLoRA", "DeepSpeed", "FAISS", "LangChain", "FastAPI", "Azure Document Intelligence"],
    icon: "BrainCircuit",
    image: "gradient-tools",
    date: "2023 - 2024",
    status: "Live",
    featured: true,
    highlights: [
      "Fine-tuned LLaMA-2 7B on 60K financial Q&A pairs and improved Recall@3 from 43% to 59%.",
      "Grounded answers in 1,200+ financial PDFs and reduced unsupported responses by 41%.",
      "Improved satisfaction scores by 23% in A/B testing.",
      "Improved document extraction accuracy by 33% and reduced downstream query latency by 19%.",
    ],
  },
  {
    slug: "portfolio-analytics-forecasting",
    title: "Portfolio Analytics and Forecasting Dashboard",
    shortDescription:
      "A financial analytics dashboard backed by SARIMAX and XGBoost for short-horizon equity return forecasting.",
    longDescription:
      "A portfolio analytics workflow for 7-day return forecasting across equities, combining statistical time-series modeling with gradient boosted trees and anomaly detection for trading pattern review.",
    category: "Data",
    tags: ["SARIMAX", "XGBoost", "Forecasting", "PCA", "DBSCAN", "Finance"],
    icon: "LineChart",
    image: "gradient-data",
    date: "2023 - 2024",
    status: "Live",
    featured: false,
    highlights: [
      "Achieved 6.2% MAPE on a 30-day rolling out-of-sample test across 50 equities.",
      "Outperformed a moving-average baseline by 19%.",
      "Applied PCA and DBSCAN to flag irregular trading patterns.",
      "Reduced false-positive rebalance signals by 17% versus a rule-based threshold baseline.",
    ],
  },
  {
    slug: "speech-emotion-recognition",
    title: "Master Thesis: Speech Emotion Recognition",
    shortDescription:
      "A multi-speaker emotion recognition pipeline using diarization, acoustic features, augmentation, CNN-BiLSTM, and attention.",
    longDescription:
      "Master thesis research advised by Dr. Naveen Chauhan, focused on robust speech emotion recognition for real-world dialogue audio using pyannote diarization and deep sequence modeling.",
    category: "Research",
    tags: ["CNN-BiLSTM", "Attention", "pyannote", "MFCC", "Chroma", "IEMOCAP", "CREMA-D"],
    icon: "FileText",
    image: "gradient-research",
    date: "June 2020 - June 2022",
    status: "Research",
    featured: false,
    highlights: [
      "Extracted MFCC, Chroma, and Spectral Contrast features with augmentation for robustness.",
      "Trained CNN-BiLSTM models with attention on IEMOCAP and CREMA-D.",
      "Achieved 83% accuracy across 6 emotion classes under 5-fold cross validation.",
      "Outperformed SVM and Random Forest baselines by 10-12%.",
    ],
  },
  {
    slug: "healthcare-nlp-chatbot",
    title: "Healthcare NLP Chatbot and Patient Triage Models",
    shortDescription:
      "Dialogflow chatbot plus custom image triage and no-show forecasting models for healthcare operations.",
    longDescription:
      "A healthcare data science project at Pristyn Care that combined conversational automation across support channels with model redesigns for patient image triage and scheduling workflow forecasting.",
    category: "ML",
    tags: ["Dialogflow", "NLP", "WhatsApp Business API", "ResNet", "RNN", "Healthcare"],
    icon: "PanelsTopLeft",
    image: "gradient-web",
    date: "2022",
    status: "Live",
    featured: false,
    highlights: [
      "Deployed chatbot workflows across WhatsApp Business API and Google My Business.",
      "Reduced manual support load by 50% for routine query categories.",
      "Built custom ResNet and RNN-inspired models for severity grading and no-show forecasting.",
      "Reached 87% accuracy on 4-class severity grading and reduced scheduling backlog by 22%.",
    ],
  },
];
