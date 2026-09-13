import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { destinations } from "@/lib/destinations";
import { Container } from "./container";

/**
 * Full-bleed strip of destination tiles.
 *
 * Desktop: panels share the width evenly and the hovered one expands — pure CSS
 * via a flex-grow transition, no JS.
 * Mobile: hover doesn't exist and six stacked rows ran to 1200px of scroll, so
 * it becomes a horizontal snap carousel instead.
 */
export function DestinationTiles() {
  return (
    <section className="pb-16 lg:pb-24">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4 pb-8">
          <div>
            <p className="text-[11px] font-medium tracking-[0.2em] text-gold uppercase">
              Where to next
            </p>
            <h2 className="mt-3 font-display text-4xl font-normal tracking-[-0.01em] text-ink lg:text-[42px]">
              Browse by place
            </h2>
          </div>
          <p className="max-w-[38ch] text-[13px] leading-relaxed text-muted">
            Six of the routes our travelers return to most. Swipe through, or
            hover to look closer.
          </p>
        </div>
      </Container>

      <div className="no-scrollbar reveal flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-px-6 px-6 md:h-[460px] md:snap-none md:gap-0 md:overflow-visible md:px-0 lg:h-[520px]">
        {destinations.slice(0, 6).map((destination) => (
          <Link
            key={destination.name}
            href="#"
            className="group relative aspect-[3/4] w-[78vw] shrink-0 snap-start overflow-hidden rounded-2xl transition-[flex-grow] duration-500 ease-out md:aspect-auto md:h-auto md:w-auto md:shrink md:grow md:rounded-none md:hover:grow-[2.4]"
          >
            <Image
              src={destination.image}
              alt={destination.name}
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(17,15,11,0.85)_0%,rgba(17,15,11,0.1)_60%)] transition-opacity duration-500 group-hover:opacity-90" />
            {/* Hairline seams between tiles */}
            <div className="absolute inset-y-0 left-0 hidden w-px bg-white/15 md:block" />

            <div className="absolute inset-x-0 bottom-0 p-6 text-white lg:p-7">
              <p className="text-[10px] font-medium tracking-[0.2em] text-white/70 uppercase">
                {destination.country}
              </p>
              <h3 className="mt-2 font-display text-2xl leading-tight">
                {destination.name}
              </h3>

              {/* Revealed as the panel expands */}
              <div className="grid grid-rows-[1fr] transition-all duration-500 md:grid-rows-[0fr] md:opacity-0 md:group-hover:grid-rows-[1fr] md:group-hover:opacity-100">
                <div className="overflow-hidden">
                  <p className="mt-2 max-w-[30ch] text-[13px] leading-relaxed text-white/75">
                    {destination.copy}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-cream px-4 py-2 text-[12px] font-medium text-ink">
                    View trips
                    <ArrowUpRight className="size-3.5" strokeWidth={2} />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
