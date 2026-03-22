import {
  Activity,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  BrainCircuit,
  BriefcaseBusiness,
  Clock3,
  Cloud,
  Code2,
  FileSearch,
  Github,
  GraduationCap,
  KeyRound,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Shield,
  Phone,
  Radar,
  ShieldCheck,
  Sparkles,
  Workflow,
  X,
} from "lucide-react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import type { ComponentType, SVGProps } from "react";
import { useEffect, useId, useRef, useState } from "react";
import type { IconType } from "react-icons";
import {
  SiDocker,
  SiDjango,
  SiGit,
  SiGooglegemini,
  SiJsonwebtokens,
  SiMongodb,
  SiNumpy,
  SiOpenai,
  SiOpenjdk,
  SiPandas,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSpringboot,
  SiTypescript,
} from "react-icons/si";
import resumePdf from "../assets/resume/Surya_Reddy_Nallamilli_Resume_Software_Engineer.pdf";
import { HeroSignalPanel } from "./components/HeroSignalPanel";
import { SignalLabPanel } from "./components/SignalLabPanel";
import { transitionStagger, transitionView } from "./motionPresets";

type Skill = {
  label: string;
  icon: IconType;
  color: string;
};

type UiIcon = ComponentType<SVGProps<SVGSVGElement>>;

type HeroMetric = {
  label: string;
  value: string;
  icon: UiIcon;
};

type Highlight = {
  title: string;
  detail: string;
  icon: UiIcon;
};

type ContactRow = {
  label: string;
  value: string;
  icon: UiIcon;
};

const skills: Skill[] = [
  { label: "Java", icon: SiOpenjdk, color: "#f89820" },
  { label: "Spring Boot", icon: SiSpringboot, color: "#6db33f" },
  { label: "Python", icon: SiPython, color: "#3776ab" },
  { label: "Django", icon: SiDjango, color: "#44b78b" },
  { label: "React", icon: SiReact, color: "#61dafb" },
  { label: "TypeScript", icon: SiTypescript, color: "#3178c6" },
  { label: "Docker", icon: SiDocker, color: "#2496ed" },
  { label: "PostgreSQL", icon: SiPostgresql, color: "#4169e1" },
  { label: "MongoDB", icon: SiMongodb, color: "#47a248" },
  { label: "JWT", icon: SiJsonwebtokens, color: "#f97316" },
  { label: "OpenAI", icon: SiOpenai, color: "#ffffff" },
  { label: "Gemini", icon: SiGooglegemini, color: "#8ab4f8" },
  { label: "Pandas", icon: SiPandas, color: "#150458" },
  { label: "NumPy", icon: SiNumpy, color: "#4dabcf" },
  { label: "Git", icon: SiGit, color: "#f05032" },
];

const heroMetrics: HeroMetric[] = [
  { label: "Current Role", value: "Software Engineer at Bectran", icon: BriefcaseBusiness },
  { label: "Based In", value: "Chicago, Illinois", icon: MapPin },
  { label: "Focus", value: "Backend, AI workflows, secure systems", icon: BrainCircuit },
  { label: "Experience", value: "3.5+ years across fintech and healthcare", icon: Clock3 },
];

const proofPoints = [
  "40k+ invoices processed in monthly production workflows",
  "90% reduction in financial-statement data entry through OCR",
  "10k+ medical images prepared for privacy-sensitive research workflows",
];

