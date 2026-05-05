import React from "react";
export default function SectionIntro({ eyebrow, title, text, align = "left" }) {
  return (
    <div className={`section-intro ${align === "center" ? "center" : ""} reveal`}>
      {eyebrow && <span className="eyebrow muted">{eyebrow}</span>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}
