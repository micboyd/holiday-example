import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Plane } from "lucide-react";
import { images } from "@/lib/images";
import { Container } from "./container";

export function PromoBanner() {
  return (
    <section className="pb-16 lg:pb-24">
      <Container>
        <div className="reveal relative isolate overflow-hidden rounded-[28px]">
          <Image
            src={images.promo}
            alt="Traveler looking out over misty mountains"
            fill
            sizes="(min-width: 1280px) 1200px, 100vw"
            className="-z-10 object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgba(30,42,28,0.96)_0%,rgba(30,42,28,0.78)_42%,rgba(30,42,28,0.2)_88%)]" />

          {/* Decorative flight path */}
          <svg
            aria-hidden
            viewBox="0 0 400 200"
            className="absolute right-20 bottom-8 hidden h-44 w-96 text-white/40 lg:block"
          >
            <path
              d="M10 180 C 90 120, 150 60, 300 26"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="5 8"
              strokeLinecap="round"
            />
          </svg>
          <Plane
            className="absolute top-14 right-32 hidden size-10 -rotate-12 text-white lg:block"
            strokeWidth={1.25}
          />

          <div className="px-8 py-16 lg:px-14 lg:py-24">
            <span className="inline-flex items-center rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-[12px] font-medium text-gold backdrop-blur-md">
              Limited Time Offer
            </span>

            <h2 className="mt-6 font-display text-[42px] leading-[1.05] font-normal tracking-[-0.01em] text-white lg:text-[58px]">
              Get up to <span className="text-gold">30%</span> OFF
            </h2>
            <p className="mt-3 text-lg text-white/80">on your next adventure</p>

            <Link
              href="#"
              className="group mt-10 inline-flex items-center gap-3 rounded-full bg-cream py-2 pr-2 pl-7 text-sm font-medium text-ink transition-all hover:shadow-[0_12px_30px_-12px_rgba(250,248,244,0.5)]"
            >
              Explore Deals
              <span className="grid size-9 place-items-center rounded-full bg-ink text-cream transition-transform group-hover:translate-x-0.5">
                <ArrowRight className="size-4" strokeWidth={2} />
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
