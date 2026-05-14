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
      "Relevant coursework: Machine Learning, Deep Learning, NLP, Computer Vision, Time Series Analysis",
      "Research interests: Applied AI, model evaluation, analytics systems, and responsible deployment.",
    ]
  },
];
