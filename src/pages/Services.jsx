import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import ServiceList from '../components/ServiceList.jsx'
import Button from '../components/Button.jsx'

const process = [
  { number: '01', title: 'Discover', copy: 'We understand your business, audience and goals.' },
  { number: '02', title: 'Define', copy: 'We shape the structure, content and creative direction.' },
  { number: '03', title: 'Create', copy: 'We design, develop, write and produce the experience.' },
  { number: '04', title: 'Deliver', copy: 'You receive polished, ready-to-use digital work.' },
]

export default function Services() {
  return (
    <>
      <section className="pt-40 pb-20">
        <div className="container-studio">
          <SectionHeading
            eyebrow="What We Do"
            headline="Creative, digital, and built for business."
            size="xl"
          />
        </div>
      </section>

      <section className="pb-24">
        <div className="container-studio">
          <ServiceList />
        </div>
      </section>

      <section className="py-24 sm:py-32 border-t border-ink/10">
        <div className="container-studio">
          <SectionHeading headline="How We Work" size="xl" />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {process.map((step, i) => (
              <Reveal key={step.number} delay={i * 90}>
                <div className="border-t border-ink/15 pt-5">
                  <span className="font-display text-sm text-moss">{step.number}</span>
                  <h3 className="font-display text-xl text-ink mt-2">{step.title}</h3>
                  <p className="mt-2 text-sm text-charcoal/70 leading-relaxed">{step.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-28 border-t border-ink/10 bg-ink text-ivory">
        <div className="container-studio flex flex-col items-start gap-7">
          <Reveal as="h2" className="font-display font-medium leading-[1.05] text-[clamp(2rem,4.5vw,3.4rem)] max-w-xl">
            Need one of these for your business?
          </Reveal>
          <Reveal delay={120}>
            <Button to="/contact" variant="primary" className="!bg-ivory !text-ink hover:!bg-mist">
              Start a Project
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  )
}
