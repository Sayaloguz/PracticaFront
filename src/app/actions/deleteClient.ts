
import Service from "@/service/src"; // ajusta la ruta

export async function deleteClient(id: string) {
  try {
    await Service.useCases("deleteClient", {
      endPointData: { id },
    });
    return { success: true };
  } catch (error) {
    console.error("Error al eliminar cliente:", error);
    return { success: false, message: String(error) };
  }
}
