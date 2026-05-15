import React, { useMemo, useState } from "react";
import heroBackground from "./assets/generated/hero-background-v2.png";
import clinicLobby from "./assets/generated/about-clinic.png";
import dentalCabinet from "./assets/generated/dental-treatment.png";
import appointmentRoom from "./assets/reference/appointment-room.png";
import teamAmelia from "./assets/generated/team-amelia.png";
import teamElizabeth from "./assets/generated/team-elizabeth.png";
import blogFirstVisit from "./assets/generated/blog-first-visit.png";
import blogCleaning from "./assets/generated/blog-cleaning.png";
import blogImplantPlanning from "./assets/generated/blog-implant-planning.png";
import blogClearAligners from "./assets/generated/blog-clear-aligners.png";
import blogPediatricVisit from "./assets/generated/blog-pediatric-visit.png";
import blogGumHealth from "./assets/generated/blog-gum-health.png";
import blogSmileDesign from "./assets/generated/blog-smile-design.png";
import blogEmergencyToothache from "./assets/generated/blog-emergency-toothache.png";
import testimonialNicole from "./assets/reference/testimonial-nicole.png";
import testimonialMargaret from "./assets/reference/testimonial-margaret.png";
import testimonialRobert from "./assets/reference/testimonial-robert.png";
import testimonialSophia from "./assets/reference/testimonial-sophia.png";
import testimonialMark from "./assets/reference/testimonial-mark.png";
import testimonialEvelyn from "./assets/reference/testimonial-evelyn.png";

const navLinks = [
  { href: "#about", label: "Hakkımızda", page: "home" },
  { href: "#services", label: "Hizmetler", page: "home" },
  { href: "#blog", label: "Blog", page: "blog" },
  { href: "#contact", label: "İletişim", page: "home" },
];

const teamMembers = [
  ["Dr. Ebru Kozan", "Baş Diş Hekimi", teamAmelia],

  ["Dr. Murat Kozan", "Periodontist", teamElizabeth],
];

