"use client";

import { FC, useState } from "react";
import ClientRow from "../../ClientRow/Delivery";

interface Client {
  id: string;
  cifNifNie: string;
  name: string;
  surname: string;
  phone: string;
  email: string;
}

interface ClientsTableProps {
  tableData: Client[];
}

const ClientsTable: FC<ClientsTableProps> = ({
  tableData,
}: ClientsTableProps) => {
  const [clients, setClients] = useState(tableData);

  const handleDeleted = (id: string) => {
    setClients((prev) => prev.filter((c) => c.id !== id));
  };

  const handleUpdated = (updatedClient: Client) => {
    setClients((prev) =>
      prev.map((client) =>
        client.id === updatedClient.id ? updatedClient : client
      )
    );
  };

  // TODO: Añadir un handleCreate para actualizar la tabla al crear un cliente

  if (clients.length === 0) return <p>No hay resultados</p>;

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
