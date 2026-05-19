"use client";

import Link from "next/link";
import { useEffect, useState, useCallback } from "react";

type Lang = "hu" | "en" | "de" | "fr";

const content: Record<Lang, any> = {
  hu: {
    navLinks: ["Kutatás", "Küldetés", "Menetrend", "Csapat", "Partnerség", "Helyszín", "GYIK", "Kapcsolat"],
    navHrefs: ["#kutatas", "#misszio", "#idovonal", "#csapat", "#partnerseg", "#helyszin", "#gyik", "#kapcsolat"],
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
      { n: "05", title: "Kutatói szabadság", desc: "Az intézet alapelve, hogy a tudomány csak szabad szellemben tud igazán kibontakozni. Kutatóink teret kapnak a kísérletezéshez, az eredeti gondolkodáshoz és a konvencionális határok átlépéséhez." },
      { n: "06", title: "Tehetséggondozás", desc: "A NEPEBE elkötelezett a jövő tudományos és műszaki tehetségeinek felkutatása és gondozása iránt. Mentorálási programjainkkal a következő generáció kutatóit kívánjuk formálni." },
    ],
    researchLabel: "Kutatási területek",
    researchTitle: ["Hat területen ", "nyugvó", "tudomány"],
    cards: [
      { title: "Elektromágneses energiaátvitel", desc: "Következő generációs, hatékony energiaátviteli rendszerek kutatása és modellezése." },
      { title: "Rezonancia rendszerek", desc: "Kísérleti rezonancia alapú struktúrák vizsgálata és fejlesztése." },
      { title: "Intelligens mezőszabályozás", desc: "Adaptív, önszabályozó elektromágneses rendszerek algoritmikus tervezése és szimulációja." },
      { title: "Labor infrastruktúra", desc: "Következő generációs kísérleti és mérési infrastruktúra tervezése európai szinten." },
      { title: "Szimulációs környezet", desc: "Nagy teljesítményű szimulációs rendszerek fejlesztése komplex elektromágneses jelenségekhez." },
      { title: "Európai együttműködés", desc: "Partnerségek kutatóintézetekkel, universitásokkal és technológiai vállalatokkal." },
    ],
    timelineLabel: "Fejlesztési menetrend",
    timelineTitle: ["A ", "jövő", " lépései"],
    timeline: [
      { year: "2026", phase: "Alapok & Platform", desc: "Intézeti alapítás, kutatási architektúra kialakítása, digitális platform indítása.", active: true },
      { year: "2027", phase: "Szimulációk", desc: "Szimulációs rendszerek kiépítése, első kutatási eredmények publikálása.", active: false },
      { year: "2028", phase: "Prototípusok", desc: "Kísérleti prototípusok fejlesztése, laboratóriumi tesztelés megkezdése.", active: false },
      { year: "2030+", phase: "Labor & Skálázás", desc: "Teljes labor infrastruktúra, ipari alkalmazások és európai kutatói közösség.", active: false },
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
      { role: "HR Specialista", desc: "Toborzás, munkaügyi folyamatok kialakítása, európai munkajogi megfelelés." },
    ],
    partnerLabel: "Partnerség",
    partnerTitle: ["Építsük együtt a ", "jövőt"],
    partnerDesc: "A NEPEBE nyitott minden olyan együttműködésre, amely az elektromágneses tudomány fejlődését és európai jelenlétét erősíti.",
    partnerTypes: [
      { icon: "EU", title: "EU Pályázati Partner", desc: "Horizon Europe és egyéb európai kutatási programokban való közös részvétel.", items: ["Horizon Europe konzorcium", "Közös kutatási projektek", "EU innovációs alapok"] },
      { icon: "IP", title: "Ipari Partner", desc: "Vállalati kutatás-fejlesztési együttműködés, technológia-transzfer és alkalmazott kutatási projektek.", items: ["R&D együttműködés", "Technológia-transzfer", "Közös szabadalmak"] },
      { icon: "ST", title: "Stratégiai Szponzor", desc: "Az intézet hosszútávú működésének támogatása névadó partneri státusszal.", items: ["Névadói jogok", "Kutatási eredmények elsőbbsége", "Tanácsadói testületi tagság"] },
      { icon: "EG", title: "Egyetemi & Akadémiai Partner", desc: "Közös kutatási programok, PhD ösztöndíjak és tudományos csere.", items: ["Közös kutatási programok", "PhD ösztöndíjak", "Tudományos csere"] },
      { icon: "KI", title: "Állami & Közintézményi Partner", desc: "Együttműködés kormányzati szervekkel, közalapítványokkal és nemzeti kutatási intézetekkel az elektromágneses tudomány hazai és európai fejlesztéséért.", items: ["Kormányzati együttműködés", "Közalapítványi támogatás", "Nemzeti kutatási programok"] },
    ],
    partnerCta: "Partnerségi érdeklődés →",
    locationLabel: "Helyszín",
    locationTitle: ["Stratégiai ", "elhelyezkedés"],
    locationDesc: "Nagyrábé nem véletlenül lett a NEPEBE székhelye. A település kiemelkedő stratégiai pozícióban helyezkedik el — ipari óriások, tudományos központok és kiváló közlekedési infrastruktúra közelében.",
    locationPoints: [
      { icon: "🎓", title: "Debrecen — 45 km", desc: "Magyarország egyik legjelentősebb egyetemi és tudományos városa. Kiváló együttműködési potenciál hazai és nemzetközi felsőoktatási intézményekkel, kutatókkal és PhD hallgatókkal." },
      { icon: "🏭", title: "BMW Gyár — 55 km", desc: "A BMW debreceni gigagyára Közép-Európa egyik legnagyobb ipari beruházása. Közvetlen elektromágneses kutatási együttműködési lehetőség." },
      { icon: "⚡", title: "Akkumulátorgyárak", desc: "Több európai akkumulátorgyár a közvetlen közelben — CATL és egyéb ipari szereplők." },
      { icon: "🛣️", title: "Kiváló közlekedés", desc: "Autópálya, vasút és Debrecen Nemzetközi Repülőtér egyaránt elérhető közelségben." },
    ],
    whitepaperLabel: "Kutatási Tézisek",
    whitepaperTitle: ["A ", "tudomány", " alapjai"],
    whitepaperDesc: "A NEPEBE kutatási irányvonalait összefoglaló fehér könyv hamarosan letölthető lesz.",
    whitepaperBtn: "Hamarosan letölthető",
    whitepaperNote: "Értesítést kérek a megjelenéskor →",
    whitepaperChapters: ["Elméleti alapok", "Kutatási módszertan", "Ipari alkalmazások", "Európai kontextus"],
    faqLabel: "Gyakori kérdések",
    faqTitle: ["Amire ", "választ", " keres"],
    faqs: [
      { q: "Hogyan lehet partner a NEPEBE-vel?", a: "Partnerségi érdeklődését a kapcsolati űrlapon vagy a research@nepebe.eu e-mail címen jelezheti." },
      { q: "Mikor indul a labor infrastruktúra?", a: "A laboratóriumi fejlesztés a 2028-as menetrendi fázisban kezdődik. Szimulációs munkák 2027-től indulnak." },
      { q: "Fogadnak-e PhD hallgatókat?", a: "Igen — hazai és nemzetközi felsőoktatási intézményekkel kialakítandó együttműködések keretében PhD ösztöndíjakat és kutatói pozíciókat tervezünk." },
      { q: "Milyen EU pályázatokon vesznek részt?", a: "Elsősorban a Horizon Europe keretprogramban tervezünk részt venni. Konzorciumi partnereket aktívan keresünk." },
      { q: "Hogyan lehet csatlakozni a csapathoz?", a: "A nyitott pozíciókat a Csapat szekcióban tekintheti meg. Önéletrajzát a research@nepebe.eu címre küldheti." },
      { q: "Magyar vagy európai szinten működnek?", a: "Mindkét szinten. Székhelyünk Nagyrábén van, de küldetésünk és partnerhálózatunk európai." },
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
    headquarters: "Székhely",
  },
  en: {
    navLinks: ["Research", "Mission", "Roadmap", "Team", "Partnership", "Location", "FAQ", "Contact"],
    navHrefs: ["#research", "#mission", "#roadmap", "#team", "#partnership", "#location", "#faq", "#contact"],
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
      { n: "05", title: "Research Freedom", desc: "A core principle of the institute is that science can only truly flourish in a free spirit. Our researchers are given space to experiment, think originally and push beyond conventional boundaries." },
      { n: "06", title: "Nurturing Talent", desc: "NEPEBE is committed to identifying and nurturing the next generation of scientific and technical talent. Through our mentoring programmes, we aim to shape the researchers of tomorrow." },
    ],
    researchLabel: "Research Areas",
    researchTitle: ["Six ", "areas", "of science"],
    cards: [
      { title: "Electromagnetic Energy Transfer", desc: "Research and modelling of next-generation efficient energy transfer systems." },
      { title: "Resonance Systems", desc: "Investigation and development of experimental resonance-based structures." },
      { title: "Intelligent Field Control", desc: "Algorithmic design and simulation of adaptive, self-regulating electromagnetic systems." },
      { title: "Laboratory Infrastructure", desc: "Design and implementation of next-generation experimental infrastructure at European scale." },
      { title: "Simulation Environment", desc: "Development of high-performance simulation systems for complex electromagnetic phenomena." },
      { title: "European Collaboration", desc: "Partnerships with research institutes, universities and technology companies." },
    ],
    timelineLabel: "Development Roadmap",
    timelineTitle: ["Steps toward the ", "future", ""],
    timeline: [
      { year: "2026", phase: "Foundation & Platform", desc: "Institute establishment, research architecture setup, digital platform launch.", active: true },
      { year: "2027", phase: "Simulations", desc: "Building simulation systems, publishing first research results.", active: false },
      { year: "2028", phase: "Prototypes", desc: "Development of experimental prototypes, beginning laboratory testing.", active: false },
      { year: "2030+", phase: "Lab & Scale", desc: "Full laboratory infrastructure, industrial applications and European research community.", active: false },
    ],
    teamLabel: "Team",
    teamTitle: ["The founders and ", "future", " colleagues"],
    teamDesc: "The NEPEBE team is growing. If your expertise and passion align with this mission, we welcome your application.",
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
      { role: "HR Specialist", desc: "Recruitment, HR process development and European employment law compliance." },
    ],
    partnerLabel: "Partnership",
    partnerTitle: ["Building the ", "future", " together"],
    partnerDesc: "NEPEBE is open to all forms of collaboration that strengthen the advancement of electromagnetic science and its European presence.",
    partnerTypes: [
      { icon: "EU", title: "EU Grant Partner", desc: "Joint participation in Horizon Europe and other European research programmes.", items: ["Horizon Europe consortium", "Joint research projects", "EU innovation funds"] },
      { icon: "IP", title: "Industrial Partner", desc: "Corporate R&D collaboration, technology transfer and applied research projects.", items: ["R&D collaboration", "Technology transfer", "Joint patents"] },
      { icon: "ST", title: "Strategic Sponsor", desc: "Long-term support of the institute's operations with naming partner status.", items: ["Naming rights", "Priority access to research", "Advisory board membership"] },
      { icon: "EG", title: "University & Academic Partner", desc: "Joint research programmes, PhD scholarships and scientific exchange.", items: ["Joint research programmes", "PhD scholarships", "Scientific exchange"] },
      { icon: "KI", title: "Government & Public Institution Partner", desc: "Collaboration with government bodies, public foundations and national research institutes for the advancement of electromagnetic science at national and European level.", items: ["Government collaboration", "Public foundation support", "National research programmes"] },
    ],
    partnerCta: "Partnership enquiry →",
    locationLabel: "Location",
    locationTitle: ["Strategic ", "location"],
    locationDesc: "Nagyrábé was not chosen by chance as the home of NEPEBE. The settlement holds an outstanding strategic position — close to industrial giants, scientific centres and excellent transport infrastructure.",
    locationPoints: [
      { icon: "🎓", title: "Debrecen — 45 km", desc: "One of Hungary's most significant university and scientific cities. Excellent collaboration potential with Hungarian and international higher education institutions, researchers and PhD students." },
      { icon: "🏭", title: "BMW Plant — 55 km", desc: "The BMW gigafactory in Debrecen is one of Central Europe's largest industrial investments. Direct electromagnetic research collaboration opportunity." },
      { icon: "⚡", title: "Battery Factories", desc: "Several European battery manufacturers in the immediate vicinity — CATL and other industrial players." },
      { icon: "🛣️", title: "Excellent Transport Links", desc: "Motorway, railway and Debrecen International Airport all within easy reach." },
    ],
    whitepaperLabel: "Research Theses",
    whitepaperTitle: ["The ", "foundations", " of science"],
    whitepaperDesc: "A white paper summarising NEPEBE's research directions and long-term objectives will be available for download soon.",
    whitepaperBtn: "Coming soon",
    whitepaperNote: "Notify me when available →",
    whitepaperChapters: ["Theoretical foundations", "Research methodology", "Industrial applications", "European context"],
    faqLabel: "Frequently Asked Questions",
    faqTitle: ["Answers to ", "your", " questions"],
    faqs: [
      { q: "How can we partner with NEPEBE?", a: "You can express your interest via the contact form or at research@nepebe.eu." },
      { q: "When will the laboratory infrastructure launch?", a: "Laboratory development is planned for the 2028 roadmap phase. Simulation work begins from 2027." },
      { q: "Do you accept PhD students?", a: "Yes — through partnerships with Hungarian and international higher education institutions, we plan to offer PhD scholarships and research positions." },
      { q: "Which EU programmes do you participate in?", a: "We plan to participate primarily in Horizon Europe. We are actively seeking consortium partners." },
      { q: "How can I join the team?", a: "Open positions are listed in the Team section. Send your CV to research@nepebe.eu." },
      { q: "Do you operate at Hungarian or European level?", a: "Both. Our headquarters are in Nagyrábé, Hungary, but our mission and partner network are European." },
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
    headquarters: "Headquarters",
  },
  de: {
    navLinks: ["Forschung", "Mission", "Zeitplan", "Team", "Partnerschaft", "Standort", "FAQ", "Kontakt"],
    navHrefs: ["#forschung", "#mission", "#zeitplan", "#team", "#partnerschaft", "#standort", "#faq-de", "#kontakt"],
    heroEyebrow: "Europäische Forschungsinitiative",
    heroTitle: ["Die Zukunft der", "elektromagnetischen", "Wissenschaft entsteht."],
    heroDesc: "NEPEBE ist Europas führendes elektromagnetisches Forschungsinstitut — wir entwickeln Energie- und Resonanzsysteme der nächsten Generation.",
    heroCta: "Forschungsbereiche",
    scrollHint: "Nach unten scrollen",
    stats: [
      { num: "4", label: "Forschungsbereiche" },
      { num: "2030+", label: "Forschungshorizont" },
      { num: "EU", label: "Europäischer Fokus" },
      { num: "F&E", label: "Deep-Tech-Innovation" },
    ],
    missionLabel: "Mission",
    missionTitle: ["Warum existiert", "", "NEPEBE"],
    missionP1: "Elektromagnetische Technologien gestalten die Zukunft der Energie, Medizin und industriellen Systeme. Europa braucht ein unabhängiges Forschungsinstitut auf höchstem Niveau, das diese grundlegenden Systeme für die kommenden Jahrzehnte entwickelt.",
    missionQuote: '"Die Wissenschaft kennt keine Grenzen — aber Institutionen müssen Wurzeln schlagen."',
    missionP2: "NEPEBE erfüllt diese Rolle: eine europäische Wissenschaftsgemeinschaft, aufgebaut auf offener Zusammenarbeit und einem langfristigen Forschungsökosystem.",
    pillars: [
      { n: "01", title: "Unabhängigkeit", desc: "Auf europäischen Grundlagen, in einem politisch neutralen Forschungsrahmen." },
      { n: "02", title: "Offenheit", desc: "Zusammenarbeit mit Universitäten, Industrie und Partnerinstituten." },
      { n: "03", title: "Langfristigkeit", desc: "Forschungshorizont bis 2030 und darüber hinaus." },
      { n: "04", title: "Innovation", desc: "Von experimentellen Prototypen bis zu industriellen Anwendungen." },
      { n: "05", title: "Forschungsfreiheit", desc: "Ein Grundprinzip des Instituts ist, dass Wissenschaft nur in einem freien Geist wirklich aufblühen kann. Unsere Forscher erhalten Raum zum Experimentieren, originell zu denken und konventionelle Grenzen zu überwinden." },
      { n: "06", title: "Talentförderung", desc: "NEPEBE ist bestrebt, die nächste Generation wissenschaftlicher und technischer Talente zu entdecken und zu fördern. Durch unsere Mentoring-Programme möchten wir die Forscher von morgen prägen." },
    ],
    researchLabel: "Forschungsbereiche",
    researchTitle: ["Wissenschaft auf ", "sechs", " Säulen"],
    cards: [
      { title: "Elektromagnetische Energieübertragung", desc: "Forschung und Modellierung von Energieübertragungssystemen der nächsten Generation." },
      { title: "Resonanzsysteme", desc: "Untersuchung und Entwicklung experimenteller resonanzbasierter Strukturen." },
      { title: "Intelligente Feldregelung", desc: "Algorithmisches Design und Simulation adaptiver elektromagnetischer Systeme." },
      { title: "Laborinfrastruktur", desc: "Planung und Umsetzung experimenteller Infrastruktur auf europäischem Niveau." },
      { title: "Simulationsumgebung", desc: "Entwicklung leistungsstarker Simulationssysteme für elektromagnetische Phänomene." },
      { title: "Europäische Zusammenarbeit", desc: "Partnerschaften mit Forschungsinstituten, Universitäten und Technologieunternehmen." },
    ],
    timelineLabel: "Entwicklungsfahrplan",
    timelineTitle: ["Schritte in die ", "Zukunft", ""],
    timeline: [
      { year: "2026", phase: "Grundlagen & Plattform", desc: "Institutsgründung, Aufbau der Forschungsarchitektur, Launch der digitalen Plattform.", active: true },
      { year: "2027", phase: "Simulationen", desc: "Aufbau von Simulationssystemen, Veröffentlichung erster Forschungsergebnisse.", active: false },
      { year: "2028", phase: "Prototypen", desc: "Entwicklung experimenteller Prototypen, Beginn der Labortests.", active: false },
      { year: "2030+", phase: "Labor & Skalierung", desc: "Vollständige Laborinfrastruktur, industrielle Anwendungen und europäische Forschungsgemeinschaft.", active: false },
    ],
    teamLabel: "Team",
    teamTitle: ["Die Gründer und ", "zukünftige", " Mitarbeiter"],
    teamDesc: "Das NEPEBE-Team wächst. Wenn Ihre Expertise und Leidenschaft zu dieser Mission passen, freuen wir uns auf Ihre Bewerbung.",
    founderName: "Péter Bence Nemes",
    founderRole: "Gründer",
    founderBio: "Elektronik- und IT-Fachmann mit jahrzehntelanger Erfahrung. Initiator und leitender Gründer der NEPEBE-Initiative.",
    openBadge: "Offene Stelle",
    openCta: "Bewerben →",
    openPositions: [
      { role: "Leitender Forscher / Chief Scientist", desc: "Leitung der elektromagnetischen Forschung, Promotion oder gleichwertige Erfahrung erforderlich." },
      { role: "Elektroingenieur / Physiker", desc: "Prototypenentwicklung, Labormessungen und experimentelles Systemdesign." },
      { role: "Simulationsspezialist", desc: "Elektromagnetische Modellierung und Entwicklung von Simulationsumgebungen." },
      { role: "Projektmanager", desc: "Koordination von Forschungsprojekten, EU-Fördermanagement und Partnerbeziehungen." },
      { role: "Kommunikationsbeauftragter", desc: "Wissenschaftskommunikation, PR und Aufbau von Partnerschaften auf europäischer Ebene." },
      { role: "IT / Datenmanagement", desc: "Verwaltung von Forschungsdaten und Entwicklung digitaler Infrastruktur." },
      { role: "HR-Spezialist", desc: "Rekrutierung, Entwicklung von HR-Prozessen und Einhaltung des europäischen Arbeitsrechts." },
    ],
    partnerLabel: "Partnerschaft",
    partnerTitle: ["Gemeinsam die ", "Zukunft", " gestalten"],
    partnerDesc: "NEPEBE ist offen für alle Formen der Zusammenarbeit, die den Fortschritt der elektromagnetischen Wissenschaft und die europäische Präsenz stärken.",
    partnerTypes: [
      { icon: "EU", title: "EU-Förderpartner", desc: "Gemeinsame Teilnahme an Horizon Europe und anderen europäischen Forschungsprogrammen.", items: ["Horizon-Europe-Konsortium", "Gemeinsame Forschungsprojekte", "EU-Innovationsfonds"] },
      { icon: "IP", title: "Industriepartner", desc: "Unternehmerische F&E-Zusammenarbeit, Technologietransfer und angewandte Forschungsprojekte.", items: ["F&E-Zusammenarbeit", "Technologietransfer", "Gemeinsame Patente"] },
      { icon: "ST", title: "Strategischer Sponsor", desc: "Langfristige Unterstützung des Instituts mit Namensgeberstatus.", items: ["Namensgeberrechte", "Vorrangiger Zugang zu Forschung", "Beiratsmitgliedschaft"] },
      { icon: "EG", title: "Universitäts- & Akademischer Partner", desc: "Gemeinsame Forschungsprogramme, Promotionsstipendien und wissenschaftlicher Austausch.", items: ["Gemeinsame Forschungsprogramme", "Promotionsstipendien", "Wissenschaftlicher Austausch"] },
      { icon: "KI", title: "Staatlicher & Öffentlicher Partner", desc: "Zusammenarbeit mit Regierungsbehörden, öffentlichen Stiftungen und nationalen Forschungsinstituten zur Förderung der elektromagnetischen Wissenschaft.", items: ["Regierungskooperation", "Öffentliche Förderung", "Nationale Forschungsprogramme"] },
    ],
    partnerCta: "Partnerschaftsanfrage →",
    locationLabel: "Standort",
    locationTitle: ["Strategische ", "Lage"],
    locationDesc: "Nagyrábé wurde nicht zufällig zum Sitz von NEPEBE gewählt. Die Gemeinde befindet sich in einer hervorragenden strategischen Position — nahe Industriegiganten, Wissenschaftszentren und exzellenter Verkehrsinfrastruktur.",
    locationPoints: [
      { icon: "🎓", title: "Debrecen — 45 km", desc: "Eine der bedeutendsten Universitäts- und Wissenschaftsstädte Ungarns. Hervorragendes Kooperationspotenzial mit ungarischen und internationalen Hochschuleinrichtungen, Forschern und Doktoranden." },
      { icon: "🏭", title: "BMW-Werk — 55 km", desc: "Das BMW-Gigawerk in Debrecen ist eine der größten Industrieinvestitionen Mitteleuropas. Direkte Kooperationsmöglichkeit in der elektromagnetischen Forschung." },
      { icon: "⚡", title: "Batteriewerke", desc: "Mehrere europäische Batteriehersteller in unmittelbarer Nähe — CATL und weitere Industrieakteure." },
      { icon: "🛣️", title: "Ausgezeichnete Verkehrsanbindung", desc: "Autobahn, Bahn und internationaler Flughafen Debrecen alle in erreichbarer Nähe." },
    ],
    whitepaperLabel: "Forschungsthesen",
    whitepaperTitle: ["Die ", "Grundlagen", " der Wissenschaft"],
    whitepaperDesc: "Ein Whitepaper, das die Forschungsrichtungen und langfristigen Ziele von NEPEBE zusammenfasst, wird in Kürze zum Download verfügbar sein.",
    whitepaperBtn: "Demnächst verfügbar",
    whitepaperNote: "Benachrichtigung bei Erscheinen →",
    whitepaperChapters: ["Theoretische Grundlagen", "Forschungsmethodik", "Industrielle Anwendungen", "Europäischer Kontext"],
    faqLabel: "Häufige Fragen",
    faqTitle: ["Antworten auf ", "Ihre", " Fragen"],
    faqs: [
      { q: "Wie kann man Partner von NEPEBE werden?", a: "Sie können Ihr Partnerschaftsinteresse über das Kontaktformular oder unter research@nepebe.eu mitteilen." },
      { q: "Wann startet die Laborinfrastruktur?", a: "Die Laborentwicklung ist für die Fahrplanphase 2028 geplant. Simulationsarbeiten beginnen ab 2027." },
      { q: "Nehmen Sie Doktoranden auf?", a: "Ja — im Rahmen von Partnerschaften mit ungarischen und internationalen Hochschuleinrichtungen planen wir Promotionsstipendien und Forscherstellen." },
      { q: "An welchen EU-Programmen nehmen Sie teil?", a: "Wir planen primär die Teilnahme an Horizon Europe. Wir suchen aktiv nach Konsortialpartnern." },
      { q: "Wie kann ich dem Team beitreten?", a: "Offene Stellen sind im Team-Bereich aufgelistet. Senden Sie Ihren Lebenslauf an research@nepebe.eu." },
      { q: "Agieren Sie auf ungarischer oder europäischer Ebene?", a: "Auf beiden Ebenen. Unser Sitz ist in Nagyrábé, Ungarn, aber unsere Mission und unser Partnernetzwerk sind europäisch." },
    ],
    contactLabel: "Kontakt",
    contactTitle: ["Nehmen Sie ", "Kontakt", "mit uns auf"],
    contactIntro: "Interessiert an Forschungskooperation, Partnerschaft oder der NEPEBE-Initiative?",
    contactDetails: [
      { label: "E-Mail", value: "research@nepebe.eu" },
      { label: "Website", value: "nepebe.eu" },
      { label: "Fokus", value: "Europäische elektromagnetische Forschung und Innovation" },
    ],
    formLabels: ["Ihr Name", "Organisation / Institution", "E-Mail-Adresse", "Nachricht"],
    formPlaceholders: ["Vollständiger Name", "Universität, Unternehmen usw.", "email@domain.com", "Warum möchten Sie Kontakt aufnehmen?"],
    submitBtn: "Nachricht senden →",
    submitSending: "Senden...",
    submitSent: "Gesendet ✓",
    submitError: "Fehler",
    submitThanks: "Vielen Dank! Wir werden uns in Kürze bei Ihnen melden.",
    footerLinks: ["Datenschutz", "Impressum", "Kontakt"],
    footerCopy: "© 2025 NEPEBE — Europäisches Elektromagnetisches Forschungsinstitut",
    cookieText: "Diese Website verwendet nur funktional notwendige Cookies.",
    cookieAccept: "Akzeptieren",
    cookieMore: "Details",
    headquarters: "Hauptsitz",
  },
  fr: {
    navLinks: ["Recherche", "Mission", "Calendrier", "Équipe", "Partenariat", "Localisation", "FAQ", "Contact"],
    navHrefs: ["#recherche", "#mission", "#calendrier", "#equipe", "#partenariat", "#localisation", "#faq-fr", "#contact-fr"],
    heroEyebrow: "Initiative de Recherche Européenne",
    heroTitle: ["L'avenir de la", "science électromagnétique", "se construit."],
    heroDesc: "NEPEBE est l'institut de recherche électromagnétique de pointe en Europe — nous développons les systèmes énergétiques et de résonance de prochaine génération.",
    heroCta: "Domaines de recherche",
    scrollHint: "Défiler vers le bas",
    stats: [
      { num: "4", label: "Domaines de recherche" },
      { num: "2030+", label: "Horizon de recherche" },
      { num: "EU", label: "Focalisation européenne" },
      { num: "R&D", label: "Innovation deep-tech" },
    ],
    missionLabel: "Mission",
    missionTitle: ["Pourquoi", "", "NEPEBE existe"],
    missionP1: "Les technologies électromagnétiques façonnent l'avenir de l'énergie, de la médecine et des systèmes industriels. L'Europe a besoin d'un institut de recherche indépendant et de haut niveau pour développer ces systèmes fondamentaux pour les prochaines décennies.",
    missionQuote: '"La science ne connaît pas de frontières — mais les institutions doivent prendre racine."',
    missionP2: "NEPEBE remplit ce rôle : une communauté scientifique européenne fondée sur la collaboration ouverte et un écosystème de recherche à long terme.",
    pillars: [
      { n: "01", title: "Indépendance", desc: "Sur des bases européennes, dans un cadre de recherche politiquement neutre." },
      { n: "02", title: "Ouverture", desc: "Collaboration avec les universités, l'industrie et les instituts partenaires." },
      { n: "03", title: "Vision à long terme", desc: "Horizon de recherche planifié jusqu'en 2030 et au-delà." },
      { n: "04", title: "Innovation", desc: "Des prototypes expérimentaux aux applications industrielles." },
      { n: "05", title: "Liberté de recherche", desc: "Un principe fondamental de l'institut est que la science ne peut vraiment s'épanouir que dans un esprit libre. Nos chercheurs disposent d'un espace pour expérimenter, penser de manière originale et dépasser les frontières conventionnelles." },
      { n: "06", title: "Développement des talents", desc: "NEPEBE s'engage à identifier et à cultiver la prochaine génération de talents scientifiques et techniques. Grâce à nos programmes de mentorat, nous souhaitons façonner les chercheurs de demain." },
    ],
    researchLabel: "Domaines de recherche",
    researchTitle: ["Science fondée sur ", "six", " piliers"],
    cards: [
      { title: "Transfert d'énergie électromagnétique", desc: "Recherche et modélisation de systèmes de transfert d'énergie de prochaine génération." },
      { title: "Systèmes de résonance", desc: "Investigation et développement de structures expérimentales basées sur la résonance." },
      { title: "Contrôle intelligent des champs", desc: "Conception algorithmique et simulation de systèmes électromagnétiques adaptatifs." },
      { title: "Infrastructure de laboratoire", desc: "Conception et mise en œuvre d'infrastructures expérimentales à l'échelle européenne." },
      { title: "Environnement de simulation", desc: "Développement de systèmes de simulation haute performance pour les phénomènes électromagnétiques." },
      { title: "Collaboration européenne", desc: "Partenariats avec des instituts de recherche, universités et entreprises technologiques." },
    ],
    timelineLabel: "Feuille de route",
    timelineTitle: ["Les étapes vers le ", "futur", ""],
    timeline: [
      { year: "2026", phase: "Fondations & Plateforme", desc: "Création de l'institut, mise en place de l'architecture de recherche, lancement de la plateforme numérique.", active: true },
      { year: "2027", phase: "Simulations", desc: "Construction de systèmes de simulation, publication des premiers résultats de recherche.", active: false },
      { year: "2028", phase: "Prototypes", desc: "Développement de prototypes expérimentaux, début des tests en laboratoire.", active: false },
      { year: "2030+", phase: "Laboratoire & Expansion", desc: "Infrastructure de laboratoire complète, applications industrielles et communauté de recherche européenne.", active: false },
    ],
    teamLabel: "Équipe",
    teamTitle: ["Les fondateurs et les ", "futurs", " collaborateurs"],
    teamDesc: "L'équipe NEPEBE se développe. Si votre expertise et votre passion correspondent à cette mission, nous attendons votre candidature.",
    founderName: "Péter Bence Nemes",
    founderRole: "Fondateur",
    founderBio: "Professionnel de l'électronique et de l'informatique avec des décennies d'expérience. Initiateur et fondateur principal de l'initiative NEPEBE.",
    openBadge: "Poste ouvert",
    openCta: "Postuler →",
    openPositions: [
      { role: "Chercheur Principal / Chief Scientist", desc: "Direction de la recherche électromagnétique, doctorat ou expérience équivalente requis." },
      { role: "Ingénieur Électricien / Physicien", desc: "Développement de prototypes, mesures en laboratoire et conception de systèmes expérimentaux." },
      { role: "Spécialiste en Simulation", desc: "Modélisation électromagnétique et développement d'environnements de simulation." },
      { role: "Chef de Projet", desc: "Coordination des projets de recherche, gestion des subventions UE et relations partenariales." },
      { role: "Chargé de Communication", desc: "Communication scientifique, relations publiques et développement de partenariats au niveau européen." },
      { role: "IT / Gestion des données", desc: "Gestion des données de recherche, développement et exploitation de l'infrastructure numérique." },
      { role: "Spécialiste RH", desc: "Recrutement, développement des processus RH et conformité au droit du travail européen." },
    ],
    partnerLabel: "Partenariat",
    partnerTitle: ["Construisons le ", "futur", " ensemble"],
    partnerDesc: "NEPEBE est ouvert à toutes les formes de collaboration qui renforcent l'avancement de la science électromagnétique et sa présence en Europe.",
    partnerTypes: [
      { icon: "EU", title: "Partenaire de financement UE", desc: "Participation conjointe à Horizon Europe et autres programmes de recherche européens.", items: ["Consortium Horizon Europe", "Projets de recherche conjoints", "Fonds d'innovation UE"] },
      { icon: "IP", title: "Partenaire Industriel", desc: "Collaboration R&D d'entreprise, transfert de technologie et projets de recherche appliquée.", items: ["Collaboration R&D", "Transfert de technologie", "Brevets conjoints"] },
      { icon: "ST", title: "Sponsor Stratégique", desc: "Soutien à long terme des opérations de l'institut avec statut de partenaire dénominateur.", items: ["Droits de dénomination", "Accès prioritaire à la recherche", "Membre du conseil consultatif"] },
      { icon: "EG", title: "Partenaire Universitaire & Académique", desc: "Programmes de recherche conjoints, bourses doctorales et échanges scientifiques.", items: ["Programmes de recherche conjoints", "Bourses doctorales", "Échange scientifique"] },
      { icon: "KI", title: "Partenaire Gouvernemental & Public", desc: "Collaboration avec des organismes gouvernementaux, des fondations publiques et des instituts de recherche nationaux pour l'avancement de la science électromagnétique.", items: ["Collaboration gouvernementale", "Soutien de fondations publiques", "Programmes de recherche nationaux"] },
    ],
    partnerCta: "Demande de partenariat →",
    locationLabel: "Localisation",
    locationTitle: ["Emplacement ", "stratégique"],
    locationDesc: "Nagyrábé n'a pas été choisi par hasard comme siège de NEPEBE. La commune occupe une position stratégique exceptionnelle — proche de géants industriels, de centres scientifiques et d'une excellente infrastructure de transport.",
    locationPoints: [
      { icon: "🎓", title: "Debrecen — 45 km", desc: "L'une des villes universitaires et scientifiques les plus importantes de Hongrie. Excellent potentiel de collaboration avec des établissements d'enseignement supérieur hongrois et internationaux." },
      { icon: "🏭", title: "Usine BMW — 55 km", desc: "La gigafactory BMW de Debrecen est l'un des plus grands investissements industriels d'Europe centrale." },
      { icon: "⚡", title: "Usines de batteries", desc: "Plusieurs fabricants européens de batteries dans les environs immédiats — CATL et autres acteurs industriels." },
      { icon: "🛣️", title: "Excellentes liaisons de transport", desc: "Autoroute, voie ferrée et aéroport international de Debrecen tous accessibles à proximité." },
    ],
    whitepaperLabel: "Thèses de Recherche",
    whitepaperTitle: ["Les ", "fondements", " de la science"],
    whitepaperDesc: "Un livre blanc résumant les orientations de recherche et les objectifs à long terme de NEPEBE sera bientôt disponible en téléchargement.",
    whitepaperBtn: "Bientôt disponible",
    whitepaperNote: "Me notifier lors de la parution →",
    whitepaperChapters: ["Fondements théoriques", "Méthodologie de recherche", "Applications industrielles", "Contexte européen"],
    faqLabel: "Questions Fréquentes",
    faqTitle: ["Des réponses à ", "vos", " questions"],
    faqs: [
      { q: "Comment devenir partenaire de NEPEBE ?", a: "Vous pouvez exprimer votre intérêt via le formulaire de contact ou à research@nepebe.eu." },
      { q: "Quand l'infrastructure de laboratoire sera-t-elle lancée ?", a: "Le développement du laboratoire est prévu pour la phase 2028 de la feuille de route. Les travaux de simulation débutent en 2027." },
      { q: "Acceptez-vous des doctorants ?", a: "Oui — dans le cadre de partenariats avec des établissements d'enseignement supérieur hongrois et internationaux, nous prévoyons des bourses doctorales et des postes de chercheurs." },
      { q: "À quels programmes UE participez-vous ?", a: "Nous prévoyons de participer principalement à Horizon Europe. Nous recherchons activement des partenaires de consortium." },
      { q: "Comment rejoindre l'équipe ?", a: "Les postes ouverts sont listés dans la section Équipe. Envoyez votre CV à research@nepebe.eu." },
      { q: "Opérez-vous au niveau hongrois ou européen ?", a: "Les deux. Notre siège est à Nagyrábé, Hongrie, mais notre mission et notre réseau de partenaires sont européens." },
    ],
    contactLabel: "Contact",
    contactTitle: ["Prenez ", "contact", "avec nous"],
    contactIntro: "Intéressé par une collaboration de recherche, un partenariat ou rejoindre l'initiative NEPEBE ?",
    contactDetails: [
      { label: "E-mail", value: "research@nepebe.eu" },
      { label: "Site web", value: "nepebe.eu" },
      { label: "Focus", value: "Recherche et innovation électromagnétiques européennes" },
    ],
    formLabels: ["Votre nom", "Organisation / Institution", "Adresse e-mail", "Message"],
    formPlaceholders: ["Nom complet", "Université, entreprise, etc.", "email@domain.com", "Pourquoi souhaitez-vous nous contacter ?"],
    submitBtn: "Envoyer le message →",
    submitSending: "Envoi...",
    submitSent: "Envoyé ✓",
    submitError: "Erreur",
    submitThanks: "Merci ! Nous vous répondrons dans les plus brefs délais.",
    footerLinks: ["Confidentialité", "Mentions légales", "Contact"],
    footerCopy: "© 2025 NEPEBE — Institut Européen de Recherche Électromagnétique",
    cookieText: "Ce site web n'utilise que des cookies fonctionnellement nécessaires.",
    cookieAccept: "Accepter",
    cookieMore: "Détails",
    headquarters: "Siège social",
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

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid rgba(184,154,90,0.2)", padding: "1.5rem 0" }}>
      <button onClick={() => setOpen(!open)} style={{ width: "100%", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem", textAlign: "left", padding: 0 }}>
        <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.2rem", fontWeight: 400, color: "var(--blue-deep,#1C2B4A)", lineHeight: 1.4 }}>{q}</span>
        <span style={{ color: "var(--gold,#B89A5A)", fontSize: "1.4rem", flexShrink: 0, transition: "transform 0.3s", transform: open ? "rotate(45deg)" : "rotate(0deg)" }}>+</span>
      </button>
      {open && <p style={{ fontSize: "0.9rem", color: "var(--ink-mid,#3D3830)", lineHeight: 1.9, marginTop: "1rem", paddingRight: "2rem" }}>{a}</p>}
    </div>
  );
}

function SplashScreen({ onDone }: { onDone: () => void }) {
  const [fading, setFading] = useState(false);
  useEffect(() => {
    const t1 = setTimeout(() => setFading(true), 2800);
    const t2 = setTimeout(() => onDone(), 3600);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [onDone]);
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 9999, background: "#F5F2EC", display: "flex", alignItems: "center", justifyContent: "center", opacity: fading ? 0 : 1, transition: "opacity 0.8s ease", pointerEvents: "none" }}>
      <svg width="380" height="300" viewBox="0 0 380 300">
        <defs>
          <style>{`
            .sp-title{animation:spIn 0.8s ease 0.1s both}.sp-l1{animation:spIn 0.6s ease 0.2s both}.sp-l2{animation:spIn 0.6s ease 0.25s both}
            .sp-a1{animation:spIn 0.5s ease 0.3s both}.sp-a2{animation:spIn 0.5s ease 0.5s both}.sp-a3{animation:spIn 0.5s ease 0.7s both}
            .sp-a4{animation:spIn 0.5s ease 0.9s both}.sp-a5{animation:spIn 0.5s ease 1.1s both}.sp-a6{animation:spIn 0.5s ease 1.3s both}
            .sp-a7{animation:spIn 0.5s ease 1.5s both}.sp-l3{animation:spIn 0.6s ease 1.7s both}.sp-l4{animation:spIn 0.6s ease 1.75s both}
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
        <text className="sp-sub" fontFamily="'Cormorant Garamond','Georgia',serif" fontSize="8.5" letterSpacing="3" textAnchor="middle" x="190" y="282" fill="#B89A5A">EUROPEAN ELECTROMAGNETIC RESEARCH INSTITUTE</text>
      </svg>
    </div>
  );
}

function CookieBanner({ lang }: { lang: Lang }) {
  const [visible, setVisible] = useState(false);
  const t = content[lang];
  useEffect(() => { if (!localStorage.getItem("nepebe-cookie")) setVisible(true); }, []);
  const accept = () => { localStorage.setItem("nepebe-cookie", "1"); setVisible(false); };
  if (!visible) return null;
  return (
    <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 8888, background: "#1C2B4A", borderTop: "1px solid rgba(184,154,90,0.3)", padding: "1.2rem 4rem", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "2rem", flexWrap: "wrap" }}>
      <p style={{ fontSize: "0.85rem", color: "rgba(253,252,249,0.8)", lineHeight: 1.6, margin: 0 }}>
        {t.cookieText}{" "}<Link href="/adatvedelem" style={{ color: "#B89A5A", textDecoration: "underline" }}>{t.cookieMore}</Link>
      </p>
      <button onClick={accept} style={{ fontFamily: "'Jost',sans-serif", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#1C2B4A", background: "#B89A5A", border: "none", padding: "0.7rem 2rem", cursor: "pointer" }}>{t.cookieAccept}</button>
    </div>
  );
}

export default function Home() {
  const [splash, setSplash] = useState(true);
  const [lang, setLang] = useState<Lang>("hu");
  const [formStatus, setFormStatus] = useState<"idle"|"sending"|"sent"|"error">("idle");
  const t = content[lang];
  const handleSplashDone = useCallback(() => setSplash(false), []);

  const ids = {
    hu:  { research: "kutatas", mission: "misszio", timeline: "idovonal", team: "csapat", partner: "partnerseg", location: "helyszin", faq: "gyik", contact: "kapcsolat" },
    en:  { research: "research", mission: "mission", timeline: "roadmap", team: "team", partner: "partnership", location: "location", faq: "faq", contact: "contact" },
    de:  { research: "forschung", mission: "mission", timeline: "zeitplan", team: "team", partner: "partnerschaft", location: "standort", faq: "faq-de", contact: "kontakt" },
    fr:  { research: "recherche", mission: "mission", timeline: "calendrier", team: "equipe", partner: "partenariat", location: "localisation", faq: "faq-fr", contact: "contact-fr" },
  }[lang];

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
    const res = await fetch("https://formspree.io/f/xwvzeegp", { method: "POST", body: new FormData(e.currentTarget), headers: { Accept: "application/json" } });
    setFormStatus(res.ok ? "sent" : "error");
  };

  const langButtons: Lang[] = ["hu", "en", "de", "fr"];

  return (
    <>
      {splash && <SplashScreen onDone={handleSplashDone} />}
      {!splash && <CookieBanner lang={lang} />}
      <div style={{ opacity: splash ? 0 : 1, transition: "opacity 0.6s ease" }}>

        {/* NAV */}
        <nav className="nepebe-nav">
          <a className="nav-logo" href="#"><span>N</span>EPEBE</a>
          <ul className="nav-links">
            {t.navLinks.map((link: string, i: number) => (
              <li key={link}><a href={t.navHrefs[i]}>{link}</a></li>
            ))}
          </ul>
          <div style={{ display: "flex", gap: "0.4rem" }}>
            {langButtons.map((l) => (
              <button key={l} onClick={() => setLang(l)} style={{
                fontFamily: "'Jost',sans-serif", fontSize: "0.65rem", letterSpacing: "0.1em",
                textTransform: "uppercase", padding: "0.25rem 0.6rem",
                border: "1px solid",
                borderColor: lang === l ? "var(--gold,#B89A5A)" : "rgba(184,154,90,0.3)",
                background: lang === l ? "var(--gold,#B89A5A)" : "transparent",
                color: lang === l ? "#1C2B4A" : "var(--ink-light,#7A7268)",
                cursor: "pointer", transition: "all 0.2s",
              }}>{l.toUpperCase()}</button>
            ))}
          </div>
        </nav>

        {/* HERO */}
        <section className="hero">
          <div className="hero-left">
            <div className="hero-eyebrow">{t.heroEyebrow}</div>
            <h1 className="hero-title">{t.heroTitle[0]}<br /><em>{t.heroTitle[1]}</em><br />{t.heroTitle[2]}</h1>
            <p className="hero-desc">{t.heroDesc}</p>
            <a href={t.navHrefs[0]} className="hero-cta">{t.heroCta} <span className="hero-cta-arrow">→</span></a>
            <div className="scroll-hint"><div className="scroll-line"></div>{t.scrollHint}</div>
          </div>
          <div className="hero-right">
            <div className="hero-stats">
              {t.stats.map((s: any) => (
                <div className="stat-box" key={s.label}><div className="stat-number">{s.num}</div><div className="stat-label">{s.label}</div></div>
              ))}
            </div>
            <div className="hero-visual">
              <div className="em-field">
                <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
                  <defs><style>{`.field-line{fill:none;stroke:#B89A5A;stroke-width:0.8;opacity:0;animation:fieldAppear 2s ease forwards}.field-line:nth-child(1){animation-delay:.1s}.field-line:nth-child(2){animation-delay:.2s}.field-line:nth-child(3){animation-delay:.3s}.field-line:nth-child(4){animation-delay:.4s}.field-line:nth-child(5){animation-delay:.5s}.field-line:nth-child(6){animation-delay:.6s}.field-line:nth-child(7){animation-delay:.7s}@keyframes fieldAppear{to{opacity:.4}}`}</style></defs>
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
            <h2 className="section-title">{t.missionTitle[0]}<br />{t.missionTitle[1]}<em>{t.missionTitle[2]}</em></h2>
            <p className="mission-text">{t.missionP1}</p>
            <blockquote className="mission-pull">{t.missionQuote}</blockquote>
            <p className="mission-text">{t.missionP2}</p>
          </div>
          <div className="mission-pillars fade-in" style={{ gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))" }}>
            {t.pillars.map((p: any) => (
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
            <h2 className="section-title white-title">{t.researchTitle[0]}<em>{t.researchTitle[1]}</em><br />{t.researchTitle[2]}</h2>
          </div>
          <div className="research-grid fade-in">
            {t.cards.map((card: any, i: number) => (
              <div className="research-card" key={i}>
                <div className="research-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#B89A5A" strokeWidth="1.5">{cardIcons[i]}</svg></div>
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
            <h2 className="section-title">{t.timelineTitle[0]}<em>{t.timelineTitle[1]}</em>{t.timelineTitle[2]}</h2>
          </div>
          <div className="timeline fade-in">
            {t.timeline.map((item: any) => (
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
            <h2 className="section-title">{t.teamTitle[0]}<em>{t.teamTitle[1]}</em>{t.teamTitle[2]}</h2>
            <p style={{ color: "var(--ink-mid,#3D3830)", fontSize: "1rem", lineHeight: "1.9", maxWidth: "600px", marginTop: "1rem" }}>{t.teamDesc}</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: "1.5rem" }} className="fade-in">
            <div style={{ border: "1px solid rgba(184,154,90,0.3)", padding: "2.5rem 2rem", background: "var(--cream,#F5F2EC)" }}>
              <div style={{ width: "100px", height: "100px", marginBottom: "1.5rem", overflow: "hidden", border: "2px solid rgba(184,154,90,0.4)" }}>
                <img src="/founder.png" alt="Nemes Péter Bence" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
              </div>
              <div style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold,#B89A5A)", marginBottom: "0.5rem" }}>{t.founderRole}</div>
              <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.4rem", fontWeight: 400, color: "var(--blue-deep,#1C2B4A)", marginBottom: "1rem", lineHeight: 1.3 }}>{t.founderName}</h3>
              <p style={{ fontSize: "0.85rem", color: "var(--ink-light,#7A7268)", lineHeight: 1.8 }}>{t.founderBio}</p>
            </div>
            {t.openPositions.map((pos: any) => (
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
              <span style={{ display: "inline-block", width: "30px", height: "1px", background: "rgba(184,154,90,0.8)", marginRight: "1rem" }}></span>{t.partnerLabel}
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 300, fontSize: "clamp(2rem,4vw,3.5rem)", lineHeight: 1.15, color: "#FDFCF9", marginBottom: "1.5rem" }}>
              {t.partnerTitle[0]}<em style={{ fontStyle: "italic", color: "#B89A5A" }}>{t.partnerTitle[1]}</em>
            </h2>
            <p style={{ color: "rgba(253,252,249,0.6)", fontSize: "1rem", lineHeight: "1.9", maxWidth: "640px" }}>{t.partnerDesc}</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", gap: "1px", background: "rgba(255,255,255,0.06)" }} className="fade-in">
            {t.partnerTypes.map((p: any) => (
              <div key={p.title} style={{ background: "var(--blue-deep,#1C2B4A)", padding: "3rem 2.5rem", transition: "background 0.3s" }}
                onMouseEnter={e => (e.currentTarget.style.background = "#2E4270")}
                onMouseLeave={e => (e.currentTarget.style.background = "var(--blue-deep,#1C2B4A)")}>
                <div style={{ width: "52px", height: "52px", border: "1px solid rgba(184,154,90,0.35)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "2rem" }}>
                  <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "0.75rem", letterSpacing: "0.1em", color: "#B89A5A", fontWeight: 500 }}>{p.icon}</span>
                </div>
                <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.4rem", fontWeight: 400, color: "#FDFCF9", marginBottom: "1rem", lineHeight: 1.3 }}>{p.title}</h3>
                <p style={{ fontSize: "0.85rem", color: "rgba(253,252,249,0.55)", lineHeight: 1.8, marginBottom: "1.5rem" }}>{p.desc}</p>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {p.items.map((item: string) => (
                    <li key={item} style={{ fontSize: "0.8rem", color: "rgba(184,154,90,0.7)", lineHeight: 2, display: "flex", alignItems: "center", gap: "0.6rem" }}>
                      <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#B89A5A", flexShrink: 0 }}></span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="fade-in" style={{ marginTop: "3rem", textAlign: "center" }}>
            <a href={`#${ids.contact}`} style={{ display: "inline-flex", alignItems: "center", gap: "1rem", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#B89A5A", textDecoration: "none", border: "1px solid rgba(184,154,90,0.4)", padding: "1rem 2.5rem", transition: "all 0.3s" }}
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
              <span style={{ display: "inline-block", width: "30px", height: "1px", background: "var(--gold,#B89A5A)", marginRight: "1rem" }}></span>{t.locationLabel}
            </div>
            <h2 className="section-title">{t.locationTitle[0]}<em>{t.locationTitle[1]}</em></h2>
            <p style={{ color: "var(--ink-mid,#3D3830)", fontSize: "1rem", lineHeight: "1.9", maxWidth: "640px", marginTop: "1rem" }}>{t.locationDesc}</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", gap: "1.5rem" }} className="fade-in">
            {t.locationPoints.map((point: any) => (
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
              <div style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold,#B89A5A)", marginBottom: "0.4rem" }}>{t.headquarters}</div>
              <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.4rem", fontWeight: 400, color: "var(--blue-deep,#1C2B4A)" }}>NEPEBE — 4173 Nagyrábé, Magyarország</p>
            </div>
          </div>
        </section>

        {/* WHITEPAPER */}
        <section style={{ padding: "7rem 4rem", background: "var(--blue-deep,#1C2B4A)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center" }} className="fade-in">
            <div>
              <div style={{ fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(184,154,90,0.8)", display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                <span style={{ display: "inline-block", width: "30px", height: "1px", background: "rgba(184,154,90,0.8)" }}></span>{t.whitepaperLabel}
              </div>
              <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 300, fontSize: "clamp(2rem,4vw,3.5rem)", lineHeight: 1.15, color: "#FDFCF9", marginBottom: "1.5rem" }}>
                {t.whitepaperTitle[0]}<em style={{ fontStyle: "italic", color: "#B89A5A" }}>{t.whitepaperTitle[1]}</em>{t.whitepaperTitle[2]}
              </h2>
              <p style={{ color: "rgba(253,252,249,0.6)", fontSize: "1rem", lineHeight: "1.9", marginBottom: "2.5rem" }}>{t.whitepaperDesc}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "1rem", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(184,154,90,0.5)", border: "1px solid rgba(184,154,90,0.2)", padding: "1rem 2rem", width: "fit-content", cursor: "not-allowed" }}>{t.whitepaperBtn}</span>
                <a href={`#${ids.contact}`} style={{ fontSize: "0.75rem", color: "rgba(184,154,90,0.7)", textDecoration: "none", letterSpacing: "0.05em" }}>{t.whitepaperNote}</a>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "rgba(255,255,255,0.06)" }}>
              {t.whitepaperChapters.map((label: string, i: number) => (
                <div key={i} style={{ background: "var(--blue-deep,#1C2B4A)", padding: "2rem 1.5rem" }}>
                  <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "2rem", fontWeight: 300, color: "rgba(184,154,90,0.25)", marginBottom: "0.5rem" }}>0{i+1}</div>
                  <div style={{ fontSize: "0.8rem", color: "rgba(253,252,249,0.5)", lineHeight: 1.6 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ padding: "7rem 4rem", background: "var(--white,#FDFCF9)" }} id={ids.faq}>
          <div className="fade-in" style={{ marginBottom: "4rem" }}>
            <div className="section-label">{t.faqLabel}</div>
            <h2 className="section-title">{t.faqTitle[0]}<em>{t.faqTitle[1]}</em>{t.faqTitle[2]}</h2>
          </div>
          <div style={{ maxWidth: "800px" }} className="fade-in">
            {t.faqs.map((faq: any, i: number) => <FaqItem key={i} q={faq.q} a={faq.a} />)}
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact-section" id={ids.contact}>
          <div className="fade-in">
            <div className="section-label">{t.contactLabel}</div>
            <h2 className="section-title">{t.contactTitle[0]}<em>{t.contactTitle[1]}</em><br />{t.contactTitle[2]}</h2>
            <div className="gold-divider"></div>
            <div className="contact-info">
              <h3>{t.contactIntro}</h3>
              <div className="contact-detail">
                {t.contactDetails.map((item: any) => (
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
              {t.formLabels.map((label: string, i: number) => (
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
            {t.footerLinks.map((link: string, i: number) => (
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
