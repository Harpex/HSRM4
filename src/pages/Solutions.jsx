import React from "react";
import CTASection from "../components/CTASection.jsx";
import PageHeader from "../components/PageHeader.jsx";
import RevealObserver from "../components/RevealObserver.jsx";
import SectionIntro from "../components/SectionIntro.jsx";
import SectorSolutions from "../components/SectorSolutions.jsx";
import { useSEO } from "../hooks/useSEO.js";

export default function Solutions() {
  useSEO({
    title: "Kurumsal Çözümler | Hasmop Toplu Mop Üretimi",
    description:
      "Oteller, hastaneler, okullar, belediyeler, temizlik firmaları, fabrikalar ve toptancılar için Hasmop kurumsal mop çözümleri.",
    keywords: "kurumsal temizlik ürünleri, toptan mop, otel mop, hastane mop, temizlik firması mop, Hasmop",
  });

  return (
    <>
      <RevealObserver />
      <PageHeader
        eyebrow="Kurumsal Çözümler"
        title="Sadece ürün değil, kurumsal temizlik ihtiyacına uygun çözüm"
        text="İhtiyacınıza uygun mop üretimi ve toplu alım çözümleri için Hasmop ile iletişime geçebilirsiniz."
        image="https://images.unsplash.com/photo-1560264280-88b68371db39?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="Hedef sektörler"
            title="Farklı kurumların saha ihtiyaçlarına uygun ürün yaklaşımı"
            text="Hasmop, operasyon yoğunluğu ve kullanım alanına göre doğru mop grubunun seçilmesine ve toplu tedarik planının kurulmasına destek olur."
            align="center"
          />
          <SectorSolutions />
        </div>
      </section>

      <section className="section alt-section">
        <div className="container solution-band reveal">
          <div>
            <span className="eyebrow muted">Toplu sipariş</span>
            <h2>Bayiler, toptancılar ve kurumsal satın alma ekipleri için düzenli tedarik</h2>
          </div>
          <p>
            Kurumsal ihtiyaçlar tek tip değildir. Hasmop; kullanım alanı, ürün adedi, teslimat planı
            ve ürün tipi beklentilerine göre daha net bir teklif süreci yürütür.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
