import { Play, Type as TypeIcon, ShoppingBag } from 'lucide-react'
import Button from '../components/Button.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import ServiceList from '../components/ServiceList.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { projects } from '../data/projects.js'

const whyUs = [
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

const process = [
  { number: '01', title: 'Discover', copy: 'We understand your business, audience and goals.' },
  { number: '02', title: 'Define', copy: 'We shape the structure, content and creative direction.' },
  { number: '03', title: 'Create', copy: 'We design, develop, write and produce the experience.' },
  { number: '04', title: 'Deliver', copy: 'You receive polished, ready-to-use digital work.' },
]

export default function Home() {
  const featured = projects.slice(0, 3)

  return (
    <>
      {/* HERO */}
      <section className="relative pt-40 pb-24 sm:pt-48 sm:pb-32 overflow-hidden">
        <div className="container-studio grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
          <div>
            <Reveal>
              <p className="eyebrow">WEB • CONTENT • CREATIVE</p>
            </Reveal>
            <Reveal delay={100} as="h1">
              <span className="block font-display font-medium leading-[1.03] text-[clamp(2.4rem,6vw,4.6rem)] mt-6">
                We build digital experiences that help businesses grow.
              </span>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-7 max-w-lg text-charcoal/75 text-[15px] sm:text-base leading-relaxed">
                We combine thoughtful design, technology, storytelling and modern creative tools to
                help businesses show up beautifully online.
              </p>
            </Reveal>
            <Reveal delay={320}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button to="/work" variant="primary">
                  View Our Work
                </Button>
                <Button to="/contact" variant="outline">
                  Start a Project
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Art-directed composition: website + product + video + type */}
          <Reveal delay={200} className="relative h-[420px] sm:h-[480px] lg:h-[520px]">
            <div className="absolute right-0 top-0 w-[62%] aspect-[4/3] bg-paper border border-ink/10 shadow-[0_40px_80px_-30px_rgba(23,22,15,0.35)]">
              <div className="h-6 border-b border-ink/10 flex items-center gap-1.5 px-3">
                <span className="w-1.5 h-1.5 rounded-full bg-ink/15" />
                <span className="w-1.5 h-1.5 rounded-full bg-ink/15" />
                <span className="w-1.5 h-1.5 rounded-full bg-ink/15" />
              </div>
              <div className="p-5 flex flex-col gap-3">
                <div className="w-1/2 h-2 bg-ink/15" />
                <div className="w-3/4 h-4 bg-ink/25" />
                <div className="grid grid-cols-3 gap-2 mt-2">
                  <div className="h-10 bg-ink/10" />
                  <div className="h-10 bg-ink/10" />
                  <div className="h-10 bg-ink/10" />
                </div>
              </div>
            </div>

            <div className="absolute left-0 bottom-16 w-[46%] aspect-square bg-gradient-to-br from-mist to-stone/60 flex items-center justify-center shadow-[0_30px_60px_-24px_rgba(23,22,15,0.35)]">
              <div className="w-14 h-14 rounded-full bg-paper/85 flex items-center justify-center">
                <Play size={22} strokeWidth={1.5} className="text-ink translate-x-0.5" />
              </div>
            </div>

            <div className="absolute right-6 bottom-0 w-[42%] aspect-[5/6] bg-moss text-ivory p-6 flex flex-col justify-between shadow-[0_30px_60px_-24px_rgba(23,22,15,0.45)]">
              <ShoppingBag size={20} strokeWidth={1.5} />
              <div>
                <p className="text-[10px] tracking-wide2 uppercase text-ivory/70">Product</p>
                <p className="font-display text-lg mt-1">Skincare Co.</p>
              </div>
            </div>

            <div className="absolute left-6 top-4 flex items-center gap-2 text-stone">
              <TypeIcon size={16} strokeWidth={1.5} />
              <span className="text-[10px] tracking-wide2 uppercase">Editorial</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* INTRO / APPROACH */}
      <section className="py-24 sm:py-32 border-t border-ink/10">
        <div className="container-studio grid lg:grid-cols-[1fr_1fr] gap-12 items-end">
          <SectionHeading
            eyebrow="Our Approach"
            headline="One creative partner for your digital presence."
            size="xl"
          />
          <Reveal delay={120}>
            <p className="text-charcoal/75 text-[15px] sm:text-base leading-relaxed max-w-lg lg:ml-auto">
              From your first website to your next campaign, we bring design, development, content
              and copy together to create a stronger online presence.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 sm:py-32 border-t border-ink/10">
        <div className="container-studio">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8 mb-14">
            <SectionHeading
              eyebrow="What We Do"
              headline="Creative, digital, and built for business."
            />
            <Reveal delay={120}>
              <Button to="/services" variant="ghost">
                All Services
              </Button>
            </Reveal>
          </div>
          <ServiceList compact />
        </div>
      </section>

      {/* SELECTED WORK PREVIEW */}
      <section className="py-24 sm:py-32 border-t border-ink/10">
        <div className="container-studio">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8 mb-14">
            <SectionHeading
              eyebrow="Selected Work"
              headline="Built as concepts. Designed to inspire."
              copy="A selection of concept projects created to demonstrate what we can build for modern businesses and brands."
            />
            <Reveal delay={120}>
              <Button to="/work" variant="ghost">
                View All Work
              </Button>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-x-8 gap-y-14">
            {featured.map((project, i) => (
              <Reveal key={project.id} delay={i * 100}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-24 sm:py-32 border-t border-ink/10">
        <div className="container-studio grid lg:grid-cols-[1fr_1.2fr] gap-14">
          <SectionHeading headline="Design. Technology. Storytelling." size="xl" />
          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-12">
            {whyUs.map((item, i) => (
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

      {/* PROCESS PREVIEW */}
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

      {/* FINAL CTA */}
      <section className="py-28 sm:py-36 border-t border-ink/10 bg-ink text-ivory">
        <div className="container-studio flex flex-col items-start gap-8">
          <Reveal as="h2" className="font-display font-medium leading-[1.05] text-[clamp(2.2rem,5.5vw,4rem)] max-w-2xl">
            Have something in mind?
          </Reveal>
          <Reveal delay={120}>
            <p className="text-ivory/70 max-w-md text-[15px] sm:text-base leading-relaxed">
              Tell us what you're building. We'll figure out the next step together.
            </p>
          </Reveal>
          <Reveal delay={220}>
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
