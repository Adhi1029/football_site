export interface PastWinnerRecord {
  season: string
  champion: string
  runnerUp: string
  topScorer: string
  goals: number
}

export interface TitleCountRecord {
  clubOrNation: string
  logo: string
  titles: number
  lastWon: string
  badgeText: string
}

export interface LeagueHistoryData {
  leagueKey: string
  name: string
  icon: string
  country: string
  established: number
  totalSeasonsPlayed: number
  mostSuccessfulClub: string
  titleLeaderboard: TitleCountRecord[]
  recentWinners: PastWinnerRecord[]
}

export const pastWinnersDatabase: Record<string, LeagueHistoryData> = {
  premierLeague: {
    leagueKey: "premierLeague",
    name: "Premier League / English Top Flight",
    icon: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    country: "England",
    established: 1888,
    totalSeasonsPlayed: 125,
    mostSuccessfulClub: "Manchester United (20 Titles)",
    titleLeaderboard: [
      {
        clubOrNation: "Manchester United",
        logo: "https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg",
        titles: 20,
        lastWon: "2012–13",
        badgeText: "20× Champions"
      },
      {
        clubOrNation: "Liverpool FC",
        logo: "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg",
        titles: 19,
        lastWon: "2019–20",
        badgeText: "19× Champions"
      },
      {
        clubOrNation: "Arsenal FC",
        logo: "https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg",
        titles: 13,
        lastWon: "2003–04",
        badgeText: "13× Champions (Invincibles)"
      },
      {
        clubOrNation: "Manchester City",
        logo: "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg",
        titles: 10,
        lastWon: "2023–24",
        badgeText: "10× Champions (4 in a row)"
      },
      {
        clubOrNation: "Everton FC",
        logo: "https://upload.wikimedia.org/wikipedia/en/7/7c/Everton_FC_logo.svg",
        titles: 9,
        lastWon: "1986–87",
        badgeText: "9× Champions"
      },
      {
        clubOrNation: "Aston Villa",
        logo: "https://upload.wikimedia.org/wikipedia/en/f/f9/Aston_Villa_FC_crest_%282016%29.svg",
        titles: 7,
        lastWon: "1980–81",
        badgeText: "7× Champions"
      },
      {
        clubOrNation: "Chelsea FC",
        logo: "https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg",
        titles: 6,
        lastWon: "2016–17",
        badgeText: "6× Champions"
      },
      {
        clubOrNation: "Sunderland",
        logo: "https://upload.wikimedia.org/wikipedia/en/7/77/Logo_Sunderland.svg",
        titles: 6,
        lastWon: "1935–36",
        badgeText: "6× Champions"
      },
      {
        clubOrNation: "Newcastle United",
        logo: "https://upload.wikimedia.org/wikipedia/en/5/56/Newcastle_United_Logo.svg",
        titles: 4,
        lastWon: "1926–27",
        badgeText: "4× Champions"
      }
    ],
    recentWinners: [
      { season: "2023–24", champion: "Manchester City", runnerUp: "Arsenal", topScorer: "Erling Haaland (27)", goals: 96 },
      { season: "2022–23", champion: "Manchester City", runnerUp: "Arsenal", topScorer: "Erling Haaland (36)", goals: 94 },
      { season: "2021–22", champion: "Manchester City", runnerUp: "Liverpool", topScorer: "Salah / Son (23)", goals: 99 },
      { season: "2020–21", champion: "Manchester City", runnerUp: "Manchester United", topScorer: "Harry Kane (23)", goals: 83 },
      { season: "2019–20", champion: "Liverpool FC", runnerUp: "Manchester City", topScorer: "Jamie Vardy (23)", goals: 85 },
      { season: "2018–19", champion: "Manchester City", runnerUp: "Liverpool", topScorer: "Salah / Mané / Aubameyang (22)", goals: 95 },
      { season: "2017–18", champion: "Manchester City", runnerUp: "Manchester United", topScorer: "Mohamed Salah (32)", goals: 106 },
      { season: "2016–17", champion: "Chelsea FC", runnerUp: "Tottenham Hotspur", topScorer: "Harry Kane (29)", goals: 85 },
      { season: "2015–16", champion: "Leicester City", runnerUp: "Arsenal", topScorer: "Harry Kane (25)", goals: 68 },
      { season: "2014–15", champion: "Chelsea FC", runnerUp: "Manchester City", topScorer: "Sergio Agüero (26)", goals: 73 }
    ]
  },
  laLiga: {
    leagueKey: "laLiga",
    name: "La Liga (Campeonato Nacional de Liga)",
    icon: "🇪🇸",
    country: "Spain",
    established: 1929,
    totalSeasonsPlayed: 93,
    mostSuccessfulClub: "Real Madrid (36 Titles)",
    titleLeaderboard: [
      {
        clubOrNation: "Real Madrid",
        logo: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
        titles: 36,
        lastWon: "2023–24",
        badgeText: "36× La Liga Champions"
      },
      {
        clubOrNation: "FC Barcelona",
        logo: "https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg",
        titles: 27,
        lastWon: "2022–23",
        badgeText: "27× La Liga Champions"
      },
      {
        clubOrNation: "Atlético Madrid",
        logo: "https://upload.wikimedia.org/wikipedia/en/f/f4/Atletico_Madrid_2017_logo.svg",
        titles: 11,
        lastWon: "2020–21",
        badgeText: "11× La Liga Champions"
      },
      {
        clubOrNation: "Athletic Bilbao",
        logo: "https://upload.wikimedia.org/wikipedia/en/9/98/Club_Athletic_Bilbao_logo.svg",
        titles: 8,
        lastWon: "1983–84",
        badgeText: "8× La Liga Champions"
      },
      {
        clubOrNation: "Valencia CF",
        logo: "https://upload.wikimedia.org/wikipedia/en/c/ce/Valenciacf.svg",
        titles: 6,
        lastWon: "2003–04",
        badgeText: "6× La Liga Champions"
      },
      {
        clubOrNation: "Real Sociedad",
        logo: "https://upload.wikimedia.org/wikipedia/en/f/f1/Real_Sociedad_logo.svg",
        titles: 2,
        lastWon: "1981–82",
        badgeText: "2× La Liga Champions"
      }
    ],
    recentWinners: [
      { season: "2023–24", champion: "Real Madrid", runnerUp: "Barcelona", topScorer: "Artem Dovbyk (24)", goals: 87 },
      { season: "2022–23", champion: "FC Barcelona", runnerUp: "Real Madrid", topScorer: "Robert Lewandowski (23)", goals: 70 },
      { season: "2021–22", champion: "Real Madrid", runnerUp: "Barcelona", topScorer: "Karim Benzema (27)", goals: 80 },
      { season: "2020–21", champion: "Atlético Madrid", runnerUp: "Real Madrid", topScorer: "Lionel Messi (30)", goals: 67 },
      { season: "2019–20", champion: "Real Madrid", runnerUp: "Barcelona", topScorer: "Lionel Messi (25)", goals: 70 },
      { season: "2018–19", champion: "FC Barcelona", runnerUp: "Atlético Madrid", topScorer: "Lionel Messi (36)", goals: 90 },
      { season: "2017–18", champion: "FC Barcelona", runnerUp: "Atlético Madrid", topScorer: "Lionel Messi (34)", goals: 99 }
    ]
  },
  serieA: {
    leagueKey: "serieA",
    name: "Serie A TIM (Calcio Italiano)",
    icon: "🇮🇹",
    country: "Italy",
    established: 1898,
    totalSeasonsPlayed: 122,
    mostSuccessfulClub: "Juventus FC (36 Titles)",
    titleLeaderboard: [
      {
        clubOrNation: "Juventus FC",
        logo: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Juventus_FC_2017_icon_%28black%29.svg",
        titles: 36,
        lastWon: "2019–20",
        badgeText: "36× Serie A Champions (3 Stars)"
      },
      {
        clubOrNation: "Inter Milan",
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/FC_Internazionale_Milano_2021.svg",
        titles: 20,
        lastWon: "2023–24",
        badgeText: "20× Scudetti (2 Stars)"
      },
      {
        clubOrNation: "AC Milan",
        logo: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Logo_of_AC_Milan.svg",
        titles: 19,
        lastWon: "2021–22",
        badgeText: "19× Scudetti (1 Star)"
      },
      {
        clubOrNation: "Genoa CFC",
        logo: "https://upload.wikimedia.org/wikipedia/en/6/6c/Genoa_C.F.C._logo.svg",
        titles: 9,
        lastWon: "1923–24",
        badgeText: "9× Italian Champions"
      },
      {
        clubOrNation: "Torino FC",
        logo: "https://upload.wikimedia.org/wikipedia/en/2/2e/Torino_FC_Logo.svg",
        titles: 7,
        lastWon: "1975–76",
        badgeText: "7× Champions (Grande Torino)"
      },
      {
        clubOrNation: "Bologna FC",
        logo: "https://upload.wikimedia.org/wikipedia/en/5/5b/Bologna_F.C._1909_logo.svg",
        titles: 7,
        lastWon: "1963–64",
        badgeText: "7× Champions"
      },
      {
        clubOrNation: "AS Roma",
        logo: "https://upload.wikimedia.org/wikipedia/en/f/f7/AS_Roma_logo_%282017%29.svg",
        titles: 3,
        lastWon: "2000–01",
        badgeText: "3× Scudetti"
      },
      {
        clubOrNation: "SSC Napoli",
        logo: "https://upload.wikimedia.org/wikipedia/commons/b/b9/SSC_Napoli_2024_%28n_on_white%29.svg",
        titles: 3,
        lastWon: "2022–23",
        badgeText: "3× Scudetti"
      }
    ],
    recentWinners: [
      { season: "2023–24", champion: "Inter Milan", runnerUp: "AC Milan", topScorer: "Lautaro Martínez (24)", goals: 89 },
      { season: "2022–23", champion: "SSC Napoli", runnerUp: "Lazio", topScorer: "Victor Osimhen (26)", goals: 77 },
      { season: "2021–22", champion: "AC Milan", runnerUp: "Inter Milan", topScorer: "Ciro Immobile (27)", goals: 69 },
      { season: "2020–21", champion: "Inter Milan", runnerUp: "AC Milan", topScorer: "Cristiano Ronaldo (29)", goals: 89 },
      { season: "2019–20", champion: "Juventus", runnerUp: "Inter Milan", topScorer: "Ciro Immobile (36)", goals: 76 }
    ]
  },
  bundesliga: {
    leagueKey: "bundesliga",
    name: "Fußball-Bundesliga (German Championship)",
    icon: "🇩🇪",
    country: "Germany",
    established: 1963,
    totalSeasonsPlayed: 61,
    mostSuccessfulClub: "Bayern Munich (33 Titles)",
    titleLeaderboard: [
      {
        clubOrNation: "FC Bayern Munich",
        logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg",
        titles: 33,
        lastWon: "2022–23",
        badgeText: "33× German Champions (5 Stars)"
      },
      {
        clubOrNation: "1. FC Nürnberg",
        logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/1._FC_N%C3%BCrnberg_logo.svg",
        titles: 9,
        lastWon: "1967–68",
        badgeText: "9× German Champions"
      },
      {
        clubOrNation: "Borussia Dortmund",
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/67/Borussia_Dortmund_logo.svg",
        titles: 8,
        lastWon: "2011–12",
        badgeText: "8× German Champions"
      },
      {
        clubOrNation: "Schalke 04",
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/6d/FC_Schalke_04_Logo.svg",
        titles: 7,
        lastWon: "1958",
        badgeText: "7× German Champions"
      },
      {
        clubOrNation: "Hamburger SV",
        logo: "https://upload.wikimedia.org/wikipedia/commons/f/f6/HSV-Logo.svg",
        titles: 6,
        lastWon: "1982–83",
        badgeText: "6× German Champions"
      },
      {
        clubOrNation: "Bayer 04 Leverkusen",
        logo: "https://upload.wikimedia.org/wikipedia/en/5/59/Bayer_04_Leverkusen_logo.svg",
        titles: 1,
        lastWon: "2023–24",
        badgeText: "1× Champion (2024 Invincibles)"
      }
    ],
    recentWinners: [
      { season: "2023–24", champion: "Bayer 04 Leverkusen", runnerUp: "VfB Stuttgart", topScorer: "Harry Kane (36)", goals: 89 },
      { season: "2022–23", champion: "FC Bayern Munich", runnerUp: "Borussia Dortmund", topScorer: "Nkunku / Füllkrug (16)", goals: 92 },
      { season: "2021–22", champion: "FC Bayern Munich", runnerUp: "Borussia Dortmund", topScorer: "Robert Lewandowski (35)", goals: 97 },
      { season: "2020–21", champion: "FC Bayern Munich", runnerUp: "RB Leipzig", topScorer: "Robert Lewandowski (41 - Record)", goals: 99 },
      { season: "2019–20", champion: "FC Bayern Munich", runnerUp: "Borussia Dortmund", topScorer: "Robert Lewandowski (34)", goals: 100 }
    ]
  },
  ligue1: {
    leagueKey: "ligue1",
    name: "Ligue 1 McDonald's (French Championship)",
    icon: "🇫🇷",
    country: "France",
    established: 1932,
    totalSeasonsPlayed: 86,
    mostSuccessfulClub: "Paris Saint-Germain (12 Titles)",
    titleLeaderboard: [
      {
        clubOrNation: "Paris Saint-Germain",
        logo: "https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg",
        titles: 12,
        lastWon: "2023–24",
        badgeText: "12× Ligue 1 Champions"
      },
      {
        clubOrNation: "AS Saint-Étienne",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Logo_AS_Saint-%C3%89tienne.svg",
        titles: 10,
        lastWon: "1980–81",
        badgeText: "10× Ligue 1 Champions"
      },
      {
        clubOrNation: "Olympique de Marseille",
        logo: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Olympique_Marseille_logo.svg",
        titles: 9,
        lastWon: "2009–10",
        badgeText: "9× Ligue 1 Champions"
      },
      {
        clubOrNation: "AS Monaco",
        logo: "https://upload.wikimedia.org/wikipedia/en/b/ba/AS_Monaco_FC.svg",
        titles: 8,
        lastWon: "2016–17",
        badgeText: "8× Ligue 1 Champions"
      },
      {
        clubOrNation: "FC Nantes",
        logo: "https://upload.wikimedia.org/wikipedia/en/2/2b/FC_Nantes_logo.svg",
        titles: 8,
        lastWon: "2000–01",
        badgeText: "8× Ligue 1 Champions"
      },
      {
        clubOrNation: "Olympique Lyonnais",
        logo: "https://upload.wikimedia.org/wikipedia/en/c/c6/Olympique_Lyonnais.svg",
        titles: 7,
        lastWon: "2007–08",
        badgeText: "7× Ligue 1 Champions"
      }
    ],
    recentWinners: [
      { season: "2023–24", champion: "Paris Saint-Germain", runnerUp: "AS Monaco", topScorer: "Kylian Mbappé (27)", goals: 81 },
      { season: "2022–23", champion: "Paris Saint-Germain", runnerUp: "RC Lens", topScorer: "Kylian Mbappé (29)", goals: 89 },
      { season: "2021–22", champion: "Paris Saint-Germain", runnerUp: "Marseille", topScorer: "Kylian Mbappé (28)", goals: 90 },
      { season: "2020–21", champion: "Lille OSC", runnerUp: "Paris Saint-Germain", topScorer: "Kylian Mbappé (27)", goals: 64 },
      { season: "2019–20", champion: "Paris Saint-Germain", runnerUp: "Marseille", topScorer: "Ben Yedder / Mbappé (18)", goals: 75 }
    ]
  },
  uefa: {
    leagueKey: "uefa",
    name: "UEFA Champions League (European Cup)",
    icon: "🇪🇺",
    country: "Europe (UEFA)",
    established: 1955,
    totalSeasonsPlayed: 69,
    mostSuccessfulClub: "Real Madrid (15 European Cups)",
    titleLeaderboard: [
      {
        clubOrNation: "Real Madrid",
        logo: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
        titles: 15,
        lastWon: "2023–24",
        badgeText: "15× European Kings"
      },
      {
        clubOrNation: "AC Milan",
        logo: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Logo_of_AC_Milan.svg",
        titles: 7,
        lastWon: "2006–07",
        badgeText: "7× European Champions"
      },
      {
        clubOrNation: "FC Bayern Munich",
        logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg",
        titles: 6,
        lastWon: "2019–20",
        badgeText: "6× Champions League Winners"
      },
      {
        clubOrNation: "Liverpool FC",
        logo: "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg",
        titles: 6,
        lastWon: "2018–19",
        badgeText: "6× European Champions"
      },
      {
        clubOrNation: "FC Barcelona",
        logo: "https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg",
        titles: 5,
        lastWon: "2014–15",
        badgeText: "5× European Champions"
      },
      {
        clubOrNation: "Ajax Amsterdam",
        logo: "https://upload.wikimedia.org/wikipedia/en/7/79/Ajax_Amsterdam.svg",
        titles: 4,
        lastWon: "1994–95",
        badgeText: "4× European Champions"
      },
      {
        clubOrNation: "Manchester United",
        logo: "https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg",
        titles: 3,
        lastWon: "2007–08",
        badgeText: "3× European Champions"
      },
      {
        clubOrNation: "Inter Milan",
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/FC_Internazionale_Milano_2021.svg",
        titles: 3,
        lastWon: "2009–10",
        badgeText: "3× European Champions"
      },
      {
        clubOrNation: "Chelsea FC",
        logo: "https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg",
        titles: 2,
        lastWon: "2020–21",
        badgeText: "2× European Champions"
      },
      {
        clubOrNation: "Manchester City",
        logo: "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg",
        titles: 1,
        lastWon: "2022–23",
        badgeText: "1× Champions League Winner (2023 Treble)"
      }
    ],
    recentWinners: [
      { season: "2023–24", champion: "Real Madrid", runnerUp: "Borussia Dortmund (2–0)", topScorer: "Harry Kane / Mbappé (8)", goals: 2 },
      { season: "2022–23", champion: "Manchester City", runnerUp: "Inter Milan (1–0)", topScorer: "Erling Haaland (12)", goals: 1 },
      { season: "2021–22", champion: "Real Madrid", runnerUp: "Liverpool (1–0)", topScorer: "Karim Benzema (15)", goals: 1 },
      { season: "2020–21", champion: "Chelsea FC", runnerUp: "Manchester City (1–0)", topScorer: "Erling Haaland (10)", goals: 1 },
      { season: "2019–20", champion: "FC Bayern Munich", runnerUp: "Paris Saint-Germain (1–0)", topScorer: "Robert Lewandowski (15)", goals: 1 },
      { season: "2018–19", champion: "Liverpool FC", runnerUp: "Tottenham Hotspur (2–0)", topScorer: "Lionel Messi (12)", goals: 2 }
    ]
  },
  fifa: {
    leagueKey: "fifa",
    name: "FIFA Men's World Cup",
    icon: "🌍",
    country: "Global (FIFA)",
    established: 1930,
    totalSeasonsPlayed: 22,
    mostSuccessfulClub: "Brazil National Team (5 World Cups)",
    titleLeaderboard: [
      {
        clubOrNation: "Brazil National Team",
        logo: "https://upload.wikimedia.org/wikipedia/en/0/05/CBF_Logo_2019.svg",
        titles: 5,
        lastWon: "2002",
        badgeText: "5× FIFA World Cup Champions (Penta)"
      },
      {
        clubOrNation: "Germany National Team",
        logo: "https://upload.wikimedia.org/wikipedia/en/e/e3/DFB-Logo_1995.svg",
        titles: 4,
        lastWon: "2014",
        badgeText: "4× FIFA World Cup Champions"
      },
      {
        clubOrNation: "Italy National Team",
        logo: "https://upload.wikimedia.org/wikipedia/en/7/77/FIGC_Logo_2023.svg",
        titles: 4,
        lastWon: "2006",
        badgeText: "4× FIFA World Cup Champions"
      },
      {
        clubOrNation: "Argentina National Team",
        logo: "https://upload.wikimedia.org/wikipedia/en/c/c1/Argentina_national_football_team_logo.svg",
        titles: 3,
        lastWon: "2022",
        badgeText: "3× FIFA World Cup Champions (Reigning)"
      },
      {
        clubOrNation: "France National Team",
        logo: "https://upload.wikimedia.org/wikipedia/en/c/c3/France_national_football_team_seal.svg",
        titles: 2,
        lastWon: "2018",
        badgeText: "2× FIFA World Cup Champions"
      },
      {
        clubOrNation: "Uruguay National Team",
        logo: "https://upload.wikimedia.org/wikipedia/en/b/b8/Uruguay_national_football_team_seal.svg",
        titles: 2,
        lastWon: "1950",
        badgeText: "2× FIFA World Cup Champions"
      },
      {
        clubOrNation: "England National Team",
        logo: "https://upload.wikimedia.org/wikipedia/en/8/8b/England_national_football_team_crest.svg",
        titles: 1,
        lastWon: "1966",
        badgeText: "1× FIFA World Cup Champion"
      },
      {
        clubOrNation: "Spain National Team",
        logo: "https://upload.wikimedia.org/wikipedia/en/3/31/Spain_National_Football_Team_badge.svg",
        titles: 1,
        lastWon: "2010",
        badgeText: "1× FIFA World Cup Champion"
      }
    ],
    recentWinners: [
      { season: "Qatar 2022", champion: "Argentina", runnerUp: "France (3–3, 4–2 pen)", topScorer: "Kylian Mbappé (8 goals)", goals: 3 },
      { season: "Russia 2018", champion: "France", runnerUp: "Croatia (4–2)", topScorer: "Harry Kane (6 goals)", goals: 4 },
      { season: "Brazil 2014", champion: "Germany", runnerUp: "Argentina (1–0 aet)", topScorer: "James Rodríguez (6 goals)", goals: 1 },
      { season: "South Africa 2010", champion: "Spain", runnerUp: "Netherlands (1–0 aet)", topScorer: "Forlán / Müller / Sneijder / Villa (5)", goals: 1 },
      { season: "Germany 2006", champion: "Italy", runnerUp: "France (1–1, 5–3 pen)", topScorer: "Miroslav Klose (5 goals)", goals: 1 }
    ]
  }
}
