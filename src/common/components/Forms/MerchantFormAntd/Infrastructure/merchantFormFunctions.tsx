import Service from "@/service/src";

export const handleMerchantSubmit = async (
  action: string,
  values: any,
  id?: string
) => {
  const payload = {
    endPointData: {
      ...values,
      ...(id ? { id } : {}),
    },
  };

  try {
    await Service.useCases(action, payload.endPointData);

    return {
      success: true,
      message:
        action === "createMerchant"
          ? "Merchant creado con éxito"
          : "Merchant actualizado con éxito",
      data: payload.endPointData,
    };
  } catch (error) {
    return {
      success: false,
      message: "Error al procesar la solicitud",
      error,
    };
  }
};
