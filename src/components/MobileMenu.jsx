import React from "react";
import { X } from "lucide-react";
import { NAV_LINKS } from "../data/content.js";

export default function MobileMenu({ open, onClose }) {
  return (
    <div className={`mobile-menu ${open ? "open" : ""}`}>
      <button className="mobile-close" aria-label="Fechar menu" onClick={onClose}>
        <X size={26} />
      </button>
      {NAV_LINKS.map((l) => (
        <a key={l.href} href={l.href} onClick={onClose}>
          {l.label}
        </a>
      ))}
      <a href="#contato" className="btn btn-primary" onClick={onClose}>
        Entrar em Contato
      </a>
    </div>
  );
}
