import ClientsTable from "@/common/components/Tables/ClientsTable/Delivery";
import Service from "@/service/src";

export async function ClientResults({
  searchParams,
}: {
  searchParams: { query?: string };
}) {
  const query = searchParams?.query || "";

  const action = query.length > 0 ? "getClientsByName" : "getClients";
  const endPointData =
    query.length > 0 ? { endPointData: { name: query } } : {};

  // TODO: Cambiar esto a infrastructure
  const response = await Service.useCases(action, endPointData);
  const data = Array.isArray(response) ? response : response?.data || [];

  return <ClientsTable tableData={data} />;
}
