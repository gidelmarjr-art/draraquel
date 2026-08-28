import React from "react";
import { ShieldCheck, MapPin } from "lucide-react";
import Reveal from "./Reveal.jsx";
import { DOCTOR } from "../data/content.js";
import aboutPortrait from "../assets/about-portrait.jpg";

export default function About() {
  return (
    <section id="sobre">
      <div className="about-grid">
        <Reveal className="about-photo">
          <img src={aboutPortrait} alt="Dra. Raquel C. de Sousa sorrindo, sentada" />
        </Reveal>

        <Reveal delay={120} className="about-body">
          <span className="eyebrow">Sobre</span>
          <h2 className="display about-heading">Prazer, eu sou a Dra. Raquel.</h2>
          <p>
            Sou médica de família e paliativista, e levo a consulta até onde o cuidado faz mais
            sentido: a sua casa. Acredito em uma medicina que orienta com clareza, acolhe com
            presença e caminha ao lado da família em cada etapa — do acompanhamento de rotina aos
            momentos mais delicados da vida.
          </p>
          <p>
            Cada visita é pensada para reduzir o desconforto de deslocamentos e salas de espera,
            trazendo o atendimento médico para o ambiente onde o paciente se sente mais seguro.
          </p>
          <p className="pull-quote">"Competência técnica e humana."</p>
          <div className="badge-row">
            <span className="badge">
              <ShieldCheck size={14} />
              {DOCTOR.crm}
            </span>
            <span className="badge">
              <ShieldCheck size={14} />
              {DOCTOR.rqe}
            </span>
            <span className="badge">
              <MapPin size={14} />
              Rio Preto/SP
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
