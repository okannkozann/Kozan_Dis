import React, { useState } from "react";

const imageAssets = import.meta.glob("./assets/generated/*.webp", {
  eager: true,
  query: "?url",
  import: "default",
});

function asset(path) {
  return imageAssets[path];
}

function imageSet(baseName, widths, sizes) {
  return {
    src: asset(`./assets/generated/${baseName}-${widths[widths.length - 1]}.webp`),
    srcSet: widths
      .map((width) => `${asset(`./assets/generated/${baseName}-${width}.webp`)} ${width}w`)
      .join(", "),
    sizes,
  };
}

const images = {
  hero: imageSet("hero-background-v2", [640, 960, 1440, 1672], "100vw"),
  clinicLobby: imageSet("about-clinic", [480, 768, 1200, 1536], "(max-width: 1040px) 100vw, 690px"),
  dentalCabinet: imageSet("dental-treatment", [480, 768, 1200], "(max-width: 1040px) 100vw, 525px"),
  appointmentRoom: imageSet("appointment-room-v2", [480, 768, 1200, 1717], "(max-width: 1040px) 100vw, 705px"),
  teamEbru: imageSet("team-ebru", [320, 480], "240px"),
  teamMurat: imageSet("team-murat", [320, 480], "240px"),
  blogFirstVisit: imageSet("blog-first-visit", [480, 800, 1200], "(max-width: 760px) 100vw, 576px"),
  blogCleaning: imageSet("blog-cleaning", [480, 800, 1200], "(max-width: 760px) 100vw, 576px"),
  blogImplantPlanning: imageSet("blog-implant-planning", [480, 800, 1200], "(max-width: 760px) 100vw, 576px"),
  blogClearAligners: imageSet("blog-clear-aligners", [480, 800, 1200], "(max-width: 760px) 100vw, 576px"),
  blogPediatricVisit: imageSet("blog-pediatric-visit", [480, 800, 1200], "(max-width: 760px) 100vw, 576px"),
  blogGumHealth: imageSet("blog-gum-health", [480, 800, 1200], "(max-width: 760px) 100vw, 576px"),
  blogSmileDesign: imageSet("blog-smile-design", [480, 800, 1200], "(max-width: 760px) 100vw, 576px"),
  blogEmergencyToothache: imageSet("blog-emergency-toothache", [480, 800, 1200], "(max-width: 760px) 100vw, 576px"),
};

const navLinks = [
  { href: "#top", label: "Ana Sayfa", page: "home" },
  { href: "#about", label: "Hakkımızda", page: "home" },
  { href: "#services", label: "Hizmetler", page: "home" },
  { href: "#blog", label: "Blog", page: "blog" },
  { href: "#contact", label: "İletişim", page: "home" },
];

const teamMembers = [
  ["Dt. Ebru Kozan", "Diş Hekimi", images.teamEbru],

  ["Dt. Murat Kozan", "Diş Hekimi", images.teamMurat],
];

const generalServices = [
  [
    "Kapsamlı Diş Muayeneleri",
    "Ağız ve diş sağlığınızı detaylı şekilde değerlendiriyor, ihtiyaçlarınıza uygun tedavi planını oluşturuyoruz.",
  ],
  [
    "Profesyonel Diş Temizliği",
    "Kliniğimizde, dişlerde biriken plak ve tartarları özel ekipmanlarla temizleyerek ağız ve diş sağlığınızı korumaya yardımcı oluyoruz.",
  ],
  [
    "Dijital Röntgen ve Teşhis",
    "Modern görüntüleme teknolojileriyle ağız sağlığınızı kapsamlı ve hassas biçimde değerlendiririz.",
  ],
  [
    "Diş Beyazlatma",
    "Tercihlerinize göre uyarlanan profesyonel beyazlatma ile gülümsemenizi aydınlatırız.",
  ],
  [
    "Porselen Kaplamalar",
    "Kişiye özel porselen kaplamalarla kusurları giderir, görünüm ve fonksiyonu birlikte iyileştiririz.",
  ],
  [
    "Gülüş Yenilemeleri",
    "Estetik hedeflerinize ulaşmak için birden fazla tedaviyi kapsayan kişisel planlar oluştururuz.",
  ],
];



const schedule = [
  ["Pazartesi", "08:00 - 18:00"],
  ["Salı", "08:00 - 18:00"],
  ["Çarşamba", "08:00 - 18:00"],
  ["Perşembe", "08:00 - 18:00"],
  ["Cuma", "08:00 - 18:00"],
  ["Cumartesi", "08:00 - 14:00"],
  ["Pazar", "Kapalı"],
];

const contactMethods = [
  {
    title: "Telefon",
    value: "(0212) 864 09 56",
    href: "tel:+902128640956",
    detail: "Randevu ve kısa bilgi talepleri için bizi arayabilirsiniz.",
    icon: "phone",
  },
  {
    title: "E-posta",
    value: "iletisim@kozan.dental",
    href: "mailto:iletisim@kozan.dental",
    detail: "Tedavi süreci ve klinik hakkında sorularınızı iletin.",
    icon: "mail",
  },
  {
    title: "Adres",
    value: "Mimaroba Mah. Günyüzü Evleri A Blok D:8 Büyükçekmece, İstanbul",
    href: "#contact",
    detail: "Kozan Ağız ve Diş Sağlığı Merkezi'nde hizmet veriyoruz.",
    icon: "pin",
  },
];

