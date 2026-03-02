const items = [
  "Consumer Insight",
  "Brand Strategy",
  "Digital Marketing",
  "Market Research",
  "Campaign Planning",
  "SWOT / PESTLE",
  "Content Strategy",
  "Google Ads Certified",
];

export default function Ticker() {
  return (
    <div className="ticker">
      <div className="ticker-track font-jost">
        {[...items, ...items].map((text, i) => (
          <span className="ticker-item" key={i}>{text}</span>
        ))}
      </div>
    </div>
  );
}
