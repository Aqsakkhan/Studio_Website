import { Play, ArrowUpRight } from 'lucide-react'

/**
 * Renders a tasteful, category-aware placeholder visual using only CSS/SVG —
 * standing in for real photography until each concept project has its own
 * imagery. No external images are loaded.
 */
export default function ProjectVisual({ project, className = '' }) {
  const isVideo = project.category.includes('VIDEO')
  const isAI = project.category.includes('AI')

  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br ${project.palette} ${className}`}
      role="img"
      aria-label={`${project.title} — ${project.description}`}
    >
      <div className="absolute inset-0 opacity-[0.06] mix-blend-multiply [background-image:repeating-linear-gradient(135deg,#17160F_0,#17160F_1px,transparent_1px,transparent_14px)]" />

      {/* Website-style browser chrome for web projects */}
      {!isVideo && (
        <div className="absolute left-[8%] right-[8%] top-[14%] bottom-[10%] bg-paper/90 border border-ink/10 shadow-[0_30px_60px_-24px_rgba(23,22,15,0.35)]">
          <div className="h-7 border-b border-ink/10 flex items-center gap-1.5 px-3">
            <span className="w-2 h-2 rounded-full bg-ink/15" />
            <span className="w-2 h-2 rounded-full bg-ink/15" />
            <span className="w-2 h-2 rounded-full bg-ink/15" />
          </div>
          <div className="p-5 sm:p-7 flex flex-col gap-3">
            <div className="w-1/3 h-2 bg-ink/15" />
            <div className="w-2/3 h-4 sm:h-5 bg-ink/25" />
            <div className="w-1/2 h-2 bg-ink/10" />
            <div className="mt-3 grid grid-cols-3 gap-2">
              <div className="h-10 sm:h-14 bg-ink/10" />
              <div className="h-10 sm:h-14 bg-ink/10" />
              <div className="h-10 sm:h-14 bg-ink/10" />
            </div>
          </div>
        </div>
      )}

      {/* Video-style frame for video projects */}
      {isVideo && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-paper/85 flex items-center justify-center shadow-[0_20px_40px_-16px_rgba(23,22,15,0.4)]">
            <Play size={26} strokeWidth={1.5} className="text-ink translate-x-0.5" />
          </div>
          <div className="absolute bottom-6 left-6 right-6 h-1 bg-paper/40">
            <div className="h-full w-2/5 bg-paper/90" />
          </div>
        </div>
      )}

      {/* Extra mark for AI creative work */}
      {isAI && (
        <div className="absolute top-6 right-6 w-9 h-9 border border-ink/20 rounded-full flex items-center justify-center">
          <span className="w-1.5 h-1.5 rounded-full bg-ink/50" />
        </div>
      )}

      <div className="absolute bottom-5 right-5 w-8 h-8 rounded-full bg-paper/70 flex items-center justify-center">
        <ArrowUpRight size={15} strokeWidth={1.75} className="text-ink" />
      </div>
    </div>
  )
}
