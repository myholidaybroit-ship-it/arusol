import useReveal from '../hooks/useReveal'
import Hero from '../sections/Hero'
import Marquee from '../sections/Marquee'
import Services from '../sections/Services'
import Products from '../sections/Products'
import Process from '../sections/Process'
import WhyUs from '../sections/WhyUs'
import Contact from '../sections/Contact'

export default function Home() {
  useReveal()
  return (
    <>
      <Hero />
      <Marquee />
      <Services />
      <Products />
      <Process />
      <WhyUs />
      <Contact />
    </>
  )
}
