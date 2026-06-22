import { useNavigate } from 'react-router-dom'
import './Services.css'

const services = [
  {
    id: 'marketing',
    n: '01',
    title: 'Digital Marketing',
    desc: 'We get you seen — and turn that attention into real leads.',
    items: ['SEO & Content', 'Social Media', 'Email & CRM', 'Analytics'],
    wide: true,
    icon: <path d="M4 18V9m5 9V5m5 13v-7m5 7V8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />,
  },
  {
    id: 'web',
    n: '02',
    title: 'Web Development',
    desc: 'Fast, beautiful sites that turn visitors into customers.',
    items: ['Web Apps', 'E-commerce', 'CMS'],
    icon: <path d="M3 5h18v14H3zM3 9h18M7 7h.01M10 7h.01" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />,
  },
  {
    id: 'app',
    n: '03',
    title: 'App Development',
    desc: 'Mobile apps your users love and your business can scale.',
    items: ['iOS & Android', 'React Native'],
    icon: <path d="M8 3h8a1 1 0 011 1v16a1 1 0 01-1 1H8a1 1 0 01-1-1V4a1 1 0 011-1zM11 18h2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />,
  },
  {
    id: 'ads',
    n: '04',
    title: 'Advertisement',
    desc: 'Ad spend that comes back as revenue, not just clicks.',
    items: ['Meta & Google', 'Funnels'],
    icon: <path d="M3 11l16-7-4 16-3.5-6L3 11z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />,
  },
  {
    id: 'video',
    n: '05',
    title: 'Video Editing',
    desc: 'Scroll-stopping video that makes people stop and act.',
    items: ['Reels & Shorts', 'Motion'],
    icon: <path d="M4 6h16v12H4zM10 9l5 3-5 3V9z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />,
  },
  {
    id: 'product',
    n: '06',
    title: 'Product Engineering',
    desc: 'We build SaaS — ours and yours — from idea to launch.',
    items: ['SaaS Platforms', 'AI Features', 'Cloud & Scale'],
    wide: true,
    icon: <path d="M12 2l8 4.5v9L12 20l-8-4.5v-9L12 2zM12 11l8-4.5M12 11v9M12 11L4 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />,
  },
]

export default function Services() {
  const navigate = useNavigate()
  const goContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="services__head reveal">
          <span className="eyebrow">What we do</span>
          <h2 className="section-title">
            Everything digital. <span className="gold-text">One team.</span>
          </h2>
          <p className="section-lead">
            Whatever you need to grow — we cover it, end to end.
          </p>
        </div>

        <div className="services__grid">
          {services.map((s, i) => (
            <article
              key={s.id}
              className={`service reveal ${s.wide ? 'service--wide' : ''}`}
              style={{ transitionDelay: `${(i % 3) * 0.07}s` }}
            >
              <span className="service__index">{s.n}</span>
              <div className="service__top">
                <div className="service__icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">{s.icon}</svg>
                </div>
                <span className="service__arrow">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4 12L12 4M12 4H5M12 4V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>

              <div className="service__body">
                <h3 className="service__title">{s.title}</h3>
                <p className="service__desc">{s.desc}</p>
              </div>

              <div className="service__items">
                {s.items.map((it) => (
                  <span key={it} className="service__chip">{it}</span>
                ))}
              </div>
            </article>
          ))}

          {/* CTA card fills the grid cleanly */}
          <article className="service service--cta reveal" onClick={goContact} role="button" tabIndex={0}>
            <h3>Got something else in mind?</h3>
            <p>Tell us about your project — we&apos;ll figure out the rest.</p>
            <span className="service__cta-link">
              Start a conversation
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </article>
        </div>
      </div>
    </section>
  )
}
