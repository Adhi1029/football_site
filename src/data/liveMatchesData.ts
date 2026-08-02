export interface CommentaryEvent {
  minute: number
  type: "goal" | "card" | "sub" | "chance"
  team: "home" | "away"
  player: string
  text: string
}

export interface MatchStats {
  possession: [number, number]
  xg: [number, number]
  shots: [number, number]
  shotsOnTarget: [number, number]
  passes: [number, number]
  fouls: [number, number]
  corners: [number, number]
}

export interface Match {
  id: string
  competition: string
  status: "LIVE" | "FT" | "UPCOMING"
  minute: string
  homeTeam: string
  awayTeam: string
  homeBadge: string
  awayBadge: string
  homeLogo?: string
  awayLogo?: string
  homeScore: number
  awayScore: number
  scorers: {
    home: string[]
    away: string[]
  }
  kickOffTime: string
  venue: string
  commentary: CommentaryEvent[]
  stats?: MatchStats
}

export const initialLiveMatches: Match[] = [
  {
    id: "match-1",
    competition: "UEFA Champions League • League Phase",
    status: "LIVE",
    minute: "76'",
    homeTeam: "Manchester City",
    awayTeam: "Real Madrid",
    homeBadge: "🔵",
    awayBadge: "⚪",
    homeLogo: "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg",
    awayLogo: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
    homeScore: 2,
    awayScore: 2,
    scorers: {
      home: ["E. Haaland 18'", "P. Foden 64'"],
      away: ["V. Júnior 33'", "J. Bellingham 51'"]
    },
    kickOffTime: "LIVE",
    venue: "Etihad Stadium, Manchester",
    stats: {
      possession: [58, 42],
      xg: [2.35, 1.95],
      shots: [14, 11],
      shotsOnTarget: [6, 5],
      passes: [540, 395],
      fouls: [9, 11],
      corners: [7, 4]
    },
    commentary: [
      {
        minute: 76,
        type: "chance",
        team: "home",
        player: "Kevin De Bruyne",
        text: "CHANCE! De Bruyne whips a dangerous outswinging cross into the 6-yard box, but Courtois punches clear!"
      },
      {
        minute: 64,
        type: "goal",
        team: "home",
        player: "Phil Foden",
        text: "GOAL! Phil Foden picks up the ball on the edge of the area and curls a left-footed rocket into the top corner! 2-2!"
      },
      {
        minute: 51,
        type: "goal",
        team: "away",
        player: "Jude Bellingham",
        text: "GOAL! Bellingham times his run into the box to meet a Vinícius cross and nods it past Ederson! 1-2 Real Madrid!"
      },
      {
        minute: 33,
        type: "goal",
        team: "away",
        player: "Vinícius Júnior",
        text: "GOAL! Rapid counter-attack from Madrid! Vinícius cuts inside from the left wing and fires low into the bottom corner. 1-1!"
      },
      {
        minute: 18,
        type: "goal",
        team: "home",
        player: "Erling Haaland",
        text: "GOAL! Haaland holds off Rudiger and smashes De Bruyne's through-ball into the roof of the net! 1-0 Man City!"
      },
      {
        minute: 0,
        type: "chance",
        team: "home",
        player: "Referee",
        text: "Kick-off! We are underway at the Etihad Stadium for this UEFA Champions League blockbuster!"
      }
    ]
  },
  {
    id: "match-2",
    competition: "Premier League • Matchday 26",
    status: "LIVE",
    minute: "83'",
    homeTeam: "Arsenal",
    awayTeam: "Liverpool",
    homeBadge: "🔴",
    awayBadge: "🔴",
    homeLogo: "https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg",
    awayLogo: "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg",
    homeScore: 1,
    awayScore: 2,
    scorers: {
      home: ["B. Saka 24'"],
      away: ["M. Salah 41'", "L. Díaz 78'"]
    },
    kickOffTime: "LIVE",
    venue: "Emirates Stadium, London",
    stats: {
      possession: [51, 49],
      xg: [1.65, 2.10],
      shots: [12, 15],
      shotsOnTarget: [5, 7],
      passes: [480, 465],
      fouls: [12, 10],
      corners: [6, 8]
    },
    commentary: [
      {
        minute: 78,
        type: "goal",
        team: "away",
        player: "Luis Díaz",
        text: "GOAL! Luis Díaz cuts in from the left and shoots through a crowded penalty box into the bottom corner! 1-2 Liverpool!"
      },
      {
        minute: 41,
        type: "goal",
        team: "away",
        player: "Mohamed Salah",
        text: "GOAL! Salah converts from the penalty spot after Alexander-Arnold was fouled inside the box. 1-1!"
      },
      {
        minute: 24,
        type: "goal",
        team: "home",
        player: "Bukayo Saka",
        text: "GOAL! Bukayo Saka cuts inside Robertson and fires an unstoppable left-footed shot past Alisson! 1-0 Arsenal!"
      }
    ]
  },
  {
    id: "match-3",
    competition: "Bundesliga • Matchday 24",
    status: "LIVE",
    minute: "69'",
    homeTeam: "FC Bayern Munich",
    awayTeam: "Bayer Leverkusen",
    homeBadge: "🔴",
    awayBadge: "⚫",
    homeLogo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg",
    awayLogo: "https://upload.wikimedia.org/wikipedia/en/5/59/Bayer_04_Leverkusen_logo.svg",
    homeScore: 3,
    awayScore: 2,
    scorers: {
      home: ["H. Kane 14', 58'", "J. Musiala 39'"],
      away: ["F. Wirtz 29'", "A. Grimaldo 63'"]
    },
    kickOffTime: "LIVE",
    venue: "Allianz Arena, Munich",
    stats: {
      possession: [55, 45],
      xg: [2.80, 1.75],
      shots: [16, 10],
      shotsOnTarget: [8, 5],
      passes: [510, 420],
      fouls: [8, 11],
      corners: [9, 3]
    },
    commentary: [
      {
        minute: 63,
        type: "goal",
        team: "away",
        player: "Alejandro Grimaldo",
        text: "GOAL! Spectacular free-kick from Grimaldo curls over the wall into the top right corner! 3-2!"
      },
      {
        minute: 58,
        type: "goal",
        team: "home",
        player: "Harry Kane",
        text: "GOAL! Harry Kane heads home Kimmich's corner for his second of the afternoon! 3-1 Bayern!"
      }
    ]
  }
]

