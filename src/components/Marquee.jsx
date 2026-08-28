import React from "react";

const ITEMS = [
  "Medicina de família",
  "Cuidado paliativo",
  "Consulta domiciliar",
  "Escuta ativa",
  "Acolhimento",
  "Rio Preto/SP",
];

export default function Marquee() {
  return (
    <div className="marquee-wrap" aria-hidden="true">
      <div className="marquee">
        {Array.from({ length: 2 }).map((_, i) => (
          <React.Fragment key={i}>
            {ITEMS.map((item) => (
              <span key={`${i}-${item}`}>{item}</span>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
