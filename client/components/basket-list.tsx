"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Minus, Plus, X } from "lucide-react";
import { cart, shippingFor, subtotalOf, useCart } from "@/lib/cart";
import { formatGBP } from "@/lib/prints";

export function BasketList() {
  const lines = useCart();
  const subtotal = subtotalOf(lines);
  const shipping = shippingFor(subtotal);
  const total = subtotal + shipping;

  if (lines.length === 0) {
    return (
      <div className="rounded-3xl border border-ink/8 bg-ink/[0.015] p-12 text-center">
        <p className="font-display text-2xl text-ink">Your basket is empty</p>
        <p className="mt-2 text-[14px] text-muted">
          Nothing here yet — the prints are through this way.
        </p>
        <Link
          href="/prints"
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-ink/85"
        >
          Browse prints
          <ArrowRight className="size-4" strokeWidth={2} />
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-14">
      <ul className="divide-y divide-ink/8 border-y border-ink/8">
        {lines.map((line) => (
          <li key={line.id} className="flex gap-5 py-6">
            <div className="relative aspect-[4/3] w-28 shrink-0 overflow-hidden rounded-xl bg-sand sm:w-36">
              <Image
                src={line.image}
                alt={line.title}
                fill
                sizes="144px"
                className="object-cover"
              />
            </div>

            <div className="flex min-w-0 flex-1 flex-col">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="font-display text-lg text-ink">
                    {line.title}
                  </h2>
                  <p className="mt-1 text-[12px] text-muted">
                    {line.size} · {line.paper} · {line.frame}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => cart.remove(line.id)}
                  aria-label={`Remove ${line.title}`}
                  className="grid size-8 shrink-0 place-items-center rounded-full text-muted transition-colors hover:bg-ink/5 hover:text-ink"
                >
                  <X className="size-4" strokeWidth={2} />
                </button>
              </div>

              <div className="mt-auto flex items-end justify-between gap-4 pt-5">
                <div className="flex items-center gap-1 rounded-full border border-ink/12 p-1">
                  <button
                    type="button"
                    onClick={() => cart.adjust(line.id, -1)}
                    aria-label="Decrease quantity"
                    className="grid size-7 place-items-center rounded-full text-ink transition-colors hover:bg-ink/5 disabled:opacity-30"
                    disabled={line.quantity === 1}
                  >
                    <Minus className="size-3.5" strokeWidth={2} />
                  </button>
                  <span className="w-6 text-center text-[13px] text-ink tabular-nums">
                    {line.quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => cart.adjust(line.id, 1)}
                    aria-label="Increase quantity"
                    className="grid size-7 place-items-center rounded-full text-ink transition-colors hover:bg-ink/5"
                  >
                    <Plus className="size-3.5" strokeWidth={2} />
                  </button>
                </div>

                <p className="font-display text-lg text-ink tabular-nums">
                  {formatGBP(line.unit * line.quantity)}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <aside className="lg:sticky lg:top-28 lg:self-start">
        <div className="rounded-3xl border border-ink/8 bg-ink/[0.015] p-7">
          <h2 className="font-display text-xl text-ink">Summary</h2>

          <dl className="mt-6 space-y-3 text-[14px]">
            <div className="flex justify-between">
              <dt className="text-muted">Subtotal</dt>
              <dd className="text-ink tabular-nums">{formatGBP(subtotal)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted">Shipping</dt>
              <dd className="text-ink tabular-nums">
                {shipping === 0 ? "Free" : formatGBP(shipping)}
              </dd>
            </div>
          </dl>

          <div className="mt-5 flex items-end justify-between border-t border-ink/10 pt-5">
            <p className="text-[13px] text-muted">Total</p>
            <p className="font-display text-2xl text-ink tabular-nums">
              {formatGBP(total)}
            </p>
          </div>

          <Link
            href="/checkout"
            className="group mt-7 flex items-center justify-center gap-2 rounded-full bg-ink py-3.5 text-sm font-medium text-cream transition-colors hover:bg-ink/85"
          >
            Checkout
            <ArrowRight
              className="size-4 transition-transform group-hover:translate-x-0.5"
              strokeWidth={2}
            />
          </Link>

          <p className="mt-4 text-center text-[12px] text-muted">
            Free UK shipping over {formatGBP(400)}
          </p>
        </div>
      </aside>
    </div>
  );
}
