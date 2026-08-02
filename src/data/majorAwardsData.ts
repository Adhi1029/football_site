// 40-Year Major Football Awards Database (1985–2025)
// Contains Ballon d'Or, FIFA World Cup Golden Ball, FIFA World Cup Golden Boot, European Golden Shoe, and Golden Foot winners.

export interface AwardWinner {
  year: number
  awardName: "Ballon d'Or" | "World Cup Golden Ball" | "World Cup Golden Boot" | "European Golden Shoe" | "Golden Foot"
  winner: string
  country: string
  countryFlag: string
  club: string
  clubLogo: string
  age: number
  photoUrl: string
  timesWon: number
  description: string
}

export const majorAwardsDatabase: AwardWinner[] = [
  // Ballon d'Or Winners (Recent to 40 years back)
  {
    year: 2024,
    awardName: "Ballon d'Or",
    winner: "Rodri",
    country: "Spain",
    countryFlag: "🇪🇸",
    club: "Manchester City",
    clubLogo: "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg",
    age: 28,
    photoUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Rodri_2019.jpg",
    timesWon: 1,
    description: "Ballon d'Or 2024 Winner. Euro 2024 MVP and Premier League Champion."
  },
  {
    year: 2023,
    awardName: "Ballon d'Or",
    winner: "Lionel Messi",
    country: "Argentina",
    countryFlag: "🇦🇷",
    club: "Inter Miami / PSG",
    clubLogo: "https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg",
    age: 36,
    photoUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Messi_vs_Nigeria_2018.jpg",
    timesWon: 8,
    description: "Record 8th Ballon d'Or after captaining Argentina to World Cup glory."
  },
  {
    year: 2022,
    awardName: "Ballon d'Or",
    winner: "Karim Benzema",
    country: "France",
    countryFlag: "🇫🇷",
    club: "Real Madrid CF",
    clubLogo: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
    age: 34,
    photoUrl: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Karim_Benzema_2018.jpg",
    timesWon: 1,
    description: "Led Real Madrid to 14th UCL title with 44 goals in 46 games."
  },
  {
    year: 2021,
    awardName: "Ballon d'Or",
    winner: "Lionel Messi",
    country: "Argentina",
    countryFlag: "🇦🇷",
    club: "FC Barcelona / PSG",
    clubLogo: "https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg",
    age: 34,
    photoUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Messi_vs_Nigeria_2018.jpg",
    timesWon: 7,
    description: "7th Ballon d'Or after winning Copa América with Argentina."
  },
  {
    year: 2019,
    awardName: "Ballon d'Or",
    winner: "Lionel Messi",
    country: "Argentina",
    countryFlag: "🇦🇷",
    club: "FC Barcelona",
    clubLogo: "https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg",
    age: 32,
    photoUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Messi_vs_Nigeria_2018.jpg",
    timesWon: 6,
    description: "6th Ballon d'Or with 51 goals across all competitions."
  },
  {
    year: 2018,
    awardName: "Ballon d'Or",
    winner: "Luka Modrić",
    country: "Croatia",
    countryFlag: "🇭🇷",
    club: "Real Madrid CF",
    clubLogo: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
    age: 33,
    photoUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Luka_Modric_2018.jpg",
    timesWon: 1,
    description: "Broke Messi/Ronaldo duopoly after UCL win and World Cup final."
  },
  {
    year: 2017,
    awardName: "Ballon d'Or",
    winner: "Cristiano Ronaldo",
    country: "Portugal",
    countryFlag: "🇵🇹",
    club: "Real Madrid CF",
    clubLogo: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
    age: 32,
    photoUrl: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg",
    timesWon: 5,
    description: "5th Ballon d'Or after back-to-back Champions League titles."
  },
  {
    year: 2016,
    awardName: "Ballon d'Or",
    winner: "Cristiano Ronaldo",
    country: "Portugal",
    countryFlag: "🇵🇹",
    club: "Real Madrid CF",
    clubLogo: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
    age: 31,
    photoUrl: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg",
    timesWon: 4,
    description: "4th Ballon d'Or after winning UCL and Euro 2016."
  },
  {
    year: 2015,
    awardName: "Ballon d'Or",
    winner: "Lionel Messi",
    country: "Argentina",
    countryFlag: "🇦🇷",
    club: "FC Barcelona",
    clubLogo: "https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg",
    age: 28,
    photoUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Messi_vs_Nigeria_2018.jpg",
    timesWon: 5,
    description: "5th Ballon d'Or after Barcelona treble."
  },
  {
    year: 2014,
    awardName: "Ballon d'Or",
    winner: "Cristiano Ronaldo",
    country: "Portugal",
    countryFlag: "🇵🇹",
    club: "Real Madrid CF",
    clubLogo: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
    age: 29,
    photoUrl: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg",
    timesWon: 3,
    description: "3rd Ballon d'Or after La Décima."
  },
  {
    year: 2007,
    awardName: "Ballon d'Or",
    winner: "Kaká",
    country: "Brazil",
    countryFlag: "🇧🇷",
    club: "AC Milan",
    clubLogo: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Logo_of_AC_Milan.svg",
    age: 25,
    photoUrl: "https://upload.wikimedia.org/wikipedia/commons/3/36/Kaka_2012.jpg",
    timesWon: 1,
    description: "2007 Winner after AC Milan Champions League triumph."
  },
  {
    year: 2005,
    awardName: "Ballon d'Or",
    winner: "Ronaldinho",
    country: "Brazil",
    countryFlag: "🇧🇷",
    club: "FC Barcelona",
    clubLogo: "https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg",
    age: 25,
    photoUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Ronaldinho_2006.jpg",
    timesWon: 1,
    description: "The magician of Camp Nou in his absolute peak."
  },
  {
    year: 1998,
    awardName: "Ballon d'Or",
    winner: "Zinedine Zidane",
    country: "France",
    countryFlag: "🇫🇷",
    club: "Juventus",
    clubLogo: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Juventus_FC_2017_icon_%28black%29.svg",
    age: 26,
    photoUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Zinedine_Zidane_by_Sandro_Halank.jpg",
    timesWon: 1,
    description: "Won Ballon d'Or after two goals in 1998 World Cup Final."
  },
  {
    year: 1989,
    awardName: "Ballon d'Or",
    winner: "Marco van Basten",
    country: "Netherlands",
    countryFlag: "🇳🇱",
    club: "AC Milan",
    clubLogo: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Logo_of_AC_Milan.svg",
    age: 25,
    photoUrl: "https://upload.wikimedia.org/wikipedia/commons/5/52/Marco_van_Basten_1988.jpg",
    timesWon: 3,
    description: "Dutch striker legendary for his technique and elegance."
  },
  {
    year: 1986,
    awardName: "Ballon d'Or",
    winner: "Igor Belanov",
    country: "Soviet Union",
    countryFlag: "🌍",
    club: "Dynamo Kyiv",
    clubLogo: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_FC_Dynamo_Kyiv.svg",
    age: 26,
    photoUrl: "https://upload.wikimedia.org/wikipedia/commons/5/52/Marco_van_Basten_1988.jpg",
    timesWon: 1,
    description: "1986 European Footballer of the Year."
  },

  // World Cup Golden Ball (Best Player)
  {
    year: 2022,
    awardName: "World Cup Golden Ball",
    winner: "Lionel Messi",
    country: "Argentina",
    countryFlag: "🇦🇷",
    club: "PSG / Argentina",
    clubLogo: "https://upload.wikimedia.org/wikipedia/en/c/c1/Argentina_national_football_team_logo.svg",
    age: 35,
    photoUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Messi_vs_Nigeria_2018.jpg",
    timesWon: 2,
    description: "Only player in history to win two World Cup Golden Balls (2014, 2022)."
  },
  {
    year: 2018,
    awardName: "World Cup Golden Ball",
    winner: "Luka Modrić",
    country: "Croatia",
    countryFlag: "🇭🇷",
    club: "Real Madrid CF",
    clubLogo: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
    age: 32,
    photoUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Luka_Modric_2018.jpg",
    timesWon: 1,
    description: "Captained Croatia to their first ever World Cup Final."
  },
  {
    year: 2010,
    awardName: "World Cup Golden Ball",
    winner: "Diego Forlán",
    country: "Uruguay",
    countryFlag: "🇺🇾",
    club: "Atlético Madrid",
    clubLogo: "https://upload.wikimedia.org/wikipedia/en/f/f4/Atletico_Madrid_2017_logo.svg",
    age: 31,
    photoUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Diego_Forlan_2011.jpg",
    timesWon: 1,
    description: "Hero of Uruguay's 2010 World Cup run in South Africa."
  },
  {
    year: 2006,
    awardName: "World Cup Golden Ball",
    winner: "Zinedine Zidane",
    country: "France",
    countryFlag: "🇫🇷",
    club: "Real Madrid CF",
    clubLogo: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
    age: 34,
    photoUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Zinedine_Zidane_by_Sandro_Halank.jpg",
    timesWon: 1,
    description: "Awarded Best Player of 2006 World Cup in Germany."
  },
  {
    year: 1998,
    awardName: "World Cup Golden Ball",
    winner: "Ronaldo Nazário",
    country: "Brazil",
    countryFlag: "🇧🇷",
    club: "Inter Milan",
    clubLogo: "https://upload.wikimedia.org/wikipedia/commons/0/05/FC_Internazionale_Milano_2021.svg",
    age: 21,
    photoUrl: "https://upload.wikimedia.org/wikipedia/commons/2/25/Ronaldo_-_Manchester_United_vs_Real_Madrid.jpg",
    timesWon: 1,
    description: "O Fenômeno won Golden Ball in France 98."
  },
  {
    year: 1986,
    awardName: "World Cup Golden Ball",
    winner: "Diego Maradona",
    country: "Argentina",
    countryFlag: "🇦🇷",
    club: "Napoli",
    clubLogo: "https://upload.wikimedia.org/wikipedia/commons/2/28/S.S.C._Napoli_logo.svg",
    age: 25,
    photoUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Diego_Maradona_1986.jpg",
    timesWon: 1,
    description: "One of the greatest individual World Cup tournaments of all time (Mexico 86)."
  },

  // World Cup Golden Boot (Top Scorer)
  {
    year: 2022,
    awardName: "World Cup Golden Boot",
    winner: "Kylian Mbappé",
    country: "France",
    countryFlag: "🇫🇷",
    club: "PSG / France",
    clubLogo: "https://upload.wikimedia.org/wikipedia/en/c/c1/France_national_football_team_seal.svg",
    age: 24,
    photoUrl: "https://upload.wikimedia.org/wikipedia/commons/5/57/2019-07-17_SG_Dynamo_Dresden_vs._Paris_Saint-Germain_by_Sandro_Halank%E2%80%93129_%28cropped%29.jpg",
    timesWon: 1,
    description: "Scored 8 goals in Qatar 2022 including a hat-trick in the Final."
  },
  {
    year: 2018,
    awardName: "World Cup Golden Boot",
    winner: "Harry Kane",
    country: "England",
    countryFlag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    club: "Tottenham Hotspur",
    clubLogo: "https://upload.wikimedia.org/wikipedia/en/b/b4/Tottenham_Hotspur.svg",
    age: 25,
    photoUrl: "https://upload.wikimedia.org/wikipedia/commons/2/22/Harry_Kane_2018.jpg",
    timesWon: 1,
    description: "6 goals in Russia 2018 to win the Golden Boot."
  },
  {
    year: 2002,
    awardName: "World Cup Golden Boot",
    winner: "Ronaldo Nazário",
    country: "Brazil",
    countryFlag: "🇧🇷",
    club: "Real Madrid CF",
    clubLogo: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
    age: 25,
    photoUrl: "https://upload.wikimedia.org/wikipedia/commons/2/25/Ronaldo_-_Manchester_United_vs_Real_Madrid.jpg",
    timesWon: 1,
    description: "8 goals in 2002 Korea/Japan including 2 in the final vs Germany."
  },
  {
    year: 1986,
    awardName: "World Cup Golden Boot",
    winner: "Gary Lineker",
    country: "England",
    countryFlag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    club: "Everton / Barcelona",
    clubLogo: "https://upload.wikimedia.org/wikipedia/en/7/7c/Everton_FC_logo.svg",
    age: 25,
    photoUrl: "https://upload.wikimedia.org/wikipedia/commons/5/52/Marco_van_Basten_1988.jpg",
    timesWon: 1,
    description: "6 goals in 1986 World Cup in Mexico."
  },

  // European Golden Shoe
  {
    year: 2024,
    awardName: "European Golden Shoe",
    winner: "Harry Kane",
    country: "England",
    countryFlag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    club: "Bayern Munich",
    clubLogo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg",
    age: 31,
    photoUrl: "https://upload.wikimedia.org/wikipedia/commons/2/22/Harry_Kane_2018.jpg",
    timesWon: 1,
    description: "36 Bundesliga goals in his debut season in Germany."
  },
  {
    year: 2023,
    awardName: "European Golden Shoe",
    winner: "Erling Haaland",
    country: "Norway",
    countryFlag: "🇳🇴",
    club: "Manchester City",
    clubLogo: "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg",
    age: 23,
    photoUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Erling_Haaland_2023_%28cropped%29.jpg",
    timesWon: 1,
    description: "Record-breaking 36 Premier League goals in 2022/23."
  },
  {
    year: 2022,
    awardName: "European Golden Shoe",
    winner: "Robert Lewandowski",
    country: "Poland",
    countryFlag: "🇵🇱",
    club: "Bayern Munich",
    clubLogo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg",
    age: 33,
    photoUrl: "https://upload.wikimedia.org/wikipedia/commons/0/03/Robert_Lewandowski_2018.jpg",
    timesWon: 2,
    description: "35 Bundesliga goals in 2021/22 season."
  },

  // Golden Foot Award
  {
    year: 2024,
    awardName: "Golden Foot",
    winner: "Lautaro Martínez",
    country: "Argentina",
    countryFlag: "🇦🇷",
    club: "Inter Milan",
    clubLogo: "https://upload.wikimedia.org/wikipedia/commons/0/05/FC_Internazionale_Milano_2021.svg",
    age: 27,
    photoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/91/Rodrygo_2019.jpg",
    timesWon: 1,
    description: "2024 Golden Foot Award winner for international & club achievement."
  },
  {
    year: 2022,
    awardName: "Golden Foot",
    winner: "Robert Lewandowski",
    country: "Poland",
    countryFlag: "🇵🇱",
    club: "FC Barcelona",
    clubLogo: "https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg",
    age: 34,
    photoUrl: "https://upload.wikimedia.org/wikipedia/commons/0/03/Robert_Lewandowski_2018.jpg",
    timesWon: 1,
    description: "Lifetime achievement award on the Monaco Champions Promenade."
  },
  {
    year: 2021,
    awardName: "Golden Foot",
    winner: "Mohamed Salah",
    country: "Egypt",
    countryFlag: "🇪🇬",
    club: "Liverpool FC",
    clubLogo: "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg",
    age: 29,
    photoUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Mohamed_Salah_2018.jpg",
    timesWon: 1,
    description: "Honored for outstanding career contribution and sportsmanship."
  },
  {
    year: 2020,
    awardName: "Golden Foot",
    winner: "Cristiano Ronaldo",
    country: "Portugal",
    countryFlag: "🇵🇹",
    club: "Juventus",
    clubLogo: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Juventus_FC_2017_icon_%28black%29.svg",
    age: 35,
    photoUrl: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg",
    timesWon: 1,
    description: "Monaco Golden Foot award winner in 2020."
  }
]
