export interface TransferRecord {
  year: string
  fromClub: string
  toClub: string
  fee: string
  type: "Permanent" | "Loan" | "Free Agent" | "Academy"
}

export interface PlayerProfile {
  id: string
  name: string
  number: number
  position: "Forward" | "Midfielder" | "Defender" | "Goalkeeper"
  club: string
  clubBadge: string
  country: string
  countryFlag: string
  age: number
  image?: string
  seasonGoals: number
  seasonAssists: number
  xg: number // expected goals
  xa: number // expected assists
  shotAccuracy: number // percentage
  passAccuracy: number // percentage
  appearances: number
  rating: number // out of 10
  radar: {
    shooting: number
    passing: number
    dribbling: number
    defending: number
    physical: number
    pace: number
  }
  transferHistory: TransferRecord[]
  biography: string
}

export const playerProfilesData: PlayerProfile[] = [
  {
    id: "haaland",
    name: "Erling Haaland",
    number: 9,
    position: "Forward",
    club: "Manchester City",
    clubBadge: "🔵",
    country: "Norway",
    countryFlag: "🇳🇴",
    age: 25,
    seasonGoals: 27,
    seasonAssists: 5,
    xg: 23.4,
    xa: 3.8,
    shotAccuracy: 64,
    passAccuracy: 78,
    appearances: 26,
    rating: 8.65,
    radar: {
      shooting: 98,
      passing: 74,
      dribbling: 81,
      defending: 45,
      physical: 95,
      pace: 92
    },
    transferHistory: [
      { year: "2022", fromClub: "Borussia Dortmund", toClub: "Manchester City", fee: "€60M (Release Clause)", type: "Permanent" },
      { year: "2020", fromClub: "RB Salzburg", toClub: "Borussia Dortmund", fee: "€20M", type: "Permanent" },
      { year: "2019", fromClub: "Molde FK", toClub: "RB Salzburg", fee: "€8M", type: "Permanent" }
    ],
    biography: "The Norwegian goal machine whose terrifying sprint speed, positional instinct, and clinical finishing consistently outperform expected goals (xG)."
  },
  {
    id: "mbappe",
    name: "Kylian Mbappé",
    number: 9,
    position: "Forward",
    club: "Real Madrid",
    clubBadge: "⚪",
    country: "France",
    countryFlag: "🇫🇷",
    age: 27,
    seasonGoals: 24,
    seasonAssists: 8,
    xg: 21.1,
    xa: 7.2,
    shotAccuracy: 61,
    passAccuracy: 84,
    appearances: 25,
    rating: 8.78,
    radar: {
      shooting: 95,
      passing: 83,
      dribbling: 96,
      defending: 38,
      physical: 79,
      pace: 99
    },
    transferHistory: [
      { year: "2024", fromClub: "Paris Saint-Germain", toClub: "Real Madrid", fee: "Free Agent (€150M Sign-on Bonus)", type: "Free Agent" },
      { year: "2018", fromClub: "AS Monaco", toClub: "Paris Saint-Germain", fee: "€180M", type: "Permanent" }
    ],
    biography: "France's World Cup icon now leading Real Madrid's attack with devastating acceleration, 1v1 dribbling mastery, and elite finishing."
  },
  {
    id: "yamal",
    name: "Lamine Yamal",
    number: 19,
    position: "Forward",
    club: "Barcelona",
    clubBadge: "🔵🔴",
    country: "Spain",
    countryFlag: "🇪🇸",
    age: 18,
    seasonGoals: 11,
    seasonAssists: 14,
    xg: 8.9,
    xa: 12.5,
    shotAccuracy: 56,
    passAccuracy: 86,
    appearances: 27,
    rating: 8.52,
    radar: {
      shooting: 86,
      passing: 91,
      dribbling: 97,
      defending: 52,
      physical: 72,
      pace: 90
    },
    transferHistory: [
      { year: "2023", fromClub: "La Masia Academy", toClub: "Barcelona First Team", fee: "Academy Graduate", type: "Academy" }
    ],
    biography: "The youngest European Champion and Barcelona prodigy whose creativity, vision, and expected assists (xA) rival the greatest wingers in history."
  },
  {
    id: "bellingham",
    name: "Jude Bellingham",
    number: 5,
    position: "Midfielder",
    club: "Real Madrid",
    clubBadge: "⚪",
    country: "England",
    countryFlag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    age: 22,
    seasonGoals: 16,
    seasonAssists: 10,
    xg: 14.2,
    xa: 9.1,
    shotAccuracy: 58,
    passAccuracy: 90,
    appearances: 26,
    rating: 8.70,
    radar: {
      shooting: 88,
      passing: 90,
      dribbling: 89,
      defending: 82,
      physical: 91,
      pace: 84
    },
    transferHistory: [
      { year: "2023", fromClub: "Borussia Dortmund", toClub: "Real Madrid", fee: "€103M + €30M add-ons", type: "Permanent" },
      { year: "2020", fromClub: "Birmingham City", toClub: "Borussia Dortmund", fee: "€30M", type: "Permanent" }
    ],
    biography: "The complete box-to-box maestro wearing Zidane's #5, combining relentless work rate, clutch goalscoring, and leadership."
  },
  {
    id: "wirtz",
    name: "Florian Wirtz",
    number: 10,
    position: "Midfielder",
    club: "Bayer Leverkusen",
    clubBadge: "⚫🔴",
    country: "Germany",
    countryFlag: "🇩🇪",
    age: 22,
    seasonGoals: 14,
    seasonAssists: 16,
    xg: 11.8,
    xa: 15.3,
    shotAccuracy: 59,
    passAccuracy: 89,
    appearances: 27,
    rating: 8.61,
    radar: {
      shooting: 85,
      passing: 95,
      dribbling: 94,
      defending: 60,
      physical: 74,
      pace: 83
    },
    transferHistory: [
      { year: "2020", fromClub: "1. FC Köln U17", toClub: "Bayer Leverkusen", fee: "€200k", type: "Permanent" }
    ],
    biography: "The creative fulcrum of Leverkusen's invincible double-winning squad, renowned for needle passes, spatial intelligence, and xG creation."
  },
  {
    id: "salah",
    name: "Mohamed Salah",
    number: 11,
    position: "Forward",
    club: "Liverpool",
    clubBadge: "🔴",
    country: "Egypt",
    countryFlag: "🇪🇬",
    age: 33,
    seasonGoals: 22,
    seasonAssists: 12,
    xg: 19.5,
    xa: 10.4,
    shotAccuracy: 63,
    passAccuracy: 82,
    appearances: 28,
    rating: 8.69,
    radar: {
      shooting: 93,
      passing: 87,
      dribbling: 90,
      defending: 48,
      physical: 82,
      pace: 89
    },
    transferHistory: [
      { year: "2017", fromClub: "AS Roma", toClub: "Liverpool", fee: "€42M", type: "Permanent" },
      { year: "2016", fromClub: "Chelsea", toClub: "AS Roma", fee: "€15M", type: "Permanent" }
    ],
    biography: "The Egyptian King continues to shatter Premier League scoring and assist records, combining cutting inside with lethal precision."
  }
]