const experience = [
  {
    role: "Software Engineer",
    company: "Bectran, Inc",
    period: "June 2025 - Present",
    location: "Schaumburg, IL",
    summary:
      "Shipped AI-assisted financial workflows in Java and Spring Boot, combining LLMs, OCR, PDF generation, and batch systems for credit operations.",
    achievements: [
      "Implemented Gemini-powered fraud detection that generates validation reports with fraud scores, summaries, and follow-up actions.",
      "Engineered a Lob API mailing system for 40,000+ invoices per month with scheduled batches, S3-backed PDFs, webhook tracking, and configurable delivery frequency.",
      "Built a financial statement OCR pipeline with Gemini that cut manual data entry time by 90%.",
    ],
    focus: ["Java", "Spring Boot", "AWS", "Gemini", "Batch Processing"],
  },
  {
    role: "Full Stack Developer",
    company: "University of Illinois Chicago",
    period: "May 2024 - May 2025",
    location: "Chicago, IL",
    summary:
      "Built secure research infrastructure for confidential health data with Django, federated access patterns, custom permissions, and AWS deployment.",
    achievements: [
      "Contributed to an NIH-funded, HIPAA-compliant platform for managing and analyzing patient health data.",
      "Architected a federated system connecting 5 medical centers using JWT authentication, encrypted key exchange, and secure federated search, improving data accessibility by 70%.",
      "Automated DICOM de-identification for 10,000+ medical images with pixel-level anonymization and metadata cleansing, increasing throughput by 70%.",
    ],
    focus: ["Django", "JWT", "RBAC", "AWS", "DICOM"],
  },
  {
    role: "Software Engineer",
    company: "Cognizant Technology Solutions",
    period: "August 2021 - June 2023",
    location: "Hyderabad, India",
    summary:
      "Improved enterprise delivery speed through reusable SAP tooling, Python data pipelines, and stronger validation coverage in production workflows.",
    achievements: [
      "Created a reusable SAP framework that reduced repetitive ABAP coding by 90%.",
      "Designed large-scale Python data pipelines with Pandas and NumPy, improving data quality by 60%.",
      "Built unit and integration tests and analyzed production logs to resolve failures and improve delivery efficiency by 15%.",
    ],
    focus: ["SAP ABAP", "Python", "Pandas", "NumPy", "Testing"],
  },
];

const education = [
  {
    school: "University of Illinois Chicago",
    degree: "Master of Science in Computer Science",
    period: "August 2023 - May 2025",
    detail: "GPA: 3.89/4.0",
    note: "Coursework: Machine Learning on Graphs, NLP, Data Science, Deep Learning for Computer Vision, Big Data Mining, Distributed Systems.",
  },
  {
    school: "Amrita Vishwa Vidyapeetham",
    degree: "Bachelor of Technology in Electronics and Communication Engineering",
    period: "July 2017 - June 2021",
    detail: "GPA: 8.26/10.0",
    note: "Coursework: Data Structures and Algorithms, Database Systems, Neural Networks, Software Engineering, Cloud Computing.",
  },
];

const highlights: Highlight[] = [
  {
    title: "How I Work",
    detail: "I like backend problems tied to real operations, where reliability and clarity matter more than flashy demos.",
    icon: Workflow,
  },
  {
    title: "What Teams Get",
    detail: "Cleaner workflows, less manual effort, and systems that are easier to trust once they hit production.",
    icon: Shield,
  },
];

const featuredProject = {
  title: "AI-Powered Incident and Root Cause Analysis Platform",
  description:
    "A Django and React observability platform that turns service logs into structured, evidence-backed RCA reports with OpenAI.",
  href: "https://github.com/SURYA-REDDY18",
  stats: [
    { label: "Triage time", value: "60% less manual triage", icon: Activity },
    { label: "Report quality", value: "80% RCA accuracy", icon: ShieldCheck },
    { label: "Evaluation set", value: "25+ simulated incidents", icon: Radar },
  ],
  stack: ["Django", "React", "OpenAI", "Log Analysis", "RCA Workflows"],
};

const contactRows: ContactRow[] = [
  { label: "Status", value: "Open to software engineering opportunities", icon: BriefcaseBusiness },
  { label: "Best Fit", value: "Backend and platform roles with meaningful product or operations impact", icon: Code2 },
  { label: "Based In", value: "Chicago, Illinois", icon: MapPin },
];

const skillMap = new Map(skills.map((skill) => [skill.label, skill] as const));

const experienceTagIcons: Record<string, UiIcon | IconType> = {
  "Spring Boot": SiSpringboot,
  Django: SiDjango,
  Python: SiPython,
  Pandas: SiPandas,
  NumPy: SiNumpy,
  Gemini: SiGooglegemini,
  JWT: SiJsonwebtokens,
  AWS: Cloud,
  "Batch Processing": Workflow,
  "SAP ABAP": Code2,
  Testing: ShieldCheck,
  DICOM: FileSearch,
  RBAC: KeyRound,
  Java: SiOpenjdk,
};

