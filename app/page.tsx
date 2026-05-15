'use client';

import { useState } from 'react';
import {
  ArrowRight,
  Users,
  FlaskConical,
  Briefcase,
  Globe,
  Mail,
  ChevronRight,
} from 'lucide-react';

export default function HomePage() {
  const [lang, setLang] = useState<'hu' | 'en'>('hu');

  const content = {
    hu: {
      navAbout: 'A Projektről',
      navResearch: 'Kutatási Területek',
      navJoin: 'Csatlakozás',
      navInvestor: 'Befektetők',

      heroSubtitle:
        'Európai deep-tech kutatási kezdeményezés fejlett elektromágneses rendszerek és jövőbeli energetikai technológiák kutatására.',

      heroPrimary: 'Csatlakozás',
      heroSecondary: 'Kutatási Területek',

      aboutTitle: 'Miről szól a projekt?',
      aboutText:
        'A NEPEBE egy hosszútávú európai kutatási kezdeményezés, amely fejlett elektromágneses rendszerek, rezonancia technológiák és jövőbeli energetikai infrastruktúrák kutatására épül. A cél egy professzionális kutatási ökoszisztéma kialakítása mérnökök, kutatók és stratégiai partnerek bevonásával.',

      researchTitle: 'Kutatási Területek',

      research: [
        {
          title: 'Electromagnetic Energy Systems',
          text: 'Fejlett elektromágneses energiaátviteli rendszerek kutatása.',
        },
        {
          title: 'Resonance Research',
          text: 'Rezonancia alapú rendszerek és mezővezérlés vizsgálata.',
        },
        {
          title: 'Experimental Infrastructure',
          text: 'Kísérleti és labor infrastruktúra előkészítése.',
        },
        {
          title: 'Energy Transfer Technologies',
          text: 'Új generációs energetikai technológiák kutatása.',
        },
      ],

      joinTitle: 'Kiket keresünk?',

      joinResearch:
        'Kutatókat, mérnököket és szakmai partnereket keresünk.',

      joinAdmin:
        'Adminisztratív és operatív szakembereket is várunk a projekt hosszútávú felépítéséhez.',

      positions: [
        'Villamosmérnökök',
        'Fizikusok',
        'Energetikai szakemberek',
        'Szimulációs szakértők',
        'Projekt koordinátorok',
        'Pályázati szakértők',
        'Pénzügyi és adminisztratív munkatársak',
      ],

      roadmapTitle: 'Roadmap',

      roadmap: [
        '2025 — Foundation & Platform',
        '2026 — Simulation Systems',
        '2027 — Prototype Research',
        '2028 — Laboratory Infrastructure',
        '2030 — Strategic Expansion',
      ],

      investorTitle: 'Befektetői Információ',

      investorText:
        'A NEPEBE hosszútávú kutatási és technológiai infrastruktúra építésére törekszik európai fókuszú deep-tech és energetikai területeken. A projekt célja egy stratégiai jelentőségű kutatási ökoszisztéma létrehozása.',

      contactTitle: 'Kapcsolat',

      footer:
        'European Electromagnetic Research Initiative',
    },

    en: {
      navAbout: 'About',
      navResearch: 'Research Areas',
      navJoin: 'Join',
      navInvestor: 'Investors',

      heroSubtitle:
        'European deep-tech research initiative focused on advanced electromagnetic systems and future energy technologies.',

      heroPrimary: 'Join Initiative',
      heroSecondary: 'Research Areas',

      aboutTitle: 'About the Project',
      aboutText:
        'NEPEBE is a long-term European research initiative focused on advanced electromagnetic systems, resonance technologies and future energy infrastructures. The objective is to establish a professional research ecosystem involving engineers, researchers and strategic partners.',

      researchTitle: 'Research Areas',

      research: [
        {
          title: 'Electromagnetic Energy Systems',
          text: 'Research on advanced electromagnetic energy systems.',
        },
        {
          title: 'Resonance Research',
          text: 'Research on resonance-based systems and field control.',
        },
        {
          title: 'Experimental Infrastructure',
          text: 'Preparation of experimental and laboratory infrastructure.',
        },
        {
          title: 'Energy Transfer Technologies',
          text: 'Research on next-generation energy technologies.',
        },
      ],

      joinTitle: 'Who Are We Looking For?',

      joinResearch:
        'We are looking for researchers, engineers and professional collaborators.',

      joinAdmin:
        'Administrative and operational professionals are also essential for building the initiative long-term.',

      positions: [
        'Electrical Engineers',
        'Physicists',
        'Energy Specialists',
        'Simulation Experts',
        'Project Coordinators',
        'Grant Specialists',
        'Financial & Administrative Staff',
      ],

      roadmapTitle: 'Roadmap',

      roadmap: [
        '2025 — Foundation & Platform',
        '2026 — Simulation Systems',
        '2027 — Prototype Research',
        '2028 — Laboratory Infrastructure',
        '2030 — Strategic Expansion',
      ],

      investorTitle: 'Investor Information',

      investorText:
        'NEPEBE aims to build long-term research and technological infrastructure focused on European deep-tech and energy sectors. The project seeks to establish a strategically important research ecosystem.',

      contactTitle: 'Contact',

      footer:
        'European Electromagnetic Research Initiative',
    },
  };

  const t = content[lang];

  return (
    <main className="bg-white text-black min-h-screen">
      <header className="border-b border-black/10 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-[0.25em]">
              NEPEBE
            </h1>

            <p className="text-xs text-neutral-500 mt-1">
              {t.footer}
            </p>
          </div>

          <nav className="hidden md:flex gap-10 text-sm">
            <a href="#about" className="hover:opacity-60 transition">
              {t.navAbout}
            </a>

            <a href="#research" className="hover:opacity-60 transition">
              {t.navResearch}
            </a>

            <a href="#join" className="hover:opacity-60 transition">
              {t.navJoin}
            </a>

            <a href="#investor" className="hover:opacity-60 transition">
              {t.navInvestor}
            </a>
          </nav>

          <div className="flex gap-2">
            <button
              onClick={() => setLang('hu')}
              className={
                lang === 'hu'
                  ? 'px-3 py-1 rounded-full bg-black text-white text-sm'
                  : 'px-3 py-1 rounded-full border border-black/20 text-sm'
              }
            >
              HU
            </button>

            <button
              onClick={() => setLang('en')}
              className={
                lang === 'en'
                  ? 'px-3 py-1 rounded-full bg-black text-white text-sm'
                  : 'px-3 py-1 rounded-full border border-black/20 text-sm'
              }
            >
              EN
            </button>
          </div>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 pt-32 pb-28">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-3 border border-black/10 rounded-full px-4 py-2 text-sm mb-10">
            <Globe className="w-4 h-4" />
            European Electromagnetic Research Initiative
          </div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-none mb-10">
            NEPEBE
          </h1>

          <p className="text-2xl md:text-3xl text-neutral-700 leading-relaxed mb-10">
            {t.heroSubtitle}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#join"
              className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-2xl hover:opacity-90 transition"
            >
              {t.heroPrimary}
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#research"
              className="inline-flex items-center gap-2 px-8 py-4 border border-black/10 rounded-2xl hover:bg-black/5 transition"
            >
              {t.heroSecondary}
            </a>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="border-t border-black/10 py-28"
      >
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-10">
            {t.aboutTitle}
          </h2>

          <p className="text-xl text-neutral-700 leading-relaxed">
            {t.aboutText}
          </p>
        </div>
      </section>

      <section
        id="research"
        className="border-t border-black/10 py-28 bg-neutral-50"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-16">
            <FlaskConical className="w-8 h-8" />

            <h2 className="text-4xl font-bold">
              {t.researchTitle}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {t.research.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-black/10 rounded-3xl p-10"
              >
                <h3 className="text-2xl font-semibold mb-5">
                  {item.title}
                </h3>

                <p className="text-neutral-700 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="join"
        className="border-t border-black/10 py-28"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-16">
            <Users className="w-8 h-8" />

            <h2 className="text-4xl font-bold">
              {t.joinTitle}
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="text-xl text-neutral-700 leading-relaxed mb-8">
                {t.joinResearch}
              </p>

              <p className="text-xl text-neutral-700 leading-relaxed">
                {t.joinAdmin}
              </p>
            </div>

            <div className="space-y-4">
              {t.positions.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 border border-black/10 rounded-2xl p-5 bg-neutral-50"
                >
                  <ChevronRight className="w-5 h-5" />

                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-black/10 py-28 bg-neutral-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16">
            {t.roadmapTitle}
          </h2>

          <div className="space-y-5">
            {t.roadmap.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-black/10 rounded-2xl px-6 py-5 text-lg"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="investor"
        className="border-t border-black/10 py-28"
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <Briefcase className="w-8 h-8" />

            <h2 className="text-4xl font-bold">
              {t.investorTitle}
            </h2>
          </div>

          <p className="text-xl text-neutral-700 leading-relaxed">
            {t.investorText}
          </p>
        </div>
      </section>

      <section className="border-t border-black/10 py-28 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-8">
            <Mail className="w-10 h-10" />
          </div>

          <h2 className="text-4xl font-bold mb-10">
            {t.contactTitle}
          </h2>

          <div className="space-y-5 text-lg">
            <p>research@nepebe.eu</p>
            <p>partnerships@nepebe.eu</p>
            <p>investors@nepebe.eu</p>
          </div>
        </div>
      </section>
    </main>
  );
}