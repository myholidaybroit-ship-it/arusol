import './Process.css'

const steps = [
  {
    n: '01', title: 'Understand',
    desc: 'We learn your goals and market.',
    icon: <><circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.6" /><path d="M21 21l-4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></>,
  },
  {
    n: '02', title: 'Design',
    desc: 'Premium design that converts.',
    icon: <path d="M4 20l3-1 11-11a2 2 0 00-3-3L4 16l-1 4zM14 6l3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />,
  },
  {
    n: '03', title: 'Build',
    desc: 'Clean, scalable engineering.',
    icon: <path d="M8 6l-5 6 5 6M16 6l5 6-5 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />,
  },
  {
    n: '04', title: 'Launch',
    desc: 'Tested, optimized and live.',
    icon: <path d="M5 14l5 5c5-2 8-6 9-12-6 1-10 4-12 9l-2-2zM7 17l-3 3M10 16l2 2-3 1 1-3z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />,
  },
  {
    n: '05', title: 'Scale',
    desc: 'We grow as you grow.',
    icon: <path d="M4 18l5-5 4 3 7-8M16 8h4v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />,
  },
]

export default function Process() {
  return (
    <section className="section process">
      <div className="container">
        <div className="process__head reveal">
          <span className="eyebrow">How we work</span>
          <h2 className="section-title">A process built to ship.</h2>
          <p className="section-lead">
            Five clear steps. Less risk, faster impact.
          </p>
        </div>

        <div className="timeline">
          <span className="timeline__line" aria-hidden="true" />
          {steps.map((s, i) => (
            <div key={s.n} className="tstep reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
              <div className="tstep__node">
                <div className="tstep__badge">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">{s.icon}</svg>
                </div>
                <span className="tstep__num">{s.n}</span>
              </div>
              <h3 className="tstep__title">{s.title}</h3>
              <p className="tstep__desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
