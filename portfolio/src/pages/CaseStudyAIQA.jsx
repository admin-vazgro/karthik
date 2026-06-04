import CaseStudyLayout, { CSSection, CSImage, STARGrid, ProcessSteps } from '../components/CaseStudyLayout';
import Footer from '../components/Footer';

const meta = {
  num: '02',
  title: 'AI-assisted BIM QA/QC Tooling',
  context: 'Claude Code · Cursor AI · Python · Revit Add-in',
  summary: 'Team members were spending significant time manually checking project information documents — naming conventions, metadata, deliverable consistency — while trying to maintain ISO 19650 standards. I used AI-assisted coding workflows to build practical tools that automated the repetitive checks and freed the team for higher-value coordination work.',
  tags: ['Claude Code', 'Cursor AI', 'Python', 'Revit Add-in', 'ISO 19650', 'QA/QC'],
  outcomes: [
    { value: 'Automated', label: 'Repetitive QA' },
    { value: 'ISO 19650', label: 'Standards Maintained' },
    { value: '3 Tools',   label: 'Built & Deployed' },
    { value: 'Team',      label: 'Workflow Improved' },
  ],
  next: { slug: 'dynamo', title: 'Dynamo & Power BI' },
};

const tools = [
  { name: 'Cursor AI', role: 'AI-powered IDE used as the primary coding environment. Context-aware autocomplete and inline suggestions accelerated Python and C# script development.' },
  { name: 'Claude Code', role: 'Used for architecture decisions, debugging complex logic, and generating code structures for the Revit add-in and BEP extraction tooling.' },
  { name: 'ChatGPT Codex', role: 'Used for rapid prototyping of data extraction and string-matching logic, particularly for ISO 19650 naming convention parsing.' },
  { name: 'Python', role: 'Primary language for the BEP metadata extractor and document QA scripts. Libraries: PyMuPDF for PDF parsing, regex for naming convention checks.' },
  { name: 'C# / Revit API', role: 'Used for the Revit Builder\'s Work Opening (BWO) add-in. The add-in reads linked MEP models, creates and manages opening request boxes, and exports the register.' },
];

