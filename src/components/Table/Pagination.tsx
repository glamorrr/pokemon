import clsx from 'clsx';
import React from 'react';
import ReactPaginate from 'react-paginate';

interface Props {
  pageCount: number;
  forcePage: number;
  onPageChange?(selectedItem: { selected: number }): void;
}

const Pagination: React.FC<Props> = ({ pageCount, onPageChange, forcePage }) => {
  const linkStyle = clsx(
    'flex items-center justify-center w-10 h-10 mr-2 bg-white shadow-sm hover:bg-gray-100 rounded-md border-[1px] border-slate-300'
  );

  return (
    <ReactPaginate
      forcePage={forcePage}
      breakLabel="..."
      nextLabel="Next"
      onPageChange={onPageChange}
      pageRangeDisplayed={3}
      pageCount={pageCount}
      previousLabel="Previous"
      className="flex items-center"
      pageLinkClassName={linkStyle}
      activeLinkClassName={clsx(
        'border-indigo-400 bg-indigo-100 text-indigo-600 font-semibold hover:bg-indigo-100'
      )}
      nextLinkClassName={clsx(linkStyle, 'w-auto px-4')}
      previousLinkClassName={clsx(linkStyle, 'w-auto px-4')}
      disabledLinkClassName={clsx('bg-gray-50 cursor-not-allowed hover:bg-gray-50 text-gray-400')}
      breakLinkClassName={clsx(linkStyle, 'px-6 ')}
    />
  );
};
clsx();

export default Pagination;
