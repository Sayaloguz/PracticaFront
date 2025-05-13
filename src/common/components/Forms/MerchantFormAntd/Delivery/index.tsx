"use client";
import { FC } from "react";
import { MerchantFormAntdProps } from "./interface";
import { Form, Select, Button } from "antd";
import Service from "@/service/src";
import { useForm } from "antd/es/form/Form";
import { toast } from "react-toastify";
import InputUnderline from "../../Inputs/InputUnderline";

const MerchantFormAntd: FC<MerchantFormAntdProps> = ({
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
        action === "createMerchant"
          ? "Merchant creado con éxito"
          : "Merchant actualizado con éxito",
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

      payload.endPointData.merchantType =
        reverseMerchantTypeMap[payload.endPointData.merchantType];

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

  console.log("INITIAL DATA: " + initialData?.merchantType);

  const merchantTypeMap: Record<string, string> = {
    "Personal Services": "MERCHANT_TYPE_PERSONAL_SERVICES",
    "Financial Services": "MERCHANT_TYPE_FINANCIAL_SERVICES",
  };

  const reverseMerchantTypeMap: Record<string, string> = {
    MERCHANT_TYPE_PERSONAL_SERVICES: "Personal Services",
    MERCHANT_TYPE_FINANCIAL_SERVICES: "Financial Services",
  };

  return (
    <Form
      form={form}
      onFinish={handleFinish}
      layout="vertical"
      initialValues={{
        name: initialData?.name || "",
        address: initialData?.address || "",
        merchantType: merchantTypeMap[initialData?.merchantType || ""],
        gindexClient: initialData?.gindexClient || "",
      }}
    >
      <Form.Item
        name="name"
        rules={[{ required: true, message: "Por favor ingrese el nombre" }]}
        label="Nombre"
      >
        <InputUnderline placeholder="Ingrese el nombre" />
      </Form.Item>

      <Form.Item
        name="address"
        rules={[{ required: true, message: "Por favor ingrese la dirección" }]}
        label="Dirección"
      >
        <InputUnderline />
      </Form.Item>

      <Form.Item
        name="gindexClient"
        rules={[
          { required: true, message: "Por favor ingrese el ID del cliente" },
        ]}
        label="ID del cliente"
      >
        <InputUnderline />
      </Form.Item>

      <Form.Item
        name="merchantType"
        label="Tipo de comercio"
        rules={[{ required: true, message: "Por favor seleccione un tipo" }]}
      >
        <Select placeholder="Seleccione el tipo de comercio">
          <Select.Option value="MERCHANT_TYPE_FINANCIAL_SERVICES">
            Financial Services
          </Select.Option>
          <Select.Option value="MERCHANT_TYPE_PERSONAL_SERVICES">
            Personal Services
          </Select.Option>
        </Select>
      </Form.Item>

      <Form.Item>
        {onCancel && (
          <Button onClick={onCancel} style={{ marginRight: 8 }}>
            Cancelar
          </Button>
        )}
        <Button type="primary" htmlType="submit">
          {action === "updateMerchant"
            ? "Actualizar merchant"
            : "Crear merchant"}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default MerchantFormAntd;
