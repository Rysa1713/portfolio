import "./projects.css"
import { useState, useMemo, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import nommoroImg from "../assets/images/nommoro.png"
import savebiteImg from "../assets/images/savebite.png"
import fitnessImg from "../assets/images/fitness.png"
import habitImg from "../assets/images/habit.png"

const projects = [
  {
    id: "nommoro",
    title: "Nommoro",
    headline: "Structured Multi-Page Web Platform",
    description:
      "A responsive multi-page web application built using HTML, CSS, and JavaScript. Contributed to UI design and developed a user dashboard while collaborating in a team-based development environment.",
    image: nommoroImg,
    github: "https://rysa1713.github.io/Nommoro-Web-development-group-",
  },
  {
    id: "savebite",
    title: "SaveBite",
    headline: "Android Food Waste Reduction App",
    description:
      "An Android application built with Java and SQLite to help users manage groceries and track expiry dates. Developed the Dashboard and Pantry modules, integrating UI components with structured item tracking.",
    image: savebiteImg,
    github: "https://github.com/Rysa1713/SaveBite",
  },
  {
    id: "fitness",
    title: "Fitness Management System",
    headline: "Java Swing Desktop Application",
    description:
      "A desktop-based fitness management system built using Java Swing. Implemented event-driven GUI components and applied object-oriented programming principles to structure system workflows.",
    image: fitnessImg,
    github: "https://github.com/Rysa1713/Fitness-Tracking-App",
  },
  {
    id: "habit",
    title: "Habit Tracker",
    headline: "Interactive Web Habit Tracker",
    description:
      "A browser-based habit tracking application developed with HTML, CSS, and JavaScript. Implemented dynamic task management and responsive UI design for structured daily tracking.",
    image: habitImg,
    github: "https://rysa1713.github.io/HabitsTracker/",
  },
]

export default function Projects() {
  const nav = useNavigate()
  const [activeId, setActiveId] = useState(projects[0].id)

  const index = useMemo(
    () => projects.findIndex((p) => p.id === activeId),
    [activeId]
  )

  const active = projects[index]

  const prev = () => {
    const newIndex = index === 0 ? projects.length - 1 : index - 1
    setActiveId(projects[newIndex].id)
  }

  const next = () => {
    const newIndex = index === projects.length - 1 ? 0 : index + 1
    setActiveId(projects[newIndex].id)
  }

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev()
      if (e.key === "ArrowRight") next()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [activeId])

  return (
    <div className="cinema-page">
      <button
        className="back-btn"
        onClick={() => {
          nav("/")
          setTimeout(() => {
            document.getElementById("bookshelf")?.scrollIntoView({ behavior: "smooth" })
          }, 0)
        }}
      >
        ← Back to bookshelf
      </button>

      <div className="side-left">
        <button className="side-arrow" onClick={prev}>←</button>
        <div className="side-title">
          {projects[(index - 1 + projects.length) % projects.length].title}
        </div>
      </div>

      <div className="side-right">
        <button className="side-arrow" onClick={next}>→</button>
        <div className="side-title">
          {projects[(index + 1) % projects.length].title}
        </div>
      </div>

      <div className="image-wrap">
        <div className="spotlight" />
        <img
          src={active.image}
          alt={active.title}
          className="project-image"
          onClick={() => window.open(active.github.trim(), "_blank")}
          style={{ cursor: "pointer" }}
        />

        <div className="image-title">
          {active.title}
          <div className="image-subtext">
            Click the image to view on GitHub ↗
          </div>
        </div>
      </div>

      <div className="text-wrap">
        <h1>{active.headline}</h1>
        <p>{active.description}</p>
      </div>
    </div>
  )
}