'use client';

import type { FormEvent } from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import {
  Activity,
  Atom,
  Cpu,
  Globe,
  Mail,
  Orbit,
  Radio,
  ShieldCheck,
  Sparkles,
  Zap,
} from 'lucide-react';

type Language = 'hu' | 'en';

type InfoCard = {
  icon: LucideIcon;
  title: string;
  text: string;
};

type Metric = {
  value: string;
  label: string;
};

type RoadmapItem = {
  status: string;
  title: string;
  text: string;
};

type Content = {
  nav: {
    technology: string;
    mission: string;
    progress: string;
    contact: string;
  };
  hero: {
    badge: string;
    title: string;
    lead: string;
    text: string;
    primary: string;
    secondary: string;
  };
  intro: {
    first: string;
    second: string;
  };
  focus: {
    eyebrow: string;
    title: string;
    cards: InfoCard[];
  };
  technology: {
    eyebrow: string;
    title: string;
    cards: InfoCard[];
  };
  dashboard: {
    eyebrow: string;
    title: string;
    metrics: Metric[];
    panelTitle: string;
    panelText: string;
    bars: Metric[];
  };
  roadmap: {
    eyebrow: string;
    title: string;
    items: RoadmapItem[];
  };
  mission: {
    eyebrow: string;
    title: string;
    text: string;
    cards: InfoCard[];
  };
  contact: {
    eyebrow: string;
    title: string;
    text: string;
    name: string;
    email: string;
    message: string;
    button: string;
    missing: string;
    opening: string;
  };
};

const contactEmail = 'research@nepebe.eu';

const particles = Array.from({ length: 34 }, (_, index) => ({
  id: index,
  left: (index * 31 + 9) % 100,
  top: (index * 47 + 13) % 100,
  duration: 7 + (index % 9),
}));

