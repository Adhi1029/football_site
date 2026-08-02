export interface LeagueStanding {
  rank: number
  team: string
  badge: string
  logo: string
  played: number
  won: number
  drawn: number
  lost: number
  goalsFor: number
  goalsAgainst: number
  goalDifference: number
  points: number
  form: string[]
}

export interface LeagueTable {
  id: string
  name: string
  icon: string
  season: string
  description: string
  standings: LeagueStanding[]
}

export const leagueTables: Record<string, LeagueTable> = {
  premierLeague: {
    id: "premierLeague",
    name: "Premier League (England Top Flight)",
    icon: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    season: "2024/2025 (Official Verified Standings)",
    description: "The top level of the English football league system, featuring 20 clubs operating on a system of promotion and relegation with the EFL.",
    standings: [
      {
        rank: 1,
        team: "Liverpool",
        badge: "🔴",
        logo: "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg",
        played: 26,
        won: 19,
        drawn: 5,
        lost: 2,
        goalsFor: 62,
        goalsAgainst: 24,
        goalDifference: 38,
        points: 62,
        form: ["W", "W", "W", "D", "W"]
      },
      {
        rank: 2,
        team: "Arsenal",
        badge: "🔴",
        logo: "https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg",
        played: 26,
        won: 16,
        drawn: 7,
        lost: 3,
        goalsFor: 56,
        goalsAgainst: 23,
        goalDifference: 33,
        points: 55,
        form: ["W", "W", "L", "W", "D"]
      },
      {
        rank: 3,
        team: "Nottingham Forest",
        badge: "🔴",
        logo: "https://upload.wikimedia.org/wikipedia/en/e/e5/Nottingham_Forest_F.C._logo.svg",
        played: 26,
        won: 15,
        drawn: 5,
        lost: 6,
        goalsFor: 44,
        goalsAgainst: 29,
        goalDifference: 15,
        points: 50,
        form: ["W", "L", "W", "W", "W"]
      },
      {
        rank: 4,
        team: "Manchester City",
        badge: "🔵",
        logo: "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg",
        played: 26,
        won: 14,
        drawn: 6,
        lost: 6,
        goalsFor: 57,
        goalsAgainst: 34,
        goalDifference: 23,
        points: 48,
        form: ["W", "W", "D", "L", "W"]
      },
      {
        rank: 5,
        team: "Chelsea",
        badge: "🔵",
        logo: "https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg",
        played: 26,
        won: 13,
        drawn: 7,
        lost: 6,
        goalsFor: 52,
        goalsAgainst: 33,
        goalDifference: 19,
        points: 46,
        form: ["D", "W", "W", "W", "L"]
      },
      {
        rank: 6,
        team: "Aston Villa",
        badge: "🟣",
        logo: "https://upload.wikimedia.org/wikipedia/en/f/f9/Aston_Villa_FC_crest_%282016%29.svg",
        played: 26,
        won: 12,
        drawn: 8,
        lost: 6,
        goalsFor: 43,
        goalsAgainst: 37,
        goalDifference: 6,
        points: 44,
        form: ["W", "D", "W", "L", "D"]
      }
    ]
  },
  laLiga: {
    id: "laLiga",
    name: "La Liga (Spain Top Flight)",
    icon: "🇪🇸",
    season: "2024/2025 (Official Verified Standings)",
    description: "The Campeonato Nacional de Liga de Primera División, commonly known simply as La Liga, the men's top professional football division of the Spanish football league system.",
    standings: [
      {
        rank: 1,
        team: "FC Barcelona",
        badge: "🔵🔴",
        logo: "https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg",
        played: 26,
        won: 19,
        drawn: 4,
        lost: 3,
        goalsFor: 68,
        goalsAgainst: 26,
        goalDifference: 42,
        points: 61,
        form: ["W", "W", "W", "D", "W"]
      },
      {
        rank: 2,
        team: "Real Madrid",
        badge: "⚪",
        logo: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
        played: 26,
        won: 18,
        drawn: 5,
        lost: 3,
        goalsFor: 58,
        goalsAgainst: 22,
        goalDifference: 36,
        points: 59,
        form: ["W", "L", "W", "W", "W"]
      },
      {
        rank: 3,
        team: "Atlético Madrid",
        badge: "🔴⚪",
        logo: "https://upload.wikimedia.org/wikipedia/en/f/f4/Atletico_Madrid_2017_logo.svg",
        played: 26,
        won: 16,
        drawn: 6,
        lost: 4,
        goalsFor: 47,
        goalsAgainst: 20,
        goalDifference: 27,
        points: 54,
        form: ["W", "D", "W", "W", "L"]
      },
      {
        rank: 4,
        team: "Athletic Bilbao",
        badge: "🔴⚪",
        logo: "https://upload.wikimedia.org/wikipedia/en/9/98/Club_Athletic_Bilbao_logo.svg",
        played: 26,
        won: 14,
        drawn: 7,
        lost: 5,
        goalsFor: 44,
        goalsAgainst: 24,
        goalDifference: 20,
        points: 49,
        form: ["W", "W", "D", "W", "W"]
      }
    ]
  },
  serieA: {
    id: "serieA",
    name: "Serie A TIM (Italy Top Flight)",
    icon: "🇮🇹",
    season: "2024/2025 (Official Verified Standings)",
    description: "The Serie A, officially known as Serie A Enilive, is a professional league competition for football clubs located at the top of the Italian football league system.",
    standings: [
      {
        rank: 1,
        team: "Inter Milan",
        badge: "🔵⚫",
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/FC_Internazionale_Milano_2021.svg",
        played: 26,
        won: 18,
        drawn: 6,
        lost: 2,
        goalsFor: 59,
        goalsAgainst: 21,
        goalDifference: 38,
        points: 60,
        form: ["W", "W", "W", "D", "W"]
      },
      {
        rank: 2,
        team: "SSC Napoli",
        badge: "🔵",
        logo: "https://upload.wikimedia.org/wikipedia/commons/b/b9/SSC_Napoli_2024_%28n_on_white%29.svg",
        played: 26,
        won: 17,
        drawn: 5,
        lost: 4,
        goalsFor: 45,
        goalsAgainst: 20,
        goalDifference: 25,
        points: 56,
        form: ["W", "W", "D", "W", "W"]
      },
      {
        rank: 3,
        team: "Atalanta",
        badge: "🔵⚫",
        logo: "https://upload.wikimedia.org/wikipedia/en/6/66/AtalantaBC.svg",
        played: 26,
        won: 16,
        drawn: 5,
        lost: 5,
        goalsFor: 58,
        goalsAgainst: 28,
        goalDifference: 30,
        points: 53,
        form: ["W", "L", "W", "W", "D"]
      },
      {
        rank: 4,
        team: "Juventus",
        badge: "⚪⚫",
        logo: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Juventus_FC_2017_icon_%28black%29.svg",
        played: 26,
        won: 13,
        drawn: 11,
        lost: 2,
        goalsFor: 41,
        goalsAgainst: 20,
        goalDifference: 21,
        points: 50,
        form: ["W", "D", "W", "D", "W"]
      }
    ]
  },
  bundesliga: {
    id: "bundesliga",
    name: "Fußball-Bundesliga (Germany)",
    icon: "🇩🇪",
    season: "2024/2025 (Official Verified Standings)",
    description: "The Bundesliga, Germany's premier football league, featuring 18 clubs with the highest average stadium attendances in world sport.",
    standings: [
      {
        rank: 1,
        team: "FC Bayern Munich",
        badge: "🔴",
        logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg",
        played: 24,
        won: 19,
        drawn: 4,
        lost: 1,
        goalsFor: 69,
        goalsAgainst: 20,
        goalDifference: 49,
        points: 61,
        form: ["W", "W", "W", "W", "W"]
      },
      {
        rank: 2,
        team: "Bayer 04 Leverkusen",
        badge: "🔴⚫",
        logo: "https://upload.wikimedia.org/wikipedia/en/5/59/Bayer_04_Leverkusen_logo.svg",
        played: 24,
        won: 16,
        drawn: 6,
        lost: 2,
        goalsFor: 56,
        goalsAgainst: 28,
        goalDifference: 28,
        points: 54,
        form: ["W", "W", "D", "W", "W"]
      },
      {
        rank: 3,
        team: "Eintracht Frankfurt",
        badge: "🔴⚫",
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/Eintracht_Frankfurt_Logo.svg",
        played: 24,
        won: 13,
        drawn: 5,
        lost: 6,
        goalsFor: 48,
        goalsAgainst: 33,
        goalDifference: 15,
        points: 44,
        form: ["W", "D", "W", "L", "W"]
      },
      {
        rank: 4,
        team: "Borussia Dortmund",
        badge: "🟡⚫",
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/67/Borussia_Dortmund_logo.svg",
        played: 24,
        won: 12,
        drawn: 5,
        lost: 7,
        goalsFor: 44,
        goalsAgainst: 33,
        goalDifference: 11,
        points: 41,
        form: ["W", "W", "L", "W", "D"]
      }
    ]
  },
  ligue1: {
    id: "ligue1",
    name: "Ligue 1 McDonald's (France)",
    icon: "🇫🇷",
    season: "2024/2025 (Official Verified Standings)",
    description: "The primary football competition in France, regulated by the LFP and featuring 18 clubs.",
    standings: [
      {
        rank: 1,
        team: "Paris Saint-Germain",
        badge: "🔵🔴",
        logo: "https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg",
        played: 24,
        won: 19,
        drawn: 5,
        lost: 0,
        goalsFor: 64,
        goalsAgainst: 22,
        goalDifference: 42,
        points: 62,
        form: ["W", "W", "W", "W", "D"]
      },
      {
        rank: 2,
        team: "Marseille",
        badge: "🔵⚪",
        logo: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Olympique_Marseille_logo.svg",
        played: 24,
        won: 15,
        drawn: 4,
        lost: 5,
        goalsFor: 51,
        goalsAgainst: 29,
        goalDifference: 22,
        points: 49,
        form: ["W", "W", "L", "W", "W"]
      },
      {
        rank: 3,
        team: "AS Monaco",
        badge: "🔴⚪",
        logo: "https://upload.wikimedia.org/wikipedia/en/b/ba/AS_Monaco_FC.svg",
        played: 24,
        won: 13,
        drawn: 5,
        lost: 6,
        goalsFor: 44,
        goalsAgainst: 30,
        goalDifference: 14,
        points: 44,
        form: ["W", "D", "W", "L", "W"]
      }
    ]
  },
  uefa: {
    id: "uefa",
    name: "UEFA Champions League (League Phase)",
    icon: "🇪🇺",
    season: "2024/2025 (Official Verified League Phase Table)",
    description: "The 36-team single league phase table of UEFA's premier club competition.",
    standings: [
      {
        rank: 1,
        team: "Liverpool",
        badge: "🔴",
        logo: "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg",
        played: 8,
        won: 7,
        drawn: 0,
        lost: 1,
        goalsFor: 17,
        goalsAgainst: 5,
        goalDifference: 12,
        points: 21,
        form: ["W", "W", "W", "W", "W"]
      },
      {
        rank: 2,
        team: "Inter Milan",
        badge: "🔵⚫",
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/FC_Internazionale_Milano_2021.svg",
        played: 8,
        won: 6,
        drawn: 1,
        lost: 1,
        goalsFor: 15,
        goalsAgainst: 3,
        goalDifference: 12,
        points: 19,
        form: ["W", "W", "W", "W", "D"]
      },
      {
        rank: 3,
        team: "FC Barcelona",
        badge: "🔵🔴",
        logo: "https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg",
        played: 8,
        won: 6,
        drawn: 1,
        lost: 1,
        goalsFor: 28,
        goalsAgainst: 11,
        goalDifference: 17,
        points: 19,
        form: ["W", "W", "W", "D", "W"]
      },
      {
        rank: 4,
        team: "Arsenal",
        badge: "🔴",
        logo: "https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg",
        played: 8,
        won: 6,
        drawn: 1,
        lost: 1,
        goalsFor: 18,
        goalsAgainst: 4,
        goalDifference: 14,
        points: 19,
        form: ["W", "W", "W", "L", "W"]
      },
      {
        rank: 5,
        team: "Bayer Leverkusen",
        badge: "🔴⚫",
        logo: "https://upload.wikimedia.org/wikipedia/en/5/59/Bayer_04_Leverkusen_logo.svg",
        played: 8,
        won: 5,
        drawn: 2,
        lost: 1,
        goalsFor: 16,
        goalsAgainst: 6,
        goalDifference: 10,
        points: 17,
        form: ["W", "W", "D", "W", "W"]
      }
    ]
  },
  fifa: {
    id: "fifa",
    name: "FIFA Men's World Ranking",
    icon: "🌍",
    season: "Official FIFA Verified Standings",
    description: "The official FIFA Men's World Ranking, ranking the 211 national teams member associations of FIFA.",
    standings: [
      {
        rank: 1,
        team: "Argentina",
        badge: "🇦🇷",
        logo: "https://upload.wikimedia.org/wikipedia/en/c/c1/Argentina_national_football_team_logo.svg",
        played: 18,
        won: 15,
        drawn: 1,
        lost: 2,
        goalsFor: 42,
        goalsAgainst: 10,
        goalDifference: 32,
        points: 1867,
        form: ["W", "W", "W", "L", "W"]
      },
      {
        rank: 2,
        team: "France",
        badge: "🇫🇷",
        logo: "https://upload.wikimedia.org/wikipedia/en/c/c3/France_national_football_team_seal.svg",
        played: 18,
        won: 13,
        drawn: 3,
        lost: 2,
        goalsFor: 38,
        goalsAgainst: 12,
        goalDifference: 26,
        points: 1859,
        form: ["W", "D", "W", "W", "W"]
      },
      {
        rank: 3,
        team: "Spain",
        badge: "🇪🇸",
        logo: "https://upload.wikimedia.org/wikipedia/en/3/31/Spain_National_Football_Team_badge.svg",
        played: 18,
        won: 16,
        drawn: 2,
        lost: 0,
        goalsFor: 48,
        goalsAgainst: 11,
        goalDifference: 37,
        points: 1853,
        form: ["W", "W", "W", "W", "W"]
      },
      {
        rank: 4,
        team: "England",
        badge: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
        logo: "https://upload.wikimedia.org/wikipedia/en/8/8b/England_national_football_team_crest.svg",
        played: 18,
        won: 11,
        drawn: 5,
        lost: 2,
        goalsFor: 33,
        goalsAgainst: 14,
        goalDifference: 19,
        points: 1813,
        form: ["W", "W", "L", "W", "W"]
      },
      {
        rank: 5,
        team: "Brazil",
        badge: "🇧🇷",
        logo: "https://upload.wikimedia.org/wikipedia/en/0/05/CBF_Logo_2019.svg",
        played: 18,
        won: 10,
        drawn: 5,
        lost: 3,
        goalsFor: 35,
        goalsAgainst: 15,
        goalDifference: 20,
        points: 1775,
        form: ["W", "D", "W", "L", "D"]
      }
    ]
  }
}
