import { useEffect, useState } from 'react';
import { useQuery, UseQueryResult } from 'react-query';
import { LocalStorageService } from '@/services/localStorage.service';
import { PaginateParams, ResourceList } from '../common/types';
import { getPokemon, getPokemons } from './api';
import { Pokemon } from './entities';

export const useGetPokemons = (params: PaginateParams): UseQueryResult<ResourceList> => {
  return useQuery(['pokemons', params], () => getPokemons(params));
};

export const useGetPokemon = (name: string): UseQueryResult<Pokemon> => {
  return useQuery(['pokemons', name], () => getPokemon(name));
};

export const useFavoritePokemons = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    setPokemons(LocalStorageService.get('favoritePokemons') || []);
  }, []);

  useEffect(() => {
    LocalStorageService.set('favoritePokemons', pokemons);
  }, [pokemons]);

  const create = (pokemon: Pokemon) => {
    setPokemons([
      {
        name: pokemon.name,
        sprites: {
          frontDefault: pokemon.sprites.frontDefault,
          backDefault: pokemon.sprites.backDefault,
        },
      },
      ...pokemons,
    ]);
  };

  const remove = (name: string) => {
    setPokemons(pokemons.filter((pokemon) => pokemon.name !== name));
  };

  return { pokemons, create, remove };
};
