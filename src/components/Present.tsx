import present1 from "../assets/images/present-modern-stadium.jpg"
import present2 from "../assets/images/present-champiague.jpg"
import present3 from "../assets/images/present-var-technology.jpg"

export default function Present() {
  return (
    <section id="present" className="section dark">
      <h2>Modern Era</h2>
      <div className="grid">
        <img src={present1} />
        <img src={present2} />
        <img src={present3} />
      </div>
    </section>
  )
}