import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Overview from '@/components/Overview'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
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
      <Education />
      <Achievements />
      <Contact />
    </main>
  )
}
