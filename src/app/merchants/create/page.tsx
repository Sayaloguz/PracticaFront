import MerchantForm from "@/common/components/Forms/MerchantForm/Delivery";
import MainTitle from "@/common/components/Titles/MainTitle";

export default function CreateMerchantPage() {
  return (
    <section>
      <MainTitle title="Crear merchant" />

      <div className="w-1/2 mt-10 mb-10 mx-auto">
        <MerchantForm action="createMerchant"
        />
      </div>
    </section>
  );
}
