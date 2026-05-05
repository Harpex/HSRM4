import React from "react";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, Phone, X } from "lucide-react";
import { company, navLinks } from "../data/site.js";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <nav className="navbar container" aria-label="Ana navigasyon">
        <Link className="brand" to="/" onClick={() => setOpen(false)}>
          <span className="brand-mark">H</span>
          <span>
            <strong>Hasmop</strong>
            <small>İzmir Mop Üretimi</small>
          </span>
        </Link>

        <button
          className="icon-button nav-toggle"
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        <div className={`nav-menu ${open ? "is-open" : ""}`}>
          {navLinks.map((item) => (
            <NavLink key={item.path} to={item.path} onClick={() => setOpen(false)} end={item.path === "/"}>
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="nav-actions">
          <a className="ghost-call" href={company.phoneHref} aria-label="Telefonla ara">
            <Phone size={17} />
          </a>
          <Link className="btn btn-primary btn-small" to="/iletisim">
            Teklif Al
          </Link>
        </div>
      </nav>
    </header>
  );
}
