// .evm/config.ts — Root API Configuration Directory for Multi-Source Football APIs
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
