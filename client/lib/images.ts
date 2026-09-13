// Photography is hot-linked from Unsplash so the project stays dependency-free.
// Swap any entry for a local file in /public when you have final art.
const unsplash = (id: string, w: number) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;

export const images = {
  hero: unsplash("1470071459604-3b5ec3a7fe05", 1920),
  exhibition: unsplash("1469474968028-56623f02e42e", 1600),
  moraine: unsplash("1493246507139-91e8fad9978e", 900),
  inversion: unsplash("1458668383970-8ddd3927deed", 900),
  granite: unsplash("1426604966848-d7adac402bff", 900),
  kluane: unsplash("1464822759023-fed622ff2c3b", 900),
  ridgelines: unsplash("1501854140801-50d01698950b", 900),
  understory: unsplash("1441974231531-c6227db76b6e", 900),
  nightfall: unsplash("1519681393784-d120267933ba", 900),
  tideline: unsplash("1507525428034-b723cf961d3e", 900),
};
