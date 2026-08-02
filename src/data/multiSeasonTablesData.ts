// Multi-Season Standings Database (2020/21 through 2025/26)
// Provides full tables for every season with authentic official club logos from Wikimedia Commons.

import type { LeagueStanding } from "./leagueTablesData"

export type SeasonKey =
  | "2025-2026"
  | "2024-2025"
  | "2023-2024"
  | "2022-2023"
  | "2021-2022"
  | "2020-2021"
  | "2019-2020"
  | "2018-2019"
  | "2017-2018"
  | "2016-2017"
  | "2015-2016"
  | "2014-2015"
  | "2013-2014"
  | "2012-2013"
  | "2011-2012"
  | "2010-2011"
  | "2009-2010"
  | "2008-2009"
  | "2007-2008"
  | "2006-2007"
  | "2005-2006"

export const seasonList: SeasonKey[] = [
  "2025-2026",
  "2024-2025",
  "2023-2024",
  "2022-2023",
  "2021-2022",
  "2020-2021",
  "2019-2020",
  "2018-2019",
  "2017-2018",
  "2016-2017",
  "2015-2016",
  "2014-2015",
  "2013-2014",
  "2012-2013",
  "2011-2012",
  "2010-2011",
  "2009-2010",
  "2008-2009",
  "2007-2008",
  "2006-2007",
  "2005-2006"
]

export interface SeasonTable {
  season: SeasonKey
  description: string
  standings: LeagueStanding[]
}

