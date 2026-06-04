import CaseStudyLayout, { CSSection, CSImage, STARGrid } from '../components/CaseStudyLayout';
import Footer from '../components/Footer';

const meta = {
  num: '03',
  title: 'Dynamo & Power BI Delivery Automation',
  context: 'Dynamo · DiRoots · Power BI · CDE Governance',
  summary: 'Model QA before CDE publishing was inconsistent and time-consuming. Reporting on deliverable status required manual spreadsheet collation that was always out of date. I developed Dynamo and DiRoots workflows for automated model validation and connected the outputs to Power BI dashboards — giving the team and project stakeholders live visibility of information quality.',
  tags: ['Dynamo', 'DiRoots', 'Power BI', 'Revit', 'CDE', 'Model QA'],
  outcomes: [
    { value: 'Automated', label: 'Pre-upload QA' },
    { value: 'Live',       label: 'CDE Status Dashboards' },
    { value: 'Reduced',    label: 'Manual Reporting' },
    { value: 'Data-led',   label: 'BIM Delivery Approach' },
  ],
  next: null,
};

const useCases = [
  { title: 'Model Data Extraction', body: 'Dynamo graphs extract parameter values, element counts, and model metadata directly from Revit without manual export. Data is structured for downstream use in reports and dashboards.' },
  { title: 'Parameter Review & Validation', body: 'Scripts cross-check model parameters against project information requirements — verifying that elements carry the correct data before the model is published to the CDE.' },
  { title: 'QA Checks Before Publishing', body: 'Pre-upload review workflows flag non-compliant elements, missing parameters, and naming inconsistencies. Issues can be resolved before the model reaches the CDE, reducing revision cycles.' },
  { title: 'Deliverable Preparation', body: 'Repetitive tasks in deliverable preparation — view creation, sheet setup, parameter population — are automated for structural and civil BIM models, reducing manual effort per deliverable.' },
  { title: 'Export-ready Data for Dashboards', body: 'Structured data exported from Dynamo connects directly to Power BI, enabling live dashboards that reflect the current state of model information without manual data entry.' },
];

