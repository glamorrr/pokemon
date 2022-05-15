import { Button } from '@/components/Button';
import { Main } from '@/components/Layout';
import { Dropdown } from '@/components/Select';
import { Table } from '@/components/Table';
import type { ResourceList } from '@/modules/common/types';
import { useGetItems } from '@/modules/item/hook';
import { Route } from '@/utils/const';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import type { Column } from 'react-table';

const Home: NextPage = () => {
  const router = useRouter();
  const { offset = 0, limit = 5 } = router.query;
  const { data } = useGetItems({ offset: +offset, limit: +limit });

  const pageCount = Math.max(1, Math.ceil((data?.count || 0) / +limit));
  const forcePage = Math.ceil(+offset / +limit);

  const tableColumns = useMemo<Column<ResourceList['results'][number]>[]>(
    () => [
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        id: 'viewItem',
        Header: 'Action',
        accessor: 'name',
        Cell: ({ value }) => {
          return (
            <Button href={Route.Item(value)} size="sm">
              View
            </Button>
          );
        },
      },
    ],
    []
  );

  const tableData = useMemo<ResourceList['results'][number][]>(
    () => data?.results || [],
    [data?.results]
  );

  const onPageChange = (event: any) => {
    const newOffset = event.selected * +limit;
    router.push({ pathname: Route.Items, query: { offset: newOffset, limit } });
  };

  return (
    <Main
      title="Items"
      breadcrumbs={[{ title: 'Items', href: Route.Items, isCurrent: true }]}
      className="flex flex-col items-center"
    >
      <Table
        columns={tableColumns}
        items={tableData}
        onPageChange={onPageChange}
        pageCount={pageCount}
        forcePage={forcePage}
      />
      <Dropdown
        instanceId="limit"
        className="mx-auto mt-4 shadow-sm w-max"
        value={{ label: `Show ${limit}`, value: +limit }}
        options={[
          { label: 'Show 5', value: 5 },
          { label: 'Show 7', value: 7 },
          { label: 'Show 9', value: 9 },
        ]}
        onChange={(option) => {
          router.push({
            pathname: Route.Items,
            query: { offset, limit: option?.value },
          });
        }}
      />
    </Main>
  );
};

export default Home;
