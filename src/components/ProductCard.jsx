import React from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { company } from "../data/site.js";

export default function ProductCard({ product }) {
  return (
    <article className="product-card reveal">
      <Link className="product-image" to={`/urunler/${product.slug}`} aria-label={`${product.name} detay sayfası`}>
        <img src={product.image} alt={product.name} loading="lazy" />
        <span>{product.category}</span>
      </Link>
      <div className="product-card-body">
        <h3>{product.name}</h3>
        <p>{product.summary}</p>
        <div className="card-actions">
          <Link className="btn btn-secondary btn-card" to={`/urunler/${product.slug}`}>
            Detayları İncele <ArrowRight size={16} />
          </Link>
          <a className="btn btn-outline btn-card" href={company.whatsapp} target="_blank" rel="noreferrer">
            <MessageCircle size={16} />
            Teklif Al
          </a>
        </div>
      </div>
    </article>
  );
}
