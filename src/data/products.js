export const products = [
  {
    slug: "nemli-moplar",
    name: "Nemli Moplar",
    category: "Profesyonel Mop",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",
    summary: "Günlük profesyonel zemin temizliği için yüksek performanslı nemli mop çözümleri.",
    description:
      "Nemli moplar, ofis, okul, otel ve kurumsal alanlarda hızlı, pratik ve kontrollü zemin temizliği için geliştirilmiş ürün grubudur.",
    usage: ["Oteller", "Okullar", "Ofisler", "AVM'ler", "Temizlik firmaları"],
    specs: ["Dayanıklı iplik yapısı", "Kolay takılıp çıkarılabilir bağlantı", "Kurumsal kullanıma uygun ölçüler", "Düzenli toplu siparişe uygun üretim"],
    advantages: ["Pratik kullanım", "İyi toz toplama performansı", "Uzun ömürlü yapı", "Ekonomik tedarik imkanı"],
  },
  {
    slug: "islak-moplar",
    name: "Islak Moplar",
    category: "Yoğun Temizlik",
    image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1200&q=80",
    summary: "Yüksek emicilik isteyen zeminler için dayanıklı ıslak mop ürünleri.",
    description:
      "Islak moplar, yoğun kir ve sıvı temasının bulunduğu alanlarda yüksek emicilik, kolay kullanım ve dayanıklılık sunmak üzere üretilir.",
    usage: ["Hastaneler", "Fabrikalar", "Restoranlar", "Kurum mutfakları", "Endüstriyel alanlar"],
    specs: ["Yüksek emicilik", "Güçlü dikiş ve bağlantı yapısı", "Endüstriyel temizliğe uygunluk", "Farklı gramaj seçenekleri"],
    advantages: ["Sıvı toplamada güçlü performans", "Yoğun kullanıma dayanıklılık", "Kolay bakım", "Toplu alıma uygun fiyatlandırma"],
  },
  {
    slug: "mikrofiber-moplar",
    name: "Mikrofiber Moplar",
    category: "Hijyen Odaklı",
    image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=1200&q=80",
    summary: "Hassas yüzeylerde etkili temizlik için mikrofiber mop seçenekleri.",
    description:
      "Mikrofiber moplar, yüzeyde iz bırakmadan temizlik yapılması gereken kurumsal alanlar için yüksek tutuculuk ve hijyen avantajı sağlar.",
    usage: ["Hastaneler", "Oteller", "Plazalar", "Ofisler", "Eğitim kurumları"],
    specs: ["Mikrofiber dokuma yapı", "Yüksek partikül tutma kabiliyeti", "Yıkanabilir ve tekrar kullanılabilir form", "Hassas yüzeylere uygun temas"],
    advantages: ["Hijyen odaklı performans", "Düşük kimyasal ihtiyacı", "İz bırakmayan temizlik", "Profesyonel görünüm"],
  },
  {
    slug: "endustriyel-moplar",
    name: "Endüstriyel Moplar",
    category: "Ağır Kullanım",
    image: "https://images.unsplash.com/photo-1581093458791-9d15482442f6?auto=format&fit=crop&w=1200&q=80",
    summary: "Fabrika, depo ve geniş zeminler için güçlü endüstriyel mop üretimi.",
    description:
      "Endüstriyel mop ürünleri, geniş metrekareli zeminlerde, yoğun vardiyalı kullanımlarda ve operasyonel temizlik süreçlerinde dayanıklılık hedeflenerek hazırlanır.",
    usage: ["Fabrikalar", "Depolar", "Lojistik merkezleri", "Belediyeler", "Endüstriyel tesisler"],
    specs: ["Güçlendirilmiş iplik yapısı", "Geniş yüzey temizliğine uygun tasarım", "Uzun ömürlü kullanım", "Ağır hizmet koşullarına uygunluk"],
    advantages: ["Yüksek dayanım", "Operasyon hızını destekler", "Büyük alanlarda verimlilik", "Düzenli tedarik avantajı"],
  },
  {
    slug: "yedek-mop-basliklari",
    name: "Yedek Mop Başlıkları",
    category: "Yedek Ürün",
    image: "https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=1200&q=80",
    summary: "Mevcut sistemlerle uyumlu, kolay değiştirilebilir yedek mop başlıkları.",
    description:
      "Yedek mop başlıkları, kurumsal ekiplerin ürün ömrünü ve kullanım sürekliliğini artırmak için farklı bağlantı ve ölçü seçenekleriyle sunulur.",
    usage: ["Temizlik firmaları", "Oteller", "Okullar", "Toptancılar", "Bakım ekipleri"],
    specs: ["Kolay değiştirilebilir yapı", "Farklı bağlantı seçenekleri", "Toplu stok yönetimine uygunluk", "Standart ürünlerle uyum"],
    advantages: ["Kullanım sürekliliği", "Ekonomik yenileme", "Stok yönetimi kolaylığı", "Hızlı tedarik"],
  },
  {
    slug: "kurumsal-temizlik-cozumleri",
    name: "Kurumsal Temizlik Çözümleri",
    category: "Toplu Alım",
    image: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=1200&q=80",
    summary: "Toplu sipariş, özel ihtiyaç ve düzenli tedarik için kurumsal ürün çözümleri.",
    description:
      "Kurumsal temizlik çözümleri, farklı sektörlerin yoğun kullanım ihtiyaçlarına göre ürün seçimi, toplu üretim ve planlı sevkiyat desteği sunar.",
    usage: ["Bayiler", "Toptancılar", "Kurumsal satın alma ekipleri", "Zincir işletmeler", "Kamu kurumları"],
    specs: ["İhtiyaca uygun ürün gruplama", "Toplu siparişe uygun paketleme", "Planlı üretim desteği", "Kurumsal teklif süreci"],
    advantages: ["Tek noktadan tedarik", "Kurumsal iletişim kolaylığı", "Ölçeklenebilir üretim", "Uzun vadeli iş ortaklığı"],
  },
];

export const featuredProducts = products.slice(0, 3);
