import Head from 'next/head';
import clsx from 'clsx';

interface ComponentProps {
  title: string;
  className?: string;
  children?: React.ReactNode;
}

export const Main: React.FC<ComponentProps> = ({
  title = 'Cool Pokemon Website',
  className,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Cool pokemon website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-slate-200 text-slate-900">
        <div className={clsx('max-w-screen-sm px-4 py-24 mx-auto', className)}>{children}</div>
      </div>
    </>
  );
};
