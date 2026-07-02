import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { TrustBar } from './components/TrustBar'
import { Services } from './components/Services'
import { About } from './components/About'
import { Process } from './components/Process'
import { Testimonial } from './components/Testimonial'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { useReveal } from './lib/useReveal'

function App() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <div ref={ref}>
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <About />
        <Process />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
