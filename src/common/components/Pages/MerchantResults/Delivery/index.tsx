import MerchantsTable from "@/common/components/Tables/MerchantsTable/Delivery";
import { funcionUseCases } from "@/common/utils/functionUseCases";

export default async function MerchantResults({
  searchParams,
  searchField,
}: {
  searchParams: { query?: string };
  searchField: "name" | "clientId";
}) {
  const query = searchParams?.query?.trim().toLowerCase() || "";

  let action: string;
  let endPointData: Record<string, any> = {};

  if (!query) {
    action = "getMerchants";
  } else if (searchField === "name") {
    action = "getMerchantsByName";
    endPointData = { endPointData: { name: query } };
  } else {
    action = "getByClientId";
    endPointData = { endPointData: { id: query } }; // o el nombre de parámetro que espere el backend
  }

  const response = await funcionUseCases(action, endPointData);
  const data = Array.isArray(response) ? response : response?.data || [];

  return <MerchantsTable tableData={data} />;
}
