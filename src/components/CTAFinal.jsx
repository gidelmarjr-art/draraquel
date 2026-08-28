import React from "react";
import { CalendarCheck, Presentation, Instagram } from "lucide-react";
import Reveal from "./Reveal.jsx";
import {
  WHATSAPP_CONSULTA_LINK,
  WHATSAPP_PALESTRA_LINK,
  INSTAGRAM_LINK,
} from "../data/content.js";

const CONTACT_OPTIONS = [
  {
    icon: CalendarCheck,
    title: "Agendar consulta",
    text: "Marque um atendimento domiciliar pelo WhatsApp.",
    href: WHATSAPP_CONSULTA_LINK,
    cta: "Agendar consulta",
  },
  {
    icon: Presentation,
    title: "Agendar palestra",
    text: "Convide a Dra. Raquel para falar no seu evento ou instituição.",
    href: WHATSAPP_PALESTRA_LINK,
    cta: "Agendar palestra",
  },
  {
    icon: Instagram,
    title: "Instagram",
    text: "Acompanhe rotina, conteúdos e bastidores do cuidado domiciliar.",
    href: INSTAGRAM_LINK,
    cta: "@draraquelcs",
  },
];

export default function CTAFinal() {
  return (
    <section id="contato" className="cta-final">
      <Reveal>
        <h2>Vamos conversar sobre o cuidado que você precisa.</h2>
        <p>
          Escolha a melhor forma de falar comigo e vamos entender juntos qual é o caminho certo
          para você ou para quem você ama.
        </p>
      </Reveal>

      <div className="contact-grid">
        {CONTACT_OPTIONS.map((opt, i) => (
          <Reveal key={opt.title} delay={i * 100} className="contact-card">
            <div className="contact-card-icon">
              <opt.icon size={20} />
            </div>
            <h3>{opt.title}</h3>
            <p>{opt.text}</p>
            <a href={opt.href} target="_blank" rel="noreferrer" className="btn btn-primary">
              {opt.cta}
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
