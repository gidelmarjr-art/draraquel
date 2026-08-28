import React from "react";
import { CalendarCheck, ClipboardList, Users, MapPin } from "lucide-react";
import Reveal from "./Reveal.jsx";
import { DOCTOR } from "../data/content.js";

export default function Attendance() {
  return (
    <section id="atendimento">
      <div className="attend-grid">
        <Reveal>
          <span className="eyebrow">Atendimento</span>
          <h2 className="display attend-heading">Consultas em Rio Preto/SP e região.</h2>
          <ul className="attend-list">
            <li>
              <CalendarCheck size={18} />
              Visitas agendadas previamente, com horário combinado com você.
            </li>
            <li>
              <ClipboardList size={18} />
              Avaliação inicial para entender a necessidade antes da primeira visita.
            </li>
            <li>
              <Users size={18} />
              Acompanhamento pensado para o paciente e para toda a família.
            </li>
          </ul>
        </Reveal>

        <Reveal delay={140} className="map-card">
          <div className="pin">
            <MapPin size={24} />
          </div>
          <h3>{DOCTOR.city}</h3>
          <p>Atendimento domiciliar na cidade e região — consulte disponibilidade pelo WhatsApp.</p>
        </Reveal>
      </div>
    </section>
  );
}
