import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { images } from "@/lib/images";
import { Container } from "./container";

/**
 * Full-bleed hero: the frame runs edge to edge at roughly 70% of the viewport,
 * so the section below peeks and there is a cue to scroll. Type is anchored to
 * the bottom over a rising scrim. Sits below the header
 * rather than under it, so the nav keeps its dark text on a white bar — running
 * the photograph behind the nav would make legibility depend on scroll-driven
 * animation, which not every browser supports.
 */
export function Hero() {
  return (
    <section className="relative isolate flex min-h-[68svh] flex-col justify-end overflow-hidden lg:h-[70svh] lg:max-h-[760px] lg:min-h-[520px]">
      <Image
        src={images.hero}
        alt="The Quiraing under low cloud, Isle of Skye"
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,rgba(17,15,11,0.82)_0%,rgba(17,15,11,0.3)_48%,rgba(17,15,11,0.04)_100%)]" />

      <Container className="pt-24 pb-10 lg:pb-12">
        <p className="text-[11px] font-medium tracking-[0.22em] text-white/65 uppercase">
          Landscape photography
        </p>

        <h1 className="mt-5 font-display text-[54px] leading-[1.01] font-normal tracking-[-0.015em] text-white sm:text-[72px] lg:text-[96px]">
          Light on
          <br />
          the <span className="text-gold italic">Land</span>
        </h1>

        <p className="mt-7 max-w-md text-[15px] leading-relaxed text-white/75">
          Early starts, long walks, and the few minutes when a place finally
          shows itself. I&apos;ve been photographing landscapes for eight years.
        </p>

        <div className="mt-10 flex flex-wrap items-end justify-between gap-6">
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="#"
              className="group inline-flex items-center gap-3 rounded-full bg-cream py-2 pr-2 pl-7 text-sm font-medium text-ink transition-all hover:shadow-[0_12px_30px_-12px_rgba(250,248,244,0.6)]"
            >
              View the work
              <span className="grid size-9 place-items-center rounded-full bg-ink text-cream transition-transform group-hover:translate-x-0.5">
                <ArrowRight className="size-4" strokeWidth={2} />
              </span>
            </Link>
            <Link
              href="/prints"
              className="rounded-full border border-white/30 px-7 py-3.5 text-sm font-medium text-white backdrop-blur-md transition-colors hover:bg-white/10"
            >
              Print shop
            </Link>
          </div>

          {/* Frame credit, the way a print is captioned */}
          <p className="text-[11px] tracking-[0.08em] text-white/55">
            The Quiraing, Isle of Skye · 2024
          </p>
        </div>
      </Container>
    </section>
  );
}
