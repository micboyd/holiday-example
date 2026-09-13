import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/container";

export const metadata = { title: "Order confirmed — Michael Boyd" };

const steps = [
  {
    title: "Printed to order",
    copy: "Your print goes on the queue this week and is checked before it leaves the studio.",
  },
  {
    title: "Signed and packed",
    copy: "Signed on the reverse, then rolled in a tube or packed flat if framed.",
  },
  {
    title: "Tracked delivery",
    copy: "You'll get a tracking link by email, usually within 7–10 days.",
  },
];

export default function OrderCompletePage() {
  return (
    <main className="pt-16 pb-20 lg:pt-24 lg:pb-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="mx-auto grid size-14 place-items-center rounded-full bg-gold/15 text-gold">
            <Check className="size-6" strokeWidth={2} />
          </span>

          <h1 className="mt-7 font-display text-4xl font-normal tracking-[-0.01em] text-ink lg:text-[46px]">
            Thank you — your order is in.
          </h1>
          <p className="mt-4 text-[15px] leading-relaxed text-muted">
            A confirmation is on its way to your inbox. Reference{" "}
            <span className="font-medium text-ink">MB-4412</span>.
          </p>

          <p className="mt-6 inline-flex rounded-full border border-gold/35 bg-gold/[0.08] px-4 py-2 text-[12px] text-ink/75">
            Demo only — no order was placed and no payment was taken.
          </p>
        </div>

        <ol className="mx-auto mt-14 grid max-w-4xl gap-5 sm:grid-cols-3">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="rounded-3xl border border-ink/8 bg-ink/[0.015] p-7"
            >
              <span className="font-display text-[28px] text-ink/15 tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-3 font-display text-lg text-ink">
                {step.title}
              </h2>
              <p className="mt-2 text-[13px] leading-relaxed text-muted">
                {step.copy}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-14 text-center">
          <Link
            href="/prints"
            className="group inline-flex items-center gap-3 rounded-full bg-ink py-2 pr-2 pl-7 text-sm font-medium text-cream transition-colors hover:bg-ink/85"
          >
            Back to the prints
            <span className="grid size-9 place-items-center rounded-full bg-cream text-ink transition-transform group-hover:translate-x-0.5">
              <ArrowRight className="size-4" strokeWidth={2} />
            </span>
          </Link>
        </div>
      </Container>
    </main>
  );
}
