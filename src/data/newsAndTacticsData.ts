export interface NewsItem {
  id: string
  title: string
  summary: string
  category: "Transfer Rumor" | "Injury Alert" | "Manager News" | "Top 5 League" | "UEFA" | "FIFA"
  verified: boolean
  timestamp: string
  source: string
  readTime: string
  imageBadge: string
}

export interface FormationNode {
  number: number
  name: string
  role: string
  x: number // percentage 0-100 from left to right on pitch
  y: number // percentage 0-100 from top to bottom on pitch
}

export interface TacticalAnalysisItem {
  id: string
  team: string
  formation: string
  title: string
  expert: string
  date: string
  summary: string
  keyTactics: string[]
  lineup: FormationNode[]
  strength: string
  vulnerability: string
}

export interface ForumComment {
  id: string
  author: string
  avatar: string
  timeAgo: string
  content: string
  upvotes: number
  downvotes: number
  badge: "Verified Fan" | "Tactical Analyst" | "Ultras"
}

export interface MatchPoll {
  id: string
  question: string
  matchTitle: string
  votes: {
    home: number
    draw: number
    away: number
  }
}

export const initialNews: NewsItem[] = [
  {
    id: "news-1",
    title: "EXCL: Real Madrid Open Direct Talks for Bayer Leverkusen's Florian Wirtz",
    summary: "Verified sources confirm Real Madrid have initiated preliminary discussions regarding a €130m summer transfer for German playmaker Florian Wirtz.",
    category: "Transfer Rumor",
    verified: true,
    timestamp: "12 mins ago",
    source: "Fabrizio Romano • Transfer Expert",
    readTime: "3 min read",
    imageBadge: "⚡"
  },
  {
    id: "news-2",
    title: "INJURY UPDATE: Rodri Return Timeline Accelerated Ahead of UCL Quarter-Finals",
    summary: "Manchester City medical staff report significant rehabilitation milestones for Ballon d'Or winner Rodri, targeting a potential bench appearance next month.",
    category: "Injury Alert",
    verified: true,
    timestamp: "45 mins ago",
    source: "Manchester City Official Medical Brief",
    readTime: "2 min read",
    imageBadge: "🤕"
  },
  {
    id: "news-3",
    title: "TACTICAL SHIFT: Xabi Alonso Explains How Inverted Wing-Backs Broke Bayern's Press",
    summary: "In a masterclass interview, Xabi Alonso breaks down Grimaldo and Frimpong's positioning in the 3-4-2-1 to overload central spaces against high pressing teams.",
    category: "Top 5 League",
    verified: true,
    timestamp: "2 hours ago",
    source: "The Athletic Football Strategy",
    readTime: "5 min read",
    imageBadge: "📊"
  },
  {
    id: "news-4",
    title: "UEFA Champions League Draws Record Viewership Under New 36-Team Swiss League Phase",
    summary: "UEFA releases official broadcast analytics confirming a 38% increase in dramatic 89th-minute group stage permutations across Europe.",
    category: "UEFA",
    verified: true,
    timestamp: "4 hours ago",
    source: "UEFA Media Center",
    readTime: "4 min read",
    imageBadge: "🇪🇺"
  },
  {
    id: "news-5",
    title: "FIFA Announces Host Cities for Expanded 2026 Club World Cup",
    summary: "The 32-team tournament will feature world powerhouses Real Madrid, Man City, Bayern, and Flamengo competing in state-of-the-art stadiums.",
    category: "FIFA",
    verified: true,
    timestamp: "6 hours ago",
    source: "FIFA Official Release",
    readTime: "3 min read",
    imageBadge: "🌍"
  },
  {
    id: "news-6",
    title: "MANAGER NEWS: AC Milan Consider Tactical Overhaul After Derby della Madonnina",
    summary: "Following a tense 2-1 defeat to Inter, reports suggest a shift toward a 4-2-3-1 formation to unlock Rafael Leão and Christian Pulisic in the final third.",
    category: "Manager News",
    verified: true,
    timestamp: "8 hours ago",
    source: "Gazzetta dello Sport",
    readTime: "4 min read",
    imageBadge: "👔"
  }
]

