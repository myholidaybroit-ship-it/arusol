import './WhyUs.css'

const stats = [
  { value: '2', label: 'SaaS products shipped' },
  { value: '6+', label: 'Digital service lines' },
  { value: '100%', label: 'In-house team' },
  { value: '∞', label: 'Built to scale' },
]

const pillars = [
  {
    title: 'Performance first',
    desc: 'We optimize for revenue, not vanity metrics.',
    icon: <><circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" /><circle cx="12" cy="12" r="3.4" stroke="currentColor" strokeWidth="1.6" /></>,
  },
  {
    title: 'One accountable team',
    desc: 'Strategy, design and code — under one roof.',
    icon: <path d="M9 11a3 3 0 100-6 3 3 0 000 6zM3 20a6 6 0 0112 0M16 11a3 3 0 10-2-5.2M21 20a6 6 0 00-5-5.9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />,
  },
  {
    title: 'Product-grade craft',
    desc: 'Client work held to product standards.',
    icon: <path d="M12 3l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5L7.2 18l.9-5.4L4.2 8.7l5.4-.8L12 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />,
  },
  {
    title: 'Built to scale',
    desc: 'Systems that grow with your numbers.',
    icon: <path d="M5 19V9M10 19V5M15 19v-7M20 19v-11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />,
  },
]

export default function WhyUs() {
  return (
    <section className="section whyus" id="about">
      <div className="container">
        <div className="whyus__top">
          <div className="whyus__intro reveal">
            <span className="eyebrow">Why Arusol</span>
            <h2 className="section-title">
              Built for scale.
              <br />
              <span className="gold-text">Designed for impact.</span>
            </h2>
            <p className="section-lead">
              A digital studio that thinks like a product company.
            </p>
          </div>

          <div className="whyus__pillars">
            {pillars.map((p, i) => (
              <div key={p.title} className="whyus__pillar reveal" style={{ transitionDelay: `${i * 0.06}s` }}>
                <div className="whyus__pillar-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">{p.icon}</svg>
                </div>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="whyus__stats reveal">
          {stats.map((s) => (
            <div key={s.label} className="whyus__stat">
              <span className="whyus__stat-value">{s.value}</span>
              <span className="whyus__stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
