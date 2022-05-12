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
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(5);
  const router = useRouter();
  const { data } = useGetPokemons({ offset, limit });

  const pageCount = Math.max(1, Math.ceil((data?.count || 0) / limit));

  useEffect(() => {
    router.push('/', { query: { offset, limit } });
  }, [offset, limit]);

  const onPageChange = (event: any) => {
    const newOffset = (event.selected * limit) % (data?.count as number);
    setOffset(newOffset);
  };

  const tableColumns = useMemo<Column<ResourceList['results'][number]>[]>(
    () => [
      {
        Header: 'Name',
        accessor: 'name', // accessor is the "key" in the data
      },
      {
        Header: 'Action',
        accessor: 'url',
        Cell: ({ value }) => {
          return (
            <Button href={value} size="sm">
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

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <Main title="Pokemons" className="flex flex-col items-center">
      <Table
        columns={tableColumns}
        items={tableData}
        onPageChange={onPageChange}
        pageCount={pageCount}
      />
      <Dropdown
        instanceId="limit"
        className="mt-4 shadow-sm"
        options={[
          { label: 'Show 5', value: 5 },
          { label: 'Show 7', value: 7 },
          { label: 'Show 9', value: 9 },
        ]}
        onChange={(option) => {
          console.log(option);
          setLimit(option?.value as number);
        }}
        defaultValue={{ label: 'Show 5', value: 5 }}
      />
    </Main>
  );
};

export default Home;
