import { Link } from 'react-router-dom'
import ProjectVisual from './ProjectVisual.jsx'

/**
 * If the project has an externalUrl, the card opens that sample website in
 * a new tab. Otherwise it opens the internal /work/:slug detail page.
 */
export default function ProjectCard({ project, aspect = 'aspect-[4/3]' }) {
  const isExternal = Boolean(project.externalUrl)

  const inner = (
    <>
      <ProjectVisual
        project={project}
        className={`${aspect} w-full transition-transform duration-700 ease-premium group-hover:scale-[1.03]`}
      />
      <div className="pt-5 flex items-start justify-between gap-4">
        <div>
          <p className="eyebrow transition-colors duration-500 group-hover:text-moss">
            {project.category}
          </p>
          <h3 className="mt-2 font-display text-xl sm:text-2xl text-ink transition-transform duration-500 ease-premium group-hover:translate-x-1">
            {project.title}
          </h3>
        </div>
        <span className="mt-1 shrink-0 text-[10px] tracking-wide2 uppercase text-stone border border-stone/40 px-2.5 py-1">
          {project.tag}
        </span>
      </div>
      <p className="mt-2 text-sm text-charcoal/70 leading-relaxed max-w-sm">{project.description}</p>
    </>
  )

  const className = 'group block'

  if (isExternal) {
    return (
      <a
        href={project.externalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        aria-label={`${project.title} — view live site (opens in new tab)`}
      >
        {inner}
      </a>
    )
  }

  return (
    <Link to={`/work/${project.slug}`} className={className}>
      {inner}
    </Link>
  )
}
