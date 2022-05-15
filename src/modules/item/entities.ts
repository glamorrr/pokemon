export interface Item {
  name: string;
  category: {
    name: string;
  };
  sprites: {
    default?: string | null;
  };
}
