import IconButton from "@/common/components/Buttons/IconButton/Delivery";
import ClientForm from "@/common/components/Forms/ClientForm/Delivery";
import MainTitle from "@/common/components/Titles/MainTitle";
import { Breadcrumb } from "antd";
import Link from "next/link";

export default function CreateClientPage() {
  return (
    <section>
      <Breadcrumb
        items={[
          {
            title: <Link href="/">Home</Link>,
          },
          {
            title: <Link href="/clients">Clients</Link>,
          },
          {
            title: "Crear client",
          },
        ]}
      />

      <div className="flex items-center justify-between w-full">
        <MainTitle title="Crear cliente" />
        <div className="md:w-1/4 mr-10 mt-8">
          <IconButton href="/clients" title="Volver a clientes" icon="back" />
        </div>
      </div>

      <div className="w-1/2 mt-10 mb-12 mx-auto">
        <ClientForm action="createClient" />
      </div>
    </section>
  );
}
