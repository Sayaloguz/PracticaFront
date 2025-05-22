/* eslint-disable @typescript-eslint/no-explicit-any */
declare namespace Utility {
  type JSONValue = Record<string, any>;

  type Client = {
    id?: string;
    cifNifNie: string;
    name: string;
    surname: string;
    phone: string;
    email: string;
  };

  type Merchant = {
    key: string;
    id?: string;
    name: string;
    address: string;
    merchantType: string;
    gindexClient: string;
  };

  type SelectOption = {
    value: string;
    label: string;
  };

  // Arreglos para evitar warnings de EsLint

  type EmptyPayload = object;
  type NamePayload = { endPointData: { name: string } };
  type ClientIdPayload = { endPointData: { clientId: string } };

  type EndPointDataType = EmptyPayload | NamePayload | ClientIdPayload;

  type ResponseType = { data?: any[] } | any[];
}
