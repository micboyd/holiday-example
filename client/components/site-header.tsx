import Link from "next/link";
import { Container } from "./container";
import { Logo } from "./logo";
import { MobileMenu } from "./mobile-menu";
import { NavMenu } from "./nav-menu";
import { DestinationsPanel, ExperiencesPanel } from "./nav-panels";

const plainItems = ["Hotels", "Tours", "Deals", "About Us"];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40">
      {/* Transparent at rest; docks into a blurred bar once you scroll. */}
      <div className="header-shell">
        <Container className="relative flex items-center justify-between gap-6 py-5">
          <Logo className="text-ink" compact />

          <nav className="hidden items-center gap-8 lg:flex">
            <NavMenu label="Destinations">
              <DestinationsPanel />
            </NavMenu>
            <NavMenu label="Experiences">
              <ExperiencesPanel />
            </NavMenu>
            {plainItems.map((item) => (
              <Link
                key={item}
                href="#"
                className="text-sm text-ink/75 transition-colors hover:text-ink"
              >
                {item}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="#"
              className="hidden rounded-full bg-ink px-6 py-2.5 text-sm font-medium text-cream transition-colors hover:bg-ink/85 sm:inline-flex"
            >
              Contact Us
            </Link>
            <MobileMenu />
          </div>
        </Container>
      </div>
    </header>
  );
}
