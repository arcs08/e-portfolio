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
          <div>
            <h3>Let's build something with data</h3>
            <p>Open to Data &amp; Business Intelligence Analyst roles, co-op or full-time, along with data-science collaborations.</p>
          </div>
          <div className="cta-col">
            <a className="cta" href={`mailto:${profile.email}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
              Let's Chat
            </a>
            <div className="icon-row">
              <a className="iconbtn" href={profile.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18.34V9.99H5.67v8.35h2.67zM7 8.67a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1zm11.34 9.67v-4.57c0-2.45-1.31-3.59-3.06-3.59-1.41 0-2.04.78-2.39 1.32v-1.13h-2.67v8.35h2.67v-4.66c0-.25.02-.49.09-.67.2-.49.65-1 1.4-1 .99 0 1.39.75 1.39 1.85v4.48h2.67z" /></svg>
              </a>
              <a className="iconbtn" href={profile.github} target="_blank" rel="noopener noreferrer" title="GitHub" aria-label="GitHub">
                <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.85 9.73.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.79.62-3.38-1.38-3.38-1.38-.46-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.36-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05a9.36 9.36 0 0 1 5 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.25C22 6.58 17.52 2 12 2z" /></svg>
              </a>
            </div>
            <span className="contact-note">Email is the best way to reach me.</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
