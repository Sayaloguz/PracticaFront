import Table from "@/common/components/Table/Delivery";

export default function ClientsPage(){
    return (
       <section>
        <h1>Tabla de clientes</h1>
        <Table
            useCase="getClients"
        />
       </section>
    );
}