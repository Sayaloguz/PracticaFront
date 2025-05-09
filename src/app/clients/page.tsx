import { Suspense } from "react";
import ClientsTable from "@/common/components/Tables/ClientsTable/Delivery";
import Search from "@/common/components/Search/Delivery";
import Service from "@/service/src";
import { ClientsTableSkeleton } from "@/common/components/Skelletons/ClientsTableSkelleton";
import MainTitle from "@/common/components/Titles/MainTitle";

async function ClientResults({
  searchParams,
}: {
  searchParams: { query?: string };
}) {
  const query = searchParams?.query || "";

  const action = query.length > 0 ? "getClientsByName" : "getClients";
  const endPointData =
    query.length > 0 ? { endPointData: { name: query } } : {};

  const response = await Service.useCases(action, endPointData);
  const data = Array.isArray(response) ? response : response?.data || [];

  return <ClientsTable tableData={data} />;
}

export default function ClientsPage({
  searchParams,
}: {
  searchParams?: { query?: string };
}) {
  return (
    <section>
      <MainTitle title="Clientes" />

      <Search placeholder="Buscar cliente" />

      <Suspense key={searchParams?.query} fallback={<ClientsTableSkeleton />}>
        <ClientResults searchParams={searchParams || {}} />
      </Suspense>
    </section>
  );
}
