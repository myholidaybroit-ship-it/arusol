import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal'
import './product-page.css'

const ACCENT = '#5b8def'

const I = {
  shuffle: <path d="M4 7h4l8 10h4M4 17h4l3-3.5M16 7h4M17 4l3 3-3 3M17 14l3 3-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />,
  clock: <><circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" /><path d="M12 7.5V12l3 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></>,
  eyeoff: <path d="M3 3l18 18M10.6 10.7a2 2 0 002.7 2.8M6.5 6.6C4.6 7.8 3 10 2 12c2 4 6 7 10 7 1.8 0 3.5-.5 5-1.3M9.5 5.2A9 9 0 0112 5c4 0 8 3 10 7a16 16 0 01-2.3 3.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />,
  inbox: <path d="M3 7h18v10H3zM3 12h5l2 3h4l2-3h5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />,
  calendar: <path d="M4 6h16v15H4zM4 10h16M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />,
  doc: <path d="M6 3h8l4 4v14H6zM14 3v4h4M9 13h6M9 17h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />,
  kanban: <path d="M4 5h4v14H4zM10 5h4v9h-4zM16 5h4v6h-4z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />,
  users: <path d="M9 11a3 3 0 100-6 3 3 0 000 6zM3 20a6 6 0 0112 0M16 11a3 3 0 10-2-5.2M21 20a6 6 0 00-5-5.9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />,
  card: <path d="M3 6h18v12H3zM3 10h18" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />,
  box: <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3zM12 12l8-4.5M12 12v9M12 12L4 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />,
  chart: <path d="M5 19V9M10 19V5M15 19v-7M20 19v-11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />,
}

const problems = [
  { icon: I.shuffle, title: 'Leads scattered everywhere', desc: 'Calls, WhatsApp, email, walk-ins — enquiries fall through the cracks.' },
  { icon: I.clock, title: 'Itineraries take forever', desc: 'Building and revising plans in docs eats hours on every trip.' },
  { icon: I.eyeoff, title: 'No pipeline visibility', desc: 'You can’t see what’s closing or where revenue is stuck.' },
]

const features = [
  [I.inbox, 'Lead Management', 'Every enquiry in one place — never lose a traveler.'],
  [I.calendar, 'Itinerary Builder', 'Rich day-by-day plans in minutes, with templates.'],
  [I.doc, 'Quotes & Bookings', 'Branded quotes that convert into confirmed trips.'],
  [I.kanban, 'Sales Pipeline', 'Track every trip from enquiry to payment.'],
  [I.users, 'Agent Collaboration', 'Assign leads and work as a team across the agency.'],
  [I.card, 'Payments & Invoicing', 'Collect deposits and balances, automatically.'],
  [I.box, 'Suppliers & Rates', 'Hotels, transfers and packages, ready to quote.'],
  [I.chart, 'Reports & Insights', 'Conversion, revenue and agent performance at a glance.'],
]

const steps = [
  { n: '01', title: 'Bring in your leads', desc: 'Connect your channels into one organized inbox.' },
  { n: '02', title: 'Build & send itineraries', desc: 'Craft day-wise plans and quotes, share them instantly.' },
  { n: '03', title: 'Close & manage trips', desc: 'Track bookings, collect payments, manage the journey.' },
]

const metrics = [
  ['1,200+', 'Itineraries built'],
  ['38%', 'Avg. lead conversion'],
  ['5 hrs', 'Saved per trip'],
  ['4.8★', 'Agent rating'],
]

export default function Wandra() {
  useReveal()
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <div className="pp" style={{ '--accent': ACCENT }}>
      {/* HERO */}
      <section className="pp-hero">
        <div className="pp-hero__glow" />
        <div className="container pp-hero__inner">
          <div className="pp-hero__copy">
            <span className="pp-badge reveal">Travel CRM · SaaS</span>
            <h1 className="reveal">The CRM for <span style={{ color: ACCENT }}>travel agencies.</span></h1>
            <p className="pp-hero__lead reveal">
              Run your whole agency from one place — leads, itineraries and
              bookings, all in sync.
            </p>
            <div className="pp-hero__actions reveal">
              <button className="btn btn-accent" onClick={() => scrollTo('waitlist')}>Request a demo</button>
              <Link to="/" className="btn btn-ghost">Back to Arusol</Link>
            </div>
          </div>

          <div className="pp-hero__viz reveal">
            <div className="ppdash">
              <div className="ppdash__bar"><span /><span /><span /></div>
              <div className="ppdash__stats">
                <div><small>Active trips</small><b>24</b></div>
                <div><small>Pipeline</small><b>₹18.2L</b></div>
                <div><small>Conversion</small><b>38%</b></div>
              </div>
              <div className="ppdash__body">
                <div className="ppdash__leads">
                  <span className="ppdash__lead">New · Bali</span>
                  <span className="ppdash__lead">Honeymoon · Maldives</span>
                  <span className="ppdash__lead is-active">Family · Switzerland</span>
                  <span className="ppdash__lead">Group · Dubai</span>
                </div>
                <div className="ppdash__card">
                  <div className="ppdash__cardhead"><span>Itinerary</span><b>7 days</b></div>
                  <div className="ppdash__chart">
                    {[42, 66, 50, 82, 60, 92].map((h, i) => <span key={i} style={{ height: `${h}%` }} />)}
                  </div>
                  <div className="ppdash__line" style={{ width: '88%' }} />
                  <div className="ppdash__line" style={{ width: '54%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMS */}
      <section className="pp-section">
        <div className="container">
          <div className="pp-head reveal">
            <span className="pp-eyebrow">The problem</span>
            <h2 className="section-title">Spreadsheets don’t scale.</h2>
            <p className="section-lead">Wandra brings your whole operation into one system.</p>
          </div>
          <div className="pp-problems">
            {problems.map((p, i) => (
              <div key={p.title} className="pp-card pp-problem reveal" style={{ transitionDelay: `${i * 0.07}s` }}>
                <span className="pp-ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none">{p.icon}</svg></span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="pp-section pp-section--alt">
        <div className="container">
          <div className="pp-head pp-head--center reveal">
            <span className="pp-eyebrow">Features</span>
            <h2 className="section-title">Everything a travel agency runs on.</h2>
          </div>
          <div className="pp-features">
            {features.map(([icon, title, desc], i) => (
              <div key={title} className="pp-card pp-feature reveal" style={{ transitionDelay: `${(i % 4) * 0.05}s` }}>
                <span className="pp-ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none">{icon}</svg></span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section className="pp-section">
        <div className="container">
          <div className="pp-metrics reveal">
            {metrics.map(([v, l]) => (
              <div key={l} className="pp-metric"><b>{v}</b><span>{l}</span></div>
            ))}
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="pp-section pp-section--alt">
        <div className="container">
          <div className="pp-head reveal">
            <span className="pp-eyebrow">How it works</span>
            <h2 className="section-title">From enquiry to confirmed trip.</h2>
          </div>
          <div className="pp-steps">
            {steps.map((s, i) => (
              <div key={s.n} className="pp-card pp-step reveal" style={{ transitionDelay: `${i * 0.07}s` }}>
                <span className="pp-step__num">{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pp-section" id="waitlist">
        <div className="container">
          <div className="pp-cta reveal">
            <h2>Run your travel business, better.</h2>
            <p>Book a demo and see how Wandra helps you close more trips.</p>
            <form onSubmit={(e) => e.preventDefault()} className="pp-cta__form">
              <input type="email" placeholder="you@agency.com" required />
              <button className="btn btn-accent" type="submit">Request a demo</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
