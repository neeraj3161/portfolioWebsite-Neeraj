// src/App.js
import { NavLink, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="app">
      {/* NAVBAR */}
      <header className="nav">
        <div className="nav-left">
          <span className="logo-mark" />
          <span className="nav-name">NEERAJ TRIPATHI</span>
        </div>

        <nav className="nav-links">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Projects
          </NavLink>
        </nav>

        <a href="#contact" className="btn-primary nav-cta">
          Hire Me
        </a>
      </header>

      {/* PAGES */}
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} Neeraj Tripathi — Built with Passion & Precision
      </footer>
    </div>
  );
}

export default App;
