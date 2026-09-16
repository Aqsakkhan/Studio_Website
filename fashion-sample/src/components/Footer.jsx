import { Instagram, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-bone">
      <div className="container-fb py-14 grid sm:grid-cols-[1.4fr_1fr_1fr] gap-10">
        <div>
          <p className="font-display text-2xl text-ink">[BOUTIQUE NAME]</p>
          <p className="text-ink/60 text-sm leading-relaxed mt-3 max-w-xs">
            A modern fashion label for considered, everyday clothing.
          </p>
        </div>
        <div>
          <p className="eyebrow mb-4">Explore</p>
          <ul className="flex flex-col gap-2 text-sm text-ink/75">
            <li><a href="#collection" className="underline-grow">Collection</a></li>
            <li><a href="#about" className="underline-grow">About</a></li>
            <li><a href="#contact" className="underline-grow">Contact</a></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-4">Connect</p>
          <ul className="flex flex-col gap-2 text-sm text-ink/75">
            <li>
              <a href="mailto:hello@boutique-placeholder.com" className="inline-flex items-center gap-2 underline-grow">
                <Mail size={14} strokeWidth={1.5} /> hello@boutique-placeholder.com
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/boutique.placeholder"
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
      <div className="border-t border-ink/10">
        <div className="container-fb py-5">
          <p className="text-[11px] tracking-wide2 uppercase text-ink/50">
            © 2026 [BOUTIQUE NAME]. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
