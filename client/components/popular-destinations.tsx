import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Star } from "lucide-react";
import { destinations } from "@/lib/destinations";
import { Container } from "./container";

const layout = [
  {
    className: "lg:col-span-2 lg:row-span-2",
    sizes: "(min-width: 1024px) 50vw, 100vw",
    feature: true,
  },
  { className: "", sizes: "(min-width: 1024px) 25vw, 100vw", feature: false },
  { className: "", sizes: "(min-width: 1024px) 25vw, 100vw", feature: false },
  {
    className: "lg:col-span-2",
    sizes: "(min-width: 1024px) 50vw, 100vw",
    feature: false,
  },
];

export function PopularDestinations() {
  return (
    <section className="pb-16 lg:pb-24">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[11px] font-medium tracking-[0.2em] text-gold uppercase">
              Explore the best
            </p>
            <h2 className="mt-3 font-display text-4xl font-normal tracking-[-0.01em] text-ink lg:text-[42px]">
              Popular Destinations
            </h2>
          </div>

          <Link
            href="#"
            className="group flex items-center gap-3 text-sm text-ink/80 transition-colors hover:text-ink"
          >
            View all destinations
            <span className="grid size-9 place-items-center rounded-full border border-ink/20 transition-all group-hover:border-ink group-hover:bg-ink group-hover:text-cream">
              <ArrowRight className="size-4" strokeWidth={1.75} />
            </span>
          </Link>
        </div>

        {/* Bento: one tall feature card beside a 2x2 of smaller ones. */}
        <div className="reveal mt-10 grid gap-4 sm:grid-cols-2 lg:h-[640px] lg:grid-cols-4 lg:grid-rows-2">
          {destinations.map((destination, index) => (
            <article
              key={destination.name}
              className={`group relative aspect-[4/5] overflow-hidden rounded-3xl bg-sand lg:aspect-auto lg:h-full ${layout[index].className}`}
            >
              <Image
                src={destination.image}
                alt={destination.name}
                fill
                sizes={layout[index].sizes}
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(17,15,11,0.92)_0%,rgba(17,15,11,0.35)_40%,rgba(17,15,11,0)_72%)]" />

              <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-ink/45 px-3 py-1.5 text-[11px] font-medium text-white backdrop-blur-md">
                <MapPin className="size-3" strokeWidth={2} />
                {destination.country}
              </span>

              <span className="absolute top-4 right-4 grid size-9 translate-y-1 place-items-center rounded-full bg-cream text-ink opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <ArrowRight className="size-4 -rotate-45" strokeWidth={2} />
              </span>

              <div className="absolute inset-x-0 bottom-0 p-5 text-white lg:p-6">
                <h3
                  className={`font-display font-normal ${
                    layout[index].feature ? "text-2xl lg:text-3xl" : "text-lg"
                  }`}
                >
                  {destination.name}
                </h3>
                <p className="mt-2 max-w-[34ch] text-[12px] leading-snug text-white/75">
                  {destination.copy}
                </p>
                <p className="mt-3 flex items-center gap-1.5 text-[12px] tabular-nums">
                  <Star className="size-3.5 fill-gold text-gold" />
                  <span className="font-medium">{destination.rating}</span>
                  <span className="text-white/60">({destination.reviews})</span>
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
