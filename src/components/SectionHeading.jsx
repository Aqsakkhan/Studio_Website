import Reveal from './Reveal.jsx'

export default function SectionHeading({
  eyebrow,
  headline,
  copy,
  align = 'left',
  size = 'lg',
}) {
  const alignClass = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'
  const sizeClass =
    size === 'xl'
      ? 'text-[clamp(2.25rem,5vw,4.25rem)]'
      : 'text-[clamp(1.9rem,3.6vw,3.1rem)]'

  return (
    <div className={`flex flex-col gap-5 max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
        </Reveal>
      )}
      <Reveal delay={80}>
        <h2 className={`font-display font-medium leading-[1.05] ${sizeClass}`}>{headline}</h2>
      </Reveal>
      {copy && (
        <Reveal delay={160}>
          <p className="text-charcoal/75 text-[15px] sm:text-base leading-relaxed max-w-xl">{copy}</p>
        </Reveal>
      )}
    </div>
  )
}
