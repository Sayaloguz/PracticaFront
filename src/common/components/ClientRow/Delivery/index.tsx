'use client';
/*
import { deleteClient } from "../../../../app/actions/deleteClient";
import { useTransition } from "react";*/

import Icon from "../../Icon/Delivery";
import { handleDelete } from "../Infrastructure/handleActions";

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

  const onClickDelete = async () => {
    await handleDelete({ clientId: client.id, onDeleted });
  };

  return (
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
        <a href={`/clients/edit?id=${client.id}`} className="text-blue-600 hover:underline">
          Editar
        </a>
      </td>
    </tr>
  );
};


export default ClientRow;
