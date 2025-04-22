import Table from "@/common/components/Table/Delivery";
export default function MerchantsPage(){
    return (
       <Table
            apiEndpoint="http://localhost:8082/api/getMerchants"
            columns={[
                { key: 'name', label: 'Nombre' },
                { key: 'address', label: 'Dirección' },
                { key: 'merchantType', label: 'Tipo de comercio' }
            ]}
        />    

    );
}