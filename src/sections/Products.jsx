import { Link } from 'react-router-dom'
import './Products.css'

export default function Products() {
  return (
    <section className="section products" id="work">
      <div className="container">
        <div className="products__head reveal">
          <span className="eyebrow">Built by Arusol</span>
          <h2 className="section-title">
            We build for clients —
            <br />
            <span className="gold-text">and for ourselves.</span>
          </h2>
          <p className="section-lead">
            Two SaaS products, built in-house. Proof we practice what we promise.
          </p>
        </div>

        {/* ============ WANDRA — dashboard panel ============ */}
        <article className="panel panel--wandra reveal" style={{ '--accent': '#5b8def' }}>
          <div className="panel__glow" />
          <div className="panel__main">
            <div className="panel__copy">
              <span className="panel__label">Product 01 — Travel CRM</span>
              <h3 className="panel__name">Wandra</h3>
              <p className="panel__desc">
                Run your whole travel agency from one place — leads, itineraries
                and bookings, all in sync.
              </p>
              <ul className="panel__feats">
                <li>Lead &amp; enquiry management</li>
                <li>Itinerary builder</li>
                <li>Quotes &amp; bookings</li>
                <li>Agent collaboration</li>
              </ul>
              <Link to="/wandra" className="btn btn-ghost panel__btn">
                Explore Wandra
                <svg className="btn-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>

            <div className="panel__visual">
              <div className="dash">
                <div className="dash__bar"><span /><span /><span /></div>
                <div className="dash__stats">
                  <div><small>Active trips</small><b>24</b></div>
                  <div><small>Pipeline</small><b>₹18.2L</b></div>
                  <div><small>Conversion</small><b>38%</b></div>
                </div>
                <div className="dash__body">
                  <div className="dash__leads">
                    <span className="dash__lead">New enquiry · Bali</span>
                    <span className="dash__lead">Honeymoon · Maldives</span>
                    <span className="dash__lead is-active">Family · Switzerland</span>
                    <span className="dash__lead">Group · Dubai</span>
                  </div>
                  <div className="dash__chart-card">
                    <div className="dash__chart-head"><span>Itinerary</span><b>7 days</b></div>
                    <div className="dash__chart">
                      {[42, 66, 50, 82, 60, 92].map((h, i) => (
                        <span key={i} style={{ height: `${h}%` }} />
                      ))}
                    </div>
                    <div className="dash__line" style={{ width: '88%' }} />
                    <div className="dash__line" style={{ width: '54%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="panel__stats">
            <div className="panel__stat"><b>1,200+</b><span>Itineraries built</span></div>
            <div className="panel__stat"><b>38%</b><span>Avg. lead conversion</span></div>
            <div className="panel__stat"><b>5 hrs</b><span>Saved per trip planned</span></div>
          </div>
        </article>

        {/* ============ FLASHREPLY — conversation panel ============ */}
        <article className="panel panel--flash reveal" style={{ '--accent': '#25d366' }}>
          <div className="panel__glow" />
          <div className="panel__main panel__main--reverse">
            <div className="panel__visual">
              <div className="chatwrap">
                <div className="chatwrap__badge">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" fill="currentColor" /></svg>
                  3× faster replies
                </div>
                <div className="chat">
                  <div className="chat__head">
                    <span className="chat__avatar">F</span>
                    <div>
                      <strong>FlashReply</strong>
                      <small>online</small>
                    </div>
                  </div>
                  <div className="chat__body">
                    <div className="bubble bubble--in">Hi! Do you have the Goa package? 🌴</div>
                    <div className="bubble bubble--out">Yes! 3N/4D from ₹14,999. Want the itinerary?</div>
                    <div className="bubble bubble--in">Yes please</div>
                    <div className="bubble bubble--out bubble--bot">
                      <span className="bubble__tag">FlashBot AI</span>
                      Sent ✓ · Payment link attached
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="panel__copy">
              <span className="panel__label">Product 02 — WhatsApp CRM</span>
              <h3 className="panel__name">FlashReply</h3>
              <p className="panel__desc">
                Turn every WhatsApp chat into a sale — one shared inbox for your
                whole team, powered by AI.
              </p>
              <ul className="panel__feats">
                <li>Team inbox</li>
                <li>WhatsApp chatbot</li>
                <li>Broadcast campaigns</li>
                <li>FlashBot AI</li>
              </ul>
              <Link to="/flashreply" className="btn btn-ghost panel__btn">
                Explore FlashReply
                <svg className="btn-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="panel__metrics">
            <div className="panel__metric">
              <span className="panel__metric-ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /></svg></span>
              <div><b>Under 1 min</b><span>Average first response</span></div>
            </div>
            <div className="panel__metric">
              <span className="panel__metric-ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M4 18l5-5 4 3 7-8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /><path d="M16 8h4v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
              <div><b>+40%</b><span>Lead-to-sale conversion</span></div>
            </div>
            <div className="panel__metric">
              <span className="panel__metric-ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M3 7h18v10H3zM3 12h6l2 3h2l2-3h6" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /></svg></span>
              <div><b>One inbox</b><span>For your whole team</span></div>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
