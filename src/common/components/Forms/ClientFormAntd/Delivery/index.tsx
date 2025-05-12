"use client";
import { FC } from "react";
import { ClientFormAntdProps } from "./interface";
import { Form, Button } from "antd";
import Service from "@/service/src";
import { useForm } from "antd/es/form/Form";
import { toast } from "react-toastify";
import AntdFloatingInput from "../../InputFloatingLabel/InputFloatingLabel";

const ClientFormAntd: FC<ClientFormAntdProps> = ({
  action,
  onSuccess,
  onCancel,
  initialData,
}) => {
  const [form] = useForm();

  const handleFinish = async (values: any) => {
    const payload = {
      endPointData: {
        ...values,
      },
    };

    if (initialData?.id) {
      payload.endPointData.id = initialData.id;
    }

    try {
      await Service.useCases(action, payload);

      toast.success(
        action === "createClient"
          ? "Client creado con éxito"
          : "Client actualizado con éxito",
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

      if (onSuccess) onSuccess(payload.endPointData);
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
    <Form
      form={form}
      onFinish={handleFinish}
      layout="vertical"
      initialValues={{
        name: initialData?.name || "",
        surname: initialData?.surname || "",
        cifNifNie: initialData?.cifNifNie || "",
        phone: initialData?.phone || "",
        email: initialData?.email || "",
      }}
    >
      <AntdFloatingInput
        name="name"
        label="Nombre"
        formItemProps={{
          rules: [{ required: true, message: "Por favor ingrese el nombre" }],
        }}
      />

      <AntdFloatingInput
        name="surname"
        label="Apellido"
        formItemProps={{
          rules: [{ required: true, message: "Ingrese el apellido" }],
        }}
      />

      <AntdFloatingInput
        name="cifNifNie"
        label="Documento de identidad (CIF/NIF/NIE)"
        formItemProps={{
          rules: [{ required: true, message: "Ingrese su CIF/NIF/NIE" }],
        }}
      />

      <AntdFloatingInput
        name="phone"
        label="Teléfono"
        formItemProps={{
          rules: [
            { required: true, message: "Introduzca el teléfono de contacto" },
          ],
        }}
      />

      <AntdFloatingInput
        name="email"
        label="Email"
        formItemProps={{
          rules: [
            { required: true, message: "Introduzca el email de contacto" },
          ],
        }}
      />

      <Form.Item>
        {onCancel && (
          <Button onClick={onCancel} style={{ marginRight: 8 }}>
            Cancelar
          </Button>
        )}
        <Button type="primary" htmlType="submit">
          {action === "updateClient" ? "Actualizar client" : "Crear client"}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ClientFormAntd;
