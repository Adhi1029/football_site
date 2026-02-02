import messi from "../assets/images/goat-messi.jpg"
import ronaldo from "../assets/images/goat-ronaldo.jpg"
import pele from "../assets/images/goat-pele.jpg"

export default function GOATS() {
  return (
    <section id="goats" className="section dark">
      <h2>Greatest of All Time</h2>
      <div className="cards">
        <div className="card">
          <img src={messi} />
          <h3>Messi</h3>
        </div>
        <div className="card">
          <img src={ronaldo} />
          <h3>Ronaldo</h3>
        </div>
        <div className="card">
          <img src={pele} />
          <h3>Pelé</h3>
        </div>
      </div>
    </section>
  )
}