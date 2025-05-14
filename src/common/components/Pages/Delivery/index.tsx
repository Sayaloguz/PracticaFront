import ClientsTable from "@/common/components/Tables/ClientsTable/Delivery";
import { funcionUseCases } from "@/common/utils/functionUseCases";

export async function ClientResults({
  searchParams,
}: {
  searchParams: { query?: string };
}) {
  // TODO: Hacer un select para nombre/cifNifNie
  const query = searchParams?.query || "";

  const action = query.length > 0 ? "getClientsByName" : "getClients";
  const endPointData =
    query.length > 0 ? { endPointData: { name: query } } : {};

  const response = await funcionUseCases(action, endPointData);

  const data = Array.isArray(response) ? response : response?.data || [];

  return <ClientsTable tableData={data} />;
}
