export const Route = {
  Home: '/',
  Pokemons: '/pokemons',
  FavoritePokemons: '/favorite-pokemons',
  Pokemon: (name: string): string => `/pokemons/${name}`,
};
