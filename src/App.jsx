import Scene3D from './components/Scene3D'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import MiniAvatar from './components/MiniAvatar'
import { About, Skills, Experience, Education, Certs, Contact } from './components/Sections'
import { profile } from './data'

export default function App() {
  return (
    <>
      <Scene3D />
      <div className="bg-grid" />
      <div className="bg-glow" />

      <Navbar />
      <MiniAvatar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certs />
        <Contact />
      </main>

      <footer>
        <div>Built with React, Vite, and Three.js · deployed on GitHub Pages</div>
        <div style={{ marginTop: 6 }}>
          <span className="green">anand@ds:~$</span> ./portfolio --live · ©{' '}
          <a href={profile.github} target="_blank" rel="noopener noreferrer">@arcs08</a>
        </div>
      </footer>
    </>
  )
}
