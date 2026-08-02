import { useState } from "react"
import { initialNews } from "../data/newsAndTacticsData"
import type { NewsItem } from "../data/newsAndTacticsData"
import { FaCheckCircle, FaBolt } from "react-icons/fa"

export default function NewsSection() {
  const [news, setNews] = useState<NewsItem[]>(initialNews)
  const [filter, setFilter] = useState<string>("ALL")

  const categories = [
    "ALL",
    "Transfer Rumor",
    "Injury Alert",
    "Manager News",
    "Top 5 League",
    "UEFA",
    "FIFA"
  ]

  const filteredNews =
    filter === "ALL"
      ? news
      : news.filter((item) => item.category === filter)

  // Function to simulate a new breaking verified story arriving
  const simulateBreakingNews = () => {
    const breakingHeadlines = [
      {
        id: `breaking-${Date.now()}`,
        title: "⚡ OFFICIAL BREAKING: Premier League Giant Agrees €120M Summer Package for Top Striker",
        summary: "Contracts have been exchanged between clubs after a secret medical in Zurich. Official announcement scheduled for tomorrow morning.",
        category: "Transfer Rumor" as const,
        verified: true,
        timestamp: "Just now",
        source: "Fabrizio Romano • Verified Official",
        readTime: "2 min read",
        imageBadge: "⚡"
      },
      {
        id: `breaking-${Date.now() + 1}`,
        title: "🤕 TACTICAL INJURY BULLETIN: Key Midfielder Passes Fitness Test Ahead of UCL Semi-Final",
        summary: "After intensive cold-chamber physiotherapy, the star captain completed full squad training and is confirmed in the 22-man traveling party.",
        category: "Injury Alert" as const,
        verified: true,
        timestamp: "Just now",
        source: "European Football Medical Briefing",
        readTime: "3 min read",
        imageBadge: "🤕"
      },
      {
        id: `breaking-${Date.now() + 2}`,
        title: "👔 MANAGER APPOINTMENT: Historic Italian Club Unveils New High-Pressing Coaching Staff",
        summary: "The club president confirmed a 3-year contract for the former Bundesliga manager, promising a high-octane 3-4-2-1 tactical overhaul.",
        category: "Manager News" as const,
        verified: true,
        timestamp: "Just now",
        source: "Gazzetta dello Sport Official",
        readTime: "4 min read",
        imageBadge: "👔"
      }
    ]

    const randomStory = breakingHeadlines[Math.floor(Math.random() * breakingHeadlines.length)]
    setNews((prev) => [randomStory, ...prev])
  }

  return (
    <section id="news" className="section-container">
      <div className="section-header">
        <span className="badge-pill">FRESH NEWS &amp; VERIFIED RUMORS</span>
        <h2 className="section-title">Injuries, Transfers &amp; Manager News</h2>
        <p className="section-subtitle">
          Timely, verified reporting on player injuries, tactical managerial appointments, transfer negotiations, and federation updates across Europe and the globe.
        </p>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16, marginBottom: 28 }}>
        <div className="match-center-tabs" style={{ marginBottom: 0 }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`tab-btn touch-interactive ${filter === cat ? "active" : ""}`}
              style={{ fontSize: "0.85rem", padding: "8px 16px" }}
            >
              {cat}
            </button>
          ))}
        </div>

        <button
          onClick={simulateBreakingNews}
          className="btn-primary touch-interactive"
          style={{ padding: "10px 20px", fontSize: "0.85rem" }}
          title="Click to inject a simulated live verified breaking story"
        >
          <FaBolt />
          <span>⚡ Simulate Breaking Live Story</span>
        </button>
      </div>

      <div className="competitions-grid">
        {filteredNews.map((item) => (
          <div key={item.id} className="glass-card competition-card touch-interactive">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span className="badge-pill" style={{ marginBottom: 0 }}>
                {item.category}
              </span>
              {item.verified && (
                <span style={{ display: "flex", alignItems: "center", gap: 6, color: "#10b981", fontSize: "0.8rem", fontWeight: 700 }}>
                  <FaCheckCircle /> Verified Source
                </span>
              )}
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ fontSize: "2.2rem" }}>{item.imageBadge}</span>
              <h3 style={{ fontSize: "1.35rem", lineHeight: "1.3" }}>
                {item.title}
              </h3>
            </div>

            <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>
              {item.summary}
            </p>

            <div style={{ marginTop: "auto", paddingTop: 16, borderTop: "1px solid var(--border-color)", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "0.82rem", color: "var(--text-muted)" }}>
              <span>{item.source}</span>
              <span>{item.timestamp} • {item.readTime}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
