import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { Main } from '@/components/Layout';
import { Route } from '@/utils/const';
import type { NextPage } from 'next';
import Image from 'next/image';
import { GlobeAltIcon } from '@heroicons/react/outline';

const FavoritePokemons: NextPage = () => {
  return (
    <Main
      title="Pokemons"
      breadcrumbs={[{ title: 'Home', href: Route.Home, isCurrent: true }]}
      className="flex flex-col items-center"
    >
      <div className="flex flex-col items-center space-y-6">
        <Card className="!p-0  items-center flex overflow-hidden rounded">
          <Image src="/brad.jpeg" alt="brad" width={700 / 1.5} height={437 / 1.5} />
        </Card>
        <Button href={Route.Pokemons}>
          <GlobeAltIcon className="w-5 h-5 mr-2" />
          <span>Browse Pokemons</span>
        </Button>
      </div>
    </Main>
  );
};

export default FavoritePokemons;
