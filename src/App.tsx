import { MotionConfig } from 'framer-motion'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { TrustBar } from './components/TrustBar'
import { Services } from './components/Services'
import { HelpDirectory } from './components/HelpDirectory'
import { About } from './components/About'
import { Process } from './components/Process'
import { Testimonial } from './components/Testimonial'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <HelpDirectory />
        <About />
        <Process />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  )
}

export default App