const testimonials = [
  {
    quote:
      "Kozan Diş'in çocuk diş hekimliği hizmetleri çocuklarımın diş bakımına pozitif başlamasını sağladı. Nazik yaklaşım ve sıcak ortam ailemiz için güven verdi.",
    name: "Nicole D.",
  },
  {
    quote:
      "Restoratif diş hekimliği sürecim gülüşümü tamamen dönüştürdü. İmplantlar ve kaplamalar sayesinde yeniden rahatça gülümsüyorum.",
    name: "Margaret R.",
  },
  {
    quote:
      "İmplant işlemindeki titizlik ve sonuçlar beklentimin üstündeydi. Ekip tüm süreci sakin, anlaşılır ve güvenli hale getirdi.",
    name: "Robert D.",
  },
  {
    quote:
      "Acil diş problemimde hızlı dönüş ve uzman müdahale gerçekten fark yarattı. Tüm diş ihtiyaçlarım için güvendiğim klinik burası.",
    name: "Sophia B.",
  },
  {
    quote:
      "Şeffaf plak tedavisi beklediğimden çok daha konforlu geçti. Planlama, takip ve sonuçlar çok profesyoneldi.",
    name: "Mark W.",
  },
  {
    quote:
      "Diş eti sağlığıma gösterdikleri özen günlük konforumda büyük fark yarattı. Kozan Diş güvenilir ve çok yetkin bir ekip.",
    name: "Evelyn M.",
  },
];

