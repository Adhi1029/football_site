type Props = {
  theme: "dark" | "light"
  setTheme: React.Dispatch<React.SetStateAction<"dark" | "light">>
}

export default function Navbar({ theme, setTheme }: Props) {
  return (
    <nav className="navbar">
      <h1>⚽ Football Universe</h1>

      <div className="nav-right">
        <a href="#history">History</a>
        <a href="#present">Present</a>
        <a href="#future">Future</a>
        <a href="#goats">GOATS</a>

        <button
          className="theme-toggle"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? "☀ Light" : "🌙 Dark"}
        </button>
      </div>
    </nav>
  )
}