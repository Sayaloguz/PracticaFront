import ClientsTable from "@/common/components/Tables/ClientsTable/Delivery";
import { funcionUseCases } from "@/common/utils/functionUseCases";

export default async function ClientResults({
  searchParams,
  searchField,
}: {
  searchParams: { query?: string };
  searchField: "name" | "email";
}) {
  const query = searchParams?.query?.trim().toLowerCase() || "";

  const action = !query
    ? "getClients"
    : searchField === "name"
    ? "getClientsByName"
    : "getClientByEmail";

  const endPointData = query ? { endPointData: { [searchField]: query } } : {};
  const response = (await funcionUseCases(
    action,
    endPointData
  )) as Utility.ResponseType;
  const data = Array.isArray(response) ? response : response?.data || [];

  return <ClientsTable tableData={data} />;
}
