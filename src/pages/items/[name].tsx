import { Card } from '@/components/Card/Card';
import { JSONCard } from '@/components/Card/JSONCard';
import { Main } from '@/components/Layout';
import { useGetItem } from '@/modules/item/hook';
import { Route } from '@/utils/const';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';

const ItemPage: NextPage = () => {
  const router = useRouter();
  const { data } = useGetItem(router.query.name as string);

  return (
    <Main
      title={`Item ${data?.name}`}
      breadcrumbs={[
        { title: 'Items', href: Route.Pokemons },
        { title: data?.name || '...', href: Route.Item(data?.name as string), isCurrent: true },
      ]}
    >
      {data && (
        <div className="flex items-start space-x-6">
          <Card className="w-max">
            <Image
              src={data.sprites.default || '/noimage.png'}
              alt={data?.name}
              width={192}
              height={192}
            />
          </Card>
          <Card className="flex flex-col w-full space-y-4">
            <div>
              <p className="font-medium tracking-wide text-gray-400">Item</p>
              <p className="text-xl">{data.name}</p>
            </div>
            <div>
              <p className="font-medium tracking-wide text-gray-400">Category</p>
              <p className="text-xl">{data.category.name}</p>
            </div>
          </Card>
        </div>
      )}
      <JSONCard className="mt-6" data={JSON.stringify(data, null, 2)} />
    </Main>
  );
};

export default ItemPage;
