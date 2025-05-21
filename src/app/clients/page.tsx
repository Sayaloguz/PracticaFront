"use client";

import { Suspense } from "react";
//import Search from "@/common/components/Search/Delivery";
import { ClientsTableSkeleton } from "@/common/components/Skeletons/ClientsTableSkeleton";
import MainTitle from "@/common/components/Titles/MainTitle";
import IconButton from "@/common/components/Buttons/IconButton/Delivery";
import { Breadcrumb } from "antd";
import Link from "next/link";
import { ClientResults } from "@/common/components/Pages/ClientResults/Delivery";
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
        <div className="flex items-baseline">
          {/*<Search placeholder="Buscar cliente" />*/}
          <SearchClient placeholder="Buscar cliente" />
        </div>

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
