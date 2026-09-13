import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { Container } from "@/components/container";
import { PrintConfigurator } from "@/components/print-configurator";
import { findPrint, prints } from "@/lib/prints";

export function generateStaticParams() {
  return prints.map((print) => ({ slug: print.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/prints/[slug]">) {
  const { slug } = await params;
  const print = findPrint(slug);
  return {
    title: print ? `${print.title} — Michael Boyd` : "Print — Michael Boyd",
  };
}

export default async function PrintPage({
  params,
}: PageProps<"/prints/[slug]">) {
  const { slug } = await params;
  const print = findPrint(slug);
  if (!print) notFound();

  return (
    <main className="pt-8 pb-16 lg:pt-10 lg:pb-24">
      <Container>
        <Link
          href="/prints"
          className="inline-flex items-center gap-1.5 text-[13px] text-muted transition-colors hover:text-ink"
        >
          <ChevronLeft className="size-4" strokeWidth={2} />
          All prints
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-sand ring-1 ring-ink/5">
            <Image
              src={print.image}
              alt={print.title}
              fill
              priority
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-[11px] font-medium tracking-[0.2em] text-gold uppercase">
              {print.series} · {print.year}
            </p>
            <h1 className="mt-3 font-display text-4xl font-normal tracking-[-0.01em] text-ink lg:text-[42px]">
              {print.title}
            </h1>
            <p className="mt-3 text-[13px] text-muted">{print.place}</p>

            <p className="mt-6 max-w-[52ch] text-[15px] leading-relaxed text-muted">
              {print.note}
            </p>

            <p className="mt-5 inline-flex rounded-full border border-ink/10 px-3.5 py-1.5 text-[12px] text-ink">
              {print.edition} · signed
            </p>

            <PrintConfigurator
              slug={print.slug}
              title={print.title}
              image={print.image}
              sizes={print.sizes}
            />
          </div>
        </div>
      </Container>
    </main>
  );
}
