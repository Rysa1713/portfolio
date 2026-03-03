
import { useNavigate } from "react-router-dom"

export default function Resume() {
  const nav = useNavigate()

  return (
    <div style={{ color: "white", padding: 40 }}>
      <button
        onClick={() => nav("/#bookshelf")}
        style={{
          marginBottom: 20,
          background: "transparent",
          color: "white",
          border: "1px solid rgba(255,255,255,.3)",
          borderRadius: 999,
          padding: "8px 14px",
          cursor: "pointer",
        }}
      >
        ← Back to bookshelf
      </button>

      <h1>About</h1>
      <p>Your content here…</p>
    </div>
  )
}