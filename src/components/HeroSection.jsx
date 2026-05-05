import React from "react";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { trustBadges } from "../data/site.js";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-inner container">
        <div className="hero-copy reveal is-visible">
          <div className="eyebrow">
            <ShieldCheck size={18} />
            İzmir merkezli yerli üretim
          </div>
          <h1>İzmir'den Türkiye'ye Kaliteli Mop Üretimi</h1>
          <p>
            Hasmop olarak uzun süredir temizlik sektörüne dayanıklı, kaliteli ve profesyonel mop
            çözümleri sunuyoruz.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary" to="/urunler">
              Ürünleri İncele <ArrowRight size={18} />
            </Link>
            <Link className="btn btn-light" to="/iletisim">
              Teklif Al
            </Link>
          </div>
          <div className="badge-row">
            {trustBadges.map((badge) => (
              <span key={badge}>
                <CheckCircle2 size={15} />
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div className="hero-product reveal is-visible">
          <div className="product-orbit" aria-hidden="true" />
          <div className="hero-product-card">
            <img
              src="https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=900&q=80"
              alt="Profesyonel mop ve temizlik ekipmanları"
            />
            <div className="hero-product-info">
              <span>Kurumsal alımlar</span>
              <strong>Toplu üretim ve düzenli tedarik desteği</strong>
            </div>
          </div>
          <div className="capacity-chip">
            <span>Üretim</span>
            <strong>Kaliteli Malzeme</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