function getTagVisual(tag: string): { icon: UiIcon | IconType; color?: string } {
  const matchedSkill = skillMap.get(tag);

  if (matchedSkill) {
    return { icon: matchedSkill.icon, color: matchedSkill.color };
  }

  const mappedIcon = experienceTagIcons[tag];

  if (mappedIcon) {
    return { icon: mappedIcon };
  }

  return { icon: Code2 };
}

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.06,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitionStagger,
  },
};

const NAV_SECTIONS = [
  { id: "about", label: "About" },
  { id: "impact", label: "Impact" },
  { id: "experience", label: "Experience" },
  { id: "project", label: "Project" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
] as const;

type SectionHeadingProps = {
  sectionId: string;
  index: string;
  kicker: string;
  title?: string;
  subtitle?: string;
  className?: string;
};

function SectionHeading({ sectionId, index, kicker, title, subtitle, className }: SectionHeadingProps) {
  const headingId = title ? `${sectionId}-heading` : undefined;
  return (
    <header className={className ? `section-heading ${className}` : "section-heading"}>
      <span className="section-heading__index" aria-hidden="true">
        {index}
      </span>
      <p className="section-kicker">{kicker}</p>
      {title ? (
        <h2 id={headingId} className="section-title">
          {title}
        </h2>
      ) : null}
      {subtitle ? (
        <p className="body-prose mt-4 text-lg">
          {subtitle}
        </p>
      ) : null}
    </header>
  );
}

function SkipLink() {
  return (
    <a href="#main-content" className="skip-link">
      Skip to main content
    </a>
  );
}

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 420);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#top"
      className={`back-to-top${visible ? " is-visible" : ""}`}
      aria-label="Back to top"
    >
      <ArrowUp size={20} strokeWidth={2.25} />
    </a>
  );
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const smoothScrollProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 38,
    mass: 0.15,
    restDelta: 0.0005,
  });

  return (
    <div className="min-h-screen bg-[var(--color-ink)] text-[var(--color-paper)]">
      <SkipLink />
      <motion.div className="scroll-progress" style={{ scaleX: smoothScrollProgress }} aria-hidden="true" />
      <AmbientBackground />
      <Header />
      <main id="main-content" className="relative z-[1]">
        <Hero />
        <About />
        <SignalLabSection />
        <ExperienceSection />
        <FeaturedProjectSection />
        <EducationSection />
        <ContactSection />
      </main>
      <div>
        <Footer />
      </div>
      <BackToTop />
    </div>
  );
}

function AmbientBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");

    if (!context) {
      return;
    }

    type Particle = {
      x: number;
      y: number;
      speedX: number;
      speedY: number;
      radius: number;
    };

    const particles: Particle[] = [];
    let animationFrameId = 0;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let mouseX = -9999;
    let mouseY = -9999;

    const config = {
      numberOfParticles: reduceMotion ? 48 : Math.min(140, Math.max(90, Math.floor(window.innerWidth / 14))),
      minSpeed: reduceMotion ? 0 : 0.18,
      maxSpeed: reduceMotion ? 0 : 0.48,
      maxDistance: Math.min(160, 0.055 * window.innerWidth + 0.045 * window.innerHeight),
      radiusMin: 1,
      radiusMax: 2.4,
      backgroundColor: "#071018",
      particleColor: "rgba(214, 244, 241, 0.82)",
      lineColor: "rgba(64, 201, 208, 1)",
      glowColor: "rgba(245, 184, 77, 0.9)",
      opacity: reduceMotion ? 0.12 : 0.2,
      mouseSpace: 120,
    };

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      config.maxDistance = Math.min(160, 0.055 * width + 0.045 * height);
    };

    const createParticles = () => {
      particles.length = 0;

      for (let index = 0; index < config.numberOfParticles; index += 1) {
        const speedX = Math.random() * (config.maxSpeed - config.minSpeed) + config.minSpeed;
        const speedY = Math.random() * (config.maxSpeed - config.minSpeed) + config.minSpeed;

        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          speedX: Math.random() <= 0.5 ? -speedX : speedX,
          speedY: Math.random() <= 0.5 ? -speedY : speedY,
          radius: Math.random() * (config.radiusMax - config.radiusMin) + config.radiusMin,
        });
      }
    };

    const drawBackdrop = () => {
      context.fillStyle = config.backgroundColor;
      context.fillRect(0, 0, width, height);

      const gradient = context.createRadialGradient(width * 0.72, height * 0.18, 0, width * 0.72, height * 0.18, width * 0.6);
      gradient.addColorStop(0, "rgba(27, 166, 166, 0.12)");
      gradient.addColorStop(0.45, "rgba(245, 184, 77, 0.06)");
      gradient.addColorStop(1, "rgba(7, 16, 24, 0)");
      context.fillStyle = gradient;
      context.fillRect(0, 0, width, height);
    };

    const drawConnections = () => {
      for (let index = 0; index < particles.length; index += 1) {
        const particle = particles[index];

        for (let nextIndex = index + 1; nextIndex < particles.length; nextIndex += 1) {
          const nextParticle = particles[nextIndex];
          const dx = particle.x - nextParticle.x;
          const dy = particle.y - nextParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance > config.maxDistance) {
            continue;
          }

          const alpha = (1 - distance / config.maxDistance) * config.opacity;
          context.beginPath();
          context.strokeStyle = config.lineColor;
          context.globalAlpha = alpha;
          context.lineWidth = 1;
          context.moveTo(particle.x, particle.y);
          context.lineTo(nextParticle.x, nextParticle.y);
          context.stroke();
        }
      }
    };

    const drawParticles = () => {
      for (const particle of particles) {
        context.beginPath();
        context.globalAlpha = config.opacity + 0.08;
        context.fillStyle = config.particleColor;
        context.shadowBlur = 10;
        context.shadowColor = config.glowColor;
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fill();
      }
      context.shadowBlur = 0;
    };

    const updateParticles = () => {
      for (const particle of particles) {
        if (!reduceMotion) {
          particle.x += particle.speedX;
          particle.y += particle.speedY;
        }

        if (particle.x <= 0 || particle.x >= width) {
          particle.speedX *= -1;
        }

        if (particle.y <= 0 || particle.y >= height) {
          particle.speedY *= -1;
        }

        const dx = particle.x - mouseX;
        const dy = particle.y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < config.mouseSpace && distance > 0) {
          const force = (config.mouseSpace - distance) / config.mouseSpace;
          particle.x += (dx / distance) * force * 1.4;
          particle.y += (dy / distance) * force * 1.4;
        }
      }
    };

    const renderFrame = () => {
      drawBackdrop();
      drawConnections();
      drawParticles();
      context.globalAlpha = 1;

      if (!reduceMotion) {
        updateParticles();
        animationFrameId = window.requestAnimationFrame(renderFrame);
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    const handlePointerLeave = () => {
      mouseX = -9999;
      mouseY = -9999;
    };

    const handleResize = () => {
      resizeCanvas();
      createParticles();
      renderFrame();
    };

    resizeCanvas();
    createParticles();
    renderFrame();

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerleave", handlePointerLeave);
    window.addEventListener("resize", handleResize);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, [reduceMotion]);

  return (
    <div aria-hidden="true" className="ambient-scene pointer-events-none fixed inset-0 overflow-hidden">
      <div className="ambient-scene__base" />
      <canvas ref={canvasRef} className="ambient-canvas" />
      <div className="ambient-mesh ambient-mesh--left" />
      <div className="ambient-mesh ambient-mesh--right" />
      <div className="ambient-glow ambient-glow--top" />
      <div className="ambient-glow ambient-glow--bottom" />
      <div className="ambient-scene__vignette" />
      <div className="ambient-noise-field" />
    </div>
  );
}

