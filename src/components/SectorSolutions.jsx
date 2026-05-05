import React from "react";
import { sectors } from "../data/site.js";

export default function SectorSolutions() {
  return (
    <div className="sector-grid">
      {sectors.map(({ title, icon: Icon, text }) => (
        <article className="sector-card reveal" key={title}>
          <div className="sector-icon">
            <Icon size={24} />
          </div>
          <h3>{title}</h3>
          <p>{text}</p>
        </article>
      ))}
    </div>
  );
}
