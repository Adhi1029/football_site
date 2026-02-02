import future1 from "../assets/images/future-smart-stadium.jpg"
import future2 from "../assets/images/future-ai-analytics.jpg"

export default function Future() {
  return (
    <section id="future" className="section">
      <h2>The Future of Football</h2>
      <div className="grid">
        <img src={future1} />
        <img src={future2} />
      </div>
    </section>
  )
}