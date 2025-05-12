import MainTitle from "@/common/components/Titles/MainTitle";
import MerchantFormAntd from "@/common/components/Forms/MerchantFormAntd/Delivery";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <MainTitle title="Página de pruebas" />

        <MerchantFormAntd action="createMerchant" />
      </div>
    </div>
  );
}
