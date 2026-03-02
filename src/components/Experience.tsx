const experiences = [
  {
    company: "Savour Club",
    role: "Community Intern",
    bullets: [
      "Designed branded Instagram content using Figma — achieved +30% post engagement within one month",
      "Analyzed reach, impressions & CTR via Meta Business Suite to guide weekly content planning",
      "Co-led campaign strategy with co-founder, aligning messaging with community feedback",
    ],
    date: "05 / 2025 — Now",
    location: "London",
  },
  {
    company: "CLIQ",
    role: "Marketing Consultant Intern",
    bullets: [
      "Led 140-person survey on cultural & language barriers affecting international students at UK universities",
      "Analyzed behavioral obstacles: fear of judgment, discomfort in unfamiliar social environments",
      "Developed proposals with cross-functional team, presented directly to CEO",
    ],
    date: "02 – 08 / 2025",
    location: "London",
  },
  {
    company: "Fubon Insurance",
    role: "Intern, Finance Dept.",
    bullets: [
      "Prepared executive presentations on strategic alternatives and capital markets activity",
      "Managed billing documentation and project tracking reports",
    ],
    date: "08 / 2022 – 01 / 2023",
    location: "Taipei",
  },
  {
    companyHtml: <>Fubon Life &amp;<br />Co-op Bank</>,
    company: "Fubon Life & Co-op Bank",
    role: "Sales Intern",
    bullets: [
      "Provided tailored financial consultation aligned to client risk profiles and financial goals",
      "Analyzed investment profit data and organized customer feedback for service improvement",
    ],
    date: "2021 – 2022",
    location: "Taipei",
  },
];

export default function Experience() {
  return (
    <section className="exp-section" id="experience">
      <div className="label reveal font-jost">Experience</div>
      <h2 className="display reveal d1 font-cormorant">
        Where I&rsquo;ve<br /><em>made impact.</em>
      </h2>

      <div className="exp-list">
        {experiences.map((exp, i) => (
          <div className="exp-item reveal" key={i}>
            <div>
              <div className="exp-co font-cormorant">
                {exp.companyHtml ?? exp.company}
              </div>
              <div className="exp-role font-jost">{exp.role}</div>
            </div>
            <ul className="exp-bullets font-lora">
              {exp.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
            <div className="exp-meta">
              <span className="exp-date font-jost">{exp.date}</span>
              <span className="exp-loc font-lora">{exp.location}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
