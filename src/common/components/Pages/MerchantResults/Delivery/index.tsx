import MerchantsTable from "@/common/components/Tables/MerchantsTable/Delivery";
import { funcionUseCases } from "@/common/utils/functionUseCases";

export async function MerchantResults({
  searchParams,
}: {
  searchParams: { query?: string };
}) {
  // TODO: Hacer un select para nombre/cliente
  const query = searchParams?.query || "";

  const action = query.length > 0 ? "getMerchantsByName" : "getMerchants";
  const endPointData =
    query.length > 0 ? { endPointData: { name: query } } : {};

  const response = await funcionUseCases(action, endPointData);

  const data = Array.isArray(response) ? response : response?.data || [];

  return <MerchantsTable tableData={data} />;
}
