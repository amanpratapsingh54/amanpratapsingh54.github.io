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
    title: "TerpAgent: Multi-Service Campus Assistant",
    shortDescription:
      "An agentic campus assistant that unifies 11 campus services behind schema-validated FastAPI endpoints.",
    longDescription:
      "TerpAgent is a multi-service campus assistant built as a FastAPI gateway with an Anthropic tool-use orchestration layer, structured schemas, multi-turn state, deterministic fallback routing, async tool dispatch, Redis caching, and circuit-breaker protection.",
    category: "AI",
    tags: ["FastAPI", "Anthropic Tool Use", "Redis", "Docker", "AWS EC2", "Agents"],
    icon: "Sparkles",
    image: "gradient-ai",
    githubUrl: "https://github.com/amanpratapsingh54/terp_agent",
    date: "April 2026 - Present",
    status: "In Progress",
    featured: true,
    highlights: [
      "Designed a FastAPI gateway unifying 11 campus services behind 30 schema-validated endpoints.",
      "Built an agentic orchestration layer with structured tool schemas, multi-turn state, and deterministic fallback routing.",
      "Implemented async concurrent tool dispatch for multi-step requests.",
      "Deployed on AWS EC2 with Docker, Redis caching, and a circuit breaker, reducing p95 latency from 380 ms to 230 ms.",
    ],
  },
  {
    slug: "reviewagent",
    title: "ReviewAgent: Automated Pull Request Reviewer",
    shortDescription:
      "A GitHub App that reviews pull requests with Claude using queue-backed webhooks and precision-focused diff analysis.",
    longDescription:
      "ReviewAgent is an automated PR reviewer built as a GitHub App. It verifies webhook signatures, enqueues review work in PostgreSQL with SKIP LOCKED semantics, maps diff line positions, extracts tree-sitter scopes under a token budget, and prioritizes hunks before model calls.",
    category: "Tools",
    tags: ["Python", "PostgreSQL", "GitHub App", "Claude", "Docker", "AWS", "tree-sitter"],
    icon: "Code2",
    image: "gradient-tools",
    date: "January 2026 - Present",
    status: "In Progress",
    featured: true,
    highlights: [
      "Built a GitHub App reviewing pull requests with Claude behind a PostgreSQL SKIP LOCKED queue.",
      "Verified webhook signatures, enqueued one row, and acknowledged requests in 87 ms to avoid GitHub's 10-second timeout.",
      "Prevented duplicate reviews from webhook redeliveries.",
      "Tuned for precision over recall using diff line-position mapping, tree-sitter scope extraction, and hunk prioritization.",
      "Kept core logic I/O-free and covered by 309 offline tests.",
    ],
  },
  {
    slug: "aigateway",
    title: "AIGateway: Multi-Provider LLM Gateway",
    shortDescription:
      "A Spring Boot gateway that unifies multiple LLM providers behind one OpenAI-compatible endpoint.",
    longDescription:
      "AIGateway is a Java and Spring Boot service that provides one OpenAI-compatible interface across four LLM providers, with Resilience4j failover, Redis caching, and PostgreSQL-backed token-cost attribution per caller.",
    category: "Tools",
    tags: ["Java", "Spring Boot", "Redis", "PostgreSQL", "Docker", "Resilience4j", "LLM Gateway"],
    icon: "Cloud",
    image: "gradient-web",
    date: "December 2025",
    status: "Live",
    featured: true,
    highlights: [
      "Unified 4 LLM providers behind one OpenAI-compatible endpoint.",
      "Added Resilience4j failover for provider reliability.",
      "Implemented Redis caching for repeated requests.",
      "Tracked per-request token cost in PostgreSQL for per-caller spend attribution.",
    ],
  },
  {
    slug: "financial-rag-platform",
    title: "Financial RAG and LLM Platform",
    shortDescription:
      "A production RAG platform over 1,200+ financial PDFs with groundedness evaluation and model serving.",
    longDescription:
      "A production-oriented financial AI platform that combines document ingestion, OCR, chunking, embedding retrieval, re-ranking, LLM-as-judge evaluation, LLaMA-2 fine-tuning, and FastAPI model serving behind authentication and rate limiting.",
    category: "AI",
    tags: ["RAG", "LLaMA-2 7B", "QLoRA", "FastAPI", "Azure Document Intelligence", "Celery", "MongoDB", "FAISS"],
    icon: "BrainCircuit",
    image: "gradient-research",
    date: "2023 - 2024",
    status: "Live",
    featured: true,
    highlights: [
      "Designed a RAG pipeline over 1,200+ financial PDFs, owning chunking, embedding retrieval, and re-ranking.",
      "Built an LLM-as-judge evaluation harness against a groundedness rubric and measured a 41% reduction in unsupported responses.",
      "Fine-tuned LLaMA-2 7B on 60K financial Q&A pairs using QLoRA, improving top-3 answer accuracy from 43% to 59%.",
      "Scaled asynchronous ingestion workers from 2 to 8, increasing throughput from 400 to 1,200 PDFs/hour.",
    ],
  },
  {
    slug: "ai-platform-performance",
    title: "AI Platform Performance and Telemetry",
    shortDescription:
      "Platform work across microservices, PostgreSQL query plans, Kafka telemetry, ClickHouse, and Datadog alerting.",
    longDescription:
      "A platform engineering effort focused on performance and observability across AI product services, including PostgreSQL query-plan analysis, missing composite indexes, N+1 query diagnosis, Kafka-to-ClickHouse telemetry, and Datadog ingestion-lag alerting.",
    category: "Data",
    tags: ["PostgreSQL", "Kafka", "ClickHouse", "Datadog", "Microservices", "Performance"],
    icon: "LineChart",
    image: "gradient-data",
    date: "2023 - 2024",
    status: "Live",
    featured: false,
    highlights: [
      "Owned platform performance across 8 microservices.",
      "Cut p95 latency from 800 ms to 120 ms on a 5M+ row table.",
      "Diagnosed N+1 queries and missing composite indexes through PostgreSQL query-plan analysis.",
      "Built a Kafka-to-ClickHouse telemetry pipeline with Datadog ingestion-lag alerting.",
    ],
  },
  {
    slug: "clinic-automation-forecasting",
    title: "Clinic Workflow APIs and No-Show Forecasting",
    shortDescription:
      "REST APIs, conversational automation, and no-show forecasting for healthcare appointment workflows.",
    longDescription:
      "A healthcare software engineering and applied ML project that combined appointment and clinic-management APIs, Dialogflow chatbot integrations, WhatsApp Business API, Google My Business, and patient no-show forecasting.",
    category: "ML",
    tags: ["REST APIs", "Dialogflow", "WhatsApp Business API", "Forecasting", "Healthcare", "Python"],
    icon: "Activity",
    image: "gradient-research",
    date: "2022",
    status: "Live",
    featured: false,
    highlights: [
      "Built REST APIs for appointment and clinic-management workflows.",
      "Integrated Dialogflow with WhatsApp Business API and Google My Business.",
      "Automated 300+ weekly patient interactions and reduced manual support load by 50% on routine queries.",
      "Trained a patient no-show forecasting model that reduced scheduling backlog by 22% across 15+ specialties.",
    ],
  },
];
