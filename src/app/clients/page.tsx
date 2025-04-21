import Table from "@/common/components/Table/Delivery";

export default function ClientsPage(){
    return (
        <Table
            columns={["ID", "Name", "Surname", "Email", "Phone"]}
            apiEndpoint="/api/clients"
            className="table-clients"
        />
    );
}