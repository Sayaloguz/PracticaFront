"use client";

import { FC, useState } from "react";
import ClientRow from "../../ClientRow/Delivery";
import { ClientsTableProps } from "./interface";

const ClientsTable: FC<ClientsTableProps> = ({
  tableData,
}: ClientsTableProps) => {
  const [clients, setClients] = useState(tableData);

  const handleDeleted = (id: string) => {
    setClients((prev) => prev.filter((c) => c.id !== id));
  };

  const handleUpdated = (updatedClient: Utility.Client) => {
    setClients((prev) =>
      prev.map((client) =>
        client.id === updatedClient.id ? updatedClient : client
      )
    );
  };

  if (clients.length === 0)
    return (
      <p className="mt-20 font-bold text-center">
        No hay clientes actualmente.
      </p>
    );

  return (
    <div className="mr-2 ml-2 relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
      <table className="w-full text-sm text-left text-gray-600">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100">
          <tr>
            <th className="px-6 py-3">CIF/NIF/NIE</th>
            <th className="px-6 py-3">Nombre</th>
            <th className="px-6 py-3">Apellidos</th>
            <th className="px-6 py-3">Teléfono</th>
            <th className="px-6 py-3">Email</th>
            <th className="px-6 py-3">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client, index) => (
            <ClientRow
              key={client.id}
              client={client}
              isEven={index % 2 === 0}
              onDeleted={handleDeleted}
              onUpdate={handleUpdated}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClientsTable;
