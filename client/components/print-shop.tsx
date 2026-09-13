import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Frame, Ruler } from "lucide-react";
import { formatGBP } from "@/lib/prints";
import { prints as catalogue } from "@/lib/prints";
import { Container } from "./container";

const featured = catalogue.slice(0, 3);

export function PrintShop() {
  return (
    <section className="pb-16 lg:pb-24">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[11px] font-medium tracking-[0.2em] text-gold uppercase">
              Hand-finished
            </p>
            <h2 className="mt-3 font-display text-4xl font-normal tracking-[-0.01em] text-ink lg:text-[42px]">
              Prints
            </h2>
          </div>
          <Link
            href="/prints"
            className="group flex items-center gap-3 text-sm text-ink/80 transition-colors hover:text-ink"
          >
            Browse all prints
            <span className="grid size-9 place-items-center rounded-full border border-ink/20 transition-all group-hover:border-ink group-hover:bg-ink group-hover:text-cream">
              <ArrowRight className="size-4" strokeWidth={1.75} />
            </span>
          </Link>
        </div>

        <div className="reveal mt-10 grid gap-5 md:grid-cols-3">
          {featured.map((print) => (
            <Link
              key={print.slug}
              href={`/prints/${print.slug}`}
              className="group flex flex-col overflow-hidden rounded-3xl border border-ink/8 bg-ink/[0.015] transition-all duration-300 hover:-translate-y-1 hover:border-ink/12 hover:shadow-[0_26px_60px_-34px_rgba(23,21,15,0.5)]"
            >
              <div className="relative aspect-[3/2] overflow-hidden">
                <Image
                  src={print.image}
                  alt={print.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 rounded-full bg-cream px-3 py-1.5 text-[11px] font-medium text-ink">
                  {print.edition}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="text-[11px] tracking-[0.14em] text-gold uppercase">
                  {print.place}
                </p>
                <h3 className="mt-2 font-display text-xl text-ink">
                  {print.title}
                </h3>

                <div className="mt-4 flex items-center gap-5 text-[12px] text-muted">
                  <span className="inline-flex items-center gap-1.5 tabular-nums">
                    <Ruler className="size-3.5" strokeWidth={1.5} />
                    {print.sizes[0].label}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Frame className="size-3.5" strokeWidth={1.5} />
                    Cotton rag
                  </span>
                </div>

                <div className="mt-6 flex items-end justify-between border-t border-ink/8 pt-5">
                  <p className="text-[12px] text-muted">
                    from{" "}
                    <span className="font-display text-xl text-ink tabular-nums">
                      {formatGBP(print.sizes[0].price)}
                    </span>
                  </p>
                  <span className="grid size-9 place-items-center rounded-full border border-ink/15 text-ink transition-all group-hover:border-ink group-hover:bg-ink group-hover:text-cream">
                    <ArrowRight className="size-4" strokeWidth={1.75} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
