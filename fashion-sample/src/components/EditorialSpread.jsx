import Reveal from './Reveal.jsx'
import LookVisual from './LookVisual.jsx'
import { editorial } from '../data/collection.js'

export default function EditorialSpread() {
  return (
    <section id="about" className="py-24 sm:py-28 border-t border-ink/10">
      <div className="container-fb grid lg:grid-cols-[1fr_1fr] gap-12 items-center">
        <Reveal className="order-2 lg:order-1">
          <LookVisual
            item={{ name: 'Studio', category: 'Atelier', tone: 'from-[#D9D2C2] to-[#A9744F]' }}
            className="aspect-[4/5] w-full"
          />
        </Reveal>
        <div className="order-1 lg:order-2">
          <Reveal delay={80}>
            <p className="eyebrow mb-4">{editorial.eyebrow}</p>
            <h2 className="font-display font-medium text-[clamp(2rem,4vw,3.2rem)] leading-[1.05] max-w-md">
              {editorial.headline}
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-sm text-ink/70 text-[15px] sm:text-base leading-relaxed">
              {editorial.copy}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
