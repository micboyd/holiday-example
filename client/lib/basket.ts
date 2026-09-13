import { images } from "./images";

/**
 * A static basket. Nothing persists between pages in this build — these lines
 * stand in for what a real cart would hold.
 */
export const basketLines = [
  {
    id: "storr-60x90-rag-oak",
    title: "Storr, First Light",
    image: images.storr,
    size: "60 × 90 cm",
    paper: "Cotton rag",
    frame: "White oak",
    unit: 400,
    quantity: 1,
  },
  {
    id: "marram-40x60-baryta-rolled",
    title: "Marram, Luskentyre",
    image: images.luskentyre,
    size: "40 × 60 cm",
    paper: "Baryta",
    frame: "Unframed",
    unit: 205,
    quantity: 1,
  },
];
