'use client';

import { useEffect, useState } from 'react';

/* =========================
   BOOT
========================= */
function BootSequence({ onDone }: { onDone: () => void }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    for (let i = 1; i <= 5; i++) {
      setTimeout(() => setStep(i), i * 400);
    }
    setTimeout(onDone, 2500);
  }, []);

  return (
    <div className="boot">
      {step >= 1 && <p>INITIALIZING NEPEBE SYSTEM...</p>}
      {step >= 2 && <p>LOADING RESEARCH MODULES...</p>}
      {step >= 3 && <p>STARTING FIELD ENGINE...</p>}
      {step >= 4 && <p>CONNECTING DATA LAYER...</p>}
      {step >= 5 && <p className="done">SYSTEM ONLINE</p>}
    </div>
  );
}

/* =========================
   MAIN
========================= */
export default function Page() {
  const [ready, setReady] = useState(false);

  if (!ready) {
    return <BootSequence onDone={() => setReady(true)} />;
  }

  return (
    <main className="min-h-screen px-6">

      {/* HERO */}
      <section className="text-center py-32">
        <h1 className="text-6xl font-black mb-6">
          NEPE<span className="text-cyan-300">BE</span>
        </h1>

        <p className="text-2xl text-slate-300 mb-4">
          European Electromagnetic Research Platform
        </p>

        <p className="text-slate-400 max-w-xl mx-auto mb-8">
          A next-generation digital infrastructure for electromagnetic
          simulation, analysis, and scientific discovery.
        </p>

        <div className="flex justify-center gap-4">
          <button className="btn-primary">Explore Platform</button>
          <button className="btn-outline">Research Areas</button>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="max-w-6xl mx-auto pb-32">
        <h2 className="title">Technology Domains</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'Electromagnetic Energy',
              text: 'Advanced energy transmission and modeling systems.',
            },
            {
              title: 'Resonance Systems',
              text: 'Experimental resonance structures and field dynamics.',
            },
            {
              title: 'Field Control',
              text: 'Adaptive electromagnetic field regulation.',
            },
            {
              title: 'Research Infrastructure',
              text: 'Scalable European deep-tech platform.',
            },
          ].map((card, i) => (
            <div key={i} className="panel">
              <h3 className="card-title">{card.title}</h3>
              <p className="card-text">{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROGRESS */}
      <section className="max-w-4xl mx-auto pb-32">
        <h2 className="title">Development Progress</h2>

        {[
          '✔ Concept Foundation',
          '◉ Research Architecture',
          '◉ Visual Platform',
          '○ Laboratory Infrastructure',
          '○ Prototype Development',
        ].map((item, i) => (
          <div key={i} className="panel timeline">
            {item}
          </div>
        ))}
      </section>

      {/* DASHBOARD */}
      <section className="max-w-6xl mx-auto pb-32">
        <h2 className="title">Research Dashboard</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { value: '04', label: 'Active Domains' },
            { value: '12+', label: 'Modules' },
            { value: 'EU', label: 'European Focus' },
            { value: '24/7', label: 'Continuous Dev' },
          ].map((item, i) => (
            <div key={i} className="panel stat">
              <div className="stat-value">{item.value}</div>
              <div className="stat-label">{item.label}</div>
            </div>
          ))}
        </div>

        <div className="panel">
          <div className="live">● LIVE SYSTEM</div>

          <h3 className="text-xl font-bold mb-4">
            Next-Generation Research Platform
          </h3>

          {[
            { label: 'Infrastructure', value: '72%' },
            { label: 'UI System', value: '84%' },
            { label: 'Visual Platform', value: '91%' },
          ].map((bar, i) => (
            <div key={i} className="mb-4">
              <div className="flex justify-between text-sm text-slate-400">
                <span>{bar.label}</span>
                <span>{bar.value}</span>
              </div>

              <div className="bar-bg">
                <div
                  style={{ width: bar.value }}
                  className="bar-fill"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center pb-32">
        <h2 className="text-3xl font-bold mb-6">
          Join the NEPEBE Initiative
        </h2>

        <p className="text-slate-400 mb-6">
          Be part of the next generation of European research infrastructure.
        </p>

        <button className="btn-primary">
          Contact Research Team
        </button>
      </section>

    </main>
  );
}
