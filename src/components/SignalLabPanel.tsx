import { motion } from "framer-motion";
import { Bot, Lock, RadioTower, Workflow } from "lucide-react";
import { useState } from "react";

const modes = [
  {
    id: "fintech",
    label: "Fintech",
    icon: Workflow,
    title: "Bectran: LLM validation and distributed credit ops",
    summary:
      "Engineered Spring Boot and ActiveMQ systems for document validation, invoicing, and credit bureau monitoring at production scale.",
    bullets: [
      "500K+ invoices/month with idempotent retries",
      "80% less manual underwriting review",
      "P95 latency reduced from 6s to 1.3s",
    ],
    bulletLabels: ["Scale", "Efficiency", "Performance"],
    console: {
      stack: "Java + Spring Boot + AWS + Gemini + ActiveMQ",
      focus: "LLM document validation and fault-tolerant delivery",
    },
    status: "Production",
  },
  {
    id: "healthcare",
    label: "Healthcare",
    icon: Lock,
    title: "UIC: HIPAA-compliant federated research platform",
    summary:
      "Architected Django and React tooling for cross-site medical research, 3D brain visualization, and DICOM anonymization.",
    bullets: [
      "5 medical centers on one federated platform",
      "90% less manual DICOM anonymization effort",
      "40% faster researcher time-to-insight",
    ],
    bulletLabels: ["Federation", "Privacy", "UX"],
    console: {
      stack: "Django + PostgreSQL + React + NiiVue.js + GridStack.js",
      focus: "Federated queries and privacy-sensitive imaging",
    },
    status: "HIPAA-sensitive",
  },
  {
    id: "ai",
    label: "AI Projects",
    icon: Bot,
    title: "Open-source: incident RCA and RAG document intelligence",
    summary:
      "Built Node.js observability and FastAPI RAG systems with OpenAI for triage automation and semantic document Q&A.",
    bullets: [
      "60% less manual incident triage",
      "Sub-second RAG retrieval with pgvector",
      "40% fewer incorrect RAG responses",
    ],
    bulletLabels: ["Triage", "Retrieval", "Quality"],
    console: {
      stack: "Node.js + FastAPI + OpenAI + PostgreSQL (pgvector)",
      focus: "RCA automation and context-aware document search",
    },
    status: "Open source",
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
