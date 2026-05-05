import React from "react";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { company, navLinks } from "../data/site.js";
import { products } from "../data/products.js";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top container">
        <div className="footer-brand">
          <Link className="brand brand-footer" to="/">
            <span className="brand-mark">H</span>
            <span>
              <strong>Hasmop</strong>
              <small>Temizlik ekipmanları üretimi</small>
            </span>
          </Link>
          <p>
            Hasmop, İzmir merkezli mop üretimi ve kurumsal temizlik ekipmanları alanında kaliteli,
            dayanıklı ve tedarik odaklı çözümler sunar.
          </p>
          <div className="social-row" aria-label="Sosyal medya bağlantıları">
            <a href="https://www.instagram.com/" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="https://www.linkedin.com/" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href="https://www.facebook.com/" aria-label="Facebook">
              <Facebook size={18} />
            </a>
          </div>
        </div>

        <div>
          <h3>Hızlı Menü</h3>
          <ul>
            {navLinks.map((item) => (
              <li key={item.path}>
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Ürün Kategorileri</h3>
          <ul>
            {products.slice(0, 6).map((product) => (
              <li key={product.slug}>
                <Link to={`/urunler/${product.slug}`}>{product.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>İletişim</h3>
          <ul className="footer-contact">
            <li>
              <MapPin size={17} />
              {company.location}
            </li>
            <li>
              <Phone size={17} />
              <a href={company.phoneHref}>{company.phone}</a>
            </li>
            <li>
              <Mail size={17} />
              <a href={company.emailHref}>{company.email}</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom container">
        <span>© 2026 Hasmop. Tüm hakları saklıdır.</span>
        <span>İzmir mop üretimi ve kurumsal temizlik çözümleri</span>
      </div>
    </footer>
  );
}
