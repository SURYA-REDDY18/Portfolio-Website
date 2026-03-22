import { motion, useReducedMotion } from "framer-motion";
import { Activity, BadgeCheck, BrainCircuit, Database, Sparkles } from "lucide-react";
import { transitionStagger, transitionView } from "../motionPresets";

const focusAreas = [
  { label: "Fraud Checks", value: "Gemini", tone: "sand" },
  { label: "Invoice Volume", value: "40k+/month", tone: "teal" },
  { label: "Healthcare Work", value: "HIPAA-sensitive", tone: "clay" },
];

const capabilities = [
  {
    icon: BrainCircuit,
    title: "Practical AI",
    detail: "Used LLMs for fraud checks, OCR extraction, and RCA reporting where they improved real workflows.",
  },
  {
    icon: BadgeCheck,
    title: "Secure Systems",
    detail: "Built with JWT, RBAC, and privacy-aware data handling for finance and healthcare use cases.",
  },
  {
    icon: Database,
    title: "Production Delivery",
    detail: "Shipped batch jobs, document workflows, and backend services designed for reliability at scale.",
  },
];

const telemetry = [
  { label: "Backend", value: "Java, Spring Boot, Django" },
  { label: "Cloud", value: "AWS, Docker" },
  { label: "Data", value: "PostgreSQL, MongoDB" },
];

export function HeroSignalPanel() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="signal-panel min-h-[28rem] rounded-[1.5rem] sm:min-h-[34rem]"
      animate={{
        rotateX: 0,
        rotateY: 0,
        x: 0,
        y: 0,
      }}
      whileHover={reduceMotion ? undefined : { y: -4, transition: { duration: 0.4, ease: transitionView.ease } }}
      transition={{ duration: 0.4, ease: transitionView.ease }}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="signal-panel__noise" />
      <div className="signal-panel__orb signal-panel__orb--teal" />
      <div className="signal-panel__orb signal-panel__orb--sand" />

      <div className="signal-panel__header">
        <div className="signal-panel__eyebrow">
          <Sparkles size={15} />
          Engineering Signal
        </div>
        <div className="signal-panel__status">
          <span className="signal-panel__status-dot" />
          Fintech + healthcare + AI
        </div>
      </div>

      <div className="signal-panel__center">
        <div className="signal-radar">
          <div className="signal-radar__crosshair signal-radar__crosshair--horizontal" />
          <div className="signal-radar__crosshair signal-radar__crosshair--vertical" />
          <div className="signal-radar__ring signal-radar__ring--outer" />
          <div className="signal-radar__ring signal-radar__ring--middle" />
          <div className="signal-radar__ring signal-radar__ring--inner" />
          <div className="signal-radar__sector signal-radar__sector--north" />
          <div className="signal-radar__sector signal-radar__sector--east" />
          <div className="signal-radar__sector signal-radar__sector--south" />
          <div className="signal-radar__sector signal-radar__sector--west" />
          <motion.div
            className="signal-radar__beam"
            animate={reduceMotion ? undefined : { rotate: [0, 360] }}
            transition={
              reduceMotion
                ? undefined
                : { repeat: Number.POSITIVE_INFINITY, duration: 14, ease: "linear" }
            }
          />
          <div className="signal-radar__node signal-radar__node--top">
            <span className="signal-radar__node-label">OCR</span>
            <strong>Docs</strong>
          </div>
          <div className="signal-radar__node signal-radar__node--right">
            <span className="signal-radar__node-label">AI</span>
            <strong>Checks</strong>
          </div>
          <div className="signal-radar__node signal-radar__node--bottom">
            <span className="signal-radar__node-label">Batch</span>
            <strong>Jobs</strong>
          </div>
          <div className="signal-radar__node signal-radar__node--left">
            <span className="signal-radar__node-label">Auth</span>
            <strong>Access</strong>
          </div>
          <div className="signal-radar__core">
            <Activity size={22} />
            <span>Production Flow</span>
          </div>
        </div>

        <div className="signal-stack">
          {focusAreas.map((item, index) => (
            <motion.div
              key={item.label}
              className={`signal-chip signal-chip--${item.tone}`}
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 + index * 0.12, ...transitionStagger }}
            >
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="signal-capability-grid">
        {capabilities.map(({ icon: Icon, title, detail }, index) => (
          <motion.article
            key={title}
            className="signal-card"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.12, ...transitionView }}
          >
            <div className="signal-card__icon">
              <Icon size={18} />
            </div>
            <div>
              <p className="signal-card__title">{title}</p>
              <p className="signal-card__detail">{detail}</p>
            </div>
          </motion.article>
        ))}
      </div>

        <div className="signal-console">
          <div className="signal-console__row">
            <span className="signal-console__prompt">$ current_mode</span>
            <span className="signal-console__value">document workflows, fraud checks, and privacy-sensitive data pipelines</span>
          </div>
          <div className="signal-console__row">
            <span className="signal-console__prompt">$ engineering_style</span>
            <span className="signal-console__value">measure impact, simplify the workflow, and ship something dependable</span>
          </div>
        </div>

        <div className="signal-telemetry">
          {telemetry.map(({ label, value }) => (
            <div key={label} className="signal-telemetry__item">
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
          <div className="signal-telemetry__item signal-telemetry__item--accent">
            <Database size={16} />
            <strong>Current Focus: fraud checks, document automation, and secure data workflows</strong>
          </div>
        </div>
    </motion.div>
  );
}
