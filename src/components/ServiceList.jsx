import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal.jsx'

export const services = [
  {
    number: '01',
    title: 'Website Development',
    description:
      'Modern, responsive websites designed around your business, your customers and your goals.',
  },
  {
    number: '02',
    title: 'Short-Form Video',
    description:
      'Scroll-stopping Reels and Shorts designed for Instagram, YouTube and digital campaigns.',
  },
  {
    number: '03',
    title: 'Long-Form Video',
    description:
      'Complete YouTube videos from idea and script to visuals, editing and final delivery.',
  },
  {
    number: '04',
    title: 'Copywriting',
    description: 'Clear, engaging words for websites, videos, social media and campaigns.',
  },
  {
    number: '05',
    title: 'AI Creative',
    description: 'AI-powered visuals and videos for products, campaigns and creative storytelling.',
  },
  {
    number: '06',
    title: 'Social Content',
    description:
      'Content ideas, reels, captions and creative concepts designed to keep your brand active online.',
  },
]

export default function ServiceList({ compact = false }) {
  const [activeIndex, setActiveIndex] = useState(null)

  return (
    <div role="list" className="border-t border-ink/12">
      {services.map((service, i) => (
        <Reveal key={service.number} delay={i * 60}>
          <div
            role="listitem"
            onMouseEnter={() => setActiveIndex(i)}
            onMouseLeave={() => setActiveIndex(null)}
            className="group border-b border-ink/12 py-8 sm:py-10 grid grid-cols-[auto_1fr_auto] items-center gap-6 sm:gap-10 transition-colors duration-500"
          >
            <span
              className={`font-display text-sm sm:text-base transition-colors duration-500 ${
                activeIndex === i ? 'text-moss' : 'text-stone'
              }`}
            >
              {service.number}
            </span>

            <div>
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-medium text-ink transition-transform duration-500 ease-premium group-hover:translate-x-1.5">
                {service.title}
              </h3>
              {!compact && (
                <p className="mt-2 max-w-lg text-charcoal/70 text-sm sm:text-[15px] leading-relaxed">
                  {service.description}
                </p>
              )}
            </div>

            <ArrowUpRight
              size={22}
              strokeWidth={1.5}
              className={`transition-all duration-500 ease-premium ${
                activeIndex === i ? 'text-moss translate-x-1 -translate-y-1' : 'text-stone'
              }`}
            />
          </div>
        </Reveal>
      ))}
    </div>
  )
}
