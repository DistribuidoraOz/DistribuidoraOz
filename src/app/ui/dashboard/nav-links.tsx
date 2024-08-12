'use client';

import { SquaresPlusIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { optionField } from '@/app/lib/definitions';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.


export default function NavLinks({ list, ruta }:{list: optionField[], ruta:string}) {
  const pathname: string = usePathname();

  const newList = list.map((item)=>{
    let href = `/dashboard/${ruta}/${item.id}`;
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
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-violet-300 p-3 text-sm font-medium hover:bg-stone-100 hover:text-violet-800 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                'bg-orange-400 text-orange-800': pathname === link.href,
              }
            )}
          >
            <LinkIcon className="w-6 hidden sm:block" />
            <p>{link.nombre}</p>
          </Link>
        );
      })}
    </>
  );
}
