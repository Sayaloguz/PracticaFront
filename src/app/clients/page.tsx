import Table from "@/common/components/Table/Delivery";

export default function ClientsPage(){
    return (
        /*<Table
            columns={["ID", "Name", "Surname", "Email", "Phone"]}
            apiEndpoint="/api/clients"
            className="table-clients"
        />
        */

        <Table
            apiEndpoint="http://localhost:8081/api/getClients"
            columns={[
                { key: 'cifNifNie', label: 'NIF/NIE' },
                { key: 'name', label: 'Nombre' },
                { key: 'surname', label: 'Apellido' },
                { key: 'phone', label: 'Teléfono' },
                { key: 'email', label: 'Correo electrónico' }
            ]}
        />

    );
}