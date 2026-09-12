import { Calendar, MapPin, Search, User } from "lucide-react";
import { Container } from "./container";

const fields = [
  { icon: MapPin, label: "Where to?", placeholder: "Search destinations" },
  { icon: Calendar, label: "Check in", placeholder: "Add dates" },
  { icon: Calendar, label: "Check out", placeholder: "Add dates" },
  { icon: User, label: "Travelers", placeholder: "Add guests" },
];

export function SearchBar() {
  return (
    <div className="relative z-20 mt-4">
      <Container>
        <div className="rounded-[20px] border border-ink/8 bg-white p-2.5 shadow-[0_28px_70px_-34px_rgba(23,21,15,0.55)]">
          <div className="flex flex-col md:flex-row md:items-center">
            {fields.map(({ icon: Icon, label, placeholder }, index) => (
              <div
                key={label + index}
                className="group relative flex flex-1 cursor-pointer items-center gap-3 rounded-2xl px-4 py-3 transition-colors hover:bg-ink/[0.04]"
              >
                {index > 0 && (
                  <span
                    aria-hidden
                    className="absolute top-1/2 left-0 hidden h-8 w-px -translate-y-1/2 bg-ink/10 md:block"
                  />
                )}
                <Icon
                  className="size-[18px] shrink-0 text-ink/60"
                  strokeWidth={1.5}
                />
                <div className="leading-tight">
                  <div className="text-[13px] font-semibold text-ink">
                    {label}
                  </div>
                  <div className="mt-1 text-[12px] text-muted">
                    {placeholder}
                  </div>
                </div>
              </div>
            ))}

            <button
              type="button"
              className="mt-2 flex shrink-0 items-center justify-center gap-2 rounded-full bg-forest px-7 py-3.5 text-sm font-medium text-white transition-all hover:bg-forest/90 hover:shadow-lg md:mt-0 md:ml-2"
            >
              Search
              <Search className="size-4" strokeWidth={2} />
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}
