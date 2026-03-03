import { useNavigate } from "react-router-dom"
import "../styles/about.css"

export default function About() {
  const nav = useNavigate()

  return (
    <main className="aboutPage template">
      <div className="aboutBg" aria-hidden="true" />

      <button
        onClick={() => nav("/#bookshelf")}
        className="aboutBack fadeUp"
        style={{ animationDelay: "0.05s" }}
      >
        ← Back to bookshelf
      </button>

      <section className="tWrap">
        <div className="tTop">
          <div className="tKicker fadeUp" style={{ animationDelay: "0.12s" }}>
            
          </div>

          <h1 className="tTitle fadeUp" style={{ animationDelay: "0.22s" }}>
          Hi, I’m <span className="tName">Tahinuma Raisa</span>.
          </h1>

          <h2 className="tSubtitle fadeUp" style={{ animationDelay: "0.32s" }}>
          Computer Science undergraduate<br />
          at Taylor’s University, Malaysia.
          </h2>

         <p className="tStatement fadeUp" style={{ animationDelay: "0.45s" }}>
         Committed to building systems that are precise, intentional, and thoughtfully designed.
         </p>

         <p className="tSub fadeUp" style={{ animationDelay: "0.6s" }}>
         Every detail has purpose. Every interaction should feel considered.
         </p>
        </div>

        <div className="tMeta">
          <div className="tMetaItem fadeUp" style={{ animationDelay: "0.55s" }}>
            <div className="tMetaLabel">FOCUS</div>
            <div className="tMetaValue">Artificial Intelligence, Machine Learning, and Frontend Web Development</div>
          </div>

          <div className="tMetaItem fadeUp" style={{ animationDelay: "0.7s" }}>
            <div className="tMetaLabel">LOCATION</div>
            <div className="tMetaValue">Kuala Lumpur, Malaysia</div>
          </div>

          <div className="tMetaItem fadeUp" style={{ animationDelay: "0.85s" }}>
            <div className="tMetaLabel">STATUS</div>
            <div className="tMetaValue">
              <span className="tDot" /> Open to internships
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}