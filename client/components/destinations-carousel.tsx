"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { destinations } from "@/lib/destinations";

export function DestinationsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  // Track scroll position so the arrows can disable at each end.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const update = () => {
      const { scrollLeft, scrollWidth, clientWidth } = track;
      setAtStart(scrollLeft < 8);
      setAtEnd(scrollLeft + clientWidth >= scrollWidth - 8);
    };
    update();
    track.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      track.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scrollByPage = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({
      left: direction * Math.round(track.clientWidth * 0.8),
      behavior: "smooth",
    });
  };

  return (
    <div className="relative min-w-0">
      <div
        ref={trackRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto"
      >
        {destinations.map((destination) => (
          <Link
            key={destination.name}
            href="#"
            className="group/card relative aspect-[4/5] w-[190px] shrink-0 snap-start overflow-hidden rounded-xl bg-sand ring-1 ring-ink/5 transition-shadow duration-300 hover:shadow-[0_16px_30px_-18px_rgba(23,21,15,0.55)]"
          >
            <Image
              src={destination.image}
              alt={destination.name}
              fill
              sizes="190px"
              className="object-cover transition-transform duration-500 group-hover/card:scale-110"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(17,15,11,0.9)_0%,rgba(17,15,11,0)_68%)]" />
            <div className="absolute inset-x-0 bottom-0 p-3.5">
              <p className="font-display text-[15px] leading-none text-white">
                {destination.name}
              </p>
              <p className="mt-1.5 text-[11px] text-white/60 tabular-nums">
                ★ {destination.rating} ({destination.reviews})
              </p>
            </div>
          </Link>
        ))}
      </div>

      <button
        type="button"
        onClick={() => scrollByPage(-1)}
        disabled={atStart}
        aria-label="Previous destinations"
        className="absolute top-1/2 -left-3 grid size-9 -translate-y-1/2 place-items-center rounded-full border border-ink/8 bg-white text-ink shadow-[0_8px_20px_-8px_rgba(23,21,15,0.45)] transition-opacity disabled:pointer-events-none disabled:opacity-0"
      >
        <ChevronLeft className="size-4" strokeWidth={2} />
      </button>
      <button
        type="button"
        onClick={() => scrollByPage(1)}
        disabled={atEnd}
        aria-label="Next destinations"
        className="absolute top-1/2 -right-3 grid size-9 -translate-y-1/2 place-items-center rounded-full border border-ink/8 bg-white text-ink shadow-[0_8px_20px_-8px_rgba(23,21,15,0.45)] transition-opacity disabled:pointer-events-none disabled:opacity-0"
      >
        <ChevronRight className="size-4" strokeWidth={2} />
      </button>
    </div>
  );
}
