import IconButton from "@/common/components/Buttons/IconButton/Delivery";
import MerchantForm from "@/common/components/Forms/MerchantForm/Delivery";
import MainTitle from "@/common/components/Titles/MainTitle";
import { Breadcrumb } from "antd";
import Link from "next/link";

export default function CreateMerchantPage() {
  return (
    <section>
      <Breadcrumb
        items={[
          {
            title: <Link href="/">Home</Link>,
          },
          {
            title: <Link href="/merchants">Merchants</Link>,
          },
          {
            title: "Crear merchant",
          },
        ]}
      />

      <div className="flex items-center justify-between w-full">
        <MainTitle title="Crear merchant" />
        <div className="md:w-1/4 mr-10 mt-8">
          <IconButton
            href="/merchants"
            title="Volver a merchants"
            icon="back"
          />
        </div>
      </div>

      <div className="w-1/2 mt-10 mb-10 mx-auto">
        <MerchantForm action="createMerchant" />
      </div>
    </section>
  );
}
