"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { cart } from "@/lib/cart";
import { formatGBP, framing, papers, type Option } from "@/lib/prints";

function OptionGroup({
  label,
  options,
  selected,
  onSelect,
  additive = true,
}: {
  label: string;
  options: Option[];
  selected: Option;
  onSelect: (option: Option) => void;
  /** Sizes carry the base price; paper and framing add to it. */
  additive?: boolean;
}) {
  return (
    <fieldset className="mt-8">
      <legend className="text-[11px] font-medium tracking-[0.16em] text-muted uppercase">
        {label}
      </legend>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        {options.map((option) => {
          const isSelected = option.id === selected.id;
          return (
            <button
              key={option.id}
              type="button"
              onClick={() => onSelect(option)}
              aria-pressed={isSelected}
              className={`flex items-center justify-between rounded-2xl border px-4 py-3 text-left transition-colors ${
                isSelected
                  ? "border-ink bg-ink/[0.04]"
                  : "border-ink/10 hover:border-ink/25"
              }`}
            >
              <span>
                <span className="block text-[14px] font-medium text-ink">
                  {option.label}
                </span>
                {option.note && (
                  <span className="mt-0.5 block text-[12px] text-muted">
                    {option.note}
                  </span>
                )}
              </span>
              <span className="flex items-center gap-2 text-[12px] text-muted tabular-nums">
                {option.price > 0 &&
                  (additive
                    ? `+${formatGBP(option.price)}`
                    : formatGBP(option.price))}
                {isSelected && (
                  <Check className="size-4 text-ink" strokeWidth={2.5} />
                )}
              </span>
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

export function PrintConfigurator({
  slug,
  title,
  image,
  sizes,
}: {
  slug: string;
  title: string;
  image: string;
  sizes: Option[];
}) {
  const router = useRouter();
  const [size, setSize] = useState(sizes[1] ?? sizes[0]);
  const [paper, setPaper] = useState(papers[0]);
  const [frame, setFrame] = useState(framing[0]);

  const total = size.price + paper.price + frame.price;

  const addToBasket = () => {
    cart.add({
      // Same print in the same configuration merges rather than duplicating.
      id: `${slug}-${size.id}-${paper.id}-${frame.id}`,
      title,
      image,
      size: size.label,
      paper: paper.label,
      frame: frame.label,
      unit: total,
      quantity: 1,
    });
    router.push("/basket");
  };

  return (
    <div>
      <OptionGroup
        label="Size"
        options={sizes}
        selected={size}
        onSelect={setSize}
        additive={false}
      />
      <OptionGroup
        label="Paper"
        options={papers}
        selected={paper}
        onSelect={setPaper}
      />
      <OptionGroup
        label="Framing"
        options={framing}
        selected={frame}
        onSelect={setFrame}
      />

      <div className="mt-9 flex flex-wrap items-center justify-between gap-5 border-t border-ink/10 pt-7">
        <div>
          <p className="text-[12px] text-muted">Total</p>
          <p className="font-display text-3xl text-ink tabular-nums">
            {formatGBP(total)}
          </p>
        </div>

        <button
          type="button"
          onClick={addToBasket}
          className="group inline-flex items-center gap-3 rounded-full bg-ink py-2 pr-2 pl-7 text-sm font-medium text-cream transition-colors hover:bg-ink/85"
        >
          Add to basket
          <span className="grid size-9 place-items-center rounded-full bg-cream text-ink transition-transform group-hover:translate-x-0.5">
            <ArrowRight className="size-4" strokeWidth={2} />
          </span>
        </button>
      </div>

      <p className="mt-4 text-[12px] text-muted">
        Made to order — allow 7–10 days. Free shipping within the UK.
      </p>
    </div>
  );
}
