const roles = [
  {
    period: '2023 — Present', loc: 'Belfast, UK', current: true,
    role: 'Assistant BIM Manager', company: "O'Connor Sutton Cronin",
    points: [
      'Implemented ISO 19650-aligned BIM workflows — CDE governance, BEP/EIR compliance, TIDP preparation.',
      'Delivered GenerativeComponents automation for Dublin Metrolink (WSP), saving weeks of manual effort.',
      'Built AI-assisted QA tooling via Claude Code & Cursor AI: BEP metadata extractor, naming checker, Revit BWO add-in.',
      'Power BI dashboards for live CDE quality and deliverable status reporting.',
      'Managed project information across ACC, BIM 360, Dalux and Viewpoint. Supported BSI BIM audit.',
    ],
  },
  {
    period: '2021 — 2022', loc: 'India', current: false,
    role: 'Assistant BIM Coordinator', company: 'DDG BIM Services Pvt Ltd',
    points: [
      'Architectural and structural BIM models aligned with ISO 19650 and RIBA Plan of Work.',
      'CDE processes for controlled information sharing, review and storage.',
      'Multidisciplinary coordination — clash detection and resolution.',
    ],
  },
  {
    period: 'Feb — Oct 2021', loc: 'Dubai', current: false,
    role: 'Facade BIM Technician', company: 'Fencon Facade Technology LLC',
    points: [
      'Facade BIM models from concept to IFC per RIBA and ISO 19650.',
      'Dynamo scripts for workflow efficiency and repeatable model production.',
    ],
  },
  {
    period: '2019 — 2020', loc: 'Bangalore', current: false,
    role: 'BIM Trainee', company: 'E-Construct Pvt Ltd',
    points: [
      'BIM model development, design review and process improvement.',
      'Energy calculations and alternate design model testing.',
    ],
  },
];

export default function Experience() {
  return (
    <>
      <hr className="ks-divider" />
      <section id="experience">
        <div className="ks-section">
          <div className="ks-section-head">
            <p className="eyebrow">Career</p>
            <h2>Experience</h2>
          </div>

          <div>
            {roles.map(r => (
              <div key={r.role} className="ks-timeline-row">

                {/* Left */}
                <div>
                  <p style={{ fontFamily: 'var(--mono)', fontSize: '.7rem', letterSpacing: '.1em', color: r.current ? 'var(--kinpaku)' : 'var(--text-faint)', marginBottom: 6 }}>
                    {r.period}
                  </p>
                  <p style={{ fontFamily: 'var(--mono)', fontSize: '.62rem', letterSpacing: '.08em', color: 'var(--text-faint)', marginBottom: r.current ? 10 : 0 }}>
                    {r.loc}
                  </p>
                  {r.current && (
                    <span style={{
                      display: 'inline-block',
                      fontFamily: 'var(--mono)', fontSize: '.58rem', letterSpacing: '.14em',
                      textTransform: 'uppercase', color: 'var(--kinpaku)',
                      border: '1px solid var(--kinpaku-dim)', borderRadius: 2,
                      padding: '3px 8px', background: 'var(--kinpaku-dim)',
                    }}>Current</span>
                  )}
                </div>

                {/* Right */}
                <div>
                  <h3 style={{ marginBottom: 4 }}>{r.role}</h3>
                  <p style={{ fontFamily: 'var(--mono)', fontSize: '.7rem', letterSpacing: '.1em', color: 'var(--patina)', marginBottom: 18 }}>
                    {r.company}
                  </p>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 9 }}>
                    {r.points.map((pt, i) => (
                      <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: '.95rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                        <span style={{ color: 'var(--kinpaku-rich)', flexShrink: 0, marginTop: '0.45em', fontSize: '.5rem' }}>◆</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
