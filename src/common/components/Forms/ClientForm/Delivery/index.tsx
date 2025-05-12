"use client";
import Service from "@/service/src";
import { FC } from "react";
import InputFloatingLabel from "../../InputFloatingLabel/InputFloatingLabel";
import { toast } from "react-toastify";
import { ClientFormProps } from "./interface";

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

/* 

"use client";
import Service from "@/service/src";
import { FC } from "react";
import InputFloatingLabel from "../../InputFloatingLabel/InputFloatingLabel";
import { toast } from "react-toastify";
import { ClientFormProps } from "./interface";
import { useForm } from "react-hook-form";

interface FormData {
  cifNifNie: string;
  name: string;
  surname: string;
  phone: string;
  email: string;
}

const ClientForm: FC<ClientFormProps> = ({
  action,
  onCancel,
  onSuccess,
  initialData,
}: ClientFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    defaultValues: {
      name: initialData?.name || "",
      surname: initialData?.surname || "",
      cifNifNie: initialData?.cifNifNie || "",
      phone: initialData?.phone || "",
      email: initialData?.email || "",
    },
  });

  const onSubmit = async (data: FormData) => {
    const payload = {
      endPointData: {
        ...data,
        ...(initialData?.id && { id: initialData.id }),
      },
    };

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
        if (action === "createClient") reset(); // Limpiar formulario después de crear
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
      <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4">
        <InputFloatingLabel
          id="name"
          label="Nombre"
          required={true}
          {...register("name", { required: "El nombre es requerido" })}
          error={errors.name?.message}
        />
        <InputFloatingLabel
          id="surname"
          label="Apellido"
          required={true}
          {...register("surname", { required: "El apellido es requerido" })}
          error={errors.surname?.message}
        />
        <InputFloatingLabel
          id="cifNifNie"
          label="Documento de identidad (CIF/NIF/NIE)"
          required={true}
          {...register("cifNifNie", {
            required: "El documento es requerido",
            minLength: {
              value: 9,
              message: "El documento debe tener al menos 9 caracteres",
            },
          })}
          error={errors.cifNifNie?.message}
        />
        <InputFloatingLabel
          id="phone"
          label="Teléfono"
          required={true}
          {...register("phone", {
            required: "El teléfono es requerido",
            pattern: {
              value: /^[0-9]{9,15}$/,
              message: "Teléfono no válido",
            },
          })}
          error={errors.phone?.message}
        />
        <InputFloatingLabel
          id="email"
          label="Email"
          type="email"
          required={true}
          {...register("email", {
            required: "El email es requerido",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Email no válido",
            },
          })}
          error={errors.email?.message}
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
*/
