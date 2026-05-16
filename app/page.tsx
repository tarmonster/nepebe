"use client";

import { useEffect, useState } from "react";

const content = {
  hu: {
    navLinks: ["Kutatás", "Küldetés", "Menetrend", "Kapcsolat"],
    navHrefs: ["#kutatas", "#misszio", "#idovonal", "#kapcsolat"],
    heroEyebrow: "Európai Kutatási Kezdeményezés",
    heroTitle: ["Az elektromágneses", "tudomány", "jövője épül."],
    heroDesc: "A NEPEBE Európa élvonalbeli elektromágneses kutatóintézete — a következő generáció energetikai és rezonancia rendszereit fejlesztjük.",
    heroCta: "Kutatási területek",
    scrollHint: "Görgessen le",
    stats: [
      { num: "4", label: "Kutatási terület" },
      { num: "2030+", label: "Kutatási horizont" },
      { num: "EU", label: "Európai fókusz" },
      { num: "R&D", label: "Deep-tech innováció" },
    ],
    missionLabel: "Küldetés",
    missionTitle: ["Miért létezik", "a ", "NEPEBE", "?"],
    missionP1: "Az elektromágneses technológiák az energetika, az orvostudomány és az ipari rendszerek jövőjét formálják. Európának szüksége van egy független, magas szintű kutatóintézetre, amely ezeket az alapvető rendszereket a következő évtizedekre fejleszti.",
    missionQuote: `\u201eA tudomány nem ismer határokat \u2014 de az intézményeknek gyökereket kell ereszteniük.\u201d`,
    missionP2: "A NEPEBE ezt a szerepet tölti be: európai tudományos közösség, nyitott együttműködés és hosszútávú kutatási ökoszisztéma keretein belül.",
    pillars: [
      { n: "01", title: "Függetlenség", desc: "Európai alapokon, politikailag semleges kutatási keretben." },
      { n: "02", title: "Nyitottság", desc: "Együttműködés universitásokkal, iparral és partnerintézetekkel." },
      { n: "03", title: "Hosszútáv", desc: "2030-as és azon túlmutató kutatási horizont tervezése." },
      { n: "04", title: "Innováció", desc: "Kísérleti prototípusoktól az ipari alkalmazásokig." },
    ],
    researchLabel: "Kutatási területek",
    researchTitle: ["Hat területen ", "nyugvó", "tudomány"],
    cards: [
      { title: "Elektromágneses energiaátvitel", desc: "Következő generációs, hatékony energiaátviteli rendszerek kutatása és modellezése — a kábelektől a vezeték nélküli megoldásokig." },
      { title: "Rezonancia rendszerek", desc: "Kísérleti rezonancia alapú struktúrák vizsgálata és fejlesztése, különös tekintettel a mezővezérlési alkalmazásokra." },
      { title: "Intelligens mezőszabályozás", desc: "Adaptív, önszabályozó elektromágneses rendszerek algoritmikus tervezése és szimulációja." },
      { title: "Labor infrastruktúra", desc: "Következő generációs kísérleti és mérési infrastruktúra tervezése és megvalósítása európai szinten." },
      { title: "Szimulációs környezet", desc: "Nagy teljesítményű szimulációs és modellezési rendszerek fejlesztése komplex elektromágneses jelenségekhez." },
      { title: "Európai együttműködés", desc: "Partnerségek kutatóintézetekkel, universitásokkal és technológiai vállalatokkal az egész kontinensen." },
    ],
    timelineLabel: "Fejlesztési menetrend",
    timelineTitle: ["A ", "jövő", " lépései"],
    timeline: [
      { year: "2025", phase: "Alapok & Platform", desc: "Intézeti alapítás, kutatási architektúra kialakítása, digitális platform indítása.", active: true },
      { year: "2026", phase: "Szimulációk", desc: "Szimulációs rendszerek kiépítése, első kutatási eredmények publikálása, partnerhálózat bővítése.", active: false },
      { year: "2027", phase: "Prototípusok", desc: "Kísérleti prototípusok fejlesztése, laboratóriumi tesztelés megkezdése.", active: false },
      { year: "2028+", phase: "Labor & Skálázás", desc: "Teljes labor infrastruktúra, ipari alkalmazások és európai kutatói közösség kiépítése.", active: false },
    ],
    contactLabel: "Kapcsolat",
    contactTitle: ["Lépjen ", "velünk", "kapcsolatba"],
    contactIntro: "Érdekli a kutatási együttműködés, partneri kapcsolat, vagy csatlakozna a NEPEBE kezdeményezéshez?",
    contactDetails: [
      { label: "E-mail", value: "research@nepebe.eu" },
      { label: "Weboldal", value: "nepebe.eu" },
      { label: "Fókusz", value: "Európai elektromágneses kutatás és innováció" },
    ],
    formLabels: ["Neve", "Szervezet / Intézmény", "E-mail cím", "Üzenet"],
    formPlaceholders: ["Teljes neve", "Egyetem, vállalat stb.", "email@domain.com", "Miért szeretne kapcsolatba lépni velünk?"],
    submitBtn: "Üzenet küldése →",
    footerLinks: ["Adatvédelem", "Impresszum", "Kapcsolat"],
    footerCopy: "© 2025 NEPEBE — Európai Elektromágneses Kutatási Intézet",
    emLabel: "ELEKTROMÁGNESES TÉR",
  },
  en: {
    navLinks: ["Research", "Mission", "Roadmap", "Contact"],
    navHrefs: ["#research", "#mission", "#roadmap", "#contact"],
    heroEyebrow: "European Research Initiative",
    heroTitle: ["The future of", "electromagnetic", "science is being built."],
    heroDesc: "NEPEBE is Europe's leading electromagnetic research institute — developing next-generation energy and resonance systems for decades to come.",
    heroCta: "Research Areas",
    scrollHint: "Scroll down",
    stats: [
      { num: "4", label: "Research Areas" },
      { num: "2030+", label: "Research Horizon" },
      { num: "EU", label: "European Focus" },
      { num: "R&D", label: "Deep-tech Innovation" },
    ],
    missionLabel: "Mission",
    missionTitle: ["Why does", "", "NEPEBE", " exist?"],
    missionP1: "Electromagnetic technologies are shaping the future of energy, medicine, and industrial systems. Europe needs an independent, high-level research institute to develop these foundational systems for the decades ahead.",
    missionQuote: '"Science knows no borders — but institutions must put down roots."',
    missionP2: "NEPEBE fulfils this role: a European scientific community built on open collaboration and a long-term research ecosystem.",
    pillars: [
      { n: "01", title: "Independence", desc: "Built on European foundations, within a politically neutral research framework." },
      { n: "02", title: "Openness", desc: "Collaboration with universities, industry, and partner institutions." },
      { n: "03", title: "Long-term Vision", desc: "Research horizon planned for 2030 and beyond." },
      { n: "04", title: "Innovation", desc: "From experimental prototypes to industrial applications." },
    ],
    researchLabel: "Research Areas",
    researchTitle: ["Six ", "areas", "of science"],
    cards: [
      { title: "Electromagnetic Energy Transfer", desc: "Research and modelling of next-generation efficient energy transfer systems — from cables to wireless solutions." },
      { title: "Resonance Systems", desc: "Investigation and development of experimental resonance-based structures, with a focus on field control applications." },
      { title: "Intelligent Field Control", desc: "Algorithmic design and simulation of adaptive, self-regulating electromagnetic systems." },
      { title: "Laboratory Infrastructure", desc: "Design and implementation of next-generation experimental and measurement infrastructure at European scale." },
      { title: "Simulation Environment", desc: "Development of high-performance simulation and modelling systems for complex electromagnetic phenomena." },
      { title: "European Collaboration", desc: "Partnerships with research institutes, universities, and technology companies across the continent." },
    ],
    timelineLabel: "Development Roadmap",
    timelineTitle: ["Steps toward the ", "future", ""],
    timeline: [
      { year: "2025", phase: "Foundation & Platform", desc: "Institute establishment, research architecture setup, digital platform launch.", active: true },
      { year: "2026", phase: "Simulations", desc: "Building simulation systems, publishing first research results, expanding partner network.", active: false },
      { year: "2027", phase: "Prototypes", desc: "Development of experimental prototypes, beginning laboratory testing.", active: false },
      { year: "2028+", phase: "Lab & Scale", desc: "Full laboratory infrastructure, industrial applications, and European research community.", active: false },
    ],
    contactLabel: "Contact",
    contactTitle: ["Get in ", "touch", "with us"],
    contactIntro: "Interested in research collaboration, a partnership, or joining the NEPEBE initiative?",
    contactDetails: [
      { label: "Email", value: "research@nepebe.eu" },
      { label: "Website", value: "nepebe.eu" },
      { label: "Focus", value: "European electromagnetic research and innovation" },
    ],
    formLabels: ["Your Name", "Organisation / Institution", "Email Address", "Message"],
    formPlaceholders: ["Full name", "University, company, etc.", "email@domain.com", "Why would you like to get in touch?"],
    submitBtn: "Send Message →",
    footerLinks: ["Privacy Policy", "Imprint", "Contact"],
    footerCopy: "© 2025 NEPEBE — European Electromagnetic Research Institute",
    emLabel: "ELECTROMAGNETIC FIELD",
  },
};

