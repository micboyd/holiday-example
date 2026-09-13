import { DestinationTiles } from "@/components/destination-tiles";
import { FeaturedTrips } from "@/components/featured-trips";
import { Hero } from "@/components/hero";
import { TrendingDestinations } from "@/components/trending-destinations";
import { PromoBanner } from "@/components/promo-banner";
import { SearchBar } from "@/components/search-bar";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <div className="min-h-screen bg-cream">
      <SiteHeader />
      <main>
        <Hero />
        <SearchBar />
        <TrendingDestinations />
        <DestinationTiles />
        <FeaturedTrips />
        <PromoBanner />
        <Testimonials />
      </main>
      <SiteFooter />
    </div>
  );
}
