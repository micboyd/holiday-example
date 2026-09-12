import { Container } from "./container";

const partners = [
  { name: "Booking.com", className: "font-bold text-[#003580]" },
  { name: "Expedia", className: "font-semibold text-[#1a1a2e]" },
  { name: "Tripadvisor", className: "font-semibold text-[#00857a]" },
  { name: "Skyscanner", className: "font-semibold text-[#0770e3]" },
  { name: "airbnb", className: "font-semibold text-[#ff5a5f]" },
];

export function TrustedBy() {
  return (
    <section className="border-y border-ink/8 bg-sand/60 py-10">
      <Container className="flex flex-col gap-7 lg:flex-row lg:items-center lg:gap-12">
        <p className="shrink-0 text-sm leading-relaxed text-ink lg:max-w-[20ch]">
          Trusted by thousands of travelers worldwide
        </p>

        {/* Duplicated once so the loop is seamless at -50%. */}
        <div className="marquee min-w-0 flex-1 overflow-hidden">
          <div className="marquee-track">
            {[0, 1].map((copy) => (
              <div
                key={copy}
                className="flex shrink-0 items-center"
                aria-hidden={copy === 1}
              >
                {partners.map((partner) => (
                  <span
                    key={partner.name}
                    className={`px-9 text-[15px] tracking-tight ${partner.className}`}
                  >
                    {partner.name}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
