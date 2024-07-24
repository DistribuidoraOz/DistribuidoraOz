'use client';

import { SquaresPlusIcon } from '@heroicons/react/24/outline';

import Link from 'next/link';

import { usePathname } from 'next/navigation';

import clsx from 'clsx';
import { optionField } from '@/app/lib/definitions';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.


export default function NavLinks({list, ruta}:{list: optionField[], ruta:string}) {
  const pathname: string = usePathname();

  var newList = list.map((item)=>{
    let href = `/${ruta}/${item.id}`;
    return {...item, href}
  });

  return (
    <>
      {newList.map((link) => {
        const LinkIcon = SquaresPlusIcon;
        return (
          <Link
            key={link.nombre}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.nombre}</p>
          </Link>
        );
      })}
    </>
  );
}
