import CaseStudyLayout, { CSSection, CSImage, STARGrid, ProcessSteps, BeforeAfter } from '../components/CaseStudyLayout';
import Footer from '../components/Footer';

const meta = {
  num: '01',
  title: 'Dublin Metrolink — Automation-led Workflow Transformation',
  context: 'Bentley OpenBuildings Designer + GenerativeComponents',
  summary: 'OCSC was an Autodesk/Revit-focused practice. A WSP-led Dublin Metrolink package required Bentley OpenBuildings Designer — a platform the team had never delivered in. I researched GenerativeComponents, built repeatable parametric automation, trained the team, and saved weeks of manual effort on a live infrastructure programme.',
  tags: ['GenerativeComponents', 'Bentley OpenBuildings', 'Infrastructure', 'Automation', 'WSP'],
  outcomes: [
    { value: 'Weeks',     label: 'Manual Effort Saved' },
    { value: 'Live',      label: 'Programme Delivery' },
    { value: 'New',       label: 'Platform Capability' },
    { value: 'Team',      label: 'Trained & Enabled' },
  ],
  next: { slug: 'ai-qa', title: 'AI-assisted QA/QC' },
};

export default function CaseStudyMetrolink() {
  return (
    <CaseStudyLayout meta={meta}>

      {/* STAR Grid */}
      <CSSection eyebrow="Situation · Task · Action · Result">
        <STARGrid accent="var(--kinpaku)" items={[
          { label: 'Situation', body: 'OCSC was primarily an Autodesk/Revit-based practice. The Dublin Metrolink Interstation Cut-and-Cover package, delivered within a WSP project environment, required Bentley OpenBuildings Designer — a platform the team had no existing workflow or experience with.' },
          { label: 'Task',      body: 'Find a way to maintain delivery pace and information quality despite the software transition, an unfamiliar modelling environment, and a short programme period with limited resource headroom.' },
          { label: 'Action',    body: 'Researched Bentley GenerativeComponents as an automation route. Developed repeatable parametric logic to automate repetitive geometry and workflow tasks. Explained the method to colleagues, demonstrated the workflow, and trained the team in a compressed period under live delivery pressure.' },
          { label: 'Result',   body: 'The automation saved weeks of manual modelling and coordination effort. Resource pressure was significantly reduced. The project package was completed successfully and on programme. The team gained cross-platform digital capability they did not have before.' },
        ]} />
      </CSSection>

      {/* GC Screenshot */}
      <CSSection eyebrow="GenerativeComponents Workflow" title="Automation logic in the Bentley environment" dark>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 32, alignItems: 'start' }}>
          <CSImage
            src="/images/img-p3-0.jpeg"
            alt="GenerativeComponents workflow automating Dublin Metrolink geometry in Bentley OpenBuildings"
            caption="GenerativeComponents workflow used to automate geometry and repetitive Bentley OpenBuildings tasks — Dublin Metrolink Interstation Cut-and-Cover Package"
            wide
          />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div className="ks-card">
              <p className="eyebrow" style={{ marginBottom: 10 }}>Why GenerativeComponents?</p>
              <p style={{ fontSize: '.95rem', lineHeight: 1.75 }}>Bentley GenerativeComponents is a visual programming environment embedded in OpenBuildings Designer. It allows parametric relationships between geometric elements — meaning a single logic script can drive hundreds of repetitive model components rather than placing them one by one.</p>
            </div>
            <div className="ks-card">
              <p className="eyebrow" style={{ marginBottom: 10 }}>What was automated</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {['Repetitive geometry placement along the alignment', 'Parametric relationships between structural components', 'Workflow tasks that would otherwise require manual element-by-element input', 'Output consistency for coordination and delivery'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: 10, fontSize: '.9rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>
                    <span style={{ color: 'var(--kinpaku)', fontSize: '.5rem', marginTop: '0.55em', flexShrink: 0 }}>◆</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </CSSection>

      {/* Metrolink model render */}
      <CSSection eyebrow="Model Delivery Context" title="Dublin Metrolink — Infrastructure scale">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 32, alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, marginBottom: 20 }}>Dublin Metrolink is a major public transport infrastructure project — a 18.8km metro line connecting Dublin Airport to the city centre. The Interstation Cut-and-Cover package involved complex underground and structural modelling at scale, with tight programme constraints and multiple disciplines coordinating in a shared CDE environment.</p>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, marginBottom: 20 }}>Delivering BIM models in Bentley OpenBuildings required a fundamentally different workflow to Revit — different data structures, different modelling logic, and a different parametric approach. The GenerativeComponents automation bridged this gap, enabling the team to deliver to WSP's programme requirements without a proportional increase in resource.</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'var(--rule)', border: '1px solid var(--rule)', borderRadius: 2, overflow: 'hidden', marginTop: 24 }}>
              {[['Project', 'Dublin Metrolink'], ['Client Environment', 'WSP Ireland'], ['Package', 'Interstation Cut-and-Cover'], ['Platform', 'Bentley OpenBuildings Designer']].map(([k, v]) => (
                <div key={k} style={{ background: 'var(--lacquer-raised)', padding: '14px 18px' }}>
                  <p style={{ fontFamily: 'var(--mono)', fontSize: '.58rem', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--text-faint)', marginBottom: 4 }}>{k}</p>
                  <p style={{ fontSize: '.9rem', fontWeight: 500, color: 'var(--champagne)' }}>{v}</p>
                </div>
              ))}
            </div>
          </div>
          <CSImage
            src="/images/img-p4-0.jpeg"
            alt="Dublin Metrolink BIM model render showing viaduct structure"
            caption="Metrolink model delivery context — structural viaduct and elevated track section"
          />
        </div>
      </CSSection>

      {/* Process */}
      <CSSection eyebrow="How It Happened" title="From delivery risk to automated workflow" dark>
        <ProcessSteps steps={[
          { title: 'Project Demand', body: 'Bentley OpenBuildings Designer workflow required for the Metrolink package. Team background was entirely Autodesk/Revit.' },
          { title: 'Delivery Risk Identified', body: 'Manual approach — learning the platform from scratch and placing elements one by one — would have consumed weeks of resource the programme could not absorb.' },
          { title: 'Research Phase', body: 'Explored Bentley GenerativeComponents as an automation route. Reviewed Bentley documentation, tested the scripting environment, and assessed feasibility against the specific modelling tasks required.' },
          { title: 'Prototype & Build', body: 'Built repeatable parametric logic in GenerativeComponents to automate geometry placement and repetitive workflow tasks. Tested against actual project geometry and delivery requirements.' },
          { title: 'Team Adoption', body: 'Explained the method and its logic to colleagues unfamiliar with visual programming. Ran brief, practical training sessions. Supported the team through the transition under live delivery pressure.' },
        ]} />
      </CSSection>

      {/* Before / After */}
      <CSSection eyebrow="Impact" title="Before vs after">
        <BeforeAfter
          before={['Unfamiliar Bentley workflow with no existing playbook', 'High manual effort per model element — weeks of work', 'Short delivery period with limited resource headroom', 'No cross-platform capability in the team']}
          after={['Repeatable GenerativeComponents automation logic', 'Weeks of manual effort eliminated', 'Team trained and delivering in the new platform', 'Cross-platform BIM capability now part of team skillset']}
        />
      </CSSection>

      {/* Full portfolio page render */}
      <CSSection eyebrow="Portfolio Document" title="Case study documentation" dark>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 12 }}>
          <CSImage src="/images/portfolio-page-3.png" alt="Case Study 1 portfolio page" caption="Portfolio documentation — Case Study 1 overview" />
          <CSImage src="/images/portfolio-page-4.png" alt="Case Study 1 workflow evidence page" caption="Portfolio documentation — workflow evidence and before/after analysis" />
        </div>
      </CSSection>

      <Footer />
    </CaseStudyLayout>
  );
}
