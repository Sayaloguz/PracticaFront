import { Suspense } from "react";
import MerchantsTable from "@/common/components/Tables/MerchantsTable/Delivery";
import Search from "@/common/components/Search/Delivery";
import Service from "@/service/src";
import { MerchantsTableSkeleton } from "@/common/components/Skelletons/MerchantsTableSkelleton";
import MainTitle from "@/common/components/Titles/MainTitle";

async function MerchantResults({
  searchParams,
}: {
  searchParams: { query?: string };
}) {
  const query = searchParams?.query || "";

  const action = query.length > 0 ? "getMerchantsByName" : "getMerchants";
  const endPointData =
    query.length > 0 ? { endPointData: { name: query } } : {};

  const response = await Service.useCases(action, endPointData);
  const data = Array.isArray(response) ? response : response?.data || [];

  return <MerchantsTable tableData={data} />;
}

export default async function MerchantsPage({
  searchParams,
}: {
  searchParams?: { query?: string };
}) {
  return (
    <section>
      <MainTitle title="Merchants" />

      <Search placeholder="Buscar merchant por nombre" />

      <Suspense key={searchParams?.query} fallback={<MerchantsTableSkeleton />}>
        <MerchantResults searchParams={searchParams || {}} />
      </Suspense>
    </section>
  );
}
