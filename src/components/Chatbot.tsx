import { useState } from "react"
import { FaRobot, FaTimes, FaPaperPlane } from "react-icons/fa"

interface ChatMessage {
  sender: "user" | "bot"
  text: string
  time: string
}

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: "bot",
      text: "👋 Hello! I am your AI Football Assistant. Ask me anything about Live Scores, Europe's Top 5 Leagues, UEFA Champions League, FIFA World Cup, xG Analytics, or Tactical Formations!",
      time: "Just now"
    }
  ])

  const getReply = (query: string): string => {
    const q = query.toLowerCase()

    if (q.includes("score") || q.includes("live") || q.includes("match")) {
      return "⚡ Our Live Match Center auto-simulates real-time updates! Currently Man City vs Real Madrid is 2-2 in the 76th minute, Arsenal vs Liverpool is 1-2, and Bayern leads Leverkusen 3-2."
    }
    if (q.includes("top 5") || q.includes("league") || q.includes("premier") || q.includes("la liga") || q.includes("serie a") || q.includes("bundesliga")) {
      return "🏆 Europe's Top 5 Leagues are the Premier League (England), La Liga (Spain), Serie A (Italy), Bundesliga (Germany), and Ligue 1 (France). You can check full standings and form guides in our League Tables section!"
    }
    if (q.includes("uefa") || q.includes("champions league") || q.includes("ucl")) {
      return "🇪🇺 UEFA governs European football. The Champions League now features a 36-team single League Phase, where Real Madrid and Man City currently top the coefficient table."
    }
    if (q.includes("fifa") || q.includes("world cup") || q.includes("ranking")) {
      return "🌍 FIFA is the international governing body of 211 nations. Argentina currently holds #1 in the FIFA World Rankings, and the 2026 World Cup will expand to 48 teams in North America."
    }
    if (q.includes("xg") || q.includes("expected goals") || q.includes("stat") || q.includes("haaland") || q.includes("mbappe")) {
      return "📊 Expected Goals (xG) measures the probability of a shot resulting in a goal based on distance, angle, and defensive pressure. Erling Haaland leads our xG metrics with 23.4 xG (scoring 27 actual goals)."
    }
    if (q.includes("tactic") || q.includes("formation") || q.includes("3-2-4-1") || q.includes("press") || q.includes("pitch")) {
      return "📋 Modern tactics rely on inverted full-backs and box midfields! Check our Tactical Analysis section to interact with our live 3-2-4-1 and 4-3-1-2 pitch visualizer."
    }
    if (q.includes("messi") || q.includes("ronaldo") || q.includes("pele") || q.includes("goat")) {
      return "👑 Messi (8 Ballon d'Ors & 2022 World Cup), Ronaldo (5 Ballon d'Ors & 915+ career goals), and Pelé (3 World Cup titles) are celebrated in our GOATs section."
    }

    return "⚽ I specialize in professional football! Feel free to ask about live scores, league standings, UEFA/FIFA rules, player xG stats, or tactical breakdowns."
  }

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMsg: ChatMessage = {
      sender: "user",
      text: input,
      time: "Now"
    }

    const botReplyText = getReply(input)
    const botMsg: ChatMessage = {
      sender: "bot",
      text: botReplyText,
      time: "Now"
    }

    setMessages((prev) => [...prev, userMsg, botMsg])
    setInput("")
  }

  return (
    <div className="chatbot-container">
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="chatbot-toggle-btn touch-interactive"
          aria-label="Open AI Football Assistant"
          title="Ask AI Football Assistant"
        >
          <FaRobot />
        </button>
      )}

      {open && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  background: "var(--accent-gradient)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white"
                }}
              >
                <FaRobot />
              </div>
              <div>
                <strong style={{ fontSize: "0.95rem" }}>AI Football Assistant</strong>
                <div style={{ fontSize: "0.72rem", color: "#10b981", display: "flex", alignItems: "center", gap: 4 }}>
                  <span className="live-dot" style={{ width: 6, height: 6 }} />
                  Online • Knowledge Base Ready
                </div>
              </div>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="touch-interactive"
              style={{ background: "transparent", border: "none", color: "var(--text-secondary)", fontSize: "1.1rem", cursor: "pointer" }}
              aria-label="Close chatbot"
            >
              <FaTimes />
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`chat-bubble ${msg.sender}`}
              >
                <div>{msg.text}</div>
                <div
                  style={{
                    fontSize: "0.68rem",
                    color: msg.sender === "user" ? "rgba(255,255,255,0.7)" : "var(--text-muted)",
                    marginTop: 4,
                    textAlign: msg.sender === "user" ? "right" : "left"
                  }}
                >
                  {msg.time}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={sendMessage} className="chatbot-input">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about live scores, xG, UEFA, tactics..."
            />
            <button
              type="submit"
              className="btn-primary touch-interactive"
              style={{ padding: "10px 16px" }}
              aria-label="Send message"
            >
              <FaPaperPlane />
            </button>
          </form>
        </div>
      )}
    </div>
  )
}