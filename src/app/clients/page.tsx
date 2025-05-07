// app/clients/page.tsx
import { Suspense } from 'react';
import ClientsTable from "@/common/components/Tables/ClientsTable/Delivery";
import Search from "@/common/components/Search/Delivery";
import Service from "@/service/src";
import { ClientsTableSkeleton } from "@/common/components/Skelletons/ClientsTableSkelleton";

// Componente que se volverá a ejecutar cuando cambien los params
async function ClientResults({ searchParams }: { searchParams: { query?: string } }) {
  const query = searchParams?.query || "";

  const action = query.length > 0 ? "getClientsByName" : "getClients";
  const endPointData = query.length > 0 ? 
    {endPointData: { name: query }}
    : {};
  
  const response = await Service.useCases(action, endPointData);
  const data = Array.isArray(response) ? response : response?.data || [];

  return <ClientsTable initialData={data} />;
}

export default function ClientsPage({searchParams}: { searchParams?: { query?: string;}}) {
  return (
    <section>
      <h1 className="text-xl font-semibold mb-4">Tabla de clientes</h1>
      <Search placeholder="Buscar cliente" />

      <Suspense key={searchParams?.query} fallback={<ClientsTableSkeleton />}>
        <ClientResults searchParams={searchParams || {}} />
      </Suspense>

    </section>
  );
}

/*import ClientsTable from "@/common/components/Tables/ClientsTable/Delivery";
import Search from "@/common/components/Search/Delivery";
import Service from "@/service/src";

export default async function ClientsPage({
  searchParams
}: {
  searchParams?: {
    query?: string; 
    //page?: string; // No se usa porque no tenemos paginación de momento
  }
}) {



  // const currentPage = Number(searchParams?.page || 1); // No se usa porque no tenemos paginación de momento
  const query = searchParams?.query || "";


      // Así obtenemos los datos iniciales antes del buscador:
      //const response = await Service.useCases("getClients", {});
      // const data = Array.isArray(response) ? response : response?.data || []; // Datos iniciales
      
      const action = query.length > 0 ? "getClientsByName" : "getClients";
      const endPointData = query.length > 0 ? 
      {endPointData: { name: query.toString() }}
      : {};
      

      const response = await Service.useCases(action, endPointData);
      const data = Array.isArray(response) ? response : response?.data || []; // Datos iniciales

  return (
    <section>
      <h1 className="text-xl font-semibold mb-4">Tabla de clientes</h1>
      <Search
        placeholder="Buscar cliente"
        />
      <ClientsTable 
      
      initialData={data} />
    </section>
  );
}
*/