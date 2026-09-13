import Link from "next/link";
import { Container } from "./container";
import { CartButton } from "./cart-button";
import { Logo } from "./logo";
import { MobileMenu } from "./mobile-menu";
import { NavMenu } from "./nav-menu";
import { PrintsPanel, WorkPanel } from "./nav-panels";

const plainItems = ["About", "Journal", "Contact"];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40">
      {/* Transparent at rest; docks into a blurred bar once you scroll. */}
      <div className="header-shell relative">
        <Container className="flex items-center justify-between gap-6 py-5">
          <Link href="/" className="transition-opacity hover:opacity-70">
            <Logo className="text-ink" />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            <NavMenu label="Work" href="#">
              <WorkPanel />
            </NavMenu>
            <NavMenu label="Prints" href="/prints">
              <PrintsPanel />
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
            <CartButton />
            <MobileMenu />
          </div>
        </Container>
      </div>
    </header>
  );
}