export const tacticalAnalyses: TacticalAnalysisItem[] = [
  {
    id: "tactic-1",
    team: "Manchester City",
    formation: "3-2-4-1 (Inverted Box Midfield)",
    title: "The Box Midfield Overload: How Pep's 3-2-4-1 Dominates Possession & xG",
    expert: "Michael Cox • Tactical Editor",
    date: "Latest Breakdown",
    summary: "By pushing an inverted full-back alongside Rodri, Man City creates a 4-man 'box midfield' that consistently produces a 4v3 numerical advantage against traditional 4-3-3 blocks.",
    keyTactics: [
      "Inverted Full-Back: Stones or Lewis steps into midfield to create a double pivot.",
      "High Wing Isolation: Doku and Savinho hug the touchlines to stretch opposition full-backs.",
      "Pocket Penetration: De Bruyne and Foden operate in the half-spaces behind the opposition midfield."
    ],
    strength: "Overwhelming possession control (65%+) and immediate Gegenpressing upon turnover.",
    vulnerability: "Wide counter-attacks into the spaces vacated by advancing wing-backs.",
    lineup: [
      { number: 31, name: "Ederson", role: "GK", x: 10, y: 50 },
      { number: 24, name: "Gvardiol", role: "LCB", x: 25, y: 24 },
      { number: 3, name: "Dias", role: "CB", x: 23, y: 50 },
      { number: 2, name: "Walker", role: "RCB", x: 25, y: 76 },
      { number: 16, name: "Rodri", role: "CDM", x: 40, y: 35 },
      { number: 5, name: "Stones", role: "INV-FB", x: 40, y: 65 },
      { number: 11, name: "Doku", role: "LW", x: 74, y: 16 },
      { number: 47, name: "Foden", role: "CAM", x: 58, y: 32 },
      { number: 17, name: "De Bruyne", role: "CAM", x: 58, y: 68 },
      { number: 20, name: "Bernardo", role: "RW", x: 74, y: 84 },
      { number: 9, name: "Haaland", role: "ST", x: 84, y: 50 }
    ]
  },
  {
    id: "tactic-2",
    team: "Real Madrid",
    formation: "4-3-1-2 / Fluid 4-3-3",
    title: "Ancelotti's Asymmetric Attack: Unleashing Mbappé, Vini Jr & Bellingham",
    expert: "Guillem Balagué • Spanish Football Analyst",
    date: "UCL Special",
    summary: "Real Madrid abandons rigid positional rules in the final third. Bellingham drops to link play while Vinícius and Mbappé create overloads on the left half-space.",
    keyTactics: [
      "Left-Wing Overload: 62% of Madrid's attacking xG originates from the left flank.",
      "Bellingham's Late Runs: Timing box arrivals when center-backs are occupied by Mbappé.",
      "Valverde's Engine: Covering the right flank single-handedly during transition."
    ],
    strength: "Devastating transition speed and individual 1v1 dribbling superiority.",
    vulnerability: "Defensive gaps on the right flank if Valverde is drawn too deep.",
    lineup: [
      { number: 1, name: "Courtois", role: "GK", x: 10, y: 50 },
      { number: 23, name: "Mendy", role: "LB", x: 25, y: 18 },
      { number: 22, name: "Rüdiger", role: "LCB", x: 23, y: 38 },
      { number: 3, name: "Militao", role: "RCB", x: 23, y: 62 },
      { number: 2, name: "Carvajal", role: "RB", x: 25, y: 82 },
      { number: 14, name: "Tchouaméni", role: "CDM", x: 40, y: 50 },
      { number: 6, name: "Camavinga", role: "LCM", x: 52, y: 30 },
      { number: 8, name: "Valverde", role: "RCM", x: 52, y: 70 },
      { number: 5, name: "Bellingham", role: "CAM", x: 66, y: 50 },
      { number: 7, name: "Vinícius Jr", role: "LW", x: 78, y: 24 },
      { number: 9, name: "Mbappé", role: "ST", x: 84, y: 50 }
    ]
  },
  {
    id: "tactic-3",
    team: "Bayer Leverkusen",
    formation: "3-4-2-1 (Alonso's Gegenpress)",
    title: "Xabi Alonso's Wing-Back Symphony: Grimaldo & Frimpong's Attacking Output",
    expert: "Raphael Honigstein • Bundesliga Expert",
    date: "Tactical Deep-Dive",
    summary: "Leverkusen's wing-backs behave like wingers in possession while twin number 10s (Wirtz & Hofmann) operate between opposition defensive lines.",
    keyTactics: [
      "Double Number 10s: Wirtz and Hofmann occupy the half-spaces to drag center-backs out of position.",
      "Wing-Back Crosses: Frimpong and Grimaldo combine for over 35 goals and assists per season.",
      "Granit Xhaka Pivot: Dictating tempo and recycling possession from deep."
    ],
    strength: "High-octane press resistance and lethal wing-back scoring threats.",
    vulnerability: "Susceptible to quick vertical long balls over the three-man backline.",
    lineup: [
      { number: 1, name: "Hradecky", role: "GK", x: 10, y: 50 },
      { number: 12, name: "Tapsoba", role: "LCB", x: 25, y: 25 },
      { number: 4, name: "Tah", role: "CB", x: 23, y: 50 },
      { number: 3, name: "Hincapie", role: "RCB", x: 25, y: 75 },
      { number: 20, name: "Grimaldo", role: "LWB", x: 52, y: 14 },
      { number: 34, name: "Xhaka", role: "LCM", x: 42, y: 38 },
      { number: 25, name: "Palacios", role: "RCM", x: 42, y: 62 },
      { number: 30, name: "Frimpong", role: "RWB", x: 52, y: 86 },
      { number: 10, name: "Wirtz", role: "LAM", x: 68, y: 32 },
      { number: 7, name: "Hofmann", role: "RAM", x: 68, y: 68 },
      { number: 22, name: "Boniface", role: "ST", x: 84, y: 50 }
    ]
  }
]

