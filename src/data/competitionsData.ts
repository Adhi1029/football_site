export interface CompetitionInfo {
  id: string
  title: string
  shortName: string
  icon: string
  logo: string
  category: "Top 5 League" | "UEFA" | "FIFA"
  founded: string
  reigningChampion: string
  mostTitles: string
  description: string
  keyFeatures: string[]
  statsHighlight: {
    label: string
    value: string
  }[]
  tacticalIdentity: string
}

export const competitionsInfo: CompetitionInfo[] = [
  {
    id: "pl",
    title: "Premier League",
    shortName: "England • PL",
    icon: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    logo: "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg",
    category: "Top 5 League",
    founded: "1992 (First Division 1888)",
    reigningChampion: "Manchester City",
    mostTitles: "Manchester United (20 titles)",
    description: "The Premier League is globally celebrated for its relentless tempo, physical intensity, and unmatched financial parity, making every fixture a battle.",
    keyFeatures: [
      "20 clubs competing in 38 rounds with promotion & relegation to EFL Championship.",
      "Highest global television viewership (over 4.7 billion cumulative viewers).",
      "Home to legendary venues like Old Trafford, Anfield, Emirates, and Etihad."
    ],
    statsHighlight: [
      { label: "Avg Goals / Game", value: "3.24" },
      { label: "UCL Winners Produced", value: "15" },
      { label: "Global Audience", value: "4.7B+" }
    ],
    tacticalIdentity: "High-intensity Gegenpressing, vertical transitions, and tactical flexibility with inverted full-backs."
  },
  {
    id: "laliga",
    title: "La Liga EA Sports",
    shortName: "Spain • La Liga",
    icon: "🇪🇸",
    logo: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
    category: "Top 5 League",
    founded: "1929",
    reigningChampion: "Real Madrid",
    mostTitles: "Real Madrid (36 titles)",
    description: "La Liga represents the pinnacle of technical excellence, tactical intelligence, and world-renowned rivalries including El Clásico.",
    keyFeatures: [
      "20 teams showcasing intricate possession-based football and world-class academies.",
      "Most UEFA Champions League titles won by clubs of any league (20 titles).",
      "Home to Ballon d'Or winners and legendary eras of Real Madrid & Barcelona."
    ],
    statsHighlight: [
      { label: "Avg Goals / Game", value: "2.82" },
      { label: "Ballon d'Or Winners", value: "24" },
      { label: "UCL Titles (Clubs)", value: "20" }
    ],
    tacticalIdentity: "Intricate tiki-taka combinations, technical spatial dominance, and elite individual 1v1 dribbling."
  },
  {
    id: "seriea",
    title: "Serie A TIM",
    shortName: "Italy • Serie A",
    icon: "🇮🇹",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/FC_Internazionale_Milano_2021.svg",
    category: "Top 5 League",
    founded: "1898 (Round-robin 1929)",
    reigningChampion: "Inter Milan",
    mostTitles: "Juventus FC (36 Scudetti)",
    description: "Serie A is the ancestral home of defensive mastery, tactical sophistication, and passionate Italian football culture.",
    keyFeatures: [
      "20 clubs battling for the coveted Scudetto and qualification for European football.",
      "Historic powerhouses: Juventus, Inter Milan, AC Milan, Napoli, and AS Roma.",
      "Renowned for tactical innovation, catenaccio evolution, and 3-at-the-back systems."
    ],
    statsHighlight: [
      { label: "Avg Goals / Game", value: "2.68" },
      { label: "UCL Titles (Clubs)", value: "12" },
      { label: "Scudetto Winners", value: "16 clubs" }
    ],
    tacticalIdentity: "Compact defensive structures, fluid 3-5-2 / 3-4-2-1 formations, and lethal counter-attacking execution."
  },
  {
    id: "bundesliga",
    title: "Fußball-Bundesliga",
    shortName: "Germany • Bundesliga",
    icon: "🇩🇪",
    logo: "https://upload.wikimedia.org/wikipedia/en/5/59/Bayer_04_Leverkusen_logo.svg",
    category: "Top 5 League",
    founded: "1963",
    reigningChampion: "Bayer 04 Leverkusen",
    mostTitles: "FC Bayern Munich (33 titles)",
    description: "The Bundesliga boasts the highest average stadium attendances in world football, famous for vibrant fan culture, 50+1 ownership, and high-scoring matches.",
    keyFeatures: [
      "18 clubs competing in 34 matchdays, featuring the highest goals-per-game average in Europe.",
      "Strict 50+1 rule ensuring fans hold majority voting rights in club governance.",
      "Home to the Yellow Wall of Borussia Dortmund and Bayern Munich's European dynasty."
    ],
    statsHighlight: [
      { label: "Avg Goals / Game", value: "3.42" },
      { label: "Avg Attendance", value: "42,992" },
      { label: "UCL Titles (Clubs)", value: "8" }
    ],
    tacticalIdentity: "Explosive Gegenpressing, vertical transition speed, and high defensive lines."
  },
  {
    id: "ligue1",
    title: "Ligue 1 McDonald's",
    shortName: "France • Ligue 1",
    icon: "🇫🇷",
    logo: "https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg",
    category: "Top 5 League",
    founded: "1932",
    reigningChampion: "Paris Saint-Germain",
    mostTitles: "Paris Saint-Germain (12 titles)",
    description: "Ligue 1 is Europe's premier talent factory, producing world-class athletes, technical prodigies, and explosive wingers.",
    keyFeatures: [
      "18 clubs competing for the Hexagoal trophy in a fast-paced, athletic league.",
      "Unrivaled development of elite young French and international talent.",
      "Home to Paris Saint-Germain, Olympique de Marseille, and AS Monaco."
    ],
    statsHighlight: [
      { label: "Avg Goals / Game", value: "2.75" },
      { label: "U21 Minutes Played", value: "#1 in Europe" },
      { label: "World Cup Winners", value: "1998 & 2018" }
    ],
    tacticalIdentity: "Athletic 1v1 wing play, fast transitional counter-attacks, and physical midfield duels."
  },
  {
    id: "ucl",
    title: "UEFA Champions League",
    shortName: "Europe • UCL",
    icon: "🇪🇺",
    logo: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
    category: "UEFA",
    founded: "1955 (European Cup)",
    reigningChampion: "Real Madrid (15th title)",
    mostTitles: "Real Madrid (15 European Cups)",
    description: "The UEFA Champions League is the most prestigious club tournament in world sports, uniting the champions and elite clubs of Europe.",
    keyFeatures: [
      "New 36-team League Phase format replacing traditional group stages for more blockbuster clashes.",
      "Iconic anthem and European nights under the stadium floodlights.",
      "The ultimate proving ground for the world's greatest players and managers."
    ],
    statsHighlight: [
      { label: "Participating Teams", value: "36" },
      { label: "Total Prize Pool", value: "€2.46B" },
      { label: "Global Final Viewers", value: "450M+" }
    ],
    tacticalIdentity: "Elite tactical adaptability, knockout match management, and high-stakes set-piece precision."
  },
  {
    id: "uefa-euro",
    title: "UEFA European Championship (Euros)",
    shortName: "Europe • UEFA Euro",
    icon: "🇪🇺",
    logo: "https://upload.wikimedia.org/wikipedia/en/3/31/Spain_National_Football_Team_badge.svg",
    category: "UEFA",
    founded: "1960",
    reigningChampion: "Spain (2024)",
    mostTitles: "Spain (4 Euro titles)",
    description: "The UEFA European Football Championship crowns the continental champions of Europe every four years in a tournament of immense national pride.",
    keyFeatures: [
      "24 European nations competing in group stages and single-leg knockout drama.",
      "Spain became the first 4-time European champion after lifting Euro 2024 in Germany.",
      "Showcases the pinnacle of international European tactical cohesion."
    ],
    statsHighlight: [
      { label: "Nations Competing", value: "24" },
      { label: "Record Titles", value: "4 (Spain)" },
      { label: "2024 Viewers", value: "5.2B cumulative" }
    ],
    tacticalIdentity: "Pragmatic tournament football, solid defensive blocks, and clinical game management."
  },
  {
    id: "fifa-wc",
    title: "FIFA Men's World Cup",
    shortName: "World • FIFA WC",
    icon: "🌍",
    logo: "https://upload.wikimedia.org/wikipedia/en/c/c1/Argentina_national_football_team_logo.svg",
    category: "FIFA",
    founded: "1930",
    reigningChampion: "Argentina (2022)",
    mostTitles: "Brazil (5 World Cups)",
    description: "The FIFA World Cup is the undisputed summit of world sports, captivating billions as national teams battle for global immortality.",
    keyFeatures: [
      "Expanding to 48 national teams for the historic 2026 World Cup in USA, Canada & Mexico.",
      "Brazil leads all nations with 5 titles, followed by Germany & Italy (4), and Argentina (3).",
      "The stage where legends like Pelé, Maradona, Zidane, Messi, and Mbappé are immortalized."
    ],
    statsHighlight: [
      { label: "2026 Teams", value: "48" },
      { label: "Most Titles", value: "5 (Brazil)" },
      { label: "2022 Final Viewers", value: "1.5 Billion" }
    ],
    tacticalIdentity: "International tactical fusion, national unity, and clutch moments under global pressure."
  },
  {
    id: "fifa-cwc",
    title: "FIFA Club World Cup",
    shortName: "World • FIFA Club WC",
    icon: "🏆",
    logo: "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg",
    category: "FIFA",
    founded: "2000",
    reigningChampion: "Manchester City",
    mostTitles: "Real Madrid (5 Club World Cups)",
    description: "The FIFA Club World Cup crowns the undisputed world champion of professional club football, featuring continental kings from all six confederations.",
    keyFeatures: [
      "Historic 32-team expanded Club World Cup tournament debuting in summer 2025.",
      "Brings together winners of UEFA Champions League, Copa Libertadores, AFC, CAF, CONCACAF, and OFC.",
      "Real Madrid holds the record with 5 world titles."
    ],
    statsHighlight: [
      { label: "Expanded Teams", value: "32 (2025)" },
      { label: "Record Winners", value: "5 (Real Madrid)" },
      { label: "Confederations", value: "6 (Global)" }
    ],
    tacticalIdentity: "Cross-continental tactical clashes pitting South American flair against European pressing."
  }
]
