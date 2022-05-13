import { Route } from '@/utils/const';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';

const routes = [
  {
    title: 'Home',
    href: Route.Home,
  },
  {
    title: 'Pokemons',
    href: Route.Pokemons,
  },
  {
    title: 'Favorite Pokemons',
    href: Route.FavoritePokemons,
  },
];

export const Nav: React.FC = () => {
  const router = useRouter();

  return (
    <nav className={clsx('pt-10 w-full')}>
      <ul className="flex items-center w-full space-x-4 flex-start">
        {routes.map(({ href, title }) => {
          const isCurrent =
            (router.pathname.includes(href) && !(href === '/')) ||
            (router.pathname === '/' && href === '/');
          return (
            <li key={href}>
              <Link href={href}>
                <a
                  className={clsx(
                    'block px-4 py-2 font-medium bg-white rounded-md shadow-sm hover:text-indigo-600 border-[1px] border-slate-300 hover:border-indigo-400',
                    isCurrent && 'text-indigo-600  border-indigo-400 '
                  )}
                >
                  {title}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
