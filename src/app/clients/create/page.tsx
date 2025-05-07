import ClientForm from "@/common/components/Forms/ClientForm/Delivery";
import MainTitle from "@/common/components/Titles/MainTitle";

export default function CreateClientPage() {
  return (
    <section>
      <MainTitle title="Crear cliente" />

      <div className="w-1/2 mt-10 mb-10 mx-auto">
        <ClientForm action="createClient"
        
        />
      </div>
    </section>
  );
}
