import { useTableData } from '../Infrastructure/tableFunctions';

// Props del componente (solo lo necesario para la presentación)
interface TableProps {
  columns: string[];       // Nombres de las columnas a mostrar
  apiEndpoint: string;     // Endpoint para obtener datos
  className?: string;      // Clases CSS opcionales
}

/**
 * Componente Table - Solo maneja presentación
 */
export default function Table({ columns, apiEndpoint, className = '' }: TableProps) {
  // Consumimos la lógica de tableFunctions.ts
  const { data, loading, error } = useTableData(apiEndpoint);

  // Estado de carga
  if (loading) {
    return (
      <div className={`table-loading ${className}`}>
        <span>Cargando datos...</span>
      </div>
    );
  }

  // Estado de error
  if (error) {
    return (
      <div className={`table-error ${className}`}>
        <span>Error: {error}</span>
      </div>
    );
  }

  // Renderizado principal de la tabla
  return (
    <table className={`table-component ${className}`}>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column}>{column.toUpperCase()}</th> // Ejemplo de formato
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={`row-${rowIndex}`}>
            {columns.map((column) => (
              <td key={`cell-${rowIndex}-${column}`}>
                {row[column] || 'N/A'} {/* Valor por defecto */}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}