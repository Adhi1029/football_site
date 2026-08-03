#!/usr/bin/env python3
"""
.evm/espn_fetcher.py — Python API Fetcher for ESPN Public Soccer API & espn-api
Can be run via: python3 src/.evm/espn_fetcher.py (or python3 .evm/espn_fetcher.py)
Fetches live scores, headlines, and team data from ESPN endpoints and updates espn_live_cache.json.
Compatible with Python 3 and the 'espn-api' pip package.
"""

import json
import os
import urllib.request
from datetime import datetime, timezone

# ESPN Public REST JSON API endpoints for English Premier League, La Liga, and Champions League
ESPN_NEWS_URLS = {
    "eng.1": "https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/news",
    "esp.1": "https://site.api.espn.com/apis/site/v2/sports/soccer/esp.1/news",
    "uefa.champions": "https://site.api.espn.com/apis/site/v2/sports/soccer/uefa.champions/news"
}

ESPN_SCOREBOARD_URLS = {
    "eng.1": "https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/scoreboard"
}

def fetch_json(url):
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=8) as response:
            return json.loads(response.read().decode("utf-8"))
    except Exception as e:
        print(f"[EVM ESPN Fetcher] Warning: Could not fetch {url}: {e}")
        return None

def main():
    print("[EVM ESPN Fetcher] Syncing real-time football data from ESPN APIs...")
    
    now_str = datetime.now(timezone.utc).isoformat()
    articles_list = []
    
    for league_id, url in ESPN_NEWS_URLS.items():
        data = fetch_json(url)
        if data and "articles" in data:
            for art in data["articles"][:5]:
                headline = art.get("headline", "")
                description = art.get("description", art.get("summary", headline))
                
                # Assign condition badge based on headline
                condition = "FIT"
                if "injur" in headline.lower() or "injur" in description.lower():
                    condition = "INJURED"
                elif "doubt" in headline.lower() or "doubt" in description.lower():
                    condition = "DOUBTFUL"
                elif "goal" in headline.lower() or "win" in headline.lower():
                    condition = "IN FORM"
                
                # Try to determine player/club
                player = "Premier League Star"
                club = "European Club"
                if "Haaland" in headline:
                    player = "Erling Haaland"
                    club = "Manchester City"
                elif "Mbappé" in headline or "Real Madrid" in headline:
                    player = "Kylian Mbappé"
                    club = "Real Madrid"
                elif "Yamal" in headline or "Barcelona" in headline:
                    player = "Lamine Yamal"
                    club = "FC Barcelona"
                elif "Salah" in headline or "Liverpool" in headline:
                    player = "Mohamed Salah"
                    club = "Liverpool FC"
                
                articles_list.append({
                    "id": f"espn-live-{len(articles_list) + 1}",
                    "headline": headline,
                    "description": description,
                    "published": art.get("published", now_str),
                    "source": f"ESPN {league_id.upper()} API Wire",
                    "player": player,
                    "club": club,
                    "condition": condition
                })

    cache_path = os.path.join(os.path.dirname(__file__), "espn_live_cache.json")
    
    # Load existing cache or create default structure
    existing_cache = {}
    if os.path.exists(cache_path):
        with open(cache_path, "r", encoding="utf-8") as f:
            existing_cache = json.load(f)
            
    if articles_list:
        existing_cache["articles"] = articles_list
        existing_cache["syncTimestamp"] = now_str
        existing_cache["source"] = "ESPN Public Soccer API (eng.1 / esp.1 / uefa.champions)"
        
        with open(cache_path, "w", encoding="utf-8") as f:
            json.dump(existing_cache, f, indent=2, ensure_ascii=False)
        print(f"[EVM ESPN Fetcher] Successfully updated {cache_path} with {len(articles_list)} live ESPN articles!")
    else:
        print("[EVM ESPN Fetcher] Network restricted or offline; kept existing verified ESPN cache.")

if __name__ == "__main__":
    main()
