import { forwardRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

/**
 * Renders as a <Link> when `to` is given, an <a> when `href` is given,
 * otherwise a <button>. Keeps one visual language for every CTA on the site.
 */
const Button = forwardRef(function Button(
  { children, to, href, onClick, type = 'button', variant = 'primary', className = '', ...rest },
  ref
) {
  const base =
    'group inline-flex items-center gap-2.5 text-[13px] font-medium tracking-wide2 uppercase transition-all duration-500 ease-premium focus-visible:outline-none'

  const styles = {
    primary:
      'bg-ink text-ivory px-7 py-4 hover:bg-moss-dark rounded-none',
    outline:
      'border border-ink/70 text-ink px-7 py-4 hover:border-ink hover:bg-ink hover:text-ivory rounded-none',
    ghost: 'text-ink px-0 py-0 underline-grow',
  }

  const content = (
    <>
      <span>{children}</span>
      {variant !== 'ghost' && (
        <ArrowUpRight
          size={16}
          strokeWidth={1.75}
          className="transition-transform duration-500 ease-premium group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      )}
    </>
  )

  const classes = `${base} ${styles[variant]} ${className}`

  if (to) {
    return (
      <Link ref={ref} to={to} className={classes} {...rest}>
        {content}
      </Link>
    )
  }

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
