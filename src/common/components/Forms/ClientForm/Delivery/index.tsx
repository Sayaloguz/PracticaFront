"use client";
import Service from "@/service/src";
import { FC } from "react";
import InputFloatingLabel from "../../InputFloatingLabel";

interface ClientFormProps {
  id?: string;
  action: string;
  onSuccess?: (data: any) => void;
  onCancel?: () => void;
  initialData?: {
    cifNifNie: string;
    name: string;
    surname: string;
    phone: string;
    email: string;
  };
}

const ClientForm: FC<ClientFormProps> = ({ action, id, onSuccess, onCancel, initialData }: ClientFormProps) => {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const payload = {
      endPointData: {  
        cifNifNie: formData.get("cifNifNie") as string,
        name: formData.get("name") as string,
        surname: formData.get("surname") as string,
        phone: formData.get("phone") as string,
        email: formData.get("email") as string,
      }
  };

    if (id) {
      payload.endPointData.id = id;
    }
  
    try {
      const response = await Service.useCases(action, payload);
      toast.success("Cliente eliminado correctamente", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    } catch (error) {
      console.error("Error al llamar a la API:", error);
    }
  };

  return (
    <div className="min-width-full min-height-full">
    <form onSubmit={handleSubmit} className="w-full space-y-4">
        <InputFloatingLabel 
          id="name" 
          label="Nombre" 
          required={true}
          defaultValue={initialData?.name}
        />

        <InputFloatingLabel 
          id="surname" 
          label="Apellido" 
          required={true}
          defaultValue={initialData?.surname}
        />

        <InputFloatingLabel
          id="cifNifNie"
          label="Documento de identidad (CIF/NIF/NIE)"
          required={true}
          defaultValue={initialData?.cifNifNie}
        />

        <InputFloatingLabel
          id="phone"
          label="Teléfono"
          required={true}
          defaultValue={initialData?.phone}
        />

        <InputFloatingLabel
          id="email"
          label="Email"
          type="email"
          required={true}
          defaultValue={initialData?.email}
        />

        {action === "updateClient" && (
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
          {action === "updateClient" ? "Actualizar cliente" : "Crear cliente"}
        </button>
      </form>
    </div>
  );
};

export default ClientForm;