import { Quote, Star } from "lucide-react";
import { Container } from "./container";

const reviews = [
  {
    quote:
      "Every detail was handled before we noticed it needed handling. We just turned up and travelled.",
    name: "Priya N.",
    trip: "Aegean Island Hopping",
  },
  {
    quote:
      "Our guide in Ubud grew up two villages away. That's the difference — we saw the place, not the tour.",
    name: "Tom & Rachel",
    trip: "Temples & Rice Terraces",
  },
  {
    quote:
      "A flight was cancelled at midnight and someone answered on the second ring. Rebooked before morning.",
    name: "Marcus L.",
    trip: "Alpine Lakes & Passes",
  },
];

export function Testimonials() {
  return (
    <section className="bg-blush py-16 lg:py-24">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[11px] font-medium tracking-[0.2em] text-gold uppercase">
              Traveler stories
            </p>
            <h2 className="mt-3 font-display text-4xl font-normal tracking-[-0.01em] text-ink lg:text-[42px]">
              Why they come back
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="size-4 fill-gold text-gold" />
              ))}
            </div>
            <p className="text-[13px] text-muted">
              <span className="font-medium text-ink tabular-nums">4.9</span>{" "}
              from 6,120 reviews
            </p>
          </div>
        </div>

        <div className="reveal mt-10 grid gap-5 md:grid-cols-3">
          {reviews.map((review) => (
            <figure
              key={review.name}
              className="relative flex flex-col rounded-3xl border border-ink/6 bg-white/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:bg-white hover:shadow-[0_26px_60px_-34px_rgba(23,21,15,0.5)]"
            >
              <Quote
                className="size-7 text-gold/35"
                strokeWidth={1.25}
                aria-hidden
              />
              <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-ink/85">
                {review.quote}
              </blockquote>
              <figcaption className="mt-7 border-t border-ink/8 pt-5">
                <p className="text-sm font-medium text-ink">{review.name}</p>
                <p className="mt-1 text-[12px] text-muted">{review.trip}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
