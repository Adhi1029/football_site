// Squad Database with Player Portraits, Ages, and Cards
// Houses authentic team logos, full squads, player photos, ages, and ratings

export interface EAFCCardStats {
  pac: number
  sho: number
  pas: number
  dri: number
  def: number
  phy: number
}

export interface EAFCPlayer {
  id: string
  name: string
  number: number
  position: string
  rating: number
  age: number
  photoUrl: string
  nationalityFlag: string
  cardType: "GOLD" | "TOTW" | "TOTY" | "HERO" | "ICON"
  stats: EAFCCardStats
  description: string
}

export interface TeamSquad {
  teamName: string
  league: string
  manager: string
  logo: string
  squad: EAFCPlayer[]
}

export const eaFCSquadsDatabase: Record<string, TeamSquad> = {
  "Liverpool": {
    teamName: "Liverpool FC",
    league: "Premier League",
    manager: "Arne Slot",
    logo: "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg",
    squad: [
      {
        id: "liv-1",
        name: "Mohamed Salah",
        number: 11,
        position: "RW",
        rating: 90,
        age: 32,
        photoUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Mohamed_Salah_2018.jpg",
        nationalityFlag: "🇪🇬",
        cardType: "TOTY",
        stats: { pac: 91, sho: 89, pas: 84, dri: 89, def: 45, phy: 76 },
        description: "Anfield's Egyptian King. Consistently leads Europe in goal involvements."
      },
      {
        id: "liv-2",
        name: "Virgil van Dijk",
        number: 4,
        position: "CB",
        rating: 89,
        age: 33,
        photoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/91/Virgil_van_Dijk_2018.jpg",
        nationalityFlag: "🇳🇱",
        cardType: "TOTY",
        stats: { pac: 78, sho: 60, pas: 71, dri: 72, def: 91, phy: 88 },
        description: "Captain and defensive colossus. Unmatched aerial dominance and composure."
      },
      {
        id: "liv-3",
        name: "Trent Alexander-Arnold",
        number: 66,
        position: "RB",
        rating: 87,
        age: 26,
        photoUrl: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Trent_Alexander-Arnold_2018.jpg",
        nationalityFlag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
        cardType: "GOLD",
        stats: { pac: 76, sho: 75, pas: 90, dri: 80, def: 80, phy: 73 },
        description: "Elite playmaker from right-back with phenomenal passing range."
      },
      {
        id: "liv-4",
        name: "Alisson Becker",
        number: 1,
        position: "GK",
        rating: 89,
        age: 32,
        photoUrl: "https://upload.wikimedia.org/wikipedia/commons/7/75/Alisson_Becker_2018.jpg",
        nationalityFlag: "🇧🇷",
        cardType: "GOLD",
        stats: { pac: 86, sho: 85, pas: 85, dri: 89, def: 54, phy: 90 },
        description: "World-class shot stopper and distributor."
      },
      {
        id: "liv-5",
        name: "Alexis Mac Allister",
        number: 10,
        position: "CM",
        rating: 86,
        age: 26,
        photoUrl: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Alexis_Mac_Allister_2022.jpg",
        nationalityFlag: "🇦🇷",
        cardType: "GOLD",
        stats: { pac: 74, sho: 79, pas: 85, dri: 84, def: 77, phy: 78 },
        description: "World Cup winning midfielder controlling tempo in midfield."
      },
      {
        id: "liv-6",
        name: "Luis Díaz",
        number: 7,
        position: "LW",
        rating: 85,
        age: 28,
        photoUrl: "https://upload.wikimedia.org/wikipedia/commons/3/32/Luis_D%C3%ADaz_2022.jpg",
        nationalityFlag: "🇨🇴",
        cardType: "GOLD",
        stats: { pac: 92, sho: 79, pas: 76, dri: 88, def: 35, phy: 74 },
        description: "Electric Colombian winger with relentless dribbling and pressing."
      }
    ]
  },
  "Arsenal": {
    teamName: "Arsenal FC",
    league: "Premier League",
    manager: "Mikel Arteta",
    logo: "https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg",
    squad: [
      {
        id: "ars-1",
        name: "Bukayo Saka",
        number: 7,
        position: "RW",
        rating: 88,
        age: 23,
        photoUrl: "https://upload.wikimedia.org/wikipedia/commons/0/00/Bukayo_Saka_2021.jpg",
        nationalityFlag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
        cardType: "TOTY",
        stats: { pac: 87, sho: 84, pas: 84, dri: 88, def: 65, phy: 76 },
        description: "Arsenal's Starboy. Relentless right-wing dribbler and top scorer."
      },
      {
        id: "ars-2",
        name: "Martin Ødegaard",
        number: 8,
        position: "CAM",
        rating: 88,
        age: 26,
        photoUrl: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Martin_%C3%98degaard_2019.jpg",
        nationalityFlag: "🇳🇴",
        cardType: "GOLD",
        stats: { pac: 75, sho: 80, pas: 89, dri: 88, def: 60, phy: 68 },
        description: "Arsenal captain and creative engine in the final third."
      },
      {
        id: "ars-3",
        name: "William Saliba",
        number: 2,
        position: "CB",
        rating: 87,
        age: 23,
        photoUrl: "https://upload.wikimedia.org/wikipedia/commons/4/47/William_Saliba_2019.jpg",
        nationalityFlag: "🇫🇷",
        cardType: "TOTY",
        stats: { pac: 82, sho: 40, pas: 74, dri: 75, def: 88, phy: 85 },
        description: "Commanding French center-back with elite recovery speed."
      },
      {
        id: "ars-4",
        name: "Declan Rice",
        number: 41,
        position: "CDM",
        rating: 87,
        age: 26,
        photoUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Declan_Rice_2021.jpg",
        nationalityFlag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
        cardType: "GOLD",
        stats: { pac: 78, sho: 72, pas: 82, dri: 80, def: 87, phy: 86 },
        description: "Powerhouse defensive midfielder who breaks up attacks."
      }
    ]
  },
  "Manchester City": {
    teamName: "Manchester City",
    league: "Premier League",
    manager: "Pep Guardiola",
    logo: "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg",
    squad: [
      {
        id: "mci-1",
        name: "Erling Haaland",
        number: 9,
        position: "ST",
        rating: 91,
        age: 24,
        photoUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Erling_Haaland_2023_%28cropped%29.jpg",
        nationalityFlag: "🇳🇴",
        cardType: "TOTY",
        stats: { pac: 90, sho: 93, pas: 68, dri: 80, def: 45, phy: 89 },
        description: "The Nordic goalscoring phenomenon with unstoppable power."
      },
      {
        id: "mci-2",
        name: "Rodri",
        number: 16,
        position: "CDM",
        rating: 91,
        age: 28,
        photoUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Rodri_2019.jpg",
        nationalityFlag: "🇪🇸",
        cardType: "TOTY",
        stats: { pac: 67, sho: 80, pas: 87, dri: 84, def: 88, phy: 86 },
        description: "Ballon d'Or winning midfielder and tactical anchor."
      },
      {
        id: "mci-3",
        name: "Kevin De Bruyne",
        number: 17,
        position: "CAM",
        rating: 90,
        age: 33,
        photoUrl: "https://upload.wikimedia.org/wikipedia/commons/4/40/Kevin_De_Bruyne_2018.jpg",
        nationalityFlag: "🇧🇪",
        cardType: "TOTY",
        stats: { pac: 72, sho: 88, pas: 94, dri: 87, def: 65, phy: 78 },
        description: "One of the greatest playmakers in Premier League history."
      },
      {
        id: "mci-4",
        name: "Phil Foden",
        number: 47,
        position: "RW",
        rating: 88,
        age: 24,
        photoUrl: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Phil_Foden_2019.jpg",
        nationalityFlag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
        cardType: "GOLD",
        stats: { pac: 85, sho: 86, pas: 84, dri: 90, def: 56, phy: 68 },
        description: "Stockport Iniesta with lethal left-footed strikes."
      },
      {
        id: "mci-5",
        name: "Rúben Dias",
        number: 3,
        position: "CB",
        rating: 88,
        age: 27,
        photoUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d4/R%C3%BAben_Dias_2018.jpg",
        nationalityFlag: "🇵🇹",
        cardType: "GOLD",
        stats: { pac: 72, sho: 39, pas: 68, dri: 70, def: 89, phy: 87 },
        description: "Portuguese defensive leader at Etihad Stadium."
      }
    ]
  },
  "Real Madrid": {
    teamName: "Real Madrid CF",
    league: "La Liga",
    manager: "Carlo Ancelotti",
    logo: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
    squad: [
      {
        id: "rma-1",
        name: "Kylian Mbappé",
        number: 9,
        position: "ST",
        rating: 91,
        age: 26,
        photoUrl: "https://upload.wikimedia.org/wikipedia/commons/5/57/2019-07-17_SG_Dynamo_Dresden_vs._Paris_Saint-Germain_by_Sandro_Halank%E2%80%93129_%28cropped%29.jpg",
        nationalityFlag: "🇫🇷",
        cardType: "TOTY",
        stats: { pac: 97, sho: 90, pas: 80, dri: 92, def: 36, phy: 78 },
        description: "The fastest attacker in world football."
      },
      {
        id: "rma-2",
        name: "Vinícius Júnior",
        number: 7,
        position: "LW",
        rating: 91,
        age: 24,
        photoUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Vinicius_Jr_2021.jpg",
        nationalityFlag: "🇧🇷",
        cardType: "TOTY",
        stats: { pac: 95, sho: 86, pas: 81, dri: 94, def: 29, phy: 69 },
        description: "Electrifying Brazilian winger who thrives on big European nights."
      },
      {
        id: "rma-3",
        name: "Jude Bellingham",
        number: 5,
        position: "CAM",
        rating: 90,
        age: 21,
        photoUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Jude_Bellingham_2023.jpg",
        nationalityFlag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
        cardType: "TOTY",
        stats: { pac: 81, sho: 87, pas: 84, dri: 88, def: 78, phy: 84 },
        description: "English superstar at Santiago Bernabéu."
      },
      {
        id: "rma-4",
        name: "Federico Valverde",
        number: 8,
        position: "CM",
        rating: 88,
        age: 26,
        photoUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Federico_Valverde_2018.jpg",
        nationalityFlag: "🇺🇾",
        cardType: "GOLD",
        stats: { pac: 88, sho: 82, pas: 84, dri: 84, def: 80, phy: 85 },
        description: "Tireless Uruguayan box-to-box midfielder with thunderous long shots."
      },
      {
        id: "rma-5",
        name: "Rodrygo",
        number: 11,
        position: "RW",
        rating: 86,
        age: 24,
        photoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/91/Rodrygo_2019.jpg",
        nationalityFlag: "🇧🇷",
        cardType: "GOLD",
        stats: { pac: 89, sho: 83, pas: 80, dri: 88, def: 32, phy: 64 },
        description: "Clutch Champions League performer and versatile forward."
      }
    ]
  },
  "Barcelona": {
    teamName: "FC Barcelona",
    league: "La Liga",
    manager: "Hansi Flick",
    logo: "https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg",
    squad: [
      {
        id: "bar-1",
        name: "Lamine Yamal",
        number: 19,
        position: "RW",
        rating: 87,
        age: 18,
        photoUrl: "https://upload.wikimedia.org/wikipedia/commons/d/df/Lamine_Yamal_2023.jpg",
        nationalityFlag: "🇪🇸",
        cardType: "TOTY",
        stats: { pac: 90, sho: 82, pas: 85, dri: 91, def: 40, phy: 64 },
        description: "La Masia's 18-year-old sensation and Euro winner."
      },
      {
        id: "bar-2",
        name: "Robert Lewandowski",
        number: 9,
        position: "ST",
        rating: 88,
        age: 36,
        photoUrl: "https://upload.wikimedia.org/wikipedia/commons/0/03/Robert_Lewandowski_2018.jpg",
        nationalityFlag: "🇵🇱",
        cardType: "GOLD",
        stats: { pac: 75, sho: 91, pas: 80, dri: 84, def: 44, phy: 82 },
        description: "Prolific Polish striker and master of penalty-box movement."
      },
      {
        id: "bar-3",
        name: "Pedri",
        number: 8,
        position: "CM",
        rating: 86,
        age: 22,
        photoUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Pedri_2021.jpg",
        nationalityFlag: "🇪🇸",
        cardType: "GOLD",
        stats: { pac: 77, sho: 70, pas: 87, dri: 88, def: 68, phy: 66 },
        description: "Creative Spanish midfielder with silky turns and vision."
      },
      {
        id: "bar-4",
        name: "Raphinha",
        number: 11,
        position: "LW",
        rating: 86,
        age: 28,
        photoUrl: "https://upload.wikimedia.org/wikipedia/commons/1/18/Raphinha_2022.jpg",
        nationalityFlag: "🇧🇷",
        cardType: "GOLD",
        stats: { pac: 91, sho: 84, pas: 83, dri: 87, def: 50, phy: 73 },
        description: "High-intensity Brazilian winger with lethal left foot."
      }
    ]
  },
  "Bayern Munich": {
    teamName: "FC Bayern Munich",
    league: "Bundesliga",
    manager: "Vincent Kompany",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg",
    squad: [
      {
        id: "bay-1",
        name: "Harry Kane",
        number: 9,
        position: "ST",
        rating: 90,
        age: 31,
        photoUrl: "https://upload.wikimedia.org/wikipedia/commons/2/22/Harry_Kane_2018.jpg",
        nationalityFlag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
        cardType: "TOTY",
        stats: { pac: 70, sho: 93, pas: 85, dri: 83, def: 48, phy: 83 },
        description: "The complete center-forward and European Golden Boot winner."
      },
      {
        id: "bay-2",
        name: "Jamal Musiala",
        number: 42,
        position: "CAM",
        rating: 88,
        age: 22,
        photoUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Jamal_Musiala_2021.jpg",
        nationalityFlag: "🇩🇪",
        cardType: "GOLD",
        stats: { pac: 85, sho: 82, pas: 84, dri: 92, def: 58, phy: 68 },
        description: "Bambi. Magician in tight spaces with incredible balance."
      },
      {
        id: "bay-3",
        name: "Joshua Kimmich",
        number: 6,
        position: "CDM",
        rating: 87,
        age: 30,
        photoUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Joshua_Kimmich_2018.jpg",
        nationalityFlag: "🇩🇪",
        cardType: "GOLD",
        stats: { pac: 70, sho: 73, pas: 89, dri: 84, def: 82, phy: 78 },
        description: "Tactical brain and set-piece specialist."
      }
    ]
  }
}

