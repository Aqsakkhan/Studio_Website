import Reveal from './Reveal.jsx'
import Button from './Button.jsx'
import LookVisual from './LookVisual.jsx'

export default function Hero() {
  return (
    <section id="top" className="relative pt-40 pb-20 sm:pt-48 sm:pb-28 overflow-hidden">
      <div className="container-fb grid lg:grid-cols-[1fr_1.1fr] gap-12 items-center">
        <div>
          <Reveal>
            <p className="eyebrow">Autumn Collection</p>
          </Reveal>
          <Reveal delay={100} as="h1">
            <span className="block font-display font-medium leading-[1.02] text-[clamp(2.6rem,7vw,5rem)] mt-6">
              Considered clothing for everyday wear.
            </span>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-7 max-w-sm text-ink/70 text-[15px] sm:text-base leading-relaxed">
              A small collection built on fabric, cut and quiet detail — designed to be worn, not
              just looked at.
            </p>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button href="#collection" variant="primary">
                View Collection
              </Button>
              <Button href="#about" variant="outline">
                Our Story
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={180} className="relative aspect-[4/5] sm:aspect-[3/4] max-h-[560px]">
          <LookVisual item={{ name: 'Hero Look', category: 'Lookbook', tone: 'from-[#E3DCCB] to-[#8C8272]' }} className="w-full h-full" />
        </Reveal>
      </div>
    </section>
  )
}
