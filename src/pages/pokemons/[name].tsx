import { Card } from '@/components/Card/Card';
import { JSONCard } from '@/components/Card/JSONCard';
import { Main } from '@/components/Layout';
import { useFavoritePokemons, useGetPokemon } from '@/modules/pokemon/hook';
import { Route } from '@/utils/const';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { HeartIcon as HeartIconOutline } from '@heroicons/react/outline';
import { Pokemon } from '@/modules/pokemon/entities';
import clsx from 'clsx';
import toast from 'react-hot-toast';
import { Toast } from '@/components/Toast';

const Pokemon: NextPage = () => {
  const router = useRouter();
  const { data } = useGetPokemon(router.query.name as string);
  const { pokemons: favoritePokemons, create, remove } = useFavoritePokemons();
  console.log(data);
  const isFavorite = favoritePokemons.find((pokemon) => pokemon.name === data?.name);

  const onCreate = () => {
    create(data as Pokemon);
    toast.custom((t) => <Toast t={t} description={`${data?.name} is added to favorites`} />);
  };

  const onRemove = () => {
    remove(router.query.name as string);
    toast.custom((t) => <Toast t={t} description={`${data?.name} is removed to favorites`} />);
  };

  return (
    <Main
      title={`Pokemon ${data?.name}`}
      breadcrumbs={[
        { title: 'Pokemons', href: Route.Pokemons },
        { title: data?.name || '...', href: Route.Pokemon(data?.name as string), isCurrent: true },
      ]}
    >
      {data && (
        <div className="flex items-start space-x-6">
          <Card className="flex flex-col items-start flex-shrink-0 space-y-6 w-max ">
            <div className="border-[1px] rounded-md overflow-hidden border-slate-300 h-48 w-48">
              <Image
                src={data.sprites.frontDefault || '/noimage.png'}
                alt={data?.name}
                width={192}
                height={192}
              />
            </div>
            <div className="border-[1px] overflow-hidden border-slate-300 rounded-md h-48 w-48">
              <Image
                src={data.sprites.backDefault || '/noimage.png'}
                alt={data?.name}
                objectFit="cover"
                width={192}
                height={192}
              />
            </div>
          </Card>
          <div className="flex flex-col w-full space-y-6">
            <Card className="w-full">
              <p className="font-semibold tracking-wide text-gray-400">Pokemon</p>
              <p className="text-2xl">{data.name}</p>
            </Card>
            <button
              onClick={isFavorite ? onRemove : onCreate}
              className={clsx(
                'self-start p-2 shadow-sm bg-white border-[1px] border-slate-300 rounded-md hover:bg-slate-50',
                isFavorite && 'bg-indigo-500 hover:bg-indigo-500'
              )}
              title={isFavorite ? 'Remove from favorites' : 'Favorite'}
            >
              <HeartIconOutline
                className={clsx('w-8 text-indigo-500', isFavorite && 'text-white')}
              />
            </button>
          </div>
        </div>
      )}
      <JSONCard className="mt-6" data={JSON.stringify(data, null, 2)} />
    </Main>
  );
};

export default Pokemon;
