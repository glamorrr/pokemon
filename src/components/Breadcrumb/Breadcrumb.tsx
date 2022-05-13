import clsx from 'clsx';
import Link from 'next/link';

export interface BreadcrumbItem {
  title: string;
  href: string;
  isCurrent?: boolean;
}

interface ComponentProps {
  breadcrumbs: BreadcrumbItem[];
}

export const Breadcrumb: React.FC<ComponentProps> = ({ breadcrumbs }) => {
  const linkStyle = clsx(
    'text-slate-600 hover:text-slate-800 hover:underline hover:decoration-indigo-500'
  );

  return (
    <nav aria-label="Breadcrumb" className="w-full py-8">
      <ol className="flex items-center justify-start space-x-2">
        {breadcrumbs.map(({ isCurrent, href, title }, i) => {
          return (
            <li key={href} className="flex items-center space-x-2">
              {i !== 0 && isCurrent && <div aria-hidden>{'>'}</div>}
              <Link href={href}>
                <a
                  className={clsx(
                    linkStyle,
                    isCurrent && 'block text-indigo-600 hover:text-indigo-800'
                  )}
                  aria-current={isCurrent ? 'page' : false}
                >
                  {title}
                </a>
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
