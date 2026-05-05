import React from "react";
import { stats } from "../data/site.js";

export default function StatsSection() {
  return (
    <section className="stats-section">
      <div className="container stats-grid">
        {stats.map((item) => (
          <div className="stat-card reveal" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
