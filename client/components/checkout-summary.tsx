"use client";

import Image from "next/image";
import { shippingFor, subtotalOf, useCart } from "@/lib/cart";
import { formatGBP } from "@/lib/prints";

export function CheckoutSummary() {
  const lines = useCart();
  const subtotal = subtotalOf(lines);
  const shipping = shippingFor(subtotal);
  const total = subtotal + shipping;

  return (
    <div className="rounded-3xl border border-ink/8 bg-ink/[0.015] p-7">
      <h2 className="font-display text-xl text-ink">Your order</h2>

      {lines.length === 0 ? (
        <p className="mt-5 text-[13px] text-muted">
          Your basket is empty — there is nothing to check out.
        </p>
      ) : (
        <ul className="mt-6 space-y-5">
          {lines.map((line) => (
            <li key={line.id} className="flex gap-4">
              <div className="relative aspect-square w-16 shrink-0 overflow-hidden rounded-lg bg-sand">
                <Image
                  src={line.image}
                  alt={line.title}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[14px] font-medium text-ink">{line.title}</p>
                <p className="mt-0.5 text-[12px] text-muted">
                  {line.size} · {line.frame}
                </p>
                <p className="mt-1 text-[12px] text-muted tabular-nums">
                  Qty {line.quantity}
                </p>
              </div>
              <p className="text-[14px] text-ink tabular-nums">
                {formatGBP(line.unit * line.quantity)}
              </p>
            </li>
          ))}
        </ul>
      )}

      <dl className="mt-7 space-y-3 border-t border-ink/10 pt-5 text-[14px]">
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
    </div>
  );
}
