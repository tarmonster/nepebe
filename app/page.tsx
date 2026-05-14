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
    },

    en: {
      initiative: 'European Electromagnetic Research Initiative',
      description:
        'Exploring next-generation electromagnetic technologies through European collaboration.',
      explore: 'Explore Research',
      status: 'Project Status',
    },
  };

  const t = content[lang as keyof typeof content];

  return (
    <main className="min-h-screen bg-[#050816] text-white flex items-center justify-center px-6">
      <div className="max-w-5xl text-center">
        <div className="flex justify-center mb-10 gap-4">
          <button
            onClick={() => setLang('hu')}
            className="px-4 py-2 rounded-xl bg-cyan-400 text-black font-semibold"
          >
            HU
          </button>

          <button
            onClick={() => setLang('en')}
            className="px-4 py-2 rounded-xl border border-cyan-400"
          >
            EN
          </button>
        </div>

        <h1 className="text-7xl font-black mb-8 text-cyan-300">
          NEPEBE
        </h1>

        <p className="text-sm uppercase tracking-[0.3em] text-cyan-200 mb-8">
          {t.initiative}
        </p>

        <p className="text-2xl text-slate-300 leading-relaxed mb-10">
          {t.description}
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <button className="px-8 py-4 rounded-2xl bg-cyan-400 text-black font-semibold">
            {t.explore}
          </button>

          <button className="px-8 py-4 rounded-2xl border border-cyan-400/30">
            {t.status}
          </button>
        </div>
      </div>
    </main>
  );
}