import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Clients from '@/components/Clients'
import Tools from '@/components/Tools'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Experience />
        <Projects />
        <Clients />
        <Tools />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
