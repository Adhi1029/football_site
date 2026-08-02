import { useState, useEffect } from "react"
import { initialNews } from "../data/newsAndTacticsData"
import type { NewsItem } from "../data/newsAndTacticsData"

export default function LiveNewsTicker() {
  const [newsList, setNewsList] = useState<NewsItem[]>(initialNews)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoRefreshing, setIsAutoRefreshing] = useState(true)

  // Automatically rotate through news headlines every 5 seconds
  useEffect(() => {
    if (!isAutoRefreshing) return
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % newsList.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [isAutoRefreshing, newsList.length])

  // Simulate an auto-updating live news arrival every 25 seconds
  useEffect(() => {
    if (!isAutoRefreshing) return
    const autoNewsTimer = setInterval(() => {
      const liveAlerts = [
        {
          id: `live-alert-${Date.now()}`,
          title: "🔴 BREAKING LIVE: UEFA confirms expanded prize pool for Champions League knockout stage",
          summary: "Official statement from Nyon announces increased revenue distribution for participating clubs.",
          category: "UEFA" as const,
          verified: true,
          timestamp: "Just now",
          source: "UEFA Media Live Feed",
          readTime: "2 min read",
          imageBadge: "⚡"
        },
        {
          id: `live-alert-${Date.now() + 1}`,
          title: "🚨 LIVE TRANSFER ALERT: Premier League scouts present at Bundesliga weekend derby",
          summary: "Multiple Premier League technical directors spotted analyzing top German defensive midfielders.",
          category: "Transfer Rumor" as const,
          verified: true,
          timestamp: "Just now",
          source: "Sky Sports Germany",
          readTime: "3 min read",
          imageBadge: "⚽"
        },
        {
          id: `live-alert-${Date.now() + 2}`,
          title: "🌍 FIFA WORLD CUP UPDATE: Qualifying match dates finalized for South American zone",
          summary: "CONMEBOL and FIFA announce official schedule for October qualification blockbusters.",
          category: "FIFA" as const,
          verified: true,
          timestamp: "Just now",
          source: "FIFA Live Desk",
          readTime: "2 min read",
          imageBadge: "🌍"
        }
      ]
      const randomAlert = liveAlerts[Math.floor(Math.random() * liveAlerts.length)]
      setNewsList((prev) => [randomAlert, ...prev])
      setCurrentIndex(0)
    }, 25000)

    return () => clearInterval(autoNewsTimer)
  }, [isAutoRefreshing])

  const currentItem = newsList[currentIndex] || newsList[0]

  return (
    <div className="live-ticker-banner">
      <div className="ticker-label">
        <span className="live-dot" style={{ width: 8, height: 8 }} />
        <span>LIVE NEWS</span>
      </div>

      <div className="ticker-content">
        <div className="ticker-item" key={currentItem.id}>
          <span style={{ fontSize: "1.1rem" }}>{currentItem.imageBadge}</span>
          <span style={{ fontWeight: 700, color: "#00e5ff" }}>[{currentItem.category.toUpperCase()}]</span>
          <span>{currentItem.title}</span>
          <span className="ticker-time">• {currentItem.timestamp}</span>
        </div>
      </div>

      <button
        onClick={() => setIsAutoRefreshing(!isAutoRefreshing)}
        className="auto-refresh-tag touch-interactive"
        style={{
          border: "none",
          cursor: "pointer",
          background: isAutoRefreshing ? "rgba(16, 185, 129, 0.2)" : "rgba(239, 68, 68, 0.2)",
          color: isAutoRefreshing ? "#10b981" : "#ef4444"
        }}
        title="Click to toggle automatic live news updates"
      >
        <span
          className="live-dot"
          style={{
            width: 6,
            height: 6,
            backgroundColor: isAutoRefreshing ? "#10b981" : "#ef4444"
          }}
        />
        {isAutoRefreshing ? "AUTO-UPDATING ON" : "PAUSED"}
      </button>
    </div>
  )
}
