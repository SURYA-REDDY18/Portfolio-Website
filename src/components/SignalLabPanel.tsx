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
      "Built Spring Boot services that combine LLMs, PDFs, batch schedules, and third-party APIs for credit operations.",
    bullets: [
      "40k+ invoices mailed monthly",
      "90% reduction in financial statement data entry",
      "70% reduction in W-9 form entry",
    ],
    console: {
      stack: "Java + Spring Boot + AWS + Gemini + Lob",
      priority: "fraud validation and document workflows",
    },
    status: "live",
  },
  {
    id: "healthcare",
    label: "Healthcare",
    icon: Lock,
    title: "UIC: HIPAA-compliant federated research platform",
    summary:
      "Designed secure data workflows for patient research across institutions with strong access controls and privacy-preserving processing.",
    bullets: [
      "5 medical centers connected",
      "10k+ DICOM images de-identified",
      "70% better cross-site accessibility and throughput",
    ],
    console: {
      stack: "Django + JWT + RBAC + AWS + DICOM tooling",
      priority: "secure federation and data privacy",
    },
    status: "secure",
  },
  {
    id: "ai",
    label: "AI Product",
    icon: Bot,
    title: "Root cause analysis platform",
    summary:
      "Used OpenAI in an observability workflow to turn grouped service failures into structured, evidence-backed RCA reports.",
    bullets: [
      "60% less manual incident triage",
      "80% RCA accuracy",
      "25+ simulated incidents evaluated",
    ],
    console: {
      stack: "Django + React + OpenAI + log analysis",
      priority: "incident grouping and report generation",
    },
    status: "active",
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
              <span>Highlight {index + 1}</span>
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
            <span>$ priority</span>
            <strong>{activeMode.console.priority}</strong>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
