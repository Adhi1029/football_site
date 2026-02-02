import history1 from "../assets/images/history-early-fifa.jpg"
import history2 from "../assets/images/history-old-stadium.jpg"
import history3 from "../assets/images/history-vintage-football.jpg"
import { motion } from "framer-motion"

export default function History() {
  return (
    <section id="history" className="section">
      <h2>History of Football</h2>
      <div className="grid">
        {[history1, history2, history3].map((img, i) => (
          <motion.img
            key={i}
            src={img}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          />
        ))}
      </div>
    </section>
  )
}