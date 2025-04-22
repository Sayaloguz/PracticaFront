"use client";
import { useTableData } from '../Infrastructure/tableFunctions';


type Column = {
  key: string;
  label: string;
};

type TableProps = {
  apiEndpoint: string;
  columns: Column[];
};

export default function Table({ apiEndpoint, columns }: TableProps) {
  const { data, loading, error } = useTableData(apiEndpoint);

  const formatCell = (key: string, value: string | null | undefined) => {
    if (!value) return 'N/A';

    switch (key) {
      case 'email':
        return <a href={`mailto:${value}`} className="text-blue-600 underline">{value}</a>;
      case 'phone':
        return value.replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3');
      case 'name':
      case 'surname':
        return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
      default:
        return value;
    }
  };

  if (loading) return <p className="text-gray-600">Cargando datos...</p>;
  if (error) return <p className="text-red-600">Error: {error}</p>;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 text-sm">
        <thead>
          <tr className="bg-gray-100">
            {columns.map((col) => (
              <th
                key={col.key}
                className="px-4 py-2 border-b border-gray-300 text-left font-semibold text-gray-700"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={`row-${rowIndex}`} className="hover:bg-gray-50">
              {columns.map((col) => (
                <td key={`cell-${rowIndex}-${col.key}`} className="px-4 py-2 border-b">
                  {formatCell(col.key, row[col.key])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
