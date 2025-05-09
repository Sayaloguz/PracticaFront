"use client";
import Service from "@/service/src";
import { FC } from "react";
import InputFloatingLabel from "../../InputFloatingLabel";
import { toast } from "react-toastify";

// TODO: Mover a utils?
interface Client {
  id: string;
  cifNifNie: string;
  name: string;
  surname: string;
  phone: string;
  email: string;
}
interface ClientFormProps {
  action: string;
  onSuccess?: (data: Client) => void;
  onCancel?: () => void;
  initialData?: {
    id: string;
    cifNifNie: string;
    name: string;
    surname: string;
    phone: string;
    email: string;
  };
}

const ClientForm: FC<ClientFormProps> = ({
  action,
  onCancel,
  onSuccess,
  initialData,
}: ClientFormProps) => {
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget as HTMLFormElement);
    const payload = {
      endPointData: {
        cifNifNie: formData.get("cifNifNie") as string,
        name: formData.get("name") as string,
        surname: formData.get("surname") as string,
        phone: formData.get("phone") as string,
        email: formData.get("email") as string,
      },
    };

    if (initialData?.id) {
      payload.endPointData.id = initialData?.id;
    }

    try {
      await Service.useCases(action, payload);

      toast.success(
        action === "createClient"
          ? "Cliente creado con éxito"
          : "Cliente actualizado con éxito",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );

      if (onSuccess) {
        onSuccess(payload.endPointData);
      }
    } catch (error) {
      toast.error("Error al procesar la solicitud", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      console.error("Error al procesar la solicitud", error);
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