export const initialComments: ForumComment[] = [
  {
    id: "comm-1",
    author: "MarcoRossi_Tifosi",
    avatar: "🇮🇹",
    timeAgo: "23 mins ago",
    content: "Cole Palmer is playing like a prime Zinedine Zidane right now. His composure from the penalty spot and his xG creation is unmatched in the Premier League this season!",
    upvotes: 42,
    downvotes: 3,
    badge: "Tactical Analyst"
  },
  {
    id: "comm-2",
    author: "Madridista_Ultra",
    avatar: "⚪",
    timeAgo: "1 hour ago",
    content: "Bellingham + Mbappé + Vini Jr is the most frightening attack in UEFA Champions League history. Xabi Alonso's tactics are brilliant but Real Madrid's transition speed is unstoppable.",
    upvotes: 68,
    downvotes: 11,
    badge: "Verified Fan"
  },
  {
    id: "comm-3",
    author: "Gunners_Gegenpress",
    avatar: "🔴",
    timeAgo: "3 hours ago",
    content: "If Arsenal beat Liverpool at the Emirates this weekend, the Premier League title race will come down to goal difference on the final day! What a season!",
    upvotes: 31,
    downvotes: 4,
    badge: "Ultras"
  }
]

export const initialPolls: MatchPoll[] = [
  {
    id: "poll-1",
    matchTitle: "Manchester City vs Real Madrid (UCL)",
    question: "Who will win this UEFA Champions League titan clash?",
    votes: {
      home: 1420,
      draw: 640,
      away: 1280
    }
  },
  {
    id: "poll-2",
    matchTitle: "Arsenal vs Liverpool (Premier League)",
    question: "Who takes the 3 points in this Premier League title showdown?",
    votes: {
      home: 980,
      draw: 510,
      away: 1150
    }
  }
]
