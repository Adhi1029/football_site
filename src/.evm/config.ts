// Configuration for Multi-Source Football APIs (.evm API Directory)
// Houses API endpoints for ESPN, TheSportsDB, Wikimedia REST API, and Opta/UEFA Public endpoints.

export const EVM_API_ENDPOINTS = {
  espn: {
    premierLeagueScores: "https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/scoreboard",
    premierLeagueNews: "https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/news",
    premierLeagueTeams: "https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/teams",
    laLigaScores: "https://site.api.espn.com/apis/site/v2/sports/soccer/esp.1/scoreboard",
    laLigaNews: "https://site.api.espn.com/apis/site/v2/sports/soccer/esp.1/news",
    uclScores: "https://site.api.espn.com/apis/site/v2/sports/soccer/uefa.champions/scoreboard",
    uclNews: "https://site.api.espn.com/apis/site/v2/sports/soccer/uefa.champions/news"
  },
  theSportsDB: {
    searchTeam: "https://www.thesportsdb.com/api/v1/json/3/searchteams.php?t=",
    searchPlayer: "https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?t=",
    lookupLeague: "https://www.thesportsdb.com/api/v1/json/3/lookupleague.php?id="
  },
  wikimedia: {
    summary: "https://en.wikipedia.org/api/rest_v1/page/summary/"
  }
}

export interface EVMPlayerCircumstance {
  id: string
  name: string
  club: string
  dailyCondition: "FIT" | "DOUBTFUL" | "INJURED" | "SUSPENDED" | "IN FORM"
  latestCircumstance: string
  lastUpdated: string
  sourceApi: string
  verified: boolean
}

export interface EVMClubData {
  id: string
  name: string
  league: string
  stadium: string
  logo: string
  manager: string
  established: number
  sourceApi: string
}
