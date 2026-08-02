import { useState, useMemo } from "react"
import { leagueTables } from "../data/leagueTablesData"
import type { LeagueTable, LeagueStanding } from "../data/leagueTablesData"
import { pastWinnersDatabase } from "../data/pastWinnersData"
import type { LeagueHistoryData } from "../data/pastWinnersData"
import { seasonList } from "../data/multiSeasonTablesData"
import type { SeasonKey } from "../data/multiSeasonTablesData"
import { getFull20TeamStandings } from "../data/full20TeamsHelper"
import { getTeamSquadOrDefault } from "../data/squadsEafcData"
import type { TeamSquad, EAFCPlayer } from "../data/squadsEafcData"
import { majorAwardsDatabase } from "../data/majorAwardsData"
import type { AwardWinner } from "../data/majorAwardsData"
import { FaTrophy, FaHistory, FaTimes, FaCrown, FaUsers, FaCalendarAlt, FaFilter, FaMedal } from "react-icons/fa"

export default function LeagueTables() {
  const [selectedLeagueKey, setSelectedLeagueKey] = useState<string>("premierLeague")
  const [selectedSeason, setSelectedSeason] = useState<SeasonKey>("2025-2026")
  const [showWinnersModal, setShowWinnersModal] = useState<boolean>(false)
  const [selectedSquad, setSelectedSquad] = useState<TeamSquad | null>(null)
  const [, setInspectedPlayer] = useState<EAFCPlayer | null>(null)

  // VIEW MODE: "standings" | "awards"
  const [activeView, setActiveView] = useState<"standings" | "awards">("standings")

  // UNIVERSAL FILTER BAR STATE
  const [filterYear, setFilterYear] = useState<string>("all")
  const [filterClub, setFilterClub] = useState<string>("all")
  const [filterTitles, setFilterTitles] = useState<string>("all")
  const [filterAge, setFilterAge] = useState<string>("all")

  const currentLeague: LeagueTable = leagueTables[selectedLeagueKey] || leagueTables["premierLeague"]
  const historyData: LeagueHistoryData | undefined = pastWinnersDatabase[selectedLeagueKey]

  // Retrieve complete 20-team season table from full20TeamsHelper
  const seasonTableObj = {
    season: selectedSeason,
    description: `${currentLeague.name} (${selectedSeason} Verified Full 20-Team Table)`,
    standings: getFull20TeamStandings(selectedLeagueKey, selectedSeason)
  }

  const handleTeamClick = (teamName: string, teamLogo: string) => {
    const squadData = getTeamSquadOrDefault(teamName, currentLeague.name, teamLogo)
    setSelectedSquad(squadData)
  }

  // Filtered Standings
  const filteredStandings = useMemo(() => {
    return seasonTableObj.standings.filter((row: LeagueStanding) => {
      if (filterClub !== "all" && !row.team.toLowerCase().includes(filterClub.toLowerCase())) return false
      return true
    })
  }, [seasonTableObj.standings, filterClub])

  // Filtered Major Awards
  const filteredAwards = useMemo(() => {
    return majorAwardsDatabase.filter((award: AwardWinner) => {
      if (filterYear !== "all" && award.year.toString() !== filterYear) return false
      if (filterClub !== "all" && !award.club.toLowerCase().includes(filterClub.toLowerCase()) && !award.winner.toLowerCase().includes(filterClub.toLowerCase())) return false
      if (filterTitles === "5plus" && award.timesWon < 5) return false
      if (filterTitles === "2plus" && award.timesWon < 2) return false
      if (filterAge === "u23" && award.age > 23) return false
      if (filterAge === "24-29" && (award.age < 24 || award.age > 29)) return false
      if (filterAge === "30plus" && award.age < 30) return false
      return true
    })
  }, [filterYear, filterClub, filterTitles, filterAge])

  // Filtered Squad Members inside Modal
  const filteredSquadMembers = useMemo(() => {
    if (!selectedSquad) return []
    return selectedSquad.squad.filter((p: EAFCPlayer) => {
      if (filterAge === "u23" && p.age > 23) return false
      if (filterAge === "24-29" && (p.age < 24 || p.age > 29)) return false
      if (filterAge === "30plus" && p.age < 30) return false
      return true
    })
  }, [selectedSquad, filterAge])

  return (
    <section id="league-tables" className="section-container">
      <div className="section-header">
        <span className="badge-pill">40+ YEARS HISTORICAL STANDINGS &amp; MAJOR AWARDS ARCHIVE</span>
        <h2 className="section-title">Europe's Top 5 Leagues • UEFA • 40-Year Major Awards</h2>
        <p className="section-subtitle">
          Explore complete standings and 40+ years of Major World Awards (Ballon d'Or, Golden Ball, Golden Boot, Golden Foot). Use the Universal Filter Bar above the tables to filter by year, club, titles won, and age.
        </p>
      </div>

      {/* UNIVERSAL ADVANCED FILTER BAR ON TOP */}
      <div
        className="glass-card"
        style={{
          padding: "18px 24px",
          marginBottom: "24px",
          border: "1px solid rgba(0, 229, 255, 0.25)",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "14px",
          background: "linear-gradient(135deg, rgba(15, 23, 42, 0.9), rgba(30, 41, 59, 0.85))"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <FaFilter style={{ color: "#00e5ff", fontSize: "1.1rem" }} />
          <span style={{ fontWeight: 800, color: "white", fontSize: "0.95rem" }}>UNIVERSAL FILTERS:</span>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "12px" }}>
          {/* Year-wise Filter */}
          <div style={{ display: "flex", alignItems: "center", gap: 6, background: "var(--bg-primary)", padding: "6px 12px", borderRadius: "8px", border: "1px solid var(--border-color)" }}>
            <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Year:</span>
            <select
              value={filterYear}
              onChange={(e) => setFilterYear(e.target.value)}
              style={{ background: "transparent", border: "none", color: "white", fontWeight: 700, fontSize: "0.88rem", outline: "none", cursor: "pointer" }}
              aria-label="Filter by Year"
            >
              <option value="all" style={{ background: "#0f172a" }}>All Years (1985–2026)</option>
              <option value="2024" style={{ background: "#0f172a" }}>2024</option>
              <option value="2023" style={{ background: "#0f172a" }}>2023</option>
              <option value="2022" style={{ background: "#0f172a" }}>2022</option>
              <option value="2021" style={{ background: "#0f172a" }}>2021</option>
              <option value="2018" style={{ background: "#0f172a" }}>2018</option>
              <option value="2014" style={{ background: "#0f172a" }}>2014</option>
              <option value="2007" style={{ background: "#0f172a" }}>2007</option>
              <option value="1998" style={{ background: "#0f172a" }}>1998</option>
              <option value="1986" style={{ background: "#0f172a" }}>1986</option>
            </select>
          </div>

          {/* Club-wise Filter */}
          <div style={{ display: "flex", alignItems: "center", gap: 6, background: "var(--bg-primary)", padding: "6px 12px", borderRadius: "8px", border: "1px solid var(--border-color)" }}>
            <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Club:</span>
            <select
              value={filterClub}
              onChange={(e) => setFilterClub(e.target.value)}
              style={{ background: "transparent", border: "none", color: "white", fontWeight: 700, fontSize: "0.88rem", outline: "none", cursor: "pointer" }}
              aria-label="Filter by Club"
            >
              <option value="all" style={{ background: "#0f172a" }}>All Clubs / Teams</option>
              <option value="Real Madrid" style={{ background: "#0f172a" }}>Real Madrid</option>
              <option value="Barcelona" style={{ background: "#0f172a" }}>FC Barcelona</option>
              <option value="Liverpool" style={{ background: "#0f172a" }}>Liverpool</option>
              <option value="Manchester City" style={{ background: "#0f172a" }}>Manchester City</option>
              <option value="Arsenal" style={{ background: "#0f172a" }}>Arsenal</option>
              <option value="Bayern Munich" style={{ background: "#0f172a" }}>Bayern Munich</option>
              <option value="Inter Milan" style={{ background: "#0f172a" }}>Inter Milan</option>
              <option value="AC Milan" style={{ background: "#0f172a" }}>AC Milan</option>
              <option value="PSG" style={{ background: "#0f172a" }}>PSG / Paris</option>
            </select>
          </div>

          {/* Number of Times Won Filter */}
          <div style={{ display: "flex", alignItems: "center", gap: 6, background: "var(--bg-primary)", padding: "6px 12px", borderRadius: "8px", border: "1px solid var(--border-color)" }}>
            <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Titles / Wins:</span>
            <select
              value={filterTitles}
              onChange={(e) => setFilterTitles(e.target.value)}
              style={{ background: "transparent", border: "none", color: "white", fontWeight: 700, fontSize: "0.88rem", outline: "none", cursor: "pointer" }}
              aria-label="Filter by Number of Titles or Wins"
            >
              <option value="all" style={{ background: "#0f172a" }}>All Title Counts</option>
              <option value="5plus" style={{ background: "#0f172a" }}>5+ Times Won (Legends)</option>
              <option value="2plus" style={{ background: "#0f172a" }}>2+ Times Won (Multiple)</option>
            </select>
          </div>

          {/* Age-wise Filter */}
          <div style={{ display: "flex", alignItems: "center", gap: 6, background: "var(--bg-primary)", padding: "6px 12px", borderRadius: "8px", border: "1px solid var(--border-color)" }}>
            <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Age-wise:</span>
            <select
              value={filterAge}
              onChange={(e) => setFilterAge(e.target.value)}
              style={{ background: "transparent", border: "none", color: "white", fontWeight: 700, fontSize: "0.88rem", outline: "none", cursor: "pointer" }}
              aria-label="Filter by Player Age"
            >
              <option value="all" style={{ background: "#0f172a" }}>All Ages</option>
              <option value="u23" style={{ background: "#0f172a" }}>Under 23 (Wonderkids)</option>
              <option value="24-29" style={{ background: "#0f172a" }}>24–29 (Peak Prime)</option>
              <option value="30plus" style={{ background: "#0f172a" }}>30+ (Veterans)</option>
            </select>
          </div>

          {/* Reset Filters button */}
          {(filterYear !== "all" || filterClub !== "all" || filterTitles !== "all" || filterAge !== "all") && (
            <button
              onClick={() => {
                setFilterYear("all")
                setFilterClub("all")
                setFilterTitles("all")
                setFilterAge("all")
              }}
              style={{ background: "rgba(239, 68, 68, 0.2)", color: "#ef4444", padding: "6px 12px", borderRadius: "8px", fontSize: "0.8rem", fontWeight: 700, border: "1px solid #ef4444" }}
            >
              Reset Filters
            </button>
          )}
        </div>
      </div>

      {/* View Mode Selector: League Standings vs 40-Year Awards Archive */}
      <div style={{ display: "flex", gap: "12px", marginBottom: "20px" }}>
        <button
          onClick={() => setActiveView("standings")}
          className={`tab-btn touch-interactive ${activeView === "standings" ? "active" : ""}`}
          style={{ padding: "12px 24px", fontSize: "1rem" }}
        >
          <FaTrophy />
          <span>Multi-Season League Standings (2020–2026)</span>
        </button>

        <button
          onClick={() => setActiveView("awards")}
          className={`tab-btn touch-interactive ${activeView === "awards" ? "active" : ""}`}
          style={{ padding: "12px 24px", fontSize: "1rem" }}
        >
          <FaMedal />
          <span>40-Year Major Awards Archive (Ballon d'Or, Golden Boot, Golden Foot)</span>
        </button>
      </div>

      {activeView === "standings" ? (
        <>
          {/* League Selection Tabs */}
          <div className="match-center-tabs">
            {Object.keys(leagueTables).map((key) => {
              const l = leagueTables[key]
              return (
                <button
                  key={key}
                  onClick={() => setSelectedLeagueKey(key)}
                  className={`tab-btn touch-interactive ${selectedLeagueKey === key ? "active" : ""}`}
                >
                  <span>{l.icon}</span>
                  <span>{l.name}</span>
                </button>
              )
            })}
          </div>

          <div className="glass-card table-wrapper">
            <div className="table-header">
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ fontSize: "1.8rem" }}>{currentLeague.icon}</span>
                  <h3 className="table-title">{currentLeague.name}</h3>
                </div>
                <p className="table-desc">
                  {seasonTableObj.description} • Click any team to inspect squad with player photos &amp; EA FC cards.
                </p>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
                {/* Season Dropdown Menu */}
                <div style={{ display: "flex", alignItems: "center", gap: 8, background: "var(--bg-primary)", padding: "6px 12px", borderRadius: "10px", border: "1px solid var(--border-color)" }}>
                  <FaCalendarAlt style={{ color: "#00e5ff" }} />
                  <span style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>Season:</span>
                  <select
                    value={selectedSeason}
                    onChange={(e) => setSelectedSeason(e.target.value as SeasonKey)}
                    style={{
                      background: "transparent",
                      color: "var(--text-primary)",
                      border: "none",
                      fontWeight: 700,
                      fontSize: "0.92rem",
                      cursor: "pointer",
                      outline: "none"
                    }}
                    aria-label="Select season standings"
                  >
                    {seasonList.map((season) => (
                      <option key={season} value={season} style={{ background: "#0f172a", color: "white" }}>
                        {season} Season
                      </option>
                    ))}
                  </select>
                </div>

                {/* Show All Past Winners button */}
                <button
                  onClick={() => setShowWinnersModal(true)}
                  className="btn-primary touch-interactive"
                  style={{
                    background: "linear-gradient(135deg, #f59e0b, #d97706)",
                    color: "#fff",
                    border: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "10px 18px"
                  }}
                  title="Show all past winners and title count leaderboard"
                >
                  <FaTrophy />
                  <span>Show All Past Winners &amp; Title Counts</span>
                </button>
              </div>
            </div>

            <div className="table-responsive">
              <table className="league-table">
                <thead>
                  <tr>
                    <th>POS</th>
                    <th>CLUB / TEAM &amp; EA FC SQUAD</th>
                    <th>P</th>
                    <th>W</th>
                    <th>D</th>
                    <th>L</th>
                    <th>GF</th>
                    <th>GA</th>
                    <th>GD</th>
                    <th>PTS</th>
                    <th>FORM GUIDE</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredStandings.map((row: LeagueStanding) => (
                    <tr
                      key={row.team}
                      onClick={() => handleTeamClick(row.team, row.logo)}
                      className="touch-interactive table-row-clickable"
                      style={{ cursor: "pointer" }}
                      title={`Click to open ${row.team} full squad & EA FC 25 player cards`}
                    >
                      <td className="col-pos">
                        {row.rank === 1 ? (
                          <span className="pos-champion">
                            <FaCrown style={{ color: "#f59e0b", marginRight: 4 }} />
                            {row.rank}
                          </span>
                        ) : (
                          row.rank
                        )}
                      </td>
                      <td className="col-team">
                        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                          <img
                            src={row.logo}
                            alt={row.team}
                            className="team-table-logo"
                            style={{ width: 26, height: 26, objectFit: "contain" }}
                            onError={(e) => (e.currentTarget.style.display = "none")}
                          />
                          <span className="team-table-name" style={{ fontWeight: 700 }}>
                            {row.team}
                          </span>
                          <span
                            style={{
                              background: "rgba(0, 229, 255, 0.12)",
                              color: "#00e5ff",
                              fontSize: "0.72rem",
                              padding: "2px 8px",
                              borderRadius: "12px",
                              display: "flex",
                              alignItems: "center",
                              gap: 4
                            }}
                          >
                            <FaUsers /> Squad
                          </span>
                        </div>
                      </td>
                      <td>{row.played}</td>
                      <td>{row.won}</td>
                      <td>{row.drawn}</td>
                      <td>{row.lost}</td>
                      <td>{row.goalsFor}</td>
                      <td>{row.goalsAgainst}</td>
                      <td>{row.goalDifference > 0 ? `+${row.goalDifference}` : row.goalDifference}</td>
                      <td className="col-pts" style={{ fontWeight: 800, color: "var(--accent-primary)" }}>
                        {row.points}
                      </td>
                      <td>
                        <div className="form-badges">
                          {row.form.map((res: string, idx: number) => (
                            <span
                              key={idx}
                              className={`form-badge ${
                                res === "W" ? "form-w" : res === "D" ? "form-d" : "form-l"
                              }`}
                            >
                              {res}
                            </span>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      ) : (
        /* 40-YEAR MAJOR AWARDS ARCHIVE VIEW */
        <div className="glass-card" style={{ padding: "28px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24, borderBottom: "1px solid var(--border-color)", paddingBottom: 16 }}>
            <div>
              <h3 style={{ fontSize: "1.7rem", margin: "0 0 6px 0" }}>
                40-Year Major Football Awards Archive (1985–2025)
              </h3>
              <p style={{ color: "var(--text-secondary)", margin: 0, fontSize: "0.95rem" }}>
                Verified winners of the Ballon d'Or, FIFA World Cup Golden Ball, FIFA World Cup Golden Boot, European Golden Shoe, and Golden Foot.
              </p>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 8, background: "rgba(245, 158, 11, 0.15)", color: "#f59e0b", padding: "6px 14px", borderRadius: "12px", fontWeight: 700, fontSize: "0.85rem" }}>
              <FaMedal />
              <span>Showing {filteredAwards.length} Award Records</span>
            </div>
          </div>

          {filteredAwards.length === 0 ? (
            <div style={{ textAlign: "center", padding: "48px 0", color: "var(--text-secondary)" }}>
              No awards matched your active filters. Try resetting the filters above.
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "20px" }}>
              {filteredAwards.map((award, idx) => (
                <div
                  key={`${award.year}-${award.awardName}-${idx}`}
                  className="glass-card touch-interactive"
                  style={{
                    padding: "20px",
                    background: "linear-gradient(150deg, rgba(30, 41, 59, 0.9), rgba(15, 23, 42, 0.95))",
                    border: "1px solid rgba(245, 158, 11, 0.35)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between"
                  }}
                >
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                      <span className="badge-pill" style={{ marginBottom: 0, background: "rgba(245, 158, 11, 0.2)", color: "#f59e0b", fontSize: "0.78rem" }}>
                        🏆 {award.awardName} • {award.year}
                      </span>
                      <span style={{ fontSize: "1.4rem" }}>{award.countryFlag}</span>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
                      {/* Winner Portrait Photo */}
                      <div
                        style={{
                          width: 64,
                          height: 64,
                          borderRadius: "50%",
                          overflow: "hidden",
                          border: "2px solid #f59e0b",
                          background: "#08090d",
                          flexShrink: 0
                        }}
                      >
                        <img
                          src={award.photoUrl}
                          alt={award.winner}
                          style={{ width: "100%", height: "100%", objectFit: "cover" }}
                          onError={(e) => (e.currentTarget.style.display = "none")}
                        />
                      </div>

                      <div>
                        <h4 style={{ fontSize: "1.3rem", fontWeight: 800, color: "white", margin: "0 0 4px 0" }}>
                          {award.winner}
                        </h4>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.85rem", color: "var(--accent-primary)", fontWeight: 600 }}>
                          <img
                            src={award.clubLogo}
                            alt={award.club}
                            style={{ width: 20, height: 20, objectFit: "contain" }}
                          />
                          <span>{award.club} • Age {award.age}</span>
                        </div>
                      </div>
                    </div>

                    <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", lineHeight: "1.5", margin: 0 }}>
                      {award.description}
                    </p>
                  </div>

                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 16, paddingTop: 12, borderTop: "1px solid rgba(255, 255, 255, 0.08)", fontSize: "0.78rem", color: "#10b981", fontWeight: 700 }}>
                    <span>• {award.country} National Team</span>
                    <span>{award.timesWon}x Winner</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* MODAL: TEAM ENTIRE SQUAD & EA FC 25 PLAYER CARDS */}
      {selectedSquad && (
        <div className="modal-overlay" onClick={() => setSelectedSquad(null)}>
          <div
            className="modal-content"
            style={{ maxWidth: "900px", maxHeight: "88vh", overflowY: "auto" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close-btn touch-interactive"
              onClick={() => setSelectedSquad(null)}
              aria-label="Close squad modal"
            >
              <FaTimes />
            </button>

            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20, borderBottom: "1px solid var(--border-color)", paddingBottom: 16 }}>
              <div
                style={{
                  width: 60,
                  height: 60,
                  background: "rgba(255, 255, 255, 0.08)",
                  borderRadius: 14,
                  padding: 8,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0
                }}
              >
                <img
                  src={selectedSquad.logo}
                  alt={selectedSquad.teamName}
                  style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }}
                />
              </div>
              <div>
                <span className="badge-pill" style={{ marginBottom: 4, background: "rgba(0, 229, 255, 0.15)", color: "#00e5ff" }}>
                  {selectedSquad.league} • SQUAD DESK
                </span>
                <h3 style={{ fontSize: "1.8rem", margin: 0 }}>
                  {selectedSquad.teamName} — Entire First-Team Squad
                </h3>
                <div style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginTop: 4 }}>
                  Manager: <strong style={{ color: "var(--text-primary)" }}>{selectedSquad.manager}</strong> • Showing {filteredSquadMembers.length} players ({filterAge === "all" ? "All Ages" : filterAge})
                </div>
              </div>
            </div>

            {/* Squad EA FC Cards Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16 }}>
              {filteredSquadMembers.map((player) => (
                <div
                  key={player.id}
                  className="glass-card touch-interactive"
                  onClick={() => setInspectedPlayer(player)}
                  style={{
                    padding: "16px",
                    background: "linear-gradient(150deg, rgba(30, 41, 59, 0.9), rgba(15, 23, 42, 0.95))",
                    border: "1px solid rgba(245, 158, 11, 0.4)",
                    cursor: "pointer",
                    position: "relative"
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", background: "rgba(245, 158, 11, 0.15)", padding: "6px 10px", borderRadius: "8px", border: "1px solid rgba(245, 158, 11, 0.4)" }}>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: "1.7rem", fontWeight: 800, color: "#f59e0b", lineHeight: "1" }}>
                        {player.rating}
                      </span>
                      <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "white", marginTop: 2 }}>
                        {player.position}
                      </span>
                    </div>

                    {/* PLAYER PORTRAIT PHOTO IN SQUAD CARD */}
                    <div
                      style={{
                        width: 58,
                        height: 58,
                        borderRadius: "50%",
                        overflow: "hidden",
                        border: "2px solid #f59e0b",
                        background: "#08090d",
                        flexShrink: 0
                      }}
                    >
                      <img
                        src={player.photoUrl}
                        alt={player.name}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        onError={(e) => (e.currentTarget.style.display = "none")}
                      />
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ fontSize: "1.4rem" }}>{player.nationalityFlag}</span>
                      <span className="badge-pill" style={{ marginBottom: 0, padding: "2px 8px", fontSize: "0.7rem", background: "rgba(0, 229, 255, 0.15)", color: "#00e5ff" }}>
                        #{player.number}
                      </span>
                    </div>
                  </div>

                  <h4 style={{ fontSize: "1.2rem", fontWeight: 800, color: "white", margin: "0 0 4px 0" }}>
                    {player.name}
                  </h4>
                  <div style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginBottom: 10 }}>
                    Age {player.age} • Shirt #{player.number}
                  </div>

                  {/* EA FC 6 Stats */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(3, 1fr)",
                      gap: "6px",
                      padding: "8px",
                      background: "rgba(0, 0, 0, 0.35)",
                      borderRadius: "8px",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      marginBottom: 10
                    }}
                  >
                    <div style={{ textAlign: "center" }}>
                      <div style={{ fontSize: "0.68rem", color: "var(--text-muted)" }}>PAC</div>
                      <div style={{ fontFamily: "var(--font-mono)", fontWeight: 700, color: "#10b981", fontSize: "0.95rem" }}>{player.stats.pac}</div>
                    </div>
                    <div style={{ textAlign: "center" }}>
                      <div style={{ fontSize: "0.68rem", color: "var(--text-muted)" }}>SHO</div>
                      <div style={{ fontFamily: "var(--font-mono)", fontWeight: 700, color: "#f59e0b", fontSize: "0.95rem" }}>{player.stats.sho}</div>
                    </div>
                    <div style={{ textAlign: "center" }}>
                      <div style={{ fontSize: "0.68rem", color: "var(--text-muted)" }}>PAS</div>
                      <div style={{ fontFamily: "var(--font-mono)", fontWeight: 700, color: "#00e5ff", fontSize: "0.95rem" }}>{player.stats.pas}</div>
                    </div>
                    <div style={{ textAlign: "center" }}>
                      <div style={{ fontSize: "0.68rem", color: "var(--text-muted)" }}>DRI</div>
                      <div style={{ fontFamily: "var(--font-mono)", fontWeight: 700, color: "#10b981", fontSize: "0.95rem" }}>{player.stats.dri}</div>
                    </div>
                    <div style={{ textAlign: "center" }}>
                      <div style={{ fontSize: "0.68rem", color: "var(--text-muted)" }}>DEF</div>
                      <div style={{ fontFamily: "var(--font-mono)", fontWeight: 700, color: "var(--text-secondary)", fontSize: "0.95rem" }}>{player.stats.def}</div>
                    </div>
                    <div style={{ textAlign: "center" }}>
                      <div style={{ fontSize: "0.68rem", color: "var(--text-muted)" }}>PHY</div>
                      <div style={{ fontFamily: "var(--font-mono)", fontWeight: 700, color: "#f59e0b", fontSize: "0.95rem" }}>{player.stats.phy}</div>
                    </div>
                  </div>

                  <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)", lineHeight: "1.4", margin: 0 }}>
                    {player.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* MODAL: PAST WINNERS & ALL-TIME TITLE COUNTS */}
      {showWinnersModal && historyData && (
        <div className="modal-overlay" onClick={() => setShowWinnersModal(false)}>
          <div
            className="modal-content"
            style={{ maxWidth: "780px", maxHeight: "88vh", overflowY: "auto" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close-btn touch-interactive"
              onClick={() => setShowWinnersModal(false)}
              aria-label="Close past winners modal"
            >
              <FaTimes />
            </button>

            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <FaTrophy style={{ color: "#f59e0b", fontSize: "1.6rem" }} />
              <span className="badge-pill" style={{ marginBottom: 0, background: "rgba(245, 158, 11, 0.2)", color: "#f59e0b" }}>
                HISTORICAL TITLE LEADERBOARD
              </span>
            </div>

            <h3 style={{ fontSize: "1.7rem", marginBottom: 6 }}>
              {historyData.name} — All-Time Winners &amp; Title Counts
            </h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", marginBottom: 24 }}>
              Complete record of how many times each club/team has won the championship since the tournament started.
            </p>

            <div style={{ marginBottom: 32 }}>
              <h4 style={{ fontSize: "1.1rem", color: "#f59e0b", marginBottom: 14, display: "flex", alignItems: "center", gap: 8 }}>
                <FaCrown />
                <span>How Many Times Each Club Has Won It (Title Leaderboard)</span>
              </h4>

              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {historyData.titleLeaderboard.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "12px 18px",
                      background: idx === 0 ? "rgba(245, 158, 11, 0.15)" : "var(--bg-tertiary)",
                      borderRadius: "10px",
                      border: idx === 0 ? "1px solid #f59e0b" : "1px solid var(--border-color)"
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span style={{ fontWeight: 800, width: "26px", color: idx === 0 ? "#f59e0b" : "var(--text-muted)" }}>
                        #{idx + 1}
                      </span>
                      {item.logo && (
                        <img
                          src={item.logo}
                          alt={item.clubOrNation}
                          style={{ width: 28, height: 28, objectFit: "contain" }}
                          onError={(e) => (e.currentTarget.style.display = "none")}
                        />
                      )}
                      <span style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--text-primary)" }}>
                        {item.clubOrNation}
                      </span>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: "1.2rem", fontWeight: 800, color: "#10b981" }}>
                        {item.titles} Titles
                      </span>
                      {item.lastWon && (
                        <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                          (Last: {item.lastWon})
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 style={{ fontSize: "1.1rem", color: "var(--text-primary)", marginBottom: 14, display: "flex", alignItems: "center", gap: 8 }}>
                <FaHistory style={{ color: "#00e5ff" }} />
                <span>Recent Roll of Honour (Timeline)</span>
              </h4>

              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {historyData.recentWinners.map((s, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "10px 16px",
                      background: "var(--bg-primary)",
                      borderRadius: "8px",
                      border: "1px solid var(--border-color)",
                      fontSize: "0.9rem"
                    }}
                  >
                    <span style={{ fontWeight: 800, color: "var(--accent-primary)" }}>{s.season}</span>
                    <span style={{ fontWeight: 700, color: "#f59e0b" }}>🏆 {s.champion}</span>
                    <span style={{ color: "var(--text-secondary)" }}>2nd: {s.runnerUp}</span>
                    <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>⚽ {s.topScorer} ({s.goals}g)</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
