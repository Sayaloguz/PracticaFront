export interface ClientRowProps {
  client: Utility.Client;
  isEven: boolean;
  onDeleted: (id: string) => void;
  onUpdate: (updatedClient: Utility.Client) => void;
}
