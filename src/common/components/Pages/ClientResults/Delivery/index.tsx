import ClientsTable from "@/common/components/Tables/ClientsTable/Delivery";
import { funcionUseCases } from "@/common/utils/functionUseCases";

export async function ClientResults({
  searchParams,
  searchField,
}: {
  searchParams: { query?: string };
  searchField: "name" | "email";
}) {
  const query = searchParams?.query?.trim().toLowerCase() || "";

  let action: string;

  if (!query) {
    action = "getClients"; // ✅ Acción por defecto
  } else if (searchField === "name") {
    action = "getClientsByName";
  } else {
    action = "getClientByEmail";
  }

  console.log("Usando acción:", action);

  const endPointData =
    query.length > 0 ? { endPointData: { [searchField]: query } } : {};

  const response = await funcionUseCases(action, endPointData);
  const data = Array.isArray(response) ? response : response?.data || [];

  return <ClientsTable tableData={data} />;
}
