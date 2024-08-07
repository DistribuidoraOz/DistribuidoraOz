"use client";

import { PhotoIcon } from '@heroicons/react/24/solid';
import { dataForm, optionField } from '@/app/lib/definitions';
import { ImputListName } from './list-name-imput';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { createProduct } from '../lib/actions';


export default function CreateForm({ marcas, categoriaId }: { marcas: optionField[], categoriaId: string })
{
  
  const [datos, setDatos] = useState<dataForm>({
    categoriaId: '',
    marcaId: '',
    nombre: '',
    descripcion: '',
    imagen: null,
  });
  const [imgScr, setImgScr] = useState<string | null>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value}= e.target as HTMLInputElement | HTMLTextAreaElement;
    const { files } = e.target as HTMLInputElement;
    if(name === 'imagen' && files){

      const objetURL = URL.createObjectURL(files[0]);
      setImgScr(objetURL);

      setDatos((prevState)=>({
        ...prevState,
        imagen: files[0],
      }))
    }else{
      setDatos((prevState)=>({
        ...prevState,
        [name]: value,
      }));
    }
  };

  useEffect(()=>{
    return ()=>{
        if(imgScr) URL.revokeObjectURL(imgScr);
    };
  }, [imgScr]);
  
  const HandleSubmit = async (e: any)=>{
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { nombre, descripcion, imagen } = datos;
    formData.set('categoriaId', categoriaId)
    formData.set('nombre', nombre);
    formData.set('descripcion', descripcion);
    if(imagen)
      formData.set('imagen', imagen); 

    createProduct(formData);
  }

  return (
    <div className='md:container md:mx-auto p-20'>
    <form method='post' onSubmit={HandleSubmit}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Crear Nuevo Producto</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Todos los campos son obligatorios, no deje ninguno sin completar.
          </p>
          <br/>
          <ImputListName list={marcas} label='marca' />
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="nombre" className="block text-sm font-medium leading-6 text-gray-900">
                Nombre del producto:
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="nombre"
                    id="nombre"
                    autoComplete="nombre"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Nombre del producto..."
                    onChange={onChange}
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="descripcion" className="block text-sm font-medium leading-6 text-gray-900">
                Descripcion:
              </label>
              <div className="mt-2">
                <textarea
                  id="descripcion"
                  name="descripcion"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                  onChange={onChange}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">Escriba una breve descripcion del producto.</p>
            </div>

            <div className="col-span-full">
              <label htmlFor="product-photo" className="block text-sm font-medium leading-6 text-gray-900">
                Imagen del producto:
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  {imgScr ? <Image width={500} height={200} src={imgScr} alt='' className='max-w-fit max-h-fit'/> : 
                  <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />}
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="imagen"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span >Subir Imagen</span>
                      <input id="imagen" name="imagen" type="file" className="sr-only" onChange={onChange}/>
                    </label>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancelar
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Subir
        </button>
      </div>
    </form>
    </div>
  )
}
