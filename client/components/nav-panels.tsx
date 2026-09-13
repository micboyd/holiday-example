import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { experiences } from "@/lib/experiences";
import { DestinationsCarousel } from "./destinations-carousel";
import { images } from "@/lib/images";

/** Intro column beside four photo cards — the Destinations panel. */
export function DestinationsPanel() {
  return (
    <div className="grid gap-6 lg:grid-cols-[230px_1fr]">
      <div className="flex flex-col justify-between lg:border-r lg:border-ink/8 lg:pr-6">
        <div>
          <p className="text-[10px] font-medium tracking-[0.2em] text-gold uppercase">
            Explore the best
          </p>
          <h3 className="mt-2.5 font-display text-[22px] leading-tight text-ink">
            Popular destinations
          </h3>
          <p className="mt-2 text-[12px] leading-relaxed text-muted">
            Over 120 places worldwide, handpicked by our local experts.
          </p>
        </div>
        <Link
          href="#"
          className="group/all mt-4 inline-flex items-center gap-1.5 text-[12px] font-medium text-gold"
        >
          View all destinations
          <ArrowRight
            className="size-3.5 transition-transform group-hover/all:translate-x-1"
            strokeWidth={2}
          />
        </Link>
      </div>

      <DestinationsCarousel />
    </div>
  );
}

/** A two-column link list beside a promoted image CTA. */
export function ExperiencesPanel() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_280px]">
      <div className="flex flex-col justify-between">
        <p className="px-2 pb-2 text-[10px] font-medium tracking-[0.2em] text-gold uppercase">
          Travel by interest
        </p>
        <ul className="grid gap-1 sm:grid-cols-2">
          {experiences.map(({ icon: Icon, title, copy }) => (
            <li key={title}>
              <Link
                href="#"
                className="flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-ink/[0.04]"
              >
                <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-gold/10 text-gold">
                  <Icon className="size-4" strokeWidth={1.5} />
                </span>
                <span>
                  <span className="block text-[13px] font-medium text-ink">
                    {title}
                  </span>
                  <span className="mt-0.5 block text-[11px] text-muted">
                    {copy}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="#"
          className="group/allexp mt-4 inline-flex items-center gap-1.5 px-2 text-[12px] font-medium text-gold"
        >
          View all experiences
          <ArrowRight
            className="size-3.5 transition-transform group-hover/allexp:translate-x-1"
            strokeWidth={2}
          />
        </Link>
      </div>

      <Link
        href="#"
        className="group/promo relative flex min-h-[276px] flex-col justify-end overflow-hidden rounded-xl bg-sand p-4 ring-1 ring-ink/5"
      >
        <Image
          src={images.promo}
          alt=""
          fill
          sizes="280px"
          className="object-cover transition-transform duration-500 group-hover/promo:scale-105"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(30,42,28,0.94)_0%,rgba(30,42,28,0.25)_74%)]" />
        <div className="relative">
          <p className="text-[10px] tracking-[0.16em] text-gold uppercase">
            Featured
          </p>
          <p className="mt-1.5 font-display text-[17px] leading-snug text-white">
            Guided treks in the Alps
          </p>
          <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-cream px-3.5 py-1.5 text-[11px] font-medium text-ink">
            Explore
            <ArrowRight
              className="size-3 transition-transform group-hover/promo:translate-x-0.5"
              strokeWidth={2}
            />
          </span>
        </div>
      </Link>
    </div>
  );
}
