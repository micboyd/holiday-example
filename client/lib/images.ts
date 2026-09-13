// Photography is hot-linked from Unsplash so the project stays dependency-free.
// Swap any entry for a local file in /public when you have final art.
const unsplash = (id: string, w: number) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;

export const images = {
  hero: unsplash("1470071459604-3b5ec3a7fe05", 1920), // The Quiraing, Skye
  storr: unsplash("1546706872-9c90b8d0c94f", 900), // Old Man of Storr
  achtriochtan: unsplash("1528806290983-2c003d438fb3", 900), // Glencoe cottage
  threeSisters: unsplash("1527675504868-9b014a3dacb6", 900), // Glencoe pass
  coupall: unsplash("1480241352829-e1573ff2414e", 900), // Buachaille Etive Mòr
  luskentyre: unsplash("1644863792318-17e435b1d4d7", 900), // Harris dunes
  rannoch: unsplash("1508690305591-b421948d9d3b", 900), // Rannoch Moor
  atlantic: unsplash("1649335250130-76ea16562eb1", 900), // Harris swell
  glenfinnan: unsplash("1563908865396-d51d56bfc94c", 900), // Loch Shiel
};
