import WarpField from '../components/WarpField'
import './Hero.css'

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="hero">
      <WarpField />
      <div className="hero__vignette" />
      <div className="hero__glow" />

      <div className="container hero__inner">
        <h1 className="hero__title reveal">
          We design, build &amp;<br className="hero__br" />
          {' '}grow your <span className="gold-text">brand.</span>
        </h1>

        <p className="hero__lead reveal">
          Marketing, software and products — built to help your business grow.
        </p>

        <div className="hero__actions reveal">
          <button className="btn btn-primary" onClick={() => scrollTo('contact')}>
            Start a project
            <svg className="btn-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button className="btn btn-ghost" onClick={() => scrollTo('services')}>
            Explore services
          </button>
        </div>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        <span>Scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  )
}
