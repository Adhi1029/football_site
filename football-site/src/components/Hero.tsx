import { useState } from "react"

export default function Hero() {
  const [currentVideo, setCurrentVideo] = useState(0)

  const videos = [
    "/videos/crowd-cheering-loop.mp4",
    "/videos/goal-slow-motion.mp4"
  ]

  const handleEnded = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length)
  }

  return (
    <section className="hero">
      <video
        key={currentVideo}
        autoPlay
        muted
        playsInline
        onEnded={handleEnded}
        className="bg-video"
      >
        <source src={videos[currentVideo]} type="video/mp4" />
      </video>

      <div className="hero-content">
        <h2>The Beautiful Game</h2>
        <p>History • Present • Future</p>
      </div>
    </section>
  )
}