import {
  BadgeCheck,
  Building2,
  Factory,
  HeartPulse,
  Hotel,
  Landmark,
  Mail,
  MapPin,
  Phone,
  School,
  ShoppingBag,
  Truck,
  Warehouse,
} from "lucide-react";

export const company = {
  name: "Hasmop",
  location: "İzmir / Türkiye",
  phone: "+90 232 000 00 00",
  phoneHref: "tel:+902320000000",
  email: "info@hasmop.com",
  emailHref: "mailto:info@hasmop.com",
  whatsapp: "https://wa.me/902320000000?text=Merhaba%20Hasmop%2C%20mop%20%C3%BCr%C3%BCnleri%20i%C3%A7in%20teklif%20almak%20istiyorum.",
  address: "İzmir merkezli üretim ve sevkiyat ağı",
};

export const navLinks = [
  { label: "Ana Sayfa", path: "/" },
  { label: "Hakkımızda", path: "/hakkimizda" },
  { label: "Ürünler", path: "/urunler" },
  { label: "Üretim & Kalite", path: "/uretim-kalite" },
  { label: "Kurumsal Çözümler", path: "/kurumsal-cozumler" },
  { label: "İletişim", path: "/iletisim" },
];

export const trustBadges = [
  "Yerli Üretim",
  "Kaliteli Malzeme",
  "Kurumsal Hizmet",
  "Toplu Sipariş",
  "İzmir Merkezli Üretim",
];

export const stats = [
  { value: "Uzun", label: "Yıllara Dayanan Tecrübe" },
  { value: "Güçlü", label: "Üretim Kapasitesi" },
  { value: "Kurumsal", label: "Müşteri Odaklı Hizmet" },
  { value: "Kaliteli", label: "Malzeme ve İşçilik" },
];

export const whyHasmop = [
  {
    icon: Factory,
    title: "Üretici Gücü",
    text: "Mop ve temizlik ekipmanı ihtiyaçlarını üretim odağında, ölçeklenebilir ve sürdürülebilir bir yaklaşımla karşılarız.",
  },
  {
    icon: BadgeCheck,
    title: "Kalite Kontrol",
    text: "Malzeme seçimi, işçilik ve son kontrol adımlarında dayanıklılığı merkeze alan bir kalite disiplini uygularız.",
  },
  {
    icon: Truck,
    title: "Toplu Sipariş",
    text: "Bayiler, toptancılar ve kurumsal satın alma ekipleri için düzenli tedarik ve sipariş planlama desteği sunarız.",
  },
];

export const qualitySteps = [
  {
    title: "Malzeme Seçimi",
    text: "Kullanım alanına göre iplik, mikrofiber, bağlantı ve yardımcı ekipman seçimleri yapılır.",
  },
  {
    title: "Üretim Süreci",
    text: "Ürünler standartlaştırılmış üretim adımlarıyla kurumsal kullanım beklentisine uygun hazırlanır.",
  },
  {
    title: "Kalite Kontrol",
    text: "Emicilik, bağlantı yapısı, işçilik ve ürün bütünlüğü sevkiyat öncesi kontrol edilir.",
  },
  {
    title: "Paketleme",
    text: "Ürünler toplu alıma ve sevkiyat güvenliğine uygun şekilde düzenlenir.",
  },
  {
    title: "Sevkiyat",
    text: "Kurumsal siparişler planlanan termin ve teslimat koşullarına göre hazırlanır.",
  },
];

export const sectors = [
  { title: "Oteller", icon: Hotel, text: "Yoğun kullanıma uygun, pratik ve hijyen odaklı mop çözümleri." },
  { title: "Hastaneler", icon: HeartPulse, text: "Hijyen beklentisi yüksek alanlar için güvenilir temizlik ekipmanları." },
  { title: "Okullar", icon: School, text: "Geniş kullanım alanları için dayanıklı ve ekonomik ürün seçenekleri." },
  { title: "Belediyeler", icon: Landmark, text: "Saha ekipleri ve toplu kullanım için planlanabilir tedarik yapısı." },
  { title: "Temizlik Firmaları", icon: Building2, text: "Sürekli operasyonlar için seri, pratik ve uzun ömürlü moplar." },
  { title: "Fabrikalar", icon: Factory, text: "Endüstriyel zeminler ve üretim alanları için güçlü ürün grupları." },
  { title: "AVM'ler", icon: ShoppingBag, text: "Geniş metrekareli alanlarda hızlı ve etkili temizlik performansı." },
  { title: "Toptancılar", icon: Warehouse, text: "Düzenli ürün tedariği ve farklı kategori seçenekleri." },
];

export const contactCards = [
  { icon: Phone, title: "Telefon", text: company.phone, href: company.phoneHref },
  { icon: Mail, title: "E-posta", text: company.email, href: company.emailHref },
  { icon: MapPin, title: "Konum", text: company.location, href: "/iletisim" },
];
