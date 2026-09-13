import type { ReactNode } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Container } from "./container";

/**
 * Nav item with a hover/focus panel.
 *
 * The panel's surface spans the full width of the bar (no side borders, so the
 * bar appears to expand downward rather than sprouting a separate box) while
 * its contents sit on the same Container grid as the rest of the page.
 *
 * The ::before bridge must be at least as tall as the gap between the trigger's
 * bottom edge and the panel's top (30px: the nav row's slack plus the header's
 * bottom padding). Any shortfall is a dead band where hover drops and the panel
 * closes on the way to it. CSS-only: revealed via group-hover and group-focus-within, with
 * the wrapper's top padding acting as a hover bridge across the gap.
 */
export function NavMenu({
  label,
  href = "#",
  children,
}: {
  label: string;
  href?: string;
  children: ReactNode;
}) {
  return (
    <div className="group/menu">
      <Link
        href={href}
        className="flex items-center gap-1 text-sm text-ink/75 transition-colors hover:text-ink group-hover/menu:text-ink"
      >
        {label}
        <ChevronDown
          className="size-3.5 text-ink/45 transition-transform duration-300 group-hover/menu:rotate-180"
          strokeWidth={2}
        />
      </Link>

      <div className="invisible absolute inset-x-0 top-full z-50 opacity-0 transition-opacity duration-200 before:absolute before:inset-x-0 before:-top-8 before:h-8 before:content-[''] group-focus-within/menu:visible group-focus-within/menu:opacity-100 group-hover/menu:visible group-hover/menu:opacity-100">
        <div className="border-b border-ink/8 bg-white shadow-[0_24px_44px_-30px_rgba(23,21,15,0.35)]">
          <Container className="py-6">{children}</Container>
        </div>
      </div>
    </div>
  );
}
