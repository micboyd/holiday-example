import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/container";
import { formatGBP, prints } from "@/lib/prints";

export const metadata = {
  title: "Prints — Michael Boyd",
  description: "Fine art landscape prints, made by hand in small editions.",
};

export default function PrintsPage() {
  return (
    <main className="pt-14 pb-16 lg:pt-20 lg:pb-24">
      <Container>
        <p className="text-[11px] font-medium tracking-[0.2em] text-gold uppercase">
          Hand-finished
        </p>
        <h1 className="mt-3 font-display text-4xl font-normal tracking-[-0.01em] text-ink lg:text-[46px]">
          Prints
        </h1>
        <p className="mt-4 max-w-[54ch] text-[15px] leading-relaxed text-muted">
          Every print is made to order on Hahnemühle paper, signed, and shipped
          rolled or framed. Sizes and framing are chosen on each print.
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {prints.map((print) => (
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
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
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
                <h2 className="mt-2 font-display text-xl text-ink">
                  {print.title}
                </h2>
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
    </main>
  );
}
