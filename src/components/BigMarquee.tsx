export default function BigMarquee() {
  return (
    <div className="big-marquee">
      <div className="big-marquee-track font-cormorant">
        {Array.from({ length: 4 }).map((_, i) => (
          <span key={i}>
            <span className="big-word">PORTFOLIO</span>
            <span className="big-word accent">&middot;</span>
            <span className="big-word">WORK</span>
            <span className="big-word accent">&middot;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
