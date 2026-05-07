import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SERVICES = [
  {
    icon: "🌐",
    title: "Website Design & Refresh",
    bullets: [
      "New websites or clean redesigns",
      "Mobile-first, fast, modern layout",
      "Basic SEO setup (titles, descriptions, structure)",
    ],
  },
  {
    icon: "⚡",
    title: "Optimization & Bug Fixes",
    bullets: [
      "Fix broken layouts, forms, and navigation",
      "Speed improvements (images, assets, code split)",
      "Cross-browser and mobile issues",
    ],
  },
  {
    icon: "🔧",
    title: "Software Support",
    bullets: [
      "Small business tools & internal apps",
      "Automation and workflow improvements",
      "Practical fixes, not overengineering",
    ],
  },
  {
    icon: "🛡️",
    title: "Maintenance & Security",
    bullets: [
      "Updates, backups, and monitoring",
      "Security hardening + best practices",
      "Ongoing support plans (optional)",
    ],
  },
  {
    icon: "🤖",
    title: "Integrations & AI Solutions",
    bullets: [
      "Integrate solutions with your existing tools",
      "Safe installation and support for AI tools",
      "Time savings and efficiency improvements",
    ],
  },
  {
    icon: "💡",
    title: "Tech Consulting",
    bullets: [
      "Not sure where to start? We'll figure it out together",
      "Platform and tool recommendations",
      "One-time or ongoing advisory",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

export default function ServicesPage() {
  return (
    <>
      <title>Services — Techron Solutions</title>
      <meta
        name="description"
        content="Web design, performance fixes, software support, maintenance, AI integration, and tech consulting for small businesses in Medicine Hat, AB."
      />
      <meta property="og:title" content="Services — Techron Solutions" />
      <meta property="og:url" content="https://techronsolutions.ca/services" />
      <meta
        property="og:description"
        content="Web design, performance fixes, software support, maintenance, AI integration, and tech consulting for small businesses."
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
            <div className="section-label">What we offer</div>
            <h1>Services</h1>
            <p className="lede">
              Straightforward help for businesses that want a modern site and reliable tech support.
            </p>
          </motion.div>

          <motion.div
            style={{ display: "flex", gap: 12, marginTop: 30, flexWrap: "wrap" }}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.45, delay: 0.14 }}
          >
            <Link className="btn btn-lg" to="/#contact">Request a Quote</Link>
            <Link className="btn btn-ghost btn-lg" to="/policies">Our Policies →</Link>
          </motion.div>
        </div>
      </section>

      {/* ── Cards ────────────────────────────────────────────────────────────── */}
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
            <div className="section-label">Details</div>
            <h2>What we can do</h2>
          </motion.div>

          <div className="grid">
            {SERVICES.map((s, i) => (
              <motion.article
                key={s.title}
                className="service-card"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.1 }}
                whileHover={{ boxShadow: "0 20px 48px rgba(0,0,0,0.35), 0 0 0 1px rgba(106,166,255,0.15)" }}
              >
                <div className="card-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <ul className="bullets">
                  {s.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>

          <motion.div
            style={{ marginTop: 52 }}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Link className="btn btn-lg" to="/#contact">Start a project →</Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