const blogPosts = [
  {
    slug: "ilk-dis-muayenesi",
    title: "İlk Diş Muayenesinde Sizi Neler Bekler? Rahat Bir Başlangıç Rehberi",
    image: images.blogFirstVisit,
    tags: ["İlk Muayene", "Dijital Teşhis", "Hasta Konforu"],
    excerpt:
      "İlk muayene, yalnızca sorun aranan kısa bir kontrol değil; ağız sağlığınızın bütüncül olarak değerlendirildiği ve size özel bakım planının oluşturulduğu ilk adımdır.",
    sections: [
      {
        heading: "Süreç sakin bir görüşmeyle başlar",
        body:
          "Diş hekiminiz öncelikle şikayetlerinizi, daha önce geçirdiğiniz tedavileri, kullandığınız ilaçları ve beklentilerinizi dinler. Bu görüşme, tedavi planının yalnızca klinik bulgulara değil günlük alışkanlıklarınıza ve konfor ihtiyacınıza göre şekillenmesini sağlar.",
      },
      {
        heading: "Ağız içi muayene ve dijital kayıtlar alınır",
        body:
          "Dişler, diş etleri, kapanış ilişkisi ve mevcut restorasyonlar detaylı şekilde incelenir. Gerekli görüldüğünde dijital röntgen ya da ağız içi görüntüleme ile görünmeyen alanlar da değerlendirilir; böylece erken bulgular daha net fark edilebilir.",
      },
      {
        heading: "Plan anlaşılır şekilde paylaşılır",
        body:
          "Muayene sonunda öncelikli ihtiyaçlar, alternatif tedavi seçenekleri ve tahmini süreç size sade bir dille aktarılır. Amaç, hangi işlemin neden önerildiğini bilmeniz ve karar sürecine güvenle katılmanızdır.",
      },
    ],
    takeaways: [
      "Varsa eski röntgenlerinizi ve kullandığınız ilaç listesini yanınızda getirin.",
      "Ağrı, hassasiyet veya estetik beklentilerinizi muayene başında açıkça paylaşın.",
      "Tedavi planını anlamadığınız noktaları sormaktan çekinmeyin.",
    ],
  },
  {
    slug: "dis-tasi-temizligi",
    title: "Diş Taşı Temizliği Ne Sıklıkla Yapılmalı? Profesyonel Bakımın Önemi",
    image: images.blogCleaning,
    tags: ["Diş Temizliği", "Koruyucu Bakım", "Ağız Hijyeni"],
    excerpt:
      "Diş taşı temizliği, estetik bir işlemden çok diş eti sağlığını koruyan temel bir bakım adımıdır. Düzenli kontrollerle plak ve tartar birikimi ilerlemeden yönetilebilir.",
    sections: [
      {
        heading: "Diş taşı neden oluşur?",
        body:
          "Günlük fırçalama ile uzaklaştırılamayan plak, zamanla tükürük mineralleriyle sertleşerek diş taşına dönüşür. Bu sert tabaka özellikle diş eti çizgisinde biriktiğinde kanama, hassasiyet ve ağız kokusu gibi belirtilere zemin hazırlayabilir.",
      },
      {
        heading: "Temizlik sıklığı kişiye göre değişir",
        body:
          "Genel olarak altı ayda bir kontrol önerilse de diş eti yatkınlığı, sigara kullanımı, ortodontik apareyler ve ağız hijyeni alışkanlıkları bu aralığı değiştirebilir. Hekiminiz muayenede size uygun takip sıklığını belirler.",
      },
      {
        heading: "Profesyonel bakım ev rutinini destekler",
        body:
          "Klinikte yapılan temizlik, evdeki fırçalama ve arayüz bakımının yerine geçmez; bu rutini tamamlar. İşlem sonrası doğru fırça, diş ipi ya da arayüz fırçası seçimiyle temizliğin etkisi daha uzun korunur.",
      },
    ],
    takeaways: [
      "Diş eti kanaması normal kabul edilmemeli, kontrol randevusu ile değerlendirilmelidir.",
      "Diş taşı evde kazınarak temizlenmemelidir; mine ve diş eti zarar görebilir.",
      "Temizlik sonrası hassasiyet kısa süreli olabilir ve genellikle doğru bakımla azalır.",
    ],
  },
  {
    slug: "implant-dijital-planlama",
    title: "İmplant Tedavisinde Dijital Planlama: Daha Öngörülebilir Sonuçlar",
    image: images.blogImplantPlanning,
    tags: ["İmplant", "Dijital Planlama", "Ağız Cerrahisi"],
    excerpt:
      "Dijital planlama, implantın yalnızca kemiğe yerleştirilmesini değil; çiğneme, estetik ve uzun dönem bakım hedeflerini birlikte düşünmeyi sağlar.",
    sections: [
      {
        heading: "Planlama görüntüleme ile başlar",
        body:
          "Üç boyutlu görüntüleme ve ağız içi kayıtlar, kemik hacmi, sinir komşulukları ve protez pozisyonu hakkında önemli bilgiler verir. Bu veriler implantın açı, derinlik ve konumunun daha güvenli şekilde değerlendirilmesine yardımcı olur.",
      },
      {
        heading: "Protez sonucu en baştan düşünülür",
        body:
          "Başarılı implant tedavisinde hedef yalnızca vidanın yerleşmesi değildir. Yeni dişin kapanışa, gülüş hattına ve komşu dişlerle ilişkiye uyumu planın merkezindedir. Dijital yaklaşım bu sonucu daha baştan simüle etmeyi kolaylaştırır.",
      },
      {
        heading: "Takip ve hijyen uzun ömür için önemlidir",
        body:
          "İmplant sonrası düzenli kontroller, profesyonel temizlik ve doğru ev bakımı tedavinin uzun dönem başarısını etkiler. Hekiminiz size özel fırça, arayüz bakım ürünü ve kontrol aralığını belirler.",
      },
    ],
    takeaways: [
      "İmplant uygunluğu kişisel kemik yapısı ve genel sağlık durumuyla birlikte değerlendirilir.",
      "Dijital planlama, cerrahi ve protez aşamalarının aynı hedefe çalışmasını sağlar.",
      "İmplant sonrası bakım, doğal diş bakımı kadar düzenli olmalıdır.",
    ],
  },
  {
    slug: "seffaf-plak-ortodonti",
    title: "Şeffaf Plaklarla Ortodonti: Günlük Hayatta Konforlu Tedavi Mümkün mü?",
    image: images.blogClearAligners,
    tags: ["Ortodonti", "Şeffaf Plak", "Estetik Tedavi"],
    excerpt:
      "Şeffaf plak tedavisi, uygun vakalarda diş dizilimini daha estetik ve günlük yaşama uyumlu bir süreçle düzeltmeye yardımcı olur.",
    sections: [
      {
        heading: "Tedavi dijital analizle planlanır",
        body:
          "Dişlerin mevcut konumu ölçülür ve hedeflenen hareketler aşamalı olarak planlanır. Bu sayede hangi dişin ne kadar hareket edeceği, tedavi süresinin nasıl ilerleyeceği ve kontrol aralıkları daha net konuşulabilir.",
      },
      {
        heading: "Günlük kullanım disiplin ister",
        body:
          "Plakların etkili olabilmesi için hekiminizin önerdiği süre boyunca düzenli takılması gerekir. Yemek ve içecek sırasında çıkarılabilmesi konfor sağlar; ancak bu esneklik tedavi sorumluluğunu da beraberinde getirir.",
      },
      {
        heading: "Her vaka plak tedavisine uygun olmayabilir",
        body:
          "Diş çapraşıklığı, kapanış bozukluğu ve çene ilişkisi tedavi seçimini etkiler. Bazı durumlarda şeffaf plaklar tek başına yeterli olurken, bazı vakalarda farklı ortodontik yaklaşımlar gerekebilir.",
      },
    ],
    takeaways: [
      "Plaklar yemeklerden sonra temiz dişlere takılmalıdır.",
      "Düzenli kullanım tedavi süresinin planlandığı gibi ilerlemesine yardımcı olur.",
      "Kontrol randevuları atlanmamalıdır; küçük uyumsuzluklar erken fark edilir.",
    ],
  },
  {
    slug: "cocuklarda-ilk-dis-hekimi-ziyareti",
    title: "Çocuklarda İlk Diş Hekimi Ziyareti: Güven Veren Bir Deneyim Nasıl Kurulur?",
    image: images.blogPediatricVisit,
    tags: ["Çocuk Diş Hekimliği", "Aile Bakımı", "Koruyucu Diş Hekimliği"],
    excerpt:
      "Çocuklarda ilk ziyaretin amacı yalnızca dişleri kontrol etmek değil; klinik ortamla güvenli ve pozitif bir bağ kurmaktır.",
    sections: [
      {
        heading: "İlk izlenim çocuğun yaklaşımını belirler",
        body:
          "Kısa, sakin ve tanıştırıcı bir randevu çocuğun diş hekimi koltuğunu tehdit olarak görmemesine yardımcı olur. Bu nedenle ilk ziyaretin mutlaka ağrı ya da acil bir problemle başlamaması tercih edilir.",
      },
      {
        heading: "Aile dili süreci etkiler",
        body:
          "Randevu öncesinde 'korkma' ya da 'acımaz' gibi kelimeler çocuğun dikkatini korku ihtimaline çekebilir. Bunun yerine hekimin dişleri sayacağı, fırçalama hakkında konuşacağı ve kısa bir kontrol yapacağı sade şekilde anlatılabilir.",
      },
      {
        heading: "Koruyucu bakım erken yaşta başlar",
        body:
          "Fırçalama alışkanlığı, beslenme düzeni, flor uygulamaları ve fissür örtücü gibi koruyucu seçenekler çocuğun ihtiyacına göre değerlendirilir. Düzenli takip, küçük sorunların büyümeden fark edilmesini sağlar.",
      },
    ],
    takeaways: [
      "İlk randevuyu ağrı başlamadan planlamak daha olumlu bir deneyim yaratır.",
      "Çocuğa işlem vaadi vermek yerine hekimin anlatmasına alan bırakın.",
      "Evde fırçalama rutini aile desteğiyle oyunlaştırılabilir.",
    ],
  },
  {
    slug: "dis-eti-kanamasi",
    title: "Diş Eti Kanaması Neden Olur? Erken Belirtileri Doğru Okumak",
    image: images.blogGumHealth,
    tags: ["Diş Eti Sağlığı", "Periodontoloji", "Erken Teşhis"],
    excerpt:
      "Diş eti kanaması çoğu zaman fırçalamadan kaynaklanan basit bir durum sanılır; oysa diş eti iltihabının erken işareti olabilir.",
    sections: [
      {
        heading: "Kanama bir uyarı sinyalidir",
        body:
          "Sağlıklı diş eti genellikle düzenli fırçalama sırasında kanamaz. Plak birikimi, diş taşı, hatalı fırçalama tekniği veya uyumsuz restorasyonlar diş eti dokusunu hassaslaştırabilir.",
      },
      {
        heading: "Erken dönemde tedavi daha kolaydır",
        body:
          "Diş eti problemleri ilerledikçe kemik desteğini etkileyebilir ve tedavi daha kapsamlı hale gelebilir. Erken muayene, temizlik ve kişiye özel hijyen eğitimiyle süreç daha kontrollü ilerler.",
      },
      {
        heading: "Ev bakımı doğru teknikle yapılmalıdır",
        body:
          "Sert fırça kullanmak ya da kanama gördüğünüz bölgeyi fırçalamaktan kaçınmak sorunu çözmez. Yumuşak fırça, doğru açı ve arayüz temizliği diş eti sağlığını destekler.",
      },
    ],
    takeaways: [
      "Bir haftadan uzun süren kanama için diş hekimi kontrolü planlayın.",
      "Diş ipi ya da arayüz fırçası seçiminde hekiminizin önerisini alın.",
      "Sigara kullanımı diş eti belirtilerini maskeleyebilir.",
    ],
  },
  {
    slug: "dogal-gulus-tasarimi",
    title: "Doğal Gülüş Tasarimi: Estetik Diş Hekimliğinde Kişiye Özel Yaklaşım",
    image: images.blogSmileDesign,
    tags: ["Gülüş Tasarımı", "Estetik Diş Hekimliği", "Diş Rengi"],
    excerpt:
      "Doğal gülüş tasarımı, yalnızca beyaz dişler hedeflemek yerine yüz hatları, dudak çizgisi ve kişisel beklentilerle uyumlu bir sonuç oluşturmayı amaçlar.",
    sections: [
      {
        heading: "Analiz yüz bütünüyle yapılır",
        body:
          "Diş formu, renk, diş eti görünümü, dudak hareketi ve yüz oranları birlikte değerlendirilir. Bu analiz, estetik sonucu yapay değil kişiye ait hissettiren temel adımdır.",
      },
      {
        heading: "Tedavi seçenekleri birlikte planlanır",
        body:
          "Beyazlatma, bonding, porselen lamina, diş eti düzenlemesi veya ortodontik hazırlık gibi seçenekler ihtiyaca göre kombine edilebilir. Her hasta için aynı reçete uygulanmaz; beklenti ve mevcut diş dokusu belirleyicidir.",
      },
      {
        heading: "Doğallık detaylarda saklıdır",
        body:
          "Dişlerin tamamının aynı renkte ve aynı formda olması doğal görünümü zayıflatabilir. Yüzle uyumlu ton geçişleri, yüzey karakteri ve doğru ışık yansıması daha dengeli bir sonuç sağlar.",
      },
    ],
    takeaways: [
      "Estetik beklentinizi örnek fotoğraflarla anlatmanız planlamayı kolaylaştırır.",
      "Sağlıklı diş eti estetik tedavinin temelidir.",
      "Kalıcı işlemlerden önce mümkün olduğunda ön izleme değerlendirilmelidir.",
    ],
  },
  {
    slug: "acil-dis-agrisi",
    title: "Acil Diş Ağrısında Ne Yapmalı? Kliniğe Gelmeden Önce İlk Adımlar",
    image: images.blogEmergencyToothache,
    tags: ["Acil Diş Hekimliği", "Diş Ağrısı", "Hasta Rehberi"],
    excerpt:
      "Ani başlayan diş ağrısında doğru ilk adımlar, kliniğe ulaşana kadar konforunuzu artırabilir ve sorunun büyümesini önlemeye yardımcı olabilir.",
    sections: [
      {
        heading: "Ağrının karakterini not edin",
        body:
          "Ağrı sıcak-soğukla mı artıyor, gece mi şiddetleniyor, çiğneme sırasında mı hissediliyor? Bu bilgiler diş hekiminin problemi daha hızlı değerlendirmesine yardımcı olur.",
      },
      {
        heading: "Evde güvenli ilk adımlar",
        body:
          "Bölgeyi temiz tutmak, ılık tuzlu suyla nazikçe çalkalamak ve hekiminizin daha önce önerdiği ağrı yönetimi yaklaşımını takip etmek geçici rahatlama sağlayabilir. Ağrıyan dişe aspirin ya da benzeri ilaçları doğrudan koymak dokuya zarar verebilir.",
      },
      {
        heading: "Bazı belirtiler bekletilmemelidir",
        body:
          "Yüzde şişlik, ateş, yutkunma güçlüğü, travma sonrası kırık veya kontrol edilemeyen ağrı varsa randevu geciktirilmemelidir. Bu durumlar hızlı değerlendirme gerektirebilir.",
      },
    ],
    takeaways: [
      "Ağrıyı bastırmak sorunun geçtiği anlamına gelmez; kontrol gerekir.",
      "Şişlik veya ateş varsa kliniği vakit kaybetmeden arayın.",
      "Kırılan parçayı temiz bir kapta saklayıp randevuya getirebilirsiniz.",
    ],
  },
];

