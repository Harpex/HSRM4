import React from "react";
import CTASection from "../components/CTASection.jsx";
import PageHeader from "../components/PageHeader.jsx";
import QualityTimeline from "../components/QualityTimeline.jsx";
import RevealObserver from "../components/RevealObserver.jsx";
import SectionIntro from "../components/SectionIntro.jsx";
import { useSEO } from "../hooks/useSEO.js";

export default function QualityProcess() {
  useSEO({
    title: "Üretim ve Kalite Süreci | Hasmop",
    description:
      "Hasmop üretim ve kalite süreci: malzeme seçimi, üretim, kalite kontrol, paketleme ve sevkiyat adımları.",
    keywords: "mop üretim süreci, kalite kontrol, Hasmop, temizlik ekipmanları üretimi",
  });

  return (
    <>
      <RevealObserver />
      <PageHeader
        eyebrow="Üretim & Kalite"
        title="Her adımda dayanıklılık ve düzenli tedarik disiplini"
        text="Hasmop üretim süreci, ürün performansını sahada güvenilir kılmak için malzemeden sevkiyata kadar kontrollü ilerler."
        image="https://images.unsplash.com/photo-1581092919535-7146ff1a590b?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="section">
        <div className="container split-layout">
          <SectionIntro
            eyebrow="Süreç yönetimi"
            title="Profesyonel görünen değil, profesyonel çalışan üretim yaklaşımı"
            text="Kurumsal müşteriler için ürün kalitesi kadar tedarik sürekliliği de önemlidir. Bu yüzden Hasmop, üretim ve sevkiyat süreçlerini sipariş ihtiyacına göre planlı yürütür."
          />
          <div className="quality-highlight reveal">
            <strong>5</strong>
            <span>kontrollü üretim adımı</span>
          </div>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container">
          <QualityTimeline />
        </div>
      </section>

      <CTASection
        eyebrow="Kaliteli üretim"
        title="İhtiyacınıza uygun ürün grubu ve tedarik planı oluşturalım"
        text="Toplu siparişleriniz için ürün tipi, kullanım alanı ve adet bilgisiyle Hasmop ekibinden hızlı dönüş alabilirsiniz."
      />
    </>
  );
}