const content: Record<Language, Content> = {
  hu: {
    nav: {
      technology: 'Technológia',
      mission: 'Küldetés',
      progress: 'Fejlesztés',
      contact: 'Kapcsolat',
    },
    hero: {
      badge: 'Európai elektromágneses kutatási kezdeményezés',
      title: 'NEPEBE',
      lead: 'Következő generációs elektromágneses kutatási platform.',
      text:
        'A NEPEBE egy jövőorientált deep-tech projekt, amely az elektromágneses rendszerek, rezonancia alapú megoldások és kutatási infrastruktúrák fejlesztését fogja össze.',
      primary: 'Kutatási területek',
      secondary: 'Fejlesztési állapot',
    },
    intro: {
      first:
        'Gyors, áttekinthető és mobilon is rendezett oldal, amely később referenciákkal, dokumentációval és projektfrissítésekkel bővíthető.',
      second:
        'A mostani verzió már egyetlen Next.js projektben él, így innen lehet buildelni, tesztelni és feltölteni az éles tárhelyre.',
    },
    focus: {
      eyebrow: 'Alapok',
      title: 'Mire épül az oldal?',
      cards: [
        {
          icon: ShieldCheck,
          title: 'Hiteles projektbemutató',
          text:
            'Rövid, világos történet arról, mi a NEPEBE célja, milyen területeket vizsgál és miért érdemes figyelni rá.',
        },
        {
          icon: Activity,
          title: 'Látható fejlődés',
          text:
            'Állapotjelzők, ütemterv és mérföldkövek mutatják, hogy a projekt nem statikus bemutatkozó, hanem épülő rendszer.',
        },
        {
          icon: Mail,
          title: 'Egyszerű kapcsolat',
          text:
            'Közvetlen email-útvonal érdeklődőknek, partnereknek és későbbi kutatási együttműködéseknek.',
        },
      ],
    },
    technology: {
      eyebrow: 'Kutatási fókusz',
      title: 'Technológiai területek',
      cards: [
        {
          icon: Atom,
          title: 'Elektromágneses energiaátvitel',
          text:
            'Fejlett energiaátviteli elvek, mezőhatások és új generációs rendszerek kutatása.',
        },
        {
          icon: Orbit,
          title: 'Rezonancia rendszerek',
          text:
            'Kísérleti rezonancia alapú struktúrák, modellkörnyezetek és vezérlési logikák.',
        },
        {
          icon: Radio,
          title: 'Intelligens mezőszabályozás',
          text:
            'Adaptív elektromágneses rendszerek, mérési visszacsatolás és mezővezérlés.',
        },
        {
          icon: Cpu,
          title: 'Kutatási infrastruktúra',
          text:
            'Szimulációs, dokumentációs és későbbi labor-infrastruktúra előkészítése.',
        },
      ],
    },
    dashboard: {
      eyebrow: 'Állapot',
      title: 'Research dashboard',
      metrics: [
        { value: '04', label: 'Aktív kutatási terület' },
        { value: '12+', label: 'Tervezett fejlesztési modul' },
        { value: 'EU', label: 'Európai kutatási fókusz' },
        { value: '24/7', label: 'Folyamatos platformfejlesztés' },
      ],
      panelTitle: 'Következő generációs kutatási platform',
      panelText:
        'A cél egy modern, bővíthető deep-tech felület, amely képes támogatni a hosszú távú elektromágneses fejlesztéseket, a szakmai bemutatást és a partneri kommunikációt.',
      bars: [
        { value: '72%', label: 'Platform infrastruktúra' },
        { value: '84%', label: 'Research UI rendszer' },
        { value: '91%', label: 'Vizuális kutatási platform' },
      ],
    },
    roadmap: {
      eyebrow: 'Ütemterv',
      title: 'Fejlesztési állapot',
      items: [
        {
          status: 'Kész',
          title: 'Koncepció és platform alapok',
          text: 'Az alapoldal, a nyelvváltás és a fő tartalmi struktúra működik.',
        },
        {
          status: 'Folyamatban',
          title: 'Kutatási architektúra',
          text: 'A technológiai fókuszok és a projektlogika finomítása zajlik.',
        },
        {
          status: 'Folyamatban',
          title: 'Vizuális platform',
          text: 'A felület most már olvasható, buildelhető és tovább bővíthető.',
        },
        {
          status: 'Következő',
          title: 'Labor-infrastruktúra tervezés',
          text: 'A későbbi műszaki dokumentáció és mérési környezet előkészítése.',
        },
      ],
    },
    mission: {
      eyebrow: 'Küldetés',
      title: 'Európai technológiai innováció',
      text:
        'A NEPEBE célja egy hosszú távú kutatási és technológiai ökoszisztéma létrehozása, amely összeköti a tudományos kutatást, az energetikai innovációt és az ipari alkalmazásokat.',
      cards: [
        {
          icon: Sparkles,
          title: '2030+ horizont',
          text: 'Hosszabb távú kutatási gondolkodás, fokozatos építkezéssel.',
        },
        {
          icon: Globe,
          title: 'Európai együttműködés',
          text: 'Nyitott irány kutatási, technológiai és partneri kapcsolatokhoz.',
        },
        {
          icon: Zap,
          title: 'R&D fókusz',
          text: 'Fejlett kutatás, prototípus-gondolkodás és mérhető fejlődés.',
        },
      ],
    },
    contact: {
      eyebrow: 'Kapcsolat',
      title: 'Kezdhetjük a következő lépést.',
      text:
        'Írj röviden a projektről, az együttműködési ötletről vagy arról, milyen irányba fejlesszük tovább az oldalt.',
      name: 'Név',
      email: 'Email',
      message: 'Üzenet',
      button: 'Email előkészítése',
      missing: 'Tölts ki minden mezőt az email előkészítéséhez.',
      opening: 'Megnyitom az email küldő programot.',
    },
  },
  en: {
    nav: {
      technology: 'Technology',
      mission: 'Mission',
      progress: 'Progress',
      contact: 'Contact',
    },
    hero: {
      badge: 'European electromagnetic research initiative',
      title: 'NEPEBE',
      lead: 'Next-generation electromagnetic research platform.',
      text:
        'NEPEBE is a future-oriented deep-tech project connecting electromagnetic systems, resonance-based concepts and research infrastructure development.',
      primary: 'Research areas',
      secondary: 'Development status',
    },
    intro: {
      first:
        'A fast, clear and mobile-ready site that can later grow with references, documentation and project updates.',
      second:
        'The current version now lives in one Next.js project, so it can be built, tested and uploaded from here.',
    },
    focus: {
      eyebrow: 'Foundation',
      title: 'What the site is built for',
      cards: [
        {
          icon: ShieldCheck,
          title: 'Credible project story',
          text:
            'A clear explanation of what NEPEBE is, what it explores and why it is worth following.',
        },
        {
          icon: Activity,
          title: 'Visible progress',
          text:
            'Status blocks, milestones and roadmap sections show that the project is an evolving platform.',
        },
        {
          icon: Mail,
          title: 'Simple contact path',
          text:
            'A direct email route for inquiries, partners and future research collaboration.',
        },
      ],
    },
    technology: {
      eyebrow: 'Research focus',
      title: 'Technology domains',
      cards: [
        {
          icon: Atom,
          title: 'Electromagnetic energy transfer',
          text:
            'Advanced transmission principles, field effects and next-generation system research.',
        },
        {
          icon: Orbit,
          title: 'Resonance systems',
          text:
            'Experimental resonance structures, modeling environments and control logic.',
        },
        {
          icon: Radio,
          title: 'Intelligent field control',
          text:
            'Adaptive electromagnetic systems, measurement feedback and field management.',
        },
        {
          icon: Cpu,
          title: 'Research infrastructure',
          text:
            'Simulation, documentation and future laboratory infrastructure preparation.',
        },
      ],
    },
    dashboard: {
      eyebrow: 'Status',
      title: 'Research dashboard',
      metrics: [
        { value: '04', label: 'Active research domains' },
        { value: '12+', label: 'Planned development modules' },
        { value: 'EU', label: 'European research focus' },
        { value: '24/7', label: 'Continuous platform development' },
      ],
      panelTitle: 'Next-generation research platform',
      panelText:
        'The goal is a modern, extensible deep-tech surface that supports long-term electromagnetic development, professional presentation and partner communication.',
      bars: [
        { value: '72%', label: 'Platform infrastructure' },
        { value: '84%', label: 'Research UI system' },
        { value: '91%', label: 'Visual research platform' },
      ],
    },
    roadmap: {
      eyebrow: 'Roadmap',
      title: 'Development status',
      items: [
        {
          status: 'Done',
          title: 'Concept and platform foundation',
          text: 'The base page, language switcher and main content structure are in place.',
        },
        {
          status: 'In progress',
          title: 'Research architecture',
          text: 'Technology focus areas and project logic are being refined.',
        },
        {
          status: 'In progress',
          title: 'Visual platform',
          text: 'The interface is now readable, buildable and ready to extend.',
        },
        {
          status: 'Next',
          title: 'Laboratory infrastructure planning',
          text: 'Preparing later technical documentation and measurement environments.',
        },
      ],
    },
    mission: {
      eyebrow: 'Mission',
      title: 'European technological innovation',
      text:
        'NEPEBE aims to build a long-term research and technology ecosystem connecting scientific research, energy innovation and industrial applications.',
      cards: [
        {
          icon: Sparkles,
          title: '2030+ horizon',
          text: 'Longer-term research thinking with gradual platform development.',
        },
        {
          icon: Globe,
          title: 'European collaboration',
          text: 'An open path for research, technology and partner relationships.',
        },
        {
          icon: Zap,
          title: 'R&D focus',
          text: 'Advanced research, prototype thinking and measurable progress.',
        },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Let’s start the next step.',
      text:
        'Write a short note about the project, a collaboration idea or the direction you want the site to develop next.',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      button: 'Prepare email',
      missing: 'Please fill every field before preparing the email.',
      opening: 'Opening your email app.',
    },
  },
};

function SectionTitle({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-12 max-w-3xl">
      <p className="mb-3 text-sm font-bold uppercase tracking-wide text-amber-300">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-black tracking-tight text-white md:text-5xl">
        {title}
      </h2>
    </div>
  );
}

function Card({ item }: { item: InfoCard }) {
  const Icon = item.icon;

  return (
    <motion.article
      whileHover={{ y: -4 }}
      className="rounded-lg border border-cyan-300/15 bg-white/[0.055] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.24)] backdrop-blur"
    >
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg border border-cyan-300/20 bg-cyan-300/10">
        <Icon className="h-6 w-6 text-cyan-300" />
      </div>
      <h3 className="mb-3 text-xl font-bold text-white">{item.title}</h3>
      <p className="leading-relaxed text-slate-300">{item.text}</p>
    </motion.article>
  );
}

export default function NepebeResearchInterface() {
  const [lang, setLang] = useState<Language>('hu');
  const [formStatus, setFormStatus] = useState('');
  const t = content[lang];

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const name = String(form.get('name') ?? '').trim();
    const email = String(form.get('email') ?? '').trim();
    const message = String(form.get('message') ?? '').trim();

    if (!name || !email || !message) {
      setFormStatus(t.contact.missing);
      return;
    }

    const subject = encodeURIComponent(`NEPEBE kapcsolat - ${name}`);
    const body = encodeURIComponent(`${message}\n\n${name}\n${email}`);
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
    setFormStatus(t.contact.opening);
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050816] text-white">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(125,211,252,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(125,211,252,0.055)_1px,transparent_1px)] bg-[size:88px_88px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_24%,rgba(34,211,238,0.2),transparent_34%),linear-gradient(135deg,rgba(251,191,36,0.08),transparent_34%),linear-gradient(315deg,rgba(244,114,182,0.07),transparent_28%)]" />

        {particles.map((particle) => (
          <motion.span
            key={particle.id}
            aria-hidden="true"
            className="absolute h-1 w-1 rounded-full bg-cyan-200"
            animate={{ opacity: [0.15, 0.9, 0.15], y: [-8, -44, -8] }}
            transition={{
              duration: particle.duration,
              ease: 'linear',
              repeat: Infinity,
            }}
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
          />
        ))}
      </div>

      <header className="fixed inset-x-0 top-0 z-50 border-b border-cyan-300/15 bg-[#050816]/88 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 md:px-8">
          <a href="#top" className="flex min-w-0 items-center gap-3 font-black">
            <span className="h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_24px_rgba(34,211,238,0.9)]" />
            <span className="tracking-[0.18em] text-cyan-300 sm:tracking-[0.34em]">
              NEPEBE
            </span>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-medium text-slate-300 lg:flex">
            <a className="transition hover:text-cyan-300" href="#technology">
              {t.nav.technology}
            </a>
            <a className="transition hover:text-cyan-300" href="#mission">
              {t.nav.mission}
            </a>
            <a className="transition hover:text-cyan-300" href="#progress">
              {t.nav.progress}
            </a>
            <a className="transition hover:text-cyan-300" href="#contact">
              {t.nav.contact}
            </a>
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            {(['hu', 'en'] as const).map((item) => {
              const isActive = lang === item;

              return (
                <button
                  key={item}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setLang(item)}
                  className={
                    isActive
                      ? 'inline-flex rounded-lg bg-cyan-300 px-2 py-2 text-xs font-bold text-black sm:px-3 sm:text-sm'
                      : 'hidden rounded-lg border border-cyan-300/20 px-2 py-2 text-xs font-bold text-slate-200 transition hover:border-cyan-300/60 sm:inline-flex sm:px-3 sm:text-sm'
                  }
                >
                  {item.toUpperCase()}
                </button>
              );
            })}
          </div>
        </div>
      </header>

      <section
        id="top"
        className="relative flex min-h-screen items-center px-5 pb-16 pt-32 md:px-8 md:pt-40"
      >
        <div className="mx-auto grid w-full min-w-0 max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="w-full max-w-[20rem] min-w-0 sm:max-w-[36rem] lg:w-auto lg:max-w-none">
            <div className="mb-8 flex w-full max-w-[20rem] items-center gap-3 rounded-lg border border-cyan-300/25 bg-cyan-300/10 px-4 py-3 text-sm font-semibold text-cyan-100 sm:inline-flex sm:w-auto sm:max-w-full">
              <Globe className="h-4 w-4 shrink-0" />
              <span className="min-w-0 break-words">{t.hero.badge}</span>
            </div>

            <h1 className="text-5xl font-black tracking-tight text-white sm:text-6xl md:text-8xl">
              NEPE<span className="text-cyan-300">BE</span>
            </h1>
            <p className="mt-8 w-full max-w-[20rem] text-3xl font-light leading-tight text-slate-100 sm:max-w-[36rem] md:max-w-3xl md:text-5xl">
              {t.hero.lead}
            </p>
            <p className="mt-6 w-full max-w-[20rem] break-words text-lg leading-relaxed text-slate-300 sm:max-w-[36rem] md:max-w-2xl">
              {t.hero.text}
            </p>

            <div className="mt-10 flex w-full max-w-[20rem] flex-col gap-3 sm:max-w-[36rem] sm:flex-row md:max-w-none">
              <a
                href="#technology"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-cyan-300 px-6 py-4 font-bold text-black transition hover:bg-cyan-200 sm:w-auto"
              >
                <Zap className="h-5 w-5" />
                {t.hero.primary}
              </a>
              <a
                href="#progress"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-cyan-300/25 px-6 py-4 font-bold text-white transition hover:bg-cyan-300/10 sm:w-auto"
              >
                <Activity className="h-5 w-5" />
                {t.hero.secondary}
              </a>
            </div>
          </div>

          <div className="hidden rounded-lg border border-cyan-300/15 bg-slate-950/60 p-5 shadow-[0_28px_90px_rgba(0,0,0,0.35)] backdrop-blur lg:block">
            <div className="grid gap-3">
              <div className="rounded-lg border border-cyan-300/15 bg-cyan-300/10 p-5">
                <div className="mb-4 flex items-center justify-between text-sm text-cyan-100">
                  <span>NEPEBE SYSTEM</span>
                  <span>LIVE</span>
                </div>
                <div className="h-2 rounded bg-cyan-300/70" />
                <div className="mt-4 grid grid-cols-3 gap-3">
                  <div className="h-20 rounded-lg bg-cyan-300/20" />
                  <div className="h-20 rounded-lg bg-amber-300/20" />
                  <div className="h-20 rounded-lg bg-rose-300/20" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {t.dashboard.metrics.slice(0, 4).map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-lg border border-white/10 bg-white/[0.045] p-5"
                  >
                    <div className="text-3xl font-black text-cyan-300">
                      {metric.value}
                    </div>
                    <div className="mt-2 text-sm leading-snug text-slate-300">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-cyan-300/10 bg-slate-950/70 px-5 py-8 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 text-slate-200 md:grid-cols-2">
          <p>{t.intro.first}</p>
          <p>{t.intro.second}</p>
        </div>
      </section>

      <section className="px-5 py-24 md:px-8" id="focus">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow={t.focus.eyebrow} title={t.focus.title} />
          <div className="grid gap-5 md:grid-cols-3">
            {t.focus.cards.map((card) => (
              <Card key={card.title} item={card} />
            ))}
          </div>
        </div>
      </section>

      <section
        className="border-t border-cyan-300/10 px-5 py-24 md:px-8"
        id="technology"
      >
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow={t.technology.eyebrow}
            title={t.technology.title}
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {t.technology.cards.map((card) => (
              <Card key={card.title} item={card} />
            ))}
          </div>
        </div>
      </section>

      <section
        className="border-t border-cyan-300/10 px-5 py-24 md:px-8"
        id="progress"
      >
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow={t.dashboard.eyebrow}
            title={t.dashboard.title}
          />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {t.dashboard.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-lg border border-cyan-300/15 bg-white/[0.055] p-6"
              >
                <div className="text-4xl font-black text-cyan-300">
                  {metric.value}
                </div>
                <div className="mt-4 leading-relaxed text-slate-300">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-8 rounded-lg border border-cyan-300/15 bg-white/[0.055] p-6 backdrop-blur md:grid-cols-[0.95fr_1.05fr] md:p-8">
            <div>
              <div className="mb-5 inline-flex items-center gap-3 rounded-lg border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-100">
                <span className="h-2 w-2 rounded-full bg-cyan-300" />
                LIVE RESEARCH SYSTEM
              </div>
              <h3 className="text-3xl font-black text-white">
                {t.dashboard.panelTitle}
              </h3>
              <p className="mt-5 leading-relaxed text-slate-300">
                {t.dashboard.panelText}
              </p>
            </div>

            <div className="grid content-center gap-6">
              {t.dashboard.bars.map((bar) => (
                <div key={bar.label}>
                  <div className="mb-2 flex justify-between gap-4 text-sm font-semibold text-slate-300">
                    <span>{bar.label}</span>
                    <span>{bar.value}</span>
                  </div>
                  <div className="h-3 overflow-hidden rounded bg-white/10">
                    <div
                      className="h-full rounded bg-cyan-300"
                      style={{ width: bar.value }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-cyan-300/10 px-5 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow={t.roadmap.eyebrow} title={t.roadmap.title} />
          <div className="grid gap-4">
            {t.roadmap.items.map((item) => (
              <article
                key={item.title}
                className="grid gap-4 rounded-lg border border-cyan-300/15 bg-white/[0.045] p-5 md:grid-cols-[160px_1fr]"
              >
                <div className="text-sm font-black uppercase tracking-wide text-amber-300">
                  {item.status}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="mt-2 leading-relaxed text-slate-300">
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="border-t border-cyan-300/10 px-5 py-24 md:px-8"
        id="mission"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <SectionTitle
                eyebrow={t.mission.eyebrow}
                title={t.mission.title}
              />
              <p className="max-w-2xl text-xl leading-relaxed text-slate-300">
                {t.mission.text}
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-1">
              {t.mission.cards.map((card) => (
                <Card key={card.title} item={card} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="border-t border-cyan-300/10 px-5 py-24 md:px-8"
        id="contact"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionTitle
              eyebrow={t.contact.eyebrow}
              title={t.contact.title}
            />
            <p className="max-w-2xl text-lg leading-relaxed text-slate-300">
              {t.contact.text}
            </p>
            <a
              href={`mailto:${contactEmail}`}
              className="mt-8 inline-flex items-center gap-2 text-lg font-bold text-cyan-300"
            >
              <Mail className="h-5 w-5" />
              {contactEmail}
            </a>
          </div>

          <form
            onSubmit={handleSubmit}
            className="grid gap-5 rounded-lg border border-cyan-300/15 bg-white/[0.055] p-6 backdrop-blur md:p-8"
          >
            <label className="grid gap-2 font-bold text-slate-100">
              {t.contact.name}
              <input
                name="name"
                type="text"
                autoComplete="name"
                className="rounded-lg border border-cyan-300/15 bg-slate-950/70 px-4 py-3 font-normal text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300"
              />
            </label>
            <label className="grid gap-2 font-bold text-slate-100">
              {t.contact.email}
              <input
                name="email"
                type="email"
                autoComplete="email"
                className="rounded-lg border border-cyan-300/15 bg-slate-950/70 px-4 py-3 font-normal text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300"
              />
            </label>
            <label className="grid gap-2 font-bold text-slate-100">
              {t.contact.message}
              <textarea
                name="message"
                rows={5}
                className="resize-y rounded-lg border border-cyan-300/15 bg-slate-950/70 px-4 py-3 font-normal text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300"
              />
            </label>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-300 px-6 py-4 font-black text-black transition hover:bg-cyan-200"
            >
              <Mail className="h-5 w-5" />
              {t.contact.button}
            </button>
            <p className="min-h-6 text-sm font-semibold text-amber-200">
              {formStatus}
            </p>
          </form>
        </div>
      </section>

      <footer className="border-t border-cyan-300/10 px-5 py-8 text-sm text-slate-400 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <span>NEPEBE</span>
          <span>nepebe.eu</span>
        </div>
      </footer>
    </main>
  );
}
