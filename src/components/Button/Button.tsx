import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  href?: string;
  className?: string;
  size?: 'sm' | 'md';
  children?: React.ReactNode;
}

export const Button: React.FC<Props> = ({ children, size = 'md', href, className, ...rest }) => {
  const baseStyle = clsx(
    'inline-flex items-center font-medium justify-center whitespace-nowrap bg-indigo-500 rounded-md text-slate-50 transition-all',
    'hover:bg-indigo-600 active:bg-indigo-700  focus:ring-indigo-400/50',
    className
  );
  const sm = clsx('px-3 py-1 text-sm focus:ring-2');
  const md = clsx('px-4 py-2 text-base focus:ring-4');
  const buttonStyle = clsx(baseStyle, size === 'sm' && sm, size === 'md' && md);

  return (
    <>
      {href && (
        <Link href={href}>
          <a className={buttonStyle}>{children}</a>
        </Link>
      )}
      {!href && (
        <button className={buttonStyle} {...rest}>
          {children}
        </button>
      )}
    </>
  );
};
