import React, { useCallback, useEffect, useRef, useState } from "react";
import { CalendarCheck, ArrowRight, ArrowDown, Sparkles } from "lucide-react";
import Particles from "./Particles.jsx";
import Reveal from "./Reveal.jsx";
import { DOCTOR } from "../data/content.js";
import heroPortrait from "../assets/hero-portrait.jpg";

export default function Hero() {
  const [doorOpen, setDoorOpen] = useState(false);
  const heroRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setDoorOpen(true), 260);
    return () => clearTimeout(t);
  }, []);

  const onHeroMove = useCallback((e) => {
    const el = heroRef.current;
    const glow = glowRef.current;
    if (!el || !glow) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    glow.style.transform = `translate(${x - 220}px, ${y - 220}px)`;
  }, []);

  return (
    <header id="top" className="hero" ref={heroRef} onMouseMove={onHeroMove}>
      <div className="hero-glow" ref={glowRef} />
      <Particles />

      <div className="hero-grid">
        <Reveal>
          <span className="eyebrow">
            <Sparkles size={13} />
            Cuidado domiciliar em Rio Preto/SP
          </span>
          <h1>
            Medicina de família e cuidado <span className="accent">paliativo</span>, na sua casa.
          </h1>
          <p className="lede">
            Acompanhamento médico que une competência técnica e escuta humana para você e para
            quem você ama, no conforto do lar.
          </p>
          <div className="hero-ctas">
            <a href="#contato" className="btn btn-primary">
              <CalendarCheck size={17} />
              Agende o Atendimento
            </a>
            <a href="#cuidados" className="btn btn-ghost">
              Conhecer o cuidado
              <ArrowRight size={16} />
            </a>
          </div>
          <div className="cred-line">
            <span>{DOCTOR.name}</span>
            <span className="dot" />
            <span>{DOCTOR.crm}</span>
            <span className="dot" />
            <span>{DOCTOR.rqe}</span>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className={`door-frame ${doorOpen ? "open" : ""}`}>
            <img src={heroPortrait} alt="Dra. Raquel C. de Sousa, médica de família e paliativista" />
            <div className="door-panel left" />
            <div className="door-panel right" />
            <div className="door-caption">
              <span>Prazer, Drª</span>
              <strong>Raquel Sousa</strong>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="scroll-cue">
        <span className="dn">
          <ArrowDown size={13} />
        </span>
        Deslize para conhecer
      </div>
    </header>
  );
}
