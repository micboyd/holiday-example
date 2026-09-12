// Photography is hot-linked from Unsplash so the project stays dependency-free.
// Swap any entry for a local file in /public when you have final art.
const unsplash = (id: string, w: number) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;

export const images = {
  hero: unsplash("1527668752968-14dc70a27c95", 1920),
  promo: unsplash("1469474968028-56623f02e42e", 1600),
  santorini: unsplash("1533105079780-92b9be482077", 800),
  bali: unsplash("1537996194471-e657df975ab4", 800),
  alps: unsplash("1476514525535-07fb3b4ae5f1", 800),
  maldives: unsplash("1573843981267-be1999ff37cd", 800),
};
