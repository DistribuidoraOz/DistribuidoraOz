"use client";

import { useState } from "react";
import { createCategory } from "@/app/lib/actions";

interface categoryCreate {
    nombre: string;
}

export default function CreateCategoryForm(){

    const [datos, setDatos] = useState<categoryCreate>({
        nombre: '',
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
        const { nombre } = datos;
        formData.set('nombre', nombre);

        window.confirm(`Confirme que desea crear la nueva Categoria: ${nombre}`) ?
        await createCategory(formData).then(()=>{
            alert(`Exito al crear la nueva Categoria: ${nombre}!`);
        }).catch((err)=>{
            console.log("Error al crear nueva Categoria: ", err);
            alert(`Ocurrio un error al crear la nueva Categoria: ${nombre}`);
        }) : 
        console.log("Cancel new Category create!");
    }

    return(
        <div className="w-11/12 sm:w-11/12 md:w-3/4 xl:w-3/4 h-2/5 p-6 rounded-2xl shadow-xl bg-gradient-to-b from-orange-400">
            <div className="">
                <h1 className="mb-4 font-bold ">Crear Nueva Categoria</h1>
                <h2 className="mb-4 font-medium">Usted esta por crear una nueva Categoria!</h2>
                <form method="post" onSubmit={handleSubmit}>
                    <div className="mb-4">
                    <label htmlFor="nombre" className="block text-sm font-medium leading-6 text-grey-800">
                        Nombre de la Categoria:
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
                        <a href={`/`}>Cancelar</a>
                        </button>
                        <button
                            type="submit"
                            className="rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                        >
                            Crear Categoria
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}