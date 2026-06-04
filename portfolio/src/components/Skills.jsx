const specs = [
  { label: 'Digital Delivery',  items: ['ISO 19650', 'BIM Level 2', 'BEP / EIR', 'TIDP / MIDP', 'CDE Management', 'Document Control', 'Model QA/QC'] },
  { label: 'Automation & AI',   items: ['Dynamo', 'DiRoots', 'Power BI', 'Claude Code', 'Cursor AI', 'Python', 'Revit Add-ins'] },
  { label: 'Platforms',         items: ['Revit', 'Navisworks', 'Autodesk ACC', 'BIM 360', 'Dalux', 'Viewpoint', 'Bluebeam Revu', 'Bentley OpenBuildings'] },
  { label: 'Leadership',        items: ['Workflow Change', 'Team Training', 'Stakeholder Coordination', 'Digital Adoption', 'Multidisciplinary Coord.'] },
];

export default function Skills() {
  return (
    <>
      <hr className="ks-divider" />
      <section style={{ background: 'var(--lacquer-deep)' }}>
        <div className="ks-section">
          <div className="ks-section-head">
            <p className="eyebrow">Capabilities</p>
            <h2>Specifications</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 1, background: 'var(--rule)', border: '1px solid var(--rule)', borderRadius: 3, overflow: 'hidden' }}>
            {specs.map(col => (
              <div key={col.label} style={{ background: 'var(--lacquer-raised)', padding: '28px 28px' }}>
                <p className="eyebrow" style={{ marginBottom: 20 }}>{col.label}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {col.items.map(item => (
                    <span key={item} style={{ fontSize: '.95rem', fontWeight: 500, color: 'var(--text-muted)' }}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