export default function CaseStudyAIQA() {
  return (
    <CaseStudyLayout meta={meta}>

      {/* STAR */}
      <CSSection eyebrow="Situation · Task · Action · Result">
        <STARGrid accent="var(--patina)" items={[
          { label: 'Situation', body: 'Team members were spending significant time manually checking project information documents — verifying ISO 19650 naming conventions, cross-referencing metadata against BEPs, and reviewing model deliverables before CDE upload. The manual process created inconsistency risk and pulled attention from higher-value coordination work.' },
          { label: 'Task',      body: 'Research and develop practical software tools to automate the most repetitive and error-prone QA checks, reducing manual effort and improving consistency across OCSC project information workflows.' },
          { label: 'Action',    body: 'Trialled AI-assisted coding workflows using Cursor AI, Claude Code, and ChatGPT Codex. Built three tools: (1) a BEP PDF metadata extractor that resolves ISO 19650 structural naming conventions, (2) a document naming convention checker, and (3) a Revit add-in for builder\'s work opening review, creation, and register export.' },
          { label: 'Result',   body: 'Repetitive QA tasks were automated. The BEP extractor is now used as a first-pass check before CDE upload. The Revit BWO add-in replaced a time-consuming manual coordination workflow. Consistent BIM information standards improved across OCSC project workflows.' },
        ]} />
      </CSSection>

      {/* Tools screenshots */}
      <CSSection eyebrow="Tools Built" title="Custom QA tooling in use" dark>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 32, marginBottom: 40 }}>
          <div>
            <CSImage
              src="/images/img-p6-1.jpeg"
              alt="OCSC Tools BWO Revit add-in and BEP Metadata Extractor"
              caption="Left: Revit BWO add-in — builder's work opening review and export workflow. Right: OCSC BEP Metadata Extractor — ISO 19650 naming convention resolver."
              wide
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div className="ks-card">
              <p className="eyebrow" style={{ color: 'var(--patina)', marginBottom: 10 }}>BEP Metadata Extractor</p>
              <p style={{ fontSize: '.9rem', lineHeight: 1.75, marginBottom: 12 }}>Drop a project BEP PDF to resolve its ISO 19650 structural naming convention. The tool parses the document, matches it against OCSC project profiles, and outputs the full structured model name — including project code, originator, volume/system, level, type, role, and number format.</p>
              <code style={{ fontFamily: 'var(--mono)', fontSize: '.75rem', color: 'var(--patina)', background: 'var(--graphite)', padding: '4px 10px', borderRadius: 2, display: 'block' }}>
                Z435-OC002-ZZ-ZZ-M3-S-035-0001
              </code>
            </div>
            <div className="ks-card">
              <p className="eyebrow" style={{ color: 'var(--patina)', marginBottom: 10 }}>Revit BWO Add-in (OCSC Tools)</p>
              <p style={{ fontSize: '.9rem', lineHeight: 1.75 }}>Creates builder's work opening request boxes from linked MEP services. The Manager tab allows review, commenting, colouring, and selection of openings. The Actual Openings tab handles as-built coordination. Results are exported to a structured register for CDE submission.</p>
            </div>
          </div>
        </div>
      </CSSection>

      {/* Workflow steps */}
      <CSSection eyebrow="AI-assisted QA Workflow" title="How the tools were built">
        <ProcessSteps steps={[
          { title: 'Define Inputs', body: 'BEPs, project information files, naming convention rules, metadata registers, and CDE deliverable logs were identified as the inputs the tools needed to process.' },
          { title: 'AI-assisted Coding Environment', body: 'Cursor AI set up as the primary IDE. Claude Code and ChatGPT Codex used for architecture decisions, code generation, and debugging. The AI tools reduced development time significantly on tasks that would previously have required specialist developer resource.' },
          { title: 'Build Custom QA Tools', body: 'Python scripts for document parsing and naming convention checking. C# Revit add-in for the BWO workflow. Each tool built around a specific pain point with direct team input on what the output needed to look like.' },
          { title: 'Team Integration', body: 'Tools introduced to the team with brief walkthroughs. Feedback incorporated to refine outputs. The BEP extractor and BWO add-in are now part of standard pre-upload review and coordination workflows across OCSC projects.' },
        ]} />
      </CSSection>

      {/* Checks supported */}
      <CSSection eyebrow="Capability" title="What the tooling supports" dark>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 1, background: 'var(--rule)', border: '1px solid var(--rule)', borderRadius: 2, overflow: 'hidden', marginBottom: 40 }}>
          {[
            { label: 'Naming Convention', body: 'ISO 19650 document and model naming checked against BEP-defined rules. Flags non-conforming files before CDE upload.' },
            { label: 'Metadata Extraction', body: 'BEP PDF parsed to extract project code, originator, volume/system, level, type, role, and number format. Eliminates manual cross-referencing.' },
            { label: 'Deliverable Consistency', body: 'Project code and profile matching ensures deliverables align with the project\'s information requirements before they reach the CDE.' },
            { label: "Builder's Work Openings", body: 'MEP clash detection and opening request management inside Revit. Review, comment, colour, select, and export to a structured opening register.' },
          ].map(({ label, body }) => (
            <div key={label} style={{ background: 'var(--lacquer-raised)', padding: '24px 28px' }}>
              <p className="eyebrow" style={{ color: 'var(--patina)', marginBottom: 10 }}>{label}</p>
              <p style={{ fontSize: '.9rem', lineHeight: 1.7 }}>{body}</p>
            </div>
          ))}
        </div>

        {/* Tools used */}
        <h3 style={{ marginBottom: 20, color: 'var(--champagne)' }}>AI tools and technologies used</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {tools.map(t => (
            <div key={t.name} style={{ display: 'flex', gap: 20, alignItems: 'flex-start', background: 'var(--lacquer-raised)', border: '1px solid var(--rule)', padding: '16px 22px', borderRadius: 2 }}>
              <span className="ks-chip" style={{ flexShrink: 0, marginTop: 2 }}>{t.name}</span>
              <p style={{ fontSize: '.9rem', lineHeight: 1.65, color: 'var(--text-muted)' }}>{t.role}</p>
            </div>
          ))}
        </div>
      </CSSection>

      {/* Portfolio pages */}
      <CSSection eyebrow="Portfolio Document" title="Case study documentation">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 12 }}>
          <CSImage src="/images/portfolio-page-5.png" alt="Case Study 2 portfolio page — AI QA workflow" caption="Portfolio documentation — AI-assisted workflow and problem/solution analysis" />
          <CSImage src="/images/portfolio-page-6.png" alt="Case Study 2 tool evidence" caption="Portfolio documentation — tool screenshots and what they demonstrate" />
        </div>
      </CSSection>

      <Footer />
    </CaseStudyLayout>
  );
}
