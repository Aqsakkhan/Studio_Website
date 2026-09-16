import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import Reveal from './Reveal.jsx'
import Button from './Button.jsx'

const STORE_EMAIL = 'hello@boutique-placeholder.com'

export default function Contact() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Frontend-only — no server call. Hands off to the visitor's own mail app.
    window.location.href = `mailto:${STORE_EMAIL}?subject=${encodeURIComponent(
      'Newsletter signup'
    )}&body=${encodeURIComponent(`Please add me to the list: ${email}`)}`
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 sm:py-28 border-t border-ink/10 bg-ink text-bone">
      <div className="container-fb flex flex-col items-start gap-8">
        <Reveal as="h2" className="font-display font-medium leading-[1.05] text-[clamp(2rem,4.5vw,3.4rem)] max-w-lg">
          Be first to know what's next.
        </Reveal>
        <Reveal delay={100}>
          <p className="text-bone/70 max-w-sm text-[15px] leading-relaxed">
            Join the list for new arrivals, restocks and studio notes.
          </p>
        </Reveal>

        <Reveal delay={180} className="w-full max-w-md">
          {submitted ? (
            <div className="flex items-center gap-3 text-bone/90">
              <CheckCircle2 size={20} strokeWidth={1.5} className="text-camel" />
              <p className="text-sm">Thanks — check your mail app to confirm.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                required
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Email address"
                className="flex-1 bg-transparent border-b border-bone/30 py-3 text-bone placeholder:text-bone/40 focus-visible:border-bone transition-colors"
              />
              <Button type="submit" variant="outline" className="!border-bone/40 !text-bone hover:!bg-bone hover:!text-ink w-fit">
                Subscribe
              </Button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