export function getTeamSquadOrDefault(teamName: string, leagueName: string, teamLogo: string): TeamSquad {
  const found = eaFCSquadsDatabase[teamName]
  if (found) return found

  return {
    teamName,
    league: leagueName,
    manager: "First-Team Head Coach",
    logo: teamLogo,
    squad: [
      {
        id: `${teamName}-cap`,
        name: `${teamName} Star Striker`,
        number: 9,
        position: "ST",
        rating: 86,
        age: 26,
        photoUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Erling_Haaland_2023_%28cropped%29.jpg",
        nationalityFlag: "🌍",
        cardType: "GOLD",
        stats: { pac: 86, sho: 86, pas: 75, dri: 82, def: 40, phy: 80 },
        description: `Top goalscorer and focal point of ${teamName}'s attack.`
      },
      {
        id: `${teamName}-mid`,
        name: `${teamName} Playmaker`,
        number: 10,
        position: "CAM",
        rating: 85,
        age: 25,
        photoUrl: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Florian_Wirtz_2023.jpg",
        nationalityFlag: "🌍",
        cardType: "GOLD",
        stats: { pac: 81, sho: 80, pas: 86, dri: 85, def: 60, phy: 72 },
        description: `Creative playmaker who orchestrates ${teamName}'s midfield.`
      },
      {
        id: `${teamName}-def`,
        name: `${teamName} Club Captain`,
        number: 4,
        position: "CB",
        rating: 84,
        age: 29,
        photoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/91/Virgil_van_Dijk_2018.jpg",
        nationalityFlag: "🌍",
        cardType: "GOLD",
        stats: { pac: 75, sho: 50, pas: 70, dri: 68, def: 86, phy: 85 },
        description: `Commanding defensive rock and leader of ${teamName}.`
      },
      {
        id: `${teamName}-gk`,
        name: `${teamName} Number 1`,
        number: 1,
        position: "GK",
        rating: 84,
        age: 28,
        photoUrl: "https://upload.wikimedia.org/wikipedia/commons/7/75/Alisson_Becker_2018.jpg",
        nationalityFlag: "🌍",
        cardType: "GOLD",
        stats: { pac: 83, sho: 81, pas: 80, dri: 85, def: 50, phy: 84 },
        description: `Starting goalkeeper with elite reflex saves.`
      }
    ]
  }
}
