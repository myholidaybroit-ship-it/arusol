import { useState } from 'react'
import './Contact.css'

const services = ['Digital Marketing', 'Web Development', 'App Development', 'Advertisement', 'Video Editing', 'A product (Wandra / FlashReply)', 'Something else']

const steps = [
  'We review your brief',
  'A quick call to scope it',
  'You get a clear plan & quote',
]

const icons = {
  user: <path d="M12 12a4 4 0 100-8 4 4 0 000 8zM4 20a8 8 0 0116 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />,
  mail: <path d="M3 6h18v12H3zM3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />,
  phone: <path d="M5 4h4l1.5 5-2 1.5a12 12 0 005 5l1.5-2 5 1.5v4a1 1 0 01-1 1A16 16 0 014 5a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />,
  work: <path d="M3 8h18v11H3zM8 8V6a2 2 0 012-2h4a2 2 0 012 2v2" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />,
}

export default function Contact() {
  const [sent, setSent] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="contact__card reveal">
          <div className="contact__glow" />

          <div className="contact__info">
            <span className="eyebrow">Let&apos;s build</span>
            <h2 className="contact__title">
              Have a project in mind?
              <br />
              <span className="gold-text">Let&apos;s make it real.</span>
            </h2>
            <p className="contact__lead">
              Tell us what you need. We&apos;ll reply within a day.
            </p>

            <ul className="contact__steps">
              {steps.map((s, i) => (
                <li key={s}>
                  <span className="contact__step-num">{i + 1}</span>
                  {s}
                </li>
              ))}
            </ul>

            <div className="contact__meta">
              <a href="mailto:hello@arusol.com" className="contact__meta-item">
                <span>Email</span>
                hello@arusol.com
              </a>
              <div className="contact__meta-item">
                <span>Response time</span>
                Within 24 hours
              </div>
            </div>
          </div>

          <form className="contact__form" onSubmit={submit}>
            {sent ? (
              <div className="contact__success">
                <div className="contact__success-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3>Thanks — we&apos;ve got it.</h3>
                <p>Our team will reach out shortly to walk you through next steps.</p>
              </div>
            ) : (
              <>
                <div className="field">
                  <label>Your name</label>
                  <div className="field__control">
                    <svg className="field__icon" width="18" height="18" viewBox="0 0 24 24" fill="none">{icons.user}</svg>
                    <input type="text" placeholder="Jane Doe" required />
                  </div>
                </div>
                <div className="field-row">
                  <div className="field">
                    <label>Email</label>
                    <div className="field__control">
                      <svg className="field__icon" width="18" height="18" viewBox="0 0 24 24" fill="none">{icons.mail}</svg>
                      <input type="email" placeholder="you@company.com" required />
                    </div>
                  </div>
                  <div className="field">
                    <label>Phone</label>
                    <div className="field__control">
                      <svg className="field__icon" width="18" height="18" viewBox="0 0 24 24" fill="none">{icons.phone}</svg>
                      <input type="tel" placeholder="+91 00000 00000" />
                    </div>
                  </div>
                </div>
                <div className="field">
                  <label>What do you need?</label>
                  <div className="field__control field__control--select">
                    <svg className="field__icon" width="18" height="18" viewBox="0 0 24 24" fill="none">{icons.work}</svg>
                    <select required defaultValue="">
                      <option value="" disabled>Select a service</option>
                      {services.map((s) => <option key={s}>{s}</option>)}
                    </select>
                    <svg className="field__caret" width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <div className="field">
                  <label>Tell us more</label>
                  <div className="field__control">
                    <textarea rows="3" placeholder="A few lines about your project…" />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary contact__submit">
                  Send message
                  <svg className="btn-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <p className="contact__assure">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /></svg>
                  Your details stay private. No spam, ever.
                </p>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
