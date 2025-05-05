import MerchantsTable from "@/common/components/MerchantsTable/Delivery";
import Service from "@/service/src";

export default async function MerchantsPage() {
  const response = await Service.useCases("getMerchants", {});
  const data = Array.isArray(response) ? response : response?.data || []; // Si hay respuesta, pasamos el array, si no, array vacío

  return (
    <section>
      <h1 className="text-xl font-semibold mb-4">Tabla de merchants</h1>
      <MerchantsTable initialData={data} />
    </section>
  );
}
