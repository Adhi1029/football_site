import { useState, useEffect } from "react"
import { initialLiveMatches, initialFixtures, initialResults } from "../data/liveMatchesData"
import type { Match, CommentaryEvent } from "../data/liveMatchesData"
import { FaFutbol, FaBookOpen, FaTimes, FaChartBar, FaClock, FaBolt } from "react-icons/fa"

export default function LiveMatchCenter() {
  const [activeTab, setActiveTab] = useState<"live" | "fixtures" | "results">("live")
  const [liveMatches, setLiveMatches] = useState<Match[]>(initialLiveMatches)
  const [fixtures] = useState<Match[]>(initialFixtures)
  const [results] = useState<Match[]>(initialResults)
  const [selectedMatch, setSelectedMatch] = useState<Match | null>(null)
  const [isAutoSimulating, setIsAutoSimulating] = useState(true)

  // Auto-simulate live minutes and occasional match commentary so the app updates itself!
  useEffect(() => {
    if (!isAutoSimulating) return

    const timer = setInterval(() => {
      setLiveMatches((prevMatches) =>
        prevMatches.map((m) => {
          if (m.status !== "LIVE") return m

          const currentMin = parseInt(m.minute.replace("'", ""), 10) || 75
          if (currentMin >= 90) {
            return { ...m, minute: "90+2'" }
          }
          const nextMin = currentMin + 1

          const shouldAddCommentary = Math.random() < 0.25
          let newCommentary = m.commentary
          const newHomeScore = m.homeScore
          const newAwayScore = m.awayScore

          if (shouldAddCommentary) {
            const possibleEvents: CommentaryEvent[] = [
              {
                minute: nextMin,
                type: "chance",
                team: "home",
                player: m.homeTeam,
                text: `CHANCE! Brilliant attacking combination from ${m.homeTeam} on the edge of the area! The keeper parries it clear!`
              },
              {
                minute: nextMin,
                type: "chance",
                team: "away",
                player: m.awayTeam,
                text: `COUNTER ATTACK! Rapid break by ${m.awayTeam} results in a corner kick after a last-ditch tackle!`
              },
              {
                minute: nextMin,
                type: "card",
                team: "away",
                player: "Defensive Midfielder",
                text: `YELLOW CARD (${m.awayTeam}): Tactical foul in the middle of the pitch to stop the transition.`
              }
            ]

            const randomEv = possibleEvents[Math.floor(Math.random() * possibleEvents.length)]
            newCommentary = [randomEv, ...m.commentary]
          }

          return {
            ...m,
            minute: `${nextMin}'`,
            homeScore: newHomeScore,
            awayScore: newAwayScore,
            commentary: newCommentary
          }
        })
      )
    }, 7000)

    return () => clearInterval(timer)
  }, [isAutoSimulating])

  const displayedMatches =
    activeTab === "live"
      ? liveMatches
      : activeTab === "fixtures"
      ? fixtures
      : results

  return (
    <section id="live-scores" className="section-container">
      <div className="section-header">
        <span className="badge-pill">REAL-TIME MATCH CENTER</span>
        <h2 className="section-title">Live Scores, Fixtures &amp; Official Crests</h2>
        <p className="section-subtitle">
          Real-time updates, minute-by-minute text commentary, official club logos, upcoming kick-off times, and advanced match statistics for ongoing fixtures across Europe’s Top 5 Leagues, UEFA &amp; FIFA.
        </p>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16, marginBottom: 28 }}>
        <div className="match-center-tabs">
          <button
            className={`tab-btn touch-interactive ${activeTab === "live" ? "active" : ""}`}
            onClick={() => setActiveTab("live")}
          >
            <span className="live-dot" style={{ marginRight: 8, width: 8, height: 8 }} />
            LIVE NOW ({liveMatches.length})
          </button>
          <button
            className={`tab-btn touch-interactive ${activeTab === "fixtures" ? "active" : ""}`}
            onClick={() => setActiveTab("fixtures")}
          >
            <FaClock style={{ marginRight: 8 }} />
            UPCOMING FIXTURES ({fixtures.length})
          </button>
          <button
            className={`tab-btn touch-interactive ${activeTab === "results" ? "active" : ""}`}
            onClick={() => setActiveTab("results")}
          >
            <FaFutbol style={{ marginRight: 8 }} />
            RECENT RESULTS ({results.length})
          </button>
        </div>

        <button
          onClick={() => setIsAutoSimulating(!isAutoSimulating)}
          className="btn-secondary touch-interactive"
          style={{
            borderColor: isAutoSimulating ? "#10b981" : "#ef4444",
            color: isAutoSimulating ? "#10b981" : "#ef4444",
            fontSize: "0.8rem",
            padding: "8px 16px"
          }}
          title="Toggle live match simulation updates"
        >
          <FaBolt />
          <span>{isAutoSimulating ? "⚡ LIVE SIMULATION ACTIVE" : "PAUSED"}</span>
        </button>
      </div>

      <div className="matches-grid">
        {displayedMatches.map((m) => (
          <div
            key={m.id}
            className="glass-card match-card touch-interactive"
            onClick={() => setSelectedMatch(m)}
            title="Click to view full minute-by-minute text commentary & match stats"
          >
            <div className="match-card-header">
              <span>{m.competition}</span>
              {m.status === "LIVE" ? (
                <span className="live-badge">
                  <span className="live-dot" style={{ width: 6, height: 6 }} />
                  LIVE • {m.minute}
                </span>
              ) : m.status === "FT" ? (
                <span style={{ color: "#10b981", fontWeight: 700 }}>FULL TIME</span>
              ) : (
                <span style={{ color: "#00e5ff", fontWeight: 700 }}>{m.kickOffTime}</span>
              )}
            </div>

            <div className="match-card-teams">
              <div className="team-box">
                {m.homeLogo && (
                  <img
                    src={m.homeLogo}
                    alt={m.homeTeam}
                    style={{ width: 28, height: 28, objectFit: "contain", marginRight: 6 }}
                    onError={(e) => (e.currentTarget.style.display = "none")}
                  />
                )}
                <span className="team-badge">{m.homeBadge}</span>
                <span className="team-name">{m.homeTeam}</span>
              </div>

              <div className="match-scoreline">
                <span className="score-number">
                  {m.status === "UPCOMING" ? "- : -" : `${m.homeScore} : ${m.awayScore}`}
                </span>
                <span style={{ fontSize: "0.7rem", color: "var(--text-muted)", textTransform: "uppercase" }}>
                  {m.venue}
                </span>
              </div>

              <div className="team-box">
                {m.awayLogo && (
                  <img
                    src={m.awayLogo}
                    alt={m.awayTeam}
                    style={{ width: 28, height: 28, objectFit: "contain", marginRight: 6 }}
                    onError={(e) => (e.currentTarget.style.display = "none")}
                  />
                )}
                <span className="team-badge">{m.awayBadge}</span>
                <span className="team-name">{m.awayTeam}</span>
              </div>
            </div>

            <div className="scorers-list">
              {m.status !== "UPCOMING" && (
                <>
                  {m.scorers.home.length > 0 && (
                    <div>
                      <strong style={{ color: "#10b981" }}>Home:</strong> {m.scorers.home.join(", ")}
                    </div>
                  )}
                  {m.scorers.away.length > 0 && (
                    <div style={{ marginTop: 4 }}>
                      <strong style={{ color: "#00e5ff" }}>Away:</strong> {m.scorers.away.join(", ")}
                    </div>
                  )}
                </>
              )}
              {m.status === "UPCOMING" && (
                <div style={{ fontStyle: "italic", color: "var(--text-secondary)" }}>
                  Kick-off: {m.kickOffTime}
                </div>
              )}
            </div>

            <button
              className="btn-secondary touch-interactive"
              style={{ width: "100%", marginTop: "auto", fontSize: "0.85rem" }}
            >
              <FaBookOpen style={{ color: "#00e5ff" }} />
              <span>Minute-by-Minute Commentary &amp; Stats</span>
            </button>
          </div>
        ))}
      </div>

      {/* Modal for Detailed Minute-by-Minute Commentary and Advanced Stats */}
      {selectedMatch && (
        <div className="modal-overlay" onClick={() => setSelectedMatch(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close-btn touch-interactive"
              onClick={() => setSelectedMatch(null)}
              aria-label="Close match details"
            >
              <FaTimes />
            </button>

            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <span className="badge-pill" style={{ marginBottom: 0 }}>
                {selectedMatch.competition}
              </span>
              {selectedMatch.status === "LIVE" && (
                <span className="live-badge">
                  <span className="live-dot" style={{ width: 6, height: 6 }} />
                  LIVE • {selectedMatch.minute}
                </span>
              )}
            </div>

            <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", padding: "20px 0", borderBottom: "1px solid var(--border-color)" }}>
              <div style={{ textAlign: "center", width: "40%" }}>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 8 }}>
                  {selectedMatch.homeLogo && (
                    <img
                      src={selectedMatch.homeLogo}
                      alt={selectedMatch.homeTeam}
                      style={{ width: 48, height: 48, objectFit: "contain" }}
                      onError={(e) => (e.currentTarget.style.display = "none")}
                    />
                  )}
                  <span style={{ fontSize: "2.8rem" }}>{selectedMatch.homeBadge}</span>
                </div>
                <h3 style={{ fontSize: "1.3rem", marginTop: 8 }}>{selectedMatch.homeTeam}</h3>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "2.8rem", fontWeight: 800, color: "var(--accent-primary)" }}>
                  {selectedMatch.status === "UPCOMING"
                    ? "- : -"
                    : `${selectedMatch.homeScore} - ${selectedMatch.awayScore}`}
                </div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>{selectedMatch.venue}</div>
              </div>
              <div style={{ textAlign: "center", width: "40%" }}>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 8 }}>
                  {selectedMatch.awayLogo && (
                    <img
                      src={selectedMatch.awayLogo}
                      alt={selectedMatch.awayTeam}
                      style={{ width: 48, height: 48, objectFit: "contain" }}
                      onError={(e) => (e.currentTarget.style.display = "none")}
                    />
                  )}
                  <span style={{ fontSize: "2.8rem" }}>{selectedMatch.awayBadge}</span>
                </div>
                <h3 style={{ fontSize: "1.3rem", marginTop: 8 }}>{selectedMatch.awayTeam}</h3>
              </div>
            </div>

            {selectedMatch.stats && (
              <div style={{ marginTop: 24, padding: "20px", background: "var(--bg-tertiary)", borderRadius: "14px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                  <FaChartBar style={{ color: "#00e5ff" }} />
                  <h4 style={{ fontSize: "1.05rem" }}>Advanced Match Statistics</h4>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {[
                    { label: "Possession (%)", val: selectedMatch.stats.possession, suffix: "%" },
                    { label: "Expected Goals (xG)", val: selectedMatch.stats.xg, suffix: "" },
                    { label: "Total Shots", val: selectedMatch.stats.shots, suffix: "" },
                    { label: "Shots on Target", val: selectedMatch.stats.shotsOnTarget, suffix: "" },
                    { label: "Completed Passes", val: selectedMatch.stats.passes, suffix: "" },
                    { label: "Corners", val: selectedMatch.stats.corners, suffix: "" }
                  ].map((stat, idx) => {
                    const total = stat.val[0] + stat.val[1]
                    const homePercent = total > 0 ? (stat.val[0] / total) * 100 : 50
                    return (
                      <div key={idx}>
                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem", fontWeight: 600, marginBottom: 4 }}>
                          <span>{stat.val[0]}{stat.suffix}</span>
                          <span style={{ color: "var(--text-secondary)" }}>{stat.label}</span>
                          <span>{stat.val[1]}{stat.suffix}</span>
                        </div>
                        <div style={{ width: "100%", height: 8, background: "var(--bg-primary)", borderRadius: 4, overflow: "hidden", display: "flex" }}>
                          <div style={{ width: `${homePercent}%`, background: "#00e5ff", height: "100%" }} />
                          <div style={{ width: `${100 - homePercent}%`, background: "#3b82f6", height: "100%" }} />
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}

            <div style={{ marginTop: 28 }}>
              <h4 style={{ fontSize: "1.1rem", marginBottom: 14, display: "flex", alignItems: "center", gap: 8 }}>
                <FaBookOpen style={{ color: "#10b981" }} />
                <span>Minute-by-Minute Text Commentary</span>
              </h4>

              <div className="commentary-feed">
                {selectedMatch.commentary.map((comm, idx) => (
                  <div key={idx} className="commentary-row">
                    <span className="commentary-min">{comm.minute === 0 ? "INFO" : `${comm.minute}'`}</span>
                    <div style={{ flex: 1 }}>
                      <div className="commentary-text">
                        {comm.type === "goal" && <strong style={{ color: "#10b981" }}>⚽ GOAL! </strong>}
                        {comm.type === "card" && <strong style={{ color: "#f59e0b" }}>🟨 CARD! </strong>}
                        {comm.type === "sub" && <strong style={{ color: "#3b82f6" }}>🔄 SUB! </strong>}
                        {comm.text}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
