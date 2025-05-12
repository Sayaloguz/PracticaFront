import MerchantsTable from "@/common/components/Tables/MerchantsTable/Delivery";
import Service from "@/service/src";

export async function MerchantResults({
  searchParams,
}: {
  searchParams: { query?: string };
}) {
  const query = searchParams?.query || "";

  const action = query.length > 0 ? "getMerchantsByName" : "getMerchants";
  const endPointData =
    query.length > 0 ? { endPointData: { name: query } } : {};

  const response = await Service.useCases(action, endPointData);
  const data = Array.isArray(response) ? response : response?.data || [];

  return <MerchantsTable tableData={data} />;
}
