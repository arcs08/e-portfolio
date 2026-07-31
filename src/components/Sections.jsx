import Reveal from './Reveal'
import { about, infoCard, skills, experience, education, certs, profile } from '../data'

// render **bold** markers inside plain text
function RichText({ text }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith('**') && p.endsWith('**')
          ? <b key={i}>{p.slice(2, -2)}</b>
          : <span key={i}>{p}</span>
      )}
    </>
  )
}

export function About() {
  return (
    <section id="about">
      <div className="wrap">
        <Reveal className="sec-head">
          <div className="idx">01 / ABOUT</div>
          <h2>Who I am</h2>
        </Reveal>
        <div className="about-grid">
          <Reveal>
            {about.map((p, i) => <p key={i}><RichText text={p} /></p>)}
          </Reveal>
          <Reveal className="info-card" delay={0.1}>
            {infoCard.map(([k, v]) => (
              <div className="r" key={k}><span className="k">{k}</span><span className="v">{v}</span></div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <Reveal className="sec-head">
          <div className="idx">02 / SKILLS</div>
          <h2>Technical toolkit</h2>
        </Reveal>
        <div className="skill-cats">
          {skills.map((c, i) => (
            <Reveal className="skill-cat" key={c.h} delay={(i % 3) * 0.06}>
              <h4>▹ {c.h}</h4>
              <div className="chips">
                {c.items.map((s) => <span className="chip" key={s}>{s}</span>)}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <Reveal className="sec-head">
          <div className="idx">04 / EXPERIENCE</div>
          <h2>Where I've worked</h2>
        </Reveal>
        <div className="timeline">
          {experience.map((e, i) => (
            <Reveal className="tl-item" key={e.h} delay={i * 0.08}>
              <h4>{e.h}</h4>
              <div className="org">{e.org}</div>
              <div className="when">{e.when}</div>
              <p>{e.p}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Education() {
  return (
    <section id="education">
      <div className="wrap">
        <Reveal className="sec-head">
          <div className="idx">05 / EDUCATION</div>
          <h2>Academic background</h2>
        </Reveal>
        <div className="edu-grid">
          {education.map((e, i) => (
            <Reveal className="edu" key={e.h} delay={i * 0.08}>
              <h4>{e.h}</h4>
              <div className="org">{e.org}</div>
              <div className="when">{e.when}</div>
              <div className="courses">
                {e.courses.map((c) => <span key={c}>{c}</span>)}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Certs() {
  return (
    <section id="certs">
      <div className="wrap">
        <Reveal className="sec-head">
          <div className="idx">06 / ACHIEVEMENTS</div>
          <h2>Certifications & highlights</h2>
        </Reveal>
        <div className="cert-grid">
          {certs.map((c, i) => (
            <Reveal className="cert" key={c.t} delay={(i % 4) * 0.05}>
              <span className="ic">{c.ic}</span> {c.t}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section id="contact">
      <div className="wrap">
        <Reveal className="contact-box">
          <h3>Let's build something with data</h3>
          <p>Open to Data &amp; Business Intelligence Analyst roles, co-op or full-time, along with data-science collaborations. The fastest way to reach me is email or LinkedIn.</p>
          <div className="contact-links">
            <a className="btn primary" href={`mailto:${profile.email}`}>✉ Email</a>
            <a className="btn" href={profile.linkedin} target="_blank" rel="noopener noreferrer">in LinkedIn</a>
            <a className="btn" href={profile.github} target="_blank" rel="noopener noreferrer">⌥ GitHub</a>
            <a className="btn" href={`tel:${profile.phone}`}>☎ Phone</a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
