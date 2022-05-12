import { useQuery, UseQueryResult } from 'react-query';
import { PaginateParams, ResourceList } from '../common/types';
import { getPokemons } from './api';

export const useGetPokemons = (params: PaginateParams): UseQueryResult<ResourceList> => {
  return useQuery(['pokemons', params], () => getPokemons(params));
};
