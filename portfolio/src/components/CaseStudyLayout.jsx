import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function CaseStudyLayout({ meta, children }) {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      {/* Back bar */}
      <div style={{
        borderBottom: '1px solid var(--rule-warm)',
        background: 'var(--lacquer-deep)',
      }}>
        <div style={{ maxWidth: 1320, margin: '0 auto', padding: '14px clamp(22px, 4vw, 64px)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
          <Link to="/#work" onClick={() => setTimeout(() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' }), 80)}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--mono)', fontSize: '.68rem', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--text-faint)', textDecoration: 'none', transition: 'color .18s' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--champagne)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-faint)'}
          >
            ← All Work
          </Link>
          <div style={{ display: 'flex', gap: 8 }}>
            {meta.tags.map(t => <span key={t} className="ks-chip">{t}</span>)}
          </div>
        </div>
      </div>

      {/* Hero */}
      <section style={{
        background: `linear-gradient(160deg, oklch(9% .01 95) 0%, var(--lacquer) 55%)`,
        borderBottom: '1px solid var(--rule-warm)',
        padding: 'clamp(56px, 8vw, 100px) clamp(22px, 4vw, 64px)',
      }}>
        <div style={{ maxWidth: 1320, margin: '0 auto' }}>
          <p className="eyebrow" style={{ marginBottom: 16 }}>Case {meta.num} — {meta.context}</p>
          <h1 style={{ maxWidth: 780, marginBottom: 24 }}>{meta.title}</h1>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.75, maxWidth: 600, color: 'var(--text-muted)', marginBottom: 40 }}>{meta.summary}</p>

          {/* Outcome pills */}
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
            {meta.outcomes.map(({ label, value }) => (
              <div key={label} style={{ borderLeft: '2px solid var(--kinpaku)', paddingLeft: 16 }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 600, color: 'var(--champagne)', lineHeight: 1, marginBottom: 4 }}>{value}</div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: '.6rem', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--text-faint)' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Body */}
      {children}

      {/* Footer nav */}
      <div style={{ borderTop: '1px solid var(--rule-warm)', background: 'var(--lacquer-deep)' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto', padding: '32px clamp(22px, 4vw, 64px)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
          <Link to="/" style={{ fontFamily: 'var(--mono)', fontSize: '.68rem', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--text-faint)', textDecoration: 'none' }}>
            ← Back to Portfolio
          </Link>
          {meta.next && (
            <Link to={`/case-study/${meta.next.slug}`} style={{ fontFamily: 'var(--mono)', fontSize: '.68rem', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--kinpaku)', textDecoration: 'none' }}>
              Next: {meta.next.title} →
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

/* ── Shared section wrapper for case study body ── */
export function CSSection({ eyebrow, title, children, dark }) {
  return (
    <section style={{ background: dark ? 'var(--lacquer-deep)' : 'var(--lacquer)', borderBottom: '1px solid var(--rule-warm)' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '72px clamp(22px, 4vw, 64px)' }}>
        {(eyebrow || title) && (
          <div style={{ marginBottom: 40 }}>
            {eyebrow && <p className="eyebrow" style={{ marginBottom: 12 }}>{eyebrow}</p>}
            {title && <h2>{title}</h2>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

/* ── Image with caption ── */
export function CSImage({ src, alt, caption, wide }) {
  return (
    <figure style={{ margin: 0 }}>
      <div style={{
        borderRadius: 4,
        overflow: 'hidden',
        border: '1px solid var(--rule)',
        background: 'var(--graphite)',
        maxWidth: wide ? '100%' : 860,
      }}>
        <img src={src} alt={alt} style={{ width: '100%', display: 'block', objectFit: 'cover' }} loading="lazy" />
      </div>
      {caption && (
        <figcaption style={{ marginTop: 10, fontFamily: 'var(--mono)', fontSize: '.62rem', letterSpacing: '.08em', color: 'var(--text-faint)', fontStyle: 'italic' }}>
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

/* ── STAR cell grid ── */
export function STARGrid({ items, accent }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 1, background: 'var(--rule)', border: '1px solid var(--rule)', borderRadius: 2, overflow: 'hidden' }}>
      {items.map(({ label, body }) => (
        <div key={label} style={{ background: 'var(--lacquer-raised)', padding: '24px 28px' }}>
          <p className="eyebrow" style={{ color: accent || 'var(--kinpaku)', marginBottom: 12 }}>{label}</p>
          <p style={{ fontSize: '.95rem', lineHeight: 1.75, color: 'var(--text-muted)' }}>{body}</p>
        </div>
      ))}
    </div>
  );
}

/* ── Numbered process steps ── */
export function ProcessSteps({ steps }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {steps.map((s, i) => (
        <div key={i} style={{ display: 'flex', gap: 20, alignItems: 'flex-start', padding: '20px 24px', background: 'var(--lacquer-raised)', border: '1px solid var(--rule)', borderRadius: 2 }}>
          <div style={{
            width: 32, height: 32, borderRadius: '50%', background: 'var(--kinpaku)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0, fontFamily: 'var(--mono)', fontSize: '.7rem', fontWeight: 700, color: 'var(--lacquer-deep)',
          }}>
            {String(i + 1).padStart(2, '0')}
          </div>
          <div>
            <h3 style={{ marginBottom: 6 }}>{s.title}</h3>
            <p style={{ fontSize: '.95rem', lineHeight: 1.7 }}>{s.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── Before / After split ── */
export function BeforeAfter({ before, after }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, background: 'var(--rule)', border: '1px solid var(--rule)', borderRadius: 2, overflow: 'hidden' }}>
      {[{ label: 'Before', items: before, accent: 'var(--text-faint)' }, { label: 'After', items: after, accent: 'var(--kinpaku)' }].map(col => (
        <div key={col.label} style={{ background: 'var(--lacquer-raised)', padding: '24px 28px' }}>
          <p className="eyebrow" style={{ color: col.accent, marginBottom: 16 }}>{col.label}</p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
            {col.items.map((item, i) => (
              <li key={i} style={{ display: 'flex', gap: 10, fontSize: '.95rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                <span style={{ color: col.accent, flexShrink: 0, fontSize: '.5rem', marginTop: '0.5em' }}>◆</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
