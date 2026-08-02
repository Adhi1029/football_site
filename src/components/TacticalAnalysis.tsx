import { useState } from "react"
import { tacticalAnalyses } from "../data/newsAndTacticsData"
import type { TacticalAnalysisItem, FormationNode } from "../data/newsAndTacticsData"
import { FaUserShield, FaCheck, FaExclamationTriangle } from "react-icons/fa"

export default function TacticalAnalysis() {
  const [selectedTacticId, setSelectedTacticId] = useState<string>("tactic-1")
  const [activePlayer, setActivePlayer] = useState<FormationNode | null>(null)

  const currentTactic: TacticalAnalysisItem =
    tacticalAnalyses.find((t) => t.id === selectedTacticId) || tacticalAnalyses[0]

  return (
    <section id="tactics" className="section-container">
      <div className="section-header">
        <span className="badge-pill">TACTICAL BOARD &amp; FORMATIONS</span>
        <h2 className="section-title">Tactical Analysis &amp; Interactive Pitch</h2>
        <p className="section-subtitle">
          Explore team formations, inverted full-back movements, high-pressing Gegenpress structures, and expert opinions. Click any player on the pitch board to inspect their role.
        </p>
      </div>

      <div className="match-center-tabs">
        {tacticalAnalyses.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              setSelectedTacticId(item.id)
              setActivePlayer(null)
            }}
            className={`tab-btn touch-interactive ${selectedTacticId === item.id ? "active" : ""}`}
          >
            {item.team}: {item.formation}
          </button>
        ))}
      </div>

      <div className="tactical-container">
        {/* Interactive Football Pitch Visualizer */}
        <div className="glass-card" style={{ padding: "24px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
            <span style={{ fontFamily: "var(--font-heading)", fontWeight: 700, color: "#10b981" }}>
              TACTICAL PITCH BOARD
            </span>
            <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
              Hover / Click player nodes
            </span>
          </div>

          <div className="football-pitch" aria-label="Interactive football pitch">
            <div className="pitch-center-circle" />
            <div className="pitch-center-line" />
            <div className="pitch-penalty-left" />
            <div className="pitch-penalty-right" />

            {currentTactic.lineup.map((node) => (
              <div
                key={node.number}
                className="pitch-player-node touch-interactive"
                style={{
                  left: `${node.x}%`,
                  top: `${node.y}%`
                }}
                onClick={() => setActivePlayer(node)}
                title={`Click to inspect #${node.number} ${node.name} (${node.role})`}
              >
                <div
                  className="node-circle"
                  style={{
                    backgroundColor:
                      activePlayer?.number === node.number ? "#f59e0b" : "#00e5ff",
                    transform: activePlayer?.number === node.number ? "scale(1.15)" : "none"
                  }}
                >
                  {node.number}
                </div>
                <div className="node-name">
                  {node.name} • {node.role}
                </div>
              </div>
            ))}
          </div>

          {activePlayer ? (
            <div style={{ marginTop: 20, padding: 16, background: "var(--bg-tertiary)", borderRadius: 12, border: "1px solid var(--accent-gold)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <strong style={{ fontSize: "1.05rem", color: "#f59e0b" }}>
                  #{activePlayer.number} {activePlayer.name} ({activePlayer.role})
                </strong>
                <button
                  onClick={() => setActivePlayer(null)}
                  style={{ background: "transparent", border: "none", color: "var(--text-muted)", cursor: "pointer" }}
                >
                  Reset
                </button>
              </div>
              <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginTop: 6 }}>
                Tactical assignment in {currentTactic.formation}: Occupies positional coordinates X: {activePlayer.x}%, Y: {activePlayer.y}% to create numerical superiority.
              </p>
            </div>
          ) : (
            <div style={{ marginTop: 20, padding: 14, background: "var(--bg-tertiary)", borderRadius: 12, fontSize: "0.85rem", color: "var(--text-secondary)", textAlign: "center" }}>
              💡 Tip: Click on any player circle on the pitch board above to view positional role details.
            </div>
          )}
        </div>

        {/* Expert Tactical Breakdown */}
        <div className="glass-card" style={{ padding: "32px", display: "flex", flexDirection: "column", gap: 20 }}>
          <div>
            <span className="badge-pill">{currentTactic.team} • EXPERT ANALYSIS</span>
            <h3 style={{ fontSize: "1.8rem", lineHeight: "1.25", marginTop: 8 }}>
              {currentTactic.title}
            </h3>
            <div style={{ fontSize: "0.85rem", color: "var(--accent-primary)", fontWeight: 600, marginTop: 6 }}>
              Analysis by {currentTactic.expert} • {currentTactic.date}
            </div>
          </div>

          <p style={{ color: "var(--text-secondary)", fontSize: "1rem" }}>
            {currentTactic.summary}
          </p>

          <div>
            <h4 style={{ fontSize: "1.05rem", marginBottom: 12, color: "var(--text-primary)" }}>
              Core Tactical Pillars
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {currentTactic.keyTactics.map((tactic, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: "0.92rem", color: "var(--text-secondary)" }}>
                  <FaCheck style={{ color: "#10b981", marginTop: 4, flexShrink: 0 }} />
                  <span>{tactic}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 10 }}>
            <div style={{ background: "rgba(16, 185, 129, 0.08)", border: "1px solid rgba(16, 185, 129, 0.3)", borderRadius: "12px", padding: "16px" }}>
              <div style={{ color: "#10b981", fontWeight: 700, fontSize: "0.85rem", marginBottom: 6, display: "flex", alignItems: "center", gap: 6 }}>
                <FaUserShield /> Tactical Strength
              </div>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                {currentTactic.strength}
              </p>
            </div>

            <div style={{ background: "rgba(239, 68, 68, 0.08)", border: "1px solid rgba(239, 68, 68, 0.3)", borderRadius: "12px", padding: "16px" }}>
              <div style={{ color: "#ef4444", fontWeight: 700, fontSize: "0.85rem", marginBottom: 6, display: "flex", alignItems: "center", gap: 6 }}>
                <FaExclamationTriangle /> Potential Vulnerability
              </div>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                {currentTactic.vulnerability}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
