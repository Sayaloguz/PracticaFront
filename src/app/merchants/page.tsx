import { Suspense } from "react";
import MainTitle from "@/common/components/Titles/MainTitle";
import IconButton from "@/common/components/Buttons/IconButton/Delivery";
import { Breadcrumb } from "antd";
import Link from "next/link";
import { MerchantsTableSkeleton } from "@/common/components/Skeletons/MerchantsTableSkeleton";
import MerchantResults from "@/common/components/Pages/MerchantResults/Delivery";
import SearchMerchant from "@/common/components/SearchMerchant/Delivery";

export default function MerchantsPage({
  searchParams,
}: {
  searchParams?: { name?: string; clientId?: string };
}) {
  const searchField = searchParams?.clientId ? "clientId" : "name";
  const query = searchParams?.name || searchParams?.clientId || "";

  return (
    <section>
      <Breadcrumb
        items={[{ title: <Link href="/">Home</Link> }, { title: "Merchants" }]}
      />

      <MainTitle title="Merchants" />

      <div className="flex items-baseline w-1/2 px-6">
        <SearchMerchant />
      </div>
      <div className="flex justify-end w-full px-6">
        <IconButton
          title="Añadir merchant"
          href="/merchants/create"
          icon="add"
        />
      </div>

      <Suspense
        key={`${query}-${searchField}`}
        fallback={<MerchantsTableSkeleton />}
      >
        <MerchantResults query={query} searchField={searchField} />
      </Suspense>
    </section>
  );
}
