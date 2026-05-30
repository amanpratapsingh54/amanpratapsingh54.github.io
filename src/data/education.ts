export type EducationItem = {
  school: string;
  degree: string;
  dates: string;
  location: string;
  details: string[];
};

export const education: EducationItem[] = [
  {
    school: "University of Maryland at College Park",
    degree: "M.S. in Applied Machine Learning",
    dates: "August 2024 - May 2026",
    location: "College Park, MD",
    details: [
      "Relevant coursework: Machine Learning, Deep Learning, Natural Language Processing, and Computer Vision.",
      "Research interests: applied AI, LLM/RAG systems, cybersecurity anomaly detection, and model evaluation.",
    ],
  },
  {
    school: "National Institute of Technology Hamirpur",
    degree: "Integrated M.Tech & B.Tech in Computer Science and Engineering",
    dates: "August 2017 - May 2022",
    location: "Hamirpur, India",
    details: [
      "Completed integrated undergraduate and graduate study in computer science and engineering.",
      "Master's thesis focused on speech emotion recognition using diarization, acoustic features, and deep learning.",
    ],
  },
];
