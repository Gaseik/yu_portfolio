const projects = [
  {
    num: "01",
    eyebrow: "Research · UX Consulting",
    name: <>CLIQ Student<br />Inclusion Survey</>,
    desc: "Led a 140-participant study identifying how language and cultural barriers drive social anxiety among international students at UK universities. Strategic proposals delivered directly to CEO.",
    tags: ["140 Participants", "CEO Presentation", "Cross-cultural"],
    red: false,
  },
  {
    num: "02",
    eyebrow: "Social Media · Content Strategy",
    name: <>Savour Club<br />Instagram Growth</>,
    desc: "Designed and executed a full Figma-led branded content strategy. Used Meta Business Suite analytics to optimize posting cadence and drive measurable ROI within one month.",
    tags: ["+30% Engagement", "Figma", "Meta Analytics"],
    red: true,
  },
  {
    num: "03",
    eyebrow: "Finance · Client Relations",
    name: <>Fubon Capital Markets<br />Presentations</>,
    desc: "Produced executive-level client materials covering strategic alternatives, capital markets, and corporate finance for senior advisory meetings at Fubon Insurance Co.",
    tags: ["Executive Level", "Capital Markets", "Strategic Analysis"],
    red: true,
  },
  {
    num: "04",
    eyebrow: "Education · Research",
    name: <>MSc International<br />Marketing — QMUL</>,
    desc: "MSc with Merit in International Marketing & Business Strategies at Queen Mary University of London. Focus: brand positioning, consumer behaviour insight, global segmentation.",
    tags: ["MSc with Merit", "Global Strategy", "QMUL"],
    red: false,
  },
];

const delays = ["", "d1", "d2", "d3"];

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="label reveal font-jost">Selected Work</div>
      <h2 className="display reveal d1 font-cormorant">
        Case<br /><em>Studies.</em>
      </h2>

      <div className="project-bento">
        {projects.map((p, i) => (
          <div
            className={`p-card reveal ${delays[i]}${p.red ? " red" : ""}`}
            key={i}
          >
            <span className="p-num font-cormorant">{p.num}</span>
            <div className="p-eyebrow font-jost">{p.eyebrow}</div>
            <h3 className="p-name font-cormorant">{p.name}</h3>
            <p className="p-desc font-lora">{p.desc}</p>
            <div className="p-tags font-jost">
              {p.tags.map((tag) => (
                <span className="p-tag" key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
