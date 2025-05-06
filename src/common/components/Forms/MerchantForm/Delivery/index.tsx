"use client";
import Service from "@/service/src";
import { FC } from "react";
import InputFloatingLabel from "../../InputFloatingLabel";

interface MerchantFormProps {
  id?: string;
  action: string;
  onCancel?: () => void;
}

const MerchantForm: FC<MerchantFormProps> = ({ action, id, onCancel }) => {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const payload = {
      endPointData: {  
      name: formData.get("name") as string,
      address: formData.get("address") as string,
      merchantType: formData.get("merchantType") as string,
      gindexClient: formData.get("gindexClient") as string,
    }
  };

  if (id) {
    payload.endPointData.id = id;
  }

    try {
      const response = await Service.useCases(action, payload);
      console.log("Datos enviados:", payload);
      console.log("Respuesta de la API:", response);
      // El modal se cerrará externamente
    } catch (error) {
      console.log(payload);
      console.error("Error al llamar a la API:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <InputFloatingLabel id="name" label="Nombre" required={true} />
        <InputFloatingLabel id="address" label="Dirección" required={true} />
        <InputFloatingLabel id="merchantType" label="Tipo de Merchant" required={true} />
        <InputFloatingLabel id="gindexClient" label="ID del cliente" required={true} />

        {action === "updateMerchant" && (
          <button
            type="button"
            onClick={onCancel}
            className="py-2 px-4 border rounded-md text-gray-500 hover:bg-gray-100 mr-2"
          >
            Cancelar
          </button>
        )}
        <button
          type="submit"
          className="py-2 px-4 bg-red-600 text-white rounded-md hover:bg-red-700"
        >
          {action === "updateMerchant" ? "Actualizar merchant" : "Crear merchant"}
        </button>
      </form>
    </div>
  );
};

export default MerchantForm;
