import { useQuery, UseQueryResult } from 'react-query';
import { PaginateParams, ResourceList } from '../common/types';
import { getPokemon, getPokemons } from './api';
import { Pokemon } from './entities';

export const useGetPokemons = (params: PaginateParams): UseQueryResult<ResourceList> => {
  return useQuery(['pokemons', params], () => getPokemons(params));
};

export const useGetPokemon = (name: string): UseQueryResult<Pokemon> => {
  return useQuery(['pokemons', name], () => getPokemon(name));
};
