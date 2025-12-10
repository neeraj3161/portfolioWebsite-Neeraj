// src/pages/Projects.js
import React from "react";
import { projects } from "../../src/ProjectData";

function Projects() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="section-title">Projects</h1>
        <p className="section-subtitle">Some of my live projects.</p>

        <div className="card-grid projects-grid">
          {projects.map((p) => (
            <article key={p.id} className="card project-card">
              <h2 className="card-title">{p.title}</h2>
              <p className="body-text">{p.description}</p>
              <p className="project-stack">{p.stack}</p>

              <div className="project-actions">
                {p.live && (
                  <a
                    className="btn-primary"
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Project
                  </a>
                )}
                {p.github && (
                  <a
                    className="btn-outline"
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
