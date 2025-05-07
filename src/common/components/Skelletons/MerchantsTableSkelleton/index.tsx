// components/skeletons/MerchantsTableSkeleton.tsx
"use client";

export const MerchantsTableSkeleton = () => {
  // Número de filas esqueletos a mostrar
  const skeletonRows = 5;

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
      <table className="w-full text-sm text-left text-gray-600">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100">
          <tr>
            <th className="px-6 py-3">Nombre</th>
            <th className="px-6 py-3">Dirección</th>
            <th className="px-6 py-3">Tipo de merchant</th>
            <th className="px-6 py-3">Cliente</th>
            <th className="px-6 py-3">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: skeletonRows }).map((_, index) => (
            <tr 
              key={index} 
              className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-b hover:bg-gray-100`}
            >
              <td className="px-6 py-4">
                <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse"></div>
              </td>
              <td className="px-6 py-4">
                <div className="h-4 bg-gray-200 rounded-full w-full animate-pulse"></div>
              </td>
              <td className="px-6 py-4">
                <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse"></div>
              </td>
              <td className="px-6 py-4">
                <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
              </td>
              <td className="px-6 py-4">
                <div className="flex space-x-2">
                  <div className="h-8 w-8 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-8 w-8 bg-gray-200 rounded animate-pulse"></div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};