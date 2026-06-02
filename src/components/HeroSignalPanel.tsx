import { motion, useReducedMotion } from "framer-motion";
import { Activity, BadgeCheck, BrainCircuit, Database, Sparkles } from "lucide-react";
import { transitionStagger, transitionView } from "../motionPresets";

const focusAreas = [
  { label: "LLM Pipelines", value: "80% less review", tone: "sand" },
  { label: "Invoice Scale", value: "500K+/month", tone: "teal" },
  { label: "Latency", value: "P95 6s → 1.3s", tone: "clay" },
];

const capabilities = [
  {
    icon: BrainCircuit,
    title: "LLM Systems",
    detail: "Built document validation and RAG pipelines with measurable cuts to manual review and incorrect responses.",
  },
  {
    icon: BadgeCheck,
    title: "Distributed Systems",
    detail: "Shipped fault-tolerant messaging, batch schedulers, and high-throughput integrations with idempotent retries.",
  },
  {
    icon: Database,
    title: "Production Performance",
    detail: "Diagnosed ORM bloat, added targeted indexes, and refactored hotspot queries across high-traffic workflows.",
  },
];

const telemetry = [
  { label: "Backend", value: "Java, Spring Boot, Django, FastAPI" },
  { label: "Cloud", value: "AWS, Docker, Kubernetes, ActiveMQ" },
  { label: "Data", value: "PostgreSQL, MySQL, MongoDB" },
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
          Distributed systems + LLM pipelines
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
            <span className="signal-radar__node-label">LLM</span>
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
            <span className="signal-console__value">LLM validation, fault-tolerant invoicing, and federated healthcare data platforms</span>
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
            <strong>Current Focus: LLM pipelines, latency optimization, and distributed production systems</strong>
          </div>
        </div>
    </motion.div>
  );
}