const cardIcons = [
  <path key="1" d="M13 10V3L4 14h7v7l9-11h-7z"/>,
  <><circle key="2a" cx="12" cy="12" r="3"/><path key="2b" d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></>,
  <path key="3" d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>,
  <><rect key="4a" x="3" y="3" width="7" height="7"/><rect key="4b" x="14" y="3" width="7" height="7"/><rect key="4c" x="14" y="14" width="7" height="7"/><rect key="4d" x="3" y="14" width="7" height="7"/></>,
  <path key="5" d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>,
  <><circle key="6a" cx="12" cy="12" r="10"/><path key="6b" d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/></>,
];

export default function Home() {
  const [lang, setLang] = useState<"hu" | "en">("hu");
  const t = content[lang];

  const ids = lang === "hu"
    ? { research: "kutatas", mission: "misszio", timeline: "idovonal", contact: "kapcsolat" }
    : { research: "research", mission: "mission", timeline: "roadmap", contact: "contact" };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
    const handleScroll = () => {
      const nav = document.querySelector("nav");
      if (nav) nav.style.padding = window.scrollY > 50 ? "1rem 4rem" : "1.5rem 4rem";
    };
    window.addEventListener("scroll", handleScroll);
    return () => { observer.disconnect(); window.removeEventListener("scroll", handleScroll); };
  }, [lang]);

  return (
    <>
      {/* NAV */}
      <nav className="nepebe-nav">
        <a className="nav-logo" href="#"><span>N</span>EPEBE</a>
        <ul className="nav-links">
          {t.navLinks.map((link, i) => (
            <li key={link}><a href={t.navHrefs[i]}>{link}</a></li>
          ))}
        </ul>
        <div className="nav-lang" onClick={() => setLang(lang === "hu" ? "en" : "hu")}>
          {lang === "hu" ? "EN" : "HU"}
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-left">
          <div className="hero-eyebrow">{t.heroEyebrow}</div>
          <h1 className="hero-title">
            {t.heroTitle[0]}<br /><em>{t.heroTitle[1]}</em><br />{t.heroTitle[2]}
          </h1>
          <p className="hero-desc">{t.heroDesc}</p>
          <a href={t.navHrefs[0]} className="hero-cta">
            {t.heroCta} <span className="hero-cta-arrow">→</span>
          </a>
          <div className="scroll-hint">
            <div className="scroll-line"></div>
            {t.scrollHint}
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-stats">
            {t.stats.map((s) => (
              <div className="stat-box" key={s.label}>
                <div className="stat-number">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="hero-visual">
            <div className="em-field">
              <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <style>{`
                    .field-line{fill:none;stroke:#B89A5A;stroke-width:0.8;opacity:0;animation:fieldAppear 2s ease forwards}
                    .field-line:nth-child(1){animation-delay:.1s}.field-line:nth-child(2){animation-delay:.2s}
                    .field-line:nth-child(3){animation-delay:.3s}.field-line:nth-child(4){animation-delay:.4s}
                    .field-line:nth-child(5){animation-delay:.5s}.field-line:nth-child(6){animation-delay:.6s}
                    .field-line:nth-child(7){animation-delay:.7s}
                    @keyframes fieldAppear{to{opacity:.4}}
                  `}</style>
                </defs>
                <ellipse className="field-line" cx="200" cy="100" rx="15" ry="80"/>
                <ellipse className="field-line" cx="200" cy="100" rx="40" ry="85"/>
                <ellipse className="field-line" cx="200" cy="100" rx="70" ry="88"/>
                <ellipse className="field-line" cx="200" cy="100" rx="100" ry="90"/>
                <ellipse className="field-line" cx="200" cy="100" rx="130" ry="88"/>
                <ellipse className="field-line" cx="200" cy="100" rx="160" ry="82"/>
                <ellipse className="field-line" cx="200" cy="100" rx="185" ry="70"/>
                <circle cx="200" cy="100" r="4" fill="#B89A5A" opacity="0.9"/>
                <circle cx="200" cy="100" r="10" fill="none" stroke="#B89A5A" strokeWidth="0.8" opacity="0.3"/>
                <circle cx="200" cy="100" r="18" fill="none" stroke="#B89A5A" strokeWidth="0.5" opacity="0.2"/>
                <text x="200" y="185" textAnchor="middle" fontFamily="Jost,sans-serif" fontSize="8" fill="#B89A5A" opacity="0.5" letterSpacing="3">{t.emLabel}</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="mission" id={ids.mission}>
        <div className="fade-in">
          <div className="section-label">{t.missionLabel}</div>
          <h2 className="section-title">
            {t.missionTitle[0]}<br />{t.missionTitle[1]}<em>{t.missionTitle[2]}</em>{t.missionTitle[3]}
          </h2>
          <p className="mission-text">{t.missionP1}</p>
          <blockquote className="mission-pull">{t.missionQuote}</blockquote>
          <p className="mission-text">{t.missionP2}</p>
        </div>
        <div className="mission-pillars fade-in">
          {t.pillars.map((p) => (
            <div className="pillar" key={p.n}>
              <div className="pillar-number">{p.n}</div>
              <div className="pillar-title">{p.title}</div>
              <div className="pillar-desc">{p.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* RESEARCH */}
      <section className="research" id={ids.research}>
        <div className="fade-in">
          <div className="section-label gold-label">{t.researchLabel}</div>
          <h2 className="section-title white-title">
            {t.researchTitle[0]}<em>{t.researchTitle[1]}</em><br />{t.researchTitle[2]}
          </h2>
        </div>
        <div className="research-grid fade-in">
          {t.cards.map((card, i) => (
            <div className="research-card" key={i}>
              <div className="research-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#B89A5A" strokeWidth="1.5">{cardIcons[i]}</svg>
              </div>
              <h3 className="research-card-title">{card.title}</h3>
              <p className="research-card-desc">{card.desc}</p>
              <div className="research-card-num">0{i + 1}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TIMELINE */}
      <section className="timeline-section" id={ids.timeline}>
        <div className="fade-in">
          <div className="section-label">{t.timelineLabel}</div>
          <h2 className="section-title">
            {t.timelineTitle[0]}<em>{t.timelineTitle[1]}</em>{t.timelineTitle[2]}
          </h2>
        </div>
        <div className="timeline fade-in">
          {t.timeline.map((item) => (
            <div className="timeline-item" key={item.year}>
              <div className={`timeline-dot${item.active ? " active" : ""}`}></div>
              <div className="timeline-year">{item.year}</div>
              <div className="timeline-phase">{item.phase}</div>
              <div className="timeline-desc">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-section" id={ids.contact}>
        <div className="fade-in">
          <div className="section-label">{t.contactLabel}</div>
          <h2 className="section-title">
            {t.contactTitle[0]}<em>{t.contactTitle[1]}</em><br />{t.contactTitle[2]}
          </h2>
          <div className="gold-divider"></div>
          <div className="contact-info">
            <h3>{t.contactIntro}</h3>
            <div className="contact-detail">
              {t.contactDetails.map((item) => (
                <div className="contact-item" key={item.label}>
                  <div className="contact-item-label">{item.label}</div>
                  <div className="contact-item-value">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="fade-in">
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            {t.formLabels.map((label, i) => (
              <div className="form-group" key={label}>
                <label className="form-label">{label}</label>
                {i === 3
                  ? <textarea className="form-input" placeholder={t.formPlaceholders[i]} />
                  : <input type={i === 2 ? "email" : "text"} className="form-input" placeholder={t.formPlaceholders[i]} />
                }
              </div>
            ))}
            <button type="submit" className="submit-btn">{t.submitBtn}</button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="nepebe-footer">
        <div className="footer-logo"><span>N</span>EPEBE</div>
        <div className="footer-copy">{t.footerCopy}</div>
        <ul className="footer-links">
          {t.footerLinks.map((link, i) => (
            <li key={link}>
              <a href={i === 2 ? "mailto:research@nepebe.eu" : "#"}>{link}</a>
            </li>
          ))}
        </ul>
      </footer>
    </>
  );
}
