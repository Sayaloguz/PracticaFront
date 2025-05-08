// Ya no se usa, pero lo dejo por si acaso
/*
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