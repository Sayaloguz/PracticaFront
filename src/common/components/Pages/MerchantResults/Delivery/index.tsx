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
  let endPointData: Utility.EndPointDataType = {};

  if (!query) {
    action = "getMerchants";
  } else if (searchField === "name") {
    action = "getMerchantsByName";
    endPointData = { endPointData: { name: query } };
  } else {
    action = "getByClientId";
    endPointData = { endPointData: { id: query } };
  }

  const response = (await funcionUseCases(
    action,
    endPointData
  )) as Utility.ResponseType;
  const data = Array.isArray(response) ? response : response?.data || [];

  return <MerchantsTable tableData={data} />;
}
