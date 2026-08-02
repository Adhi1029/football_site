import history1 from "../assets/images/history-early-fifa.jpg"
import history2 from "../assets/images/history-old-stadium.jpg"
import history3 from "../assets/images/history-vintage-football.jpg"
import { motion } from "framer-motion"

export default function History() {
  const historyCards = [
    {
      img: history1,
      title: "1863: The London FA & Laws of the Game",
      desc: "Football as we know it was officially codified at the Freemasons' Tavern in London, establishing standard rules and separating association football from rugby."
    },
    {
      img: history2,
      title: "1904: Foundation of FIFA in Paris",
      desc: "Seven European nations united in Paris to establish the Fédération Internationale de Football Association (FIFA), laying the groundwork for global international football."
    },
    {
      img: history3,
      title: "1930: First World Cup & Golden Stadium Era",
      desc: "Uruguay hosted and won the inaugural FIFA World Cup, igniting a century of passionate stadium culture, legendary tactics, and global broadcast evolution."
    }
  ]

  return (
    <section id="history" className="section-container">
      <div className="section-header">
        <span className="badge-pill">HERITAGE &amp; ORIGINS</span>
        <h2 className="section-title">The History of Football</h2>
        <p className="section-subtitle">
          From 19th-century Victorian England to modern multi-billion-dollar global tournaments, explore the milestones that built the world's most popular sport.
        </p>
      </div>

      <div className="competitions-grid">
        {historyCards.map((item, i) => (
          <motion.div
            key={i}
            className="glass-card competition-card touch-interactive"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          >
            <div style={{ borderRadius: "12px", overflow: "hidden", height: "220px" }}>
              <img
                src={item.img}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.4s ease"
                }}
                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
            </div>
            <h3 style={{ fontSize: "1.35rem", marginTop: 8 }}>{item.title}</h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}