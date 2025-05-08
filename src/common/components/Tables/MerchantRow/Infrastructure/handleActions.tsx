// Ya no se usa, pero lo dejo por si acaso
/*
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

        return { 
            success: true,
        };
    } catch (error) {

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
}*/