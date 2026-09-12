import type { ReactNode } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

/**
 * Nav item with a hover/focus panel. The panel is positioned against the
 * header's Container (not the trigger) so it spans the same width as the rest
 * of the page, and sits flush against the bar rather than floating below it. CSS-only: revealed via group-hover and group-focus-within, with
 * the wrapper's top padding acting as a hover bridge across the gap.
 */
export function NavMenu({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="group/menu">
      <Link
        href="#"
        className="flex items-center gap-1 text-sm text-ink/75 transition-colors hover:text-ink group-hover/menu:text-ink"
      >
        {label}
        <ChevronDown
          className="size-3.5 text-ink/45 transition-transform duration-300 group-hover/menu:rotate-180"
          strokeWidth={2}
        />
      </Link>

      <div className="invisible absolute top-full right-6 left-6 z-50 opacity-0 transition-opacity duration-200 before:absolute before:inset-x-0 before:-top-6 before:h-6 before:content-[''] group-focus-within/menu:visible group-focus-within/menu:opacity-100 group-hover/menu:visible group-hover/menu:opacity-100 lg:right-10 lg:left-10">
        <div className="border-x border-b border-ink/8 bg-white px-6 py-5 shadow-[0_24px_44px_-30px_rgba(23,21,15,0.35)]">
          {children}
        </div>
      </div>
    </div>
  );
}
