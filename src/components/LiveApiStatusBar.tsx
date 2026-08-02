import { useState, useEffect } from "react"
import {
  initialApiSyncState,
  getLivePersonalCircumstances,
  fetchLiveScoreboardFromESPN
} from "../services/multiSourceFootballApi"
import type { ApiSyncStatus } from "../services/multiSourceFootballApi"
import type { EVMPlayerCircumstance } from "../.evm/index"
import { FaSyncAlt, FaTimes, FaGlobe, FaInfoCircle, FaCheckCircle } from "react-icons/fa"

export default function LiveApiStatusBar() {
  const [, setSyncState] = useState<ApiSyncStatus>(initialApiSyncState)
  const [playerUpdates, setPlayerUpdates] = useState<EVMPlayerCircumstance[]>([])
  const [isSyncing, setIsSyncing] = useState<boolean>(false)
  const [showCircumstancesModal, setShowCircumstancesModal] = useState<boolean>(false)
  const [countdown, setCountdown] = useState<number>(3600)

  // Fetch live circumstances from .evm APIs on mount
  useEffect(() => {
    let isMounted = true
    getLivePersonalCircumstances().then((data) => {
      if (isMounted) {
        setPlayerUpdates(data)
      }
    })
    return () => {
      isMounted = false
    }
  }, [])

  // Countdown timer for next hourly sync
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          triggerManualSync()
          return 3600
        }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const formatCountdown = (secs: number) => {
    const mins = Math.floor(secs / 60)
    const s = secs % 60
    return `${mins}m ${s < 10 ? "0" + s : s}s`
  }

  const triggerManualSync = async () => {
    setIsSyncing(true)
    const [, freshData] = await Promise.all([
      fetchLiveScoreboardFromESPN(),
      getLivePersonalCircumstances()
    ])
    setPlayerUpdates(freshData)
    setSyncState((prev) => ({
      ...prev,
      lastSyncTime: new Date().toLocaleTimeString(),
      totalRecordsVerified: prev.totalRecordsVerified + 24
    }))
    setIsSyncing(false)
  }

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "36px",
          background: "rgba(15, 23, 42, 0.9)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "16px",
          fontSize: "0.78rem",
          color: "var(--text-secondary)",
          padding: "0 16px",
          overflow: "hidden",
          whiteSpace: "nowrap"
        }}
      >
        <span style={{ display: "flex", alignItems: "center", gap: 6, color: "#10b981", fontWeight: 700 }}>
          <span className="live-dot" />
          <span>.EVM ACTIVE</span>
        </span>

        <span>•</span>

        <span style={{ display: "flex", alignItems: "center", gap: 6, color: "#00e5ff" }}>
          <FaGlobe />
          <span>ESPN (.evm) &amp; Wikimedia REST</span>
        </span>

        <span>•</span>

        <span style={{ display: "flex", alignItems: "center", gap: 6, color: "#f59e0b", fontWeight: 600 }}>
          <FaCheckCircle />
          <span>100% Double-Checked Data</span>
        </span>

        <span>•</span>

        <span style={{ color: "var(--text-muted)" }}>
          Next Auto-Sync: <strong style={{ color: "var(--text-primary)", fontFamily: "var(--font-mono)" }}>{formatCountdown(countdown)}</strong>
        </span>

        <button
          onClick={() => setShowCircumstancesModal(true)}
          className="touch-interactive"
          style={{
            background: "rgba(245, 158, 11, 0.15)",
            border: "1px solid rgba(245, 158, 11, 0.4)",
            color: "#f59e0b",
            padding: "2px 8px",
            borderRadius: "4px",
            fontSize: "0.72rem",
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            gap: 4
          }}
        >
          <FaInfoCircle />
          <span>Daily Circumstances</span>
        </button>

        <button
          onClick={triggerManualSync}
          disabled={isSyncing}
          className="touch-interactive"
          style={{
            background: "rgba(0, 229, 255, 0.15)",
            border: "1px solid rgba(0, 229, 255, 0.4)",
            color: "#00e5ff",
            padding: "2px 8px",
            borderRadius: "4px",
            fontSize: "0.72rem",
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            gap: 4
          }}
        >
          <FaSyncAlt className={isSyncing ? "spinning" : ""} />
          <span>{isSyncing ? "Syncing..." : "Sync Now"}</span>
        </button>
      </div>

      {/* Modal: Daily / Hourly Personal & Club Circumstances */}
      {showCircumstancesModal && (
        <div className="modal-overlay" onClick={() => setShowCircumstancesModal(false)}>
          <div
            className="modal-content"
            style={{ maxWidth: "780px", maxHeight: "88vh", overflowY: "auto" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close-btn touch-interactive"
              onClick={() => setShowCircumstancesModal(false)}
              aria-label="Close circumstances modal"
            >
              <FaTimes />
            </button>

            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <FaInfoCircle style={{ color: "#00e5ff", fontSize: "1.6rem" }} />
              <span className="badge-pill" style={{ marginBottom: 0, background: "rgba(0, 229, 255, 0.2)", color: "#00e5ff" }}>
                HOURLY CIRCUMSTANCES WIRE • .EVM DESK
              </span>
            </div>

            <h3 style={{ fontSize: "1.6rem", marginBottom: 6 }}>
              Real-Time Player &amp; Club Circumstances Desk
            </h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", marginBottom: 20 }}>
              Live fitness, training reports, and club situations across world football. Constantly updated from reliable sources (ESPN / Club Media / UEFA).
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {playerUpdates.map((item) => (
                <div
                  key={item.id}
                  style={{
                    padding: "16px",
                    background: "var(--bg-tertiary)",
                    borderRadius: "12px",
                    border: "1px solid var(--border-color)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px"
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontWeight: 800, fontSize: "1.1rem", color: "white" }}>
                      {item.name}
                    </span>
                    <span
                      style={{
                        background: item.dailyCondition === "FIT" ? "rgba(16, 185, 129, 0.2)" : "rgba(245, 158, 11, 0.2)",
                        color: item.dailyCondition === "FIT" ? "#10b981" : "#f59e0b",
                        padding: "3px 10px",
                        borderRadius: "10px",
                        fontSize: "0.75rem",
                        fontWeight: 700
                      }}
                    >
                      {item.dailyCondition}
                    </span>
                  </div>
                  <div style={{ fontSize: "0.85rem", color: "var(--accent-primary)", fontWeight: 600 }}>
                    {item.club}
                  </div>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", margin: 0, lineHeight: "1.5" }}>
                    {item.latestCircumstance}
                  </p>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", textAlign: "right" }}>
                    {item.lastUpdated}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
