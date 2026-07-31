import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { profile } from '../data'

// typewriter effect for the role line
function useTypewriter(words, speed = 70, pause = 1500) {
  const [text, setText] = useState('')
  useEffect(() => {
    let li = 0, ci = 0, del = false, t
    const tick = () => {
      const w = words[li]
      setText(w.slice(0, ci))
      if (!del) {
        ci++
        if (ci > w.length) { del = true; t = setTimeout(tick, pause); return }
        t = setTimeout(tick, speed)
      } else {
        ci--
        if (ci < 0) { del = false; ci = 0; li = (li + 1) % words.length; t = setTimeout(tick, 350); return }
        t = setTimeout(tick, speed / 2)
      }
    }
    tick()
    return () => clearTimeout(t)
  }, [])
  return text
}

const fade = (d) => ({
  initial: { opacity: 0, y: 26 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay: d, ease: [0.2, 0.7, 0.2, 1] },
})

export default function Hero() {
  const role = useTypewriter(profile.roles)

  // Scroll-linked animation: as you scroll through the hero, the photo
  // shrinks and glides toward the lower-left, then fades out (the docked
  // mini-avatar takes over from there).
  const { scrollY } = useScroll()
  const scale = useTransform(scrollY, [0, 520], [1, 0.26])
  const x = useTransform(scrollY, [0, 520], [0, 300])
  const y = useTransform(scrollY, [0, 520], [0, 150])
  const opacity = useTransform(scrollY, [0, 380, 520], [1, 0.5, 0])

  return (
    <section id="hero">
      <div className="wrap">
        <div className="hero-inner">
          <div className="hero-text">
            <motion.div className="kicker" {...fade(0.1)}>
              <span className="dot" /> {profile.kicker}
            </motion.div>
            <motion.h1 {...fade(0.25)}>
              Anand <span className="grad">Anto</span>
            </motion.h1>
            <motion.div className="hero-role" {...fade(0.4)}>
              <span className="cursor">{role}</span>
            </motion.div>
            <motion.div className="hero-stats" {...fade(0.6)}>
              {profile.stats.map((s) => (
                <div className="stat" key={s.l}><b>{s.n}</b><span>{s.l}</span></div>
              ))}
            </motion.div>
          </div>

          <motion.div className="avatar-stage"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.2, 0.7, 0.2, 1] }}
          >
            {/* scroll-linked wrapper: shrink + drift to lower-left */}
            <motion.div style={{ scale, x, y, opacity }}>
              <motion.div className="photo-ring"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="photo-glow" />
                <img src={profile.heroImg} alt="Anand Anto" />
              </motion.div>
              <motion.div className="badge b1"
                animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}>
                <b>{'{ }'}</b> Python · PySpark
              </motion.div>
              <motion.div className="badge b2"
                animate={{ y: [0, -10, 0] }} transition={{ duration: 5, delay: 0.6, repeat: Infinity, ease: 'easeInOut' }}>
                <b>ML</b> scikit-learn
              </motion.div>
              <motion.div className="badge b3"
                animate={{ y: [0, -10, 0] }} transition={{ duration: 5, delay: 1.1, repeat: Infinity, ease: 'easeInOut' }}>
                <b>MADS</b> UVic '27
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
