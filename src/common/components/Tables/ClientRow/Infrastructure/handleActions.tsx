import { funcionUseCases } from "@/common/utils/functionUseCases";

export async function handleDelete({
  clientId,
  onDeleted,
}: {
  clientId: string;
  onDeleted: (id: string) => void;
}) {
  try {
    await funcionUseCases("deleteClient", {
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
