export default function Home() {
  return (
    <main>
      <nav>
        <div style={{fontWeight: 'bold', fontSize: '1.2rem'}}>NEPEBE</div>
        <div style={{display: 'flex', gap: '2rem', fontSize: '0.8rem', textTransform: 'uppercase'}}>
          <a href="#kutatas">Kutatás</a>
          <a href="#misszio">Küldetés</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-left">
          <p style={{color: '#B89A5A', letterSpacing: '0.2em'}}>EURÓPAI KUTATÁSI KEZDEMÉNYEZÉS</p>
          <h1 style={{fontSize: '4rem', margin: '2rem 0'}}>Az elektromágneses <br/><span className="gold-text italic">tudomány</span> jövője.</h1>
          <a href="#kutatas" className="btn-gold">KUTATÁSI TERÜLETEK →</a>
        </div>
        <div style={{background: '#F5F2EC'}}></div>
      </section>
    </main>
  )
}