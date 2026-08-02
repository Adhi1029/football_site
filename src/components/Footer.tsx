import { FaFutbol, FaGithub, FaTwitter, FaCheckDouble } from "react-icons/fa"

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="footer section-container" style={{ borderTop: "1px solid var(--border-color)", paddingTop: "48px", marginTop: "60px" }}>
      <div
        className="footer-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "36px",
          marginBottom: "36px"
        }}
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
            <FaFutbol style={{ fontSize: "1.8rem", color: "#00e5ff" }} />
            <span style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--text-primary)" }}>
              FOOTBALL<span className="text-gradient">DESK</span>
            </span>
          </div>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: "1.6" }}>
            The premier multi-source football hub. Featuring real-time ESPN Public REST API data, EA Sports FC 25 Player Cards, multi-season standings from 2020/21 through 2025/26, and 100% double-checked data accuracy.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 14, color: "#10b981", fontSize: "0.82rem", fontWeight: 700 }}>
            <FaCheckDouble />
            <span>Multi-Source Verification (.evm API Desk)</span>
          </div>
        </div>

        <div>
          <h4 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: 14 }}>
            Explore Standings &amp; Squads
          </h4>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: "0.9rem" }}>
            <button
              onClick={() => scrollTo("league-tables")}
              className="touch-interactive"
              style={{ background: "none", border: "none", color: "var(--text-secondary)", textAlign: "left", cursor: "pointer", padding: 0 }}
            >
              • Premier League &amp; La Liga (2020–2026)
            </button>
            <button
              onClick={() => scrollTo("league-tables")}
              className="touch-interactive"
              style={{ background: "none", border: "none", color: "var(--text-secondary)", textAlign: "left", cursor: "pointer", padding: 0 }}
            >
              • First-Team Squads &amp; EA FC Player Cards
            </button>
            <button
              onClick={() => scrollTo("superstars")}
              className="touch-interactive"
              style={{ background: "none", border: "none", color: "var(--text-secondary)", textAlign: "left", cursor: "pointer", padding: 0 }}
            >
              • Top 10 Elite World Superstars
            </button>
          </div>
        </div>

        <div>
          <h4 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: 14 }}>
            ESPN News &amp; Verification
          </h4>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: "0.9rem" }}>
            <button
              onClick={() => scrollTo("competitions")}
              className="touch-interactive"
              style={{ background: "none", border: "none", color: "var(--text-secondary)", textAlign: "left", cursor: "pointer", padding: 0 }}
            >
              • UEFA Champions League ESPN Desk
            </button>
            <button
              onClick={() => scrollTo("competitions")}
              className="touch-interactive"
              style={{ background: "none", border: "none", color: "var(--text-secondary)", textAlign: "left", cursor: "pointer", padding: 0 }}
            >
              • FIFA World Tournaments &amp; Rankings
            </button>
            <button
              onClick={() => scrollTo("data-center")}
              className="touch-interactive"
              style={{ background: "none", border: "none", color: "var(--text-secondary)", textAlign: "left", cursor: "pointer", padding: 0 }}
            >
              • Massive Dataset Verification Center
            </button>
          </div>
        </div>

        <div>
          <h4 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: 14 }}>
            Connect &amp; Sources
          </h4>
          <div style={{ display: "flex", gap: 12 }}>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Repository"
              className="btn-secondary touch-interactive"
              style={{ padding: "10px", borderRadius: "10px", display: "flex" }}
            >
              <FaGithub style={{ fontSize: "1.2rem" }} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter Feed"
              className="btn-secondary touch-interactive"
              style={{ padding: "10px", borderRadius: "10px", display: "flex" }}
            >
              <FaTwitter style={{ fontSize: "1.2rem", color: "#00e5ff" }} />
            </a>
          </div>
          <p style={{ color: "var(--text-muted)", fontSize: "0.8rem", marginTop: 16 }}>
            Data synchronized from ESPN API (`eng.1`, `esp.1`, `uefa.champions`), TheSportsDB &amp; Wikimedia REST.
          </p>
        </div>
      </div>

      <div
        style={{
          borderTop: "1px solid rgba(255, 255, 255, 0.08)",
          paddingTop: "24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
          fontSize: "0.85rem",
          color: "var(--text-muted)"
        }}
      >
        <div>
          © {new Date().getFullYear()} FootballDesk. All rights reserved. • Built with React, TypeScript &amp; Vanilla CSS.
        </div>
        <div style={{ display: "flex", gap: 18 }}>
          <span style={{ color: "#10b981" }}>✓ 100% Verified Accuracy</span>
          <span>•</span>
          <span style={{ color: "#00e5ff" }}>EA FC 25 Player Cards</span>
          <span>•</span>
          <span style={{ color: "#f59e0b" }}>Multi-Season Tables</span>
        </div>
      </div>
    </footer>
  )
}
