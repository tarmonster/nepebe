'use client';
            NEPEBE
          </h1>

          <div className="flex items-center gap-6">
            <nav className="hidden md:flex gap-8 text-sm text-slate-300">
              <a href="#">{t.vision}</a>
              <a href="#">{t.research}</a>
              <a href="#">{t.progress}</a>
              <a href="#">{t.contact}</a>
            </nav>

            <div className="flex items-center gap-2 border border-cyan-400/20 rounded-full p-1 bg-cyan-400/5">
              <button
                onClick={() => setLang('en')}
                className={`px-3 py-1 rounded-full text-sm transition-all ${
                  lang === 'en'
                    ? 'bg-cyan-400 text-black'
                    : 'text-slate-300'
                }`}
              >
                EN
              </button>

              <button
                onClick={() => setLang('hu')}
                className={`px-3 py-1 rounded-full text-sm transition-all ${
                  lang === 'hu'
                    ? 'bg-cyan-400 text-black'
                    : 'text-slate-300'
                }`}
              >
                HU
              </button>
            </div>
          </div>
        </div>
      </header>

      <section className="relative min-h-screen flex items-center px-6">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 text-cyan-200 text-sm mb-8">
              {t.initiative}
            </div>

            <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-none mb-8">
              NEPEBE
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-2xl mb-10">
              {t.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 rounded-2xl bg-cyan-400 text-black font-semibold hover:scale-105 transition-transform">
                {t.explore}
              </button>

              <button className="px-8 py-4 rounded-2xl border border-cyan-400/30 hover:border-cyan-300 hover:bg-cyan-400/10 transition-all">
                {t.status}
              </button>
            </div>
          </div>

          <div className="relative h-[500px] flex items-center justify-center">
            <div className="absolute w-[420px] h-[420px] rounded-full border border-cyan-400/20 animate-pulse" />
            <div className="absolute w-[320px] h-[320px] rounded-full border border-cyan-300/20" />
            <div className="absolute w-[220px] h-[220px] rounded-full border border-cyan-200/20 animate-ping" />

            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-cyan-300 to-cyan-600 blur-2xl opacity-70" />
          </div>
        </div>
      </section>
    </main>
  );
}