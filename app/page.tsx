"use client";

import { useEffect, useRef } from "react";

export default function Home() {
  const fadeRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

    const handleScroll = () => {
      const nav = document.querySelector("nav");
      if (!nav) return;
      nav.style.padding = window.scrollY > 50 ? "1rem 4rem" : "1.5rem 4rem";
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* NAV */}
      <nav className="nepebe-nav">
        <a className="nav-logo" href="#">
          <span>N</span>EPEBE
        </a>
        <ul className="nav-links">
          <li><a href="#kutatas">Kutatás</a></li>
          <li><a href="#misszio">Küldetés</a></li>
          <li><a href="#idovonal">Menetrend</a></li>
          <li><a href="#kapcsolat">Kapcsolat</a></li>
        </ul>
        <div className="nav-lang">HU / EN</div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-left">
          <div className="hero-eyebrow">Európai Kutatási Kezdeményezés</div>
          <h1 className="hero-title">
            Az elektromágneses<br /><em>tudomány</em><br />jövője épül.
          </h1>
          <p className="hero-desc">
            A NEPEBE Európa élvonalbeli elektromágneses kutatóintézete — a következő generáció energetikai és rezonancia rendszereit fejlesztjük.
          </p>
          <a href="#kutatas" className="hero-cta">
            Kutatási területek
            <span className="hero-cta-arrow">→</span>
          </a>
          <div className="scroll-hint">
            <div className="scroll-line"></div>
            Görgessen le
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-stats">
            {[
              { num: "4", label: "Kutatási terület" },
              { num: "2030+", label: "Kutatási horizont" },
              { num: "EU", label: "Európai fókusz" },
              { num: "R&D", label: "Deep-tech innováció" },
            ].map((s) => (
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
                    .field-line { fill: none; stroke: #B89A5A; stroke-width: 0.8; opacity: 0; animation: fieldAppear 2s ease forwards; }
                    .field-line:nth-child(1) { animation-delay: 0.1s; }
                    .field-line:nth-child(2) { animation-delay: 0.2s; }
                    .field-line:nth-child(3) { animation-delay: 0.3s; }
                    .field-line:nth-child(4) { animation-delay: 0.4s; }
                    .field-line:nth-child(5) { animation-delay: 0.5s; }
                    .field-line:nth-child(6) { animation-delay: 0.6s; }
                    .field-line:nth-child(7) { animation-delay: 0.7s; }
                    @keyframes fieldAppear { to { opacity: 0.4; } }
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
                <text x="200" y="185" textAnchor="middle" fontFamily="Jost, sans-serif" fontSize="8" fill="#B89A5A" opacity="0.5" letterSpacing="3">ELEKTROMÁGNESES TÉR</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="mission" id="misszio">
        <div className="fade-in">
          <div className="section-label">Küldetés</div>
          <h2 className="section-title">
            Miért létezik<br />a <em>NEPEBE</em>?
          </h2>
          <p className="mission-text">
            Az elektromágneses technológiák az energetika, az orvostudomány és az ipari rendszerek jövőjét formálják. Európának szüksége van egy független, magas szintű kutatóintézetre, amely ezeket az alapvető rendszereket a következő évtizedekre fejleszti.
          </p>
          <blockquote className="mission-pull">
            „A tudomány nem ismer határokat — de az intézményeknek gyökereket kell ereszteniük."
          </blockquote>
          <p className="mission-text">
            A NEPEBE ezt a szerepet tölti be: európai tudományos közösség, nyitott együttműködés és hosszútávú kutatási ökoszisztéma keretein belül.
          </p>
        </div>
        <div className="mission-pillars fade-in">
          {[
            { n: "01", title: "Függetlenség", desc: "Európai alapokon, politikailag semleges kutatási keretben." },
            { n: "02", title: "Nyitottság", desc: "Együttműködés universitásokkal, iparral és partnerintézetekkel." },
            { n: "03", title: "Hosszútáv", desc: "2030-as és azon túlmutató kutatási horizont tervezése." },
            { n: "04", title: "Innováció", desc: "Kísérleti prototípusoktól az ipari alkalmazásokig." },
          ].map((p) => (
            <div className="pillar" key={p.n}>
              <div className="pillar-number">{p.n}</div>
              <div className="pillar-title">{p.title}</div>
              <div className="pillar-desc">{p.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* RESEARCH */}
      <section className="research" id="kutatas">
        <div className="fade-in">
          <div className="section-label gold-label">Kutatási területek</div>
          <h2 className="section-title white-title">
            Négy <em>pilléren</em><br />nyugvó tudomány
          </h2>
        </div>
        <div className="research-grid fade-in">
          {[
            {
              icon: <path d="M13 10V3L4 14h7v7l9-11h-7z"/>,
              title: "Elektromágneses energiaátvitel",
              desc: "Következő generációs, hatékony energiaátviteli rendszerek kutatása és modellezése — a kábelektől a vezeték nélküli megoldásokig.",
              n: "01",
            },
            {
              icon: <><circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></>,
              title: "Rezonancia rendszerek",
              desc: "Kísérleti rezonancia alapú struktúrák vizsgálata és fejlesztése, különös tekintettel a mezővezérlési alkalmazásokra.",
              n: "02",
            },
            {
              icon: <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>,
              title: "Intelligens mezőszabályozás",
              desc: "Adaptív, önszabályozó elektromágneses rendszerek algoritmikus tervezése és szimulációja.",
              n: "03",
            },
            {
              icon: <><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></>,
              title: "Labor infrastruktúra",
              desc: "Következő generációs kísérleti és mérési infrastruktúra tervezése és megvalósítása európai szinten.",
              n: "04",
            },
            {
              icon: <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>,
              title: "Szimulációs környezet",
              desc: "Nagy teljesítményű szimulációs és modellezési rendszerek fejlesztése komplex elektromágneses jelenségekhez.",
              n: "05",
            },
            {
              icon: <><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/></>,
              title: "Európai együttműködés",
              desc: "Partnerségek kutatóintézetekkel, universitásokkal és technológiai vállalatokkal az egész kontinensen.",
              n: "06",
            },
          ].map((card) => (
            <div className="research-card" key={card.n}>
              <div className="research-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#B89A5A" strokeWidth="1.5">{card.icon}</svg>
              </div>
              <h3 className="research-card-title">{card.title}</h3>
              <p className="research-card-desc">{card.desc}</p>
              <div className="research-card-num">{card.n}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TIMELINE */}
      <section className="timeline-section" id="idovonal">
        <div className="fade-in">
          <div className="section-label">Fejlesztési menetrend</div>
          <h2 className="section-title">A <em>jövő</em> lépései</h2>
        </div>
        <div className="timeline fade-in">
          {[
            { year: "2025", phase: "Alapok & Platform", desc: "Intézeti alapítás, kutatási architektúra kialakítása, digitális platform indítása.", active: true },
            { year: "2026", phase: "Szimulációk", desc: "Szimulációs rendszerek kiépítése, első kutatási eredmények publikálása, partnerhálózat bővítése.", active: false },
            { year: "2027", phase: "Prototípusok", desc: "Kísérleti prototípusok fejlesztése, laboratóriumi tesztelés megkezdése.", active: false },
            { year: "2028+", phase: "Labor & Skálázás", desc: "Teljes labor infrastruktúra, ipari alkalmazások és európai kutatói közösség kiépítése.", active: false },
          ].map((t) => (
            <div className="timeline-item" key={t.year}>
              <div className={`timeline-dot${t.active ? " active" : ""}`}></div>
              <div className="timeline-year">{t.year}</div>
              <div className="timeline-phase">{t.phase}</div>
              <div className="timeline-desc">{t.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-section" id="kapcsolat">
        <div className="fade-in">
          <div className="section-label">Kapcsolat</div>
          <h2 className="section-title">Lépjen <em>velünk</em><br />kapcsolatba</h2>
          <div className="gold-divider"></div>
          <div className="contact-info">
            <h3>Érdekli a kutatási együttműködés, partneri kapcsolat, vagy csatlakozna a NEPEBE kezdeményezéshez?</h3>
            <div className="contact-detail">
              {[
                { label: "E-mail", value: "research@nepebe.eu" },
                { label: "Weboldal", value: "nepebe.eu" },
                { label: "Fókusz", value: "Európai elektromágneses kutatás és innováció" },
              ].map((item) => (
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
            <div className="form-group">
              <label className="form-label">Neve</label>
              <input type="text" className="form-input" placeholder="Teljes neve" />
            </div>
            <div className="form-group">
              <label className="form-label">Szervezet / Intézmény</label>
              <input type="text" className="form-input" placeholder="Egyetem, vállalat stb." />
            </div>
            <div className="form-group">
              <label className="form-label">E-mail cím</label>
              <input type="email" className="form-input" placeholder="email@domain.com" />
            </div>
            <div className="form-group">
              <label className="form-label">Üzenet</label>
              <textarea className="form-input" placeholder="Miért szeretne kapcsolatba lépni velünk?" />
            </div>
            <button type="submit" className="submit-btn">Üzenet küldése →</button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="nepebe-footer">
        <div className="footer-logo"><span>N</span>EPEBE</div>
        <div className="footer-copy">© 2025 NEPEBE — Európai Elektromágneses Kutatási Intézet</div>
        <ul className="footer-links">
          <li><a href="#">Adatvédelem</a></li>
          <li><a href="#">Impresszum</a></li>
          <li><a href="mailto:research@nepebe.eu">Kapcsolat</a></li>
        </ul>
      </footer>
    </>
  );
}