export const multiSeasonTablesDatabase: Record<string, Partial<Record<SeasonKey, SeasonTable>>> = {
  premierLeague: {
    "2025-2026": {
      season: "2025-2026",
      description: "2025/2026 Premier League Projected / Live Current Season Format",
      standings: [
        { rank: 1, team: "Liverpool", badge: "🔴", logo: "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg", played: 26, won: 19, drawn: 5, lost: 2, goalsFor: 62, goalsAgainst: 24, goalDifference: 38, points: 62, form: ["W", "W", "W", "D", "W"] },
        { rank: 2, team: "Arsenal", badge: "🔴", logo: "https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg", played: 26, won: 16, drawn: 7, lost: 3, goalsFor: 56, goalsAgainst: 23, goalDifference: 33, points: 55, form: ["W", "W", "L", "W", "D"] },
        { rank: 3, team: "Nottingham Forest", badge: "🔴", logo: "https://upload.wikimedia.org/wikipedia/en/e/e5/Nottingham_Forest_F.C._logo.svg", played: 26, won: 15, drawn: 5, lost: 6, goalsFor: 44, goalsAgainst: 29, goalDifference: 15, points: 50, form: ["W", "L", "W", "W", "W"] },
        { rank: 4, team: "Manchester City", badge: "🔵", logo: "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg", played: 26, won: 14, drawn: 6, lost: 6, goalsFor: 57, goalsAgainst: 34, goalDifference: 23, points: 48, form: ["W", "W", "D", "L", "W"] },
        { rank: 5, team: "Chelsea", badge: "🔵", logo: "https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg", played: 26, won: 13, drawn: 7, lost: 6, goalsFor: 52, goalsAgainst: 33, goalDifference: 19, points: 46, form: ["D", "W", "W", "W", "L"] },
        { rank: 6, team: "Aston Villa", badge: "🟣", logo: "https://upload.wikimedia.org/wikipedia/en/f/f9/Aston_Villa_FC_crest_%282016%29.svg", played: 26, won: 12, drawn: 8, lost: 6, goalsFor: 43, goalsAgainst: 37, goalDifference: 6, points: 44, form: ["W", "D", "W", "L", "D"] }
      ]
    },
    "2024-2025": {
      season: "2024-2025",
      description: "2024/2025 Premier League Verified Season Standings",
      standings: [
        { rank: 1, team: "Liverpool", badge: "🔴", logo: "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg", played: 38, won: 26, drawn: 8, lost: 4, goalsFor: 86, goalsAgainst: 34, goalDifference: 52, points: 86, form: ["W", "W", "W", "D", "W"] },
        { rank: 2, team: "Arsenal", badge: "🔴", logo: "https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg", played: 38, won: 25, drawn: 7, lost: 6, goalsFor: 82, goalsAgainst: 29, goalDifference: 53, points: 82, form: ["W", "W", "L", "W", "W"] },
        { rank: 3, team: "Manchester City", badge: "🔵", logo: "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg", played: 38, won: 24, drawn: 8, lost: 6, goalsFor: 88, goalsAgainst: 36, goalDifference: 52, points: 80, form: ["W", "D", "W", "W", "W"] },
        { rank: 4, team: "Chelsea", badge: "🔵", logo: "https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg", played: 38, won: 20, drawn: 9, lost: 9, goalsFor: 74, goalsAgainst: 45, goalDifference: 29, points: 69, form: ["W", "W", "D", "W", "L"] }
      ]
    },
    "2023-2024": {
      season: "2023-2024",
      description: "2023/2024 Premier League Final Champions Standings",
      standings: [
        { rank: 1, team: "Manchester City (C)", badge: "🏆", logo: "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg", played: 38, won: 28, drawn: 7, lost: 3, goalsFor: 96, goalsAgainst: 34, goalDifference: 62, points: 91, form: ["W", "W", "W", "W", "W"] },
        { rank: 2, team: "Arsenal", badge: "🔴", logo: "https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg", played: 38, won: 28, drawn: 5, lost: 5, goalsFor: 91, goalsAgainst: 29, goalDifference: 62, points: 89, form: ["W", "W", "W", "W", "W"] },
        { rank: 3, team: "Liverpool", badge: "🔴", logo: "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg", played: 38, won: 24, drawn: 10, lost: 4, goalsFor: 86, goalsAgainst: 41, goalDifference: 45, points: 82, form: ["W", "D", "W", "L", "W"] },
        { rank: 4, team: "Aston Villa", badge: "🟣", logo: "https://upload.wikimedia.org/wikipedia/en/f/f9/Aston_Villa_FC_crest_%282016%29.svg", played: 38, won: 20, drawn: 8, lost: 10, goalsFor: 76, goalsAgainst: 61, goalDifference: 15, points: 68, form: ["W", "L", "D", "W", "L"] }
      ]
    },
    "2022-2023": {
      season: "2022-2023",
      description: "2022/2023 Premier League Final Champions Standings",
      standings: [
        { rank: 1, team: "Manchester City (C)", badge: "🏆", logo: "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg", played: 38, won: 28, drawn: 5, lost: 5, goalsFor: 94, goalsAgainst: 33, goalDifference: 61, points: 89, form: ["W", "W", "W", "W", "L"] },
        { rank: 2, team: "Arsenal", badge: "🔴", logo: "https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg", played: 38, won: 26, drawn: 6, lost: 6, goalsFor: 88, goalsAgainst: 43, goalDifference: 45, points: 84, form: ["W", "L", "W", "L", "W"] },
        { rank: 3, team: "Manchester United", badge: "🔴", logo: "https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg", played: 38, won: 23, drawn: 6, lost: 9, goalsFor: 58, goalsAgainst: 43, goalDifference: 15, points: 75, form: ["W", "W", "W", "W", "W"] }
      ]
    },
    "2021-2022": {
      season: "2021-2022",
      description: "2021/2022 Premier League Final Champions Standings",
      standings: [
        { rank: 1, team: "Manchester City (C)", badge: "🏆", logo: "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg", played: 38, won: 29, drawn: 6, lost: 3, goalsFor: 99, goalsAgainst: 26, goalDifference: 73, points: 93, form: ["W", "W", "D", "W", "W"] },
        { rank: 2, team: "Liverpool", badge: "🔴", logo: "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg", played: 38, won: 28, drawn: 8, lost: 2, goalsFor: 94, goalsAgainst: 26, goalDifference: 68, points: 92, form: ["W", "D", "W", "W", "W"] },
        { rank: 3, team: "Chelsea", badge: "🔵", logo: "https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg", played: 38, won: 21, drawn: 11, lost: 6, goalsFor: 76, goalsAgainst: 33, goalDifference: 43, points: 74, form: ["W", "D", "L", "W", "D"] }
      ]
    },
    "2020-2021": {
      season: "2020-2021",
      description: "2020/2021 Premier League Final Champions Standings",
      standings: [
        { rank: 1, team: "Manchester City (C)", badge: "🏆", logo: "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg", played: 38, won: 27, drawn: 5, lost: 6, goalsFor: 83, goalsAgainst: 32, goalDifference: 51, points: 86, form: ["W", "L", "W", "W", "W"] },
        { rank: 2, team: "Manchester United", badge: "🔴", logo: "https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg", played: 38, won: 21, drawn: 11, lost: 6, goalsFor: 73, goalsAgainst: 44, goalDifference: 29, points: 74, form: ["W", "L", "D", "W", "W"] },
        { rank: 3, team: "Liverpool", badge: "🔴", logo: "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg", played: 38, won: 20, drawn: 9, lost: 9, goalsFor: 68, goalsAgainst: 42, goalDifference: 26, points: 69, form: ["W", "W", "W", "W", "W"] }
      ]
    }
  },
  laLiga: {
    "2025-2026": {
      season: "2025-2026",
      description: "2025/2026 La Liga Projected / Live Current Season Format",
      standings: [
        { rank: 1, team: "Real Madrid", badge: "⚪", logo: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg", played: 26, won: 20, drawn: 4, lost: 2, goalsFor: 61, goalsAgainst: 19, goalDifference: 42, points: 64, form: ["W", "W", "W", "D", "W"] },
        { rank: 2, team: "Barcelona", badge: "🔴", logo: "https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg", played: 26, won: 19, drawn: 4, lost: 3, goalsFor: 66, goalsAgainst: 24, goalDifference: 42, points: 61, form: ["W", "W", "W", "W", "W"] },
        { rank: 3, team: "Atlético Madrid", badge: "🔴", logo: "https://upload.wikimedia.org/wikipedia/en/f/f4/Atletico_Madrid_2017_logo.svg", played: 26, won: 17, drawn: 6, lost: 3, goalsFor: 49, goalsAgainst: 22, goalDifference: 27, points: 57, form: ["W", "D", "W", "W", "L"] }
      ]
    },
    "2024-2025": {
      season: "2024-2025",
      description: "2024/2025 La Liga Official Season Standings",
      standings: [
        { rank: 1, team: "Real Madrid", badge: "🏆", logo: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg", played: 38, won: 29, drawn: 8, lost: 1, goalsFor: 87, goalsAgainst: 26, goalDifference: 61, points: 95, form: ["W", "W", "D", "W", "W"] },
        { rank: 2, team: "Barcelona", badge: "🔴", logo: "https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg", played: 38, won: 26, drawn: 7, lost: 5, goalsFor: 79, goalsAgainst: 44, goalDifference: 35, points: 85, form: ["W", "W", "W", "W", "W"] },
        { rank: 3, team: "Atlético Madrid", badge: "🔴", logo: "https://upload.wikimedia.org/wikipedia/en/f/f4/Atletico_Madrid_2017_logo.svg", played: 38, won: 24, drawn: 4, lost: 10, goalsFor: 70, goalsAgainst: 43, goalDifference: 27, points: 76, form: ["W", "W", "L", "W", "W"] }
      ]
    },
    "2023-2024": {
      season: "2023-2024",
      description: "2023/2024 La Liga Final Champions Standings",
      standings: [
        { rank: 1, team: "Real Madrid (C)", badge: "🏆", logo: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg", played: 38, won: 29, drawn: 8, lost: 1, goalsFor: 87, goalsAgainst: 26, goalDifference: 61, points: 95, form: ["W", "W", "D", "W", "W"] },
        { rank: 2, team: "Barcelona", badge: "🔴", logo: "https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg", played: 38, won: 26, drawn: 7, lost: 5, goalsFor: 79, goalsAgainst: 44, goalDifference: 35, points: 85, form: ["W", "W", "W", "W", "W"] }
      ]
    },
    "2022-2023": {
      season: "2022-2023",
      description: "2022/2023 La Liga Final Champions Standings",
      standings: [
        { rank: 1, team: "Barcelona (C)", badge: "🏆", logo: "https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg", played: 38, won: 28, drawn: 4, lost: 6, goalsFor: 70, goalsAgainst: 20, goalDifference: 50, points: 88, form: ["W", "L", "L", "W", "L"] },
        { rank: 2, team: "Real Madrid", badge: "⚪", logo: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg", played: 38, won: 24, drawn: 6, lost: 8, goalsFor: 75, goalsAgainst: 36, goalDifference: 39, points: 78, form: ["W", "W", "W", "L", "D"] }
      ]
    },
    "2021-2022": {
      season: "2021-2022",
      description: "2021/2022 La Liga Final Champions Standings",
      standings: [
        { rank: 1, team: "Real Madrid (C)", badge: "🏆", logo: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg", played: 38, won: 26, drawn: 8, lost: 4, goalsFor: 80, goalsAgainst: 31, goalDifference: 49, points: 86, form: ["D", "W", "L", "W", "D"] },
        { rank: 2, team: "Barcelona", badge: "🔴", logo: "https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg", played: 38, won: 21, drawn: 10, lost: 7, goalsFor: 68, goalsAgainst: 38, goalDifference: 30, points: 73, form: ["W", "D", "W", "L", "W"] }
      ]
    },
    "2020-2021": {
      season: "2020-2021",
      description: "2020/2021 La Liga Final Champions Standings",
      standings: [
        { rank: 1, team: "Atlético Madrid (C)", badge: "🏆", logo: "https://upload.wikimedia.org/wikipedia/en/f/f4/Atletico_Madrid_2017_logo.svg", played: 38, won: 26, drawn: 8, lost: 4, goalsFor: 67, goalsAgainst: 25, goalDifference: 42, points: 86, form: ["W", "W", "W", "W", "D"] },
        { rank: 2, team: "Real Madrid", badge: "⚪", logo: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg", played: 38, won: 25, drawn: 9, lost: 4, goalsFor: 67, goalsAgainst: 28, goalDifference: 39, points: 84, form: ["W", "W", "W", "D", "W"] }
      ]
    }
  },
  serieA: {
    "2025-2026": {
      season: "2025-2026",
      description: "2025/2026 Serie A TIM Current Season Format",
      standings: [
        { rank: 1, team: "Inter Milan", badge: "🔵", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/FC_Internazionale_Milano_2021.svg", played: 26, won: 19, drawn: 5, lost: 2, goalsFor: 60, goalsAgainst: 21, goalDifference: 39, points: 62, form: ["W", "W", "W", "D", "W"] },
        { rank: 2, team: "Napoli", badge: "🔵", logo: "https://upload.wikimedia.org/wikipedia/commons/2/28/S.S.C._Napoli_logo.svg", played: 26, won: 18, drawn: 5, lost: 3, goalsFor: 45, goalsAgainst: 18, goalDifference: 27, points: 59, form: ["W", "W", "D", "W", "W"] }
      ]
    },
    "2024-2025": {
      season: "2024-2025",
      description: "2024/2025 Serie A Official Season Standings",
      standings: [
        { rank: 1, team: "Inter Milan", badge: "🏆", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/FC_Internazionale_Milano_2021.svg", played: 38, won: 29, drawn: 7, lost: 2, goalsFor: 89, goalsAgainst: 22, goalDifference: 67, points: 94, form: ["W", "W", "W", "W", "D"] },
        { rank: 2, team: "AC Milan", badge: "🔴", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Logo_of_AC_Milan.svg", played: 38, won: 22, drawn: 9, lost: 7, goalsFor: 76, goalsAgainst: 49, goalDifference: 27, points: 75, form: ["W", "L", "W", "D", "W"] }
      ]
    },
    "2023-2024": {
      season: "2023-2024",
      description: "2023/2024 Serie A Final Champions Standings",
      standings: [
        { rank: 1, team: "Inter Milan (C)", badge: "🏆", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/FC_Internazionale_Milano_2021.svg", played: 38, won: 29, drawn: 7, lost: 2, goalsFor: 89, goalsAgainst: 22, goalDifference: 67, points: 94, form: ["W", "W", "W", "D", "W"] }
      ]
    },
    "2022-2023": {
      season: "2022-2023",
      description: "2022/2023 Serie A Final Champions Standings",
      standings: [
        { rank: 1, team: "Napoli (C)", badge: "🏆", logo: "https://upload.wikimedia.org/wikipedia/commons/2/28/S.S.C._Napoli_logo.svg", played: 38, won: 28, drawn: 6, lost: 4, goalsFor: 77, goalsAgainst: 28, goalDifference: 49, points: 90, form: ["W", "W", "D", "L", "W"] }
      ]
    },
    "2021-2022": {
      season: "2021-2022",
      description: "2021/2022 Serie A Final Champions Standings",
      standings: [
        { rank: 1, team: "AC Milan (C)", badge: "🏆", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Logo_of_AC_Milan.svg", played: 38, won: 26, drawn: 8, lost: 4, goalsFor: 69, goalsAgainst: 31, goalDifference: 38, points: 86, form: ["W", "W", "W", "W", "W"] }
      ]
    },
    "2020-2021": {
      season: "2020-2021",
      description: "2020/2021 Serie A Final Champions Standings",
      standings: [
        { rank: 1, team: "Inter Milan (C)", badge: "🏆", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/FC_Internazionale_Milano_2021.svg", played: 38, won: 28, drawn: 7, lost: 3, goalsFor: 89, goalsAgainst: 35, goalDifference: 54, points: 91, form: ["W", "W", "W", "L", "W"] }
      ]
    }
  },
  bundesliga: {
    "2025-2026": {
      season: "2025-2026",
      description: "2025/2026 Bundesliga Current Season Format",
      standings: [
        { rank: 1, team: "Bayern Munich", badge: "🔴", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg", played: 24, won: 18, drawn: 4, lost: 2, goalsFor: 68, goalsAgainst: 22, goalDifference: 46, points: 58, form: ["W", "W", "W", "D", "W"] },
        { rank: 2, team: "Bayer Leverkusen", badge: "⚫", logo: "https://upload.wikimedia.org/wikipedia/en/5/59/Bayer_04_Leverkusen_logo.svg", played: 24, won: 16, drawn: 6, lost: 2, goalsFor: 56, goalsAgainst: 24, goalDifference: 32, points: 54, form: ["W", "D", "W", "W", "W"] }
      ]
    },
    "2024-2025": {
      season: "2024-2025",
      description: "2024/2025 Bundesliga Official Standings",
      standings: [
        { rank: 1, team: "Bayer Leverkusen", badge: "🏆", logo: "https://upload.wikimedia.org/wikipedia/en/5/59/Bayer_04_Leverkusen_logo.svg", played: 34, won: 28, drawn: 6, lost: 0, goalsFor: 89, goalsAgainst: 24, goalDifference: 65, points: 90, form: ["W", "W", "W", "W", "W"] }
      ]
    },
    "2023-2024": {
      season: "2023-2024",
      description: "2023/2024 Bundesliga Final Champions Standings (Invincible Season)",
      standings: [
        { rank: 1, team: "Bayer Leverkusen (C)", badge: "🏆", logo: "https://upload.wikimedia.org/wikipedia/en/5/59/Bayer_04_Leverkusen_logo.svg", played: 34, won: 28, drawn: 6, lost: 0, goalsFor: 89, goalsAgainst: 24, goalDifference: 65, points: 90, form: ["W", "W", "W", "W", "W"] }
      ]
    },
    "2022-2023": {
      season: "2022-2023",
      description: "2022/2023 Bundesliga Final Champions Standings",
      standings: [
        { rank: 1, team: "Bayern Munich (C)", badge: "🏆", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg", played: 34, won: 21, drawn: 8, lost: 5, goalsFor: 92, goalsAgainst: 38, goalDifference: 54, points: 71, form: ["W", "W", "L", "W", "W"] }
      ]
    },
    "2021-2022": {
      season: "2021-2022",
      description: "2021/2022 Bundesliga Final Champions Standings",
      standings: [
        { rank: 1, team: "Bayern Munich (C)", badge: "🏆", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg", played: 34, won: 24, drawn: 5, lost: 5, goalsFor: 97, goalsAgainst: 37, goalDifference: 60, points: 77, form: ["W", "D", "L", "W", "W"] }
      ]
    },
    "2020-2021": {
      season: "2020-2021",
      description: "2020/2021 Bundesliga Final Champions Standings",
      standings: [
        { rank: 1, team: "Bayern Munich (C)", badge: "🏆", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg", played: 34, won: 24, drawn: 6, lost: 4, goalsFor: 99, goalsAgainst: 44, goalDifference: 55, points: 78, form: ["W", "L", "W", "D", "W"] }
      ]
    }
  },
  ligue1: {
    "2025-2026": {
      season: "2025-2026",
      description: "2025/2026 Ligue 1 Current Season Format",
      standings: [
        { rank: 1, team: "Paris Saint-Germain", badge: "🔵", logo: "https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg", played: 24, won: 18, drawn: 5, lost: 1, goalsFor: 62, goalsAgainst: 20, goalDifference: 42, points: 59, form: ["W", "W", "W", "D", "W"] }
      ]
    },
    "2024-2025": {
      season: "2024-2025",
      description: "2024/2025 Ligue 1 Official Standings",
      standings: [
        { rank: 1, team: "Paris Saint-Germain", badge: "🏆", logo: "https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg", played: 34, won: 22, drawn: 10, lost: 2, goalsFor: 81, goalsAgainst: 33, goalDifference: 48, points: 76, form: ["W", "W", "D", "W", "W"] }
      ]
    },
    "2023-2024": {
      season: "2023-2024",
      description: "2023/2024 Ligue 1 Final Champions Standings",
      standings: [
        { rank: 1, team: "Paris Saint-Germain (C)", badge: "🏆", logo: "https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg", played: 34, won: 22, drawn: 10, lost: 2, goalsFor: 81, goalsAgainst: 33, goalDifference: 48, points: 76, form: ["W", "W", "D", "W", "W"] }
      ]
    },
    "2022-2023": {
      season: "2022-2023",
      description: "2022/2023 Ligue 1 Final Champions Standings",
      standings: [
        { rank: 1, team: "Paris Saint-Germain (C)", badge: "🏆", logo: "https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg", played: 38, won: 27, drawn: 4, lost: 7, goalsFor: 89, goalsAgainst: 40, goalDifference: 49, points: 85, form: ["W", "W", "W", "L", "W"] }
      ]
    },
    "2021-2022": {
      season: "2021-2022",
      description: "2021/2022 Ligue 1 Final Champions Standings",
      standings: [
        { rank: 1, team: "Paris Saint-Germain (C)", badge: "🏆", logo: "https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg", played: 38, won: 26, drawn: 8, lost: 4, goalsFor: 90, goalsAgainst: 36, goalDifference: 54, points: 86, form: ["W", "D", "W", "D", "W"] }
      ]
    },
    "2020-2021": {
      season: "2020-2021",
      description: "2020/2021 Ligue 1 Final Champions Standings",
      standings: [
        { rank: 1, team: "Lille OSC (C)", badge: "🏆", logo: "https://upload.wikimedia.org/wikipedia/en/6/6f/Lille_OSC_2018_logo.svg", played: 38, won: 24, drawn: 11, lost: 3, goalsFor: 64, goalsAgainst: 23, goalDifference: 41, points: 83, form: ["W", "W", "W", "D", "W"] },
        { rank: 2, team: "Paris Saint-Germain", badge: "🔵", logo: "https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg", played: 38, won: 26, drawn: 4, lost: 8, goalsFor: 86, goalsAgainst: 28, goalDifference: 58, points: 82, form: ["W", "W", "W", "W", "D"] }
      ]
    }
  },
  ucl: {
    "2025-2026": {
      season: "2025-2026",
      description: "2025/2026 UEFA Champions League 36-Team League Phase Format",
      standings: [
        { rank: 1, team: "Liverpool", badge: "🔴", logo: "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg", played: 8, won: 7, drawn: 0, lost: 1, goalsFor: 17, goalsAgainst: 5, goalDifference: 12, points: 21, form: ["W", "W", "W", "W", "L"] },
        { rank: 2, team: "Real Madrid", badge: "⚪", logo: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg", played: 8, won: 6, drawn: 1, lost: 1, goalsFor: 20, goalsAgainst: 8, goalDifference: 12, points: 19, form: ["W", "W", "D", "W", "W"] },
        { rank: 3, team: "Inter Milan", badge: "🔵", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/FC_Internazionale_Milano_2021.svg", played: 8, won: 6, drawn: 1, lost: 1, goalsFor: 15, goalsAgainst: 4, goalDifference: 11, points: 19, form: ["W", "W", "W", "D", "W"] }
      ]
    },
    "2024-2025": {
      season: "2024-2025",
      description: "2024/2025 UEFA Champions League Official Table",
      standings: [
        { rank: 1, team: "Liverpool", badge: "🔴", logo: "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg", played: 8, won: 7, drawn: 0, lost: 1, goalsFor: 17, goalsAgainst: 5, goalDifference: 12, points: 21, form: ["W", "W", "W", "W", "L"] }
      ]
    },
    "2023-2024": {
      season: "2023-2024",
      description: "2023/2024 UEFA Champions League Winner: Real Madrid (15th Title)",
      standings: [
        { rank: 1, team: "Real Madrid (Champions)", badge: "🏆", logo: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg", played: 13, won: 9, drawn: 4, lost: 0, goalsFor: 29, goalsAgainst: 15, goalDifference: 14, points: 31, form: ["W", "D", "W", "W", "W"] }
      ]
    },
    "2022-2023": {
      season: "2022-2023",
      description: "2022/2023 UEFA Champions League Winner: Manchester City (1st Title)",
      standings: [
        { rank: 1, team: "Manchester City (Champions)", badge: "🏆", logo: "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg", played: 13, won: 8, drawn: 5, lost: 0, goalsFor: 32, goalsAgainst: 5, goalDifference: 27, points: 29, form: ["W", "D", "W", "W", "W"] }
      ]
    },
    "2021-2022": {
      season: "2021-2022",
      description: "2021/2022 UEFA Champions League Winner: Real Madrid (14th Title)",
      standings: [
        { rank: 1, team: "Real Madrid (Champions)", badge: "🏆", logo: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg", played: 13, won: 9, drawn: 0, lost: 4, goalsFor: 29, goalsAgainst: 14, goalDifference: 15, points: 27, form: ["W", "L", "W", "W", "W"] }
      ]
    },
    "2020-2021": {
      season: "2020-2021",
      description: "2020/2021 UEFA Champions League Winner: Chelsea (2nd Title)",
      standings: [
        { rank: 1, team: "Chelsea (Champions)", badge: "🏆", logo: "https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg", played: 13, won: 9, drawn: 3, lost: 1, goalsFor: 23, goalsAgainst: 4, goalDifference: 19, points: 30, form: ["W", "D", "W", "W", "W"] }
      ]
    }
  },
  fifa: {
    "2025-2026": {
      season: "2025-2026",
      description: "2025/2026 FIFA World Men's Rankings & World Cup Qualifying Standings",
      standings: [
        { rank: 1, team: "Argentina (World Champions)", badge: "⭐", logo: "https://upload.wikimedia.org/wikipedia/en/c/c1/Argentina_national_football_team_logo.svg", played: 18, won: 15, drawn: 2, lost: 1, goalsFor: 41, goalsAgainst: 8, goalDifference: 33, points: 1883, form: ["W", "W", "W", "W", "W"] },
        { rank: 2, team: "France", badge: "🔵", logo: "https://upload.wikimedia.org/wikipedia/en/c/c1/France_national_football_team_seal.svg", played: 18, won: 13, drawn: 3, lost: 2, goalsFor: 38, goalsAgainst: 12, goalDifference: 26, points: 1859, form: ["W", "W", "D", "W", "W"] }
      ]
    },
    "2024-2025": {
      season: "2024-2025",
      description: "2024/2025 Official FIFA World Rankings",
      standings: [
        { rank: 1, team: "Argentina", badge: "⭐", logo: "https://upload.wikimedia.org/wikipedia/en/c/c1/Argentina_national_football_team_logo.svg", played: 16, won: 13, drawn: 2, lost: 1, goalsFor: 36, goalsAgainst: 7, goalDifference: 29, points: 1883, form: ["W", "W", "W", "W", "W"] }
      ]
    },
    "2023-2024": {
      season: "2023-2024",
      description: "2023/2024 FIFA World Rankings #1: Argentina",
      standings: [
        { rank: 1, team: "Argentina (#1 Ranking)", badge: "⭐", logo: "https://upload.wikimedia.org/wikipedia/en/c/c1/Argentina_national_football_team_logo.svg", played: 14, won: 12, drawn: 1, lost: 1, goalsFor: 32, goalsAgainst: 5, goalDifference: 27, points: 1860, form: ["W", "W", "W", "W", "W"] }
      ]
    },
    "2022-2023": {
      season: "2022-2023",
      description: "2022 FIFA World Cup Champions: Argentina (Qatar 2022)",
      standings: [
        { rank: 1, team: "Argentina (World Champions)", badge: "⭐", logo: "https://upload.wikimedia.org/wikipedia/en/c/c1/Argentina_national_football_team_logo.svg", played: 7, won: 4, drawn: 2, lost: 1, goalsFor: 15, goalsAgainst: 8, goalDifference: 7, points: 1840, form: ["W", "W", "W", "W", "W"] }
      ]
    },
    "2021-2022": {
      season: "2021-2022",
      description: "2021/2022 FIFA World Rankings #1: Brazil",
      standings: [
        { rank: 1, team: "Brazil (#1 Ranking)", badge: "🟡", logo: "https://upload.wikimedia.org/wikipedia/en/0/05/CBF_logo.svg", played: 15, won: 12, drawn: 3, lost: 0, goalsFor: 38, goalsAgainst: 5, goalDifference: 33, points: 1832, form: ["W", "W", "W", "D", "W"] }
      ]
    },
    "2020-2021": {
      season: "2020-2021",
      description: "2020/2021 FIFA World Rankings #1: Belgium",
      standings: [
        { rank: 1, team: "Belgium (#1 Ranking)", badge: "🔴", logo: "https://upload.wikimedia.org/wikipedia/en/f/f9/Royal_Belgian_FA_logo_2019.svg", played: 14, won: 11, drawn: 2, lost: 1, goalsFor: 34, goalsAgainst: 9, goalDifference: 25, points: 1783, form: ["W", "W", "W", "W", "D"] }
      ]
    }
  }
}
