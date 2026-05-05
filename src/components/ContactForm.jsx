import React from "react";
import { useState } from "react";
import { Send } from "lucide-react";

const initialValues = {
  name: "",
  company: "",
  phone: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const validate = () => {
    const nextErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9+\s()-]{10,}$/;

    if (!values.name.trim()) nextErrors.name = "Ad soyad zorunludur.";
    if (!values.company.trim()) nextErrors.company = "Firma adı zorunludur.";
    if (!values.phone.trim()) nextErrors.phone = "Telefon zorunludur.";
    else if (!phoneRegex.test(values.phone.trim())) nextErrors.phone = "Geçerli bir telefon girin.";
    if (!values.email.trim()) nextErrors.email = "E-posta zorunludur.";
    else if (!emailRegex.test(values.email.trim())) nextErrors.email = "Geçerli bir e-posta girin.";
    if (!values.subject.trim()) nextErrors.subject = "Talep konusu zorunludur.";
    if (!values.message.trim()) nextErrors.message = "Mesaj zorunludur.";

    return nextErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
    setStatus("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length) {
      setStatus("Lütfen formdaki hataları kontrol edin.");
      return;
    }

    setStatus("Talebiniz başarıyla hazırlandı. Hasmop ekibi en kısa sürede sizinle iletişime geçecektir.");
    setValues(initialValues);
  };

  return (
    <form className="contact-form reveal" onSubmit={handleSubmit} noValidate>
      <div className="form-grid">
        <label>
          <span>Ad Soyad</span>
          <input name="name" value={values.name} onChange={handleChange} autoComplete="name" />
          {errors.name && <small>{errors.name}</small>}
        </label>
        <label>
          <span>Firma Adı</span>
          <input name="company" value={values.company} onChange={handleChange} autoComplete="organization" />
          {errors.company && <small>{errors.company}</small>}
        </label>
        <label>
          <span>Telefon</span>
          <input name="phone" value={values.phone} onChange={handleChange} autoComplete="tel" inputMode="tel" />
          {errors.phone && <small>{errors.phone}</small>}
        </label>
        <label>
          <span>E-posta</span>
          <input name="email" value={values.email} onChange={handleChange} autoComplete="email" inputMode="email" />
          {errors.email && <small>{errors.email}</small>}
        </label>
      </div>
      <label>
        <span>Talep Konusu</span>
        <input name="subject" value={values.subject} onChange={handleChange} />
        {errors.subject && <small>{errors.subject}</small>}
      </label>
      <label>
        <span>Mesaj</span>
        <textarea name="message" rows="6" value={values.message} onChange={handleChange} />
        {errors.message && <small>{errors.message}</small>}
      </label>
      <button className="btn btn-primary" type="submit">
        Gönder <Send size={17} />
      </button>
      {status && <p className={`form-status ${Object.keys(errors).length ? "error" : "success"}`}>{status}</p>}
    </form>
  );
}
