const stats = [
  { num: "140+", label: "Survey Participants" },
  { num: "+30%", label: "Engagement Growth" },
  { num: "3+", label: "Years Experience" },
  { num: "2", label: "Countries Worked In" },
];

export default function Callout() {
  return (
    <div className="callout-red reveal">
      <div>
        <h2 className="callout-headline font-cormorant">
          Creating brands<br />
          <em>people feel.</em>
        </h2>
        <div className="callout-stats">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="c-stat-n font-cormorant">{s.num}</div>
              <div className="c-stat-l font-jost">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <p className="callout-script font-sacramento">what drives me</p>
        <p className="callout-body font-lora">
          I believe great marketing starts with genuine curiosity about people —
          how they think, feel, and make decisions. From finance to fashion,
          I bring strategic thinking and creative execution to every project.
          Currently based in London and open to new opportunities.
        </p>
      </div>
    </div>
  );
}
