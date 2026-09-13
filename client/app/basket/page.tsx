import { BasketList } from "@/components/basket-list";
import { Container } from "@/components/container";

export const metadata = { title: "Basket — Michael Boyd" };

export default function BasketPage() {
  return (
    <main className="pt-14 pb-16 lg:pt-20 lg:pb-24">
      <Container>
        <h1 className="font-display text-4xl font-normal tracking-[-0.01em] text-ink lg:text-[46px]">
          Basket
        </h1>
        <div className="mt-10">
          <BasketList />
        </div>
      </Container>
    </main>
  );
}
