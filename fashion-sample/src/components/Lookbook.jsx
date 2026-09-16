import Reveal from './Reveal.jsx'
import LookVisual from './LookVisual.jsx'
import { lookbook } from '../data/collection.js'

const spanMap = {
  tall: { col: 'md:col-span-4', aspect: 'aspect-[3/4]' },
  wide: { col: 'md:col-span-8', aspect: 'aspect-[16/9]' },
  square: { col: 'md:col-span-4', aspect: 'aspect-square' },
}

export default function Lookbook() {
  return (
    <section id="collection" className="py-24 sm:py-28 border-t border-ink/10">
      <div className="container-fb">
        <Reveal>
          <p className="eyebrow mb-4">The Collection</p>
          <h2 className="font-display font-medium text-[clamp(2rem,4vw,3.2rem)] leading-[1.05] max-w-lg">
            Pieces built to move with you.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-12">
          {lookbook.map((item, i) => {
            const span = spanMap[item.size] || spanMap.square
            return (
              <Reveal key={item.name} delay={(i % 3) * 90} className={span.col}>
                <div className="group">
                  <LookVisual
                    item={item}
                    className={`${span.aspect} w-full transition-transform duration-700 ease-premium group-hover:scale-[1.02]`}
                  />
                  <div className="pt-4 flex items-baseline justify-between">
                    <h3 className="font-display text-lg text-ink">{item.name}</h3>
                    <span className="eyebrow">{item.category}</span>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
