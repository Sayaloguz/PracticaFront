"use client";

import { useState } from "react";
import Icon from "../../../Icon/Delivery";
import ConfirmModalAntd from "../../../Modals/ConfirmModalAntd/Delivery";
import UpdateModalAntd from "../../../Modals/UpdateModalAntd/Delivery";
import { toast } from "react-toastify";
//import Service from "@/service/src";
import { MerchantRowProps } from "./interface";
import { handleDelete } from "../Infrastructure/handleActions";

const MerchantRow = ({
  merchant,
  isEven,
  onDeleted,
  onUpdated,
}: MerchantRowProps) => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  return (
    <>
      <tr
        className={`${
          isEven ? "bg-white" : "bg-gray-50"
        } border-b hover:bg-gray-100`}
      >
        <td className="px-6 py-4">{merchant.name}</td>
        <td className="px-6 py-4">{merchant.address}</td>
        <td className="px-6 py-4">{merchant.merchantType}</td>
        <td className="px-6 py-4">{merchant.gindexClient}</td>
        <td className="px-6 py-4 flex gap-3">
          <button
            onClick={() => setShowConfirmModal(true)}
            className="text-red-600 hover:underline"
          >
            <Icon id="delete" />
          </button>
          <button
            onClick={() => setShowUpdateModal(true)}
            className="text-blue-600 hover:underline"
          >
            <Icon id="edit" />
          </button>
        </td>
      </tr>

      {showConfirmModal && (
        <ConfirmModalAntd
          title="Eliminar merchant"
          message={`¿Estás seguro de que deseas eliminar el merchant ${merchant.name}?`}
          open={showConfirmModal}
          onConfirm={async () => {
            const result = await handleDelete({
              merchantId: merchant.id || "", // Damos la opción de cadena vacía para evitar un warning de ts
              onDeleted,
            });
            setShowConfirmModal(false);

            if (result.success) {
              toast.success("Merchant eliminado con éxito", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
            } else {
              toast.error(`Error: ${result.message}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
            }
          }}
          onCancel={() => setShowConfirmModal(false)}
        />
      )}

      {showUpdateModal && (
        <UpdateModalAntd
          title="Actualizar merchant"
          action="updateMerchant"
          open={showUpdateModal}
          initialData={merchant}
          onSubmit={(updated) => {
            onUpdated(updated);
            setShowUpdateModal(false);
          }}
          onCancel={() => setShowUpdateModal(false)}
        />
      )}
    </>
  );
};

export default MerchantRow;
