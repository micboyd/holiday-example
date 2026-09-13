import { About } from "@/components/about";
import { Hero } from "@/components/hero";
import { PrintShop } from "@/components/print-shop";
import { SelectedWork } from "@/components/selected-work";
import { SeriesStrip } from "@/components/series-strip";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <SelectedWork />
      <SeriesStrip />
      <About />
      <PrintShop />
      <Testimonials />
    </main>
  );
}
