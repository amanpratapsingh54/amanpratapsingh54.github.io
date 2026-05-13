import { useEffect } from "react";
import { profile } from "../data/profile";

type SeoProps = {
  title?: string;
  description?: string;
};

export default function Seo({ title, description }: SeoProps) {
  useEffect(() => {
    const pageTitle = title ? `${title} | ${profile.name}` : profile.seo.title;
    const pageDescription = description ?? profile.seo.description;

    document.title = pageTitle;
    setMeta("description", pageDescription);
    setMeta("og:title", pageTitle, "property");
    setMeta("og:description", pageDescription, "property");
    setMeta("twitter:title", pageTitle);
    setMeta("twitter:description", pageDescription);
  }, [description, title]);

  return null;
}

function setMeta(name: string, content: string, attr: "name" | "property" = "name") {
  const selector = `meta[${attr}="${name}"]`;
  const element = document.querySelector<HTMLMetaElement>(selector);
  if (element) {
    element.content = content;
  }
}
