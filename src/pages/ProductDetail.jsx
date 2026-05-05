import React from "react";
import { ArrowLeft, Check, MessageCircle } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import CTASection from "../components/CTASection.jsx";
import ProductCard from "../components/ProductCard.jsx";
import RevealObserver from "../components/RevealObserver.jsx";
import { products } from "../data/products.js";
import { company } from "../data/site.js";
import { useSEO } from "../hooks/useSEO.js";

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find((item) => item.slug === slug) || products[0];
  const related = products.filter((item) => item.slug !== product.slug).slice(0, 3);

  useSEO({
    title: `${product.name} | Hasmop İzmir Mop Üretimi`,
    description: `${product.name} için kullanım alanları, teknik özellikler ve kurumsal teklif seçenekleri. Hasmop İzmir mop üretimi.`,
    keywords: `${product.name}, Hasmop, İzmir mop üretimi, mop üreticisi, toptan mop`,
  });

  return (
    <>
      <RevealObserver />
      <section className="product-detail-hero">
        <div className="container product-detail-grid">
          <div className="product-detail-image reveal is-visible">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="product-detail-copy reveal is-visible">
            <Link className="text-link back-link" to="/urunler">
              <ArrowLeft size={17} />
              Ürünlere dön
            </Link>
            <span className="eyebrow muted">{product.category}</span>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <div className="detail-actions">
              <Link className="btn btn-primary" to="/iletisim">
                Teklif Al
              </Link>
              <a className="btn btn-whatsapp" href={company.whatsapp} target="_blank" rel="noreferrer">
                <MessageCircle size={18} />
                WhatsApp ile İletişim
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container detail-info-grid">
          <DetailList title="Kullanım Alanları" items={product.usage} />
          <DetailList title="Teknik Özellikler" items={product.specs} />
          <DetailList title="Avantajlar" items={product.advantages} />
        </div>
      </section>

      <section className="section alt-section">
        <div className="container">
          <div className="section-intro">
            <span className="eyebrow muted">Diğer ürünler</span>
            <h2>Kurumsal tedarik için benzer ürün grupları</h2>
          </div>
          <div className="product-grid">
            {related.map((item) => (
              <ProductCard product={item} key={item.slug} />
            ))}
          </div>
        </div>
      </section>

      <CTASection title={`${product.name} için teklif alın`} />
    </>
  );
}

function DetailList({ title, items }) {
  return (
    <article className="detail-list reveal">
      <h2>{title}</h2>
      <ul>
        {items.map((item) => (
          <li key={item}>
            <Check size={18} />
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
