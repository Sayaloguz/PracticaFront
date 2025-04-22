/********************************************************************************************
 * Librería de todos los errores, queries y métodos de gestión de datos de las llamadas a API
 * *****************************************************************************************/

import { EXAMPLE_METHODS } from "./methods/example-methods";
import { EXAMPLE_ERROR_MESSAGES, EXAMPLE_QUERIES } from "./queries/example-queries";

import { CLIENTE_METHODS } from "./methods/cliente-methods";
import { CLIENTE_ERROR_MESSAGES, CLIENTE_QUERIES } from "./queries/cliente-queries";

import { COMERCIO_METHODS } from "./methods/comercio-methods";
import { COMERCIO_ERROR_MESSAGES, COMERCIO_QUERIES } from "./queries/comercio-queries";


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
