import { useNavigate } from "react-router-dom"
import "../styles/bookshelf.css"

const BOOKS = [
  {
    label: "ABOUT",
    to: "/about",
    style: { "--h": "375px", "--c": "#a39193", "--edge": "#B7791D", "--panel": "#e6d3d5", "--stripe": "#e6d3d5" },
    stripes: true,
  },
  {
    label: "PROJECTS",
    to: "/projects",
    style: { "--h": "420px", "--c": "#8d988d", "--edge": "#CFC2B6", "--panel": "#F4EEE7", "--stripe": "#CFC2B6" },
    stripes: false,
  },
  {
    label: "SKILLS",
    to: "/skills",
    style: { "--h": "315px", "--c": "#4B4B62", "--edge": "#353548", "--panel": "#a7a7d9", "--stripe": "#a7a7d9" },
    stripes: true,
  },
  {
    label: "CERTIFICATES",
    to: "/certificates",
    style: { "--h": "390px", "--c": "#9aa0a3", "--edge": "#7E795A", "--panel": "#c5cdd1", "--stripe": "#c5cdd1" },
    stripes: true,
  },
  {
    label: "CONTACT",
    to: "/contact",
    style: { "--h": "335px", "--c": "#C96A4D", "--edge": "#9E4C35", "--panel": "#F2C7BA", "--stripe": "#F2C7BA" },
    stripes: false,
  },
  {
    label: "RESUME",
    to: "/resume",
    style: { "--h": "270px", "--c": "#bbbf88", "--edge": "#7F8444", "--panel": "#d6d9b6", "--stripe": "#C9CF95" },
    stripes: false,
  },
]

export default function Bookshelf() {
  const nav = useNavigate()

  return (
    <div className="shelfWrap">
      <header className="shelfHeader">
        <h1>My portfolio — pick a “book”.</h1>
        <div className="kicker">PORTFOLIO BOOKSHELF</div>
        <div className="sub">Click a book to open a section.</div>
      </header>

      <div className="shelfStage">
        <div className="books">
          {BOOKS.map((b) => (
            <button
              key={b.label}
              className="book"
              style={b.style}
              onClick={() => nav(b.to)}
              type="button"
              aria-label={`${b.label}: ${b.sub}`}
            >
              
              <span className="book__window" aria-hidden="true" />

              
              {b.stripes ? <span className="book__stripes" aria-hidden="true" /> : null}

             
              <span className="book__label">{b.label}</span>
              <span className="book__sub">{b.sub}</span>
            </button>
          ))}
        </div>

        
        <div className="shelfBase" aria-hidden="true" />
      </div>
    </div>
  )
}