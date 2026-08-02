import messi from "../assets/images/goat-messi.jpg"
import ronaldo from "../assets/images/goat-ronaldo.jpg"
import pele from "../assets/images/goat-pele.jpg"
import { motion } from "framer-motion"
import { FaCrown, FaTrophy } from "react-icons/fa"

export default function GOATS() {
  const goatCards = [
    {
      img: messi,
      name: "Lionel Messi",
      flag: "🇦🇷",
      titles: "8× Ballon d'Or • 2022 FIFA World Cup Winner",
      goals: "825+ Official Goals • 350+ Assists",
      desc: "The Argentine genius whose dribbling, playmaking, and record 8 Ballon d'Or trophies make him for many the undisputed greatest in football history."
    },
    {
      img: ronaldo,
      name: "Cristiano Ronaldo",
      flag: "🇵🇹",
      titles: "5× Ballon d'Or • 5× UEFA Champions League",
      goals: "915+ Official Career Goals",
      desc: "The ultimate physical athlete and most prolific goalscorer in the history of official football, famed for his headers, clutch mentality, and longevity."
    },
    {
      img: pele,
      name: "Pelé (Edson Arantes do Nascimento)",
      flag: "🇧🇷",
      titles: "3× FIFA World Cup Champion (1958, 1962, 1970)",
      goals: "1,279 Total Career Goals",
      desc: "O Rei (The King) who transformed football into an art form, winning three World Cups and inspiring generations across the globe."
    }
  ]

  return (
    <section id="goats" className="section-container">
      <div className="section-header">
        <span className="badge-pill">LEGENDS OF THE PITCH</span>
        <h2 className="section-title">The Greatest of All Time (GOATs)</h2>
        <p className="section-subtitle">
          Celebrating the eternal icons whose artistry, records, and World Cup triumphs elevated football to the world stage.
        </p>
      </div>

      <div className="competitions-grid">
        {goatCards.map((item, idx) => (
          <motion.div
            key={item.name}
            className="glass-card competition-card touch-interactive"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
          >
            <div style={{ borderRadius: "12px", overflow: "hidden", height: "300px", position: "relative" }}>
              <img
                src={item.img}
                alt={item.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "top",
                  transition: "transform 0.4s ease"
                }}
                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
              <div
                style={{
                  position: "absolute",
                  top: 12,
                  right: 12,
                  background: "rgba(0, 0, 0, 0.8)",
                  padding: "6px 12px",
                  borderRadius: "20px",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  gap: 6
                }}
              >
                <FaCrown style={{ color: "#f59e0b" }} />
                <span>{item.flag}</span>
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h3 style={{ fontSize: "1.6rem" }}>{item.name}</h3>
            </div>

            <div style={{ color: "var(--accent-gold)", fontWeight: 700, fontSize: "0.9rem", display: "flex", alignItems: "center", gap: 8 }}>
              <FaTrophy />
              <span>{item.titles}</span>
            </div>

            <div style={{ fontFamily: "var(--font-mono)", color: "var(--accent-primary)", fontWeight: 700, fontSize: "0.95rem" }}>
              {item.goals}
            </div>

            <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}