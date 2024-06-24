'use client';

import {
  BookOpenIcon,
  SunIcon,
  ShoppingBagIcon,
  FireIcon,
  RocketLaunchIcon,
  GiftIcon,
  SquaresPlusIcon,
  BuildingStorefrontIcon
} from '@heroicons/react/24/outline';

import Link from 'next/link';

import { usePathname } from 'next/navigation';

import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name:'Bazar', href: '/dashboard/bazar', icon: ShoppingBagIcon},
  { name:'Jugeteria', href: '/dashboard/jugeteria', icon: RocketLaunchIcon},
  { name:'Playa', href: '/dashboard/play', icon: SunIcon},
  { name:'Libreria', href: '/dashboard/libreria', icon: BookOpenIcon},
  { name: 'Regaleria', href: '/dashboard/regaleria', icon: GiftIcon},
  { name: 'Camping', href: '/dashboard/camping', icon: FireIcon },
  {
    name: 'Regional',
    href: '/dashboard/regional',
    icon: BuildingStorefrontIcon,
  },
  { name: 'Varios', href: '/dashboard/varios', icon: SquaresPlusIcon },
];

export default function NavLinks() {
  const pathname: string = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