function getPageFromHash(hash) {
  return hash.startsWith("#blog") ? "blog" : "home";
}

function getBlogSlugFromHash(hash) {
  if (!hash.startsWith("#blog/")) {
    return "";
  }

  try {
    return decodeURIComponent(hash.slice("#blog/".length));
  } catch {
    return "";
  }
}

function ToothLogo() {
  return (
    <span className="logoMark" aria-hidden="true">
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 2C12 2 8 5 8 11C8 16 11 22 16 30C21 22 24 16 24 11C24 5 20 2 16 2Z" fill="currentColor" fillOpacity="0.15" />
        <path d="M16 4C13.5 4 10 6 10 11C10 15 12.5 20 16 27C19.5 20 22 15 22 11C22 6 18.5 4 16 4Z" fill="currentColor" />
        <path d="M16 4C18.5 4 22 6 22 11C22 15 19.5 20 16 27V4Z" fill="white" fillOpacity="0.2" />
        <circle cx="12" cy="9" r="1.5" fill="white" />
      </svg>
    </span>
  );
}

function Icon({ name }) {
  if (name === "pin") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M32 58s18-16 18-34a18 18 0 1 0-36 0c0 18 18 34 18 34Z" />
        <circle cx="32" cy="24" r="6" />
      </svg>
    );
  }
  if (name === "cup") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M18 10h28v10a14 14 0 0 1-28 0V10Z" />
        <path d="M18 16H8v6a12 12 0 0 0 12 12M46 16h10v6a12 12 0 0 1-12 12M32 34v14M22 54h20" />
      </svg>
    );
  }
  if (name === "spark") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="m35 8 5 13 14 1-11 9 4 13-12-7-12 7 4-13-11-9 14-1 5-13Z" />
        <path d="M14 44 6 52M24 48 12 60M48 46 36 58" />
      </svg>
    );
  }
  if (name === "syringe") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M45 7 57 19M39 13l12 12M17 49l-6 6M24 42 9 57M24 12l28 28-12 12L12 24 24 12Z" />
        <path d="m32 20-8 8m16 0-8 8" />
      </svg>
    );
  }
  if (name === "bandage") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect x="9" y="24" width="46" height="16" rx="8" transform="rotate(-45 32 32)" />
        <rect x="24" y="9" width="16" height="46" rx="8" transform="rotate(-45 32 32)" />
        <path d="M30 30h4v4h-4z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M20 8c-8 4-7 18-3 29 3 9 4 19 9 19 4 0 3-11 6-11s2 11 6 11c5 0 6-10 9-19 4-11 5-25-3-29-5-3-9 1-12 1s-7-4-12-1Z" />
      <path d="m23 24 18 8m0-8-18 8" />
    </svg>
  );
}

