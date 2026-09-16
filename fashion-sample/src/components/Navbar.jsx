import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Button from './Button.jsx'

const links = [
  { label: 'Collection', href: '#collection' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-premium ${
        scrolled ? 'bg-bone/90 backdrop-blur-md border-b border-ink/10' : 'bg-transparent'
      }`}
    >
      <nav className="container-fb flex items-center justify-between h-20" aria-label="Primary">
        <a href="#top" className="font-display text-xl tracking-wide text-ink">
          [BOUTIQUE NAME]
        </a>

        <ul className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[11px] tracking-wide2 uppercase text-ink/70 hover:text-ink underline-grow"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button href="#contact" variant="outline" className="!px-6 !py-3 text-[11px]">
            Get in Touch
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 -mr-2"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={22} strokeWidth={1.25} /> : <Menu size={22} strokeWidth={1.25} />}
        </button>
      </nav>

      <div
        className={`md:hidden fixed inset-0 top-20 bg-bone transition-all duration-500 ease-premium ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <ul className="container-fb flex flex-col gap-2 pt-10">
          {links.map((link, i) => (
            <li
              key={link.href}
              className={`border-b border-ink/10 py-5 transition-all duration-500 ease-premium ${
                open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: open ? `${i * 60 + 80}ms` : '0ms' }}
            >
              <a href={link.href} onClick={() => setOpen(false)} className="font-display text-3xl text-ink">
                {link.label}
              </a>
            </li>
          ))}
          <li
            className={`pt-8 transition-all duration-500 ease-premium ${
              open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: open ? `${links.length * 60 + 80}ms` : '0ms' }}
          >
            <Button href="#contact" variant="primary" onClick={() => setOpen(false)}>
              Get in Touch
            </Button>
          </li>
        </ul>
      </div>
    </header>
  )
}
