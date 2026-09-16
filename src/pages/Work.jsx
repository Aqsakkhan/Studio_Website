import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { projects } from '../data/projects.js'

// Maps each project's `size` to a grid span + aspect ratio, producing an
// asymmetric editorial layout instead of a uniform 3-column grid.
const spanMap = {
  featured: { col: 'md:col-span-8', aspect: 'aspect-[16/10]' },
  tall: { col: 'md:col-span-4', aspect: 'aspect-[3/4]' },
  wide: { col: 'md:col-span-6', aspect: 'aspect-[4/3]' },
  square: { col: 'md:col-span-6', aspect: 'aspect-square' },
}

export default function Work() {
  return (
    <section className="pt-40 pb-28">
      <div className="container-studio">
        <SectionHeading
          eyebrow="Selected Work"
          headline="Built as concepts. Designed to inspire."
          copy="A selection of concept projects created to demonstrate what we can build for modern businesses and brands. These are concept projects, not client work."
          size="xl"
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-16">
          {projects.map((project, i) => {
            const span = spanMap[project.size] || spanMap.wide
            return (
              <Reveal key={project.id} delay={(i % 3) * 90} className={span.col}>
                <ProjectCard project={project} aspect={span.aspect} />
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
