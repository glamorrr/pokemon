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
    'inline-flex items-center justify-center whitespace-nowrap  bg-indigo-500 rounded-md text-slate-50 hover:bg-indigo-600 active:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400/50',
    className
  );
  const sm = clsx('px-3 py-1 text-sm');
  const md = clsx('px-4 py-2 text-base');
  const buttonStyle = clsx(baseStyle, size === 'sm' && sm, size === 'md' && md);

  return (
    <>
      {href && (
        <Link href={href}>
          <a className={buttonStyle}>View</a>
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
