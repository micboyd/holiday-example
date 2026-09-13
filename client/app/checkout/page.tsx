import Link from "next/link";
import { ChevronLeft, Info, Lock } from "lucide-react";
import { Container } from "@/components/container";
import { CheckoutSummary } from "@/components/checkout-summary";
import { PlaceOrderButton } from "@/components/place-order-button";

export const metadata = { title: "Checkout — Michael Boyd" };

const field =
  "mt-1.5 w-full rounded-xl border border-ink/12 bg-white px-4 py-3 text-[14px] text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-ink/40";
const label = "block text-[12px] font-medium text-ink";

export default function CheckoutPage() {
  return (
    <main className="pt-8 pb-16 lg:pt-10 lg:pb-24">
      <Container>
        <Link
          href="/basket"
          className="inline-flex items-center gap-1.5 text-[13px] text-muted transition-colors hover:text-ink"
        >
          <ChevronLeft className="size-4" strokeWidth={2} />
          Back to basket
        </Link>

        <h1 className="mt-8 font-display text-4xl font-normal tracking-[-0.01em] text-ink lg:text-[46px]">
          Checkout
        </h1>

        <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-16">
          <form className="min-w-0">
            <section>
              <h2 className="font-display text-xl text-ink">Contact</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className={label} htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    className={field}
                  />
                </div>
              </div>
            </section>

            <section className="mt-10">
              <h2 className="font-display text-xl text-ink">Delivery</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div>
                  <label className={label} htmlFor="first-name">
                    First name
                  </label>
                  <input
                    id="first-name"
                    autoComplete="given-name"
                    className={field}
                  />
                </div>
                <div>
                  <label className={label} htmlFor="last-name">
                    Last name
                  </label>
                  <input
                    id="last-name"
                    autoComplete="family-name"
                    className={field}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className={label} htmlFor="address">
                    Address
                  </label>
                  <input
                    id="address"
                    autoComplete="street-address"
                    className={field}
                  />
                </div>
                <div>
                  <label className={label} htmlFor="city">
                    City
                  </label>
                  <input
                    id="city"
                    autoComplete="address-level2"
                    className={field}
                  />
                </div>
                <div>
                  <label className={label} htmlFor="postcode">
                    Postcode
                  </label>
                  <input
                    id="postcode"
                    autoComplete="postal-code"
                    className={field}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className={label} htmlFor="country">
                    Country
                  </label>
                  <input
                    id="country"
                    autoComplete="country-name"
                    defaultValue="United Kingdom"
                    className={field}
                  />
                </div>
              </div>
            </section>

            <section className="mt-10">
              <div className="flex items-center gap-2">
                <h2 className="font-display text-xl text-ink">Payment</h2>
                <Lock className="size-3.5 text-muted" strokeWidth={2} />
              </div>

              {/* This build takes no payments. Say so where someone would type a card. */}
              <p className="mt-4 flex items-start gap-2.5 rounded-xl border border-gold/35 bg-gold/[0.08] px-4 py-3 text-[12px] leading-relaxed text-ink/80">
                <Info
                  className="mt-0.5 size-4 shrink-0 text-gold"
                  strokeWidth={2}
                />
                <span>
                  <strong className="font-medium">Demo only.</strong> This
                  checkout is a static mock-up — nothing is sent anywhere and no
                  payment is taken. Please don&apos;t enter real card details.
                </span>
              </p>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className={label} htmlFor="card">
                    Card number
                  </label>
                  <input
                    id="card"
                    inputMode="numeric"
                    autoComplete="off"
                    placeholder="4242 4242 4242 4242"
                    className={field}
                  />
                </div>
                <div>
                  <label className={label} htmlFor="expiry">
                    Expiry
                  </label>
                  <input
                    id="expiry"
                    inputMode="numeric"
                    autoComplete="off"
                    placeholder="MM / YY"
                    className={field}
                  />
                </div>
                <div>
                  <label className={label} htmlFor="cvc">
                    Security code
                  </label>
                  <input
                    id="cvc"
                    inputMode="numeric"
                    autoComplete="off"
                    placeholder="123"
                    className={field}
                  />
                </div>
              </div>
            </section>

            <PlaceOrderButton />
          </form>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <CheckoutSummary />
          </aside>
        </div>
      </Container>
    </main>
  );
}
