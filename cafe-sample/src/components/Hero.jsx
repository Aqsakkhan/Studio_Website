import { Coffee } from 'lucide-react'
import Reveal from './Reveal.jsx'
import Button from './Button.jsx'

export default function Hero() {
  return (
    <section id="top" className="relative pt-40 pb-24 sm:pt-48 sm:pb-32 overflow-hidden">
      <div className="container-cafe grid lg:grid-cols-[1.05fr_0.95fr] gap-16 items-center">
        <div>
          <Reveal>
            <p className="eyebrow">Neighborhood Café</p>
          </Reveal>
          <Reveal delay={100} as="h1">
            <span className="block font-display font-medium leading-[1.05] text-[clamp(2.4rem,6vw,4.2rem)] mt-6">
              Good coffee, made slowly, for your morning.
            </span>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-7 max-w-md text-bark/80 text-[15px] sm:text-base leading-relaxed">
              A warm corner in the neighborhood for coffee, breakfast and pastries — baked, brewed
              and poured every morning.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button href="#menu" variant="primary">
                View Menu
              </Button>
              <Button href="https://wa.me/10000000000" variant="outline">
                Order on WhatsApp
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={180} className="relative h-[380px] sm:h-[440px]">
          <div className="absolute right-0 top-0 w-[70%] h-[70%] bg-gradient-to-br from-sand to-clay/70 shadow-[0_40px_80px_-30px_rgba(46,33,22,0.4)]" />
          <div className="absolute left-0 bottom-0 w-[55%] h-[55%] bg-espresso text-cream flex items-center justify-center shadow-[0_30px_60px_-24px_rgba(46,33,22,0.5)]">
            <Coffee size={40} strokeWidth={1.25} />
          </div>
          <div className="absolute right-4 bottom-6 text-[10px] tracking-wide2 uppercase text-bark/70 bg-paper px-3 py-1.5">
            Open Daily · 7am – 5pm
          </div>
        </Reveal>
      </div>
    </section>
  )
}
