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
    company: "University of Maryland",
    location: "College Park, MD",
    dates: "August 2025 - May 2026",
    techStack: ["Python", "Sentence Embeddings", "Clustering", "Cybersecurity", "Evaluation", "pytest"],
    impact: [
      "Built Python evaluation tooling for an anomaly-detection research pipeline on temporal cybersecurity streams.",
      "Scored sentence-embedding and clustering-based detectors against a rules-only baseline over a 5k-event labeled set.",
      "Automated correctness and model-metric checks for ML pipeline assignments with reproducible runs, mentoring 30+ graduate students.",
    ],
  },
  {
    role: "AI Engineer",
    company: "DeepEmergence",
    location: "Bengaluru, India",
    dates: "January 2023 - July 2024",
    techStack: ["RAG", "LLaMA-2 7B", "QLoRA", "FastAPI", "Azure Document Intelligence", "Celery", "MongoDB", "Kafka", "ClickHouse"],
    impact: [
      "Designed a RAG pipeline over 1,200+ financial PDFs, owning chunking, embedding retrieval, and re-ranking.",
      "Built an LLM-as-judge evaluation harness against a fixed groundedness rubric, measuring a 41% reduction in unsupported responses.",
      "Fine-tuned LLaMA-2 7B on 60K financial Q&A pairs using QLoRA, improving top-3 answer accuracy from 43% to 59% on a 500-query held-out set.",
      "Deployed the model as a FastAPI service behind existing authentication and rate limiting.",
      "Architected asynchronous document ingestion with Azure Document Intelligence, Celery, and MongoDB; scaled workers from 2 to 8 and increased throughput from 400 to 1,200 PDFs/hour.",
      "Cut p95 latency from 800 ms to 120 ms on a 5M+ row table by diagnosing N+1 queries and missing composite indexes through PostgreSQL query-plan analysis.",
      "Built a Kafka-to-ClickHouse telemetry pipeline with Datadog ingestion-lag alerting.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Pristyn Care",
    location: "Gurugram, India",
    dates: "June 2022 - December 2022",
    techStack: ["REST APIs", "Dialogflow", "WhatsApp Business API", "Google My Business", "Forecasting", "Python"],
    impact: [
      "Built REST APIs for appointment and clinic-management workflows.",
      "Integrated a Dialogflow chatbot with WhatsApp Business API and Google My Business, automating 300+ weekly patient interactions and reducing manual support load on routine queries by 50%.",
      "Trained a patient no-show forecasting model on historical scheduling data to support overbooking and reminder workflows, reducing scheduling backlog by 22% across 15+ specialties.",
    ],
  },
];
