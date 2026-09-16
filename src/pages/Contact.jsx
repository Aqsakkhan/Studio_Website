import { useState } from 'react'
import { Mail, MessageCircle, Instagram, Linkedin, CheckCircle2 } from 'lucide-react'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import Button from '../components/Button.jsx'

const needOptions = [
  'Website',
  'Short-form Video',
  'Long-form Video',
  'Copywriting',
  'AI Creative',
  'Social Media Content',
  'Complete Digital Presence',
  'Other',
]

const initialForm = {
  name: '',
  business: '',
  email: '',
  phone: '',
  need: needOptions[0],
  message: '',
}

const STUDIO_EMAIL = 'hello@studio-placeholder.com'

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const buildMailtoHref = () => {
    const subject = `New project enquiry — ${form.need}`
    const bodyLines = [
      `Name: ${form.name}`,
      `Business: ${form.business || '—'}`,
      `Email: ${form.email}`,
      `Phone / WhatsApp: ${form.phone || '—'}`,
      `What they need: ${form.need}`,
      '',
      'Message:',
      form.message || '—',
    ]
    return `mailto:${STUDIO_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      bodyLines.join('\n')
    )}`
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Frontend-only: no server call. We hand the enquiry off to the visitor's
    // own email client via a mailto link, and confirm on-screen.
    window.location.href = buildMailtoHref()
    setSubmitted(true)
  }

  return (
    <section className="pt-40 pb-28">
      <div className="container-studio grid lg:grid-cols-[1fr_1fr] gap-16">
        <div>
          <SectionHeading
            eyebrow="Get in Touch"
            headline="Let's create something great."
            copy="Tell us a little about your business and what you need."
            size="xl"
          />

          <Reveal delay={140} className="mt-12 flex flex-col gap-4">
            <a
              href={`mailto:${STUDIO_EMAIL}`}
              className="inline-flex items-center gap-3 text-sm text-charcoal/80 hover:text-ink underline-grow w-fit"
            >
              <Mail size={16} strokeWidth={1.5} /> {STUDIO_EMAIL}
            </a>
            <a
              href="https://wa.me/10000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-sm text-charcoal/80 hover:text-ink underline-grow w-fit"
            >
              <MessageCircle size={16} strokeWidth={1.5} /> WhatsApp
            </a>
            <a
              href="https://instagram.com/studio.placeholder"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-sm text-charcoal/80 hover:text-ink underline-grow w-fit"
            >
              <Instagram size={16} strokeWidth={1.5} /> Instagram
            </a>
            <a
              href="https://linkedin.com/company/studio-placeholder"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-sm text-charcoal/80 hover:text-ink underline-grow w-fit"
            >
              <Linkedin size={16} strokeWidth={1.5} /> LinkedIn
            </a>
          </Reveal>
        </div>

        <Reveal delay={80}>
          {submitted ? (
            <div className="border border-ink/12 p-10 flex flex-col items-start gap-4">
              <CheckCircle2 size={28} strokeWidth={1.5} className="text-moss" />
              <h3 className="font-display text-2xl text-ink">Thanks — that's on its way.</h3>
              <p className="text-charcoal/70 text-sm leading-relaxed max-w-sm">
                Your email client should have opened with your message ready to send. If it didn't,
                you can email us directly at{' '}
                <a href={`mailto:${STUDIO_EMAIL}`} className="underline-grow text-ink">
                  {STUDIO_EMAIL}
                </a>
                .
              </p>
              <Button variant="ghost" onClick={() => setSubmitted(false)}>
                Send another message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
              <div className="grid sm:grid-cols-2 gap-6">
                <Field label="Name" name="name" value={form.name} onChange={handleChange} required />
                <Field
                  label="Business Name"
                  name="business"
                  value={form.business}
                  onChange={handleChange}
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
                <Field
                  label="Phone / WhatsApp"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="need" className="text-[11px] tracking-wide2 uppercase text-stone">
                  What do you need?
                </label>
                <select
                  id="need"
                  name="need"
                  value={form.need}
                  onChange={handleChange}
                  className="bg-transparent border-b border-ink/20 py-3 text-ink text-[15px] focus-visible:border-ink transition-colors"
                >
                  {needOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-[11px] tracking-wide2 uppercase text-stone">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="bg-transparent border-b border-ink/20 py-3 text-ink text-[15px] resize-none focus-visible:border-ink transition-colors"
                  placeholder="A little about your business and what you're looking for."
                />
              </div>

              <Button type="submit" variant="primary" className="w-fit mt-2">
                Send Message
              </Button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}

function Field({ label, name, value, onChange, type = 'text', required = false }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-[11px] tracking-wide2 uppercase text-stone">
        {label}
        {required && <span className="text-moss"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="bg-transparent border-b border-ink/20 py-3 text-ink text-[15px] focus-visible:border-ink transition-colors"
      />
    </div>
  )
}
