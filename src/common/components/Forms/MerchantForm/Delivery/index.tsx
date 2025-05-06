"use client";
import Service from "@/service/src";
import { FC } from "react";
import InputFloatingLabel from "../../InputFloatingLabel";

interface MerchantFormProps {
  id?: string;
  action: string;
  onCancel?: () => void;
  onSuccess?: (merchant: any) => void;
  initialData?: {
    name: string;
    address: string;
    merchantType: string;
    gindexClient: string;
  };
}

const MerchantForm: FC<MerchantFormProps> = ({ action, id, onCancel, onSuccess, initialData }) => {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const payload = {
      endPointData: {
        name: formData.get("name") as string,
        address: formData.get("address") as string,
        merchantType: formData.get("merchantType") as string,
        gindexClient: formData.get("gindexClient") as string,
      },
    };

    if (id) {
      payload.endPointData.id = id;
    }

    try {
      const response = await Service.useCases(action, payload);
      console.log("Datos enviados:", payload);
      console.log("Respuesta de la API:", response);
      if (onSuccess) onSuccess(payload.endPointData);
    } catch (error) {
      console.error("Error al llamar a la API:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <InputFloatingLabel
        id="name"
        label="Nombre"
        required={true}
        defaultValue={initialData?.name || ""}
      />
      <InputFloatingLabel
        id="address"
        label="Dirección"
        required={true}
        defaultValue={initialData?.address || ""}
      />
      
      <InputFloatingLabel
        id="gindexClient"
        label="ID del cliente"
        required={true}
        defaultValue={initialData?.gindexClient || ""}
      />

{/* Cambiar esto para que obtenga los valores de forma localizada y hacer la normalización de datos donde corresponde, además de tomar bien el valor por defecto*/}
<select
      id="merchantType"
      name="merchantType"
      className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-700 mb-4"
      defaultValue={initialData?.merchantType || ""}
      required
    >
      <option value="">Seleccione un tipo</option>
      <option value="MERCHANT_TYPE_FINANCIAL_SERVICES">Financial Services</option>
      <option value="MERCHANT_TYPE_PERSONAL_SERVICES">Personal Services</option>
    </select>

      {onCancel && (
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
  );
};

export default MerchantForm;
