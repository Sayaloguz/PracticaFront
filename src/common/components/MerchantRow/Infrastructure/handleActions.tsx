
import Service from "@/service/src";

export async function handleDelete({ 
    merchantId, 
    onDeleted,
}:{
    merchantId: string;
    onDeleted: (id: string) => void;
}) {
    try {
        await Service.useCases("deleteMerchant", {
            endPointData: { id: merchantId },
        });
        onDeleted(merchantId);
        // Aquí podríamos llamas a un success toast o algo así
        return { 
            success: true,
        };
    } catch (error) {
        // Otro toast aquí
        console.error("Error al eliminar cliente:", error);
        return { success: false, message: String(error) };
    }    
}

export async function handleEdit(){
    return (
        <></>
    )
}

export async function handleInfo(){
    return (
        <></>
    )
}