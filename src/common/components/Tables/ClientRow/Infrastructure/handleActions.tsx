
import Service from "@/service/src";

export async function handleDelete({ 
    clientId, 
    onDeleted,
}:{
    clientId: string;
    onDeleted: (id: string) => void;
}) {
    try {
        await Service.useCases("deleteClient", {
            endPointData: { id: clientId },
        });
        onDeleted(clientId);
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