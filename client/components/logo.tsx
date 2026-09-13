import { Aperture } from "lucide-react";

export function Logo({
  className = "",
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {compact ? (
        <Aperture className="size-5" strokeWidth={1.5} />
      ) : (
        <span className="grid size-9 place-items-center rounded-full bg-ink text-cream">
          <Aperture className="size-4" strokeWidth={1.5} />
        </span>
      )}
      <div className="leading-none">
        <div className="font-display text-xl font-semibold tracking-tight">
          Roamora
        </div>
        {!compact && (
          <div className="mt-1 text-[9px] tracking-[0.18em] uppercase opacity-55">
            Landscape Photography
          </div>
        )}
      </div>
    </div>
  );
}
