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
  I design and build scalable backend systems, real-time applications, and AI-powered workflows that solve real business problems.
</p>

           <div className="hero-buttons">
  <a href="#contact" className="btn-primary">
    Hire Me
  </a>

  <a href="/projects" className="btn-outline">
    View Projects
  </a>

  <a
    href="/neeraj_cv.pdf"
    className="btn-outline"
    download
  >
    Download CV
  </a>
</div>


            <div className="hero-metrics">
  <span>4+ Years Experience</span>
  <span>Enterprise Systems @ Scale</span>
  <span>AI + Automation Focused</span>
</div>
          </div>

         <div className="hero-right">
  <div className="hero-image-wrapper">
    <img
      src="/profilePic.JPG"
      alt="Neeraj Tripathi"
      className="hero-image"
      style={{alignItems: 'center',}}
    />
  </div>

  <p className="cube-caption">
    Building scalable systems with precision and speed.
  </p>
</div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section" id="about">
        <div className="container about-grid">
         <div className="profile-card">
  <ul className="about-highlights">
    <li>✔ Backend-first engineer with system design focus</li>
    <li>✔ Built enterprise inventory systems</li>
    <li>✔ AI + automation workflows (RAG, n8n)</li>
    <li>✔ Production apps used by real users</li>
  </ul>
</div>

          <div>
            <h2 className="section-title">About</h2>
            <p className="section-subtitle">
              A developer who builds scalable systems — fast, clean and robust.
            </p>
           <p className="body-text">
  I’m a Senior Software Engineer with 4+ years of experience building scalable, production-grade systems using .NET, ASP.NET Core, React, and PostgreSQL.
  
  I specialize in backend architecture, API design, and real-time systems, with hands-on experience in AI integrations including embeddings, document-based Q&A systems, and automation workflows.

  I take full ownership of features — from idea to deployment — focusing on performance, scalability, and clean architecture.
</p>

            <div className="stats-grid">
            <div className="stat-card">
  <span className="stat-value">40%</span>
  <span className="stat-label">Error Reduction via Automation</span>
</div>

<div className="stat-card">
  <span className="stat-value">25%</span>
  <span className="stat-label">API Latency Improvement</span>
</div>

<div className="stat-card">
  <span className="stat-value">2+ yrs</span>
  <span className="stat-label">Production App Usage</span>
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
    .NET 6+, ASP.NET Core, REST APIs, Microservices, Authentication, Node.js, Python
  </p>
</div>

<div className="card">
  <h3 className="card-title">Frontend</h3>
  <p className="body-text">
    React, TypeScript, JavaScript (ES6+), scalable UI architecture
  </p>
</div>

<div className="card">
  <h3 className="card-title">Cloud & DevOps</h3>
  <p className="body-text">
    AWS, Docker, CI/CD, Git, production deployments
  </p>
</div>

<div className="card">
  <h3 className="card-title">AI & Automation</h3>
  <p className="body-text">
    OpenAI APIs, Embeddings, RAG systems, n8n automation workflows
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
  Designed and built enterprise-level inventory systems using ASP.NET Core, React, and PostgreSQL.
  
  Developed scalable APIs, optimized backend workflows, and reduced manual processes through automation.
  
  Built n8n-based automation pipelines for data syncing, alerts, and scheduled workflows.
  
  Improved API performance by 25% and reduced manual data errors by 40%.
  
  Mentored developers and contributed to faster delivery cycles and better code quality.
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
                <strong>Email:</strong> neerajtripathi823@gmail.com
              </li>
              <li>
                <strong>Location:</strong> Pune, India
              </li>
            </ul>

            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/neeraj3161"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a href="https://github.com/neeraj3161" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a
                href="https://neeraj31.vercel.app"
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
