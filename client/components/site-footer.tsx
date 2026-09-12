import Link from "next/link";
import { Send } from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "./social-icons";
import { Container } from "./container";
import { Logo } from "./logo";

const columns = [
  {
    heading: "Quick Links",
    links: [
      "Destinations",
      "Experiences",
      "Hotels",
      "Tours",
      "Deals",
      "About Us",
    ],
  },
  {
    heading: "Support",
    links: ["FAQs", "Privacy Policy", "Terms & Conditions", "Contact Us"],
  },
];

const socials = [FacebookIcon, InstagramIcon, YoutubeIcon, TwitterIcon];

export function SiteFooter() {
  return (
    <footer className="border-t border-ink/10">
      <Container className="py-14">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo className="text-ink" />
            <p className="mt-5 max-w-[28ch] text-[13px] leading-relaxed text-muted">
              We help you discover the world with unforgettable travel
              experiences and exceptional service.
            </p>
            <div className="mt-6 flex items-center gap-5">
              {socials.map((Icon, index) => (
                <Link key={index} href="#" aria-label="Social link">
                  <Icon className="size-4 text-ink/70 transition-colors hover:text-ink" />
                </Link>
              ))}
            </div>
          </div>

          {columns.map((column) => (
            <div key={column.heading}>
              <h3 className="text-sm font-semibold text-ink">
                {column.heading}
              </h3>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-[13px] text-muted transition-colors hover:text-ink"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-sm font-semibold text-ink">Newsletter</h3>
            <p className="mt-5 max-w-[30ch] text-[13px] leading-relaxed text-muted">
              Subscribe to get exclusive travel deals and updates.
            </p>

            <form className="mt-5 flex items-center gap-2 rounded-full border border-ink/12 bg-white py-1.5 pr-1.5 pl-5 transition-colors focus-within:border-ink/30">
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Email address"
                className="min-w-0 flex-1 bg-transparent text-[13px] text-ink outline-none placeholder:text-muted/70"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="grid size-9 shrink-0 place-items-center rounded-full bg-forest text-white transition-colors hover:bg-forest/90"
              >
                <Send className="size-4" strokeWidth={1.75} />
              </button>
            </form>
          </div>
        </div>
      </Container>

      {/* Oversized wordmark - clipped to a sliver so it reads as texture. */}
      <Container className="pointer-events-none select-none">
        <span className="block font-display text-[13vw] leading-[0.86] font-normal tracking-[-0.03em] text-ink/[0.06]">
          Roamora
        </span>
      </Container>

      <div className="border-t border-ink/10 py-6">
        <p className="text-center text-[12px] text-muted">
          © 2025 Roamora. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
