'use client';
/*
import { deleteClient } from "../../../../app/actions/deleteClient";
import { useTransition } from "react";*/

import { useState } from "react";
import Icon from "../../../Icon/Delivery";
import { handleDelete } from "../Infrastructure/handleActions";
import DeleteModal from "../../../Modals/DeleteModal/Delivery/index";
import IconToast from "../../../Toast/IconToast/Delivery";

interface Client {
  id: string;
  cifNifNie: string;
  name: string;
  surname: string;
  phone: string;
  email: string;
}

interface Props {
  client: Client;
  isEven: boolean;
  onDeleted: (id: string) => void; // Para actualizar la lista
}

const ClientRow = ({ client, isEven, onDeleted }: Props) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  
  const [showToast, setShowToast] = useState(false);

  const onClickDelete = () => {
    setShowDeleteModal(true);
  };

  return (
    <>
      <tr
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
            onClick={onClickDelete}
            className="text-blue-600 hover:underline"
          >
            <Icon id="edit"/>
          </button>

          <button
            onClick={onClickDelete}
            className="text-green-600 hover:underline"
          >
            <Icon id="info"/>
          </button>
        </td>
      </tr>

      {showDeleteModal && (
        <DeleteModal
          title="Eliminar cliente"
          message={`¿Estás seguro de que deseas eliminar a ${client.name} ${client.surname}?`}
          onConfirm={() => {
            handleDelete({ clientId: client.id, onDeleted });
            setShowDeleteModal(false);
            setShowToast(true);
          }}
          onCancel={() => setShowDeleteModal(false)}
        />
      )}

      {showToast && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
          <IconToast 
            icon="delete"
            message={`Cliente ${client.name} ${client.surname} eliminado con éxito.`}
          />
        </div>
      )}
    </>

  );
};


export default ClientRow;
