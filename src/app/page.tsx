import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Overview from '@/components/Overview'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Achievements from '@/components/Achievements'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Overview />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Achievements />
      <Contact />
    </main>
  )
}
