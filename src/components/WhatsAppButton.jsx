import React from "react";
import { MessageCircle, Phone } from "lucide-react";
import { company } from "../data/site.js";

export default function WhatsAppButton() {
  return (
    <div className="floating-contact" aria-label="Hızlı iletişim">
      <a className="float-call" href={company.phoneHref} aria-label="Telefonla ara">
        <Phone size={19} />
      </a>
      <a className="float-whatsapp" href={company.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp ile iletişim">
        <MessageCircle size={22} />
      </a>
    </div>
  );
}
