import Head from 'next/head';
import clsx from 'clsx';
import { Breadcrumb, BreadcrumbItem } from '../Breadcrumb';
import { Nav } from '../Nav';

interface ComponentProps {
  title: string;
  breadcrumbs: BreadcrumbItem[];
  className?: string;
  children?: React.ReactNode;
}

export const Main: React.FC<ComponentProps> = ({
  title = 'Cool Pokemon Website',
  className,
  children,
  breadcrumbs,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Cool pokemon website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-slate-200 text-slate-900">
        <div className={clsx('max-w-screen-sm px-4 pb-8 mx-auto', className)}>
          <Nav />
          <Breadcrumb breadcrumbs={breadcrumbs} />
          <div className="w-full">{children}</div>
        </div>
      </div>
    </>
  );
};
