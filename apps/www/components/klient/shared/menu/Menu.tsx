import Link from 'next/link';
import React from 'react';

import { UserIcon } from '../icons/UserIcon';

type MenuProps = {
  isMenuOpen: boolean;
};

export const Menu = React.memo<MenuProps>(({ isMenuOpen }) => {
  return (
    <div
      className={`${
        isMenuOpen ? 'flex' : 'hidden'
      } md:flex md:items-center md:w-auto w-full order-3 md:order-1`}
    >
      <nav>
        <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
          <li>
            <Link href="/">
              <a className="inline-block no-underline hover:text-black hover:underline py-2 px-4">
                Sklep
              </a>
            </Link>
          </li>
          <li>
            <Link href="/o-nas">
              <a className="inline-block no-underline hover:text-black hover:underline py-2 px-4">
                O nas
              </a>
            </Link>
          </li>
          <li className="md:hidden">
            <Link href="/profil">
              <a
                className="inline-block no-underline hover:text-black hover:underline py-2 px-4"
                aria-label="Profil"
                title="POrofil"
              >
                <div className="flex gap-1">
                  <span>Profil</span>
                  <UserIcon />
                </div>
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
});

Menu.displayName = 'Menu';
