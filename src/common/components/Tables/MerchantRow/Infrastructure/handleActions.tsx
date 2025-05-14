import { funcionUseCases } from "@/common/utils/functionUseCases";

export async function handleDelete({
  merchantId,
  onDeleted,
}: {
  merchantId: string;
  onDeleted: (id: string) => void;
}) {
  try {
    await funcionUseCases("deleteMerchant", {
      endPointData: { id: merchantId },
    });
    onDeleted(merchantId);

    return {
      success: true,
    };
  } catch (error) {
    console.error("Error al eliminar merchant:", error);
    return { success: false, message: String(error) };
  }
}
