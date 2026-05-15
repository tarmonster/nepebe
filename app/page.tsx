export default function Home() {
  return (
    <main>
      {/* NAVIGÁCIÓ */}
      <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 md:px-16 py-6 bg-[#F5F2EC]/92 backdrop-blur-md border-b border-[#B89A5A]/20">
        <a href="#" className="font-serif font-medium text-xl tracking-[0.15em] text-[#1C2B4A]">
          <span className="text-[#B89A5A]">N</span>EPEBE
        </a>
        <ul className="hidden md:flex gap-10 list-none">
          <li><a href="#kutatas" className="text-[0.75rem] uppercase tracking-[0.15em] text-[#3D3830] hover:text-[#B89A5A] transition-colors">Kutatás</a></li>
          <li><a href="#misszio" className="text-[0.75rem] uppercase tracking-[0.15em] text-[#3D3830] hover:text-[#B89A5A] transition-colors">Küldetés</a></li>
          <li><a href="#idovonal" className="text-[0.75rem] uppercase tracking-[0.15em] text-[#3D3830] hover:text-[#B89A5A] transition-colors">Menetrend</a></li>
          <li><a href="#kapcsolat" className="text-[0.75rem] uppercase tracking-[0.15em] text-[#3D3830] hover:text-[#B89A5A] transition-colors">Kapcsolat</a></li>
        </ul>
        <div className="text-[0.7rem] tracking-[0.15em] uppercase text-[#7A7268] border border-[#B89A5A] px-3 py-1 hover:bg-[#B89A5A] hover:text-white transition-all cursor-pointer">
          HU / EN
        </div>
      </nav>

      {/* HERO SZEKCIÓ */}
      <section className="min-h-screen flex flex-col md:grid md:grid-cols-2 pt-20 md:pt-0">
        {/* Bal oldal - Szöveg */}
        <div className="bg-[#1C2B4A] flex flex-col justify-center px-8 md:px-16 py-20 relative">
          <div className="text-[0.65rem] tracking-[0.3em] uppercase text-[#B89A5A] mb-8 flex items-center gap-4">
            <span className="w-10 h-px bg-[#B89A5A]"></span>
            Európai Kutatási Kezdeményezés
          </div>
          <h1 className="font-serif font-light text-4xl md:text-7xl text-[#FDFCF9] leading-[1.1] mb-8">
            Az elektromágneses<br />
            <em className="italic text-[#D4B87A] font-normal">tudomány</em><br />
            jövője épül.
          </h1>
          <p className="text-[0.9rem] text-[#FDFCF9]/60 max-w-[360px] leading-[1.9] mb-12 tracking-wide">
            A NEPEBE Európa élvonalbeli elektromágneses kutatóintézete — a következő generáció energetikai és rezonancia rendszereit fejlesztjük.
          </p>
          <a href="#kutatas" className="inline-flex items-center gap-4 text-[0.7rem] uppercase tracking-[0.2em] text-[#B89A5A] border border-[#B89A5A]/40 px-8 py-4 hover:bg-[#B89A5A] hover:text-[#1C2B4A] transition-all w-fit">
            Kutatási területek <span>→</span>
          </a>
        </div>

        {/* Jobb oldal - Statisztikák (Mobilaton elrejtve az egyszerűség kedvéért, mint az eredetiben) */}
        <div className="hidden md:flex bg-[#F5F2EC] flex-col justify-center px-16 relative">
          <div className="grid grid-cols-2 gap-0.5 bg-[#B89A5A]/10 border border-[#B89A5A]/15 mb-12">
            <div className="bg-white p-8">
              <div className="font-serif text-4xl text-[#1C2B4A] mb-2">4</div>
              <div className="text-[0.65rem] uppercase tracking-widest text-[#7A7268]">Kutatási terület</div>
            </div>
            <div className="bg-white p-8">
              <div className="font-serif text-4xl text-[#1C2B4A] mb-2">2030+</div>
              <div className="text-[0.65rem] uppercase tracking-widest text-[#7A7268]">Horizont</div>
            </div>
            <div className="bg-white p-8">
              <div className="font-serif text-4xl text-[#1C2B4A] mb-2">EU</div>
              <div className="text-[0.65rem] uppercase tracking-widest text-[#7A7268]">Európai fókusz</div>
            </div>
            <div className="bg-white p-8">
              <div className="font-serif text-4xl text-[#1C2B4A] mb-2">R&D</div>
              <div className="text-[0.65rem] uppercase tracking-widest text-[#7A7268]">Innováció</div>
            </div>
          </div>
        </div>
      </section>
{/* KÜLDETÉS SZEKCIÓ */}
      <section id="misszio" className="bg-[#FDFCF9] px-8 md:px-16 py-28 grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-24 items-center">
        <div>
          <div className="text-[0.65rem] tracking-[0.3em] uppercase text-[#B89A5A] mb-6 flex items-center gap-4">
            <span className="w-[30px] h-px bg-[#B89A5A]"></span>
            Küldetés
          </div>
          <h2 className="font-serif font-light text-4xl md:text-6xl text-[#1A1814] leading-[1.15] mb-8">
            Miért létezik<br />a <em className="italic text-[#B89A5A] font-normal">NEPEBE</em>?
          </h2>
          <p className="text-[#3D3830] text-base leading-[1.9] mb-6">
            Az elektromágneses technológiák az energetika, az orvostudomány és az ipari rendszerek jövőjét formálják. Európának szüksége van egy független, magas szintű kutatóintézetre.
          </p>
          <div className="font-serif text-2xl italic text-[#1C2B4A] border-left-2 border-[#B89A5A] pl-8 my-10 border-l-2">
            „A tudomány nem ismer határokat — de az intézményeknek gyökereket kell ereszteniük."
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { num: "01", title: "Függetlenség", desc: "Európai alapokon, politikailag semleges kutatási keretben." },
            { num: "02", title: "Nyitottság", desc: "Együttműködés egyetemekkel és ipari partnerekkel." },
            { num: "03", title: "Hosszútáv", desc: "2030-as és azon túlmutató kutatási horizont." },
            { num: "04", title: "Innováció", desc: "Kísérleti prototípusoktól az ipari alkalmazásokig." }
          ].map((item) => (
            <div key={item.num} className="p-8 border border-[#B89A5A]/20 hover:border-[#B89A5A] transition-colors group">
              <div className="font-serif text-4xl text-[#B89A5A]/30 mb-4 group-hover:text-[#B89A5A]/60 transition-colors">{item.num}</div>
              <div className="text-[0.75rem] font-medium uppercase tracking-widest text-[#1C2B4A] mb-2">{item.title}</div>
              <div className="text-[0.85rem] text-[#7A7268] leading-[1.7]">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* KUTATÁSI TERÜLETEK */}
      <section id="kutatas" className="bg-[#1C2B4A] px-8 md:px-16 py-28 text-white">
        <div className="text-[0.65rem] tracking-[0.3em] uppercase text-[#D4B87A] mb-6 flex items-center gap-4">
          <span className="w-[30px] h-px bg-[#D4B87A]"></span>
          Kutatási területek
        </div>
        <h2 className="font-serif font-light text-4xl md:text-6xl mb-16">
          Négy <em className="italic text-[#B89A5A] font-normal">pilléren</em><br />nyugvó tudomány
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
          {[
            { title: "Elektromágneses energiaátvitel", desc: "Következő generációs, hatékony energiaátviteli rendszerek kutatása." },
            { title: "Rezonancia rendszerek", desc: "Kísérleti rezonancia alapú struktúrák vizsgálata és fejlesztése." },
            { title: "Intelligens mezőszabályozás", desc: "Adaptív, önszabályozó rendszerek algoritmikus tervezése." },
            { title: "Labor infrastruktúra", desc: "Mérési infrastruktúra tervezése európai szinten." },
            { title: "Szimulációs környezet", desc: "Nagy teljesítményű modellezés komplex jelenségekhez." },
            { title: "Európai együttműködés", desc: "Partnerségek az egész kontinensen." }
          ].map((card, index) => (
            <div key={index} className="bg-[#1C2B4A] p-12 relative group hover:bg-[#2E4270] transition-colors overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-0.5 bg-[#B89A5A] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              <h3 className="font-serif text-2xl mb-4">{card.title}</h3>
              <p className="text-[0.85rem] text-white/55 leading-relaxed">{card.desc}</p>
              <div className="absolute bottom-8 right-8 font-serif text-6xl text-white/5 opacity-10">0{index + 1}</div>
            </div>
          ))}
        </div>
      </section>
{/* IDŐVONAL SZEKCIÓ */}
      <section id="idovonal" className="bg-[#F5F2EC] px-8 md:px-16 py-28">
        <div className="text-[0.65rem] tracking-[0.3em] uppercase text-[#B89A5A] mb-6 flex items-center gap-4">
          <span className="w-[30px] h-px bg-[#B89A5A]"></span>
          Fejlesztési menetrend
        </div>
        <h2 className="font-serif font-light text-4xl md:text-6xl text-[#1A1814] mb-16">
          A <em className="italic text-[#B89A5A] font-normal">jövő</em> lépései
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Vízszintes vonal dekoráció asztali nézethez */}
          <div className="hidden lg:block absolute top-1.5 left-0 right-0 h-px bg-[#B89A5A]/30 z-0"></div>
          
          {[
            { year: "2025", phase: "Alapok & Platform", desc: "Intézeti alapítás, kutatási architektúra kialakítása, digitális platform indítása." },
            { year: "2026", phase: "Szimulációk", desc: "Szimulációs rendszerek kiépítése, első kutatási eredmények publikálása." },
            { year: "2027", phase: "Prototípusok", desc: "Kísérleti prototípusok fejlesztése, laboratóriumi tesztelés megkezdése." },
            { year: "2028+", phase: "Labor & Skálázás", desc: "Teljes labor infrastruktúra és európai kutatói közösség kiépítése." }
          ].map((item, i) => (
            <div key={i} className="relative z-10">
              <div className="w-3 h-3 rounded-full bg-[#F5F2EC] border-2 border-[#B89A5A] mb-8 shadow-[0_0_0_4px_#F5F2EC]"></div>
              <div className="font-serif text-3xl text-[#B89A5A] mb-2">{item.year}</div>
              <div className="text-[0.7rem] font-medium uppercase tracking-widest text-[#1C2B4A] mb-4">{item.phase}</div>
              <p className="text-[0.85rem] text-[#7A7268] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* KAPCSOLAT SZEKCIÓ */}
      <section id="kapcsolat" className="bg-[#EDE8DE] px-8 md:px-16 py-28 grid grid-cols-1 lg:grid-cols-2 gap-24">
        <div>
          <div className="text-[0.65rem] tracking-[0.3em] uppercase text-[#B89A5A] mb-6 flex items-center gap-4">
            <span className="w-[30px] h-px bg-[#B89A5A]"></span>
            Kapcsolat
          </div>
          <h2 className="font-serif font-light text-4xl md:text-6xl text-[#1A1814] mb-8 leading-tight">
            Lépjen <em className="italic text-[#B89A5A] font-normal">velünk</em><br />kapcsolatba
          </h2>
          <div className="w-[60px] h-px bg-[#B89A5A] my-12"></div>
          <div className="space-y-12">
            <h3 className="font-serif text-2xl text-[#1A1814] font-light leading-relaxed">
              Érdekli a kutatási együttműködés, partneri kapcsolat, vagy csatlakozna a NEPEBE kezdeményezéshez?
            </h3>
            <div className="space-y-6">
              <div className="flex gap-6">
                <span className="text-[0.65rem] uppercase tracking-widest text-[#B89A5A] min-w-[80px]">E-mail</span>
                <span className="text-[0.9rem] text-[#3D3830]">research@nepebe.eu</span>
              </div>
              <div className="flex gap-6">
                <span className="text-[0.65rem] uppercase tracking-widest text-[#B89A5A] min-w-[80px]">Fókusz</span>
                <span className="text-[0.9rem] text-[#3D3830]">Európai elektromágneses kutatás</span>
              </div>
            </div>
          </div>
        </div>

        <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col gap-2">
            <label className="text-[0.65rem] uppercase tracking-widest text-[#7A7268]">Név</label>
            <input type="text" placeholder="Teljes neve" className="bg-transparent border-b border-[#B89A5A]/30 py-3 outline-none focus:border-[#B89A5A] transition-colors font-light" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[0.65rem] uppercase tracking-widest text-[#7A7268]">E-mail cím</label>
            <input type="email" placeholder="email@domain.com" className="bg-transparent border-b border-[#B89A5A]/30 py-3 outline-none focus:border-[#B89A5A] transition-colors font-light" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[0.65rem] uppercase tracking-widest text-[#7A7268]">Üzenet</label>
            <textarea placeholder="Miben segíthetünk?" rows={4} className="bg-transparent border-b border-[#B89A5A]/30 py-3 outline-none focus:border-[#B89A5A] transition-colors font-light resize-none"></textarea>
          </div>
          <button className="border border-[#1C2B4A]/30 px-10 py-4 text-[0.7rem] uppercase tracking-[0.2em] text-[#1C2B4A] hover:bg-[#1C2B4A] hover:text-white transition-all w-fit mt-4">
            Üzenet küldése →
          </button>
        </form>
      </section>

      {/* FOOTER MÁR A LAYOUT-BAN VAN, DE HA OTT NINCS, IDE IS TEHETED */}
    </main>
  );
}