import { fetcher } from '@/utils/fetcher';
import { PaginateParams, ResourceList } from '../common/types';
import { Pokemon } from './entities';

export const getPokemons = async (params: PaginateParams): Promise<ResourceList> => {
  const res = await fetcher.get<ResourceList>('/pokemon', { params });
  return res.data;
};

export const getPokemon = async (name: string): Promise<Pokemon> => {
  const res = await fetcher.get<Pokemon>(`/pokemon/${name}`);
  return res.data;
};
