"use client";

import { useSyncExternalStore } from "react";
import { basketLines } from "./basket";

export type CartLine = {
  id: string;
  title: string;
  image: string;
  size: string;
  paper: string;
  frame: string;
  unit: number;
  quantity: number;
};

const STORAGE_KEY = "mb-basket";

/**
 * A tiny external store so the header badge, basket page and checkout all read
 * the same cart. Kept out of React state deliberately: useSyncExternalStore
 * gives us a server snapshot for the static HTML and swaps to the stored cart
 * after hydration, with no setState-in-effect.
 */
let lines: CartLine[] = basketLines;
let hydrated = false;

const listeners = new Set<() => void>();
const emit = () => listeners.forEach((listener) => listener());

function read(): CartLine[] {
  if (typeof window === "undefined") return basketLines;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return basketLines;
    const parsed: unknown = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as CartLine[]) : basketLines;
  } catch {
    return basketLines;
  }
}

function write() {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
  } catch {
    // Private mode or blocked storage — the cart just won't survive a reload.
  }
}

function commit(next: CartLine[]) {
  lines = next;
  write();
  emit();
}

export const cart = {
  subscribe(listener: () => void) {
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  },
  snapshot() {
    if (!hydrated && typeof window !== "undefined") {
      lines = read();
      hydrated = true;
    }
    return lines;
  },
  serverSnapshot() {
    return basketLines;
  },
  add(line: CartLine) {
    const existing = lines.find((item) => item.id === line.id);
    commit(
      existing
        ? lines.map((item) =>
            item.id === line.id
              ? { ...item, quantity: item.quantity + line.quantity }
              : item,
          )
        : [...lines, line],
    );
  },
  adjust(id: string, delta: number) {
    commit(
      lines.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item,
      ),
    );
  },
  remove(id: string) {
    commit(lines.filter((item) => item.id !== id));
  },
  clear() {
    commit([]);
  },
};

export function useCart() {
  return useSyncExternalStore(
    cart.subscribe,
    cart.snapshot,
    cart.serverSnapshot,
  );
}

export const countItems = (items: CartLine[]) =>
  items.reduce((sum, item) => sum + item.quantity, 0);

export const subtotalOf = (items: CartLine[]) =>
  items.reduce((sum, item) => sum + item.unit * item.quantity, 0);

export const shippingFor = (subtotal: number) =>
  subtotal === 0 || subtotal > 400 ? 0 : 12;
