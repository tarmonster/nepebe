"use client";

import Link from "next/link";
import { useEffect, useState, useCallback } from "react";

const content = {
  hu: {
    navLinks: ["Kutatás", "Küldetés", "Menetrend", "Csapat", "Partnerség", "Helyszín", "Kapcsolat"],
    navHrefs: ["#kutatas", "#misszio", "#idovonal", "#csapat", "#partnerseg", "#helyszin", "#kapcsolat"],
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
    missionTitle: ["Miért létezik", "a ", "NEPEBE"],
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
      { year: "2026", phase: "Alapok & Platform", desc: "Intézeti alapítás, kutatási architektúra kialakítása, digitális platform indítása.", active: true },
      { year: "2027", phase: "Szimulációk", desc: "Szimulációs rendszerek kiépítése, első kutatási eredmények publikálása, partnerhálózat bővítése.", active: false },
      { year: "2028", phase: "Prototípusok", desc: "Kísérleti prototípusok fejlesztése, laboratóriumi tesztelés megkezdése.", active: false },
      { year: "2030+", phase: "Labor & Skálázás", desc: "Teljes labor infrastruktúra, ipari alkalmazások és európai kutatói közösség kiépítése.", active: false },
    ],
    teamLabel: "Csapat",
    teamTitle: ["Az alapítók és a ", "jövő", " munkatársai"],
    teamDesc: "A NEPEBE csapata épül. Ha úgy gondolod, hogy a tudásod és a szenvedélyed illik ehhez a küldetéshez, várjuk a jelentkezésed.",
    founderName: "Nemes Péter Bence",
    founderRole: "Alapító",
    founderBio: "Több évtizedes szakmai tapasztalattal rendelkező elektronikai és IT szakember. A NEPEBE kezdeményezés elindítója és vezető alapítója.",
    openBadge: "Nyitott pozíció",
    openCta: "Jelentkezem →",
    openPositions: [
      { role: "Vezető Kutató / Chief Scientist", desc: "Elektromágneses kutatás irányítása, PhD vagy egyenértékű tapasztalattal." },
      { role: "Villamosmérnök / Fizikus", desc: "Prototípusok fejlesztése, laboratóriumi mérések és kísérleti rendszerek tervezése." },
      { role: "Szimulációs Specialista", desc: "Elektromágneses modellezés és szimulációs környezetek fejlesztése." },
      { role: "Projektmenedzser", desc: "Kutatási projektek koordinációja, EU pályázatok és partnerkapcsolatok kezelése." },
      { role: "Kommunikációs Munkatárs", desc: "Tudományos kommunikáció, PR és partnerkapcsolatok építése európai szinten." },
      { role: "IT / Adatmenedzsment", desc: "Kutatási adatok kezelése, digitális infrastruktúra fejlesztése és üzemeltetése." },
      { role: "HR Specialista", desc: "Toborzás, munkaügyi folyamatok kialakítása, európai munkajogi megfelelés és szervezetfejlesztés." },
    ],
    partnerLabel: "Partnerség",
    partnerTitle: ["Építsük együtt a ", "jövőt"],
    partnerDesc: "A NEPEBE nyitott minden olyan együttműködésre, amely az elektromágneses tudomány fejlődését és európai jelenlétét erősíti — legyen szó kutatási partnerségről, ipari szponzorációról vagy EU-s pályázati együttműködésről.",
    partnerTypes: [
      {
        icon: "EU",
        title: "EU Pályázati Partner",
        desc: "Horizon Europe és egyéb európai kutatási programokban való közös részvétel. Konzorciumi tagság, közös projektvezetés.",
        items: ["Horizon Europe konzorcium", "Közös kutatási projektek", "EU innovációs alapok"],
      },
      {
        icon: "IP",
        title: "Ipari Partner",
        desc: "Vállalati kutatás-fejlesztési együttműködés, technológia-transzfer és alkalmazott kutatási projektek.",
        items: ["R&D együttműködés", "Technológia-transzfer", "Közös szabadalmak"],
      },
      {
        icon: "ST",
        title: "Stratégiai Szponzor",
        desc: "Az intézet hosszútávú működésének és infrastruktúrájának támogatása névadó partneri státusszal.",
        items: ["Névadói jogok", "Kutatási eredmények elsőbbsége", "Tanácsadói testületi tagság"],
      },
      {
        icon: "EG",
        title: "Egyetemi & Akadémiai Partner",
        desc: "Közös kutatási programok, PhD ösztöndíjak és tudományos csere európai universitásokkal.",
        items: ["Közös kutatási programok", "PhD ösztöndíjak", "Tudományos csere"],
      },
    ],
    partnerCta: "Partnerségi érdeklődés →",
    locationLabel: "Helyszín",
    locationTitle: ["Stratégiai ", "elhelyezkedés"],
    locationDesc: "Nagyrábé nem véletlenül lett a NEPEBE székhelye. A település kiemelkedő stratégiai pozícióban helyezkedik el — ipari óriások, tudományos központok és kiváló közlekedési infrastruktúra közelében.",
    locationPoints: [
      { icon: "🎓", title: "Debrecen — 25 km", desc: "A Debreceni Egyetem kutatói és hallgatói bázisa, Magyarország egyik legnagyobb tudományos centruma. Aktív együttműködési potenciál kutatók és PhD hallgatók bevonásával." },
      { icon: "🏭", title: "BMW Gyár — 30 km", desc: "A BMW debreceni gigagyára Közép-Európa egyik legnagyobb ipari beruházása. Közvetlen elektromágneses és elektronikai kutatási együttműködési lehetőség." },
      { icon: "⚡", title: "Akkumulátorgyárak", desc: "Több európai akkumulátorgyár a közvetlen közelben — CATL és egyéb ipari szereplők, akiknek az elektromágneses kutatás alapvető érdeke." },
      { icon: "🛣️", title: "Kiváló közlekedés", desc: "Autópálya, vasút és Debrecen Nemzetközi Repülőtér egyaránt elérhető közelségben. Európai partnerek és befektetők számára könnyen megközelíthető helyszín." },
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
    submitSending: "Küldés...",
    submitSent: "Elküldve ✓",
    submitError: "Hiba történt",
    submitThanks: "Köszönjük! Hamarosan felvesszük Önnel a kapcsolatot.",
    footerLinks: ["Adatvédelem", "Impresszum", "Kapcsolat"],
    footerCopy: "© 2025 NEPEBE — Európai Elektromágneses Kutatási Intézet",
    cookieText: "Ez a weboldal kizárólag a működéshez szükséges sütiket használ.",
    cookieAccept: "Elfogadom",
    cookieMore: "Részletek",
  },
  en: {
    navLinks: ["Research", "Mission", "Roadmap", "Team", "Partnership", "Location", "Contact"],
    navHrefs: ["#research", "#mission", "#roadmap", "#team", "#partnership", "#location", "#contact"],
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
    missionTitle: ["Why does", "", "NEPEBE exist"],
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
      { year: "2026", phase: "Foundation & Platform", desc: "Institute establishment, research architecture setup, digital platform launch.", active: true },
      { year: "2027", phase: "Simulations", desc: "Building simulation systems, publishing first research results, expanding partner network.", active: false },
      { year: "2028", phase: "Prototypes", desc: "Development of experimental prototypes, beginning laboratory testing.", active: false },
      { year: "2030+", phase: "Lab & Scale", desc: "Full laboratory infrastructure, industrial applications, and European research community.", active: false },
    ],
    teamLabel: "Team",
    teamTitle: ["The founders and ", "future", " colleagues"],
    teamDesc: "The NEPEBE team is growing. If you believe your expertise and passion align with this mission, we welcome your application.",
    founderName: "Péter Bence Nemes",
    founderRole: "Founder",
    founderBio: "Electronics and IT professional with decades of experience. Initiator and lead founder of the NEPEBE initiative.",
    openBadge: "Open position",
    openCta: "Apply →",
    openPositions: [
      { role: "Chief Scientist / Lead Researcher", desc: "Leading electromagnetic research direction, PhD or equivalent experience required." },
      { role: "Electrical Engineer / Physicist", desc: "Prototype development, laboratory measurements and experimental system design." },
      { role: "Simulation Specialist", desc: "Electromagnetic modelling and development of simulation environments." },
      { role: "Project Manager", desc: "Research project coordination, EU grant management and partner relations." },
      { role: "Communications Officer", desc: "Scientific communication, PR and building partnerships at European level." },
      { role: "IT / Data Management", desc: "Research data management, digital infrastructure development and operations." },
      { role: "HR Specialist", desc: "Recruitment, HR process development, European employment law compliance and organisational growth." },
    ],
    partnerLabel: "Partnership",
    partnerTitle: ["Building the ", "future", " together"],
    partnerDesc: "NEPEBE is open to all forms of collaboration that strengthen the advancement of electromagnetic science and its European presence — whether research partnership, industrial sponsorship, or EU grant collaboration.",
    partnerTypes: [
      {
        icon: "EU",
        title: "EU Grant Partner",
        desc: "Joint participation in Horizon Europe and other European research programmes. Consortium membership and co-leadership.",
        items: ["Horizon Europe consortium", "Joint research projects", "EU innovation funds"],
      },
      {
        icon: "IP",
        title: "Industrial Partner",
        desc: "Corporate R&D collaboration, technology transfer and applied research projects.",
        items: ["R&D collaboration", "Technology transfer", "Joint patents"],
      },
      {
        icon: "ST",
        title: "Strategic Sponsor",
        desc: "Long-term support of the institute's operations and infrastructure with naming partner status.",
        items: ["Naming rights", "Priority access to research", "Advisory board membership"],
      },
      {
        icon: "EG",
        title: "University & Academic Partner",
        desc: "Joint research programmes, PhD scholarships and scientific exchange with European universities.",
        items: ["Joint research programmes", "PhD scholarships", "Scientific exchange"],
      },
    ],
    partnerCta: "Partnership enquiry →",
    locationLabel: "Location",
    locationTitle: ["Strategic ", "location"],
    locationDesc: "Nagyrábé was not chosen by chance as the home of NEPEBE. The settlement holds an outstanding strategic position — close to industrial giants, scientific centres and excellent transport infrastructure.",
    locationPoints: [
      { icon: "🎓", title: "Debrecen — 25 km", desc: "The University of Debrecen provides a strong base of researchers and students, one of Hungary's largest scientific centres. Active collaboration potential with researchers and PhD students." },
      { icon: "🏭", title: "BMW Plant — 30 km", desc: "The BMW gigafactory in Debrecen is one of Central Europe's largest industrial investments. Direct electromagnetic and electronics research collaboration opportunity." },
      { icon: "⚡", title: "Battery Factories", desc: "Several European battery manufacturers in the immediate vicinity — CATL and other industrial players for whom electromagnetic research is a core interest." },
      { icon: "🛣️", title: "Excellent Transport Links", desc: "Motorway, railway and Debrecen International Airport all within easy reach. An accessible location for European partners and investors." },
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
    submitSending: "Sending...",
    submitSent: "Sent ✓",
    submitError: "Error",
    submitThanks: "Thank you! We will be in touch soon.",
    footerLinks: ["Privacy Policy", "Imprint", "Contact"],
    footerCopy: "© 2025 NEPEBE — European Electromagnetic Research Institute",
    cookieText: "This website uses only essential cookies necessary for its operation.",
    cookieAccept: "Accept",
    cookieMore: "Details",
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

function SplashScreen({ onDone }: { onDone: () => void }) {
  const [fading, setFading] = useState(false);
  useEffect(() => {
    const t1 = setTimeout(() => setFading(true), 2800);
    const t2 = setTimeout(() => onDone(), 3600);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [onDone]);
  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 9999, background: "#F5F2EC",
      display: "flex", alignItems: "center", justifyContent: "center",
      opacity: fading ? 0 : 1, transition: "opacity 0.8s ease", pointerEvents: "none",
    }}>
      <svg width="380" height="300" viewBox="0 0 380 300">
        <defs>
          <style>{`
            .sp-title{animation:spIn 0.8s ease 0.1s both}
            .sp-l1{animation:spIn 0.6s ease 0.2s both}.sp-l2{animation:spIn 0.6s ease 0.25s both}
            .sp-a1{animation:spIn 0.5s ease 0.3s both}.sp-a2{animation:spIn 0.5s ease 0.5s both}
            .sp-a3{animation:spIn 0.5s ease 0.7s both}.sp-a4{animation:spIn 0.5s ease 0.9s both}
            .sp-a5{animation:spIn 0.5s ease 1.1s both}.sp-a6{animation:spIn 0.5s ease 1.3s both}
            .sp-a7{animation:spIn 0.5s ease 1.5s both}
            .sp-l3{animation:spIn 0.6s ease 1.7s both}.sp-l4{animation:spIn 0.6s ease 1.75s both}
            .sp-sub{animation:spIn 0.7s ease 1.9s both}
            @keyframes spIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
          `}</style>
        </defs>
        <text className="sp-title" fontFamily="'Cormorant Garamond','Georgia',serif" fontSize="50" fontWeight="500" letterSpacing="15" textAnchor="middle" x="192" y="58">
          <tspan fill="#B89A5A">N</tspan><tspan fill="#1C2B4A">EPEBE</tspan>
        </text>
        <line className="sp-l1" x1="70" y1="72" x2="310" y2="72" stroke="#B89A5A" strokeWidth="0.8"/>
        <line className="sp-l2" x1="70" y1="75" x2="310" y2="75" stroke="#B89A5A" strokeWidth="0.3" opacity="0.4"/>
        <g transform="translate(190,175)">
          <ellipse className="sp-a1" fill="none" stroke="#B89A5A" strokeWidth="1" cx="0" cy="0" rx="11" ry="68"/>
          <ellipse className="sp-a2" fill="none" stroke="#B89A5A" strokeWidth="1" cx="0" cy="0" rx="28" ry="71"/>
          <ellipse className="sp-a3" fill="none" stroke="#B89A5A" strokeWidth="0.9" cx="0" cy="0" rx="48" ry="73"/>
          <ellipse className="sp-a4" fill="none" stroke="#B89A5A" strokeWidth="0.8" cx="0" cy="0" rx="70" ry="69"/>
          <ellipse className="sp-a5" fill="none" stroke="#B89A5A" strokeWidth="0.6" opacity="0.55" cx="0" cy="0" rx="90" ry="62"/>
          <ellipse className="sp-a6" fill="none" stroke="#B89A5A" strokeWidth="0.5" opacity="0.35" cx="0" cy="0" rx="108" ry="50"/>
          <ellipse className="sp-a7" fill="none" stroke="#B89A5A" strokeWidth="0.4" opacity="0.2" cx="0" cy="0" rx="124" ry="34"/>
          <circle fill="#1C2B4A" cx="0" cy="0" r="5"/>
          <circle fill="none" stroke="#B89A5A" strokeWidth="0.9" cx="0" cy="0" r="11"/>
          <circle fill="none" stroke="#B89A5A" strokeWidth="0.5" opacity="0.4" cx="0" cy="0" r="19"/>
          <line x1="-138" y1="0" x2="-24" y2="0" stroke="#B89A5A" strokeWidth="0.8" opacity="0.6"/>
          <line x1="24" y1="0" x2="138" y2="0" stroke="#B89A5A" strokeWidth="0.8" opacity="0.6"/>
        </g>
        <line className="sp-l3" x1="70" y1="258" x2="310" y2="258" stroke="#B89A5A" strokeWidth="0.3" opacity="0.4"/>
        <line className="sp-l4" x1="70" y1="261" x2="310" y2="261" stroke="#B89A5A" strokeWidth="0.8"/>
        <text className="sp-sub" fontFamily="'Cormorant Garamond','Georgia',serif" fontSize="8.5" letterSpacing="3" textAnchor="middle" x="190" y="282" fill="#B89A5A">
          EUROPEAN ELECTROMAGNETIC RESEARCH INSTITUTE
        </text>
      </svg>
    </div>
  );
}

