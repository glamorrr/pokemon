import { Column, usePagination } from 'react-table';
import { useTable } from 'react-table';
import clsx from 'clsx';
import Pagination from './Pagination';

interface ComponentProps {
  columns: Array<Column<any>>;
  items: Array<any>;
  onPageChange(e: any): void;
  pageCount: number;
  forcePage: number;
}

export const Table: React.FC<ComponentProps> = ({
  columns,
  items,
  onPageChange,
  pageCount: controlledPageCount,
  forcePage,
}) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
    {
      columns,
      data: items,
      initialState: { pageIndex: 0 },
      manualPagination: true,
      pageCount: controlledPageCount,
    },
    usePagination
  );

  const cellStyle = clsx('p-4 text-left border-[1px] border-slate-200');

  return (
    <div className="flex flex-col items-center space-y-4">
      <table
        className="p-4 overflow-hidden bg-white rounded-md shadow-sm table-auto w-80 shadow-slate-300"
        {...getTableProps()}
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            // eslint-disable-next-line react/jsx-key
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, i) => (
                // eslint-disable-next-line react/jsx-key
                <th
                  className={clsx(
                    i === 0 && 'pl-8',
                    i === headerGroup.headers.length - 1 && 'pr-8',
                    cellStyle,
                    'bg-slate-50'
                  )}
                  {...column.getHeaderProps()}
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              // eslint-disable-next-line react/jsx-key
              <tr {...row.getRowProps()}>
                {row.cells.map((cell, i) => {
                  return (
                    // eslint-disable-next-line react/jsx-key
                    <td
                      className={clsx(
                        i === 0 && 'pl-8',
                        i === row.cells.length - 1 && 'pr-8',
                        cellStyle,
                        'p-4  text-left border-[1px] border-slate-100'
                      )}
                      {...cell.getCellProps()}
                    >
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination
        forcePage={forcePage}
        pageCount={controlledPageCount}
        onPageChange={onPageChange}
      />
    </div>
  );
};
