import {
  ArrowRight,
  BedDouble,
  Headphones,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Container } from "./container";

const features = [
  {
    number: "01",
    icon: BedDouble,
    title: "Handpicked Hotels",
    copy: "Stay at the finest places to relax.",
  },
  {
    number: "02",
    icon: Users,
    title: "Expert Guides",
    copy: "Local experts to guide your journey.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Best Price Guarantee",
    copy: "We match the best prices for you.",
  },
  {
    number: "04",
    icon: Headphones,
    title: "24/7 Support",
    copy: "We're here for you anytime, anywhere.",
  },
];

export function FeatureStrip() {
  return (
    <section className="py-14 lg:py-20">
      <Container>
        <div className="reveal grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ number, icon: Icon, title, copy }) => (
            <article
              key={title}
              className="group relative isolate flex flex-col overflow-hidden rounded-3xl border border-ink/8 bg-[linear-gradient(180deg,rgba(23,21,15,0.025),rgba(23,21,15,0.005))] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/35 hover:shadow-[0_26px_60px_-34px_rgba(23,21,15,0.5)]"
            >
              {/* Warm glow that blooms in from the corner on hover */}
              <span
                aria-hidden
                className="pointer-events-none absolute -top-16 -right-12 -z-10 size-44 rounded-full bg-gold/25 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
              />
              {/* Hairline shine along the top edge */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(180,136,63,0.6),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
              {/* Editorial numeral, paired opposite the icon */}
              <span
                aria-hidden
                className="pointer-events-none absolute top-7 right-7 font-display text-[34px] leading-none text-ink/15 transition-colors duration-500 group-hover:text-gold/50"
              >
                {number}
              </span>

              <span className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-gold/25 to-gold/5 text-gold ring-1 ring-gold/20 transition-transform duration-300 ring-inset group-hover:scale-105">
                <Icon className="size-5" strokeWidth={1.5} />
              </span>

              <h3 className="mt-7 font-display text-[19px] text-ink">
                {title}
              </h3>
              <p className="mt-2 max-w-[24ch] text-[13px] leading-relaxed text-muted">
                {copy}
              </p>

              <span className="mt-auto inline-flex items-center gap-1.5 pt-8 text-[12px] font-medium text-ink/40 transition-colors duration-300 group-hover:text-gold">
                Learn more
                <ArrowRight
                  className="size-3.5 transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={2}
                />
              </span>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
