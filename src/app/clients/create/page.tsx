import ClientForm from "@/common/components/Forms/ClientForm/Delivery";
import BreadCrumbs
export default function UpdateClientPage() {
    return (
        <section>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Crear cliente
            </h1>

            <ClientForm
                action="createClient"
            />
        </section>
    )
}