function Header({ currentPage, onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`siteHeader ${currentPage === "blog" ? "lightHeader" : ""} ${scrolled ? "scrolled" : ""} ${menuOpen ? "menuOpen" : ""}`}>
      <a
        className="brand"
        href="#top"
        aria-label="Kozan Ağız ve Diş Sağlığı ana sayfa"
        onClick={(event) => {
          event.preventDefault();
          closeMenu();
          onNavigate("home", "#top");
        }}
      >
        <ToothLogo />
        <span>
          Kozan <strong>Ağız ve Diş Sağlığı</strong>
        </span>
      </a>

      <button
        className="menuToggle"
        aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
        aria-expanded={menuOpen}
        onClick={toggleMenu}
      >
        <div className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>

      <nav className={`mainNav ${menuOpen ? "isOpen" : ""}`} aria-label="Ana navigasyon">
        {navLinks.map(({ href, label, page }) => (
          <a
            className={currentPage === page && (page === "blog" || href === "#top") ? "active" : ""}
            href={href}
            key={href}
            onClick={(event) => {
              event.preventDefault();
              closeMenu();
              onNavigate(page, href);
            }}
          >
            {label}
          </a>
        ))}
      </nav>
      <a
        className="headerCta"
        href="#appointment"
        onClick={(event) => {
          event.preventDefault();
          closeMenu();
          onNavigate("home", "#appointment");
        }}
      >
        Randevu Al
      </a>
    </header>
  );
}

