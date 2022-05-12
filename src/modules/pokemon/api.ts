import { fetcher } from '@/utils/fetcher';
import { PaginateParams, ResourceList } from '../common/types';

export const getPokemons = async (params: PaginateParams): Promise<ResourceList> => {
  const res = await fetcher.get<ResourceList>('/pokemon', { params });
  return res.data;
};
