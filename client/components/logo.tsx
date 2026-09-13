/**
 * Personal wordmark. A photographer's own name carries the brand, so this is
 * purely typographic — no icon competing with it.
 */
export function Logo({
  className = "",
  showTagline = false,
}: {
  className?: string;
  showTagline?: boolean;
}) {
  return (
    <div className={`leading-none ${className}`}>
      <div className="font-display text-xl tracking-tight">Michael Boyd</div>
      {showTagline && (
        <div className="mt-1.5 text-[9px] tracking-[0.18em] uppercase opacity-55">
          Landscape Photography
        </div>
      )}
    </div>
  );
}
