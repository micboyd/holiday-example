import Link from "next/link";
import { ArrowRight, Leaf } from "lucide-react";
import { Container } from "./container";
import { Logo } from "./logo";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "./social-icons";

const columns = [
  {
    heading: "Explore",
    links: ["Santorini", "Bali", "Swiss Alps", "Maldives", "All destinations"],
  },
  {
    heading: "Company",
    links: ["About us", "Our guides", "Journal", "Careers"],
  },
  {
    heading: "Help",
    links: ["Contact", "FAQs", "Booking terms", "Privacy"],
  },
];

const socials = [
  { Icon: InstagramIcon, label: "Instagram" },
  { Icon: FacebookIcon, label: "Facebook" },
  { Icon: YoutubeIcon, label: "YouTube" },
  { Icon: TwitterIcon, label: "X" },
];

export function SiteFooter() {
  return (
    <footer className="relative isolate overflow-hidden bg-ink text-cream">
      {/* Warm glow so the dark panel isn't flat */}
      <span
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-24 -z-10 size-[28rem] rounded-full bg-gold/15 blur-3xl"
      />

      <Container className="pt-16 pb-14 lg:pt-24 lg:pb-16">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-24">
          {/* The closing invitation, not a link dump */}
          <div>
            <p className="text-[11px] font-medium tracking-[0.2em] text-gold uppercase">
              Stay curious
            </p>
            <h2 className="mt-5 max-w-[15ch] font-display text-4xl leading-[1.08] font-normal tracking-[-0.01em] lg:text-[46px]">
              Where should we send you next?
            </h2>
            <p className="mt-5 max-w-[44ch] text-[14px] leading-relaxed text-cream/55">
              One letter a month — a place worth seeing, the right time to go,
              and what it honestly costs.
            </p>

            <form className="group mt-9 flex max-w-md items-center gap-2 rounded-full border border-cream/15 bg-cream/[0.06] py-1.5 pr-1.5 pl-5 transition-colors focus-within:border-cream/35">
              <input
                type="email"
                placeholder="you@example.com"
                aria-label="Email address"
                className="min-w-0 flex-1 bg-transparent text-[14px] text-cream outline-none placeholder:text-cream/35"
              />
              <button
                type="submit"
                className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-cream px-5 py-2.5 text-[13px] font-medium text-ink transition-colors hover:bg-white"
              >
                Subscribe
                <ArrowRight className="size-3.5" strokeWidth={2} />
              </button>
            </form>

            <p className="mt-4 flex items-center gap-2 text-[11px] text-cream/35">
              <Leaf className="size-3.5 text-gold/70" strokeWidth={1.5} />
              Carbon-neutral journeys · Unsubscribe anytime
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.heading}>
                <h3 className="text-[11px] font-medium tracking-[0.18em] text-cream/40 uppercase">
                  {column.heading}
                </h3>
                <ul className="mt-5 space-y-3.5">
                  {column.links.map((link) => (
                    <li key={link}>
                      <Link
                        href="#"
                        className="text-[13px] text-cream/75 transition-colors hover:text-gold"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-cream/10 pt-8 lg:flex-row lg:items-center lg:justify-between">
          <Logo compact className="text-cream" />

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[12px] text-cream/40">
            <span>© 2026 Roamora</span>
            <Link href="#" className="transition-colors hover:text-cream/70">
              Privacy
            </Link>
            <Link href="#" className="transition-colors hover:text-cream/70">
              Terms
            </Link>
            <Link href="#" className="transition-colors hover:text-cream/70">
              Cookies
            </Link>
          </div>

          <div className="flex items-center gap-3">
            {socials.map(({ Icon, label }) => (
              <Link
                key={label}
                href="#"
                aria-label={label}
                className="grid size-9 place-items-center rounded-full border border-cream/12 text-cream/70 transition-colors hover:border-cream/30 hover:text-cream"
              >
                <Icon className="size-3.5" />
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
