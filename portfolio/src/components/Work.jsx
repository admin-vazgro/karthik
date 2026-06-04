import { Link } from 'react-router-dom';

const cases = [
  {
    num: '01', color: 'var(--kinpaku)', slug: 'metrolink',
    title:   'Dublin Metrolink — Automation Workflow',
    context: 'Bentley GenerativeComponents · OCSC × WSP',
    body:    'OCSC was an Autodesk/Revit-focused team, but this WSP-led Metrolink package required Bentley OpenBuildings Designer. I researched GenerativeComponents, built repeatable parametric automation, trained colleagues under live project pressure, and saved weeks of manual effort.',
    tags:    ['GenerativeComponents', 'Bentley OpenBuildings', 'Infrastructure', 'Automation'],
    outcome: 'Weeks of effort saved. Package delivered on programme.',
  },
  {
    num: '02', color: 'var(--patina)', slug: 'ai-qa',
    title:   'AI-assisted BIM QA/QC Tooling',
    context: 'Claude Code · Cursor AI · Python · Revit Add-in',
    body:    "Manual document QA was creating inconsistency risk and consuming team time. I used AI-assisted coding — Claude Code, Cursor AI, ChatGPT Codex — to build a BEP metadata extractor, ISO 19650 naming checker, and a Revit builder's work opening add-in.",
    tags:    ['Claude Code', 'Python', 'ISO 19650', 'Revit Add-in'],
    outcome: 'Repetitive QA automated. Consistent standards across OCSC.',
  },
  {
    num: '03', color: 'var(--kinpaku-rich)', slug: 'dynamo',
    title:   'Dynamo & Power BI Delivery Automation',
    context: 'Dynamo · DiRoots · Power BI · CDE Governance',
    body:    'Developed Dynamo and DiRoots workflows for model QA checks, parameter validation, and pre-upload review. Connected data outputs to Power BI dashboards giving project stakeholders live CDE document quality and deliverable status.',
    tags:    ['Dynamo', 'DiRoots', 'Power BI', 'CDE Governance'],
    outcome: 'Live dashboards replacing manual reporting.',
  },
];

export default function Work() {
  return (
    <>
      <hr className="ks-divider" />
      <section id="work">
        <div className="ks-section">

          <div className="ks-section-head">
            <p className="eyebrow">Selected Work</p>
            <h2>Case Studies</h2>
            <p>Three projects that show the approach: identify the bottleneck, build the tool, train the team.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {cases.map((c) => (
              <div key={c.num} className="ks-card ks-work-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 16, marginBottom: 18 }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                      <span className="eyebrow" style={{ color: c.color }}>Case {c.num}</span>
                      <span style={{ width: 1, height: 12, background: 'var(--rule)', display: 'inline-block' }} />
                      <span style={{ fontFamily: 'var(--mono)', fontSize: '.62rem', letterSpacing: '.1em', color: 'var(--text-faint)' }}>{c.context}</span>
                    </div>
                    <h3 style={{ fontSize: '1.18rem' }}>{c.title}</h3>
                  </div>
                  <Link
                    to={`/case-study/${c.slug}`}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: 8,
                      fontFamily: 'var(--mono)', fontSize: '.68rem', letterSpacing: '.1em',
                      textTransform: 'uppercase', color: c.color,
                      border: `1px solid ${c.color}22`,
                      background: `${c.color}11`,
                      padding: '7px 14px', borderRadius: 2,
                      textDecoration: 'none', flexShrink: 0,
                      transition: 'background .18s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = `${c.color}22`}
                    onMouseLeave={e => e.currentTarget.style.background = `${c.color}11`}
                  >
                    Full Case Study ↗
                  </Link>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 1, background: 'var(--rule)', border: '1px solid var(--rule)', borderRadius: 2, marginBottom: 20, overflow: 'hidden' }}>
                  {[
                    { lbl: 'Context', body: c.body },
                    { lbl: 'Outcome', body: c.outcome, highlight: true },
                  ].map(({ lbl, body, highlight }) => (
                    <div key={lbl} style={{ background: 'var(--lacquer-deep)', padding: '18px 22px' }}>
                      <p className="eyebrow" style={{ color: highlight ? c.color : 'var(--text-faint)', marginBottom: 8 }}>{lbl}</p>
                      <p style={{ fontSize: '.95rem', lineHeight: 1.7, color: highlight ? 'var(--champagne)' : 'var(--text-muted)', fontWeight: highlight ? 500 : 400 }}>{body}</p>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  {c.tags.map(t => <span key={t} className="ks-chip">{t}</span>)}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
