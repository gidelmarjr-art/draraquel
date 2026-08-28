import React from "react";
import Reveal from "./Reveal.jsx";
import { SERVICES } from "../data/content.js";

export default function Services() {
  return (
    <section id="cuidados">
      <Reveal className="section-head">
        <span className="eyebrow">Cuidados</span>
        <h2>O que o meu acompanhamento inclui</h2>
      </Reveal>

      <div className="cards">
        {SERVICES.map((s, i) => (
          <Reveal key={s.title} delay={i * 90} className="card">
            <div className="card-icon">
              <s.icon size={20} />
            </div>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
