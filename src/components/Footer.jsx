import { NavLink } from 'react-router-dom'
import { Instagram, Linkedin, Mail } from 'lucide-react'

const nav = [
  { label: 'Work', to: '/work' },
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

const services = [
  'Website Development',
  'Short-Form Video',
  'Long-Form Video',
  'Copywriting',
  'AI Creative',
  'Social Content',
]

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-ivory">
      <div className="container-studio py-16 grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-12">
        <div>
          <p className="font-display text-2xl text-ink">[STUDIO NAME]</p>
          <p className="eyebrow mt-3">WEB • CONTENT • CREATIVE</p>
          <p className="text-charcoal/70 text-sm leading-relaxed mt-5 max-w-xs">
            A digital creative studio helping businesses build a stronger online presence.
          </p>
        </div>

        <div>
          <p className="eyebrow mb-5">Navigation</p>
          <ul className="flex flex-col gap-3">
            {nav.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} className="text-sm text-charcoal/80 hover:text-ink underline-grow">
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-5">Services</p>
          <ul className="flex flex-col gap-3">
            {services.map((s) => (
              <li key={s} className="text-sm text-charcoal/80">
                {s}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-5">Connect</p>
          <ul className="flex flex-col gap-3">
            <li>
              <a
                href="mailto:hello@studio-placeholder.com"
                className="inline-flex items-center gap-2 text-sm text-charcoal/80 hover:text-ink underline-grow"
              >
                <Mail size={15} strokeWidth={1.5} /> hello@studio-placeholder.com
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/10000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-charcoal/80 hover:text-ink underline-grow"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/studio.placeholder"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-charcoal/80 hover:text-ink underline-grow"
              >
                <Instagram size={15} strokeWidth={1.5} /> Instagram
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/company/studio-placeholder"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-charcoal/80 hover:text-ink underline-grow"
              >
                <Linkedin size={15} strokeWidth={1.5} /> LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink/10">
        <div className="container-studio py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] tracking-wide2 uppercase text-stone">
            © 2026 [STUDIO NAME]. All rights reserved.
          </p>
          <p className="text-[11px] tracking-wide2 uppercase text-stone">Web • Content • Creative</p>
        </div>
      </div>
    </footer>
  )
}
