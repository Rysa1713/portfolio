import { useEffect, useMemo, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./certificates.css"

export default function Certificates() {
  const nav = useNavigate()
  const [enter, setEnter] = useState(false)
  const [open, setOpen] = useState(null)
  const [folderOpen, setFolderOpen] = useState(false)

  const certs = useMemo(
    () => [
      {
        id: "dl-1",
        title: "Dean’s List Letter",
        meta: "Trimester 1 • 2025",
        org: "Your University Name",
        file: "/certificates/deans-list-1.pdf",
        type: "pdf",
      },
      {
        id: "dl-2",
        title: "Dean’s List Letter",
        meta: "Trimester 2 • 2025",
        org: "Your University Name",
        file: "/certificates/deans-list-2.pdf",
        type: "pdf",
      },
      {
        id: "dl-3",
        title: "Dean’s List Letter",
        meta: "Trimester 3 • 2025",
        org: "Your University Name",
        file: "/certificates/deans-list-3.pdf",
        type: "pdf",
      },
    ],
    []
  )

  useEffect(() => {
    const r = requestAnimationFrame(() => setEnter(true))
    return () => cancelAnimationFrame(r)
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(null)
        setFolderOpen(false)
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  const toggleFolder = (e) => {
    
    if (e.target.closest(".gPage")) return
    setFolderOpen((v) => !v)
  }

  const openCert = (idx) => {
    const picked = certs[idx]
    if (picked) setOpen(picked)
  }

  return (
    <div className={`certPage ${enter ? "isEnter" : ""}`}>
      {/* background */}
      <div className="starsLayer stars1" />
      <div className="spotlight" />
      <div className="vignette" />

      <div className="certTop reveal">
        <button onClick={() => nav("/#bookshelf")} className="backBtn">
          ← Back to bookshelf
        </button>
        <div className="kicker">
          <span className="kickerMark">✶</span> CERTIFICATES
        </div>
      </div>

      <header className="certHeader reveal" style={{ "--d": "120ms" }}>
        <h1 className="certH1">Academic Letters</h1>
        <p className="certSub">
          Click the folder to open, then pick a page to preview.
        </p>
      </header>

      <main className="layout reveal" style={{ "--d": "240ms" }}>
       
        <section className="glassStage" aria-label="Folder stage">
          <div className="stageFrame">
            <div
              className={`scene ${folderOpen ? "is-open" : ""}`}
              onClick={toggleFolder}
              role="button"
              tabIndex={0}
              aria-label="Open folder"
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setFolderOpen((v) => !v)
              }}
            >
              <div className="folder2d">
                <div className="backCover" />

                
                <button
                  className="gPage page1"
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    openCert(0)
                  }}
                >
                  <div className="pTitle">Dean’s List</div>
                  <div className="pMeta">Trimester 1 • 2025</div>
                </button>

                <button
                  className="gPage page2"
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    openCert(1)
                  }}
                >
                  <div className="pTitle">Dean’s List</div>
                  <div className="pMeta">Trimester 2 • 2025</div>
                </button>

                <button
                  className="gPage page3"
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    openCert(2)
                  }}
                >
                  <div className="pTitle">Dean’s List</div>
                  <div className="pMeta">Trimester 3 • 2025</div>
                </button>

                
                <div className="frontCover" aria-hidden="true">
                  <div className="folderBrand">
                    <span className="brandDot" />
                    <span className="brandText">Dean’s List</span>
                  </div>
                  <div className="brandSub">3 Documents • PDF</div>
                  <div className="coverArrow">⌄</div>
                </div>
              </div>
            </div>

            <div className="stageHint">
              {folderOpen ? "Select a page" : "Click folder to open"}
            </div>
          </div>
        </section>

        {/* Side panel */}
        <aside className="sideInfo">
          <div className="infoCard">
            <div className="infoTitle">What’s inside</div>
            <div className="infoText">
              Official Dean’s List letters awarded for academic excellence across multiple terms.
            </div>

            <div className="infoChips">
              <span className="chip">Academic</span>
              <span className="chip">PDF</span>
              <span className="chip">3 items</span>
            </div>
          </div>
        </aside>
      </main>

      {/* Modal */}
      {open && (
        <div className="modalOverlay" onClick={() => setOpen(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modalTop">
              <div>
                <div className="modalTitle">{open.title}</div>
                <div className="modalMeta">{open.meta}</div>
              </div>
              <button className="modalClose" onClick={() => setOpen(null)}>
                ✕
              </button>
            </div>

            <div className="modalBody">
              
              <iframe
                key={open.file}
                className="pdfFrame"
                src={`${open.file}#view=FitH`}
                title={open.title}
              />
            </div>

            <div className="modalActions">
              <a className="btnGhost" href={open.file} target="_blank" rel="noreferrer">
                View
              </a>
              <a className="btnSolid" href={open.file} download>
                Download
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}