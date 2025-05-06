import MerchantForm from "@/common/components/Forms/MerchantForm/Delivery";

export default function CreateMerchantPage() {
  return (
    <section>
      <h1 className="mt-10 ml-10 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
        Crear merchant
      </h1>

      <div className="w-1/2 mt-10 mb-10 mx-auto">
        <MerchantForm action="createMerchant"
        />
      </div>
    </section>
  );
}
