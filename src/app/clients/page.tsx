import ClientsTable from "@/common/components/Tables/ClientsTable/Delivery";
import Service from "@/service/src";

export default async function ClientsPage() {
  const response = await Service.useCases("getClients", {});
  const data = Array.isArray(response) ? response : response?.data || []; // Si hay respuesta, pasamos el array, si no, array vacío

  return (
    <section>
      <h1 className="text-xl font-semibold mb-4">Tabla de clientes</h1>
      <ClientsTable 
      
      initialData={data} />
    </section>
  );
}
