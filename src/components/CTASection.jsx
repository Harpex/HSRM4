import React from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { company } from "../data/site.js";

export default function CTASection({
  eyebrow = "Teklif ve tedarik",
  title = "Kurumsal alımlar için özel üretim ve toplu sipariş imkanı",
  text = "İhtiyacınız olan ürün grubunu, kullanım alanını ve tahmini adetleri paylaşın; Hasmop ekibi size en uygun mop üretimi ve tedarik çözümü için geri dönüş yapsın.",
}) {
  return (
    <section className="cta-band reveal">
      <div className="container cta-inner">
        <div>
          <span className="eyebrow">{eyebrow}</span>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="cta-actions">
          <Link className="btn btn-light" to="/iletisim">
            Teklif Al <ArrowRight size={18} />
          </Link>
          <a className="btn btn-whatsapp" href={company.whatsapp} target="_blank" rel="noreferrer">
            <MessageCircle size={18} />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
