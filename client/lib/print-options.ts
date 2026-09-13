import { Frame, Layers, Package, Ruler } from "lucide-react";

/** Shown in the Prints menu panel and the mobile drawer. */
export const printOptions = [
  {
    icon: Ruler,
    title: "Sizes",
    copy: "From 30×40cm to 100×150cm.",
  },
  {
    icon: Layers,
    title: "Papers",
    copy: "Hahnemühle cotton rag or baryta.",
  },
  {
    icon: Frame,
    title: "Framing",
    copy: "Hand-finished oak or blackwood.",
  },
  {
    icon: Package,
    title: "Shipping",
    copy: "Rolled or framed, worldwide.",
  },
];
