export interface ResourceList {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    name: string;
    url: string;
  }[];
}

export interface PaginateParams {
  limit: number;
  offset: number;
}
