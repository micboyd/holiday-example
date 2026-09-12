import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Plane } from "lucide-react";
import { images } from "@/lib/images";
import { Container } from "./container";

export function Hero() {
  return (
    <section className="pt-1 lg:pt-2">
      <Container>
        <div className="relative isolate overflow-hidden rounded-[28px]">
          <Image
            src={images.hero}
            alt="Alpine lake framed by a mountain village"
            fill
            priority
            sizes="(min-width: 1280px) 1200px, 100vw"
            className="-z-10 object-cover"
          />
          {/* Scrim: dark enough on the left for white type, clear on the right. */}
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgba(17,15,11,0.84)_0%,rgba(17,15,11,0.58)_34%,rgba(17,15,11,0.06)_74%)]" />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,rgba(17,15,11,0.6)_0%,transparent_42%)]" />

          <div className="px-6 pt-20 pb-20 sm:px-10 lg:px-12 lg:pt-24 lg:pb-24">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[12px] text-white/90 backdrop-blur-md">
              <Plane className="size-3.5 -rotate-45" strokeWidth={1.75} />
              It&apos;s time to explore
            </span>

            <h1 className="mt-7 font-display text-[52px] leading-[1.02] font-normal tracking-[-0.01em] text-white sm:text-[66px] lg:text-[86px]">
              Explore
              <br />
              the <span className="text-gold italic">World</span>
            </h1>

            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-white/75">
              Discover breathtaking destinations, unforgettable experiences, and
              memories that last a lifetime.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="#"
                className="group inline-flex items-center gap-3 rounded-full bg-cream py-2 pr-2 pl-7 text-sm font-medium text-ink transition-all hover:shadow-[0_12px_30px_-12px_rgba(250,248,244,0.6)]"
              >
                Explore Now
                <span className="grid size-9 place-items-center rounded-full bg-ink text-cream transition-transform group-hover:translate-x-0.5">
                  <ArrowRight className="size-4" strokeWidth={2} />
                </span>
              </Link>
              <Link
                href="#"
                className="rounded-full border border-white/30 px-7 py-3.5 text-sm font-medium text-white backdrop-blur-md transition-colors hover:bg-white/10"
              >
                View experiences
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
