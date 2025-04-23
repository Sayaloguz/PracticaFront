import exampleUseCases from './lib/example';
import merchantUseCases from './lib/merchant';
import clientUseCases from './lib/client';

const queries = {
  ...exampleUseCases,
  ...clientUseCases,
  ...merchantUseCases
};

export default queries;
