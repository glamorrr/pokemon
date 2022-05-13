import { Card } from '@/components/Card/Card';
import { JSONCard } from '@/components/Card/JSONCard';
import { Main } from '@/components/Layout';
import { useGetPokemon } from '@/modules/pokemon/hook';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Pokemon: NextPage = () => {
  const router = useRouter();
  const { data } = useGetPokemon(router.query.name as string);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <Main
      title={`Pokemon ${data?.name}`}
      breadcrumbs={[
        { title: 'Pokemons', href: '/' },
        { title: data?.name || '...', href: `/pokemons/${data?.name}`, isCurrent: true },
      ]}
    >
      {data && (
        <div className="flex items-start space-x-6">
          <Card className="flex flex-col items-start flex-shrink-0 space-y-4 w-max">
            <div className="border-[1px] rounded border-slate-300">
              <Image src={data.sprites.frontDefault} alt={data?.name} width={200} height={200} />
            </div>
            <div className="border-[1px] rounded border-slate-300">
              <Image src={data.sprites.backDefault} alt={data?.name} width={200} height={200} />
            </div>
          </Card>
          <Card className="w-full">
            <p className="font-semibold tracking-wide text-gray-400">Pokemon</p>
            <p className="text-2xl">{data.name}</p>
          </Card>
        </div>
      )}
      <JSONCard className="mt-6" data={JSON.stringify(data, null, 2)} />
    </Main>
  );
};

export default Pokemon;
