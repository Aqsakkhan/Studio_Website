import Reveal from './Reveal.jsx'

export default function Story() {
  return (
    <section className="py-24 sm:py-28 border-t border-espresso/10">
      <div className="container-cafe grid lg:grid-cols-[1fr_1fr] gap-14 items-center">
        <Reveal>
          <div>
            <p className="eyebrow mb-4">Our Story</p>
            <h2 className="font-display font-medium text-[clamp(1.9rem,3.6vw,2.9rem)] leading-[1.1] max-w-md">
              A small café built around good mornings.
            </h2>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <p className="text-bark/80 text-[15px] sm:text-base leading-relaxed max-w-md">
            We roast, brew and bake with the same care every day — because the best part of the
            morning shouldn't be rushed. Come sit for five minutes or an hour; the coffee will be
            ready either way.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
