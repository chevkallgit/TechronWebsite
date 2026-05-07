import React, { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { COMPANY } from "../lib/constants.ts";

const WEB3FORMS_KEY = "cb704a9f-04ef-4258-9c39-f3a9d1b05f99";

type FormState = {
  name: string;
  email: string;
  message: string;
  website?: string;
};

/* ─── Animated background paths ───────────────────────────────────────────── */
function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    width: 0.5 + i * 0.03,
  }));

  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
      <svg style={{ width: "100%", height: "100%" }} viewBox="0 0 696 316" fill="none">
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="#6aa6ff"
            strokeWidth={path.width}
            strokeOpacity={0.04 + path.id * 0.011}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 6,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

/* ─── Hero floating card data ──────────────────────────────────────────────── */
const SERVICES_MINI = [
  { icon: "🌐", title: "Website Design" },
  { icon: "⚡", title: "Optimization" },
  { icon: "🤖", title: "Integrations" },
  { icon: "🔧", title: "Software Support" },
  { icon: "🛡️", title: "Maintenance" },
  { icon: "💡", title: "Tech Consulting" },
];

const FLOAT_CONFIG = [
  { delay: 0.0,  duration: 3.6, distance: -10 },
  { delay: 0.7,  duration: 4.2, distance: -14 },
  { delay: 1.4,  duration: 3.8, distance:  -8 },
  { delay: 0.35, duration: 4.5, distance: -12 },
  { delay: 1.05, duration: 3.3, distance: -16 },
  { delay: 1.75, duration: 4.0, distance:  -9 },
];

/* ─── Floating mini-card ───────────────────────────────────────────────────── */
// Repel tuning — adjust these to taste:
const REPEL_RADIUS = 300;  // px — how close the cursor needs to be to trigger
const REPEL_STRENGTH = 400; // px — max distance the card gets pushed away

