import Reveal from './Reveal.jsx'
import { menu } from '../data/menu.js'

export default function MenuSection() {
  return (
    <section id="menu" className="py-24 sm:py-28 border-t border-espresso/10">
      <div className="container-cafe">
        <Reveal>
          <p className="eyebrow mb-4">Menu</p>
          <h2 className="font-display font-medium text-[clamp(1.9rem,3.6vw,2.9rem)] leading-[1.1] max-w-md">
            What we're serving today.
          </h2>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-3 gap-12">
          {menu.map((section, sIdx) => (
            <Reveal key={section.category} delay={sIdx * 100}>
              <div>
                <h3 className="font-display text-xl text-clay mb-5">{section.category}</h3>
                <ul className="flex flex-col gap-5">
                  {section.items.map((item) => (
                    <li key={item.name} className="border-t border-espresso/10 pt-4">
                      <div className="flex items-baseline justify-between gap-3">
                        <span className="font-display text-lg text-espresso">{item.name}</span>
                        <span className="text-sm text-bark/70">{item.price}</span>
                      </div>
                      <p className="text-sm text-bark/70 mt-1">{item.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
