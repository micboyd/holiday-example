import { images } from "./images";

export type Option = {
  id: string;
  label: string;
  note?: string;
  price: number;
};

export type Print = {
  slug: string;
  title: string;
  series: string;
  place: string;
  year: string;
  image: string;
  edition: string;
  note: string;
  sizes: Option[];
};

/** Options are shared across prints — the studio offers the same papers and frames. */
export const papers: Option[] = [
  { id: "rag", label: "Cotton rag", note: "Matte, 310gsm", price: 0 },
  { id: "baryta", label: "Baryta", note: "Semi-gloss, 315gsm", price: 25 },
];

export const framing: Option[] = [
  { id: "rolled", label: "Unframed", note: "Rolled in a tube", price: 0 },
  { id: "oak", label: "White oak", note: "Hand-finished, glazed", price: 120 },
  {
    id: "black",
    label: "Blackwood",
    note: "Hand-finished, glazed",
    price: 140,
  },
];

export const prints: Print[] = [
  {
    slug: "storr-first-light",
    title: "Storr, First Light",
    series: "Storr",
    place: "Trotternish, Isle of Skye",
    year: "2024",
    image: images.storr,
    edition: "Edition of 25",
    note: "The fifth morning of the trip, and the only one where the cloud lifted off the ridge before the light went flat.",
    sizes: [
      { id: "40x60", label: "40 × 60 cm", price: 180 },
      { id: "60x90", label: "60 × 90 cm", price: 280 },
      { id: "75x100", label: "75 × 100 cm", price: 380 },
      { id: "100x150", label: "100 × 150 cm", price: 560 },
    ],
  },
  {
    slug: "coupall-in-spate",
    title: "Coupall in Spate",
    series: "Coupall",
    place: "Glen Etive, Argyll",
    year: "2023",
    image: images.coupall,
    edition: "Edition of 15",
    note: "Thirty seconds at f/11 with the river running hard after two days of rain.",
    sizes: [
      { id: "40x60", label: "40 × 60 cm", price: 160 },
      { id: "50x75", label: "50 × 75 cm", price: 240 },
      { id: "75x100", label: "75 × 100 cm", price: 340 },
    ],
  },
  {
    slug: "marram-luskentyre",
    title: "Marram, Luskentyre",
    series: "Luskentyre",
    place: "Isle of Harris",
    year: "2023",
    image: images.luskentyre,
    edition: "Open edition",
    note: "Shell sand and marram grass, photographed low into a westerly that lasted three days.",
    sizes: [
      { id: "40x60", label: "40 × 60 cm", price: 180 },
      { id: "75x100", label: "75 × 100 cm", price: 360 },
      { id: "100x150", label: "100 × 150 cm", price: 520 },
    ],
  },
  {
    slug: "achtriochtan",
    title: "Achtriochtan",
    series: "Achtriochtan",
    place: "Glencoe, Argyll",
    year: "2024",
    image: images.achtriochtan,
    edition: "Edition of 20",
    note: "One cottage under Aonach Dubh, made on the only still afternoon of the week.",
    sizes: [
      { id: "40x60", label: "40 × 60 cm", price: 180 },
      { id: "60x90", label: "60 × 90 cm", price: 290 },
      { id: "75x100", label: "75 × 100 cm", price: 380 },
    ],
  },
];

export const formatGBP = (amount: number) =>
  `£${amount.toLocaleString("en-GB")}`;

export const findPrint = (slug: string) => prints.find((p) => p.slug === slug);
