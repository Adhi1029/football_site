import { useState } from "react"
import type { EAFCPlayer } from "../data/squadsEafcData"
import { FaStar, FaCheckCircle, FaTimes } from "react-icons/fa"

interface SuperstarItem extends EAFCPlayer {
  clubName: string
  clubLogo: string
  rank: number
}

const top10Superstars: SuperstarItem[] = [
  {
    id: "star-haaland",
    rank: 1,
    name: "Erling Braut Haaland",
    number: 9,
    position: "ST",
    rating: 91,
    age: 24,
    photoUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Erling_Haaland_2023_%28cropped%29.jpg",
    nationalityFlag: "🇳🇴",
    cardType: "TOTY",
    clubName: "Manchester City",
    clubLogo: "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg",
    stats: { pac: 90, sho: 93, pas: 68, dri: 80, def: 45, phy: 89 },
    description: "The Nordic goalscoring phenomenon. Unstoppable burst of speed and clinical one-touch finishing."
  },
  {
    id: "star-mbappe",
    rank: 2,
    name: "Kylian Mbappé",
    number: 9,
    position: "ST",
    rating: 91,
    age: 26,
    photoUrl: "https://upload.wikimedia.org/wikipedia/commons/5/57/2019-07-17_SG_Dynamo_Dresden_vs._Paris_Saint-Germain_by_Sandro_Halank%E2%80%93129_%28cropped%29.jpg",
    nationalityFlag: "🇫🇷",
    cardType: "TOTY",
    clubName: "Real Madrid",
    clubLogo: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
    stats: { pac: 97, sho: 90, pas: 80, dri: 92, def: 36, phy: 78 },
    description: "The fastest attacker in world football. Deadly in transition and leader of the Real Madrid attack."
  },
  {
    id: "star-vini",
    rank: 3,
    name: "Vinícius Júnior",
    number: 7,
    position: "LW",
    rating: 91,
    age: 24,
    photoUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Vinicius_Jr_2021.jpg",
    nationalityFlag: "🇧🇷",
    cardType: "TOTY",
    clubName: "Real Madrid",
    clubLogo: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
    stats: { pac: 95, sho: 86, pas: 81, dri: 94, def: 29, phy: 69 },
    description: "Electrifying Brazilian winger. Unrivaled 1v1 dribbler who thrives on big European nights."
  },
  {
    id: "star-rodri",
    rank: 4,
    name: "Rodri",
    number: 16,
    position: "CDM",
    rating: 91,
    age: 28,
    photoUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Rodri_2019.jpg",
    nationalityFlag: "🇪🇸",
    cardType: "TOTY",
    clubName: "Manchester City",
    clubLogo: "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg",
    stats: { pac: 67, sho: 80, pas: 87, dri: 84, def: 88, phy: 86 },
    description: "Ballon d'Or winning midfielder. The ultimate tactical metronome who controls tempo."
  },
  {
    id: "star-bellingham",
    rank: 5,
    name: "Jude Bellingham",
    number: 5,
    position: "CAM",
    rating: 90,
    age: 21,
    photoUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Jude_Bellingham_2023.jpg",
    nationalityFlag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    cardType: "TOTY",
    clubName: "Real Madrid",
    clubLogo: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
    stats: { pac: 81, sho: 87, pas: 84, dri: 88, def: 78, phy: 84 },
    description: "English superstar at Santiago Bernabéu. Box-to-box dominance with elite attacking instincts."
  },
  {
    id: "star-salah",
    rank: 6,
    name: "Mohamed Salah",
    number: 11,
    position: "RW",
    rating: 90,
    age: 32,
    photoUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Mohamed_Salah_2018.jpg",
    nationalityFlag: "🇪🇬",
    cardType: "TOTY",
    clubName: "Liverpool FC",
    clubLogo: "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg",
    stats: { pac: 91, sho: 89, pas: 84, dri: 89, def: 45, phy: 76 },
    description: "Anfield's Egyptian King. Consistently leads the Premier League in goals and assists."
  },
  {
    id: "star-kane",
    rank: 7,
    name: "Harry Kane",
    number: 9,
    position: "ST",
    rating: 90,
    age: 31,
    photoUrl: "https://upload.wikimedia.org/wikipedia/commons/2/22/Harry_Kane_2018.jpg",
    nationalityFlag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    cardType: "TOTY",
    clubName: "Bayern Munich",
    clubLogo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg",
    stats: { pac: 70, sho: 93, pas: 85, dri: 83, def: 48, phy: 83 },
    description: "The complete center-forward. European Golden Boot winner with clinical finishing."
  },
  {
    id: "star-wirtz",
    rank: 8,
    name: "Florian Wirtz",
    number: 10,
    position: "CAM",
    rating: 88,
    age: 21,
    photoUrl: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Florian_Wirtz_2023.jpg",
    nationalityFlag: "🇩🇪",
    cardType: "TOTY",
    clubName: "Bayer 04 Leverkusen",
    clubLogo: "https://upload.wikimedia.org/wikipedia/en/5/59/Bayer_04_Leverkusen_logo.svg",
    stats: { pac: 84, sho: 82, pas: 89, dri: 91, def: 52, phy: 68 },
    description: "German creative maestro. Unlocks tight defences with rapid turns and spatial awareness."
  },
  {
    id: "star-saka",
    rank: 9,
    name: "Bukayo Saka",
    number: 7,
    position: "RW",
    rating: 88,
    age: 23,
    photoUrl: "https://upload.wikimedia.org/wikipedia/commons/0/00/Bukayo_Saka_2021.jpg",
    nationalityFlag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    cardType: "TOTY",
    clubName: "Arsenal FC",
    clubLogo: "https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg",
    stats: { pac: 87, sho: 84, pas: 84, dri: 88, def: 65, phy: 76 },
    description: "Arsenal's Starboy. Relentless right-wing dribbler with clinical composure."
  },
  {
    id: "star-yamal",
    rank: 10,
    name: "Lamine Yamal",
    number: 19,
    position: "RW",
    rating: 87,
    age: 18,
    photoUrl: "https://upload.wikimedia.org/wikipedia/commons/d/df/Lamine_Yamal_2023.jpg",
    nationalityFlag: "🇪🇸",
    cardType: "TOTY",
    clubName: "FC Barcelona",
    clubLogo: "https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg",
    stats: { pac: 90, sho: 82, pas: 85, dri: 91, def: 40, phy: 64 },
    description: "La Masia's 18-year-old sensation. European Championship winner with Spain."
  }
]