function Header() {
  const [activeSection, setActiveSection] = useState("about");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const mobileNavId = useId();

  useEffect(() => {
    if (!mobileNavOpen) {
      return;
    }
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileNavOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [mobileNavOpen]);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const closeOnWide = () => {
      if (media.matches) {
        setMobileNavOpen(false);
      }
    };
    media.addEventListener("change", closeOnWide);
    return () => media.removeEventListener("change", closeOnWide);
  }, []);

  useEffect(() => {
    const closeMenu = () => setMobileNavOpen(false);
    window.addEventListener("hashchange", closeMenu);
    return () => window.removeEventListener("hashchange", closeMenu);
  }, []);

  useEffect(() => {
    const sectionElements = NAV_SECTIONS.map((section) => document.getElementById(section.id)).filter(
      (element): element is HTMLElement => element !== null,
    );

    if (sectionElements.length === 0) {
      return;
    }

    let rafId = 0;

    const updateActiveSection = () => {
      const headerOffset = 120;
      const probeLine = window.scrollY + headerOffset + window.innerHeight * 0.22;
      const currentSection =
        [...sectionElements]
          .reverse()
          .find((element) => element.offsetTop <= probeLine) ?? sectionElements[0];

      if (currentSection?.id) {
        setActiveSection(currentSection.id);
      }
    };

    const scheduleUpdate = () => {
      if (rafId !== 0) {
        return;
      }
      rafId = requestAnimationFrame(() => {
        rafId = 0;
        updateActiveSection();
      });
    };

    updateActiveSection();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      if (rafId !== 0) {
        cancelAnimationFrame(rafId);
      }
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(15,23,31,0.68)] backdrop-blur-xl">
      <div className="site-header mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-10">
        <a href="#top" className="font-display text-lg uppercase tracking-[0.32em] text-[var(--color-sand)]">
          Surya
        </a>
        <nav className="hidden items-center gap-2 text-sm md:flex" aria-label="Primary">
          {NAV_SECTIONS.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`nav-pill${activeSection === section.id ? " is-active" : ""}`}
            >
              {section.label}
            </a>
          ))}
        </nav>
        <div className="site-header__actions flex items-center gap-2">
          <a href={resumePdf} target="_blank" rel="noreferrer" className="header-status">
            <span className="h-2 w-2 rounded-full bg-[var(--color-teal)] shadow-[0_0_12px_rgba(10,147,150,0.95)]" />
            Resume
          </a>
          <button
            type="button"
            className={`mobile-menu-button inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/5 text-white md:hidden${mobileNavOpen ? " is-open" : ""}`}
            aria-expanded={mobileNavOpen}
            aria-controls={mobileNavId}
            aria-label={mobileNavOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileNavOpen((open) => !open)}
          >
            {mobileNavOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      <div className={`mobile-nav-shell md:hidden${mobileNavOpen ? " is-open" : ""}`} hidden={!mobileNavOpen}>
        <div
          className="mobile-nav-backdrop"
          aria-hidden="true"
          onClick={() => setMobileNavOpen(false)}
        />
        <div
          id={mobileNavId}
          className="mobile-nav"
          role="dialog"
          aria-modal="true"
          aria-label="Site sections"
        >
          <nav aria-label="Mobile primary">
            {NAV_SECTIONS.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`mobile-nav__link${activeSection === section.id ? " is-active" : ""}`}
                onClick={() => setMobileNavOpen(false)}
              >
                {section.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const floatYRaw = useTransform(scrollY, [0, 500], [0, reduceMotion ? 0 : 24]);
  const floatY = useSpring(floatYRaw, {
    stiffness: 100,
    damping: 40,
    mass: 0.2,
  });

  return (
    <section id="top" className="relative overflow-hidden px-6 pb-20 pt-14 lg:px-10 lg:pb-28 lg:pt-20">
      <motion.div
        className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.04fr_0.96fr] lg:items-start"
        variants={container}
        initial={false}
        animate="visible"
      >
        <motion.div variants={item} className="space-y-8">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
            <Sparkles size={16} className="text-[var(--color-sand)]" />
            Hi, I'm Surya Reddy
          </div>

          <div className="space-y-6">
            <p className="max-w-xl text-sm uppercase tracking-[0.3em] text-[var(--color-clay)]">
              Full Stack Developer working across fintech and healthcare
            </p>
            <h1 className="max-w-4xl font-display text-5xl leading-[0.92] tracking-[-0.04em] text-white sm:text-6xl lg:text-8xl">
              I build software that makes complex workflows simpler and more reliable.
            </h1>
            <p className="body-prose max-w-2xl text-lg">
              3.5+ years of experience building backend workflows, document pipelines, and product systems used by real teams.
            </p>
          </div>

          <div className="hero-metric-grid">
            {heroMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                className="hero-metric-card"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, ...transitionStagger }}
              >
                <div className="hero-metric-card__icon">
                  <metric.icon width={16} height={16} aria-hidden="true" />
                </div>
                <span>{metric.label}</span>
                <strong>{metric.value}</strong>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <a href="#experience" className="cta-primary">
              View Experience
              <ArrowRight size={16} />
            </a>
            <a href={resumePdf} target="_blank" rel="noreferrer" className="cta-secondary">
              Open Resume
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/SURYA-REDDY18" target="_blank" rel="noreferrer" className="social-chip">
              <Github size={16} />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/surya-nallamilli/" target="_blank" rel="noreferrer" className="social-chip">
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a href="mailto:nallamillisuryareddy18@gmail.com" className="social-chip">
              <Mail size={16} />
              Email
            </a>
          </div>
        </motion.div>

        <motion.div variants={item} className="relative" style={{ y: floatY }}>
          <div className="absolute inset-0 translate-x-6 translate-y-6 rounded-[2rem] border border-white/10 bg-[linear-gradient(160deg,rgba(255,255,255,0.08),rgba(255,255,255,0.01))]" />
          <div className="relative space-y-5 overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(160deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))] p-5 shadow-[0_30px_120px_rgba(0,0,0,0.35)]">
            <HeroSignalPanel />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="px-6 py-24 lg:px-10" aria-labelledby="about-heading">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.78fr_1.22fr]">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={transitionView}
        >
          <SectionHeading
            sectionId="about"
            index="01"
            kicker="About"
            title="How I Approach Work"
            subtitle="This section is less about what I build and more about how I think about useful software in production."
          />
          <div className="feature-rail">
            <div className="feature-rail__line" />
            <div className="feature-rail__items">
              {proofPoints.map((point) => (
                <div key={point} className="feature-rail__item">
                  <ShieldCheck size={18} />
                  {point}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="about-panel"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ ...transitionView, delay: 0.08 }}
        >
          <div className="about-grid">
            {highlights.map((highlight) => (
              <div key={highlight.title} className="about-card">
                <div className="about-card__icon">
                  <highlight.icon width={18} height={18} aria-hidden="true" />
                </div>
                <p className="about-card__kicker">{highlight.title}</p>
                <p className="about-card__body">{highlight.detail}</p>
              </div>
            ))}
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
            <p className="text-sm uppercase tracking-[0.26em] text-[var(--color-clay)]">Core Stack</p>
            <div className="mt-5 flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill.label}
                  className="stack-pill"
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index % 8) * 0.04, ...transitionStagger }}
                >
                  <skill.icon size={16} style={{ color: skill.color }} aria-hidden="true" />
                  {skill.label}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SignalLabSection() {
  return (
    <section id="impact" className="px-6 py-24 lg:px-10" aria-labelledby="impact-heading">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.78fr_1.22fr]">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={transitionView}
        >
          <SectionHeading
            sectionId="impact"
            index="02"
            kicker="Impact"
            title="What I Shipped."
            subtitle="Short snapshots from different environments, each with one clear problem and one clear result."
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ ...transitionView, delay: 0.08 }}
        >
          <SignalLabPanel />
        </motion.div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section id="experience" className="px-6 py-24 lg:px-10" aria-labelledby="experience-heading">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            sectionId="experience"
            index="03"
            kicker="Experience"
            title="Experience Across Real Systems."
            className="max-w-4xl"
          />
          <div className="inline-flex shrink-0 items-center gap-2 text-sm text-[var(--color-text-soft)]">
            <MapPin size={15} aria-hidden="true" />
            Chicago, IL
          </div>
        </div>
        <div className="experience-timeline mt-12">
          {experience.map((entry, index) => (
            <motion.article
              key={`${entry.company}-${entry.period}`}
              className="experience-card"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.22 }}
              transition={{ ...transitionView, delay: index * 0.08, duration: 0.72 }}
            >
              <div className="experience-card__rail">
                <div className="experience-card__node">
                  <BriefcaseBusiness size={18} />
                </div>
              </div>
              <div className="experience-card__content">
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.22em] text-[var(--color-clay)]">{entry.period}</p>
                    <h3 className="mt-3 text-2xl font-semibold text-white">{entry.role}</h3>
                  </div>
                  <div className="experience-company-pill">
                    <span>{entry.company}</span>
                    <strong>{entry.location}</strong>
                  </div>
                </div>
                <p className="body-prose body-prose--wide mt-4 text-base">{entry.summary}</p>
                <ul className="experience-bullets">
                  {entry.achievements.map((achievement) => (
                    <li key={achievement}>{achievement}</li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-3">
                  {entry.focus.map((tag) => {
                    const visual = getTagVisual(tag);
                    const TagIcon = visual.icon;
                    return (
                    <span key={tag} className="experience-tag">
                      <TagIcon size={15} style={visual.color ? { color: visual.color } : undefined} aria-hidden="true" />
                      {tag}
                    </span>
                    );
                  })}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedProjectSection() {
  return (
    <section id="project" className="px-6 py-24 lg:px-10" aria-labelledby="project-heading">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          sectionId="project"
          index="04"
          kicker="Featured Project"
          title="Open-source highlight"
          subtitle="A deeper look at one AI-focused project instead of another role summary."
        />
        <motion.a
          href={featuredProject.href}
          target="_blank"
          rel="noreferrer"
          className="featured-project"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.22 }}
          transition={transitionView}
          whileHover={{ y: -6, transition: { duration: 0.35, ease: transitionView.ease } }}
        >
          <div className="featured-project__media">
            <div className="featured-project__visual">
              <div className="featured-project__art">
                <div className="featured-project__rings">
                  <div className="featured-project__ring featured-project__ring--outer" />
                  <div className="featured-project__ring featured-project__ring--middle" />
                  <div className="featured-project__ring featured-project__ring--inner" />
                  <div className="featured-project__beam" />
                  <div className="featured-project__core">
                    <Radar size={24} />
                    <span>RCA</span>
                  </div>
                </div>
                <div className="featured-project__floating featured-project__floating--top">
                  <span>Incident Signal</span>
                  <strong>payments-api retry spike</strong>
                </div>
                <div className="featured-project__floating featured-project__floating--bottom">
                  <ShieldCheck size={16} />
                  <div>
                    <span>Structured Output</span>
                    <strong>Evidence-backed remediation</strong>
                  </div>
                </div>
                <div className="featured-project__glow featured-project__glow--teal" />
                <div className="featured-project__glow featured-project__glow--sand" />
              </div>
            </div>
          </div>
          <div className="featured-project__content">
            <p className="text-sm uppercase tracking-[0.24em] text-[var(--color-clay)]">Django + React + OpenAI</p>
            <div className="mt-3 flex items-start justify-between gap-4">
              <h3 className="font-display text-4xl leading-tight text-white">{featuredProject.title}</h3>
              <ArrowUpRight size={20} className="mt-2 shrink-0 text-[var(--color-text-muted)]" aria-hidden="true" />
            </div>
            <p className="body-prose body-prose--wide mt-5 text-lg">{featuredProject.description}</p>
            <div className="featured-project__stats">
              {featuredProject.stats.map((stat) => (
                <div key={stat.label} className="featured-project__stat">
                  <div className="featured-project__stat-icon">
                    <stat.icon width={16} height={16} aria-hidden="true" />
                  </div>
                  <span>{stat.label}</span>
                  <strong>{stat.value}</strong>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {featuredProject.stack.map((item) => {
                const visual = getTagVisual(item);
                const TagIcon = visual.icon;
                return (
                  <span key={item} className="stack-pill">
                    <TagIcon size={16} style={visual.color ? { color: visual.color } : undefined} aria-hidden="true" />
                    {item}
                  </span>
                );
              })}
            </div>
          </div>
        </motion.a>
      </div>
    </section>
  );
}

function EducationSection() {
  return (
    <section id="education" className="px-6 py-24 lg:px-10" aria-labelledby="education-heading">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          sectionId="education"
          index="05"
          kicker="Education"
          title="Degrees & coursework"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {education.map((entry, index) => (
            <motion.article
              key={entry.school}
              className="education-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.22 }}
              transition={{ ...transitionView, delay: index * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.35, ease: transitionView.ease } }}
            >
              <div className="education-card__badge">
                <GraduationCap size={18} />
              </div>
              <p className="text-sm uppercase tracking-[0.22em] text-[var(--color-clay)]">{entry.period}</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">{entry.degree}</h3>
              <p className="mt-2 text-base text-[var(--color-sand)]">{entry.school}</p>
              <p className="body-prose mt-4 text-base">{entry.note}</p>
              <p className="mt-5 inline-flex rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-white/76">
                {entry.detail}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="px-6 py-24 lg:px-10" aria-labelledby="contact-heading">
      <div className="contact-panel mx-auto grid max-w-7xl gap-8 rounded-[2.5rem] border border-white/10 bg-[linear-gradient(135deg,rgba(238,155,0,0.14),rgba(10,147,150,0.12),rgba(255,255,255,0.04))] p-8 md:grid-cols-[1.05fr_0.95fr] md:p-10">
        <motion.div
          className="space-y-5"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={transitionView}
        >
          <SectionHeading
            sectionId="contact"
            index="06"
            kicker="Contact"
            title="Let’s Connect"
            subtitle="If you are hiring for backend or platform work, this is the fastest way to reach me."
            className="max-w-2xl"
          />
          <div className="contact-console">
            {contactRows.map((row) => (
              <div key={row.label} className="contact-console__row">
                <div className="contact-console__row-icon">
                  <row.icon width={17} height={17} aria-hidden="true" />
                </div>
                <div>
                  <span>{row.label}</span>
                  <strong>{row.value}</strong>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="contact-links-panel space-y-4 rounded-[2rem] border border-white/10 bg-[rgba(7,11,15,0.52)] p-6 backdrop-blur-sm"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ ...transitionView, delay: 0.08 }}
        >
          <a href="mailto:nallamillisuryareddy18@gmail.com" className="contact-link">
            <Mail size={18} />
            <span className="contact-link__text">nallamillisuryareddy18@gmail.com</span>
          </a>
          <a href="tel:+13125457413" className="contact-link">
            <Phone size={18} />
            <span className="contact-link__text">312-545-7413</span>
          </a>
          <a href="https://github.com/SURYA-REDDY18" target="_blank" rel="noreferrer" className="contact-link">
            <Github size={18} />
            <span className="contact-link__text">github.com/SURYA-REDDY18</span>
          </a>
          <a href="https://www.linkedin.com/in/surya-nallamilli/" target="_blank" rel="noreferrer" className="contact-link">
            <Linkedin size={18} />
            <span className="contact-link__text">linkedin.com/in/surya-nallamilli</span>
          </a>
          <p className="contact-link">
            <MapPin size={18} />
            <span className="contact-link__text">Chicago, Illinois</span>
          </p>
          <a href={resumePdf} target="_blank" rel="noreferrer" className="cta-secondary mt-4 w-full justify-center">
            View Resume
            <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-6 pb-10 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/52 md:flex-row md:items-center md:justify-between">
        <p>Surya Reddy Nallamilli © 2026</p>
        <div className="flex items-center gap-4">
          <a href="https://github.com/SURYA-REDDY18" target="_blank" rel="noreferrer" className="footer-link">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/surya-nallamilli/" target="_blank" rel="noreferrer" className="footer-link">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
