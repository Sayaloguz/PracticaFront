"use client";

import { useState } from "react";
import Icon from "../../../Icon/Delivery";
import ConfirmModalAntd from "../../../Modals/ConfirmModalAntd/Delivery";
import UpdateModalAntd from "../../../Modals/UpdateModalAntd/Delivery";
import { toast } from "react-toastify";
import { ClientRowProps } from "./interface";
import { handleDelete } from "../Infrastructure/handleActions";

const ClientRow = ({ client, isEven, onDeleted, onUpdate }: ClientRowProps) => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  const onClickDelete = () => {
    setShowConfirmModal(true);
  };

  const onClickUpdate = () => {
    setShowUpdateModal(true);
  };

  return (
    <>
      <tr
        key={client.id}
        className={`${
          isEven ? "bg-white" : "bg-gray-50"
        } border-b hover:bg-gray-100`}
      >
        <td className="px-6 py-4">{client.cifNifNie}</td>
        <td className="px-6 py-4">{client.name}</td>
        <td className="px-6 py-4">{client.surname}</td>
        <td className="px-6 py-4">{client.phone}</td>
        <td className="px-6 py-4">{client.email}</td>
        <td className="px-6 py-4 flex gap-3">
          <button
            onClick={onClickDelete}
            className="text-red-600 hover:underline"
          >
            <Icon id="delete" />
          </button>

          <button
            onClick={onClickUpdate}
            className="text-blue-600 hover:underline"
          >
            <Icon id="edit" />
          </button>
        </td>
      </tr>

      {showConfirmModal && (
        <ConfirmModalAntd
          title="Eliminar cliente"
          message={`¿Estás seguro de que deseas eliminar a ${client.name} ${client.surname}?`}
          open={showConfirmModal}
          onConfirm={async () => {
            const result = await handleDelete({
              clientId: client.id || "",
              onDeleted,
            });
            setShowConfirmModal(false);

            if (result.success) {
              toast.success("Cliente eliminado con éxito", {
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
          title="Actualizar cliente"
          action="updateClient"
          open={showUpdateModal}
          initialData={client}
          onSubmit={(updatedClient) => {
            onUpdate(updatedClient);
            setShowUpdateModal(false);
          }}
          onCancel={() => setShowUpdateModal(false)}
        />
      )}
    </>
  );
};

export default ClientRow;
