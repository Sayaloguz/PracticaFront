import Table from "@/common/components/Table/Delivery";
export default function MerchantsPage(){
    return (
        <section>
        <h1>Tabla de merchants</h1>
        <Table
            type="merchant"
            useCase="getMerchants"
        />
       </section>
    );
}