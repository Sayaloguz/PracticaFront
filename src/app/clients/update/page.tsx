import Form from "@/common/components/Form/Delivery";
import MainButton from "@/common/components/Buttons/MainButton/Delivery"

export default function UpdatePage() {
    return (
        <section>
            <h1>Actualizar cliente</h1>
            <Form
                action="updateClient"
                fields="name, email, phone"
            />
            <MainButton
                action="updateClient"
                text="Actualizar cliente"
            />
        </section>
    )
}