import React from "react";
import CTASection from "../components/CTASection.jsx";
import PageHeader from "../components/PageHeader.jsx";
import ProductCard from "../components/ProductCard.jsx";
import RevealObserver from "../components/RevealObserver.jsx";
import SectionIntro from "../components/SectionIntro.jsx";
import { products } from "../data/products.js";
import { useSEO } from "../hooks/useSEO.js";

export default function Products() {
  useSEO({
    title: "Ürünler | Hasmop Mop ve Temizlik Ekipmanları",
    description:
      "Nemli mop, ıslak mop, mikrofiber mop, endüstriyel mop ve yedek mop başlıkları için Hasmop ürün kategorilerini inceleyin.",
    keywords: "nemli mop, ıslak mop, mikrofiber mop, endüstriyel mop, yedek mop başlıkları, toptan mop",
  });

  return (
    <>
      <RevealObserver />
      <PageHeader
        eyebrow="Ürünler"
        title="Profesyonel mop ve temizlik ekipmanı üretimi"
        text="Kurumsal temizlik operasyonları için dayanıklı, pratik ve toplu alıma uygun ürün kategorileri."
        image="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="Kategoriler"
            title="Ürün grubunuzu seçin"
            text="Kurumsal kullanım, toplu sipariş ve düzenli tedarik ihtiyaçları için hazırlanmış Hasmop ürün grupları."
          />
          <div className="product-grid">
            {products.map((product) => (
              <ProductCard product={product} key={product.slug} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Toplu sipariş veya düzenli tedarik için Hasmop ile görüşün"
        text="Ürün grubu, adet, teslimat planı ve kullanım alanını paylaşarak size özel üretim ve fiyatlandırma desteği alabilirsiniz."
      />
    </>
  );
}
