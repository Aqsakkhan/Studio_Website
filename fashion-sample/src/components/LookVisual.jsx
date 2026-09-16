export default function LookVisual({ item, className = '' }) {
  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-b ${item.tone} ${className}`}
      role="img"
      aria-label={`${item.name} — ${item.category}`}
    >
      <div className="absolute inset-0 opacity-[0.05] mix-blend-multiply [background-image:repeating-linear-gradient(180deg,#141311_0,#141311_1px,transparent_1px,transparent_16px)]" />
      <div className="absolute left-1/2 top-[18%] -translate-x-1/2 w-[28%] h-[54%] border border-ink/15" />
      <span className="absolute bottom-4 left-4 text-[10px] tracking-wide2 uppercase text-ink/70 bg-bone/70 px-2.5 py-1">
        {item.category}
      </span>
    </div>
  )
}
