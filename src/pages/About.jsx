import React from "react";
import CTASection from "../components/CTASection.jsx";
import PageHeader from "../components/PageHeader.jsx";
import RevealObserver from "../components/RevealObserver.jsx";
import SectionIntro from "../components/SectionIntro.jsx";
import { useSEO } from "../hooks/useSEO.js";

const values = [
  {
    title: "Biz Kimiz?",
    text: "Hasmop, İzmir'de temizlik ekipmanları ve mop üretimi alanında faaliyet gösteren, kaliteyi ve müşteri memnuniyetini merkezine alan bir üretim işletmesidir.",
  },
  {
    title: "Üretim Anlayışımız",
    text: "Farklı kullanım alanlarına uygun dayanıklı ve pratik mop çözümleri sunarken üretim planlamasını kurumsal ihtiyaçlara göre şekillendiririz.",
  },
  {
    title: "Kalite Politikamız",
    text: "Malzeme seçiminden paketlemeye kadar her adımda uzun ömürlü kullanım, güvenilir performans ve düzenli tedarik yaklaşımını esas alırız.",
  },
  {
    title: "Yerli Üretim Gücü",
    text: "İzmir merkezli üretim gücümüzle temizlik firmaları, oteller, hastaneler, okullar, fabrikalar ve toptancıların ihtiyaçlarına cevap veririz.",
  },
];

export default function About() {
  useSEO({
    title: "Hakkımızda | Hasmop İzmir Mop Üreticisi",
    description:
      "Hasmop, İzmir'de mop üretimi ve temizlik ekipmanları alanında faaliyet gösteren yerli, güvenilir ve kurumsal bir üretim işletmesidir.",
    keywords: "Hasmop, İzmir mop üreticisi, yerli mop üretimi, temizlik ekipmanları üretimi",
  });

  return (
    <>
      <RevealObserver />
      <PageHeader
        eyebrow="Hakkımızda"
        title="İzmir'den güvenilir mop üretimi"
        text="Uzun süredir sektörde edindiğimiz deneyimle farklı kullanım alanlarına uygun dayanıklı ve pratik mop çözümleri sunuyoruz."
        image="https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="section">
        <div className="container split-layout">
          <SectionIntro
            eyebrow="Kurumsal yaklaşım"
            title="Üretici kimliğini kalite ve güvenle birleştiriyoruz"
            text="Hasmop, ürün satmanın ötesinde kurumsal müşterilerin düzenli tedarik, toplu sipariş ve sahada uzun ömürlü kullanım beklentilerini karşılamaya odaklanır."
          />
          <div className="statement-box reveal">
            <p>
              “Hasmop, İzmir'de temizlik ekipmanları ve mop üretimi alanında faaliyet gösteren,
              kaliteyi ve müşteri memnuniyetini merkezine alan bir üretim işletmesidir.”
            </p>
          </div>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container value-grid">
          {values.map((item) => (
            <article className="value-card reveal" key={item.title}>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container preference-panel reveal">
          <div>
            <span className="eyebrow muted">Neden bizi tercih etmelisiniz?</span>
            <h2>Kurumsal kullanım için net, güvenilir ve sürdürülebilir üretim</h2>
          </div>
          <ul className="check-list">
            <li>Dayanıklı ve kaliteli malzeme seçimi</li>
            <li>Toplu alıma uygun üretim ve paketleme</li>
            <li>İzmir merkezli yerli üretim avantajı</li>
            <li>Temizlik firmaları ve kurumsal alıcılara özel yaklaşım</li>
          </ul>
        </div>
      </section>

      <CTASection />
    </>
  );
}
