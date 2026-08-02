import { useState } from "react"
import { initialComments, initialPolls } from "../data/newsAndTacticsData"
import type { ForumComment, MatchPoll } from "../data/newsAndTacticsData"
import { FaComments, FaArrowUp, FaArrowDown, FaPoll, FaPaperPlane } from "react-icons/fa"

export default function CommunityHub() {
  const [comments, setComments] = useState<ForumComment[]>(initialComments)
  const [polls, setPolls] = useState<MatchPoll[]>(initialPolls)
  const [newCommentText, setNewCommentText] = useState("")
  const [userVotedPolls, setUserVotedPolls] = useState<Record<string, "home" | "draw" | "away">>({})

  const handleUpvote = (id: string) => {
    setComments((prev) =>
      prev.map((c) => (c.id === id ? { ...c, upvotes: c.upvotes + 1 } : c))
    )
  }

  const handleDownvote = (id: string) => {
    setComments((prev) =>
      prev.map((c) => (c.id === id ? { ...c, downvotes: c.downvotes + 1 } : c))
    )
  }

  const handlePostComment = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newCommentText.trim()) return

    const newComment: ForumComment = {
      id: `comm-${Date.now()}`,
      author: "You (Verified Fan)",
      avatar: "⚽",
      timeAgo: "Just now",
      content: newCommentText,
      upvotes: 1,
      downvotes: 0,
      badge: "Verified Fan"
    }

    setComments([newComment, ...comments])
    setNewCommentText("")
  }

  const handleVotePoll = (pollId: string, choice: "home" | "draw" | "away") => {
    if (userVotedPolls[pollId]) return

    setPolls((prev) =>
      prev.map((p) => {
        if (p.id !== pollId) return p
        return {
          ...p,
          votes: {
            ...p.votes,
            [choice]: p.votes[choice] + 1
          }
        }
      })
    )

    setUserVotedPolls({ ...userVotedPolls, [pollId]: choice })
  }

  return (
    <section id="community" className="section-container">
      <div className="section-header">
        <span className="badge-pill">FAN ENGAGEMENT &amp; COMMUNITY</span>
        <h2 className="section-title">Fan Forum &amp; Live Match Predictor</h2>
        <p className="section-subtitle">
          Join interactive discussion threads, upvote tactical analyses, and vote in weekend blockbuster match prediction polls.
        </p>
      </div>

      <div className="community-grid">
        {/* Interactive Fan Forum & Discussion Area */}
        <div>
          <div className="glass-card" style={{ padding: "28px" }}>
            <h3 style={{ fontSize: "1.5rem", display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              <FaComments style={{ color: "#00e5ff" }} />
              <span>Interactive Fan Discussion Board</span>
            </h3>

            {/* Comment Post Form */}
            <form onSubmit={handlePostComment} style={{ marginBottom: 28, display: "flex", flexDirection: "column", gap: 12 }}>
              <textarea
                value={newCommentText}
                onChange={(e) => setNewCommentText(e.target.value)}
                placeholder="Share your tactical take, match prediction, or transfer thought..."
                rows={3}
                style={{
                  width: "100%",
                  background: "var(--bg-primary)",
                  border: "1px solid var(--border-color)",
                  borderRadius: "12px",
                  padding: "14px",
                  color: "var(--text-primary)",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.95rem",
                  resize: "vertical"
                }}
              />
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                  Posting as Verified Supporter
                </span>
                <button type="submit" className="btn-primary touch-interactive">
                  <FaPaperPlane />
                  <span>Post Comment</span>
                </button>
              </div>
            </form>

            {/* Comments Feed */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {comments.map((comm) => (
                <div key={comm.id} className="forum-comment-card glass-card" style={{ boxShadow: "none", background: "var(--bg-tertiary)" }}>
                  <div className="vote-controls">
                    <button
                      onClick={() => handleUpvote(comm.id)}
                      className="vote-btn touch-interactive"
                      aria-label="Upvote comment"
                    >
                      <FaArrowUp />
                    </button>
                    <span style={{ fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: "0.95rem", color: "var(--accent-primary)" }}>
                      {comm.upvotes - comm.downvotes}
                    </span>
                    <button
                      onClick={() => handleDownvote(comm.id)}
                      className="vote-btn touch-interactive"
                      aria-label="Downvote comment"
                    >
                      <FaArrowDown />
                    </button>
                  </div>

                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                      <span style={{ fontSize: "1.4rem" }}>{comm.avatar}</span>
                      <strong style={{ fontSize: "1rem" }}>{comm.author}</strong>
                      <span className="badge-pill" style={{ marginBottom: 0, padding: "2px 8px", fontSize: "0.7rem" }}>
                        {comm.badge}
                      </span>
                      <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginLeft: "auto" }}>
                        {comm.timeAgo}
                      </span>
                    </div>

                    <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: "1.5" }}>
                      {comm.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Live Match Predictor Polls */}
        <div>
          <div className="glass-card" style={{ padding: "28px" }}>
            <h3 style={{ fontSize: "1.5rem", display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              <FaPoll style={{ color: "#f59e0b" }} />
              <span>Weekend Match Predictor</span>
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              {polls.map((p) => {
                const totalVotes = p.votes.home + p.votes.draw + p.votes.away
                const homePct = totalVotes > 0 ? Math.round((p.votes.home / totalVotes) * 100) : 33
                const drawPct = totalVotes > 0 ? Math.round((p.votes.draw / totalVotes) * 100) : 34
                const awayPct = totalVotes > 0 ? Math.round((p.votes.away / totalVotes) * 100) : 33
                const hasVoted = Boolean(userVotedPolls[p.id])

                return (
                  <div key={p.id} style={{ padding: "20px", background: "var(--bg-tertiary)", borderRadius: "14px", border: "1px solid var(--border-color)" }}>
                    <div style={{ fontSize: "0.8rem", color: "var(--accent-primary)", fontWeight: 700, textTransform: "uppercase" }}>
                      COMMUNITY PREDICTION POLL
                    </div>
                    <h4 style={{ fontSize: "1.2rem", marginTop: 4 }}>{p.matchTitle}</h4>
                    <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginTop: 4 }}>
                      {p.question}
                    </p>

                    <div className="poll-bar">
                      <div style={{ width: `${homePct}%`, background: "#10b981" }} title={`Home win: ${homePct}%`} />
                      <div style={{ width: `${drawPct}%`, background: "#f59e0b" }} title={`Draw: ${drawPct}%`} />
                      <div style={{ width: `${awayPct}%`, background: "#3b82f6" }} title={`Away win: ${awayPct}%`} />
                    </div>

                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: 16 }}>
                      <span>Home ({homePct}%)</span>
                      <span>Draw ({drawPct}%)</span>
                      <span>Away ({awayPct}%)</span>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
                      <button
                        onClick={() => handleVotePoll(p.id, "home")}
                        disabled={hasVoted}
                        className="btn-secondary touch-interactive"
                        style={{
                          fontSize: "0.82rem",
                          padding: "8px",
                          borderColor: userVotedPolls[p.id] === "home" ? "#10b981" : undefined,
                          background: userVotedPolls[p.id] === "home" ? "rgba(16, 185, 129, 0.2)" : undefined
                        }}
                      >
                        Home Win
                      </button>
                      <button
                        onClick={() => handleVotePoll(p.id, "draw")}
                        disabled={hasVoted}
                        className="btn-secondary touch-interactive"
                        style={{
                          fontSize: "0.82rem",
                          padding: "8px",
                          borderColor: userVotedPolls[p.id] === "draw" ? "#f59e0b" : undefined,
                          background: userVotedPolls[p.id] === "draw" ? "rgba(245, 158, 11, 0.2)" : undefined
                        }}
                      >
                        Draw
                      </button>
                      <button
                        onClick={() => handleVotePoll(p.id, "away")}
                        disabled={hasVoted}
                        className="btn-secondary touch-interactive"
                        style={{
                          fontSize: "0.82rem",
                          padding: "8px",
                          borderColor: userVotedPolls[p.id] === "away" ? "#3b82f6" : undefined,
                          background: userVotedPolls[p.id] === "away" ? "rgba(59, 130, 246, 0.2)" : undefined
                        }}
                      >
                        Away Win
                      </button>
                    </div>

                    {hasVoted && (
                      <div style={{ fontSize: "0.78rem", color: "#10b981", textAlign: "center", marginTop: 10 }}>
                        ✓ Thank you! Your prediction vote has been recorded.
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
