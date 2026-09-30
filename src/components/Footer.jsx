import React from "react";
import { Instagram } from "lucide-react";
import { DOCTOR, INSTAGRAM_LINK } from "../data/content.js";

export default function Footer() {
  return (
    <footer>
      <div className="footer-left">
        <span className="brand-mark">RS</span>
        <span className="footer-meta">
          {DOCTOR.name}
          <br />
          {DOCTOR.crm} · {DOCTOR.rqe}
        </span>
      </div>
      <a href={INSTAGRAM_LINK} target="_blank" rel="noreferrer" className="footer-social" aria-label="Instagram">
        <Instagram size={20} />
      </a>
      <p className="footer-note">
        Site institucional não substitui atendimento de urgência ou emergência médica.
      </p>
    </footer>
  );
}
