import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import History from "./components/History"
import Present from "./components/Present"
import Future from "./components/Future"
import GOATS from "./components/GOATS"
import Chatbot from "./components/Chatbot"
import "./App.css"

function App() {
  const [theme, setTheme] = useState<"dark" | "light">("dark")

  useEffect(() => {
    document.body.className = theme
  }, [theme])

  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <History />
      <Present />
      <Future />
      <GOATS />
      <Chatbot />
    </>
  )
}

export default App