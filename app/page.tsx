'use client';

import { useState } from 'react';

export default function Home() {
  const [lang, setLang] = useState('hu');

  const content = {
    hu: {
      initiative: 'Európai Elektromágneses Kutatási Kezdeményezés',
      description:
        'A következő generációs elektromágneses technológiák kutatása európai együttműködésben.',
      explore: 'Kutatási Területek',
      status: 'Projekt Állapot',
      researchTitle: 'Kutatási Területek',
      statusTitle: 'Projekt Állapot',
    },

    en: {
      initiative: 'European Electromagnetic Research Initiative',
      description:
        'Exploring next-generation electromagnetic technologies through European collaboration.',
      explore: 'Explore Research',
      status: 'Project Status',
      researchTitle: 'Research Areas',
      statusTitle: 'Project Status',
    },
  };

  const t = content[lang as keyof typeof content];

  return (
    <main className="min-h-screen bg-[#050816] text-white scroll-smooth">
      {/* Background */}
      <div className="fixed inset-0 opacity-20 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#00D1FF33,transparent_40%)]" />
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#050816]/70 border-b border-cyan-500/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold tracking-[0.3em] text-cyan-300">
            NEPEBE
          </h1>

          <div className="flex gap-2">
            <button
              onClick={() => setLang('hu')}
              className={`px-3 py-1 rounded-full text-sm cursor-pointer ${
                lang === 'hu'
                  ? 'bg-cyan-400 text-black'
                  : 'border border-cyan-400/30'
              }`}
            >
              HU
            </button>

            <button
              onClick={() => setLang('en')}
              className={`px-3 py-1 rounded-full text-sm cursor-pointer ${
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
            <div className="p-8 rounded-3xl bg-white/5 border border-cyan-400/10">
              <h3 className="text-2xl font-semibold mb-4">
                Electromagnetic Energy Transfer
              </h3>

              <p className="text-slate-300">
                Advanced electromagnetic transmission systems and energy
                research.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-cyan-400/10">
              <h3 className="text-2xl font-semibold mb-4">
                Resonance Systems
              </h3>

              <p className="text-slate-300">
                Experimental resonance-based technologies and intelligent field
                control.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-cyan-400/10">
              <h3 className="text-2xl font-semibold mb-4">
                Intelligent Field Control
              </h3>

              <p className="text-slate-300">
                Adaptive electromagnetic field management for industrial
                applications.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-cyan-400/10">
              <h3 className="text-2xl font-semibold mb-4">
                Advanced Induction
              </h3>

              <p className="text-slate-300">
                High-performance induction systems and next-generation energy
                infrastructure.
              </p>
            </div>
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
            <div className="p-6 rounded-2xl bg-white/5 border border-cyan-400/10">
              ✔ Concept Foundation
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-cyan-400/10">
              ◉ Research Architecture
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-cyan-400/10">
              ○ Laboratory Infrastructure
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-cyan-400/10">
              ○ Prototype Development
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}