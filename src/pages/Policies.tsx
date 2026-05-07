import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const COMMITMENTS = [
  {
    icon: "⚡",
    title: "Response time",
    desc: "We reply to new inquiries within 1 business day (often sooner).",
  },
  {
    icon: "📋",
    title: "Clear scope",
    desc: "Before work starts, we confirm scope, timeline, and price (or an estimate) in writing.",
  },
  {
    icon: "✅",
    title: "Quality fixes",
    desc: "If we introduce a bug, we'll fix it at no cost. For new requests or scope changes, we quote it first.",
  },
];

const TERMS = [
  "Quotes are based on the agreed scope. Changes are quoted before work continues.",
  "Timelines depend on your responsiveness and access to required accounts/content.",
  "Content you provide (logos, text, images) must be owned by you or licensed for use.",
  "Payments: we can do deposit + milestone payments for larger projects.",
  "Support/maintenance plans are optional and can be canceled with notice.",
];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

export default function PoliciesPage() {
  return (
    <>
      <title>Policies & Guarantees — Techron Solutions</title>
      <meta
        name="description"
        content="Techron Solutions' commitments, privacy approach, and terms. Clear expectations, no surprises."
      />
      <meta property="og:title" content="Policies & Guarantees — Techron Solutions" />
      <meta property="og:url" content="https://techronsolutions.ca/policies" />
      <meta
        property="og:description"
        content="Clear expectations. No surprises. Our commitments, privacy approach, and basic terms."
      />

      {/* ── Page header ──────────────────────────────────────────────────────── */}
      <section className="section" style={{ paddingBottom: 52 }}>
        <div className="container">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.45 }}
          >
            <div className="section-label">Transparency</div>
            <h1>Policies & Guarantees</h1>
            <p className="lede">
              Clear expectations. No surprises. Our commitments, privacy approach, and basic terms.
            </p>
          </motion.div>

          <motion.div
            style={{ display: "flex", gap: 12, marginTop: 30, flexWrap: "wrap" }}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.45, delay: 0.14 }}
          >
            <Link className="btn btn-lg" to="/#contact">Start a Project</Link>
            <Link className="btn btn-ghost btn-lg" to="/services">View Services →</Link>
          </motion.div>
        </div>
      </section>

      {/* ── Commitments ──────────────────────────────────────────────────────── */}
      <section className="section alt">
        <div className="container">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            style={{ marginBottom: 40 }}
          >
            <div className="section-label">Commitments</div>
            <h2>Our commitments</h2>
          </motion.div>

          <div className="grid">
            {COMMITMENTS.map((c, i) => (
              <motion.article
                key={c.title}
                className="service-card"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="card-icon">{c.icon}</div>
                <h3>{c.title}</h3>
                <p style={{ color: "var(--muted)", fontSize: "0.9rem", margin: 0, lineHeight: 1.65 }}>
                  {c.desc}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Privacy ──────────────────────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            style={{ marginBottom: 28 }}
          >
            <div className="section-label">Data</div>
            <h2>Privacy</h2>
          </motion.div>

          <motion.div
            className="policy-card"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <p style={{ color: "var(--muted)", margin: "0 0 14px", lineHeight: 1.75 }}>
              We only collect information you provide (like name, email, and project details) for the
              purpose of responding and delivering the work.
            </p>
            <p style={{ color: "var(--muted)", margin: 0, lineHeight: 1.75 }}>
              We do not sell your data. We do not share it with third parties except when required to
              deliver the service (for example: hosting, domain providers, or email services you choose).
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Terms ────────────────────────────────────────────────────────────── */}
      <section className="section alt">
        <div className="container">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            style={{ marginBottom: 28 }}
          >
            <div className="section-label">Agreement</div>
            <h2>Terms</h2>
          </motion.div>

          <motion.div
            className="policy-card"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <ul className="bullets">
              {TERMS.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            style={{ marginTop: 36 }}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.18 }}
          >
            <Link className="btn" to="/#contact">Ask a question →</Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
