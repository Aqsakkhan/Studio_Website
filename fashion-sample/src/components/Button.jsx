import { forwardRef } from 'react'
import { ArrowUpRight } from 'lucide-react'

const Button = forwardRef(function Button(
  { children, href, onClick, type = 'button', variant = 'primary', className = '', ...rest },
  ref
) {
  const base =
    'group inline-flex items-center gap-2.5 text-[12px] font-medium tracking-wide2 uppercase transition-all duration-500 ease-premium focus-visible:outline-none'

  const styles = {
    primary: 'bg-ink text-bone px-7 py-4 hover:bg-camelDark rounded-none',
    outline: 'border border-ink/60 text-ink px-7 py-4 hover:border-ink hover:bg-ink hover:text-bone rounded-none',
    ghost: 'text-ink px-0 py-0 underline-grow',
  }

  const content = (
    <>
      <span>{children}</span>
      {variant !== 'ghost' && (
        <ArrowUpRight
          size={15}
          strokeWidth={1.5}
          className="transition-transform duration-500 ease-premium group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      )}
    </>
  )

  const classes = `${base} ${styles[variant]} ${className}`

  if (href) {
    return (
      <a ref={ref} href={href} className={classes} {...rest}>
        {content}
      </a>
    )
  }

  return (
    <button ref={ref} type={type} onClick={onClick} className={classes} {...rest}>
      {content}
    </button>
  )
})

export default Button
