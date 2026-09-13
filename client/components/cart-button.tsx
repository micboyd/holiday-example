"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { countItems, useCart } from "@/lib/cart";

export function CartButton() {
  const count = countItems(useCart());

  return (
    <Link
      href="/basket"
      aria-label={`Basket, ${count} ${count === 1 ? "item" : "items"}`}
      className="relative grid size-10 place-items-center rounded-full bg-ink text-cream transition-colors hover:bg-ink/85"
    >
      <ShoppingBag className="size-[17px]" strokeWidth={1.75} />
      {count > 0 && (
        <span className="absolute -top-1 -right-1 grid size-[19px] place-items-center rounded-full bg-gold text-[10px] font-semibold text-white tabular-nums ring-2 ring-white">
          {count}
        </span>
      )}
    </Link>
  );
}
