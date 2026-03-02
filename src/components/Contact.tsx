const rows = [
  {
    label: "Email",
    value: "icyyyyyy35@gmail.com",
    href: "mailto:icyyyyyy35@gmail.com",
  },
  {
    label: "Phone",
    value: "+44 7493 938929",
    href: "tel:+447493938929",
  },
  {
    label: "LinkedIn",
    value: "yu-chieh-chin →",
    href: "https://linkedin.com/in/yu-chieh-chin-a43a49266",
    external: true,
  },
];

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="reveal">
        <div className="label font-jost" style={{ marginBottom: 18 }}>Contact</div>
        <h2 className="contact-headline font-cormorant">
          Open to<br /><em>new beginnings.</em>
        </h2>
        <p className="contact-script font-sacramento">let&rsquo;s work together</p>
        <p className="contact-note font-lora">
          Currently based in London, open to opportunities in marketing,
          brand strategy, and digital communications.
        </p>
      </div>

      <div className="contact-rows reveal d1">
        {rows.map((row) => (
          <a
            className="c-row"
            href={row.href}
            key={row.label}
            {...(row.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            <span className="c-label font-jost">{row.label}</span>
            <span className="c-value font-lora">{row.value}</span>
          </a>
        ))}
        <div className="c-row" style={{ pointerEvents: "none" }}>
          <span className="c-label font-jost">Location</span>
          <span className="c-value font-lora">London, UK</span>
        </div>
      </div>
    </section>
  );
}
