import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { images } from "@/lib/images";
import { Container } from "./container";

const facts = [
  { value: "2017", label: "Photographing since" },
  { value: "8", label: "Series published" },
  { value: "41", label: "Countries shipped to" },
];

export function About() {
  return (
    <section className="pb-16 lg:pb-24">
      <Container>
        <div className="reveal grid items-center gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:gap-16">
          {/* Replace with a portrait when there's one to use. */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-sand">
            <Image
              src={images.achtriochtan}
              alt=""
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-[11px] font-medium tracking-[0.2em] text-gold uppercase">
              About
            </p>
            <h2 className="mt-3 max-w-[18ch] font-display text-4xl leading-[1.1] font-normal tracking-[-0.01em] text-ink lg:text-[42px]">
              I photograph quiet places, slowly.
            </h2>

            <p className="mt-6 max-w-[52ch] text-[15px] leading-relaxed text-muted">
              Most of what I make comes from going back. The same valley, the
              same stretch of coast, until the weather finally does something
              worth photographing — usually on the fourth or fifth visit rather
              than the first.
            </p>
            <p className="mt-4 max-w-[52ch] text-[15px] leading-relaxed text-muted">
              Every print is made by hand in small editions, signed, and sent
              out flat or framed. If you want something at a size that
              isn&apos;t listed, just ask.
            </p>

            <dl className="mt-9 flex flex-wrap gap-x-12 gap-y-5 border-t border-ink/8 pt-7">
              {facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="sr-only">{fact.label}</dt>
                  <dd className="font-display text-2xl text-ink tabular-nums">
                    {fact.value}
                  </dd>
                  <p className="mt-1 text-[12px] text-muted">{fact.label}</p>
                </div>
              ))}
            </dl>

            <Link
              href="#"
              className="group mt-9 inline-flex items-center gap-3 rounded-full bg-ink py-2 pr-2 pl-7 text-sm font-medium text-cream transition-colors hover:bg-ink/85"
            >
              Get in touch
              <span className="grid size-9 place-items-center rounded-full bg-cream text-ink transition-transform group-hover:translate-x-0.5">
                <ArrowRight className="size-4" strokeWidth={2} />
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
