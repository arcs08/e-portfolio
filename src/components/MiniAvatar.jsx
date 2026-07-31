import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { profile } from '../data'

// Docks a small spinning avatar to the bottom-left once you scroll past the hero.
export default function MiniAvatar() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById('hero')
      const h = hero ? hero.offsetHeight : 600
      setShow(window.scrollY > h * 0.7)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          id="mini"
          title="Back to top"
          onClick={toTop}
          style={{ cursor: 'pointer' }}
          initial={{ opacity: 0, y: 30, scale: 0.7 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.7 }}
          transition={{ duration: 0.4, ease: [0.2, 0.9, 0.3, 1.2] }}
        >
          <div className="ring" />
          <img src={profile.avatarImg} alt="Anand" />
          <span className="bubble">back to top ↑</span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
