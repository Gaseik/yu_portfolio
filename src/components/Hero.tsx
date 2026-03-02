export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <p className="hero-script font-sacramento">Hi, I&rsquo;m</p>
        <h1 className="hero-title font-cormorant">
          Yu–Chieh
          <span className="name-italic">Chin.</span>
        </h1>
        <p className="hero-body font-lora">
          Marketing strategist with a passion for brand storytelling,
          consumer insight, and fashion-forward communication.
          MSc International Marketing — Queen Mary University of London.
        </p>
        <div className="hero-links font-jost">
          <a className="hero-link-btn" href="#contact">Get in Touch</a>
          <a className="hero-link-plain" href="#projects">View Work</a>
        </div>
      </div>

      <div className="hero-red-block">
        <div>
          <div className="hero-stat-label font-jost">Survey Led</div>
          <div className="hero-stat-num font-cormorant">140+</div>
          <div className="hero-stat-desc font-lora">Participants, CLIQ London</div>
        </div>
        <div>
          <div className="hero-stat-label font-jost">Engagement Growth</div>
          <div className="hero-stat-num font-cormorant">+30%</div>
          <div className="hero-stat-desc font-lora">Instagram, Savour Club</div>
        </div>
        <div>
          <div className="hero-stat-label font-jost">Location</div>
          <div className="hero-stat-num font-cormorant" style={{ fontSize: 32, lineHeight: 1.2 }}>
            London,<br />UK
          </div>
        </div>
      </div>

      <div className="hero-bar font-jost">
        <a href="mailto:icyyyyyy35@gmail.com">icyyyyyy35@gmail.com</a>
        <span className="hero-bar-sep">&middot;</span>
        <a href="tel:+447493938929">+44 7493 938929</a>
        <span className="hero-bar-sep">&middot;</span>
        <a href="https://linkedin.com/in/yu-chieh-chin-a43a49266" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <span className="hero-bar-sep">&middot;</span>
        <span>English &middot; 中文 &middot; 한국어</span>
      </div>
    </section>
  );
}
