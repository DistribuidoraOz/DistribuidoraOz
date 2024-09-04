'use client';

import { useSession } from "next-auth/react"
import { LogOut } from "../ui/login/buttons";
import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Transition,
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Search from '../ui/search';
import { optionField } from '../lib/definitions';
import { listMap } from "../lib/tools";
import { LinkDeletCategory, AddCategory } from "../ui/categoria/buttons";

function classNames(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}

export default function HeaderMenu({list}: {list: optionField[]}){
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { data: session, status } = useSession();

  const newList = listMap(list);

  return (
    <header className="bg-cover bg-center shadow-2xl bg-[url('https://res.cloudinary.com/dnnafr8ny/image/upload/v1721955493/4444_s108rc.jpg')]">
      <nav className="mx-auto flex max-w-6xl items-center justify-between ms:px-8 lg:px-8 p-2" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="">
            <span className="sr-only">Distribuidora Oz</span>
            <img className="h-28 w-full" src='https://res.cloudinary.com/dnnafr8ny/image/upload/v1723246681/LogoOz_ixcpzq.png' alt="" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Abrir menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-md font-semibold leading-6 text-gray-900">
              Categorias
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </PopoverButton>

            <Transition
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <PopoverPanel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-orange-100 shadow-2xl ring-1 ring-gray-900/5">
                <div className="p-4">
                  {newList.map((item) => (
                    <div
                      key={item.nombre}
                      className="group relative flex items-center gap-x-6 rounded-lg p-2.5 text-sm leading-6 hover:bg-orange-200"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-fuchsia-200">
                        <item.icon className="h-6 w-6 bg-fuchsia-200 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold text-gray-900 no-underline">
                          {item.nombre}
                          <span className="absolute inset-0" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
                { status === "authenticated" ? 
                <div className="grid grid-cols-2 divide-x divide-fuchsia-500 bg-fuchsia-200">
                <LinkDeletCategory/>
                <AddCategory/>
                </div> 
                : <></> }
              </PopoverPanel>
            </Transition>
        </Popover>
          <a href="/" className="text-sm font-semibold leading-6 text-gray-900 no-underline">
            Inicio
          </a>
          <a href="/nosotros" className="text-sm font-semibold leading-6 text-gray-900 no-underline">
            Nosotros
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900 no-underline">
            Contactos
          </a>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
         <Search placeholder='Busque aqui...' />
        </div>
      </nav>
      <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Distribuidora Oz</span>
              <img
                className="h-28 w-auto"
                src='https://res.cloudinary.com/dnnafr8ny/image/upload/v1723246681/LogoOz_ixcpzq.png'
                alt="Logo"
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Cerrar menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Categorias
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-2 space-y-2">
                        {[...newList].map((item) => (
                          <DisclosureButton
                            key={item.nombre}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.nombre}
                          </DisclosureButton>
                        ))}
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>
                <a
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-cyan-50 no-underline"
                >
                  Inicio
                </a>
                <a
                  href='/nosotros'
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-cyan-50 no-underline"
                >
                  Nosotros
                </a>
                <a
                  href='#'
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-cyan-50 no-underline"
                >
                  Contactos
                </a>
                <Search placeholder="Buscar..."/>
              </div>
              { status === "authenticated" ? 
                <div className="grid grid-cols-3 divide-x divide-fuchsia-500 bg-fuchsia-200 rounded-lg">
                <LinkDeletCategory/>
                <AddCategory/>
                <LogOut/>
                </div> 
              : <></> }
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}


