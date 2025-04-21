"use client";
import { useState, useEffect } from "react";

// Tipo para los datos de la API (todos los valores son strings)
type ApiResponse = Record<string, string>[];

/**
 * Custom Hook para manejar la lógica de la tabla
 * @param apiEndpoint URL del endpoint a consultar
 * @returns Objeto con: data, loading, error
 */
export function useTableData(apiEndpoint: string) {
  // Estado para los datos de la tabla
  const [data, setData] = useState<ApiResponse>([]);
  
  // Estado para el indicador de carga
  const [loading, setLoading] = useState(true);
  
  // Estado para mensajes de error
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 1. Realizar la petición HTTP
        const response = await fetch(apiEndpoint);
        
        // 2. Verificar si la respuesta es exitosa
        if (!response.ok) {
          throw new Error(`Error en la petición: ${response.status}`);
        }
        
        // 3. Convertir respuesta a JSON
        const result: ApiResponse = await response.json();
        
        // 4. Actualizar estados
        setData(result);
        setError(null);
      } catch (err) {
        // 5. Manejar errores
        setError(err instanceof Error ? err.message : 'Error desconocido');
        console.error("Error obteniendo datos:", err);
      } finally {
        // 6. Indicar que terminó la carga
        setLoading(false);
      }
    };

    fetchData();
  }, [apiEndpoint]); // Se ejecuta cuando apiEndpoint cambia

  // Retornar los estados para que el componente los use
  return { data, loading, error };
}