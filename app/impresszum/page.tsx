import Link from 'next/link';

export const metadata = {
  title: 'Impresszum | NEPEBE',
  description: 'NEPEBE impresszum és jogi információk',
};

export default function Impresszum() {
  return (
    <div style={{ background: '#F5F2EC', minHeight: '100vh' }}>

      {/* NAV */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '1.5rem 4rem',
        background: 'rgba(245,242,236,0.95)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(184,154,90,0.2)',
      }}>
        <Link href="/" style={{
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontWeight: 500, fontSize: '1.5rem', letterSpacing: '0.15em',
          color: '#1C2B4A', textDecoration: 'none',
        }}>
          <span style={{ color: '#B89A5A' }}>N</span>EPEBE
        </Link>
        <Link href="/" style={{
          fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase',
          color: '#B89A5A', textDecoration: 'none',
        }}>
          ← Vissza a főoldalra
        </Link>
      </nav>

      {/* CONTENT */}
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '10rem 2rem 6rem' }}>

        <div style={{ marginBottom: '3rem' }}>
          <div style={{
            fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase',
            color: '#B89A5A', display: 'flex', alignItems: 'center', gap: '1rem',
            marginBottom: '1.5rem',
          }}>
            <span style={{ display: 'inline-block', width: '30px', height: '1px', background: '#B89A5A' }}></span>
            Jogi dokumentum
          </div>
          <h1 style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: '3rem', fontWeight: 300, color: '#1C2B4A',
            lineHeight: 1.15, marginBottom: '1rem',
          }}>
            <em style={{ fontStyle: 'italic', color: '#B89A5A' }}>Impresszum</em>
          </h1>
          <p style={{ fontSize: '0.85rem', color: '#7A7268', letterSpacing: '0.05em' }}>
            Utolsó módosítás: 2025. január 1.
          </p>
          <div style={{ width: '60px', height: '1px', background: '#B89A5A', margin: '2rem 0' }}></div>
        </div>

        {[
          {
            num: '01', title: 'Üzemeltető adatai',
            content: (
              <div style={{ fontSize: '0.95rem', color: '#3D3830', lineHeight: 1.9 }}>
                <p><strong>Szervezet neve:</strong> NEPEBE – Európai Elektromágneses Kutatási Intézet</p>
                <p><strong>Alapító:</strong> Nemes Péter Bence</p>
                <p><strong>Weboldal:</strong> https://nepebe.eu</p>
                <p><strong>E-mail:</strong> research@nepebe.eu</p>
              </div>
            )
          },
          {
            num: '02', title: 'Adatvédelmi tisztviselő (DPO)',
            content: (
              <div style={{ fontSize: '0.95rem', color: '#3D3830', lineHeight: 1.9 }}>
                <p><strong>Név:</strong> Nemes Péter Bence</p>
                <p><strong>E-mail:</strong> legnemesebb@hotmail.com</p>
              </div>
            )
          },
          {
            num: '03', title: 'Tárhelyszolgáltató',
            content: (
              <div style={{ fontSize: '0.95rem', color: '#3D3830', lineHeight: 1.9 }}>
                <p><strong>Vercel Inc.</strong></p>
                <p>340 Pine Street, Suite 701</p>
                <p>San Francisco, CA 94104, USA</p>
                <p>https://vercel.com</p>
              </div>
            )
          },
          {
            num: '04', title: 'Szerzői jogok',
            content: (
              <p style={{ fontSize: '0.95rem', color: '#3D3830', lineHeight: 1.9 }}>
                A nepebe.eu weboldalon található tartalmak — szövegek, grafikai elemek, logó, arculati elemek — a NEPEBE szellemi tulajdonát képezik. Azok engedély nélküli felhasználása, másolása vagy terjesztése tilos.
              </p>
            )
          },
          {
            num: '05', title: 'Felelősség korlátozása',
            content: (
              <p style={{ fontSize: '0.95rem', color: '#3D3830', lineHeight: 1.9 }}>
                A NEPEBE a weboldal tartalmát a lehető legnagyobb gondossággal készíti, azonban nem vállal felelősséget az esetleges hibákért, hiányosságokért vagy az információk időszerűségéért. A külső hivatkozások (linkek) tartalmáért a NEPEBE nem felel.
              </p>
            )
          },
          {
            num: '06', title: 'Alkalmazandó jog',
            content: (
              <p style={{ fontSize: '0.95rem', color: '#3D3830', lineHeight: 1.9 }}>
                Jelen weboldal működtetésére a magyar jog, különösen az elektronikus kereskedelemről szóló 2001. évi CVIII. törvény és az információs önrendelkezési jogról szóló 2011. évi CXII. törvény rendelkezései az irányadók.
              </p>
            )
          },
          {
            num: '07', title: 'Vitarendezés',
            content: (
              <p style={{ fontSize: '0.95rem', color: '#3D3830', lineHeight: 1.9 }}>
                Az Európai Bizottság online vitarendezési platformja elérhető:{' '}
                <a href="https://ec.europa.eu/consumers/odr" style={{ color: '#B89A5A' }}>
                  https://ec.europa.eu/consumers/odr
                </a>
              </p>
            )
          },
        ].map((section) => (
          <div key={section.num} style={{ marginBottom: '3rem', paddingBottom: '3rem', borderBottom: '1px solid rgba(184,154,90,0.15)' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '1.5rem', marginBottom: '1.5rem' }}>
              <span style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: '2rem', fontWeight: 300, color: 'rgba(184,154,90,0.3)',
              }}>{section.num}</span>
              <h2 style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: '1.4rem', fontWeight: 400, color: '#1C2B4A',
              }}>{section.title}</h2>
            </div>
            {section.content}
          </div>
        ))}
      </div>

      {/* FOOTER */}
      <footer style={{
        background: '#1A1814', padding: '2rem 4rem',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div style={{ fontFamily: "Georgia,'Times New Roman',serif", fontSize: '1.2rem', letterSpacing: '0.15em', color: '#FDFCF9' }}>
          <span style={{ color: '#B89A5A' }}>N</span>EPEBE
        </div>
        <div style={{ fontSize: '0.7rem', color: 'rgba(253,252,249,0.35)' }}>
          © 2025 NEPEBE — Európai Elektromágneses Kutatási Intézet
        </div>
      </footer>
    </div>
  );
}
