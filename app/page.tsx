export default function Home() {
  const styles = {
    main: { backgroundColor: '#F5F2EC', minHeight: '100vh', fontFamily: 'sans-serif', margin: 0 },
    nav: { position: 'fixed' as const, top: 0, width: '100%', display: 'flex', justifyContent: 'space-between', padding: '1.5rem 4rem', backgroundColor: 'rgba(245, 242, 236, 0.9)', borderBottom: '1px solid rgba(184, 154, 90, 0.2)', zIndex: 100 },
    hero: { display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '100vh' },
    heroLeft: { backgroundColor: '#1C2B4A', color: 'white', padding: '10rem 4rem', display: 'flex', flexDirection: 'column' as const, justifyContent: 'center' },
    gold: { color: '#B89A5A', letterSpacing: '0.2em', fontSize: '0.7rem', marginBottom: '1rem' }
  };

  return (
    <main style={styles.main}>
      <nav style={styles.nav}>
        <div style={{fontWeight: 'bold', color: '#1C2B4A'}}>NEPEBE</div>
      </nav>

      <section style={styles.hero}>
        <div style={styles.heroLeft}>
          <div style={styles.gold}>EURÓPAI KUTATÁSI KEZDEMÉNYEZÉS</div>
          <h1 style={{fontSize: '3.5rem', fontWeight: '300', lineHeight: '1.2'}}>
            Az elektromágneses <br />
            <span style={{color: '#D4B87A', fontStyle: 'italic'}}>tudomány</span> jövője.
          </h1>
          <p style={{color: 'rgba(255,255,255,0.6)', marginTop: '2rem', maxWidth: '400px'}}>
            A NEPEBE kutatóintézet a jövő energetikai megoldásait fejleszti.
          </p>
        </div>
        <div style={{backgroundColor: '#F5F2EC'}}></div>
      </section>
    </main>
  );
}