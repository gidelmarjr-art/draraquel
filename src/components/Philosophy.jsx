import React from "react";
import Reveal from "./Reveal.jsx";
import { DOCTOR } from "../data/content.js";

export default function Philosophy() {
  return (
    <section className="philosophy">
      <Reveal>
        <blockquote>"Cuidado médico que orienta, acolhe e traz clareza."</blockquote>
        <cite>{DOCTOR.name}</cite>
      </Reveal>
    </section>
  );
}
