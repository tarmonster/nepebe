export default function Home() {
  return (
    <main style={{ backgroundColor: '#F5F2EC', minHeight: '100vh', color: '#1A1814', fontFamily: 'sans-serif' }}>
      {/* NAVIGÁCIÓ */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '1.5rem 4rem', backgroundColor: 'rgba(245, 242, 236, 0.9)',
        backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(184, 154, 90, 0.2)'
      }}>
        <div style={{ fontWeight: '500', fontSize: '1.2rem', letterSpacing: '0.15em', color: '#1C2B4A' }}>
          <span style={{ color: '#B89A5A' }}>N</span>EPEBE
        </div>
        <div style={{ display: 'flex', gap: '2.5rem', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
          <a href="#kutatas" style={{ textDecoration: 'none', color: '#3D3830' }}>Kutatás</a>
          <a href="#misszio" style={{ textDecoration: 'none', color: '#3D3830' }}>Küldetés</a>
          <a href="#kapcsolat" style={{ textDecoration: 'none', color: '#3D3830' }}>Kapcsolat</a>
        </div>
      </nav>

      {/* HERO SZEKCIÓ */}
      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '100vh' }}>
        <div style={{ backgroundColor: '#1C2B4A', color: 'white', padding: '8rem 4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#B89A5A', marginBottom: '2rem' }}>
            Európai Kutatási Kezdeményezés
          </div>
          <h1 style={{ fontSize: '4rem', lineHeight: '1.1', marginBottom: '2rem', fontWeight: '300' }}>
            Az elektromágneses <br />
            <span style={{ fontStyle: 'italic', color: '#D4B87A' }}>tudomány</span> <br />
            jövője épül.
          </h1>
          <p style={{ fontSize: '0.9rem', color: 'rgba(253, 252, 249, 0.6)', maxWidth: '360px', lineHeight: '1.9', marginBottom: '3rem' }}>
            A NEPEBE Európa élvonalbeli elektromágneses kutatóintézete — a következő generáció energetikai és rezonancia rendszereit fejlesztjük.
          </p>
          <a href="#kutatas" style={{
            display: 'inline-block', border: '1px solid rgba(184, 154, 90, 0.4)',
            padding: '1rem 2rem', color: '#B89A5A', textDecoration: 'none',
            fontSize: '0.7rem', letterSpacing: '0.2em', width: 'fit-content'
          }}>
            KUTATÁSI TERÜLETEK →
          </a>
        </div>
        <div style={{ backgroundColor: '#F5F2EC', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* Itt hagyhatod üresen vagy tehetsz be egy képet */}
            <div style={{ border: '1px solid rgba(184, 154, 90, 0.2)', padding: '4rem', textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', color: '#1C2B4A' }}>2030+</div>
                <div style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#7A7268' }}>Horizont</div>
            </div>
        </div>
      </section>
    </main>
  );
}