const generalServices = [
  [
    "Kapsamlı Diş Muayeneleri",
    "Düzenli kontroller, sorunların erken teşhisini sağlayarak proaktif bakımı destekler ve optimum ağız sağlığını korur.",
  ],
  [
    "Profesyonel Diş Temizliği",
    "Uzman hijyenistlerimiz gelişmiş tekniklerle plak ve diş taşını temizleyerek ferah bir gülüş sağlar.",
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

const specialtyServices = [
  {
    title: "Restoratif ve Cerrahi Hizmetler",
    icon: "syringe",
    items: ["Restoratif Diş Hekimliği", "Ağız Cerrahisi"],
  },
  {
    title: "Özel Tedaviler",
    icon: "bandage",
    items: ["Geleneksel Diş Telleri", "Invisalign Şeffaf Plaklar", "Tedavi Sonrası Koruyucular"],
  },
  {
    title: "Konfor ve Acil Durum Çözümleri",
    icon: "tooth",
    items: ["Sedasyon Diş Hekimliği", "Çene Eklem Bozukluğu Tedavisi", "Acil Diş Hekimliği"],
  },
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

const testimonials = [
  {
    quote:
      "Kozan Diş'in çocuk diş hekimliği hizmetleri çocuklarımın diş bakımına pozitif başlamasını sağladı. Nazik yaklaşım ve sıcak ortam ailemiz için güven verdi.",
    name: "Nicole D.",
    image: testimonialNicole,
  },
  {
    quote:
      "Restoratif diş hekimliği sürecim gülüşümü tamamen dönüştürdü. İmplantlar ve kaplamalar sayesinde yeniden rahatça gülümsüyorum.",
    name: "Margaret R.",
    image: testimonialMargaret,
  },
  {
    quote:
      "İmplant işlemindeki titizlik ve sonuçlar beklentimin üstündeydi. Ekip tüm süreci sakin, anlaşılır ve güvenli hale getirdi.",
    name: "Robert D.",
    image: testimonialRobert,
  },
  {
    quote:
      "Acil diş problemimde hızlı dönüş ve uzman müdahale gerçekten fark yarattı. Tüm diş ihtiyaçlarım için güvendiğim klinik burası.",
    name: "Sophia B.",
    image: testimonialSophia,
  },
  {
    quote:
      "Şeffaf plak tedavisi beklediğimden çok daha konforlu geçti. Planlama, takip ve sonuçlar çok profesyoneldi.",
    name: "Mark W.",
    image: testimonialMark,
  },
  {
    quote:
      "Diş eti sağlığıma gösterdikleri özen günlük konforumda büyük fark yarattı. Kozan Diş güvenilir ve çok yetkin bir ekip.",
    name: "Evelyn M.",
    image: testimonialEvelyn,
  },
];

const blogPosts = [
  {
    title: "İlk Diş Muayenesinde Sizi Neler Bekler? Rahat Bir Başlangıç Rehberi",
    date: "15 Mayıs 2026",
    image: blogFirstVisit,
    tags: ["İlk Muayene", "Dijital Teşhis", "Hasta Konforu"],
  },
  {
    title: "Diş Taşı Temizliği Ne Sıklıkla Yapılmalı? Profesyonel Bakımın Önemi",
    date: "8 Mayıs 2026",
    image: blogCleaning,
    tags: ["Diş Temizliği", "Koruyucu Bakım", "Ağız Hijyeni"],
  },
  {
    title: "İmplant Tedavisinde Dijital Planlama: Daha Öngörülebilir Sonuçlar",
    date: "29 Nisan 2026",
    image: blogImplantPlanning,
    tags: ["İmplant", "Dijital Planlama", "Ağız Cerrahisi"],
  },
  {
    title: "Şeffaf Plaklarla Ortodonti: Günlük Hayatta Konforlu Tedavi Mümkün mü?",
    date: "21 Nisan 2026",
    image: blogClearAligners,
    tags: ["Ortodonti", "Şeffaf Plak", "Estetik Tedavi"],
  },
  {
    title: "Çocuklarda İlk Diş Hekimi Ziyareti: Güven Veren Bir Deneyim Nasıl Kurulur?",
    date: "12 Nisan 2026",
    image: blogPediatricVisit,
    tags: ["Çocuk Diş Hekimliği", "Aile Bakımı", "Koruyucu Diş Hekimliği"],
  },
  {
    title: "Diş Eti Kanaması Neden Olur? Erken Belirtileri Doğru Okumak",
    date: "4 Nisan 2026",
    image: blogGumHealth,
    tags: ["Diş Eti Sağlığı", "Periodontoloji", "Erken Teşhis"],
  },
  {
    title: "Doğal Gülüş Tasarımı: Estetik Diş Hekimliğinde Kişiye Özel Yaklaşım",
    date: "27 Mart 2026",
    image: blogSmileDesign,
    tags: ["Gülüş Tasarımı", "Estetik Diş Hekimliği", "Diş Rengi"],
  },
  {
    title: "Acil Diş Ağrısında Ne Yapmalı? Kliniğe Gelmeden Önce İlk Adımlar",
    date: "18 Mart 2026",
    image: blogEmergencyToothache,
    tags: ["Acil Diş Hekimliği", "Diş Ağrısı", "Hasta Rehberi"],
  },
];

function normalizeSearchText(value) {
  return value
    .toLocaleLowerCase("tr-TR")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ı/g, "i");
}

function ToothLogo() {
  return (
    <span className="logoMark" aria-hidden="true">
      <svg viewBox="0 0 36 36">
        <path d="M4.7 13.4C4.7 7.1 10.4 0 17.5 0s12.8 7.1 12.8 13.4c0 9.5-6.4 17.5-10.1 21.4a3.8 3.8 0 0 1-5.5 0C11.1 30.9 4.7 22.9 4.7 13.4Z" />
        <path d="M15.2 13.4C15.2 7.1 20.9 0 28 0c1.9 0 3.6.5 5.2 1.3a14.5 14.5 0 0 0-4.2 3.5 5.4 5.4 0 0 0-1-.1c-1.9 0-3.9 1-5.5 2.8-1.7 1.8-2.5 4.1-2.5 5.9 0 7 4.5 13.5 8 17.4 3.6-3.9 8-10.4 8-17.4 0-1.8-.8-4.1-2.5-5.9a9 9 0 0 0-1.5-1.3 14.6 14.6 0 0 1 4.5-2.3C39.8 6.5 42 10.2 42 13.4c0 9.5-6.4 17.5-10.1 21.4a3.8 3.8 0 0 1-5.5 0c-3.8-3.9-11.2-11.9-11.2-21.4Z" />
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

function Header({ currentPage, onNavigate, onAppointment }) {
  const [scrolled, setScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`siteHeader ${currentPage === "blog" ? "lightHeader" : ""} ${scrolled ? "scrolled" : ""}`}>
      <a
        className="brand"
        href="#top"
        aria-label="Kozan Ağız ve Diş Sağlığı ana sayfa"
        onClick={(event) => {
          event.preventDefault();
          onNavigate("home", "#top");
        }}
      >
        <ToothLogo />
        <span>
          Kozan <strong>Diş</strong>
        </span>
      </a>
      <nav className="mainNav" aria-label="Ana navigasyon">
        {navLinks.map(({ href, label, page }) => (
          <a
            className={currentPage === page && (page === "blog" || href === "#top") ? "active" : ""}
            href={href}
            key={href}
            onClick={(event) => {
              event.preventDefault();
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
      <img className="heroBgImage" src={heroBackground} alt="" />
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
          <img src={clinicLobby} alt="Kozan Diş klinik lobisi" />
        </div>
        <div className="aboutCopy">
          <SectionIntro label="Hakkında" title="Diş Kliniğimiz" align="left">
            Kozan'da, sıcak ve samimi bir ortamda olağanüstü diş sağlığı hizmeti sunmaya büyük önem
            veriyoruz.
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
        Kozan'ın kalbinde, özverili ekibimiz yer almaktadır.
        Bizler, sıcak ve samimi bir ortamda olağanüstü diş sağlığı hizmeti sunmaya kendini adamış, yüksek nitelikli ve deneyimli diş hekimleri ve personelden oluşan bir grubuz.
      </SectionIntro>
      <div className="teamGrid">
        {teamMembers.map(([name, role, image]) => (
          <article className="teamCard" key={name}>
            <div className="teamPhoto">
              <img src={image} alt={`${name} portresi`} />
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
          <img src={dentalCabinet} alt="Diş tedavisi sırasında hasta ve diş hekimi" />
        </div>
      </div>
    </section>
  );
}

function SpecialtyCare() {
  return (
    <section className="section specialtySection">
      <SectionIntro label="Hizmetler" title="Uzmanlaşmış ve Koruyucu Bakım">
        Rutin kontrolden özel tedavilere, her adımı konfor ve uzun vadeli ağız sağlığı odağıyla
        planlıyoruz.
      </SectionIntro>
      <div className="specialtyGrid">
        {specialtyServices.map((service) => (
          <article className="specialtyCard" key={service.title}>
            <div className="roundIcon dotAccent">
              <Icon name={service.icon} />
            </div>
            <h3>{service.title}</h3>
            <ul>
              {service.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
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
          <img src={appointmentRoom} alt="Kozan Diş tedavi odası" />
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
      <SectionIntro label="Müşteri Yorumları" title="Hastalarımızdan Gelen Güzel Sözler">
        Değerli hastalarımızın dönüşen gülümsemelerinin ve paylaştıkları deneyimlerin öykülerini
        keşfedin. Sizin memnuniyetiniz bizim en büyük başarımızdır.
      </SectionIntro>
      <div className="testimonialFrame">
        <button className="arrowButton arrowLeft" type="button" aria-label="Önceki yorum" onClick={previous}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="m15 6-6 6 6 6" />
          </svg>
        </button>
        <blockquote>
          <span className="quoteMark">“</span>
          <p>{testimonial.quote}</p>
          <img src={testimonial.image} alt={`${testimonial.name} portresi`} />
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

function BlogPage({ onAppointment }) {
  const [query, setQuery] = useState("");
  const normalizedQuery = normalizeSearchText(query.trim());
  const visiblePosts = useMemo(() => {
    if (!normalizedQuery) {
      return blogPosts;
    }

    return blogPosts.filter((post) => {
      const searchable = normalizeSearchText([post.title, post.date, ...post.tags].join(" "));
      return searchable.includes(normalizedQuery);
    });
  }, [normalizedQuery]);

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

        <label className="blogSearch">
          <span className="srOnly">Makalelerde ara</span>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="11" cy="11" r="7" />
            <path d="m16.5 16.5 4 4" />
          </svg>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Makale ara..."
          />
        </label>

        <div className="blogGrid">
          {visiblePosts.map((post) => (
            <article className="blogCard" key={post.title}>
              <button className="blogCardButton" onClick={onAppointment} aria-label={`${post.title} yazısını aç`}>
                <img src={post.image} alt="" />
              </button>
              <div className="blogTags" aria-label="Makale kategorileri">
                {post.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <h3>
                <button className="blogTitleButton" onClick={onAppointment}>{post.title}</button>
              </h3>
              <time dateTime="2024-03-09">{post.date}</time>
            </article>
          ))}
        </div>

        {visiblePosts.length === 0 && (
          <p className="blogEmpty" role="status">
            Bu aramayla eşleşen makale bulunamadı.
          </p>
        )}
      </div>
    </section>
  );
}

function AppointmentModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modalOverlay" onClick={onClose}>
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        <button className="closeButton" onClick={onClose} aria-label="Kapat">
          &times;
        </button>
        <div className="modalHeader">
          <h2>Hızlı Randevu</h2>
          <p>Bizimle iletişime geçerek hemen randevunuzu oluşturabilirsiniz.</p>
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
              <a href="tel:+903220000000">+90 322 000 00 00</a>
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
  const contactMethods = [
    {
      title: "Telefon",
      value: "+90 322 000 00 00",
      href: "tel:+903220000000",
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
      value: "Kozan, Adana",
      href: "#contact",
      detail: "Kozan Ağız ve Diş Sağlığı Merkezi'nde hizmet veriyoruz.",
      icon: "pin",
    },
  ];

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

function Footer() {
  return (
    <footer className="footer tealPattern">
      <div className="footerGrid">
        <div className="footerLead">
          <a className="brand footerBrand" href="#top">
            <ToothLogo />
            <span>
              Kozan <strong>Diş</strong>
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
          <a href="#about">Hakkımızda</a>
          <a href="#services">Hizmetler</a>
          <a href="#pricing">Fiyatlandırma</a>
          <a href="#blog">Blog</a>
          <a href="#contact">İletişim</a>
        </nav>
        <nav aria-label="Yasal bağlantılar">
          <h2>Yararlı Linkler</h2>
          <a href="#contact">Gizlilik Politikası</a>
          <a href="#contact">Çerez Politikası</a>
          <a href="#contact">Lisanslama</a>
          <a href="#contact">404</a>
        </nav>
        <div>
          <h2>İletişim</h2>
          <address>
            Kozan Ağız ve Diş Sağlığı Merkezi
            <br />
            Kozan, Adana
            <br />
            <a href="mailto:iletisim@kozan.dental">iletisim@kozan.dental</a>
            <br />
            <a href="tel:+903220000000">+90 322 000 00 00</a>
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

    return window.location.hash === "#blog" ? "blog" : "home";
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  function handleNavigate(nextPage, hash) {
    setPage(nextPage);
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
      setPage(window.location.hash === "#blog" ? "blog" : "home");
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
    } else if (window.location.hash && window.location.hash !== "#blog") {
      const scrollToHashTarget = () => {
        const target = document.getElementById(window.location.hash.slice(1));
        target?.scrollIntoView();
      };

      requestAnimationFrame(scrollToHashTarget);
      window.setTimeout(scrollToHashTarget, 300);
    }

    return () => observer.disconnect();
  }, [page]);

  return (
    <>
      <Header currentPage={page} onNavigate={handleNavigate} onAppointment={openModal} />
      {page === "blog" ? (
        <main>
          <BlogPage onAppointment={openModal} />
          <Appointment onAppointment={openModal} />
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
              <SpecialtyCare />
            </div>
            <div className="reveal">
              <Appointment onAppointment={openModal} />
            </div>
            <div className="reveal">
              <Testimonials />
            </div>
          </main>
        </>
      )}
      <Footer />
      <AppointmentModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
