import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { HelpDirectory } from './components/HelpDirectory'
import { About } from './components/About'
import { Process } from './components/Process'
import { Testimonial } from './components/Testimonial'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { useScrollReveal } from './lib/useScrollReveal'

function App() {
  useScrollReveal()

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <HelpDirectory />
        <Process />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
