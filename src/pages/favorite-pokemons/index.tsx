import { Card } from '@/components/Card';
import { Main } from '@/components/Layout';
import { useFavoritePokemons } from '@/modules/pokemon/hook';
import { Route } from '@/utils/const';
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const FavoritePokemons: NextPage = () => {
  const { pokemons, create, remove } = useFavoritePokemons();

  return (
    <Main
      title="Pokemons"
      breadcrumbs={[{ title: 'Favorite Pokemons', href: Route.FavoritePokemons, isCurrent: true }]}
      className="flex flex-col items-center"
    >
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
              {/* TODO: make a custom link on hover */}
              <p className="mt-2 font-semibold tracking-wide text-semibold">
                <Link href={Route.Pokemon(pokemon.name)}>
                  <a className="hover:underline hover:decoration-indigo-800 hover:text-indigo-700">
                    {pokemon.name}
                  </a>
                </Link>
              </p>
            </div>
          );
        })}
      </div>
    </Main>
  );
};

export default FavoritePokemons;
