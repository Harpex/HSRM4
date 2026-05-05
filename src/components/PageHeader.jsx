import React from "react";
export default function PageHeader({ eyebrow, title, text, image }) {
  return (
    <section className="page-header">
      <div className="page-header-bg" style={{ backgroundImage: `url(${image})` }} aria-hidden="true" />
      <div className="page-header-overlay" aria-hidden="true" />
      <div className="container page-header-content reveal is-visible">
        {eyebrow && <span className="eyebrow muted">{eyebrow}</span>}
        <h1>{title}</h1>
        {text && <p>{text}</p>}
      </div>
    </section>
  );
}
