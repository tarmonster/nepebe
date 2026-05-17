import Link from 'next/link';

export const metadata = {
  title: 'Adatkezelési Tájékoztató | NEPEBE',
  description: 'NEPEBE adatkezelési tájékoztató és GDPR megfelelés',
};

export default function Adatvedelem() {
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
            Adatkezelési <em style={{ fontStyle: 'italic', color: '#B89A5A' }}>Tájékoztató</em>
          </h1>
          <p style={{ fontSize: '0.85rem', color: '#7A7268', letterSpacing: '0.05em' }}>
            Hatályos: 2025. január 1-től · Utolsó módosítás: 2025. január 1.
          </p>
          <div style={{ width: '60px', height: '1px', background: '#B89A5A', margin: '2rem 0' }}></div>
        </div>

        {[
          {
            num: '01', title: 'Az adatkezelő adatai',
            content: (
              <div style={{ fontSize: '0.95rem', color: '#3D3830', lineHeight: 1.9 }}>
                <p><strong>Név:</strong> NEPEBE – Európai Elektromágneses Kutatási Intézet</p>
                <p><strong>Weboldal:</strong> https://nepebe.eu</p>
                <p><strong>E-mail:</strong> research@nepebe.eu</p>
                <p><strong>Adatvédelmi tisztviselő (DPO):</strong> Nemes Péter Bence</p>
                <p><strong>DPO e-mail:</strong> legnemesebb@hotmail.com</p>
              </div>
            )
          },
          {
            num: '02', title: 'Az adatkezelés jogalapja',
            content: (
              <div style={{ fontSize: '0.95rem', color: '#3D3830', lineHeight: 1.9 }}>
                <p style={{ marginBottom: '1rem' }}>Az adatkezelés az Európai Parlament és a Tanács (EU) 2016/679 rendelete (GDPR), valamint az információs önrendelkezési jogról és az információszabadságról szóló 2011. évi CXII. törvény (Infotv.) alapján történik.</p>
                <ul style={{ paddingLeft: '1.5rem', listStyle: 'disc' }}>
                  <li><strong>Hozzájárulás</strong> (GDPR 6. cikk (1) bek. a) pont) — kapcsolatfelvételi űrlap, cookie-k</li>
                  <li><strong>Jogos érdek</strong> (GDPR 6. cikk (1) bek. f) pont) — weboldal biztonságos működtetése</li>
                  <li><strong>Jogi kötelezettség teljesítése</strong> (GDPR 6. cikk (1) bek. c) pont) — jogszabályi előírások</li>
                </ul>
              </div>
            )
          },
          {
            num: '03', title: 'A kezelt adatok köre és célja',
            content: (
              <div style={{ fontSize: '0.95rem', color: '#3D3830', lineHeight: 1.9 }}>
                <p style={{ fontWeight: 500, marginBottom: '0.8rem', color: '#1C2B4A' }}>Kapcsolatfelvételi űrlap</p>
                <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '2rem' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid rgba(184,154,90,0.3)' }}>
                      <th style={{ textAlign: 'left', padding: '0.5rem 0', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#B89A5A' }}>Adat</th>
                      <th style={{ textAlign: 'left', padding: '0.5rem 0', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#B89A5A' }}>Cél</th>
                      <th style={{ textAlign: 'left', padding: '0.5rem 0', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#B89A5A' }}>Megőrzési idő</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Név', 'Azonosítás, megszólítás', '2 év'],
                      ['Szervezet / Intézmény', 'Kapcsolat kontextusa', '2 év'],
                      ['E-mail cím', 'Válaszadás, kapcsolattartás', '2 év'],
                      ['Üzenet tartalma', 'Megkeresés feldolgozása', '2 év'],
                    ].map(([a, b, c]) => (
                      <tr key={a} style={{ borderBottom: '1px solid rgba(184,154,90,0.1)' }}>
                        <td style={{ padding: '0.6rem 0' }}>{a}</td>
                        <td style={{ padding: '0.6rem 0', color: '#7A7268' }}>{b}</td>
                        <td style={{ padding: '0.6rem 0', color: '#7A7268' }}>{c}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p style={{ fontWeight: 500, marginBottom: '0.8rem', color: '#1C2B4A' }}>Technikai adatok</p>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid rgba(184,154,90,0.3)' }}>
                      <th style={{ textAlign: 'left', padding: '0.5rem 0', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#B89A5A' }}>Adat</th>
                      <th style={{ textAlign: 'left', padding: '0.5rem 0', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#B89A5A' }}>Cél</th>
                      <th style={{ textAlign: 'left', padding: '0.5rem 0', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#B89A5A' }}>Megőrzési idő</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['IP-cím', 'Biztonság, hibaelhárítás', '30 nap'],
                      ['Böngésző típusa', 'Kompatibilitás', '30 nap'],
                      ['Látogatás időpontja', 'Statisztika', '30 nap'],
                    ].map(([a, b, c]) => (
                      <tr key={a} style={{ borderBottom: '1px solid rgba(184,154,90,0.1)' }}>
                        <td style={{ padding: '0.6rem 0' }}>{a}</td>
                        <td style={{ padding: '0.6rem 0', color: '#7A7268' }}>{b}</td>
                        <td style={{ padding: '0.6rem 0', color: '#7A7268' }}>{c}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )
          },
          {
            num: '04', title: 'Adatfeldolgozók',
            content: (
              <div style={{ fontSize: '0.95rem', color: '#3D3830', lineHeight: 1.9 }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid rgba(184,154,90,0.3)' }}>
                      <th style={{ textAlign: 'left', padding: '0.5rem 0', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#B89A5A' }}>Adatfeldolgozó</th>
                      <th style={{ textAlign: 'left', padding: '0.5rem 0', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#B89A5A' }}>Tevékenység</th>
                      <th style={{ textAlign: 'left', padding: '0.5rem 0', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#B89A5A' }}>Székhely</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Vercel Inc.', 'Webhosting', 'USA (EU–US Data Privacy Framework)'],
                      ['Formspree Inc.', 'Űrlapkezelés', 'USA (EU–US Data Privacy Framework)'],
                    ].map(([a, b, c]) => (
                      <tr key={a} style={{ borderBottom: '1px solid rgba(184,154,90,0.1)' }}>
                        <td style={{ padding: '0.6rem 0' }}>{a}</td>
                        <td style={{ padding: '0.6rem 0', color: '#7A7268' }}>{b}</td>
                        <td style={{ padding: '0.6rem 0', color: '#7A7268' }}>{c}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )
          },
          {
            num: '05', title: 'Az érintettek jogai',
            content: (
              <ul style={{ fontSize: '0.95rem', color: '#3D3830', lineHeight: 1.9, paddingLeft: '1.5rem', listStyle: 'disc' }}>
                <li><strong>Hozzáférési jog</strong> — tájékoztatást kérhet a kezelt adatairól</li>
                <li><strong>Helyesbítési jog</strong> — kérheti pontatlan adatai javítását</li>
                <li><strong>Törlési jog</strong> — kérheti adatai törlését</li>
                <li><strong>Adatkezelés korlátozásához való jog</strong> — kérheti az adatkezelés korlátozását</li>
                <li><strong>Adathordozhatósághoz való jog</strong> — kérheti adatai géppel olvasható formában való kiadását</li>
                <li><strong>Tiltakozáshoz való jog</strong> — tiltakozhat az adatkezelés ellen</li>
              </ul>
            )
          },
          {
            num: '06', title: 'Jogorvoslati lehetőségek',
            content: (
              <div style={{ fontSize: '0.95rem', color: '#3D3830', lineHeight: 1.9 }}>
                <p style={{ marginBottom: '1rem' }}>Amennyiben úgy véli, hogy adatai kezelése megsérti a GDPR rendelkezéseit, panaszt tehet a Nemzeti Adatvédelmi és Információszabadság Hatóságnál (NAIH):</p>
                <div style={{ borderLeft: '2px solid #B89A5A', paddingLeft: '1.5rem' }}>
                  <p><strong>NAIH</strong></p>
                  <p>Cím: 1055 Budapest, Falk Miksa utca 9–11.</p>
                  <p>Telefon: +36 1 391 1400</p>
                  <p>E-mail: ugyfelszolgalat@naih.hu</p>
                  <p>Web: https://naih.hu</p>
                </div>
              </div>
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

        <p style={{ fontSize: '0.8rem', color: '#7A7268', fontStyle: 'italic', marginTop: '2rem' }}>
          Ez a dokumentum tájékoztató jellegű. Jogi érvényességéhez ügyvédi felülvizsgálat ajánlott.
        </p>
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
