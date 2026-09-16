import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import Button from '../components/Button.jsx'

const points = [
  {
    title: 'Design + Development',
    copy: 'Creative thinking backed by technical execution.',
  },
  {
    title: 'Content + Copy',
    copy: 'Visuals and words designed to work together.',
  },
  {
    title: 'AI-Assisted Production',
    copy: 'Modern tools used to create faster and explore more ideas.',
  },
  {
    title: 'Built for Small Businesses',
    copy: 'Professional digital experiences without unnecessary complexity.',
  },
]

export default function About() {
  return (
    <>
      <section className="pt-40 pb-24">
        <div className="container-studio grid lg:grid-cols-[0.9fr_1.1fr] gap-14">
          <SectionHeading eyebrow="About the Studio" headline="Small studio. Big ideas." size="xl" />
          <div className="flex flex-col gap-6 max-w-xl">
            <Reveal>
              <p className="text-charcoal/80 text-[15px] sm:text-base leading-relaxed">
                We're a creative digital studio helping businesses build a stronger online presence
                through thoughtful design, technology and content.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-charcoal/80 text-[15px] sm:text-base leading-relaxed">
                We combine web development, storytelling, copywriting and modern AI tools to create
                digital experiences that look good, communicate clearly and are built to be useful.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32 border-t border-ink/10">
        <div className="container-studio grid lg:grid-cols-[1fr_1.2fr] gap-14">
          <SectionHeading headline="Design. Technology. Storytelling." size="xl" />
          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-12">
            {points.map((item, i) => (
              <Reveal key={item.title} delay={i * 90}>
                <div className="border-t border-ink/15 pt-5">
                  <h3 className="font-display text-lg text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm text-charcoal/70 leading-relaxed">{item.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-28 border-t border-ink/10 bg-ink text-ivory">
        <div className="container-studio flex flex-col items-start gap-7">
          <Reveal as="h2" className="font-display font-medium leading-[1.05] text-[clamp(2rem,4.5vw,3.4rem)] max-w-xl">
            Let's build something together.
          </Reveal>
          <Reveal delay={120}>
            <div className="flex flex-wrap gap-4">
              <Button to="/contact" variant="primary" className="!bg-ivory !text-ink hover:!bg-mist">
                Start a Project
              </Button>
              <Button to="/work" variant="outline" className="!border-ivory/40 !text-ivory hover:!bg-ivory hover:!text-ink">
                View Our Work
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
