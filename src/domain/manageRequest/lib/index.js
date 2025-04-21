/********************************************************************************************
 * Librería de todos los errores, queries y métodos de gestión de datos de las llamadas a API
 * *****************************************************************************************/

import { EXAMPLE_METHODS } from "./methods/example-methods";
import { EXAMPLE_ERROR_MESSAGES, EXAMPLE_QUERIES } from "./queries/example-queries";

export const ERROR_MESSAGES = {
  ...EXAMPLE_ERROR_MESSAGES,
  ...CLIENTE_ERROR_MESSAGES,
  ...COMERCIO_ERROR_MESSAGES
};

export const QUERIES = {
  ...EXAMPLE_QUERIES,
  ...CLIENTE_QUERIES,
  ...COMERCIO_QUERIES
};

export const METHODS = {
  
  ...EXAMPLE_METHODS,
  ...CLIENTE_METHODS,
  ...COMERCIO_METHODS
};
