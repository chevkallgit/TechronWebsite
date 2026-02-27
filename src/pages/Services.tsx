
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const SERVICES = [
  {
    title: "Website Design & Refresh",
    bullets: [
      "New websites or clean redesigns",
      "Mobile-first, fast, modern layout",
      "Basic SEO setup (titles, descriptions, structure)",
    ],
  },
  {
    title: "Performance & Bug Fixes",
    bullets: [
      "Fix broken layouts, forms, and navigation",
      "Speed improvements (images, assets, code split)",
      "Cross-browser/mobile issues",
    ],
  },
  {
    title: "Software Support",
    bullets: [
      "Small business tools & internal apps",
      "Automation and workflow improvements",
      "Practical fixes, not overengineering",
    ],
  },
  {
    title: "Maintenance & Security",
    bullets: [
      "Updates, backups, and monitoring",
      "Security hardening + best practices",
      "Ongoing support plans (optional)",
    ],
  },
  {
    title: "AI Integration",
    bullets: [
      "AI-powered chatbots and virtual assistants",
      "Safe installation and support for AI tools",
      "Time savings and efficiency improvements with AI automation",
    ],
  },
  {
    title: "Tech Consulting",
    bullets: [
      "Not sure where to start? We'll figure it out together",
      "Platform and tool recommendations",
      "One-time or ongoing advisory",
    ],
  }
];

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Services — Techron Solutions</title>
        <meta name="description" content="Web design, performance fixes, software support, maintenance, AI integration, and tech consulting for small businesses in Medicine Hat, AB." />
        <meta property="og:title" content="Services — Techron Solutions" />
        <meta property="og:url" content="https://techronsolutions.ca/services" />
        <meta property="og:description" content="Web design, performance fixes, software support, maintenance, AI integration, and tech consulting for small businesses." />
      </Helmet>
      <section className="section">
        <div className="container">
          <h1>Services</h1>
          <p className="lede">
            Straightforward help for businesses that want a modern site and reliable tech support.
          </p>

          <div style={{ marginTop: 18 }}>
            <Link className="btn btn-lg" to="/#contact">
              Request a Quote
            </Link>
            <span style={{ marginLeft: 12 }} />
            <Link className="btn btn-ghost btn-lg" to="/policies">
              Our Policies
            </Link>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <h2>What we can do</h2>

          <div className="grid" style={{ marginTop: 12 }}>
            {SERVICES.map((s) => (
              <article key={s.title} className="service-card">
                <h3>{s.title}</h3>
                <ul className="bullets">
                  {s.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div style={{ marginTop: 22 }}>
            <Link className="btn" to="/#contact">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
