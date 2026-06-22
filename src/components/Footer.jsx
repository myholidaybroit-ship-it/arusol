import { Link } from 'react-router-dom'
import Logo from './Logo'
import './Footer.css'

const socials = [
  {
    label: 'LinkedIn',
    href: '#',
    icon: <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-1 1.83-2.05 3.76-2.05 4.02 0 4.76 2.65 4.76 6.1V21h-4v-5.4c0-1.3 0-2.96-1.8-2.96-1.8 0-2.08 1.4-2.08 2.86V21h-4z" fill="currentColor" />,
  },
  {
    label: 'X',
    href: '#',
    icon: <path d="M17.5 3h3l-7.2 8.2L22 21h-6.6l-5-6.1L4.6 21H1.5l7.7-8.8L2 3h6.8l4.5 5.6L17.5 3zm-1.1 16h1.8L7.7 4.8H5.8L16.4 19z" fill="currentColor" />,
  },
  {
    label: 'Instagram',
    href: '#',
    icon: <><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.7" /><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" /><circle cx="17.4" cy="6.6" r="1.2" fill="currentColor" /></>,
  },
  {
    label: 'Behance',
    href: '#',
    icon: <path d="M7 7H3v10h4.2c2 0 3.3-1 3.3-2.8 0-1.2-.6-2-1.6-2.3.8-.3 1.3-1 1.3-2C10.2 8 9 7 7 7zm-.3 4H5V8.8h1.7c.9 0 1.4.4 1.4 1.1 0 .7-.5 1.1-1.4 1.1zm.2 4.2H5v-2.5h1.9c1 0 1.6.5 1.6 1.3 0 .8-.6 1.2-1.6 1.2zM14 8.6h4v1.1h-4zm6.9 4.6c0-2-1.3-3.5-3.4-3.5s-3.5 1.5-3.5 3.7c0 2.2 1.4 3.6 3.6 3.6 1.7 0 3-.9 3.3-2.3h-1.9c-.2.5-.7.8-1.4.8-.9 0-1.5-.6-1.6-1.6h4.9c0-.2 0-.6 0-.7zm-4.9-.5c.1-.9.6-1.4 1.5-1.4.8 0 1.4.5 1.5 1.4h-3z" fill="currentColor" />,
  },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Logo height={42} />
            <p>
              A digital studio building marketing, software, and products
              engineered for scale.
            </p>
          </div>

          <div className="footer__socials">
            {socials.map((s) => (
              <a key={s.label} href={s.href} aria-label={s.label} className="footer__social">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">{s.icon}</svg>
              </a>
            ))}
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Arusol Technologies. All rights reserved.</span>
          <div className="footer__legal">
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
            <a href="mailto:hello@arusol.com">hello@arusol.com</a>
          </div>
        </div>
      </div>

      <div
        className="footer__watermark"
        aria-hidden="true"
        onMouseMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect()
          e.currentTarget.style.setProperty('--x', `${e.clientX - r.left}px`)
          e.currentTarget.style.setProperty('--y', `${e.clientY - r.top}px`)
        }}
      >
        <img className="footer__wm-img footer__wm-base" src="/arusol-logo.png" alt="" />
        <img className="footer__wm-img footer__wm-glow" src="/arusol-logo.png" alt="" />
      </div>
    </footer>
  )
}
