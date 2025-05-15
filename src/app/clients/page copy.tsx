import { Suspense } from "react";
import Search from "@/common/components/Search/Delivery";
import { ClientsTableSkeleton } from "@/common/components/Skeletons/ClientsTableSkeleton";
import MainTitle from "@/common/components/Titles/MainTitle";
import IconButton from "@/common/components/Buttons/IconButton/Delivery";
import { Breadcrumb } from "antd";
import Link from "next/link";
import { ClientResults } from "@/common/components/Pages/ClientResults/Delivery";
import SelectAntd from "@/common/components/SelectAntd/Delivery";

export default function ClientsPage({
  searchParams,
}: {
  searchParams?: { query?: string };
}) {
  return (
    <section>
      <Breadcrumb
        items={[
          {
            title: <Link href="/">Home</Link>,
          },
          {
            title: "Clients",
          },
        ]}
      />

      <MainTitle title="Clientes" />
      <div className="flex items-center justify-between w-full px-6">
        <Search placeholder="Buscar cliente por nombre" />
        <SelectAntd />

        <IconButton
          title="Añadir cliente"
          href="/clients/create"
          icon="addUser"
        />
      </div>
      <Suspense key={searchParams?.query} fallback={<ClientsTableSkeleton />}>
        <ClientResults searchParams={searchParams || {}} />
      </Suspense>
    </section>
  );
}
