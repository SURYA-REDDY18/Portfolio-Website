import { motion } from "framer-motion";
import { Bot, Lock, RadioTower, Workflow } from "lucide-react";
import { useState } from "react";

const modes = [
  {
    id: "fintech",
    label: "Fintech",
    icon: Workflow,
    title: "Bectran: document-heavy financial automation",
    summary:
      "Built Spring Boot workflows for credit operations using OCR, PDFs, batch jobs, and third-party APIs.",
    bullets: [
      "40k+ invoices mailed monthly",
      "90% less manual financial-statement entry",
      "70% less W-9 form entry work",
    ],
    bulletLabels: ["Scale", "Efficiency", "Automation"],
    console: {
      stack: "Java + Spring Boot + AWS + Gemini + Lob",
      focus: "Fraud validation and document workflows",
    },
    status: "Production",
  },
  {
    id: "healthcare",
    label: "Healthcare",
    icon: Lock,
    title: "UIC: HIPAA-compliant federated research platform",
    summary:
      "Built secure patient-data workflows for research teams across institutions with privacy and access control built in.",
    bullets: [
      "5 medical centers connected",
      "10k+ DICOM images de-identified",
      "70% better cross-site data access",
    ],
    bulletLabels: ["Federation", "Data Volume", "Access"],
    console: {
      stack: "Django + JWT + RBAC + AWS + DICOM tooling",
      focus: "Secure federation and patient-data privacy",
    },
    status: "HIPAA-sensitive",
  },
  {
    id: "ai",
    label: "AI Project",
    icon: Bot,
    title: "Featured project: root cause analysis platform",
    summary:
      "Built an OpenAI-powered observability project that turns grouped service failures into structured RCA reports.",
    bullets: [
      "60% less manual incident triage",
      "80% RCA accuracy",
      "25+ simulated incidents evaluated",
    ],
    bulletLabels: ["Triage", "Accuracy", "Evaluation"],
    console: {
      stack: "Django + React + OpenAI + log analysis",
      focus: "Incident grouping and report generation",
    },
    status: "Featured project",
  },
];

export function SignalLabPanel() {
  const [activeMode, setActiveMode] = useState(modes[0]);

  return (
    <div className="signal-lab">
      <div className="signal-lab__tabs" role="tablist" aria-label="Work domain snapshots">
        {modes.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            type="button"
            role="tab"
            id={`signal-tab-${id}`}
            aria-selected={activeMode.id === id}
            aria-controls={`signal-panel-${id}`}
            className={`signal-lab__tab${activeMode.id === id ? " is-active" : ""}`}
            onClick={() => setActiveMode(modes.find((mode) => mode.id === id) ?? modes[0])}
          >
            <Icon size={16} aria-hidden="true" />
            {label}
          </button>
        ))}
      </div>

      <motion.div
        key={activeMode.id}
        id={`signal-panel-${activeMode.id}`}
        role="tabpanel"
        aria-labelledby={`signal-tab-${activeMode.id}`}
        className="signal-lab__panel"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        <div className="signal-lab__header">
          <div>
            <p className="signal-lab__eyebrow">Selected Snapshot</p>
            <h3>{activeMode.title}</h3>
          </div>
          <div className="signal-lab__badge">
            <RadioTower size={14} />
            {activeMode.status}
          </div>
        </div>

        <p className="signal-lab__summary body-prose">{activeMode.summary}</p>

        <div className="signal-lab__metrics">
          {activeMode.bullets.map((item, index) => (
            <motion.div
              key={item}
              className="signal-lab__metric"
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.06 * index, duration: 0.28 }}
            >
              <span>{activeMode.bulletLabels[index]}</span>
              <strong>{item}</strong>
            </motion.div>
          ))}
        </div>

        <div className="signal-lab__console">
          <div className="signal-lab__console-row">
            <span>$ stack</span>
            <strong>{activeMode.console.stack}</strong>
          </div>
          <div className="signal-lab__console-row">
            <span>$ focus</span>
            <strong>{activeMode.console.focus}</strong>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
