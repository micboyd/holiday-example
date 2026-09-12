import { FeatureStrip } from "@/components/feature-strip";
import { Hero } from "@/components/hero";
import { PopularDestinations } from "@/components/popular-destinations";
import { PromoBanner } from "@/components/promo-banner";
import { SearchBar } from "@/components/search-bar";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TrustedBy } from "@/components/trusted-by";

export default function Home() {
  return (
    <div className="min-h-screen bg-cream">
      <SiteHeader />
      <main>
        <Hero />
        <SearchBar />
        <FeatureStrip />
        <PopularDestinations />
        <PromoBanner />
        <TrustedBy />
      </main>
      <SiteFooter />
    </div>
  );
}
