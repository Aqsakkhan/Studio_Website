import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Button from './Button.jsx'

const links = [
  { label: 'Work', to: '/work' },
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-premium ${
        scrolled ? 'bg-ivory/85 backdrop-blur-md border-b border-ink/10' : 'bg-transparent'
      }`}
    >
      <nav className="container-studio flex items-center justify-between h-20" aria-label="Primary">
        <NavLink to="/" className="font-display text-lg tracking-wide text-ink" aria-label="Studio home">
          [STUDIO NAME]
        </NavLink>

        <ul className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `text-[12px] tracking-wide2 uppercase transition-colors duration-300 underline-grow ${
                    isActive ? 'text-ink' : 'text-charcoal/70 hover:text-ink'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button to="/contact" variant="outline" className="!px-6 !py-3 text-[12px]">
            Start a Project
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 -mr-2"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
        </button>
      </nav>

      <div
        className={`md:hidden fixed inset-0 top-20 bg-ivory transition-all duration-500 ease-premium ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <ul className="container-studio flex flex-col gap-2 pt-10">
          {links.map((link, i) => (
            <li
              key={link.to}
              className={`border-b border-ink/10 py-5 transition-all duration-500 ease-premium ${
                open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: open ? `${i * 60 + 80}ms` : '0ms' }}
            >
              <NavLink to={link.to} className="font-display text-3xl text-ink">
                {link.label}
              </NavLink>
            </li>
          ))}
          <li
            className={`pt-8 transition-all duration-500 ease-premium ${
              open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: open ? `${links.length * 60 + 80}ms` : '0ms' }}
          >
            <Button to="/contact" variant="primary">
              Start a Project
            </Button>
          </li>
        </ul>
      </div>
    </header>
  )
}
