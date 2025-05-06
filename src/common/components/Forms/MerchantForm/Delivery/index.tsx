"use client";
import Service from "@/service/src";
import { FC } from "react";
import InputFloatingLabel from "../../InputFloatingLabel";

interface MerchantFormProps {
  id?: string;
  action: string;
  onSuccess?: (data: any) => void;
  onCancel?: () => void;
}

const MerchantForm: FC<MerchantFormProps> = ({ action, id, onSuccess, onCancel}: MerchantFormProps) => {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget as HTMLFormElement);

    const data: any = {
      name: formData.get("name") as string,
      address: formData.get("address") as string,
      merchantType: formData.get("merchantType") as string,
      gindexClient: formData.get("gindexClient") as string,
    };
    
    // Solo si el id está definido, lo añadimos a los datos
    if (id) {
      data.id = id;
    }


    try {
      const response = await Service.useCases(action, data);
      console.log("Datos enviados:", data);
      console.log("Respuesta de la API:", response);
    } catch (error) {
      console.log("Datos enviados:", data);
      console.error("Error al llamar a la API:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <InputFloatingLabel
          id="name"
          label="Nombre"
          required={true}
        />

        <InputFloatingLabel
          id="address"
          label="Dirección"
          required={true}
        />

        {/* Se puede mejorar con un select */}
        <InputFloatingLabel
          id="merchantType"
          label="Tipo de Merchant"
          required={true}
        />
        
        <InputFloatingLabel
          id="gindexClient"
          label="ID del cliente"
          required={true}
        />
        {action === "updateMerchant" && (
          <button
          type="button"
          onClick={onCancel}
          className="py-2 px-4 border rounded-md text-gray-500 hover:bg-gray-100"
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