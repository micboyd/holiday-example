import type { ReactNode } from "react";

/**
 * The single horizontal rhythm for the page. Every section aligns to this so
 * the header, hero copy, search bar, cards and footer share one set of edges.
 */
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-6 lg:px-10 ${className}`}>
      {children}
    </div>
  );
}
