import { Button } from '@/components/Button';
import { Main } from '@/components/Layout';
import { Dropdown } from '@/components/Select';
import { Table } from '@/components/Table';
import type { ResourceList } from '@/modules/common/types';
import { useGetPokemons } from '@/modules/pokemon/hook';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';
import type { Column } from 'react-table';

const Home: NextPage = () => {
  const router = useRouter();
  const { offset = 0, limit = 5 } = router.query;
  const { data } = useGetPokemons({ offset: +offset, limit: +limit });

  const pageCount = Math.max(1, Math.ceil((data?.count || 0) / +limit));
  const forcePage = Math.ceil(+offset / +limit);

  const tableColumns = useMemo<Column<ResourceList['results'][number]>[]>(
    () => [
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        id: 'viewPokemon',
        Header: 'Action',
        accessor: 'name',
        Cell: ({ value }) => {
          return (
            <Button href={`/pokemons/${value}`} size="sm">
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
    router.push({ pathname: '/', query: { offset: newOffset, limit } });
  };

  return (
    <Main
      title="Pokemons"
      breadcrumbs={[{ title: 'Pokemons', href: '/', isCurrent: true }]}
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
        options={[
          { label: 'Show 5', value: 5 },
          { label: 'Show 7', value: 7 },
          { label: 'Show 9', value: 9 },
        ]}
        onChange={(option) => {
          router.push({
            pathname: '/',
            query: { offset, limit: option?.value },
          });
        }}
        defaultValue={{ label: 'Show 5', value: 5 }}
      />
    </Main>
  );
};

export default Home;
