import { useState } from "react"
import { FaFutbol, FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa"

interface NavbarProps {
  theme: "dark" | "light"
  toggleTheme: () => void
}

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollTo = (id: string) => {
    setMenuOpen(false)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  const linkStyle = {
    background: "transparent",
    border: "none",
    color: "var(--text-secondary)",
    fontSize: "0.92rem",
    fontWeight: 600,
    cursor: "pointer",
    padding: "6px 12px",
    borderRadius: "6px",
    transition: "color 0.2s ease, background 0.2s ease",
    display: "flex",
    alignItems: "center",
    gap: "6px"
  }

  return (
    <nav
      className="navbar"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "64px",
        padding: "0 32px",
        background: "rgba(8, 9, 13, 0.88)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        zIndex: 1000,
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.4)"
      }}
    >
      {/* LEFT: Logo & Brand Name */}
      <div
        onClick={() => scrollTo("league-tables")}
        className="touch-interactive"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          cursor: "pointer"
        }}
      >
        <div
          style={{
            width: "34px",
            height: "34px",
            borderRadius: "8px",
            background: "linear-gradient(135deg, #00e5ff, #3b82f6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 12px rgba(0, 229, 255, 0.4)"
          }}
        >
          <FaFutbol style={{ color: "#fff", fontSize: "1.1rem" }} />
        </div>
        <span style={{ fontFamily: "var(--font-heading)", fontSize: "1.25rem", fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.5px" }}>
          FOOTBALL<span style={{ color: "#00e5ff" }}>DESK</span>
        </span>
      </div>

      {/* CENTER: Clean Horizontal Navigation Links */}
      <div
        className={`nav-links-horizontal ${menuOpen ? "open" : ""}`}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px"
        }}
      >
        <button
          onClick={() => scrollTo("league-tables")}
          style={linkStyle}
          className="touch-interactive nav-link-item"
        >
          <span>Standings &amp; 40-Yr Awards</span>
        </button>

        <button
          onClick={() => scrollTo("superstars")}
          style={linkStyle}
          className="touch-interactive nav-link-item"
        >
          <span>Top 10 Superstars</span>
        </button>

        <button
          onClick={() => scrollTo("competitions")}
          style={linkStyle}
          className="touch-interactive nav-link-item"
        >
          <span>ESPN News &amp; UEFA</span>
        </button>

        <button
          onClick={() => scrollTo("data-center")}
          style={linkStyle}
          className="touch-interactive nav-link-item"
        >
          <span>Data Center</span>
        </button>
      </div>

      {/* RIGHT: Theme Toggle & Mobile Menu */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <button
          onClick={toggleTheme}
          className="touch-interactive"
          aria-label="Toggle display theme"
          title={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "8px",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            background: "rgba(255, 255, 255, 0.05)",
            color: "var(--text-primary)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            fontSize: "1rem"
          }}
        >
          {theme === "dark" ? <FaSun style={{ color: "#f59e0b" }} /> : <FaMoon style={{ color: "#3b82f6" }} />}
        </button>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-menu-btn touch-interactive"
          aria-label="Toggle navigation menu"
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "8px",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            background: "rgba(255, 255, 255, 0.05)",
            color: "var(--text-primary)",
            display: "none",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer"
          }}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  )
}