export default function CaseStudyDynamo() {
  return (
    <CaseStudyLayout meta={meta}>

      {/* STAR */}
      <CSSection eyebrow="Situation · Task · Action · Result">
        <STARGrid accent="var(--kinpaku-rich)" items={[
          { label: 'Situation', body: 'Model QA before CDE publishing was being done manually — scrolling through element properties, checking parameters one by one. Reporting on project deliverable status relied on spreadsheets that were always a week out of date. Both problems created risk and wasted team time.' },
          { label: 'Task',      body: 'Develop automated workflows to perform model QA checks before CDE upload and provide project stakeholders with live, accurate visibility of deliverable status and information quality.' },
          { label: 'Action',    body: 'Developed Dynamo scripts and DiRoots workflows for model parameter validation, QA checks, and pre-upload review. Connected the structured data outputs to Power BI dashboards for live CDE document status monitoring and project reporting.' },
          { label: 'Result',   body: 'Pre-upload review time was reduced and became more consistent. Power BI dashboards replaced manual spreadsheet collation, giving project stakeholders live information quality and deliverable status data for the first time.' },
        ]} />
      </CSSection>

      {/* Dynamo graph */}
      <CSSection eyebrow="Dynamo Workflow" title="Visual programming for model automation" dark>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 32, alignItems: 'start' }}>
          <CSImage
            src="/images/img-p7-0.jpeg"
            alt="Dynamo graph used to automate and review Revit model data"
            caption="Dynamo graph used to automate model data extraction, parameter review, and repeated engineering tasks across structural and civil Revit models"
            wide
          />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div className="ks-card">
              <p className="eyebrow" style={{ marginBottom: 10 }}>Why Dynamo?</p>
              <p style={{ fontSize: '.95rem', lineHeight: 1.75 }}>Dynamo is a visual programming environment for Revit that allows engineers to automate model workflows without writing traditional code. Graphs — networks of connected nodes — define logic that can read, modify, and export model data at scale. Combined with DiRoots add-ins, it covers tasks from basic parameter extraction to complex multi-model coordination checks.</p>
            </div>
            <div className="ks-card">
              <p className="eyebrow" style={{ marginBottom: 10 }}>Integration with Power BI</p>
              <p style={{ fontSize: '.95rem', lineHeight: 1.75 }}>Dynamo exports structured data (CSV, Excel, or direct API connections) that Power BI consumes. When a model is updated and the Dynamo graph is re-run, the Power BI dashboard reflects the new state automatically — turning a model review into a live reporting output with no additional effort.</p>
            </div>
          </div>
        </div>
      </CSSection>

      {/* Use cases */}
      <CSSection eyebrow="Automation Scope" title="Typical use cases">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 2, background: 'var(--rule)', border: '1px solid var(--rule)', borderRadius: 2, overflow: 'hidden' }}>
          {useCases.map(({ title, body }) => (
            <div key={title} style={{ background: 'var(--lacquer-raised)', padding: '24px 28px' }}>
              <h3 style={{ marginBottom: 10 }}>{title}</h3>
              <p style={{ fontSize: '.9rem', lineHeight: 1.75 }}>{body}</p>
            </div>
          ))}
        </div>
      </CSSection>

      {/* Power BI */}
      <CSSection eyebrow="Reporting Layer" title="Power BI dashboards for live CDE visibility" dark>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 32 }}>
          <div>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, marginBottom: 16 }}>Power BI dashboards were built to monitor CDE document quality, project deliverable status, and information management reporting outputs for project stakeholders. Where Dynamo handles the model-side data extraction, Power BI handles the presentation — turning raw parameter data into actionable project intelligence.</p>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, marginBottom: 24 }}>The combination of Dynamo automation and Power BI reporting represents a shift from reactive, manual information management to a data-led BIM delivery approach — where the state of the model and the CDE is always visible, not just when someone compiles a spreadsheet.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {[
                ['CDE Document Status', 'Document count, revision status, suitability codes across all packages'],
                ['Deliverable Tracking', 'Planned vs actual delivery dates, outstanding items, revision history'],
                ['Information Quality', 'Parameter completeness, naming convention compliance, model health metrics'],
                ['Stakeholder Reporting', 'Executive-level summaries of project information status for client and project management'],
              ].map(([label, desc]) => (
                <div key={label} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', background: 'var(--lacquer-raised)', border: '1px solid var(--rule)', padding: '14px 20px', borderRadius: 2 }}>
                  <span style={{ color: 'var(--kinpaku)', fontSize: '.5rem', marginTop: '0.5em', flexShrink: 0 }}>◆</span>
                  <div>
                    <p style={{ fontSize: '.9rem', fontWeight: 600, color: 'var(--champagne)', marginBottom: 2 }}>{label}</p>
                    <p style={{ fontSize: '.85rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="ks-card" style={{ marginBottom: 12 }}>
              <p className="eyebrow" style={{ marginBottom: 10 }}>Tools in this workflow</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {[
                  ['Dynamo', 'Visual programming for Revit — model data extraction and automation'],
                  ['DiRoots', 'Revit add-in suite — advanced parameter management and model QA tools'],
                  ['Power BI', 'Microsoft BI platform — dashboard creation and live data reporting'],
                  ['Autodesk ACC / BIM 360', 'CDE platforms — source of document status and deliverable metadata'],
                ].map(([tool, role]) => (
                  <div key={tool} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <span className="ks-chip" style={{ flexShrink: 0 }}>{tool}</span>
                    <span style={{ fontSize: '.85rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{role}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="ks-card">
              <p className="eyebrow" style={{ marginBottom: 10 }}>Value delivered</p>
              <p style={{ fontSize: '.9rem', lineHeight: 1.75 }}>Dynamo workflows reduce manual repetition, improve information consistency, and give project teams a faster route to validate model data. Combined with Power BI and CDE review processes, these workflows support a more data-led BIM delivery approach across structural and civil engineering projects.</p>
            </div>
          </div>
        </div>
      </CSSection>

      {/* Portfolio pages */}
      <CSSection eyebrow="Portfolio Document" title="Case study documentation">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 12 }}>
          <CSImage src="/images/portfolio-page-7.png" alt="Case Study 3 — Dynamo automation" caption="Portfolio documentation — Dynamo automation for Revit-based engineering workflows" />
          <CSImage src="/images/portfolio-page-8.png" alt="Capability map" caption="Portfolio documentation — capability map showing how the case studies combine into a digital delivery proposition" />
        </div>
      </CSSection>

      <Footer />
    </CaseStudyLayout>
  );
}
