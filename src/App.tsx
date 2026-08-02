import { useState } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import LeagueTables from "./components/LeagueTables"
import SuperstarsTop10 from "./components/SuperstarsTop10"
import TacticalAnalysis from "./components/TacticalAnalysis"
import CompetitionsHub from "./components/CompetitionsHub"
import MassiveDataCenter from "./components/MassiveDataCenter"
import Footer from "./components/Footer"
import LiveApiStatusBar from "./components/LiveApiStatusBar"
import "./App.css"

export default function App() {
  const [theme, setTheme] = useState<"dark" | "light">("dark")

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark"
    setTheme(nextTheme)
    document.documentElement.setAttribute("data-theme", nextTheme)
    document.body.className = nextTheme
  }

  return (
    <div className={`app-container ${theme}-mode`}>
      {/* 64px Fixed Top Horizontal Navbar - Exactly like earlier, small & useful */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main Content Area - Padded 64px from top to prevent overlap */}
      <main style={{ paddingTop: "64px" }}>
        {/* Ultra-slim 36px .EVM Status Ticker Bar */}
        <LiveApiStatusBar />

        {/* Hero Section */}
        <Hero />

        {/* Multi-Season League Tables & 40-Year Major Awards with EA FC Squads */}
        <LeagueTables />

        {/* Top 10 Current World Superstars styled as EA FC 25 Cards with Photos & Ages */}
        <SuperstarsTop10 />

        {/* Top 5 Leagues • UEFA • FIFA News with ESPN Live Wire */}
        <CompetitionsHub />

        {/* Interactive Tactical Pitch Board */}
        <TacticalAnalysis />

        {/* 100% Double-Checked Massive Data & Source Verification Desk */}
        <MassiveDataCenter />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}