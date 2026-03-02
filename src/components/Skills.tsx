const skillGroups = [
  {
    name: "Marketing & Strategy",
    skills: [
      "Market Research & Analysis",
      "SWOT / PESTLE Analysis",
      "Brand Positioning",
      "Consumer Behaviour Insight",
      "Strategic Planning",
      "Campaign Planning",
    ],
  },
  {
    name: "Digital & Creative",
    skills: [
      "Google Ads",
      "Meta Business Suite",
      "Figma",
      "Canva",
      "Adobe Illustrator",
      "Premiere Pro",
    ],
  },
  {
    name: "Analytics & Tools",
    skills: [
      "Tableau",
      "Excel / PowerPoint",
      "Performance Metrics",
      "CTR / ROI Analysis",
      "Data Visualisation",
    ],
  },
];

const certs = [
  "Google Ads Apps Certification",
  "Google Ads Display Advertising",
  "TIMS Marketing Proficiency Certificate",
  "Financial Risk Management (TPT)",
  "Life Insurance Agent License",
  "Taiwan Trust Business Personnel License",
  "Financial Markets & Professional Ethics",
  "Taiwan Property Insurance Agent License",
];

const delays = ["", "d1", "d2"];

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="label reveal font-jost">Capabilities</div>
      <h2 className="display reveal d1 font-cormorant">
        What I<br /><em>bring.</em>
      </h2>

      <div className="skills-cols">
        {skillGroups.map((group, i) => (
          <div className={`reveal ${delays[i]}`} key={group.name}>
            <div className="skill-group-name font-jost">{group.name}</div>
            {group.skills.map((skill) => (
              <span className="skill-row font-lora" key={skill}>{skill}</span>
            ))}
          </div>
        ))}
      </div>

      <div className="certs reveal">
        {certs.map((cert) => (
          <div className="cert font-lora" key={cert}>
            <span className="cert-diamond" />
            {cert}
          </div>
        ))}
      </div>
    </section>
  );
}
