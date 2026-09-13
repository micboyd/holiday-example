"use client";

import { useRouter } from "next/navigation";
import { cart, shippingFor, subtotalOf, useCart } from "@/lib/cart";
import { formatGBP } from "@/lib/prints";

export function PlaceOrderButton() {
  const router = useRouter();
  const lines = useCart();
  const total = subtotalOf(lines) + shippingFor(subtotalOf(lines));

  const placeOrder = () => {
    // Nothing is sent anywhere; emptying the basket mirrors what a real
    // confirmed order would do.
    cart.clear();
    router.push("/checkout/complete");
  };

  return (
    <button
      type="button"
      onClick={placeOrder}
      disabled={lines.length === 0}
      className="mt-10 flex w-full items-center justify-center rounded-full bg-ink py-4 text-sm font-medium text-cream transition-colors hover:bg-ink/85 disabled:cursor-not-allowed disabled:opacity-40"
    >
      {lines.length === 0
        ? "Basket is empty"
        : `Place order · ${formatGBP(total)}`}
    </button>
  );
}
