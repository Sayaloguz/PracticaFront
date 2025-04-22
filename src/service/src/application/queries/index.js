import exampleUseCases from './lib/example';
import comercioUseCases from './lib/comercios';
import clienteUseCases from './lib/clientes';

const queries = {
  ...exampleUseCases,
  ...clienteUseCases,
  ...comercioUseCases,
};

export default queries;
