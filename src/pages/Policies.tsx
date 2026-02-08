import React from "react";
import { Link } from "react-router-dom";

export default function PoliciesPage() {
  return (
    <>
      <section className="section">
        <div className="container">
          <h1>Policies & Guarantees</h1>
          <p className="lede">
            Clear expectations. No surprises. This page explains our commitments, privacy approach,
            and basic terms.
          </p>

          <div style={{ marginTop: 18 }}>
            <Link className="btn btn-lg" to="/#contact">
              Start a Project
            </Link>
            <span style={{ marginLeft: 12 }} />
            <Link className="btn btn-ghost btn-lg" to="/services">
              View Services
            </Link>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <h2>Our commitments</h2>

          <div className="grid" style={{ marginTop: 12 }}>
            <article className="service-card">
              <h3>Response time</h3>
              <p>
                We reply to new inquiries within 1 business day (often sooner).
              </p>
            </article>

            <article className="service-card">
              <h3>Clear scope</h3>
              <p>
                Before work starts, we confirm scope, timeline, and price (or an estimate) in writing.
              </p>
            </article>

            <article className="service-card">
              <h3>Quality fixes</h3>
              <p>
                If we introduce a bug, we’ll fix it at no cost. For new requests or scope changes,
                we quote it first.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Privacy</h2>
          <div className="service-card">
            <p>
              We only collect information you provide (like name, email, and project details) for the
              purpose of responding and delivering the work.
            </p>
            <p>
              We do not sell your data. We do not share it with third parties except when required to
              deliver the service (for example: hosting, domain providers, or email services you choose).
            </p>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <h2>Terms</h2>
          <div className="service-card">
            <ul className="bullets">
              <li>Quotes are based on the agreed scope. Changes are quoted before work continues.</li>
              <li>Timelines depend on your responsiveness and access to required accounts/content.</li>
              <li>Content you provide (logos, text, images) must be owned by you or licensed for use.</li>
              <li>Payments: we can do deposit + milestone payments for larger projects.</li>
              <li>Support/maintenance plans are optional and can be canceled with notice.</li>
            </ul>
          </div>

          <div style={{ marginTop: 18 }}>
            <Link className="btn" to="/#contact">
              Ask a question
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
