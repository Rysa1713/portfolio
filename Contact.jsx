import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./contact.css"

const IconGitHub = (props) => (
  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" {...props}>
    <path
      fill="currentColor"
      d="M12 2C6.48 2 2 6.58 2 12.26c0 4.54 2.87 8.39 6.84 9.75.5.1.68-.22.68-.48
      0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.2-1.11-1.52-1.11-1.52-.9-.64.07-.63.07-.63
      1 .07 1.53 1.05 1.53 1.05.89 1.55 2.34 1.1 2.91.84.09-.66.35-1.1.63-1.35-2.22-.26-4.55-1.14-4.55-5.07
      0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05a9.2 9.2 0 0 1 2.5-.35
      c.85 0 1.7.12 2.5.35 1.9-1.32 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75
      0 3.94-2.34 4.8-4.57 5.06.36.32.68.95.68 1.92 0 1.39-.01 2.52-.01 2.86 0 .27.18.59.69.48
      A10.07 10.07 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"
    />
  </svg>
)

const IconLinkedIn = (props) => (
  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" {...props}>
    <path
      fill="currentColor"
      d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.67H9.35V9h3.41v1.56h.05
      c.47-.9 1.63-1.86 3.35-1.86 3.58 0 4.24 2.36 4.24 5.43v6.32ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12
      2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z"
    />
  </svg>
)

const IconMail = (props) => (
  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" {...props}>
    <path
      fill="currentColor"
      d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z"
    />
  </svg>
)

const IconWhatsApp = (props) => (
  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" {...props}>
    <path
      fill="currentColor"
      d="M12 2a9.6 9.6 0 0 0-9.6 9.6c0 1.7.45 3.3 1.3 4.7L2 22l5.9-1.6a9.57 9.57 0 0 0 4.1.9
      9.6 9.6 0 0 0 0-19.2Zm0 17.5c-1.3 0-2.6-.35-3.7-1l-.27-.16-3.48.94.93-3.39-.18-.28a7.8 7.8 0 0 1-1.2-4.1
      8 8 0 1 1 8 8Zm4.6-5.9c-.25-.13-1.47-.72-1.7-.8-.23-.08-.4-.13-.57.13-.17.25-.65.8-.8.97
      -.15.17-.3.19-.55.06-.25-.13-1.06-.39-2.02-1.25-.74-.66-1.25-1.48-1.4-1.73-.15-.25-.02-.38.11-.5
      .12-.12.25-.3.38-.45.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.57-1.38-.78-1.9
      -.2-.48-.4-.41-.57-.41h-.48c-.17 0-.45.06-.68.32-.23.25-.9.88-.9 2.15 0 1.27.93 2.5 1.06 2.67
      .13.17 1.83 2.78 4.44 3.9.62.27 1.11.43 1.49.55.62.2 1.18.17 1.62.1.5-.08 1.47-.6 1.68-1.18
      .21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.3Z"
    />
  </svg>
)

export default function Contact() {
  const nav = useNavigate()
  const [enter, setEnter] = useState(false)
  const [copied, setCopied] = useState(false)

  const email = "tahinumaraisa@gmail.com"
  const github = "https://github.com/Rysa1713"
  const linkedin = "https://www.linkedin.com/in/tahinuma-raisa-a32583389/"
  const whatsappNumber = "601139908681"
  const whatsappLink = `https://wa.me/${whatsappNumber}`

  useEffect(() => {
    const r = requestAnimationFrame(() => setEnter(true))
    return () => cancelAnimationFrame(r)
  }, [])

  const copy = async (text) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 900)
    } catch {
      const ta = document.createElement("textarea")
      ta.value = text
      document.body.appendChild(ta)
      ta.select()
      document.execCommand("copy")
      document.body.removeChild(ta)
      setCopied(true)
      setTimeout(() => setCopied(false), 900)
    }
  }

  return (
    <div className={`contactPage ${enter ? "isEnter" : ""}`}>
      <div className="contactBg" />
      <div className="contactGrain" />

      <div className="contactWrap">
        <header className="cHero reveal" style={{ "--d": "0ms" }}>
          <div className="backRow">
            <button
              className="backBtn"
              onClick={() => {
                nav("/")
                setTimeout(() => {
                  document.getElementById("bookshelf")?.scrollIntoView({ behavior: "smooth" })
                }, 0)
              }}
            >
              ← Back to Bookshelf
            </button>
          </div>

          <h1 className="cTitle">Contact me</h1>

          <div className="socialRow">
            <a className="socialBtn" href={github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <IconGitHub />
              <span>GitHub</span>
            </a>

            <a className="socialBtn" href={linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <IconLinkedIn />
              <span>LinkedIn</span>
            </a>

            <button className="socialBtn" type="button" onClick={() => copy(email)} aria-label="Copy email">
              <IconMail />
              <span>{copied ? "Copied" : "Email"}</span>
            </button>
          </div>
        </header>

        <section className="cards reveal" style={{ "--d": "120ms" }}>
          <a className="card" href={`mailto:${email}`}>
            <div className="cardIcon"><IconMail /></div>
            <div className="cardBody">
              <div className="cardTitle">Email</div>
              <div className="cardValue">{email}</div>
              <div className="cardHint">Open mail client ↗</div>
            </div>
          </a>

          <a className="card" href={whatsappLink} target="_blank" rel="noreferrer">
            <div className="cardIcon"><IconWhatsApp /></div>
            <div className="cardBody">
              <div className="cardTitle">WhatsApp</div>
              <div className="cardValue">+{whatsappNumber}</div>
              <div className="cardHint">Chat on WhatsApp ↗</div>
            </div>
          </a>

          <a className="card" href={github} target="_blank" rel="noreferrer">
            <div className="cardIcon"><IconGitHub /></div>
            <div className="cardBody">
              <div className="cardTitle">GitHub</div>
              <div className="cardValue">Rysa1713</div>
              <div className="cardHint">View repositories ↗</div>
            </div>
          </a>
        </section>

        <section className="mapWrap reveal" style={{ "--d": "220ms" }}>
          <div className="mapHeader">
            <div>
              <div className="mapTitle">Location</div>
              <div className="mapSub">Kuala Lumpur, Malaysia</div>
            </div>

            <a
              className="mapLink"
              href="https://www.google.com/maps?q=Kuala%20Lumpur%2C%20Malaysia"
              target="_blank"
              rel="noreferrer"
            >
              View on Maps <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="mapEmbed">
            <iframe
              title="Kuala Lumpur Map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=3.1390,101.6869&z=13&output=embed"
              allowFullScreen
            />
          </div>
        </section>
      </div>
    </div>
  )
}