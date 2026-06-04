const projects = [
  { name: 'Dublin Metrolink',           sector: 'Infrastructure'  },
  { name: 'Amaala Red Sea Development', sector: 'Large-scale Dev' },
  { name: 'Priory Integrated College',  sector: 'Education'       },
  { name: 'Sea World Abu Dhabi',        sector: 'Entertainment'   },
  { name: 'Yondr Data Center Qiddiya', sector: 'Data Centre'     },
  { name: 'Water Theme Park Dublin',    sector: 'Leisure'         },
];

export default function Education() {
  return (
    <>
      <hr className="ks-divider" />
      <section style={{ background: 'var(--lacquer-deep)' }}>
        <div className="ks-section">
          <div className="ks-section-head">
            <p className="eyebrow">Background</p>
            <h2>Qualifications</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 48 }}>

            {/* Left */}
            <div>
              <p className="eyebrow" style={{ marginBottom: 20 }}>Education</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2, marginBottom: 40 }}>
                {[
                  { deg: 'MSc BIM Project Management',    inst: "Queen's University Belfast", yr: '2022 — 2023' },
                  { deg: 'BSc Civil Engineering',          inst: 'Capital University',          yr: '2015 — 2019' },
                ].map(e => (
                  <div key={e.deg} className="ks-card" style={{ padding: '20px 24px' }}>
                    <p style={{ fontFamily: 'var(--mono)', fontSize: '.62rem', letterSpacing: '.1em', color: 'var(--text-faint)', marginBottom: 8 }}>{e.yr}</p>
                    <h3 style={{ marginBottom: 4, fontSize: '1rem' }}>{e.deg}</h3>
                    <p style={{ fontFamily: 'var(--mono)', fontSize: '.68rem', letterSpacing: '.08em', color: 'var(--patina)' }}>{e.inst}</p>
                  </div>
                ))}
              </div>

              <p className="eyebrow" style={{ marginBottom: 20 }}>Certifications</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {[
                  { name: 'BSI BIM Information Practitioner',        date: 'Nov 2024' },
                  { name: 'buildingSMART Professional Certification', date: 'Apr 2024' },
                ].map(c => (
                  <div key={c.name} className="ks-card" style={{ padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
                    <p style={{ fontWeight: 500, color: 'var(--champagne)', fontSize: '.95rem' }}>{c.name}</p>
                    <span className="ks-chip">{c.date}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right */}
            <div>
              <p className="eyebrow" style={{ marginBottom: 20 }}>Selected Projects</p>
              <div className="ks-card" style={{ padding: 0, overflow: 'hidden' }}>
                {projects.map((p, i) => (
                  <div key={p.name} style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16,
                    padding: '15px 24px',
                    borderBottom: i < projects.length - 1 ? '1px solid var(--rule)' : 'none',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                      <span style={{ fontFamily: 'var(--mono)', fontSize: '.6rem', color: 'var(--text-faint)', opacity: .5, width: 18 }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span style={{ fontSize: '.95rem', fontWeight: 500, color: 'var(--champagne)' }}>{p.name}</span>
                    </div>
                    <span className="ks-chip">{p.sector}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
