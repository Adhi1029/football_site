import { useState } from "react"
import { FaRobot } from "react-icons/fa"

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Ask about football history, GOATs or future!" }
  ])

  const getReply = (text: string) => {
    const msg = text.toLowerCase()

    if (msg.includes("messi")) return "Messi won the 2022 World Cup."
    if (msg.includes("ronaldo")) return "Ronaldo is one of the greatest scorers."
    if (msg.includes("pele")) return "Pelé won 3 World Cups."
    if (msg.includes("history")) return "Modern football began in 1863 in England."
    if (msg.includes("future")) return "AI and analytics are shaping football's future."

    return "I answer only football-related questions."
  }

  const sendMessage = () => {
    if (!input.trim()) return

    const userMsg = { sender: "user", text: input }
    const botMsg = { sender: "bot", text: getReply(input) }

    setMessages([...messages, userMsg, botMsg])
    setInput("")
  }

  return (
    <div className="chatbot-container">
      <button onClick={() => setOpen(!open)} className="chatbot-btn">
        <FaRobot />
      </button>

      {open && (
        <div className="chatbox">
          <div className="messages">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={msg.sender === "user" ? "user-msg" : "bot-msg"}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="input-area">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type..."
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  )
}