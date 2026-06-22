import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal'
import './legal.css'

export default function Legal({ title, updated, intro, sections }) {
  useReveal()
  return (
    <div className="legal">
      <div className="legal__hero">
        <div className="legal__glow" />
        <div className="container">
          <Link to="/" className="legal__back">
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
              <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to home
          </Link>
          <h1 className="reveal">{title}</h1>
          <p className="legal__updated reveal">Last updated: {updated}</p>
        </div>
      </div>

      <div className="container legal__body">
        {intro && <p className="legal__intro reveal">{intro}</p>}

        {sections.map((s, i) => (
          <section key={i} className="legal__section reveal">
            <h2>{s.heading}</h2>
            {s.body.map((block, j) =>
              typeof block === 'string' ? (
                <p key={j}>{block}</p>
              ) : (
                <ul key={j}>
                  {block.list.map((li, k) => (
                    <li key={k}>{li}</li>
                  ))}
                </ul>
              )
            )}
          </section>
        ))}

        <p className="legal__note reveal">
          Questions about this page? Email us at{' '}
          <a href="mailto:hello@arusol.com">hello@arusol.com</a>.
        </p>
      </div>
    </div>
  )
}
