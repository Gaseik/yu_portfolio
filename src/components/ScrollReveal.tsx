"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -20px 0px" }
    );

    elements.forEach((el) => observer.observe(el));

    const timeout = setTimeout(() => {
      elements.forEach((el) => el.classList.add("in"));
    }, 2000);

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, []);

  return null;
}
