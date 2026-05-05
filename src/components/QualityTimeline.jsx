import React from "react";
import { CheckCircle2 } from "lucide-react";
import { qualitySteps } from "../data/site.js";

export default function QualityTimeline() {
  return (
    <div className="timeline">
      {qualitySteps.map((step, index) => (
        <article className="timeline-item reveal" key={step.title}>
          <div className="timeline-marker">
            <CheckCircle2 size={18} />
          </div>
          <div className="timeline-card">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
