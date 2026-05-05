import React from "react";
import { MessageCircle } from "lucide-react";
import ContactForm from "../components/ContactForm.jsx";
import PageHeader from "../components/PageHeader.jsx";
import RevealObserver from "../components/RevealObserver.jsx";
import { company, contactCards } from "../data/site.js";
import { useSEO } from "../hooks/useSEO.js";

export default function Contact() {
  useSEO({
    title: "İletişim | Hasmop İzmir Mop Üretimi",
    description:
      "Hasmop İzmir mop üretimi için telefon, e-posta, WhatsApp ve iletişim formu üzerinden teklif talebi oluşturun.",
    keywords: "Hasmop iletişim, İzmir mop üretimi, mop teklif al, toptan mop iletişim",
  });

  return (
    <>
      <RevealObserver />
      <PageHeader
        eyebrow="İletişim"
        title="Teklif, ürün bilgisi ve kurumsal tedarik için bize ulaşın"
        text="Ürün grubu, kullanım alanı ve adet bilgisini paylaşın; Hasmop ekibi size hızlı ve net şekilde dönüş yapsın."
        image="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="section">
        <div className="container contact-card-grid">
          {contactCards.map(({ icon: Icon, title, text, href }) => (
            <a className="contact-info-card reveal" href={href} key={title}>
              <Icon size={24} />
              <span>{title}</span>
              <strong>{text}</strong>
            </a>
          ))}
        </div>
      </section>

      <section className="section alt-section">
        <div className="container contact-layout">
          <div>
            <div className="section-intro reveal">
              <span className="eyebrow muted">Teklif formu</span>
              <h2>Talebinizi iletin</h2>
              <p>
                Ürün grubu, adet, teslimat beklentisi ve kullanım alanı bilgilerini paylaşarak
                kurumsal teklif sürecinizi başlatabilirsiniz.
              </p>
            </div>
            <ContactForm />
          </div>

          <aside className="contact-aside reveal">
            <h2>Hasmop</h2>
            <p>{company.address}</p>
            <a className="btn btn-whatsapp" href={company.whatsapp} target="_blank" rel="noreferrer">
              <MessageCircle size={18} />
              WhatsApp ile Yaz
            </a>
            <div className="map-frame" title="Hasmop İzmir harita alanı">
              <iframe
                title="Hasmop İzmir Harita"
                src="https://www.google.com/maps?q=Izmir%2C%20Turkey&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
