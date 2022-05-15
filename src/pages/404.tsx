import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { Main } from '@/components/Layout';
import { Route } from '@/utils/const';
import type { NextPage } from 'next';
import Image from 'next/image';
import { GlobeAltIcon } from '@heroicons/react/outline';
import { UnderlineLink } from '@/components/Link';

const PageNotFound: NextPage = () => {
  return (
    <Main
      title="404: This page could not be found"
      breadcrumbs={[]}
      className="flex flex-col items-center"
    >
      <div className="flex flex-col items-center space-y-8">
        <Card className="!p-0  items-center flex overflow-hidden rounded">
          <Image src="/404.gif" alt="" width={475} height={300} objectFit="cover" />
        </Card>
        <Card>
          <h1 className="text-5xl font-medium">404</h1>
        </Card>
      </div>
    </Main>
  );
};

export default PageNotFound;
