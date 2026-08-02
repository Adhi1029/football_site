import { FaTable as TableIcon, FaStar as StarIcon, FaGlobe as GlobeIcon } from "react-icons/fa"

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="hero-section">
      {/* Background Video playing continuously behind hero */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="hero-bg-video"
        poster="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1920&q=80"
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-stadium-lights-at-night-41589-large.mp4" type="video/mp4" />
      </video>

      {/* Dark gradient overlay over video for crystal clear text readability */}
      <div className="hero-overlay" />

      <div className="hero-content" style={{ position: "relative", zIndex: 2, textAlign: "center", maxWidth: "980px", margin: "0 auto" }}>
        <div className="badge-pill" style={{ margin: "0 auto 16px auto", width: "fit-content" }}>
          <span>⚽ 100% VERIFIED REAL-TIME FOOTBALL HUB • .EVM API WIRE</span>
        </div>

        <h1 className="hero-title" style={{ textAlign: "center" }}>
          The Beautiful Game, <br />
          <span className="text-gradient">Verified &amp; Reimagined.</span>
        </h1>

        <p className="hero-subtitle" style={{ textAlign: "center", maxWidth: "760px", margin: "16px auto 32px auto" }}>
          Explore 40+ years of multi-season league tables, major world award winners (Ballon d'Or, Golden Ball, Golden Foot), real player portrait images, and interactive filters by year, club, titles, and age.
        </p>

        {/* PERFECTLY CENTERED AND ALIGNED HERO BUTTONS */}
        <div
          className="hero-buttons-centered"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "18px",
            flexWrap: "wrap",
            margin: "24px auto 0 auto",
            width: "100%",
            maxWidth: "920px"
          }}
        >
          <button
            onClick={() => scrollTo("league-tables")}
            className="btn-primary touch-interactive"
            style={{
              padding: "14px 26px",
              fontSize: "0.98rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              borderRadius: "12px",
              fontWeight: 700
            }}
          >
            <TableIcon style={{ fontSize: "1.1rem" }} />
            <span>Explore 40-Year Tables &amp; Major Awards</span>
          </button>

          <button
            onClick={() => scrollTo("superstars")}
            className="btn-secondary touch-interactive"
            style={{
              padding: "14px 24px",
              fontSize: "0.98rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              borderRadius: "12px",
              fontWeight: 700
            }}
          >
            <StarIcon style={{ fontSize: "1.1rem", color: "#f59e0b" }} />
            <span>Top 10 World Superstars</span>
          </button>

          <button
            onClick={() => scrollTo("competitions")}
            className="btn-secondary touch-interactive"
            style={{
              padding: "14px 24px",
              fontSize: "0.98rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              borderRadius: "12px",
              fontWeight: 700
            }}
          >
            <GlobeIcon style={{ fontSize: "1.1rem", color: "#10b981" }} />
            <span>ESPN UEFA &amp; FIFA Live News</span>
          </button>
        </div>

        {/* Quick Verified Highlights Bar */}
        <div
          className="hero-stats-bar"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "36px",
            flexWrap: "wrap",
            marginTop: "48px",
            paddingTop: "24px",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            color: "var(--text-secondary)",
            fontSize: "0.9rem"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ color: "#10b981", fontWeight: 800, fontSize: "1.2rem" }}>1985–2026</span>
            <span>40+ Years of Historical &amp; Live Season Standings</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ color: "#f59e0b", fontWeight: 800, fontSize: "1.2rem" }}>Ballon d'Or &amp; Awards</span>
            <span>40-Year Archive of Golden Ball, Boot &amp; Golden Foot</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ color: "#00e5ff", fontWeight: 800, fontSize: "1.2rem" }}>Universal Filters</span>
            <span>Filter by Year, Club, Age &amp; Number of Titles</span>
          </div>
        </div>
      </div>
    </section>
  )
}