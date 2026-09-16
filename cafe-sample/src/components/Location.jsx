import { MapPin, Clock, MessageCircle } from 'lucide-react'
import Reveal from './Reveal.jsx'
import Button from './Button.jsx'

export default function Location() {
  return (
    <section id="location" className="py-24 sm:py-28 border-t border-espresso/10">
      <div className="container-cafe grid lg:grid-cols-[1fr_1fr] gap-14">
        <Reveal>
          <div>
            <p className="eyebrow mb-4">Visit Us</p>
            <h2 className="font-display font-medium text-[clamp(1.9rem,3.6vw,2.9rem)] leading-[1.1] max-w-md">
              Find us on the corner.
            </h2>

            <div className="mt-10 flex flex-col gap-6 max-w-sm">
              <div className="flex items-start gap-3">
                <MapPin size={18} strokeWidth={1.5} className="text-clay mt-0.5" />
                <p className="text-bark/80 text-[15px] leading-relaxed">
                  12 Market Street<br />Your City, State 00000
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={18} strokeWidth={1.5} className="text-clay mt-0.5" />
                <div className="text-bark/80 text-[15px] leading-relaxed">
                  <p>Mon – Fri: 7:00am – 5:00pm</p>
                  <p>Sat – Sun: 8:00am – 4:00pm</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MessageCircle size={18} strokeWidth={1.5} className="text-clay mt-0.5" />
                <p className="text-bark/80 text-[15px] leading-relaxed">
                  Message us anytime on WhatsApp for orders or reservations.
                </p>
              </div>
            </div>

            <div className="mt-10">
              <Button href="https://wa.me/10000000000" variant="primary">
                Order on WhatsApp
              </Button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="w-full aspect-[4/3] bg-gradient-to-br from-sand to-clay/60 flex items-center justify-center border border-espresso/10">
            <span className="text-[11px] tracking-wide2 uppercase text-bark/70 bg-paper/80 px-3 py-1.5">
              Map Placeholder
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
