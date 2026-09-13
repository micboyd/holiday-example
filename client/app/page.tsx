import { Exhibition } from "@/components/exhibition";
import { Hero } from "@/components/hero";
import { PrintShop } from "@/components/print-shop";
import { SelectedWork } from "@/components/selected-work";
import { SeriesStrip } from "@/components/series-strip";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <div className="min-h-screen bg-cream">
      <SiteHeader />
      <main>
        <Hero />
        <SelectedWork />
        <SeriesStrip />
        <PrintShop />
        <Exhibition />
        <Testimonials />
      </main>
      <SiteFooter />
    </div>
  );
}
