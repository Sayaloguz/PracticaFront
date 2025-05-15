import ClientsTable from "@/common/components/Tables/ClientsTable/Delivery";
import { funcionUseCases } from "@/common/utils/functionUseCases";

export async function ClientResults({
  searchParams,
  searchField,
}: {
  searchParams: { query?: string };
  searchField: "name" | "cifNifNie";
}) {
  const query = searchParams?.query || "";

  const action = query.length > 0 ? "getClientsByName" : "getClients";

  const endPointData =
    query.length > 0 ? { endPointData: { [searchField]: query } } : {};

  const response = await funcionUseCases(action, endPointData);
  const data = Array.isArray(response) ? response : response?.data || [];

  return <ClientsTable tableData={data} />;
}
