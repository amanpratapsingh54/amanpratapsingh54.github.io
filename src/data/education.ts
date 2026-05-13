export type EducationItem = {
  school: string;
  degree: string;
  dates: string;
  location: string;
  details: string[];
};

export const education: EducationItem[] = [
  {
    school: "Your University",
    degree: "M.S. / B.S. in Computer Science, Data Science, or Related Field",
    dates: "2022 - 2026",
    location: "City, State",
    details: [
      "Relevant coursework: Machine Learning, Deep Learning, Data Mining, Algorithms, Databases.",
      "Research interests: applied AI, model evaluation, analytics systems, and human-centered ML.",
    ],
  },
  {
    school: "Additional Program or Certification",
    degree: "AI/ML, Data Engineering, or Cloud Certification",
    dates: "2024",
    location: "Remote",
    details: ["Focused study in applied machine learning, cloud tooling, or analytical product development."],
  },
];
