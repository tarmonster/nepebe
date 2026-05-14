```tsx
'use client';

import { useState } from 'react';

export default function Home() {
  const [lang, setLang] = useState<'hu' | 'en'>('hu');

  const content = {
    hu: {
      initiative: 'Európai Elektromágneses Kutatási Kezdeményezés',

      description:
        'A következő generációs elektromágneses technológiák kutatása európai együttműködésben.',

      explore: 'Kutatási Területek',

      status: 'Projekt Állapot',

      researchTitle: 'Kutatási Területek',

      statusTitle: 'Projekt Állapot',

      navResearch: 'Kutatás',

      navStatus: 'Állapot',

      navMission: 'Küldetés',

      missionTitle: 'Európai Innovációra Építve',

      missionText:
        'A NEPEBE célja hosszú távú európai technológiai fejlesztések támogatása kutatási és mérnöki együttműködéseken keresztül.',

      contactTitle: 'Kapcsolat',

      contactText:
        'Csatlakozz a következő generációs elektromágneses technológiák fejlesztéséhez.',

      contactButton: 'Kapcsolatfelvétel',

      researchCards: [
        {
          title: 'Elektromágneses Energiaátvitel',
          text:
            'Fejlett elektromágneses energiaátviteli rendszerek kutatása.',
        },

        {
          title: 'Rezonancia Rendszerek',
          text:
            'Kísérleti rezonancia alapú technológiák és intelligens mezővezérlés.',
        },

        {
          title: 'Intelligens Mezőszabályozás',
          text:
            'Adaptív elektromágneses mezőkezelés ipari alkalmazásokhoz.',
        },

        {
          title: 'Fejlett Indukció',
          text:
            'Nagy teljesítményű indukciós rendszerek és energia infrastruktúra.',
        },
      ],

      statuses: [
        '✔ Koncepció Alapok',
        '◉ Kutatási Architektúra',
        '○ Laboratóriumi Infrastruktúra',
        '○ Prototípus Fejlesztés',
      ],
    },

    en: {
      initiative: 'European Electromagnetic Research Initiative',

      description:
        'Exploring next-generation electromagnetic technologies through European collaboration.',

      explore: 'Research Areas',

      status: 'Project Status',

      researchTitle: 'Research Areas',

      statusTitle: 'Project Status',

      navResearch: 'Research',

      navStatus: 'Status',

      navMission: 'Mission',

      missionTitle: 'Built for European Innovation',

      missionText:
        'NEPEBE aims to support long-term European technological development through research and engineering collaboration.',

      contactTitle: 'Contact',

      contactText:
        'Join the development of next-generation electromagnetic technologies.',

      contactButton: 'Contact',

      researchCards: [
        {
          title: 'Electromagnetic Energy Transfer',
          text:
            'Advanced electromagnetic transmission systems and energy research.',
        },

        {
          title: 'Resonance Systems',
          text:
            'Experimental resonance-based technologies and intelligent field control.',
        },

        {
          title: 'Intelligent Field Control',
          text:
            'Adaptive electromagnetic field management for industrial applications.',
        },

        {
          title: 'Advanced Induction',
          text:
            'High-performance induction systems and next-generation energy infrastructure.',
        },
      ],

      statuses: [
        '✔ Concept Foundation',
        '◉ Research Architecture',
        '○ Laboratory Infrastructure',
        '○ Prototype Development',
      ],
    },
  };

  const t = content[lang];

  return (
    <main className="min-h-screen bg-[#050816] text-white scroll-smooth overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none -z-10 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#00D1FF33,transparent_40%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#050816]/70 border-b border-cyan-500/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold tracking-[0.3em] text-cyan-300">
            NEPEBE
          </h1>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
            <a
              href="#research"
              className="hover:text-cyan-300 transition-colors"
            >
              {t.navResearch}
            </a>

            <a
              href="#status"
              className="hover:text-cyan-300 transition-colors"
            >
              {t.navStatus}
            </a>

            <a
              href="#mission"
              className="hover:text-cyan-300 transition-colors"
            >
              {t.navMission}
            </a>
          </nav>

          <div className="flex gap-2">
            <button
              onClick={() => setLang('hu')}
              className={`px-3 py-1 rounded-full text-sm cursor-pointer transition-all ${
                lang === 'hu'
                  ? 'bg-cyan-400 text-black'
                  : 'border border-cyan-400/30'
              }`}
            >
              HU
            </button>

            <button
              onClick={() => setLang('en')}
              className={`px-3 py-1 rounded-full text-sm cursor-pointer transition-all ${
                lang === 'en'
                  ? 'bg-cyan-400 text-black'
                  : 'border border-cyan-400/30'
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="max-w-5xl text-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 text-cyan-200 text-sm mb-8">
            {t.initiative}
          </div>

          <h1 className="text-6xl md:text-8xl font-black mb-8 text-cyan-300">
            NEPEBE
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-12">
            {t.description}
          </p>

          <div className="relative z-20 flex flex-wrap justify-center gap-4">
            <a
              href="#research"
              className="px-8 py-4 rounded-2xl bg-cyan-400 text-black font-semibold hover:scale-105 transition-transform cursor-pointer"
            >
              {t.explore}
            </a>

            <a
              href="#status"
              className="px-8 py-4 rounded-2xl border border-cyan-400/30 hover:border-cyan-300 hover:bg-cyan-400/10 transition-all cursor-pointer"
            >
              {t.status}
            </a>
          </div>
        </div>
      </section>

      {/* RESEARCH */}
      <section
        id="research"
        className="relative z-10 py-32 px-6 border-t border-cyan-500/10"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-cyan-300">
            {t.researchTitle}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {t.researchCards.map((card, index) => (
              <div
                key={index}
                className="p-8 rounded-3xl bg-white/5 border border-cyan-400/10 hover:border-cyan-300/30 transition-all"
              >
                <h3 className="text-2xl font-semibold mb-4">
                  {card.title}
                </h3>

                <p className="text-slate-300">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATUS */}
      <section
        id="status"
        className="relative z-10 py-32 px-6 border-t border-cyan-500/10"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-cyan-300">
            {t.statusTitle}
          </h2>

          <div className="space-y-6">
            {t.statuses.map((status, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white/5 border border-cyan-400/10"
              >
                {status}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section
        id="mission"
        className="relative z-10 py-32 px-6 border-t border-cyan-500/10"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-10 text-cyan-300">
            {t.missionTitle}
          </h2>

          <p className="text-xl text-slate-300 leading-relaxed">
            {t.missionText}
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="relative z-10 py-32 px-6 border-t border-cyan-500/10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-10 text-cyan-300">
            {t.contactTitle}
          </h2>

          <p className="text-xl text-slate-300 mb-10">
            {t.contactText}
          </p>

          <a
            href="mailto:contact@nepebe.eu"
            className="inline-flex px-8 py-4 rounded-2xl bg-cyan-400 text-black font-semibold hover:scale-105 transition-transform"
          >
            {t.contactButton}
          </a>
        </div>
      </section>
    </main>
  );
}
```
