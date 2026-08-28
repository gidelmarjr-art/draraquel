import React from "react";
import Reveal from "./Reveal.jsx";
import { useReveal } from "../hooks/useReveal.js";
import { STEPS } from "../data/content.js";

export default function HowItWorks() {
  const [lineRef, lineVisible] = useReveal();

  return (
    <section id="como-funciona" ref={lineRef}>
      <Reveal className="section-head">
        <span className="eyebrow">Como funciona</span>
        <h2>Da mensagem à visita, passo a passo</h2>
      </Reveal>

      <div className="steps">
        <div className="steps-line">
          <div className="steps-line-fill" style={{ width: lineVisible ? "100%" : "0%" }} />
        </div>
        <div className="steps-grid">
          {STEPS.map((s, i) => (
            <Reveal key={s.title} delay={i * 120} className="step">
              <div className="step-num">
                <s.icon size={19} />
              </div>
              <h4>
                {i + 1}. {s.title}
              </h4>
              <p>{s.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
