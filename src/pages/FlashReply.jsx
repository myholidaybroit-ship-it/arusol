import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal'
import './product-page.css'

const ACCENT = '#25d366'

const I = {
  inbox: <path d="M3 7h18v10H3zM3 12h5l2 3h4l2-3h5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />,
  clock: <><circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" /><path d="M12 7.5V12l3 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></>,
  ban: <><circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" /><path d="M6 6l12 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></>,
  bot: <><path d="M4 5h16v11H8l-4 4V5z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /><path d="M8.5 10h7M8.5 13h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></>,
  bolt: <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />,
  target: <><circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" /><circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.6" /></>,
  horn: <path d="M4 10v4l11 5V5L4 10zM15 8a4 4 0 010 8" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />,
  kanban: <path d="M4 5h4v14H4zM10 5h4v9h-4zM16 5h4v6h-4z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />,
  sparkle: <path d="M12 3l2.2 5.8L20 11l-5.8 2.2L12 19l-2.2-5.8L4 11l5.8-2.2L12 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />,
  card: <path d="M3 6h18v12H3zM3 10h18" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />,
  chart: <path d="M5 19V9M10 19V5M15 19v-7M20 19v-11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />,
  shield: <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3zM9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />,
}

const problems = [
  { icon: I.inbox, title: 'One inbox, many customers', desc: 'Chats pile up on a single phone — leads slip and replies get missed.' },
  { icon: I.clock, title: 'Slow to reply', desc: 'Manual answers cool down warm leads before anyone responds.' },
  { icon: I.ban, title: 'Numbers get banned', desc: 'Broadcasting from a personal number gets you blocked. We keep you compliant.' },
]

const features = [
  [I.inbox, 'Team Inbox', 'One shared inbox your whole team runs together.'],
  [I.bot, 'WhatsApp Chatbot', 'Automate FAQs, qualification and routing 24/7.'],
  [I.bolt, 'Workflow Automation', 'Trigger follow-ups, tags and tasks on autopilot.'],
  [I.target, 'Click-to-WhatsApp Ads', 'Turn ad clicks into live chats instantly.'],
  [I.horn, 'Broadcast Campaigns', 'Reach thousands at once — safely and compliantly.'],
  [I.kanban, 'Sales Pipeline', 'Kanban boards that move leads to revenue.'],
  [I.sparkle, 'FlashBot AI', 'Qualifies leads and drafts replies for you.'],
  [I.card, 'Payments in Chat', 'Send links and close without leaving WhatsApp.'],
  [I.chart, 'Analytics & ROI', 'See which ads and reps actually drive revenue.'],
  [I.shield, 'Green Tick Verification', 'Get verified and build instant trust.'],
]

const steps = [
  { n: '01', title: 'Connect WhatsApp', desc: 'Plug in your verified Business number — we handle the API setup.' },
  { n: '02', title: 'Set up your workspace', desc: 'Configure pipelines, team and automations to fit your sales motion.' },
  { n: '03', title: 'Start closing', desc: 'Capture leads, manage every chat and drive revenue from one inbox.' },
]

const metrics = [
  ['Under 1 min', 'Average first reply'],
  ['+40%', 'Lead-to-sale conversion'],
  ['10k+', 'Messages handled daily'],
  ['1 inbox', 'For your whole team'],
]

export default function FlashReply() {
  useReveal()
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <div className="pp" style={{ '--accent': ACCENT }}>
      {/* HERO */}
      <section className="pp-hero">
        <div className="pp-hero__glow" />
        <div className="container pp-hero__inner">
          <div className="pp-hero__copy">
            <span className="pp-badge reveal">WhatsApp-first CRM</span>
            <h1 className="reveal">CRM that <span style={{ color: ACCENT }}>closes leads.</span></h1>
            <p className="pp-hero__lead reveal">
              Turn every WhatsApp chat into revenue — one shared inbox for your
              whole team, powered by AI.
            </p>
            <div className="pp-hero__actions reveal">
              <button className="btn btn-accent" onClick={() => scrollTo('waitlist')}>Join the waitlist</button>
              <Link to="/" className="btn btn-ghost">Back to Arusol</Link>
            </div>
          </div>

          <div className="pp-hero__viz reveal">
            <div className="ppchat">
              <div className="ppchat__badge">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" fill="currentColor" /></svg>
                3× faster replies
              </div>
              <div className="ppchat__head">
                <span className="ppchat__avatar">F</span>
                <div><strong>FlashReply</strong><small>online</small></div>
              </div>
              <div className="ppchat__body">
                <div className="ppb ppb--in">Hi! Do you have the Goa package? 🌴</div>
                <div className="ppb ppb--out">Yes! 3N/4D from ₹14,999. Want the itinerary?</div>
                <div className="ppb ppb--in">Yes please</div>
                <div className="ppb ppb--out ppb--bot">
                  <span className="ppb__tag">FlashBot AI</span>
                  Sent ✓ · Payment link attached
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
            <h2 className="section-title">Selling on WhatsApp is messy.</h2>
            <p className="section-lead">FlashReply fixes the three things quietly costing you sales.</p>
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
            <h2 className="section-title">Everything you need to sell on WhatsApp.</h2>
          </div>
          <div className="pp-features">
            {features.map(([icon, title, desc], i) => (
              <div key={title} className="pp-card pp-feature reveal" style={{ transitionDelay: `${(i % 3) * 0.05}s` }}>
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
            <span className="pp-eyebrow">Getting started</span>
            <h2 className="section-title">Live in minutes, not weeks.</h2>
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
            <h2>Turn every chat into revenue.</h2>
            <p>Join the waitlist and be first to grow your sales on WhatsApp.</p>
            <form onSubmit={(e) => e.preventDefault()} className="pp-cta__form">
              <input type="email" placeholder="you@company.com" required />
              <button className="btn btn-accent" type="submit">Get me access</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
