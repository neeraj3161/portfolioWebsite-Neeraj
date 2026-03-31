import { useState } from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      {/* NAVBAR */}
      <header className="nav">
        <div className="nav-left">
          <span className="logo-mark" />
          <span className="nav-name">NEERAJ TRIPATHI</span>
        </div>

        {/* HAMBURGER */}
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </div>

        {/* NAV LINKS */}
        <nav className={`nav-links ${menuOpen ? "show" : ""}`}>
          <NavLink to="/" end onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }>
            Home
          </NavLink>

          <NavLink to="/projects" onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }>
            Projects
          </NavLink>

          <a href="#contact" className="btn-primary nav-cta"
             onClick={() => setMenuOpen(false)}>
            Hire Me
          </a>
        </nav>
      </header>

      {/* PAGES */}
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} Neeraj Tripathi 
      </footer>
    </div>
  );
}

export default App;