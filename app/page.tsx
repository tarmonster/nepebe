'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Atom,
  Orbit,
  Cpu,
  Radio,
  Activity,
  ChevronDown,
  Globe,
  ShieldCheck,
  Zap,
} from 'lucide-react';

export default function NepebeResearchInterface() {
  const [lang, setLang] = useState<'hu' | 'en'>('hu');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const particles = useMemo(
    () =>
      Array.from({ length: 30 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: 5 + Math.random() * 10,
      })),
    []
  );

  const content = {
    hu: {
      initiative: 'Európai Elektromágneses Kutatási Kezdeményezés',

      hero:
        'A következő generációs elektromágneses kutatási infrastruktúra.',

      subtitle:
        'A NEPEBE egy jövőorientált európai deep-tech kutatási platform, amely az elektromágneses rendszerek új generációját kutatja.',

      explore: 'Kutatási Területek',

      status: 'Projekt Állapot',

      mission: 'Küldetés',

      technologies: 'Technológiai Területek',

      progress: 'Fejlesztési Állapot',

      contact: 'Kapcsolat',

      join: 'Csatlakozás',

      missionTitle: 'Európai Technológiai Innováció',

      missionText:
        'A projekt célja egy hosszútávú elektromágneses kutatási ökoszisztéma felépítése, amely támogatja a fejlett energetikai és rezonancia rendszerek kutatását.',

      cards: [
        {
          icon: Atom,
          title: 'Elektromágneses Energiaátvitel',
          text: 'Fejlett energiaátviteli technológiák és új generációs rendszerek kutatása.',
        },
        {
          icon: Orbit,
          title: 'Rezonancia Rendszerek',
          text: 'Kísérleti rezonancia alapú struktúrák és mezővezérlés.',
        },
        {
          icon: Radio,
          title: 'Intelligens Mezőszabályozás',
          text: 'Adaptív elektromágneses rendszerek fejlesztése.',
        },
        {
          icon: Cpu,
          title: 'Research Infrastructure',
          text: 'Kutatási és labor infrastruktúra előkészítése.',
        },
      ],

      roadmap: [
        '✔ Koncepció Alapok',
        '◉ Kutatási Architektúra',
        '◉ Vizuális Platform',
        '○ Labor Infrastrukturális Tervezés',
        '○ Prototípus Fejlesztés',
      ],
    },

    en: {
      initiative: 'European Electromagnetic Research Initiative',

      hero:
        'The next generation electromagnetic research infrastructure.',

      subtitle:
        'NEPEBE is a future-oriented European deep-tech research platform exploring next-generation electromagnetic systems.',

      explore: 'Research Areas',

      status: 'Project Status',

      mission: 'Mission',

      technologies: 'Technology Domains',

      progress: 'Development Status',

      contact: 'Contact',

      join: 'Join Initiative',

      missionTitle: 'European Technological Innovation',

      missionText:
        'The project aims to build a long-term electromagnetic research ecosystem supporting advanced energetic and resonance technologies.',

      cards: [
        {
          icon: Atom,
          title: 'Electromagnetic Energy Transfer',
          text: 'Advanced transmission systems and next-generation energy technologies.',
        },
        {
          icon: Orbit,
          title: 'Resonance Systems',
          text: 'Experimental resonance structures and intelligent field control.',
        },
        {
          icon: Radio,
          title: 'Intelligent Field Control',
          text: 'Adaptive electromagnetic field management systems.',
        },
        {
          icon: Cpu,
          title: 'Research Infrastructure',
          text: 'Laboratory and research infrastructure planning.',
        },
      ],

      roadmap: [
        '✔ Concept Foundation',
        '◉ Research Architecture',
        '◉ Visual Platform',
        '○ Laboratory Infrastructure',
        '○ Prototype Development',
      ],
    },
  };

  const t = content[lang];

  return (
    <main className="bg-[#040816] text-white overflow-hidden">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              'radial-gradient(circle at top, rgba(0,209,255,0.35), transparent 35%)',
          }}
        />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:90px_90px]" />

        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-cyan-300 rounded-full"
            initial={{
              opacity: 0,
              y: 0,
            }}
            animate={{
              opacity: [0, 1, 0],
              y: [-20, -100],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
          />
        ))}
      </div>

      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-[#040816]/70 border-b border-cyan-400/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-cyan-300 animate-pulse" />

            <h1 className="tracking-[0.35em] font-bold text-cyan-300 text-sm md:text-lg">
              NEPEBE
            </h1>
          </div>

          <nav className="hidden md:flex gap-8 text-sm text-slate-300">
            <a href="#technology" className="hover:text-cyan-300 transition">
              {t.technologies}
            </a>

            <a href="#progress" className="hover:text-cyan-300 transition">
              {t.progress}
            </a>

            <a href="#mission" className="hover:text-cyan-300 transition">
              {t.mission}
            </a>
          </nav>

          <div className="flex gap-2">
            <button
              onClick={() => setLang('hu')}
              className={
                lang === 'hu'
                  ? 'px-3 py-1 rounded-full bg-cyan-300 text-black text-sm font-semibold'
                  : 'px-3 py-1 rounded-full border border-cyan-300/20 text-sm'
              }
            >
              HU
            </button>

            <button
              onClick={() => setLang('en')}
              className={
                lang === 'en'
                  ? 'px-3 py-1 rounded-full bg-cyan-300 text-black text-sm font-semibold'
                  : 'px-3 py-1 rounded-full border border-cyan-300/20 text-sm'
              }
            >
              EN
            </button>
          </div>
        </div>
      </header>

      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div
          className="absolute w-[600px] h-[600px] rounded-full bg-cyan-400/10 blur-3xl"
          style={{
            transform: `translateY(${scrollY * 0.15}px)`,
          }}
        />

        <div className="relative z-10 max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-cyan-300/20 bg-cyan-300/5 text-cyan-200 text-sm mb-10"
          >
            <Globe className="w-4 h-4" />
            {t.initiative}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
            className="text-6xl md:text-8xl font-black tracking-tight mb-10"
          >
            <span className="text-white">NEPE</span>
            <span className="text-cyan-300">BE</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-2xl md:text-4xl font-light text-slate-200 leading-relaxed mb-8"
          >
            {t.hero}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3 }}
            className="text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto mb-12"
          >
            {t.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="#technology"
              className="px-8 py-4 rounded-2xl bg-cyan-300 text-black font-semibold hover:scale-105 transition-transform"
            >
              {t.explore}
            </a>

            <a
              href="#progress"
              className="px-8 py-4 rounded-2xl border border-cyan-300/20 hover:bg-cyan-300/10 transition-all"
            >
              {t.status}
            </a>
          </motion.div>

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="mt-24 flex justify-center"
          >
            <ChevronDown className="w-8 h-8 text-cyan-300" />
          </motion.div>
        </div>
      </section>

      <section id="technology" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <Zap className="w-10 h-10 text-cyan-300" />

            <h2 className="text-5xl font-bold text-cyan-300">
              {t.technologies}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {t.cards.map((card, index) => {
              const Icon = card.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-3xl border border-cyan-300/10 bg-white/5 backdrop-blur-xl p-8 hover:border-cyan-300/40 hover:-translate-y-2 transition-all"
                >
                  <div className="w-16 h-16 rounded-2xl bg-cyan-300/10 border border-cyan-300/20 flex items-center justify-center mb-8">
                    <Icon className="w-8 h-8 text-cyan-300" />
                  </div>

                  <h3 className="text-2xl font-semibold mb-4">
                    {card.title}
                  </h3>

                  <p className="text-slate-400 leading-relaxed">
                    {card.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="progress" className="py-32 px-6 border-t border-cyan-300/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <Activity className="w-10 h-10 text-cyan-300" />

            <h2 className="text-5xl font-bold text-cyan-300">
              {t.progress}
            </h2>
          </div>

          <div className="space-y-6">
            {t.roadmap.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl border border-cyan-300/10 bg-white/5 p-6 text-lg"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="mission" className="py-32 px-6 border-t border-cyan-300/10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <ShieldCheck className="w-16 h-16 text-cyan-300" />
          </div>

          <h2 className="text-5xl font-bold mb-10 text-cyan-300">
            {t.missionTitle}
          </h2>

          <p className="text-xl text-slate-300 leading-relaxed">
            {t.missionText}
          </p>
        </div>
      </section>

      <section className="py-32 px-6 border-t border-cyan-300/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8 text-cyan-300">
            {t.contact}
          </h2>

          <p className="text-slate-400 text-xl mb-12">
            research@nepebe.eu
          </p>

          <a
            href="mailto:research@nepebe.eu"
            className="inline-flex px-8 py-4 rounded-2xl bg-cyan-300 text-black font-semibold hover:scale-105 transition-transform"
          >
            {t.join}
          </a>
        </div>
      </section>
    </main>
  );
}
