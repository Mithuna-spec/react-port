import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Certifications from './components/Certifications'
import Profiles from './components/Profiles'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Navbar />

      <Hero />

      <main>
        <About />
        <Education />
        <Skills />
        <Projects />
        <Achievements />
        <Certifications />
        <Profiles />
        <Contact />
      </main>
    </>
  )
}

export default App