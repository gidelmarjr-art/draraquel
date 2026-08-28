import React from "react";
import { Menu } from "lucide-react";
import { NAV_LINKS } from "../data/content.js";

export default function Navbar({ scrolled, onOpenMenu }) {
  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <a href="#top" className="brand">
        <span className="brand-mark">RS</span>
        <span className="brand-name">
          Cuidado domiciliar
          <strong>Dra. Raquel Sousa</strong>
        </span>
      </a>

      <ul className="nav-links">
        {NAV_LINKS.map((l) => (
          <li key={l.href}>
            <a href={l.href}>{l.label}</a>
          </li>
        ))}
      </ul>

      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <a href="#contato" className="btn btn-primary nav-cta">
          Entrar em Contato
        </a>
        <button className="menu-btn" aria-label="Abrir menu" onClick={onOpenMenu}>
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
}
