"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { destinations } from "@/lib/destinations";
import { experiences } from "@/lib/experiences";

const plainItems = ["Hotels", "Tours", "Deals", "About Us"];

function Section({
  label,
  isOpen,
  onToggle,
  children,
}: {
  label: string;
  isOpen: boolean;
  onToggle: () => void;
  children: ReactNode;
}) {
  return (
    <div className="border-b border-ink/8">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between py-4 text-left text-[15px] text-ink"
      >
        {label}
        <ChevronDown
          className={`size-4 text-ink/45 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          strokeWidth={2}
        />
      </button>
      {isOpen && <div className="pb-5">{children}</div>}
    </div>
  );
}

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [section, setSection] = useState<string | null>(null);

  // While the drawer is open: lock background scroll and allow Escape to close.
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const close = () => {
    setOpen(false);
    setSection(null);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        className="grid size-10 place-items-center rounded-full border border-ink/15 text-ink transition-colors hover:bg-ink/5 lg:hidden"
      >
        {open ? (
          <X className="size-5" strokeWidth={1.75} />
        ) : (
          <Menu className="size-5" strokeWidth={1.75} />
        )}
      </button>

      {/* Portalled to <body>: the header applies a backdrop-filter, which would
          otherwise become the containing block for a fixed child and trap the
          drawer inside the header's own box. Entry fade is CSS @starting-style. */}
      {open &&
        createPortal(
          <div
            id="mobile-menu"
            className="fixed inset-0 z-30 overflow-y-auto bg-white pt-20 lg:hidden"
          >
            <div className="px-6 pb-12">
              <nav>
                <Section
                  label="Destinations"
                  isOpen={section === "destinations"}
                  onToggle={() =>
                    setSection(
                      section === "destinations" ? null : "destinations",
                    )
                  }
                >
                  <div className="grid grid-cols-2 gap-3">
                    {destinations.map((destination) => (
                      <Link
                        key={destination.name}
                        href="#"
                        onClick={close}
                        className="relative aspect-[4/3] overflow-hidden rounded-xl bg-sand"
                      >
                        <Image
                          src={destination.image}
                          alt={destination.name}
                          fill
                          sizes="50vw"
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(17,15,11,0.88)_0%,rgba(17,15,11,0)_68%)]" />
                        <div className="absolute inset-x-0 bottom-0 p-3">
                          <p className="font-display text-[14px] leading-none text-white">
                            {destination.name}
                          </p>
                          <p className="mt-1 text-[10px] text-white/60 tabular-nums">
                            ★ {destination.rating}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </Section>

                <Section
                  label="Experiences"
                  isOpen={section === "experiences"}
                  onToggle={() =>
                    setSection(section === "experiences" ? null : "experiences")
                  }
                >
                  <ul className="grid gap-1">
                    {experiences.map(({ icon: Icon, title, copy }) => (
                      <li key={title}>
                        <Link
                          href="#"
                          onClick={close}
                          className="flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-ink/[0.04]"
                        >
                          <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-gold/10 text-gold">
                            <Icon className="size-4" strokeWidth={1.5} />
                          </span>
                          <span>
                            <span className="block text-[13px] font-medium text-ink">
                              {title}
                            </span>
                            <span className="mt-0.5 block text-[11px] text-muted">
                              {copy}
                            </span>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Section>

                {plainItems.map((item) => (
                  <Link
                    key={item}
                    href="#"
                    onClick={close}
                    className="block border-b border-ink/8 py-4 text-[15px] text-ink"
                  >
                    {item}
                  </Link>
                ))}
              </nav>

              <Link
                href="#"
                onClick={close}
                className="mt-8 flex items-center justify-center rounded-full bg-ink py-3.5 text-sm font-medium text-cream"
              >
                Contact Us
              </Link>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
