import clsx from 'clsx';
import Link from 'next/link';

interface Props extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string;
  className?: string;
  children?: React.ReactNode;
}

export const UnderlineLink: React.FC<Props> = ({ className, href, children, ...rest }) => {
  return (
    <Link href={href}>
      <a
        className={clsx(
          'inline-block relative hover:text-indigo-700',
          'after:absolute after:w-full after:scale-x-0 after:h-[1px] after:top-[92%] after:-left-0 after:bg-indigo-700 after:origin-bottom-right after:transition-transform',
          'after:hover:scale-x-100 after:hover:origin-bottom-left',
          className
        )}
        {...rest}
      >
        {children}
      </a>
    </Link>
  );
};
