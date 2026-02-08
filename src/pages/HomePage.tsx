import React, { useState } from "react";
import { COMPANY } from "../lib/constants.ts";

type FormState = {
  name: string;
  email: string;
  message: string;
  website?: string; // honeypot
};

function buildMailto({ name, email, message }: FormState) {
  const subject = encodeURIComponent("Project Inquiry");
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n`
  );
  return `mailto:${COMPANY.email}?subject=${subject}&body=${body}`;
}

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
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((p) => ({ ...p, [key]: e.target.value }));
    };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot – bots often fill this
    if (form.website && form.website.trim().length > 0) {
      setStatus({ type: "success", msg: "Thanks! We’ll be in touch soon." });
      return;
    }

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({ type: "error", msg: "Please fill out all fields." });
      return;
    }

    setStatus({ type: "sending" });

    // Simple no-backend approach
    window.location.href = buildMailto(form);

    setStatus({
      type: "success",
      msg: "Your email app should open. If it didn’t, please email us directly.",
    });
  };

  return (
    <>
      {/* HERO = headline + about merged */}
      <section className="hero" aria-label="Hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <h1>
              Modern websites and software support for{" "}
              <span className="gradient-text">real businesses</span>
            </h1>

            <p className="lede">{COMPANY.tagline}</p>

            <p className="about-inline">
              We’re based in {COMPANY.location} and help small businesses with
              website refreshes, performance fixes, and practical tech support —
              without the agency price tag or runaround. You get clear answers,
              fair pricing, and someone local who actually picks up the phone.
            </p>

            <div className="hero-cta">
              <a href="#contact" className="btn btn-lg">
                Get a Free Consult
              </a>
              <a href="/services" className="btn btn-ghost btn-lg">
                View Services
              </a>
            </div>

            <ul className="trust">
              <li>✔ Fast turnaround</li>
              <li>✔ Clear pricing</li>
              <li>✔ Local & reliable</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="section alt">
        <div className="container contact">
          <div>
            <h2>Contact</h2>
            <p>Tell us what you need and we’ll get back within 1 business day.</p>

            <ul className="contact-list">
              <li>
                <strong>Email:</strong>{" "}
                <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
              </li>
              <li>
                <strong>Phone:</strong>{" "}
                <a href={`tel:${COMPANY.phoneE164}`}>
                  {COMPANY.phoneDisplay}
                </a>
              </li>
              <li>
                <strong>Location:</strong> {COMPANY.location}
              </li>
            </ul>
          </div>

          <form
            className="contact-form"
            onSubmit={onSubmit}
            aria-label="Quick contact form"
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

            <button
              className="btn"
              type="submit"
              disabled={status.type === "sending"}
            >
              {status.type === "sending" ? "Sending…" : "Send Message"}
            </button>

            <p className="form-note" aria-live="polite">
              {status.type === "idle" &&
                "No backend yet — this opens your email app. We can wire it to a form provider later."}

              {(status.type === "success" || status.type === "error") &&
                status.msg}

              {status.type === "sending" && "Sending…"}
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
