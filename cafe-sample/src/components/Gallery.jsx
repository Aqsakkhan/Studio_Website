import Reveal from './Reveal.jsx'
import { gallery } from '../data/menu.js'

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 sm:py-28 border-t border-espresso/10">
      <div className="container-cafe">
        <Reveal>
          <p className="eyebrow mb-4">Gallery</p>
          <h2 className="font-display font-medium text-[clamp(1.9rem,3.6vw,2.9rem)] leading-[1.1] max-w-md">
            A look inside.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {gallery.map((item, i) => (
            <Reveal key={item.label} delay={i * 70} className={i === 0 ? 'col-span-2 row-span-2' : ''}>
              <div
                className={`relative overflow-hidden bg-gradient-to-br ${item.tone} ${
                  i === 0 ? 'aspect-square md:aspect-[4/3]' : 'aspect-square'
                } group`}
              >
                <div className="absolute inset-0 opacity-[0.08] mix-blend-multiply [background-image:repeating-linear-gradient(135deg,#2E2116_0,#2E2116_1px,transparent_1px,transparent_14px)]" />
                <span className="absolute bottom-3 left-3 text-[10px] tracking-wide2 uppercase text-cream/90 bg-espresso/40 px-2.5 py-1 backdrop-blur-sm transition-transform duration-500 ease-premium group-hover:translate-x-1">
                  {item.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
