import React from "react";
import "./styles.css";

const App: React.FC = () => {
  return (
    <>
      {/* Accessible skip link */}
      <a className="skip-link" href="#main">Skip to content</a>

      {/* Nav */}
      <header className="nav">
        <div className="container nav-inner">
          <div className="brand">
            
            <img src="/logo2.png" alt="Techron Solutions Logo" className="logo2" />
          </div>
          <nav aria-label="Primary">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact" className="btn btn-sm">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="hero" role="region" aria-label="Hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <h1>We solve <span className="gradient-text">real problems</span> for real people</h1>
            <p className="lede">
              Affordable, practical solutions for businesses that need modern websites and program support.
            </p>
            <div className="hero-cta">
              <a href="#contact" className="btn btn-lg">Get a Free Consult</a>
              <a href="#services" className="btn btn-ghost btn-lg">See Services</a>
            </div>
            <ul className="trust">
              <li>✔ Fast turnaround</li>
              <li>✔ Fair pricing</li>
              <li>✔ Local & reliable</li>
            </ul>
          </div>
          {/* <div className="hero-card" aria-hidden="true">
            <div className="card">
              <div className="card-head">Featured Work</div>
              <div className="card-body">
                <div className="mock-tile"/>
                <div className="mock-tile"/>
                <div className="mock-tile"/>
              </div>
              <div className="card-foot">More on request</div>
            </div>
          </div> */}
        </div>
      </section>

      <main id="main">
        {/* About */}
        <section id="about" className="section">
          <div className="container">
            <h2>About Us</h2>
            <p>
              We’re a local team passionate about helping Medicine Hat and area businesses succeed online. Whether you need a brand-new website, a refresh of your current site, or someone to fix and streamline your existing software, we’ll make sure technology works for you — not against you.
            </p>
            {/* <div className="stats">
              <div>
                <div className="stat-number">50+</div>
                <div className="stat-label">Projects delivered</div>
              </div>
              <div>
                <div className="stat-number">5★</div>
                <div className="stat-label">Average rating</div>
              </div>
              <div>
                <div className="stat-number">24h</div>
                <div className="stat-label">Response time</div>
              </div>
            </div> */}
          </div>
        </section>

        {/* Services */}
        <section id="services" className="section alt">
          <div className="container">
            <h2>Services</h2>
            <div className="grid">
              <article className="service-card">
                <div className="svc-icon" aria-hidden>🛠️</div>
                <h3>Website Design & Optimization</h3>
                <p>Modern, responsive sites that look professional and rank better on seach engines.</p>
              </article>
              <article className="service-card">
                <div className="svc-icon" aria-hidden>⚡</div>
                <h3>Program & Software Support</h3>
                <p>Help fixing, customizing, or improving the tools you already use in your business.</p>
              </article>
              <article className="service-card">
                <div className="svc-icon" aria-hidden>🔒</div>
                <h3>Ongoing Maintenance & Security</h3>
                <p>Affordable plans so you don’t have to stress about cybersecurty, bugs, or performance issues.</p>
              </article>
            </div>
          </div>
        </section>

        {/* Social proof / Testimonials */}
        {/* <section className="section">
          <div className="container">
            <h2>What Clients Say</h2>
            <div className="quotes">
              <figure className="quote">
                <blockquote>“Outstanding quality and communication from start to finish.”</blockquote>
                <figcaption>— Happy Client</figcaption>
              </figure>
              <figure className="quote">
                <blockquote>“Fast, friendly, and fairly priced. Highly recommend.”</blockquote>
                <figcaption>— Local Business Owner</figcaption>
              </figure>
            </div>
          </div>
        </section> */}

        {/* Contact */}
        <section id="contact" className="section alt">
          <div className="container contact">
            <div>
              <h2>Contact</h2>
              <p>Tell us what you need and we’ll get back within 1 business day.</p>
              <ul className="contact-list">
                <li><strong>Email:</strong> <a href="mailto:you@yourdomain.com">you@yourdomain.com</a></li>
                <li><strong>Phone:</strong> <a href="tel:+11234567890">(123) 456-7890</a></li>
                <li><strong>Location:</strong> Your City, AB</li>
              </ul>
              <div className="contact-cta">
                <a className="btn btn-lg" href="mailto:you@yourdomain.com?subject=Project%20Inquiry">Start a Project</a>
              </div>
            </div>
            <form
              className="contact-form"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thanks! Replace this with your form handler or Netlify/Vercel Forms.");
              }}
              aria-label="Quick contact form"
            >
              <label>
                Name
                <input required name="name" placeholder="Jane Doe" />
              </label>
              <label>
                Email
                <input required type="email" name="email" placeholder="jane@example.com" />
              </label>
              <label>
                Message
                <textarea required name="message" placeholder="Tell us about your project..." rows={4} />
              </label>
              <button className="btn" type="submit">Send Message</button>
              <p className="form-note">This is a demo. Hook it up to your provider (Netlify/Vercel/EmailJS) later.</p>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-inner">
          <div>© {new Date().getFullYear()} Techron Solutions. All rights reserved.</div>
          <div className="footer-links">
            <a href="#privacy">Privacy</a>
            <span>•</span>
            <a href="#terms">Terms</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default App;

