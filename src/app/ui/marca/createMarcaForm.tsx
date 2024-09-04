"use client";

import { useState } from "react";
import { createMarca } from "@/app/lib/actions";

interface marcaCreate {
    nombre: string;
    CategoriaId: string;
}

export default function CreateMarcaForm({categoryId, category_name}:
    {categoryId: string, category_name:string}){

    const [datos, setDatos] = useState<marcaCreate>({
        nombre: '',
        CategoriaId: categoryId,
    })
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        const {name, value}= e.target as HTMLInputElement;

        setDatos((prevState)=>({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async(e:any)=>{
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const { nombre, CategoriaId } = datos;
        formData.set('nombre', nombre);
        formData.set('CategoriaId', CategoriaId);
        window.confirm(`Confirma que desea crear nueva Marca: ${nombre}?`) ?
        await createMarca(formData).then(()=>{
            alert(`Exito al crear nueva marca: ${nombre}!`);
        }).catch((err)=>{
            console.log("Error al crear nueva marca: ", err);
            alert(`Ocurrio un error al crear nueva marca: ${nombre}`);
        }) : 
        console.log("Cancel new Marca create!");
    }

    return(
        <div className="w-11/12 sm:w-11/12 md:w-3/4 xl:w-3/4 h-2/5 p-6 rounded-2xl shadow-xl bg-gradient-to-b from-orange-400">
            <div className="">
                <h1 className="mb-4 font-bold ">Crear Nueva Marca</h1>
                <h2 className="mb-4 font-medium">Usted esta por crear una nueva marca dentro de la categoria: 
                    <span className="font-bold text-red-700"> "{category_name}"</span></h2>
                <form method="post" onSubmit={handleSubmit}>
                    <div className="mb-4">
                    <label htmlFor="nombre" className="block text-sm font-medium leading-6 text-grey-800">
                        Nombre de la Marca:
                    </label>
                    <input 
                        type="text"
                        name='nombre'
                        id="nombre"
                        autoComplete="nombre"
                        className="block w-full bg-transparent rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-orange-500 placeholder:text-orange-700 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                        placeholder="Nombre de la marca..."
                        onChange={onChange}
                    />
                    </div>
                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                        <a href={`/dashboard/${categoryId}`}>Cancelar</a>
                        </button>
                        <button
                            type="submit"
                            className="rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                        >
                            Crear Marca
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}