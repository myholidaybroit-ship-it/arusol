import { useEffect, useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import Logo from './Logo'
import './Navbar.css'

const links = [
  { label: 'Services', to: '/#services' },
  { label: 'Work', to: '/#work' },
  { label: 'About', to: '/#about' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    setProductsOpen(false)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const goTo = (to) => {
    setOpen(false)
    if (to.startsWith('/#')) {
      const id = to.slice(2)
      if (location.pathname !== '/') {
        navigate('/')
        setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 80)
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      navigate(to)
    }
  }

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <Link to="/" className="nav__logo" onClick={() => window.scrollTo(0, 0)}>
          <Logo height={34} />
        </Link>

        <nav className="nav__links">
          {links.map((l) => (
            <button key={l.label} className="nav__link" onClick={() => goTo(l.to)}>
              {l.label}
            </button>
          ))}
          <div
            className="nav__dropdown"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button className="nav__link nav__link--caret">
              Products
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </button>
            {productsOpen && (
              <div className="nav__menu">
                <Link to="/wandra" className="nav__menu-item">
                  <span className="nav__menu-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M12 21s7-5.5 7-11a7 7 0 10-14 0c0 5.5 7 11 7 11z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                      <circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.6" />
                    </svg>
                  </span>
                  <div>
                    <strong>Wandra</strong>
                    <span>Travel CRM &amp; itinerary suite</span>
                  </div>
                </Link>
                <Link to="/flashreply" className="nav__menu-item">
                  <span className="nav__menu-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M4 5h16v11H8l-4 4V5z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                      <path d="M8.5 10h7M8.5 13h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                    </svg>
                  </span>
                  <div>
                    <strong>FlashReply</strong>
                    <span>WhatsApp-first sales CRM</span>
                  </div>
                </Link>
              </div>
            )}
          </div>
        </nav>

        <div className="nav__cta">
          <button className="btn btn-primary" onClick={() => goTo('/#contact')}>
            Let&apos;s talk
          </button>
        </div>

        <button
          className={`nav__burger ${open ? 'is-open' : ''}`}
          onClick={() => setOpen((o) => !o)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </div>

      <div className={`nav__mobile ${open ? 'is-open' : ''}`}>
        <nav className="nav__mobile-links">
          {links.map((l) => (
            <button key={l.label} onClick={() => goTo(l.to)}>{l.label}</button>
          ))}
          <Link to="/wandra">Wandra</Link>
          <Link to="/flashreply">FlashReply</Link>
        </nav>
        <button className="btn btn-primary nav__mobile-cta" onClick={() => goTo('/#contact')}>
          Let&apos;s talk
          <svg className="btn-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </header>
  )
}
