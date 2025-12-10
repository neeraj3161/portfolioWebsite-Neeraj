// src/pages/Home.js
import React from "react";

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="section hero" id="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">
              Senior Software Engineer • .NET / React / Cloud
            </p>
            <h1 className="hero-title">Neeraj Tripathi</h1>
            <p className="hero-tagline">
              I build high-performance digital systems — fast, clean, and scalable.
            </p>

           <div className="hero-buttons">
  <a href="#contact" className="btn-primary">
    Hire Me
  </a>

  <a href="/projects" className="btn-outline">
    View Projects
  </a>

  <a
    href="/Neeraj-Tripathi-CV.pdf"
    className="btn-outline"
    download
  >
    Download CV
  </a>
</div>


            <div className="hero-metrics">
              <span>3.5+ Years Experience</span>
              <span>Smart Inventory Systems Expert</span>
              <span>Remote-Ready Developer</span>
            </div>
          </div>

          <div className="hero-right">
            <div className="cube-3d" />
            <p className="cube-caption">
              Enterprise-grade code, delivered with startup speed.
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section" id="about">
        <div className="container about-grid">
          <div className="profile-card">
            <div className="avatar-placeholder">NT</div>
          </div>

          <div>
            <h2 className="section-title">About</h2>
            <p className="section-subtitle">
              A developer who builds scalable systems — fast, clean and robust.
            </p>
            <p className="body-text">
              I’m a Senior Software Engineer specializing in .NET and modern
              JavaScript. I’ve spent the last few years building and maintaining
              smart inventory and enterprise systems with a strong focus on
              performance, reliability and clean architecture.
            </p>

            <div className="stats-grid">
              <div className="stat-card">
                <span className="stat-value">15+</span>
                <span className="stat-label">Projects Delivered</span>
              </div>
              <div className="stat-card">
                <span className="stat-value">10+</span>
                <span className="stat-label">Enterprise Modules Built</span>
              </div>
              <div className="stat-card">
                <span className="stat-value">99.9%</span>
                <span className="stat-label">Uptime on Deployed Apps</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="section" id="skills">
        <div className="container">
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle">
            The stack I use to ship production-grade software.
          </p>

          <div className="card-grid">
            <div className="card">
              <h3 className="card-title">Backend</h3>
              <p className="body-text">
                .NET Core, ASP.NET, C#, REST APIs, Microservices, Clean
                Architecture
              </p>
            </div>

            <div className="card">
              <h3 className="card-title">Frontend</h3>
              <p className="body-text">
                React, Next.js, TypeScript, Tailwind CSS, component-driven UIs
              </p>
            </div>

            <div className="card">
              <h3 className="card-title">Databases</h3>
              <p className="body-text">
                SQL Server, PostgreSQL, MongoDB, Redis, query optimization,
                indexing
              </p>
            </div>

            <div className="card">
              <h3 className="card-title">DevOps & Cloud</h3>
              <p className="body-text">
                Azure, Docker, GitHub Actions, CI/CD pipelines, monitoring &
                logging
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="section" id="experience">
        <div className="container">
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            Where I’ve been building things recently.
          </p>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <h3 className="timeline-title">
                  Senior Software Engineer — Prorigo Software
                </h3>
                <p className="timeline-period">2024 – Present</p>
                <p className="body-text">
                  Leading backend and integration work for a smart inventory
                  management platform: performance tuning, modular architecture
                  and feature development for enterprise clients.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <h3 className="timeline-title">
                  Software Engineer — Prorigo Software
                </h3>
                <p className="timeline-period">2021 – 2024</p>
                <p className="body-text">
                  Built and maintained core modules, APIs and dashboards,
                  collaborating with product teams to ship reliable features into
                  production.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section" id="contact">
        <div className="container contact-grid">
          <div>
            <h2 className="section-title">Let’s build something</h2>
            <p className="section-subtitle">
              Open to remote roles, freelance work and interesting
              collaborations.
            </p>

            <ul className="contact-list">
              <li>
                <strong>Email:</strong> info@neerajtripathi.com
              </li>
              <li>
                <strong>Location:</strong> Pune, India (Remote-friendly)
              </li>
            </ul>

            <div className="social-links">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a
                href="https://www.neerajtripathi.com"
                target="_blank"
                rel="noreferrer"
              >
                Portfolio
              </a>
            </div>
          </div>

          <form
            className="card contact-form"
            onSubmit={(e) => {
              e.preventDefault();
              alert(
                "This is a static demo form. Connect it to a backend or Formspree."
              );
            }}
          >
            <div className="field">
              <label>Name</label>
              <input type="text" placeholder="Your name" required />
            </div>
            <div className="field">
              <label>Email</label>
              <input type="email" placeholder="you@example.com" required />
            </div>
            <div className="field">
              <label>Project details</label>
              <textarea
                rows="4"
                placeholder="What do you want to build?"
                required
              />
            </div>

            <button className="btn-primary" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Home;
