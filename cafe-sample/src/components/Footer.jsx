import { Instagram, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-espresso/10 bg-cream">
      <div className="container-cafe py-14 grid sm:grid-cols-[1.4fr_1fr_1fr] gap-10">
        <div>
          <p className="font-display text-2xl text-espresso">[CAFÉ NAME]</p>
          <p className="text-bark/70 text-sm leading-relaxed mt-3 max-w-xs">
            A neighborhood café for coffee, breakfast and pastries.
          </p>
        </div>
        <div>
          <p className="eyebrow mb-4">Explore</p>
          <ul className="flex flex-col gap-2 text-sm text-bark/80">
            <li><a href="#menu" className="underline-grow">Menu</a></li>
            <li><a href="#gallery" className="underline-grow">Gallery</a></li>
            <li><a href="#location" className="underline-grow">Location</a></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-4">Connect</p>
          <ul className="flex flex-col gap-2 text-sm text-bark/80">
            <li>
              <a href="mailto:hello@cafe-placeholder.com" className="inline-flex items-center gap-2 underline-grow">
                <Mail size={14} strokeWidth={1.5} /> hello@cafe-placeholder.com
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/cafe.placeholder"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 underline-grow"
              >
                <Instagram size={14} strokeWidth={1.5} /> Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-espresso/10">
        <div className="container-cafe py-5">
          <p className="text-[11px] tracking-wide2 uppercase text-bark/60">
            © 2026 [CAFÉ NAME]. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
