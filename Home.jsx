import { useEffect } from "react"
import LanyardScene from "../components/LanyardScene"
import Bookshelf from "../components/BookShelf"
import "../styles/home.css"

export default function Home() {
  useEffect(() => {
    const hash = window.location.hash
    if (!hash) return

    const id = hash.slice(1) // "bookshelf"
    if (!id) return

    let tries = 0
    const maxTries = 20

    const tick = () => {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: "smooth" })
        
        window.history.replaceState(null, "", window.location.href.replace(hash, ""))
        return
      }

      tries += 1
      if (tries < maxTries) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [])

  return (
    <main className="home">
      <section className="snap lanyardSection">
        <LanyardScene />
        <div className="scrollHint">Scroll ↓</div>
      </section>

      <section id="bookshelf" className="snap bookshelfSection">
        <Bookshelf />
      </section>
    </main>
  )
}
