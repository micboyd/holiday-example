import { Quote } from "lucide-react";
import { Container } from "./container";

const words = [
  {
    quote:
      "It hangs where the afternoon light hits it, and it changes all day. That was the whole point of buying a print rather than a poster.",
    name: "Elena R.",
    detail: "Collector · Copenhagen",
  },
  {
    quote:
      "We commissioned three pieces for the lobby. The framing was immaculate and everything arrived when it was promised.",
    name: "Studio Avenir",
    detail: "Interior architects · Lyon",
  },
  {
    quote:
      "I've bought landscape prints before that looked flat on the wall. This one has depth in the shadows you can actually stand in front of.",
    name: "James O.",
    detail: "Collector · Melbourne",
  },
];

export function Testimonials() {
  return (
    <section className="bg-blush py-16 lg:py-24">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[11px] font-medium tracking-[0.2em] text-gold uppercase">
              Collectors &amp; clients
            </p>
            <h2 className="mt-3 font-display text-4xl font-normal tracking-[-0.01em] text-ink lg:text-[42px]">
              Where the work hangs
            </h2>
          </div>

          <p className="text-[13px] text-muted">
            Prints shipped to{" "}
            <span className="font-medium text-ink tabular-nums">41</span>{" "}
            countries
          </p>
        </div>

        <div className="reveal mt-10 grid gap-5 md:grid-cols-3">
          {words.map((entry) => (
            <figure
              key={entry.name}
              className="relative flex flex-col rounded-3xl border border-ink/6 bg-white/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:bg-white hover:shadow-[0_26px_60px_-34px_rgba(23,21,15,0.5)]"
            >
              <Quote
                className="size-7 text-gold/35"
                strokeWidth={1.25}
                aria-hidden
              />
              <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-ink/85">
                {entry.quote}
              </blockquote>
              <figcaption className="mt-7 border-t border-ink/8 pt-5">
                <p className="text-sm font-medium text-ink">{entry.name}</p>
                <p className="mt-1 text-[12px] text-muted">{entry.detail}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
