import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJava,
  FaPython,
  FaGithub,
  FaFigma,
} from "react-icons/fa"
import {
  SiJavascript,
  SiMysql,
  SiGooglecolab,
  SiCanva,
  SiAndroidstudio,
  SiThreedotjs,
} from "react-icons/si"

import "./skills.css"

export default function Skills() {
  const nav = useNavigate()
  const [enter, setEnter] = useState(false)

  useEffect(() => {
   
    const r1 = requestAnimationFrame(() => {
      const r2 = requestAnimationFrame(() => setEnter(true))
      return () => cancelAnimationFrame(r2)
    })
    return () => cancelAnimationFrame(r1)
  }, [])

  return (
    <div className={`skillsPage ${enter ? "isEnter" : ""}`}>
      {/* background layers */}
      <div className="starsLayer stars1" />
      <div className="starsLayer stars2" />
      <div className="spotlight" />
      <div className="vignette" />

      <div className="skillsTop reveal" style={{ "--d": "0ms" }}>
        <button onClick={() => nav("/#bookshelf")} className="backBtn">
          ← Back to bookshelf
        </button>

        <div className="stackKicker">
          <span className="stackMark">✶</span> My Skills
        </div>
      </div>

      <div className="skillsRows">
        <Row title="FRONTEND" delay="120ms">
          <Item icon={<FaHtml5 color="#E34F26" />} label="HTML" />
          <Item icon={<FaCss3Alt color="#1572B6" />} label="CSS" />
          <Item icon={<SiJavascript color="#F7DF1E" />} label="JavaScript" />
          <Item icon={<FaReact color="#61DAFB" />} label="React" />
         
        </Row>

        <Row title="BACKEND" delay="220ms">
          <Item icon={<FaJava color="#F89820" />} label="Java" />
          <Item icon={<FaPython color="#3776AB" />} label="Python" />
          <Item icon={<SiMysql color="#4479A1" />} label="MySQL" />
        </Row>

        <Row title="AI / ML" delay="320ms">
          <Item label="NumPy" />
          <Item label="Pandas" />
          <Item label="scikit-learn" />
          <Item label="Data Preprocessing" />
          <Item label="Feature Engineering" />
          <Item label="Model Training" />
          <Item label="Model Evaluation" />
        </Row>

        <Row title="TOOLS" delay="420ms">
          <Item icon={<FaGithub color="#FFFFFF" />} label="GitHub" />
          <Item icon={<SiGooglecolab color="#F9AB00" />} label="Google Colab" />
          <Item icon={<FaFigma color="#F24E1E" />} label="Figma" />
          <Item icon={<SiCanva color="#00C4CC" />} label="Canva" />
          <Item icon={<SiAndroidstudio color="#3DDC84" />} label="Android Studio" />
        </Row>
      </div>
    </div>
  )
}

function Row({ title, children, delay = "0ms" }) {
  return (
    <section className="skillsRow reveal" style={{ "--d": delay }}>
      <h2 className="skillsTitle">{title}</h2>
      <div className="itemsGrid">{children}</div>
    </section>
  )
}

function Item({ icon, label }) {
  return (
    <div className="skillItem">
      {icon && <span className="skillItemIcon">{icon}</span>}
      <span className="skillItemLabel">{label}</span>
    </div>
  )
}