function FloatingCard({
  icon,
  title,
  index,
}: {
  icon: string;
  title: string;
  index: number;
}) {
  const cfg = FLOAT_CONFIG[index];
  const cardRef = useRef<HTMLDivElement>(null);

  // Spring physics — stiffness = snappiness, damping = how quickly it settles
  const repelX = useMotionValue(0);
  const repelY = useMotionValue(0);
  const springX = useSpring(repelX, { stiffness: 180, damping: 20 });
  const springY = useSpring(repelY, { stiffness: 180, damping: 20 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < REPEL_RADIUS && dist > 0) {
        const force = (1 - dist / REPEL_RADIUS) * REPEL_STRENGTH;
        repelX.set((-dx / dist) * force);
        repelY.set((-dy / dist) * force);
      } else {
        repelX.set(0);
        repelY.set(0);
      }
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [repelX, repelY]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, scale: 0.82 }}
      animate={{ opacity: 1, scale: 1 }}
      style={{ x: springX, y: springY }}
      transition={{ delay: 0.65 + index * 0.11, duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
    >
      <motion.div
        className="mini-card"
        animate={{ y: [0, cfg.distance, 0] }}
        transition={{
          delay: cfg.delay,
          duration: cfg.duration,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      >
        <div className="mini-card-dot" />
        <div className="mini-card-icon">{icon}</div>
        <div className="mini-card-title">{title}</div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Animation variants ───────────────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

/* ─── Title words ──────────────────────────────────────────────────────────── */
const TITLE_PLAIN = ["Modern", "software", "solutions", "for"];
const TITLE_GRADIENT = "Real Businesses";

/* ─── Page component ───────────────────────────────────────────────────────── */
export default function HomePage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
    website: "",
  });

  const [status, setStatus] = useState<
    | { type: "idle" }
    | { type: "sending" }
    | { type: "success"; msg: string }
    | { type: "error"; msg: string }
  >({ type: "idle" });

  const onChange =
    (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((p) => ({ ...p, [key]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (form.website && form.website.trim().length > 0) {
      setStatus({ type: "success", msg: "Thanks! We'll be in touch soon." });
      return;
    }
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({ type: "error", msg: "Please fill out all fields." });
      return;
    }

    setStatus({ type: "sending" });
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: form.name,
          email: form.email,
          message: form.message,
          subject: "New inquiry from TechronSite",
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus({
          type: "success",
          msg: "Message sent! We'll get back to you within 1 business day.",
        });
        setForm({ name: "", email: "", message: "", website: "" });
      } else {
        setStatus({ type: "error", msg: "Something went wrong. Please email us directly." });
      }
    } catch {
      setStatus({ type: "error", msg: "Network error. Please email us directly." });
    }
  };

  return (
    <>
      <title>Techron Solutions — Web & Tech Support in Medicine Hat, AB</title>
      <meta
        name="description"
        content="Techron Solutions helps small businesses in Medicine Hat with website design, performance fixes, and practical tech support. Fast turnaround, clear pricing."
      />
      <meta property="og:url" content="https://techronsolutions.ca/" />
      <meta property="og:title" content="Techron Solutions — Web & Tech Support in Medicine Hat, AB" />
      <meta
        property="og:description"
        content="Modern software solutions for real businesses. Based in Medicine Hat, AB."
      />

      {/* ── HERO ────────────────────────────────────────────────────────────── */}
      <section className="hero" aria-label="Hero">
        {/* Animated background */}
        <div className="hero-bg" aria-hidden="true">
          <FloatingPaths position={1} />
          <FloatingPaths position={-1} />
          <div className="hero-grid" />
          <motion.div
            className="hero-orb-1"
            animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="hero-orb-2"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.85, 0.5] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
          <motion.div
            className="hero-orb-3"
            animate={{ scale: [1, 1.12, 1], opacity: [0.4, 0.72, 0.4] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </div>

        <div className="container hero-inner">
          {/* ── Copy ── */}
          <div className="hero-copy">
            {/* Eyebrow */}
            <motion.div
              className="hero-eyebrow"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <span>📍</span> Medicine Hat, AB
            </motion.div>

            {/* Word-by-word title */}
            <h1 className="hero-title" aria-label={`Modern software solutions for ${TITLE_GRADIENT}`}>
              {TITLE_PLAIN.map((word, i) => (
                <motion.span
                  key={i}
                  style={{ display: "inline-block", marginRight: "0.28em" }}
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.08 + i * 0.07,
                    duration: 0.42,
                    ease: [0.23, 1, 0.32, 1],
                  }}
                >
                  {word}
                </motion.span>
              ))}
              <motion.span
                className="gradient-text"
                style={{ display: "inline-block" }}
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.08 + TITLE_PLAIN.length * 0.07,
                  duration: 0.42,
                  ease: [0.23, 1, 0.32, 1],
                }}
              >
                {TITLE_GRADIENT}
              </motion.span>
            </h1>

            {/* About */}
            <motion.p
              className="about-inline"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.62, duration: 0.45 }}
              style={{ color: "var(--muted)", maxWidth: "60ch", marginTop: 4 }}
            >
              We help small businesses with website refreshes,
              performance fixes, and practical tech support. Clear answers, fair pricing, and
              someone local who actually picks up the phone.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="hero-cta"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.74, duration: 0.45 }}
            >
              <a href="#contact" className="btn btn-lg">Get a Free Consult</a>
              <a href="/services" className="btn btn-ghost btn-lg">View Services →</a>
            </motion.div>

            {/* Trust badges */}
            <motion.ul
              className="trust"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.84, duration: 0.45 }}
            >
              {["Fast turnaround", "Clear pricing", "Local & reliable"].map((t) => (
                <li key={t}>
                  <span className="trust-dot" />
                  {t}
                </li>
              ))}
            </motion.ul>
          </div>

          {/* ── Floating service cards ── */}
          <div className="hero-visual" aria-hidden="true">
            {SERVICES_MINI.map((s, i) => (
              <FloatingCard key={s.title} icon={s.icon} title={s.title} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ─────────────────────────────────────────────────────────── */}
      <section id="contact" className="section alt">
        <div className="container">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45 }}
          >
            <div className="section-label">Get in touch</div>
            <h2>Let's work together</h2>
          </motion.div>

          <div className="contact" style={{ marginTop: 44 }}>
            {/* Contact info */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.1 }}
            >
              <p style={{ color: "var(--muted)", marginBottom: 32, fontSize: "1rem" }}>
                Tell us what you need and we'll get back within 1 business day.
              </p>

              <div className="contact-info-item">
                <div className="contact-icon">📧</div>
                <div>
                  <div style={{ fontSize: "0.78rem", color: "var(--muted)", marginBottom: 3 }}>Email</div>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    style={{ color: "var(--text)", fontWeight: 500 }}
                  >
                    {COMPANY.email}
                  </a>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon">📞</div>
                <div>
                  <div style={{ fontSize: "0.78rem", color: "var(--muted)", marginBottom: 3 }}>Phone</div>
                  <a
                    href={`tel:${COMPANY.phoneE164}`}
                    style={{ color: "var(--text)", fontWeight: 500 }}
                  >
                    {COMPANY.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon">📍</div>
                <div>
                  <div style={{ fontSize: "0.78rem", color: "var(--muted)", marginBottom: 3 }}>Location</div>
                  <span style={{ fontWeight: 500 }}>{COMPANY.location}</span>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.form
              className="contact-form"
              onSubmit={onSubmit}
              aria-label="Quick contact form"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.18 }}
            >
              {/* Honeypot */}
              <label className="hp-field">
                Website
                <input
                  name="website"
                  value={form.website}
                  onChange={onChange("website")}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </label>

              <label>
                Name
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={onChange("name")}
                  placeholder="Jane Doe"
                  autoComplete="name"
                />
              </label>

              <label>
                Email
                <input
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={onChange("email")}
                  placeholder="jane@example.com"
                  autoComplete="email"
                />
              </label>

              <label>
                Message
                <textarea
                  required
                  name="message"
                  value={form.message}
                  onChange={onChange("message")}
                  placeholder="What do you need help with?"
                  rows={4}
                />
              </label>

              <button className="btn" type="submit" disabled={status.type === "sending"}>
                {status.type === "sending" ? "Sending…" : "Send Message →"}
              </button>

              {(status.type === "success" || status.type === "error") && (
                <p className={`form-note ${status.type}`} aria-live="polite">
                  {status.msg}
                </p>
              )}
            </motion.form>
          </div>
        </div>
      </section>
    </>
  );
}
