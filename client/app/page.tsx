import { DestinationTiles } from "@/components/destination-tiles";
import { FeatureStrip } from "@/components/feature-strip";
import { FeaturedTrips } from "@/components/featured-trips";
import { Hero } from "@/components/hero";
import { PopularDestinations } from "@/components/popular-destinations";
import { PromoBanner } from "@/components/promo-banner";
import { SearchBar } from "@/components/search-bar";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Testimonials } from "@/components/testimonials";
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
        <DestinationTiles />
        <FeaturedTrips />
        <PromoBanner />
        <Testimonials />
        <TrustedBy />
      </main>
      <SiteFooter />
    </div>
  );
}
