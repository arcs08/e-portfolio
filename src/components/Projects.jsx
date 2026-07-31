import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { projects, filters } from '../data'
import Reveal from './Reveal'

export default function Projects() {
  const [active, setActive] = useState(filters[0].f)
  const shown = active === 'all' ? projects : projects.filter((p) => p.tag === active)

  return (
    <section id="projects">
      <div className="wrap">
        <Reveal className="sec-head">
          <div className="idx">03 / PROJECTS</div>
          <h2>Things I've built</h2>
          <p>Browse what I've built, grouped by area.</p>
        </Reveal>

        <Reveal className="filters" delay={0.05}>
          {filters.map((f) => (
            <button
              key={f.f}
              className={'filter' + (active === f.f ? ' active' : '')}
              onClick={() => setActive(f.f)}
            >
              {f.label}
            </button>
          ))}
        </Reveal>

        <motion.div className="bento" layout>
          <AnimatePresence mode="popLayout">
            {shown.map((p, i) => (
              <motion.article
                key={p.title}
                layout
                className="card"
                initial={{ opacity: 0, scale: 0.92, y: 24 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.4, ease: [0.2, 0.7, 0.2, 1] }}
              >
                <div className="card-top">
                  <span className="card-idx">/{String(i + 1).padStart(2, '0')}</span>
                  <span className="card-cat">{p.cat}</span>
                </div>
                <div className="card-body">
                  <h3>{p.title}</h3>
                  <div className="sub">{p.sub}</div>
                  <p>{p.desc}</p>
                  <div className="res">{p.res}</div>
                  <div className="tags">
                    {p.tags.map((t) => <span key={t}>{t}</span>)}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
