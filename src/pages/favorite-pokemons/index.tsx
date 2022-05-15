import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { Main } from '@/components/Layout';
import { UnderlineLink } from '@/components/Link';
import { useFavoritePokemons } from '@/modules/pokemon/hook';
import { Route } from '@/utils/const';
import { GlobeAltIcon } from '@heroicons/react/outline';
import type { NextPage } from 'next';
import Image from 'next/image';

const FavoritePokemons: NextPage = () => {
  const { pokemons } = useFavoritePokemons();

  return (
    <Main
      title="Pokemons"
      breadcrumbs={[{ title: 'Favorite Pokemons', href: Route.FavoritePokemons, isCurrent: true }]}
      className="flex flex-col items-center"
    >
      {!!pokemons.length ? (
        <div className="grid grid-cols-3 gap-8">
          {pokemons.map((pokemon) => {
            return (
              <div key={pokemon.name}>
                <Card className="w-48 h-48 p-0 overflow-hidden rounded">
                  <Image
                    src={pokemon.sprites.frontDefault || '/noimage.png'}
                    alt={pokemon.name}
                    objectFit="cover"
                    width={192}
                    height={192}
                  />
                </Card>
                <p className="mt-2 font-semibold tracking-wide text-semibold">
                  <UnderlineLink href={Route.Pokemon(pokemon.name)}>{pokemon.name}</UnderlineLink>
                </p>
              </div>
            );
          })}
        </div>
      ) : (
        <Card className="flex flex-col items-center w-full px-8 py-12 space-y-6">
          <p className="text-lg text-gray-500">Favorite pokemons not found. Go find them!</p>
          <Button href={Route.Pokemons}>
            <GlobeAltIcon className="w-5 h-5 mr-2" />
            <span>Browse Pokemons</span>
          </Button>
        </Card>
      )}
    </Main>
  );
};

export default FavoritePokemons;
