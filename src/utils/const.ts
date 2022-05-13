export const Route = {
  Pokemons: '/pokemons',
  FavoritePokemons: '/favorite-pokemons',
  Pokemon: (name: string): string => `/pokemons/${name}`,
};
