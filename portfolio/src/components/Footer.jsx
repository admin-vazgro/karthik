export default function Footer() {
  return (
    <>
      <hr className="ks-divider" />
      <footer style={{ background: 'var(--lacquer-deep)' }}>
        <div className="ks-section" style={{ paddingTop: 64, paddingBottom: 56 }}>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 32 }}>

            <a href="#" style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 300, letterSpacing: '-0.02em', color: 'var(--kinpaku)', textDecoration: 'none', lineHeight: 1 }}>
              Karthik Jyothy
            </a>

            <p style={{ maxWidth: 400, color: 'var(--text-faint)', fontSize: '.92rem', lineHeight: 1.75 }}>
              BIM &amp; Digital Delivery Professional. ISO 19650. AI-assisted workflows.
              Automation. Belfast, UK.
            </p>

            <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
              {[
                { label: 'Email',    href: 'mailto:karthik71.work@gmail.com' },
                { label: 'LinkedIn', href: 'https://linkedin.com/in/karthik-jyothy-5691a51b7' },
                { label: 'Phone',    href: 'tel:+447442555396' },
              ].map(({ label, href }) => (
                <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
                  style={{ fontFamily: 'var(--mono)', fontSize: '.68rem', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--text-faint)' }}>
                  {label} ↗
                </a>
              ))}
            </div>

          </div>

          <div style={{ borderTop: '1px solid var(--rule)', marginTop: 48, paddingTop: 24, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
            <span style={{ fontFamily: 'var(--mono)', fontSize: '.62rem', letterSpacing: '.1em', color: 'var(--text-faint)' }}>
              © {new Date().getFullYear()} KARTHIK JYOTHY
            </span>
            <span style={{ fontFamily: 'var(--mono)', fontSize: '.62rem', letterSpacing: '.1em', color: 'var(--text-faint)' }}>
              BIM &amp; DIGITAL DELIVERY · ISO 19650
            </span>
          </div>

        </div>
      </footer>
    </>
  );
}
