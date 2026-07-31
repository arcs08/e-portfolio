import { useEffect, useState } from 'react'
import { profile } from '../data'

const links = [
  ['about', 'About'],
  ['skills', 'Skills'],
  ['projects', 'Projects'],
  ['experience', 'Experience'],
  ['education', 'Education'],
]

export default function Navbar() {
  const [active, setActive] = useState('')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const ids = [...links.map((l) => l[0]), 'contact']
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const pos = window.scrollY + 140
      let cur = ''
      ids.forEach((id) => {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= pos) cur = id
      })
      setActive(cur)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (id) => (e) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav style={{ borderColor: scrolled ? 'var(--border-str)' : 'var(--border)' }}>
      <div className="navbar">
        <a className="brand" href="#hero" onClick={go('hero')}>
          <img src="anand-avatar.jpg" alt="Anand Anto" />
          <span><b>anand</b>.anto()</span>
        </a>
        <div className="navlinks">
          {links.map(([id, label]) => (
            <a key={id} className={active === id ? 'active' : ''} onClick={go(id)}>
              {label}
            </a>
          ))}
          <a className="nav-cta" onClick={go('contact')}>Contact</a>
        </div>
      </div>
    </nav>
  )
}
