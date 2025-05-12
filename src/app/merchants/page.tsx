import { Suspense } from "react";
import Search from "@/common/components/Search/Delivery";
import { MerchantsTableSkeleton } from "@/common/components/Skeletons/MerchantsTableSkeleton";
import MainTitle from "@/common/components/Titles/MainTitle";
import IconButton from "@/common/components/Buttons/IconButton/Delivery";
import { Breadcrumb } from "antd";
import Link from "next/link";
import { MerchantResults } from "@/common/components/Tables/MerchantsTable/Infrastructure/merchantsTableResults";

export default async function MerchantsPage({
  searchParams,
}: {
  searchParams?: { query?: string };
}) {
  return (
    <section>
      <Breadcrumb
        items={[
          {
            title: <Link href="/">Home</Link>,
          },
          {
            title: "Merchants",
          },
        ]}
      />

      <MainTitle title="Merchants" />

      <div className="flex items-center justify-between w-full px-6">
        <Search placeholder="Buscar merchant por nombre" />
        <IconButton
          title="Añadir merchant"
          href="/merchants/create"
          icon="add"
        />
      </div>

      <Suspense key={searchParams?.query} fallback={<MerchantsTableSkeleton />}>
        <MerchantResults searchParams={searchParams || {}} />
      </Suspense>
    </section>
  );
}
