import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Star, Users } from "lucide-react";
import { images } from "@/lib/images";
import { Container } from "./container";

const trips = [
  {
    name: "Aegean Island Hopping",
    place: "Santorini & the Cyclades",
    image: images.santorini,
    days: "8 days",
    group: "Max 12",
    rating: "4.9",
    price: "£1,840",
    tag: "Best seller",
  },
  {
    name: "Temples & Rice Terraces",
    place: "Ubud, Bali",
    image: images.bali,
    days: "10 days",
    group: "Max 10",
    rating: "4.8",
    price: "£1,460",
    tag: null,
  },
  {
    name: "Alpine Lakes & Passes",
    place: "Swiss & Italian Alps",
    image: images.alps,
    days: "6 days",
    group: "Max 8",
    rating: "4.9",
    price: "£2,120",
    tag: "New",
  },
];

export function FeaturedTrips() {
  return (
    <section className="pb-16 lg:pb-24">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[11px] font-medium tracking-[0.2em] text-gold uppercase">
              Curated journeys
            </p>
            <h2 className="mt-3 font-display text-4xl font-normal tracking-[-0.01em] text-ink lg:text-[42px]">
              Featured trips
            </h2>
          </div>
          <Link
            href="#"
            className="group flex items-center gap-3 text-sm text-ink/80 transition-colors hover:text-ink"
          >
            See all trips
            <span className="grid size-9 place-items-center rounded-full border border-ink/20 transition-all group-hover:border-ink group-hover:bg-ink group-hover:text-cream">
              <ArrowRight className="size-4" strokeWidth={1.75} />
            </span>
          </Link>
        </div>

        <div className="reveal mt-10 grid gap-5 md:grid-cols-3">
          {trips.map((trip) => (
            <article
              key={trip.name}
              className="group flex flex-col overflow-hidden rounded-3xl border border-ink/8 bg-ink/[0.015] transition-all duration-300 hover:-translate-y-1 hover:border-ink/12 hover:shadow-[0_26px_60px_-34px_rgba(23,21,15,0.5)]"
            >
              <div className="relative aspect-[3/2] overflow-hidden">
                <Image
                  src={trip.image}
                  alt={trip.place}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {trip.tag && (
                  <span className="absolute top-4 left-4 rounded-full bg-cream px-3 py-1.5 text-[11px] font-medium text-ink">
                    {trip.tag}
                  </span>
                )}
                <span className="absolute top-4 right-4 inline-flex items-center gap-1 rounded-full bg-ink/45 px-2.5 py-1.5 text-[11px] font-medium text-white tabular-nums backdrop-blur-md">
                  <Star className="size-3 fill-gold text-gold" />
                  {trip.rating}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="text-[11px] tracking-[0.14em] text-gold uppercase">
                  {trip.place}
                </p>
                <h3 className="mt-2 font-display text-xl text-ink">
                  {trip.name}
                </h3>

                <div className="mt-4 flex items-center gap-5 text-[12px] text-muted">
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays className="size-3.5" strokeWidth={1.5} />
                    {trip.days}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Users className="size-3.5" strokeWidth={1.5} />
                    {trip.group}
                  </span>
                </div>

                <div className="mt-6 flex items-end justify-between border-t border-ink/8 pt-5">
                  <p className="text-[12px] text-muted">
                    from{" "}
                    <span className="font-display text-xl text-ink tabular-nums">
                      {trip.price}
                    </span>
                  </p>
                  <span className="grid size-9 place-items-center rounded-full border border-ink/15 text-ink transition-all group-hover:border-ink group-hover:bg-ink group-hover:text-cream">
                    <ArrowRight className="size-4" strokeWidth={1.75} />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
