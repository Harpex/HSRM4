import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import CTASection from "../components/CTASection.jsx";
import CategoryCard from "../components/CategoryCard.jsx";
import HeroSection from "../components/HeroSection.jsx";
import ProductCard from "../components/ProductCard.jsx";
import RevealObserver from "../components/RevealObserver.jsx";
import SectionIntro from "../components/SectionIntro.jsx";
import StatsSection from "../components/StatsSection.jsx";
import { featuredProducts, products } from "../data/products.js";
import { whyHasmop } from "../data/site.js";
import { useSEO } from "../hooks/useSEO.js";

export default function Home() {
  useSEO({
    title: "Hasmop | İzmir Mop Üretimi ve Temizlik Ekipmanları",
    description:
      "Hasmop, İzmir merkezli mop üretimi yapan kurumsal bir işletmedir. Kaliteli, dayanıklı ve profesyonel mop çözümleri için bizimle iletişime geçin.",
    keywords: "İzmir mop üretimi, mop üreticisi, temizlik ekipmanları, endüstriyel mop, mikrofiber mop, toptan mop, Hasmop",
  });

  return (
    <>
      <RevealObserver />
      <HeroSection />

      <section className="section about-preview">
        <div className="container split-layout">
          <div>
            <SectionIntro
              eyebrow="Hasmop hakkında"
              title="Üretim odağı güçlü, güvenilir ve yerli bir mop markası"
              text="Hasmop, İzmir'de temizlik ekipmanları ve mop üretimi alanında faaliyet gösteren, kaliteyi ve müşteri memnuniyetini merkezine alan bir üretim işletmesidir."
            />
            <Link className="text-link" to="/hakkimizda">
              Kurumsal yapımızı inceleyin <ArrowRight size={17} />
            </Link>
          </div>
          <div className="image-panel reveal">
            <img
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
              alt="Üretim ve kalite kontrol süreci"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container">
          <SectionIntro
            eyebrow="Ürün kategorileri"
            title="Farklı kullanım alanları için profesyonel mop çözümleri"
            text="Nemli, ıslak, mikrofiber ve endüstriyel mop ürün grupları kurumsal kullanım beklentilerine göre hazırlanır."
            align="center"
          />
          <div className="category-grid">
            {products.map((product) => (
              <CategoryCard product={product} key={product.slug} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="Neden Hasmop?"
            title="Kurumsal satın alma ekiplerinin beklediği disiplin"
            text="Üretici kimliği, malzeme kalitesi ve toplu sipariş deneyimiyle Hasmop, tedarik sürecini daha net ve güvenilir hale getirir."
            align="center"
          />
          <div className="why-grid">
            {whyHasmop.map(({ icon: Icon, title, text }) => (
              <article className="why-card reveal" key={title}>
                <div className="why-icon">
                  <Icon size={25} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <StatsSection />

      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="Öne çıkan ürünler"
            title="Saha kullanımına uygun dayanıklı ürünler"
            text="Hasmop ürünleri; otel, hastane, okul, fabrika, temizlik firması ve toptancı ihtiyaçları için pratik ve kaliteli seçenekler sunar."
          />
          <div className="product-grid">
            {featuredProducts.map((product) => (
              <ProductCard product={product} key={product.slug} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
