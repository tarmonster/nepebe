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
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <ShieldCheck className="w-10 h-10 text-cyan-300" />

            <h2 className="text-5xl font-bold text-cyan-300">
              {lang === 'hu' ? 'Research Dashboard' : 'Research Dashboard'}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mb-20">
            {[
              {
                value: '04',
                hu: 'Aktív Kutatási Terület',
                en: 'Active Research Domains',
              },
              {
                value: '12+',
                hu: 'Jövőbeli Fejlesztési Modul',
                en: 'Future Development Modules',
              },
              {
                value: 'EU',
                hu: 'Európai Kutatási Fókusz',
                en: 'European Research Focus',
              },
              {
                value: '24/7',
                hu: 'Folyamatos Platform Fejlesztés',
                en: 'Continuous Platform Development',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-3xl border border-cyan-300/10 bg-white/5 p-8 backdrop-blur-xl"
              >
                <div className="text-5xl font-black text-cyan-300 mb-6">
                  {item.value}
                </div>

                <div className="text-slate-300 leading-relaxed">
                  {lang === 'hu' ? item.hu : item.en}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="rounded-[40px] border border-cyan-300/10 bg-gradient-to-br from-cyan-400/10 to-transparent p-10 backdrop-blur-xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-cyan-300/20 bg-cyan-300/5 text-cyan-200 text-sm mb-8">
                  <div className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse" />
                  LIVE RESEARCH SYSTEM
                </div>

                <h3 className="text-4xl font-bold mb-8 text-cyan-300">
                  {lang === 'hu'
                    ? 'Következő Generációs Kutatási Platform'
                    : 'Next-Generation Research Platform'}
                </h3>

                <p className="text-slate-300 text-lg leading-relaxed">
                  {lang === 'hu'
                    ? 'A NEPEBE platform célja egy modern európai deep-tech kutatási infrastruktúra kialakítása, amely képes támogatni a hosszútávú elektromágneses fejlesztéseket és kutatási együttműködéseket.'
                    : 'The NEPEBE platform aims to establish a modern European deep-tech research infrastructure capable of supporting long-term electromagnetic development and collaboration.'}
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    labelHu: 'Platform Infrastrukturális Fejlesztés',
                    labelEn: 'Platform Infrastructure Development',
                    value: '72%',
                  },
                  {
                    labelHu: 'Research UI Rendszer',
                    labelEn: 'Research UI System',
                    value: '84%',
                  },
                  {
                    labelHu: 'Vizuális Kutatási Platform',
                    labelEn: 'Visual Research Platform',
                    value: '91%',
                  },
                ].map((bar, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-2 text-slate-300">
                      <span>
                        {lang === 'hu' ? bar.labelHu : bar.labelEn}
                      </span>

                      <span>{bar.value}</span>
                    </div>

                    <div className="w-full h-3 rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: bar.value }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                        className="h-full rounded-full bg-cyan-300"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
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

      <section className="py-32 px-6 border-t border-cyan-300/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <Orbit className="w-10 h-10 text-cyan-300" />

            <h2 className="text-5xl font-bold text-cyan-300">
              {lang === 'hu' ? 'Research Timeline' : 'Research Timeline'}
            </h2>
          </div>

          <div className="space-y-10 relative before:absolute before:left-4 before:top-0 before:w-px before:h-full before:bg-cyan-300/20">
            {[
              {
                year: '2025',
                titleHu: 'Koncepció és platform alapok',
                titleEn: 'Concept and platform foundations',
              },
              {
                year: '2026',
                titleHu: 'Szimulációs rendszerek',
                titleEn: 'Simulation systems',
              },
              {
                year: '2027',
                titleHu: 'Kísérleti prototípusok',
                titleEn: 'Experimental prototypes',
              },
              {
                year: '2028',
                titleHu: 'Labor infrastruktúra',
                titleEn: 'Laboratory infrastructure',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative pl-16"
              >
                <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-cyan-300/20 border border-cyan-300/40 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-cyan-300" />
                </div>

                <div className="rounded-3xl border border-cyan-300/10 bg-white/5 p-8">
                  <div className="text-cyan-300 text-sm mb-2">
                    {item.year}
                  </div>

                  <h3 className="text-2xl font-semibold">
                    {lang === 'hu' ? item.titleHu : item.titleEn}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 border-t border-cyan-300/10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-10 text-cyan-300">
            {lang === 'hu'
              ? 'Európai Deep-Tech Jövőkép'
              : 'European Deep-Tech Vision'}
          </h2>

          <p className="text-xl text-slate-300 leading-relaxed max-w-4xl mx-auto mb-16">
            {lang === 'hu'
              ? 'A NEPEBE célja egy hosszútávú kutatási és technológiai ökoszisztéma létrehozása, amely képes összekötni a tudományos kutatást, az energetikai innovációt és az ipari alkalmazásokat.'
              : 'NEPEBE aims to build a long-term research and technology ecosystem capable of connecting scientific research, energetic innovation and industrial applications.'}
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                value: '2030+',
                labelHu: 'Hosszútávú Kutatási Horizont',
                labelEn: 'Long-Term Research Horizon',
              },
              {
                value: 'EU',
                labelHu: 'Európai Együttműködés',
                labelEn: 'European Collaboration',
              },
              {
                value: 'R&D',
                labelHu: 'Fejlett Kutatás és Fejlesztés',
                labelEn: 'Advanced Research & Development',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-3xl border border-cyan-300/10 bg-white/5 p-10"
              >
                <div className="text-5xl font-black text-cyan-300 mb-6">
                  {item.value}
                </div>

                <div className="text-slate-300 text-lg">
                  {lang === 'hu' ? item.labelHu : item.labelEn}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
          <section className="py-32 px-6 border-t border-cyan-300/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cyan-400/20 blur-3xl rounded-full" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <Atom className="w-10 h-10 text-cyan-300" />

            <h2 className="text-5xl font-bold text-cyan-300">
              {lang === 'hu'
                ? 'Kutatási Infrastruktúra'
                : 'Research Infrastructure'}
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                hu: 'Szimulációs Környezet',
                en: 'Simulation Environment',
                descHu:
                  'Nagy teljesítményű kutatási és modellezési rendszerek előkészítése.',
                descEn:
                  'Preparation of high-performance research and modeling systems.',
              },
              {
                hu: 'Labor Architektúra',
                en: 'Laboratory Architecture',
                descHu:
                  'Következő generációs kísérleti infrastruktúra kialakítása.',
                descEn:
                  'Designing next-generation experimental infrastructure.',
              },
              {
                hu: 'Európai Együttműködés',
                en: 'European Collaboration',
                descHu:
                  'Jövőbeli kutatási együttműködések és technológiai kapcsolatok.',
                descEn:
                  'Future research collaborations and technological partnerships.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group rounded-[32px] border border-cyan-300/10 bg-white/5 p-10 backdrop-blur-xl hover:border-cyan-300/40 transition-all"
              >
                <div className="w-16 h-16 rounded-2xl bg-cyan-300/10 border border-cyan-300/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <Orbit className="w-8 h-8 text-cyan-300" />
                </div>

                <h3 className="text-3xl font-bold mb-6 text-white">
                  {lang === 'hu' ? item.hu : item.en}
                </h3>

                <p className="text-slate-400 leading-relaxed text-lg">
                  {lang === 'hu' ? item.descHu : item.descEn}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 border-t border-cyan-300/10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-cyan-300/20 bg-cyan-300/5 text-cyan-200 text-sm mb-10">
            <div className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse" />
            EUROPEAN DEEP-TECH INITIATIVE
          </div>

          <h2 className="text-6xl font-black mb-10 leading-tight">
            {lang === 'hu'
              ? 'A jövő kutatási platformja épül.'
              : 'Building the research platform of the future.'}
          </h2>

          <p className="text-xl text-slate-400 leading-relaxed max-w-4xl mx-auto mb-16">
            {lang === 'hu'
              ? 'A NEPEBE célja egy modern európai kutatási ökoszisztéma létrehozása, amely képes támogatni a fejlett elektromágneses rendszerek következő generációját.'
              : 'NEPEBE aims to establish a modern European research ecosystem capable of supporting the next generation of advanced electromagnetic systems.'}
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="mailto:research@nepebe.eu"
              className="px-10 py-5 rounded-2xl bg-cyan-300 text-black font-bold hover:scale-105 transition-transform"
            >
              {lang === 'hu' ? 'Kapcsolatfelvétel' : 'Contact'}
            </a>

            <a
              href="#technology"
              className="px-10 py-5 rounded-2xl border border-cyan-300/20 hover:bg-cyan-300/10 transition-all"
            >
              {lang === 'hu' ? 'Technológiai Területek' : 'Technology Domains'}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
