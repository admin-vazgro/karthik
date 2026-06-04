const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

export default function Hero() {
  return (
    <section style={{
      background: `linear-gradient(160deg, oklch(9% .01 95) 0%, var(--lacquer) 60%)`,
      borderBottom: '1px solid var(--rule-warm)',
    }}>
      <div className="ks-section" style={{ paddingTop: 'clamp(72px, 10vw, 130px)', paddingBottom: 'clamp(72px, 10vw, 120px)' }}>

        {/* Eyebrow */}
        <p className="eyebrow" style={{ marginBottom: 28 }}>
          BIM Information Management · Digital Delivery · Belfast, UK
        </p>

        {/* Headline */}
        <h1 style={{ maxWidth: 820, marginBottom: 28 }}>
          Building Systems<br />
          <span style={{ color: 'var(--kinpaku)' }}>That Think.</span>
        </h1>

        <p style={{ fontSize: '1.1rem', lineHeight: 1.75, maxWidth: 540, marginBottom: 44, color: 'var(--text-muted)' }}>
          I implement ISO&nbsp;19650 workflows, build AI-assisted QA tools, and automate the
          repetitive — so infrastructure project teams deliver better, faster.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 72 }}>
          <button className="ks-btn ks-btn-primary" onClick={() => go('work')}>
            Explore Work
            <span style={{ fontSize: '1.1rem', lineHeight: 1 }}>↓</span>
          </button>
          <a
            href="https://linkedin.com/in/karthik-jyothy-5691a51b7"
            target="_blank" rel="noreferrer"
            className="ks-btn ks-btn-ghost"
          >
            LinkedIn ↗
          </a>
        </div>

        {/* Stats */}
        <div className="ks-stat-grid">
          {[
            ['5+',        'Years in BIM'],
            ['6+',        'Major Projects'],
            ['Weeks',     'Manual Effort Saved'],
            ['ISO 19650', 'Standard Applied'],
          ].map(([n, l]) => (
            <div key={l} className="ks-stat">
              <div className="ks-stat-num">{n}</div>
              <div className="ks-stat-lbl">{l}</div>
            </div>
          ))}
        </div>

        {/* Certs */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 28 }}>
          {['BSI BIM Information Practitioner', 'buildingSMART Professional', 'MSc BIM · QUB', "O'Connor Sutton Cronin"].map(t => (
            <span key={t} className="ks-chip">{t}</span>
          ))}
        </div>

      </div>
    </section>
  );
}