function Hero({ onNavigate }) {
  return (
    <section className="hero" id="top">
      <img
        className="heroBgImage"
        src={images.hero.src}
        srcSet={images.hero.srcSet}
        sizes={images.hero.sizes}
        alt=""
        fetchPriority="high"
      />
      <div className="heroInner">
        <div className="heroCopy">
          <h1>
            Gülüşünüz
            <br />
            bizim için değerli.
            <br />
            Her detayını
            <br />
            özenle planlıyoruz.
          </h1>
          <p>
            Diş sağlığınızı korurken estetik beklentilerinizi de dikkate alıyoruz.
            Konforlu klinik ortamımızda size özel, modern ve güvenilir tedavi seçenekleri sunuyoruz.
          </p>
          <div className="heroActions">
            <a
              className="button buttonDark"
              href="#appointment"
              onClick={(event) => {
                event.preventDefault();
                onNavigate("home", "#appointment");
              }}
            >
              Randevu Al
            </a>
            <a className="button buttonLight" href="#services">
              Hizmetlerimiz
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionIntro({ label, title, children, align = "center" }) {
  return (
    <div className={`sectionIntro ${align === "left" ? "alignLeft" : ""}`}>
      <p className="sectionLabel">{label}</p>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}

function About() {
  return (
    <section className="section aboutSection" id="about">
      <div className="aboutGrid">
        <div className="aboutMedia dotAccent">
          <img
            src={images.clinicLobby.src}
            srcSet={images.clinicLobby.srcSet}
            sizes={images.clinicLobby.sizes}
            alt="Kozan Diş klinik lobisi"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="aboutCopy">
          <SectionIntro label="Hakkında" title="Diş Kliniğimiz" align="left">
            Kliniğimizde ağız ve diş sağlığınızı modern teknoloji, uzman hekim kadrosu ve hasta odaklı yaklaşımımızla ele alıyoruz. Her hastamız için güvenilir, konforlu ve kişiye özel tedavi çözümleri sunmayı amaçlıyoruz.
            Estetik diş hekimliği, implant, ortodonti ve genel diş tedavilerinde sağlıklı, doğal ve uzun vadeli sonuçlar hedefliyoruz.
          </SectionIntro>
          <div className="proofGrid">
            <article>
              <span className="miniIcon">
                <Icon name="cup" />
              </span>
              <h3>Yılların Mükemmelliği</h3>
              <p>2000 yılında kurulan Kozan Diş, en üst düzey diş bakım hizmetini sunmaktadır.</p>
            </article>
            <article>
              <span className="miniIcon">
                <Icon name="spark" />
              </span>
              <h3>%100 Memnun Hastalar</h3>
              <p>10.000'den fazla memnun hasta, gülüşlerini Kozan Diş'e emanet etti.</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section className="section teamSection softPattern">
      <SectionIntro label="Bizimle Tanışın" title="Tutkulu Ekibimiz">
        Kliniğimizde her hastamızı güler yüzle karşılayan, alanında deneyimli ve hasta memnuniyetini ön planda tutan bir ekip ile hizmet veriyoruz. Hekimlerimiz ve klinik personelimiz, tedavi sürecinizin her aşamasında sizi bilgilendirerek kendinizi güvende ve rahat hissetmenizi sağlar.
        Ağız ve diş sağlığınız için modern tedavi yaklaşımlarını, özenli bir hizmet anlayışıyla bir araya getiriyoruz. Sağlıklı, estetik ve doğal gülüşlere ulaşmanız için ihtiyaçlarınıza özel çözümler sunuyoruz.
      </SectionIntro>
      <div className="teamGrid">
        {teamMembers.map(([name, role, image]) => (
          <article className="teamCard" key={name}>
            <div className="teamPhoto">
              <img
                src={image.src}
                srcSet={image.srcSet}
                sizes={image.sizes}
                alt={`${name} portresi`}
                loading="lazy"
                decoding="async"
              />
            </div>
            <h3>{name}</h3>
            <p>{role}</p>
            <div className="socialLinks" aria-label={`${name} sosyal bağlantıları`}>
              <a href="#contact" aria-label={`${name} LinkedIn`}>
                in
              </a>
              <a href="#contact" aria-label={`${name} Instagram`}>
                ◎
              </a>
            </div>
          </article>
        ))}
      </div>

    </section>
  );
}

function ServicesOverview() {
  return (
    <section className="section serviceOverview" id="services">
      <SectionIntro label="Hizmetler" title="Genel ve Kozmetik Diş Hekimliği" align="left">
        Genel ve Kozmetik Diş Hekimliği hizmetlerimizle gülüşünüzü dönüştürün.
        <br />
        Rutin muayenelerden
        gülüş estetiğine kadar uzman ekibimiz özgüvenli ve ışıl ışıl
        <br />
        bir gülüş için kapsamlı bakım sağlar.
      </SectionIntro>
      <div className="serviceLayout">
        <div className="serviceList">
          {generalServices.map(([title, copy]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
        <div className="servicePhoto dotAccent">
          <img
            src={images.dentalCabinet.src}
            srcSet={images.dentalCabinet.srcSet}
            sizes={images.dentalCabinet.sizes}
            alt="Diş tedavisi sırasında hasta ve diş hekimi"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}



function Appointment({ onAppointment }) {
  return (
    <section className="appointment tealPattern" id="appointment">
      <div className="appointmentIntro">
        <h2>Randevu Al</h2>
        <p>
          Rahat bir ortamda kişiselleştirilmiş bakım için hemen randevunuzu alın. Daha parlak, daha
          sağlıklı bir gülümsemeye giden yolculuğunuz burada başlıyor.
        </p>
      </div>
      <div className="appointmentPanel">
        <div className="schedulePanel">
          <h3>Çalışma Programımız</h3>
          <dl>
            {schedule.map(([day, hours], index) => (
              <div className={index === schedule.length - 1 ? "last" : ""} key={day}>
                <dt>{day}</dt>
                <dd>{hours}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="appointmentImage">
          <img
            src={images.appointmentRoom.src}
            srcSet={images.appointmentRoom.srcSet}
            sizes={images.appointmentRoom.sizes}
            alt="Kozan Diş tedavi odası"
            loading="lazy"
            decoding="async"
          />
          <button className="button buttonDark floatingButton" onClick={onAppointment}>
            Randevu Al
          </button>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [active, setActive] = useState(0);
  const testimonial = testimonials[active];

  function previous() {
    setActive((current) => (current + testimonials.length - 1) % testimonials.length);
  }

  function next() {
    setActive((current) => (current + 1) % testimonials.length);
  }

  return (
    <section className="section testimonialSection" id="testimonials">
      <SectionIntro label="Yorumlar" title="Hastalarımızdan Gelenler">
        Değerli hastalarımızın dönüşen gülümsemelerinin ve paylaştıkları deneyimlerin öykülerini
        keşfedin. Sizin memnuniyetiniz bizim en büyük başarımızdır.
      </SectionIntro>
      <div className="testimonialFrame">
        <button className="arrowButton arrowLeft" type="button" aria-label="Önceki yorum" onClick={previous}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="m15 6-6 6 6 6" />
          </svg>
        </button>
        <blockquote key={active}>
          <span className="quoteMark">“</span>
          <p>{testimonial.quote}</p>
          <cite>{testimonial.name}</cite>
        </blockquote>
        <button className="arrowButton arrowRight" type="button" aria-label="Sonraki yorum" onClick={next}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="m9 6 6 6-6 6" />
          </svg>
        </button>
        <div className="paginationDots" aria-label="Yorum sayfalama">
          {testimonials.map((item, index) => (
            <button
              type="button"
              className={index === active ? "active" : ""}
              aria-label={`${index + 1}. yorumu göster`}
              key={item.name}
              onClick={() => setActive(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function BlogPage({ selectedSlug, onSelectPost, onBackToBlog, onAppointment }) {
  const selectedPost = blogPosts.find((post) => post.slug === selectedSlug);


  if (selectedPost) {
    return (
      <BlogArticle
        post={selectedPost}
        onBackToBlog={onBackToBlog}
        onAppointment={onAppointment}
      />
    );
  }

  return (
    <section className="blogPage softPattern" id="blog">
      <div className="blogShell">
        <div className="blogHeader">
          <h2>Kozan Diş Uzmanlarından Bilgiler</h2>
          <p>
            Diş sağlığı alanındaki zengin bilgi ve uzmanlığı keşfedin. Bilinçli ağız sağlığı
            seçimleriniz için Kozan Diş uzmanlarından trendleri, ipuçlarını ve tedavileri öğrenin.
          </p>
        </div>

        <div className="blogGrid">
          {blogPosts.map((post) => (
            <article className="blogCard" key={post.slug}>
              <a
                className="blogCardButton"
                href={`#blog/${post.slug}`}
                onClick={(event) => {
                  event.preventDefault();
                  onSelectPost(post.slug);
                }}
                aria-label={`${post.title} makalesini aç`}
              >
                <img
                  src={post.image.src}
                  srcSet={post.image.srcSet}
                  sizes={post.image.sizes}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              </a>
              <div className="blogTags" aria-label="Makale kategorileri">
                {post.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <h3>
                <a
                  className="blogTitleButton"
                  href={`#blog/${post.slug}`}
                  onClick={(event) => {
                    event.preventDefault();
                    onSelectPost(post.slug);
                  }}
                >
                  {post.title}
                </a>
              </h3>
              <p>{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function BlogArticle({ post, onBackToBlog, onAppointment }) {
  return (
    <article className="blogArticle softPattern" id="blog">
      <div className="blogArticleShell">
        <button type="button" className="articleBack" onClick={onBackToBlog}>
          Bloga Dön
        </button>

        <header className="articleHero">
          <div className="articleHeroCopy">
            <div className="blogTags" aria-label="Makale kategorileri">
              {post.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <h1>{post.title}</h1>
            <p>{post.excerpt}</p>
          </div>
          <img src={post.image.src} srcSet={post.image.srcSet} sizes={post.image.sizes} alt="" decoding="async" />
        </header>

        <div className="articleBody">
          <div className="articleContent">
            {post.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                <p>{section.body}</p>
              </section>
            ))}
          </div>

          <aside className="articleAside" aria-label="Makale özeti">
            <h2>Kısa Notlar</h2>
            <ul>
              {post.takeaways.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>
              Bu içerik genel bilgilendirme amaçlıdır. Size uygun tanı ve tedavi planı için klinik
              muayene gerekir.
            </p>
            <button type="button" className="button buttonDark" onClick={onAppointment}>
              Randevu Al
            </button>
          </aside>
        </div>
      </div>
    </article>
  );
}

function AppointmentModal({ isOpen, onClose }) {
  const modalRef = React.useRef(null);
  const closeButtonRef = React.useRef(null);

  React.useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const previousActiveElement = document.activeElement;
    const focusableSelector = [
      "a[href]",
      "button:not([disabled])",
      "input:not([disabled])",
      "select:not([disabled])",
      "textarea:not([disabled])",
      "[tabindex]:not([tabindex='-1'])",
    ].join(",");

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const focusableElements = Array.from(
        modalRef.current?.querySelectorAll(focusableSelector) ?? []
      );

      if (focusableElements.length === 0) {
        event.preventDefault();
        modalRef.current?.focus();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    requestAnimationFrame(() => closeButtonRef.current?.focus());

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
      previousActiveElement?.focus?.();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modalOverlay" onClick={onClose}>
      <div
        className="modalContent"
        role="dialog"
        aria-modal="true"
        aria-labelledby="appointment-modal-title"
        aria-describedby="appointment-modal-description"
        tabIndex={-1}
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="closeButton" onClick={onClose} aria-label="Kapat" ref={closeButtonRef}>
          &times;
        </button>
        <div className="modalHeader">
          <h2 id="appointment-modal-title">Hızlı Randevu</h2>
          <p id="appointment-modal-description">Bizimle iletişime geçerek hemen randevunuzu oluşturabilirsiniz.</p>
        </div>
        <div className="modalBody">
          <div className="modalContactItem">
            <div className="modalIcon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.28-2.28a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <div>
              <span>Telefon</span>
              <a href="tel:+902128640956">(0212) 864 09 56</a>
            </div>
          </div>
          <div className="modalContactItem">
            <div className="modalIcon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <div>
              <span>E-posta</span>
              <a href="mailto:iletisim@kozan.dental">iletisim@kozan.dental</a>
            </div>
          </div>
        </div>
        <button className="button buttonDark fullWidth" onClick={onClose}>
          Anladım
        </button>
      </div>
    </div>
  );
}

function ContactSection() {
  return (
    <section className="section contactSection" id="contact">
      <div className="contactGrid">
        <div className="contactLead">
          <SectionIntro label="İletişim" title="Kliniğimizle İletişime Geçin" align="left">
            Randevu planlamak, tedaviler hakkında bilgi almak veya size en uygun bakım adımını
            konuşmak için ekibimize ulaşabilirsiniz.
          </SectionIntro>
          <div className="contactNote">
            <span className="miniIcon">
              <Icon name="tooth" />
            </span>
            <div>
              <h3>Acil bir diş ağrınız mı var?</h3>
              <p>
                Uygun randevu aralığını birlikte belirlemek için telefonla bize ulaşmanız yeterli.
              </p>
            </div>
          </div>
        </div>

        <div className="contactCards" aria-label="İletişim bilgileri">
          {contactMethods.map((item) => (
            <article className="contactCard" key={item.title}>
              <span className="contactIcon">
                <ContactIcon name={item.icon} />
              </span>
              <div>
                <p>{item.title}</p>
                <h3>
                  <a href={item.href}>{item.value}</a>
                </h3>
                <span>{item.detail}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactIcon({ name }) {
  if (name === "phone") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.6 3.5 9 8.7l-2 1.2a12.5 12.5 0 0 0 7.1 7.1l1.2-2 5.2 2.4c.4.2.6.6.5 1.1l-.6 2.8c-.1.5-.6.8-1.1.8A17.2 17.2 0 0 1 2 4.7c0-.5.3-1 .8-1.1l2.8-.6c.5-.1.9.1 1 .5Z" />
      </svg>
    );
  }

  if (name === "mail") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 6h16v12H4z" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 21s7-6.4 7-13a7 7 0 1 0-14 0c0 6.6 7 13 7 13Z" />
      <circle cx="12" cy="8" r="2.5" />
    </svg>
  );
}

function Footer({ onNavigate }) {
  return (
    <footer className="footer siteFooter">
      <div className="footerGrid">
        <div className="footerLead">
          <a className="brand footerBrand" href="#top">
            <ToothLogo />
            <span>
              Kozan <strong>Ağız ve Diş Sağlığı</strong>
            </span>
          </a>
          <div className="footerSocials" aria-label="Sosyal bağlantılar">
            <a href="#contact" aria-label="Facebook">
              f
            </a>
            <a href="#contact" aria-label="LinkedIn">
              in
            </a>
            <a href="#contact" aria-label="Instagram">
              ◎
            </a>
          </div>
        </div>
        <nav aria-label="Footer menü">
          <h2>Menü</h2>
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              onNavigate("home", "#top");
            }}
          >
            Ana Sayfa
          </a>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              onNavigate("home", "#about");
            }}
          >
            Hakkımızda
          </a>
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              onNavigate("home", "#services");
            }}
          >
            Hizmetler
          </a>
          <a
            href="#blog"
            onClick={(e) => {
              e.preventDefault();
              onNavigate("blog", "#blog");
            }}
          >
            Blog
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              onNavigate("home", "#contact");
            }}
          >
            İletişim
          </a>
        </nav>

        <div className="footerAddress">
          <h2>Adres</h2>
          <address>
            Kozan Ağız ve Diş Sağlığı Merkezi
            <br />
            Mimaroba Mahallesi Günyüzü Evleri A Blok D:8
            <br />
            Büyükçekmece İstanbul - Avrupa, 34535
          </address>
        </div>

        <div className="footerContact">
          <h2>İletişim</h2>
          <address>
            <a href="mailto:iletisim@kozan.dental">iletisim@kozan.dental</a>
            <br />
            <a href="tel:+902128640956">(0212) 864 09 56</a>
          </address>
        </div>
      </div>
      <div className="footerBottom">
        <p>© Copyright 2026. Tüm hakları saklıdır.</p>
        <p>Kozan Ağız ve Diş Sağlığı için özenle hazırlandı.</p>
      </div>
    </footer>
  );
}

export default function App() {
  const [page, setPage] = useState(() => {
    if (typeof window === "undefined") {
      return "home";
    }

    return getPageFromHash(window.location.hash);
  });
  const [blogSlug, setBlogSlug] = useState(() => {
    if (typeof window === "undefined") {
      return "";
    }

    return getBlogSlugFromHash(window.location.hash);
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  function handleNavigate(nextPage, hash) {
    setPage(nextPage);
    setBlogSlug(getBlogSlugFromHash(hash));
    window.history.pushState(null, "", hash);

    const scrollToTarget = () => {
      if (nextPage === "blog") {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        return;
      }

      const target = document.getElementById(hash.slice(1));
      target?.scrollIntoView({ behavior: "smooth" });
    };

    requestAnimationFrame(scrollToTarget);
    window.setTimeout(scrollToTarget, 120);
  }

  React.useEffect(() => {
    const syncPageWithHash = () => {
      const nextPage = getPageFromHash(window.location.hash);
      setPage(nextPage);
      setBlogSlug(getBlogSlugFromHash(window.location.hash));

      if (nextPage === "home" && window.location.hash) {
        requestAnimationFrame(() => {
          const target = document.getElementById(window.location.hash.slice(1));
          target?.scrollIntoView();
        });
      }
    };

    window.addEventListener("hashchange", syncPageWithHash);
    window.addEventListener("popstate", syncPageWithHash);

    return () => {
      window.removeEventListener("hashchange", syncPageWithHash);
      window.removeEventListener("popstate", syncPageWithHash);
    };
  }, []);

  React.useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    if (page === "blog") {
      requestAnimationFrame(() => window.scrollTo({ top: 0, left: 0 }));
    } else if (window.location.hash && !window.location.hash.startsWith("#blog")) {
      const scrollToHashTarget = () => {
        const target = document.getElementById(window.location.hash.slice(1));
        target?.scrollIntoView();
      };

      requestAnimationFrame(scrollToHashTarget);
      window.setTimeout(scrollToHashTarget, 300);
    }

    return () => observer.disconnect();
  }, [page, blogSlug]);

  function handleBlogPostSelect(slug) {
    handleNavigate("blog", `#blog/${slug}`);
  }

  function handleBackToBlog() {
    handleNavigate("blog", "#blog");
  }

  return (
    <>
      <Header currentPage={page} onNavigate={handleNavigate} />
      {page === "blog" ? (
        <main>
          <BlogPage
            selectedSlug={blogSlug}
            onSelectPost={handleBlogPostSelect}
            onBackToBlog={handleBackToBlog}
            onAppointment={openModal}
          />
        </main>
      ) : (
        <>
          <Hero onNavigate={handleNavigate} />
          <main>
            <div className="reveal">
              <About />
            </div>
            <div className="reveal">
              <Team />
            </div>
            <div className="reveal">
              <ServicesOverview />
            </div>

            <div className="reveal">
              <Appointment onAppointment={openModal} />
            </div>
            <div className="reveal">
              <Testimonials />
            </div>
            <div className="reveal">
              <ContactSection />
            </div>
          </main>
        </>
      )}
      <Footer onNavigate={handleNavigate} />
      <AppointmentModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
