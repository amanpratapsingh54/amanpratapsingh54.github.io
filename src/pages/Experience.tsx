import Page from "../components/Page";
import SectionHeader from "../components/SectionHeader";
import Seo from "../components/Seo";
import TimelineCard from "../components/TimelineCard";
import { experience } from "../data/experience";

export default function Experience() {
  return (
    <Page>
      <Seo title="Experience" description="Work timeline with AI, ML, data, and research engineering impact." />
      <SectionHeader
        eyebrow="Work"
        title="Experience shaped around measurable AI and data impact"
        description="Roles, technical scope, and outcomes across AI engineering, analytics, and research-oriented product work."
      />

      <div className="mx-auto max-w-4xl space-y-8">
        {experience.map((item) => (
          <TimelineCard key={`${item.company}-${item.role}-${item.dates}`} item={item} />
        ))}
      </div>
    </Page>
  );
}
