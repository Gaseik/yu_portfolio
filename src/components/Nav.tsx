"use client";

import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  function toggle() {
    setOpen((prev) => !prev);
    document.body.style.overflow = !open ? "hidden" : "";
  }

  function close() {
    setOpen(false);
    document.body.style.overflow = "";
  }

  return (
    <>
      <div className={`mobile-menu font-cormorant${open ? " open" : ""}`}>
        <a href="#experience" onClick={close}>Experience</a>
        <a href="#projects" onClick={close}>Projects</a>
        <a href="#skills" onClick={close}>Skills</a>
        <a href="#contact" onClick={close}>Contact</a>
      </div>

      <nav>
        <div className="nav-logo font-sacramento">Yu–Chieh Chin</div>
        <ul className="nav-links font-jost">
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button
          className={`hamburger${open ? " open" : ""}`}
          onClick={toggle}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
    </>
  );
}