export const initialFixtures: Match[] = [
  {
    id: "fix-1",
    competition: "La Liga • Matchday 26",
    status: "UPCOMING",
    minute: "",
    homeTeam: "FC Barcelona",
    awayTeam: "Atlético Madrid",
    homeBadge: "🔵🔴",
    awayBadge: "🔴⚪",
    homeLogo: "https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg",
    awayLogo: "https://upload.wikimedia.org/wikipedia/en/f/f4/Atletico_Madrid_2017_logo.svg",
    homeScore: 0,
    awayScore: 0,
    scorers: { home: [], away: [] },
    kickOffTime: "Tomorrow, 20:00 UTC",
    venue: "Estadi Olímpic Lluís Companys, Barcelona",
    commentary: [
      { minute: 0, type: "chance", team: "home", player: "Preview", text: "Crucial La Liga top-three clash between Hansi Flick's Barcelona and Diego Simeone's Atlético Madrid." }
    ]
  },
  {
    id: "fix-2",
    competition: "Serie A • Matchday 26",
    status: "UPCOMING",
    minute: "",
    homeTeam: "Inter Milan",
    awayTeam: "Juventus",
    homeBadge: "🔵⚫",
    awayBadge: "⚪⚫",
    homeLogo: "https://upload.wikimedia.org/wikipedia/commons/0/05/FC_Internazionale_Milano_2021.svg",
    awayLogo: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Juventus_FC_2017_icon_%28black%29.svg",
    homeScore: 0,
    awayScore: 0,
    scorers: { home: [], away: [] },
    kickOffTime: "Sunday, 19:45 UTC",
    venue: "Stadio Giuseppe Meazza (San Siro), Milan",
    commentary: [
      { minute: 0, type: "chance", team: "home", player: "Preview", text: "The Derby d'Italia! Inter Milan host Juventus in a battle for Serie A supremacy." }
    ]
  }
]

export const initialResults: Match[] = [
  {
    id: "res-1",
    competition: "Ligue 1 • Matchday 24",
    status: "FT",
    minute: "90+5'",
    homeTeam: "Paris Saint-Germain",
    awayTeam: "Marseille",
    homeBadge: "🔵🔴",
    awayBadge: "🔵⚪",
    homeLogo: "https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg",
    awayLogo: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Olympique_Marseille_logo.svg",
    homeScore: 4,
    awayScore: 0,
    scorers: {
      home: ["O. Dembélé 12'", "B. Barcola 34'", "G. Ramos 61', 88'"],
      away: []
    },
    kickOffTime: "FULL TIME",
    venue: "Parc des Princes, Paris",
    stats: {
      possession: [68, 32],
      xg: [3.45, 0.65],
      shots: [21, 5],
      shotsOnTarget: [10, 2],
      passes: [710, 310],
      fouls: [10, 14],
      corners: [8, 2]
    },
    commentary: [
      { minute: 90, type: "chance", team: "home", player: "Referee", text: "Full Time! PSG dominate Le Classique with an emphatic 4-0 win over Marseille." }
    ]
  }
]