export default function SuperstarsTop10() {
  const [selectedPlayer, setSelectedPlayer] = useState<SuperstarItem | null>(null)

  return (
    <section id="superstars" className="section-container">
      <div className="section-header">
        <span className="badge-pill" style={{ background: "rgba(245, 158, 11, 0.15)", color: "#f59e0b" }}>
          ⭐ CURRENT WORLD SUPERSTARS
        </span>
        <h2 className="section-title">The Top 10 Elite World Superstars</h2>
        <p className="section-subtitle">
          The 10 correct world-class superstars ruling football right now. Styled as EA FC 25 Player Cards with real portrait images, OVR ratings, ages, and tactical stats.
        </p>
      </div>

      <div className="competitions-grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "24px" }}>
        {top10Superstars.map((star) => (
          <div
            key={star.id}
            className="glass-card touch-interactive"
            onClick={() => setSelectedPlayer(star)}
            style={{
              padding: "20px",
              border: "1px solid rgba(245, 158, 11, 0.35)",
              background: "linear-gradient(145deg, rgba(30, 41, 59, 0.85), rgba(15, 23, 42, 0.95))",
              position: "relative",
              overflow: "hidden",
              cursor: "pointer"
            }}
          >
            {/* EA FC Card Top Header: OVR, Position, Player Photo, Nation, Club Logo */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", background: "rgba(245, 158, 11, 0.15)", padding: "8px 12px", borderRadius: "10px", border: "1px solid rgba(245, 158, 11, 0.4)" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "2rem", fontWeight: 800, color: "#f59e0b", lineHeight: "1" }}>
                  {star.rating}
                </span>
                <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "white", marginTop: 2 }}>
                  {star.position}
                </span>
              </div>

              {/* REAL PLAYER PORTRAIT PHOTO */}
              <div
                style={{
                  width: 68,
                  height: 68,
                  borderRadius: "50%",
                  border: "2px solid #f59e0b",
                  overflow: "hidden",
                  background: "#08090d",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.5)"
                }}
              >
                <img
                  src={star.photoUrl}
                  alt={star.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  onError={(e) => (e.currentTarget.style.display = "none")}
                />
              </div>

              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 6 }}>
                <span style={{ fontSize: "1.6rem" }}>{star.nationalityFlag}</span>
                <img
                  src={star.clubLogo}
                  alt={star.clubName}
                  style={{ width: 28, height: 28, objectFit: "contain" }}
                  onError={(e) => (e.currentTarget.style.display = "none")}
                />
              </div>
            </div>

            {/* Rank badge & Name */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
              <span style={{ background: "var(--accent-primary)", color: "white", padding: "2px 8px", borderRadius: "6px", fontSize: "0.75rem", fontWeight: 700 }}>
                #{star.rank}
              </span>
              <h3 style={{ fontSize: "1.35rem", fontWeight: 800, color: "white", margin: 0 }}>
                {star.name}
              </h3>
            </div>
            <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginBottom: 14 }}>
              {star.clubName} • Age {star.age} • #{star.number}
            </div>

            {/* EA FC 6 Stats Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "8px",
                padding: "10px",
                background: "rgba(0, 0, 0, 0.35)",
                borderRadius: "10px",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                marginBottom: 14
              }}
            >
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}>PAC</div>
                <div style={{ fontFamily: "var(--font-mono)", fontWeight: 700, color: "#10b981", fontSize: "1.05rem" }}>{star.stats.pac}</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}>SHO</div>
                <div style={{ fontFamily: "var(--font-mono)", fontWeight: 700, color: "#f59e0b", fontSize: "1.05rem" }}>{star.stats.sho}</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}>PAS</div>
                <div style={{ fontFamily: "var(--font-mono)", fontWeight: 700, color: "#00e5ff", fontSize: "1.05rem" }}>{star.stats.pas}</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}>DRI</div>
                <div style={{ fontFamily: "var(--font-mono)", fontWeight: 700, color: "#10b981", fontSize: "1.05rem" }}>{star.stats.dri}</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}>DEF</div>
                <div style={{ fontFamily: "var(--font-mono)", fontWeight: 700, color: "var(--text-secondary)", fontSize: "1.05rem" }}>{star.stats.def}</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}>PHY</div>
                <div style={{ fontFamily: "var(--font-mono)", fontWeight: 700, color: "#f59e0b", fontSize: "1.05rem" }}>{star.stats.phy}</div>
              </div>
            </div>

            {/* Small description */}
            <p style={{ fontSize: "0.83rem", color: "var(--text-secondary)", lineHeight: "1.4", margin: 0 }}>
              {star.description}
            </p>

            <div style={{ marginTop: 14, paddingTop: 10, borderTop: "1px solid rgba(255, 255, 255, 0.08)", display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "0.75rem", color: "#10b981" }}>
              <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <FaCheckCircle /> Verified Top 10 Superstar
              </span>
              <span style={{ color: "#00e5ff", fontWeight: 600 }}>EA FC 25 Card</span>
            </div>
          </div>
        ))}
      </div>

      {/* Selected Superstar EA FC Modal */}
      {selectedPlayer && (
        <div className="modal-overlay" onClick={() => setSelectedPlayer(null)}>
          <div
            className="modal-content"
            style={{ maxWidth: "560px", background: "linear-gradient(160deg, #1e293b, #0f172a)", border: "2px solid #f59e0b" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close-btn touch-interactive"
              onClick={() => setSelectedPlayer(null)}
              aria-label="Close modal"
            >
              <FaTimes />
            </button>

            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <span className="badge-pill" style={{ background: "rgba(245, 158, 11, 0.2)", color: "#f59e0b", marginBottom: 0 }}>
                EA SPORTS FC 25 ELITE CARD • #{selectedPlayer.rank} IN WORLD
              </span>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 20 }}>
              <div
                style={{
                  width: 90,
                  height: 90,
                  borderRadius: "16px",
                  background: "rgba(245, 158, 11, 0.15)",
                  border: "2px solid #f59e0b",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0
                }}
              >
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "2.6rem", fontWeight: 800, color: "#f59e0b", lineHeight: "1" }}>
                  {selectedPlayer.rating}
                </span>
                <span style={{ fontSize: "0.95rem", fontWeight: 700, color: "white" }}>
                  {selectedPlayer.position}
                </span>
              </div>

              {/* Player Photo inside Modal */}
              <div style={{ width: 80, height: 80, borderRadius: "50%", overflow: "hidden", border: "2px solid #f59e0b", flexShrink: 0 }}>
                <img
                  src={selectedPlayer.photoUrl}
                  alt={selectedPlayer.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>

              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ fontSize: "1.8rem" }}>{selectedPlayer.nationalityFlag}</span>
                  <h3 style={{ fontSize: "1.8rem", fontWeight: 800, margin: 0 }}>
                    {selectedPlayer.name}
                  </h3>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 6 }}>
                  <img
                    src={selectedPlayer.clubLogo}
                    alt={selectedPlayer.clubName}
                    style={{ width: 26, height: 26, objectFit: "contain" }}
                  />
                  <span style={{ fontSize: "1.05rem", color: "var(--accent-primary)", fontWeight: 700 }}>
                    {selectedPlayer.clubName} • Age {selectedPlayer.age} • #{selectedPlayer.number}
                  </span>
                </div>
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(6, 1fr)",
                gap: "10px",
                padding: "16px",
                background: "rgba(0, 0, 0, 0.4)",
                borderRadius: "12px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                marginBottom: 20
              }}
            >
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>PACE</div>
                <div style={{ fontFamily: "var(--font-mono)", fontWeight: 800, color: "#10b981", fontSize: "1.4rem" }}>{selectedPlayer.stats.pac}</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>SHOOT</div>
                <div style={{ fontFamily: "var(--font-mono)", fontWeight: 800, color: "#f59e0b", fontSize: "1.4rem" }}>{selectedPlayer.stats.sho}</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>PASS</div>
                <div style={{ fontFamily: "var(--font-mono)", fontWeight: 800, color: "#00e5ff", fontSize: "1.4rem" }}>{selectedPlayer.stats.pas}</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>DRIB</div>
                <div style={{ fontFamily: "var(--font-mono)", fontWeight: 800, color: "#10b981", fontSize: "1.4rem" }}>{selectedPlayer.stats.dri}</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>DEF</div>
                <div style={{ fontFamily: "var(--font-mono)", fontWeight: 800, color: "var(--text-secondary)", fontSize: "1.4rem" }}>{selectedPlayer.stats.def}</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>PHYS</div>
                <div style={{ fontFamily: "var(--font-mono)", fontWeight: 800, color: "#f59e0b", fontSize: "1.4rem" }}>{selectedPlayer.stats.phy}</div>
              </div>
            </div>

            <div style={{ padding: "16px", background: "rgba(255, 255, 255, 0.05)", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
              <h4 style={{ fontSize: "1rem", color: "#f59e0b", marginBottom: 8, display: "flex", alignItems: "center", gap: 8 }}>
                <FaStar />
                <span>Superstar Scouting Report &amp; Tactical Biography</span>
              </h4>
              <p style={{ color: "var(--text-primary)", fontSize: "0.95rem", lineHeight: "1.6", margin: 0 }}>
                {selectedPlayer.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
