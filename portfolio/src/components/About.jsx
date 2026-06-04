export default function About() {
  return (
    <>
      <hr className="ks-divider" />
      <section id="about">
        <div className="ks-section">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 56 }}>

            {/* Bio */}
            <div>
              <p className="eyebrow" style={{ marginBottom: 20 }}>About</p>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.85, marginBottom: 16 }}>
                Digital Delivery and BIM Information Management professional with experience implementing
                ISO 19650-aligned workflows, CDE governance, BEP/EIR requirements, model QA/QC processes,
                automation, and AI-supported digital workflows across multidisciplinary projects.
              </p>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.85, marginBottom: 16 }}>
                Currently Assistant BIM Manager at O'Connor Sutton Cronin in Belfast — working across
                infrastructure, education, healthcare, data centres and large-scale developments
                including Dublin Metrolink.
              </p>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.85, marginBottom: 28 }}>
                MSc in BIM Project Management, Queen's University Belfast. Certified BSI BIM
                Information Practitioner and buildingSMART Professional.
              </p>
              <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap' }}>
                {['BIM', 'Digital Tech', 'Table Tennis', 'Charcoal Drawings', 'Cricket', 'Guitar'].map(i => (
                  <span key={i} className="ks-chip">{i}</span>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div id="contact">
              <p className="eyebrow" style={{ marginBottom: 20 }}>Get in Touch</p>
              <div className="ks-card" style={{ padding: 0, overflow: 'hidden', marginBottom: 14 }}>
                {[
                  { key: 'Email',    val: 'karthik71.work@gmail.com',  href: 'mailto:karthik71.work@gmail.com' },
                  { key: 'Phone',    val: '+44 7442 555396',            href: 'tel:+447442555396' },
                  { key: 'LinkedIn', val: 'karthik-jyothy',             href: 'https://linkedin.com/in/karthik-jyothy-5691a51b7' },
                  { key: 'Location', val: 'Belfast, UK',                href: null },
                ].map(({ key, val, href }, i, arr) => (
                  <div key={key} style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16,
                    padding: '15px 24px',
                    borderBottom: i < arr.length - 1 ? '1px solid var(--rule)' : 'none',
                  }}>
                    <span style={{ fontFamily: 'var(--mono)', fontSize: '.62rem', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--text-faint)', flexShrink: 0 }}>
                      {key}
                    </span>
                    {href ? (
                      <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
                        style={{ fontSize: '.9rem', fontWeight: 500, color: 'var(--patina)', wordBreak: 'break-all', textAlign: 'right' }}>
                        {val} ↗
                      </a>
                    ) : (
                      <span style={{ fontSize: '.9rem', fontWeight: 500, color: 'var(--champagne)' }}>{val}</span>
                    )}
                  </div>
                ))}
              </div>

              <a href="mailto:karthik71.work@gmail.com" className="ks-btn ks-btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Send a Message ↗
              </a>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
