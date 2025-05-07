import { Suspense } from "react";
import MerchantsTable from "@/common/components/Tables/MerchantsTable/Delivery";
import Search from "@/common/components/Search/Delivery";
import Service from "@/service/src";
import { MerchantsTableSkeleton } from "@/common/components/Skelletons/MerchantsTableSkelleton";


async function MerchantResults({ searchParams }: { searchParams: { query?: string } }) {
  const query = searchParams?.query || "";

  const action = query.length > 0 ? "getMerchantsByName" : "getMerchants";
  const endPointData = query.length > 0 ? 
    {endPointData: { name: query }}
    : {};
  
  const response = await Service.useCases(action, endPointData);
  const data = Array.isArray(response) ? response : response?.data || [];

  return <MerchantsTable initialData={data} />;
}

export default async function MerchantsPage({searchParams}: {searchParams?: {query?: string}}) {

  return (
    <section>
      <h1 className="text-xl font-semibold mb-4">Tabla de merchants</h1>
      <Search placeholder="Buscar merchant por nombre" />

      <Suspense key={searchParams?.query} fallback={<MerchantsTableSkeleton />}>
        <MerchantResults searchParams={searchParams || {}} />
      </Suspense>
    </section>
  );
}
