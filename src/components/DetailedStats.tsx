import { useState } from "react"
import { playerProfilesData } from "../data/playerStatsData"
import { FaChartLine, FaExchangeAlt, FaStar } from "react-icons/fa"

export default function DetailedStats() {
  const [selectedPlayerId, setSelectedPlayerId] = useState<string>("haaland")

  const selectedPlayer =
    playerProfilesData.find((p) => p.id === selectedPlayerId) || playerProfilesData[0]

  return (
    <section id="stats" className="section-container">
      <div className="section-header">
        <span className="badge-pill">ADVANCED ANALYTICS &amp; METRICS</span>
        <h2 className="section-title">Detailed Player Stats, xG &amp; Transfers</h2>
        <p className="section-subtitle">
          Deep-dive into player profiles, season goal tallies, transfer histories, and advanced expected goals (xG) &amp; expected assists (xA) metrics.
        </p>
      </div>

      {/* Player Selector Bar */}
      <div className="match-center-tabs">
        {playerProfilesData.map((p) => (
          <button
            key={p.id}
            onClick={() => setSelectedPlayerId(p.id)}
            className={`tab-btn touch-interactive ${selectedPlayerId === p.id ? "active" : ""}`}
            style={{ display: "flex", alignItems: "center", gap: 8 }}
          >
            <span>{p.clubBadge}</span>
            <span>{p.name}</span>
          </button>
        ))}
      </div>

      <div className="glass-card" style={{ padding: "36px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 24, borderBottom: "1px solid var(--border-color)", paddingBottom: "24px", marginBottom: "28px" }}>
          <div className="player-identity">
            <div className="player-num-badge">#{selectedPlayer.number}</div>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: "1.4rem" }}>{selectedPlayer.countryFlag}</span>
                <h3 style={{ fontSize: "2rem" }}>{selectedPlayer.name}</h3>
              </div>
              <div style={{ color: "var(--text-secondary)", fontSize: "0.95rem", marginTop: 4 }}>
                {selectedPlayer.position} • {selectedPlayer.clubBadge} <strong>{selectedPlayer.club}</strong> • Age: {selectedPlayer.age}
              </div>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ textAlign: "center", padding: "10px 18px", background: "var(--bg-tertiary)", borderRadius: "12px", border: "1px solid var(--border-color)" }}>
              <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase" }}>Season Goals</div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "1.6rem", fontWeight: 800, color: "#10b981" }}>
                {selectedPlayer.seasonGoals}
              </div>
            </div>
            <div style={{ textAlign: "center", padding: "10px 18px", background: "var(--bg-tertiary)", borderRadius: "12px", border: "1px solid var(--border-color)" }}>
              <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase" }}>Assists</div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "1.6rem", fontWeight: 800, color: "#00e5ff" }}>
                {selectedPlayer.seasonAssists}
              </div>
            </div>
            <div style={{ textAlign: "center", padding: "10px 18px", background: "var(--bg-tertiary)", borderRadius: "12px", border: "1px solid var(--border-color)" }}>
              <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase" }}>Rating</div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "1.6rem", fontWeight: 800, color: "#f59e0b" }}>
                {selectedPlayer.rating}
              </div>
            </div>
          </div>
        </div>

        <p style={{ color: "var(--text-secondary)", fontSize: "1rem", marginBottom: 32, maxWidth: "900px" }}>
          {selectedPlayer.biography}
        </p>

        <div className="player-grid">
          {/* Advanced Metrics (xG & xA Comparison) */}
          <div className="xg-meter">
            <h4 style={{ fontSize: "1.1rem", display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
              <FaChartLine style={{ color: "#00e5ff" }} />
              <span>Expected Goals (xG) vs Actual Goals</span>
            </h4>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div>
                <div className="xg-row">
                  <span>Actual Goals: {selectedPlayer.seasonGoals}</span>
                  <span style={{ color: "#00e5ff" }}>Expected Goals (xG): {selectedPlayer.xg}</span>
                </div>
                <div className="progress-bar-bg" style={{ marginTop: 6 }}>
                  <div
                    className="progress-bar-fill"
                    style={{
                      width: `${Math.min(100, (selectedPlayer.seasonGoals / 30) * 100)}%`,
                      background: selectedPlayer.seasonGoals > selectedPlayer.xg ? "#10b981" : "#3b82f6"
                    }}
                  />
                </div>
                <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: 4 }}>
                  {selectedPlayer.seasonGoals > selectedPlayer.xg
                    ? `Overperforming xG by +${(selectedPlayer.seasonGoals - selectedPlayer.xg).toFixed(1)} goals`
                    : `On track with expected chance creation`}
                </div>
              </div>

              <div>
                <div className="xg-row">
                  <span>Actual Assists: {selectedPlayer.seasonAssists}</span>
                  <span style={{ color: "#f59e0b" }}>Expected Assists (xA): {selectedPlayer.xa}</span>
                </div>
                <div className="progress-bar-bg" style={{ marginTop: 6 }}>
                  <div
                    className="progress-bar-fill"
                    style={{
                      width: `${Math.min(100, (selectedPlayer.seasonAssists / 20) * 100)}%`,
                      background: "#f59e0b"
                    }}
                  />
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 10 }}>
                <div style={{ padding: "12px", background: "var(--bg-primary)", borderRadius: "10px" }}>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Shot Accuracy</div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "1.3rem", fontWeight: 700, color: "#10b981" }}>
                    {selectedPlayer.shotAccuracy}%
                  </div>
                </div>
                <div style={{ padding: "12px", background: "var(--bg-primary)", borderRadius: "10px" }}>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Pass Accuracy</div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "1.3rem", fontWeight: 700, color: "#00e5ff" }}>
                    {selectedPlayer.passAccuracy}%
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Player Skill Breakdown */}
          <div className="xg-meter">
            <h4 style={{ fontSize: "1.1rem", display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
              <FaStar style={{ color: "#f59e0b" }} />
              <span>Attribute &amp; Skill Radar</span>
            </h4>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { label: "Shooting & Finishing", val: selectedPlayer.radar.shooting, color: "#ef4444" },
                { label: "Passing & Vision", val: selectedPlayer.radar.passing, color: "#00e5ff" },
                { label: "Dribbling & 1v1", val: selectedPlayer.radar.dribbling, color: "#3b82f6" },
                { label: "Defending & Press", val: selectedPlayer.radar.defending, color: "#a0aec0" },
                { label: "Physical Strength", val: selectedPlayer.radar.physical, color: "#f59e0b" },
                { label: "Sprint Pace", val: selectedPlayer.radar.pace, color: "#10b981" }
              ].map((attr, idx) => (
                <div key={idx}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem", fontWeight: 600, marginBottom: 4 }}>
                    <span>{attr.label}</span>
                    <span style={{ fontFamily: "var(--font-mono)", color: attr.color }}>{attr.val} / 100</span>
                  </div>
                  <div className="progress-bar-bg">
                    <div
                      className="progress-bar-fill"
                      style={{
                        width: `${attr.val}%`,
                        background: attr.color
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Transfer History Table */}
        <div style={{ marginTop: 32 }}>
          <h4 style={{ fontSize: "1.15rem", display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
            <FaExchangeAlt style={{ color: "#3b82f6" }} />
            <span>Verified Transfer History</span>
          </h4>

          <div className="table-wrapper">
            <table className="league-table" aria-label="Transfer history">
              <thead>
                <tr>
                  <th>Season</th>
                  <th>Moving From</th>
                  <th>Moving To</th>
                  <th>Transfer Fee / Deal Type</th>
                  <th>Category</th>
                </tr>
              </thead>
              <tbody>
                {selectedPlayer.transferHistory.map((rec, i) => (
                  <tr key={i}>
                    <td style={{ fontFamily: "var(--font-mono)", fontWeight: 700 }}>{rec.year}</td>
                    <td>{rec.fromClub}</td>
                    <td style={{ fontWeight: 700, color: "var(--accent-primary)" }}>{rec.toClub}</td>
                    <td style={{ fontFamily: "var(--font-mono)", color: "#10b981" }}>{rec.fee}</td>
                    <td>
                      <span className="badge-pill" style={{ marginBottom: 0, padding: "3px 10px", fontSize: "0.7rem" }}>
                        {rec.type}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
