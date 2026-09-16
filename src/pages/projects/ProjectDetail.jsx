import { useParams, Navigate, Link } from 'react-router-dom'
import { Check } from 'lucide-react'
import { getProjectBySlug } from '../../data/projects.js'
import ProjectVisual from '../../components/ProjectVisual.jsx'
import Reveal from '../../components/Reveal.jsx'
import Button from '../../components/Button.jsx'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  if (!project) {
    return <Navigate to="/work" replace />
  }

  const { detail } = project

  return (
    <article className="pt-40 pb-28">
      <div className="container-studio">
        <Reveal>
          <Link to="/work" className="eyebrow underline-grow">
            ← Selected Work
          </Link>
        </Reveal>

        <div className="mt-8 grid lg:grid-cols-[1fr_auto] items-end gap-8">
          <Reveal delay={80} as="h1" className="font-display font-medium leading-[1.02] text-[clamp(2.4rem,6vw,4.8rem)]">
            {project.title}
          </Reveal>
          <Reveal delay={140} className="flex flex-col items-start lg:items-end gap-2">
            <span className="eyebrow">{project.category}</span>
            <span className="text-[10px] tracking-wide2 uppercase text-stone border border-stone/40 px-2.5 py-1 w-fit">
              {project.tag}
            </span>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <p className="mt-6 max-w-xl text-charcoal/75 text-base sm:text-lg leading-relaxed">
            {detail.tagline}
          </p>
        </Reveal>

        <Reveal delay={260}>
          <ProjectVisual project={project} className="mt-14 w-full aspect-[16/9]" />
        </Reveal>

        <div className="mt-20 grid lg:grid-cols-[0.9fr_1.1fr] gap-14">
          <div className="flex flex-col gap-10">
            <Reveal>
              <div>
                <p className="eyebrow mb-3">Objective</p>
                <p className="text-charcoal/80 text-[15px] leading-relaxed max-w-sm">
                  {detail.objective}
                </p>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div>
                <p className="eyebrow mb-3">Creative Direction</p>
                <p className="text-charcoal/80 text-[15px] leading-relaxed max-w-sm">
                  {detail.direction}
                </p>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div>
                <p className="eyebrow mb-3">Tools &amp; Skills</p>
                <div className="flex flex-wrap gap-2">
                  {detail.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-[12px] text-charcoal/75 border border-ink/12 px-3 py-1.5"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <div>
              <p className="eyebrow mb-5">What We Created</p>
              <ul className="flex flex-col gap-4">
                {detail.whatWeCreated.map((item) => (
                  <li key={item} className="flex items-start gap-3 border-t border-ink/12 pt-4">
                    <Check size={16} strokeWidth={1.75} className="text-moss mt-0.5 shrink-0" />
                    <span className="text-[15px] text-charcoal/85">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-24 border-t border-ink/10 pt-14 flex flex-col items-start gap-6">
          <h2 className="font-display text-3xl sm:text-4xl text-ink max-w-lg">
            Want something similar for your business?
          </h2>
          <Button to="/contact" variant="primary">
            Start a Project
          </Button>
        </Reveal>
      </div>
    </article>
  )
}
