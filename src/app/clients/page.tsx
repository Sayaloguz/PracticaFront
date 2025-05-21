import { Suspense } from "react";
import MainTitle from "@/common/components/Titles/MainTitle";
import IconButton from "@/common/components/Buttons/IconButton/Delivery";
import { Breadcrumb } from "antd";
import Link from "next/link";
import { ClientsTableSkeleton } from "@/common/components/Skeletons/ClientsTableSkeleton";
import ClientResults from "@/common/components/Pages/ClientResults/Delivery";
import SearchClient from "@/common/components/SearchClient/Delivery";

export default function ClientsPage({
  searchParams,
}: {
  searchParams?: { query?: string; field?: string };
}) {
  const searchField = (searchParams?.field as "name" | "email") || "name";

  return (
    <section>
      <Breadcrumb
        items={[{ title: <Link href="/">Home</Link> }, { title: "Clients" }]}
      />

      <MainTitle title="Clientes" />

      <div className="flex items-baseline w-1/2 px-6">
        <SearchClient />
      </div>
      <div className="flex justify-end w-full px-6">
        <IconButton
          title="Añadir cliente"
          href="/clients/create"
          icon="addUser"
        />
      </div>

      <Suspense
        key={`${searchParams?.query}-${searchField}`}
        fallback={<ClientsTableSkeleton />}
      >
        <ClientResults
          searchParams={searchParams || {}}
          searchField={searchField}
        />
      </Suspense>
    </section>
  );
}