function CookieBanner({ lang }: { lang: "hu" | "en" }) {
  const [visible, setVisible] = useState(false);
  const t = content[lang];

  useEffect(() => {
    const accepted = localStorage.getItem("nepebe-cookie");
    if (!accepted) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("nepebe-cookie", "1");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div style={{
      position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 8888,
      background: "#1C2B4A",
      borderTop: "1px solid rgba(184,154,90,0.3)",
      padding: "1.2rem 4rem",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      gap: "2rem", flexWrap: "wrap",
    }}>
      <p style={{ fontSize: "0.85rem", color: "rgba(253,252,249,0.8)", lineHeight: 1.6, margin: 0 }}>
        {t.cookieText}{" "}
        <Link href="/adatvedelem" style={{ color: "#B89A5A", textDecoration: "underline" }}>
          {t.cookieMore}
        </Link>
      </p>
      <button onClick={accept} style={{
        fontFamily: "'Jost',sans-serif",
        fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase",
        color: "#1C2B4A", background: "#B89A5A",
        border: "none", padding: "0.7rem 2rem",
        cursor: "pointer", whiteSpace: "nowrap",
        transition: "opacity 0.2s",
      }}>
        {t.cookieAccept}
      </button>
    </div>
  );
}

export default function Home() {
  const [splash, setSplash] = useState(true);
  const [lang, setLang] = useState<"hu" | "en">("hu");
  const [formStatus, setFormStatus] = useState<"idle"|"sending"|"sent"|"error">("idle");
  const t = content[lang];
  const handleSplashDone = useCallback(() => setSplash(false), []);

  const ids = lang === "hu"
    ? { research: "kutatas", mission: "misszio", timeline: "idovonal", team: "csapat", partner: "partnerseg", location: "helyszin", contact: "kapcsolat" }
    : { research: "research", mission: "mission", timeline: "roadmap", team: "team", partner: "partnership", location: "location", contact: "contact" };

  useEffect(() => {
    if (splash) return;
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
  }, [lang, splash]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("sending");
    const data = new FormData(e.currentTarget);
    const res = await fetch("https://formspree.io/f/xwvzeegp", {
      method: "POST", body: data, headers: { Accept: "application/json" },
    });
    setFormStatus(res.ok ? "sent" : "error");
  };

  return (
    <>
      {splash && <SplashScreen onDone={handleSplashDone} />}
      {!splash && <CookieBanner lang={lang} />}
      <div style={{ opacity: splash ? 0 : 1, transition: "opacity 0.6s ease" }}>

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
              {t.missionTitle[0]}<br />{t.missionTitle[1]}<em>{t.missionTitle[2]}</em>
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

        {/* TEAM */}
        <section style={{ padding: "7rem 4rem", background: "var(--white,#FDFCF9)" }} id={ids.team}>
          <div className="fade-in" style={{ marginBottom: "4rem" }}>
            <div className="section-label">{t.teamLabel}</div>
            <h2 className="section-title">
              {t.teamTitle[0]}<em>{t.teamTitle[1]}</em>{t.teamTitle[2]}
            </h2>
            <p style={{ color: "var(--ink-mid,#3D3830)", fontSize: "1rem", lineHeight: "1.9", maxWidth: "600px", marginTop: "1rem" }}>
              {t.teamDesc}
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: "1.5rem" }} className="fade-in">
            <div style={{ border: "1px solid rgba(184,154,90,0.3)", padding: "2.5rem 2rem", background: "var(--cream,#F5F2EC)" }}>
              <div style={{ width: "80px", height: "80px", border: "1px solid rgba(184,154,90,0.4)", marginBottom: "1.5rem", background: "rgba(184,154,90,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#B89A5A" strokeWidth="1">
                  <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
                </svg>
              </div>
              <div style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold,#B89A5A)", marginBottom: "0.5rem" }}>{t.founderRole}</div>
              <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.4rem", fontWeight: 400, color: "var(--blue-deep,#1C2B4A)", marginBottom: "1rem", lineHeight: 1.3 }}>{t.founderName}</h3>
              <p style={{ fontSize: "0.85rem", color: "var(--ink-light,#7A7268)", lineHeight: 1.8 }}>{t.founderBio}</p>
            </div>
            {t.openPositions.map((pos) => (
              <div key={pos.role} style={{ border: "1px dashed rgba(184,154,90,0.35)", padding: "2.5rem 2rem", background: "transparent", transition: "border-color 0.3s" }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(184,154,90,0.7)")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(184,154,90,0.35)")}>
                <div style={{ display: "inline-block", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold,#B89A5A)", border: "1px solid rgba(184,154,90,0.4)", padding: "0.2rem 0.6rem", marginBottom: "1.5rem" }}>{t.openBadge}</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.2rem", fontWeight: 400, color: "var(--ink,#1A1814)", marginBottom: "0.8rem", lineHeight: 1.3 }}>{pos.role}</h3>
                <p style={{ fontSize: "0.85rem", color: "var(--ink-light,#7A7268)", lineHeight: 1.8, marginBottom: "1.5rem" }}>{pos.desc}</p>
                <a href={`#${ids.contact}`} style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold,#B89A5A)", textDecoration: "none" }}>{t.openCta}</a>
              </div>
            ))}
          </div>
        </section>

        {/* PARTNERSHIP */}
        <section style={{ padding: "7rem 4rem", background: "var(--blue-deep,#1C2B4A)" }} id={ids.partner}>
          <div className="fade-in" style={{ marginBottom: "4rem" }}>
            <div className="section-label" style={{ color: "rgba(184,154,90,0.8)" }}>
              <span style={{ display: "inline-block", width: "30px", height: "1px", background: "rgba(184,154,90,0.8)", marginRight: "1rem" }}></span>
              {t.partnerLabel}
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 300, fontSize: "clamp(2rem,4vw,3.5rem)", lineHeight: 1.15, color: "#FDFCF9", marginBottom: "1.5rem" }}>
              {t.partnerTitle[0]}<em style={{ fontStyle: "italic", color: "#B89A5A" }}>{t.partnerTitle[1]}</em>
            </h2>
            <p style={{ color: "rgba(253,252,249,0.6)", fontSize: "1rem", lineHeight: "1.9", maxWidth: "640px" }}>
              {t.partnerDesc}
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", gap: "1px", background: "rgba(255,255,255,0.06)" }} className="fade-in">
            {t.partnerTypes.map((p) => (
              <div key={p.title} style={{ background: "var(--blue-deep,#1C2B4A)", padding: "3rem 2.5rem", position: "relative", transition: "background 0.3s" }}
                onMouseEnter={e => (e.currentTarget.style.background = "#2E4270")}
                onMouseLeave={e => (e.currentTarget.style.background = "var(--blue-deep,#1C2B4A)")}>
                <div style={{ width: "52px", height: "52px", border: "1px solid rgba(184,154,90,0.35)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "2rem" }}>
                  <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "0.75rem", letterSpacing: "0.1em", color: "#B89A5A", fontWeight: 500 }}>{p.icon}</span>
                </div>
                <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.4rem", fontWeight: 400, color: "#FDFCF9", marginBottom: "1rem", lineHeight: 1.3 }}>{p.title}</h3>
                <p style={{ fontSize: "0.85rem", color: "rgba(253,252,249,0.55)", lineHeight: 1.8, marginBottom: "1.5rem" }}>{p.desc}</p>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {p.items.map(item => (
                    <li key={item} style={{ fontSize: "0.8rem", color: "rgba(184,154,90,0.7)", lineHeight: 2, display: "flex", alignItems: "center", gap: "0.6rem" }}>
                      <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#B89A5A", flexShrink: 0 }}></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="fade-in" style={{ marginTop: "3rem", textAlign: "center" }}>
            <a href={`#${ids.contact}`} style={{
              display: "inline-flex", alignItems: "center", gap: "1rem",
              fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase",
              color: "#B89A5A", textDecoration: "none",
              border: "1px solid rgba(184,154,90,0.4)", padding: "1rem 2.5rem",
              transition: "all 0.3s",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "#B89A5A"; e.currentTarget.style.color = "#1C2B4A"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#B89A5A"; }}>
              {t.partnerCta}
            </a>
          </div>
        </section>


        {/* LOCATION */}
        <section style={{ padding: "7rem 4rem", background: "var(--cream-dark,#EDE8DE)" }} id={ids.location}>
          <div className="fade-in" style={{ marginBottom: "4rem" }}>
            <div className="section-label">
              <span style={{ display: "inline-block", width: "30px", height: "1px", background: "var(--gold,#B89A5A)", marginRight: "1rem" }}></span>
              {t.locationLabel}
            </div>
            <h2 className="section-title">
              {t.locationTitle[0]}<em>{t.locationTitle[1]}</em>
            </h2>
            <p style={{ color: "var(--ink-mid,#3D3830)", fontSize: "1rem", lineHeight: "1.9", maxWidth: "640px", marginTop: "1rem" }}>
              {t.locationDesc}
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", gap: "1.5rem" }} className="fade-in">
            {t.locationPoints.map((point: { icon: string; title: string; desc: string }) => (
              <div key={point.title} style={{ background: "var(--white,#FDFCF9)", border: "1px solid rgba(184,154,90,0.2)", padding: "2.5rem 2rem", transition: "border-color 0.3s" }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(184,154,90,0.6)")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(184,154,90,0.2)")}>
                <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{point.icon}</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.3rem", fontWeight: 400, color: "var(--blue-deep,#1C2B4A)", marginBottom: "0.8rem", lineHeight: 1.3 }}>{point.title}</h3>
                <p style={{ fontSize: "0.85rem", color: "var(--ink-light,#7A7268)", lineHeight: 1.8 }}>{point.desc}</p>
              </div>
            ))}
          </div>
          <div className="fade-in" style={{ marginTop: "4rem", padding: "2.5rem", background: "var(--white,#FDFCF9)", border: "1px solid rgba(184,154,90,0.2)", display: "flex", alignItems: "center", gap: "2rem", flexWrap: "wrap" }}>
            <div style={{ width: "4px", height: "60px", background: "var(--gold,#B89A5A)", flexShrink: 0 }}></div>
            <div>
              <div style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold,#B89A5A)", marginBottom: "0.4rem" }}>
                {lang === "hu" ? "Székhely" : "Headquarters"}
              </div>
              <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.4rem", fontWeight: 400, color: "var(--blue-deep,#1C2B4A)" }}>
                NEPEBE — 4173 Nagyrábé, Magyarország
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT */
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
            <form className="contact-form" onSubmit={handleSubmit}>
              {t.formLabels.map((label, i) => (
                <div className="form-group" key={label}>
                  <label className="form-label">{label}</label>
                  {i === 3
                    ? <textarea className="form-input" name={["name","organization","email","message"][i]} placeholder={t.formPlaceholders[i]} />
                    : <input type={i === 2 ? "email" : "text"} name={["name","organization","email","message"][i]} className="form-input" placeholder={t.formPlaceholders[i]} />
                  }
                </div>
              ))}
              <button type="submit" className="submit-btn" disabled={formStatus === "sending" || formStatus === "sent"}>
                {formStatus === "sending" ? t.submitSending : formStatus === "sent" ? t.submitSent : formStatus === "error" ? t.submitError : t.submitBtn}
              </button>
              {formStatus === "sent" && <p style={{ marginTop: "1rem", fontSize: "0.85rem", color: "var(--gold)" }}>{t.submitThanks}</p>}
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
                {i === 2 ? <a href="mailto:research@nepebe.eu">{link}</a> : <Link href={i === 0 ? "/adatvedelem" : "/impresszum"}>{link}</Link>}
              </li>
            ))}
          </ul>
        </footer>

      </div>
    </>
  );
}
