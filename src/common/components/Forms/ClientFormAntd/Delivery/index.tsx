"use client";
import { FC } from "react";
import { ClientFormAntdProps } from "./interface";
import { Form, Button } from "antd";
import { useForm } from "antd/es/form/Form";
import { toast } from "react-toastify";
import InputUnderline from "../../Inputs/InputUnderline";
import { funcionUseCases } from "@/common/utils/functionUseCases";

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
      await funcionUseCases(action, payload);

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

  /*
  useEffect(() => {
    form.setFieldsValue({
      name: initialData?.name || "",
      surname: initialData?.surname || "",
      cifNifNie: initialData?.cifNifNie || "",
      phone: initialData?.phone || "",
      email: initialData?.email || "",
    });
  }, []);*/

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
      <Form.Item
        name="name"
        rules={[{ required: true, message: "Por favor ingrese el nombre" }]}
        label="Nombre"
      >
        <InputUnderline />
      </Form.Item>

      <Form.Item
        name="surname"
        rules={[{ required: true, message: "Por favor ingrese el apellido" }]}
        label="Apellido"
      >
        <InputUnderline />
      </Form.Item>

      <Form.Item
        name="cifNifNie"
        rules={[{ required: true, message: "Por favor ingrese CIF/NIF/NIE" }]}
        label="Documento de identidad (CIF/NIF/NIE)"
      >
        <InputUnderline />
      </Form.Item>

      <Form.Item
        name="phone"
        rules={[{ required: true, message: "Por favor ingrese el teléfono" }]}
        label="Teléfono"
      >
        <InputUnderline />
      </Form.Item>

      <Form.Item
        name="email"
        rules={[{ required: true, message: "Por favor ingrese el correo" }]}
        label="Email"
      >
        <InputUnderline />
      </Form.Item>

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
