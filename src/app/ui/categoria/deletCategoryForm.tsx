"use client"

import { optionField } from "@/app/lib/definitions";
import { DeleteCategory } from "./buttons";

export default function DeletCategoryForm(
    {list}:
    {list: optionField[]}
){
    return(
        <div className="w-11/12 sm:w-11/12 md:w-3/4 xl:w-3/4 h-auto p-6 rounded-2xl shadow-xl bg-gradient-to-b from-orange-400">
            <div className="">
                <h1 className="mb-4 font-bold text-xl">Borrar Categoria</h1>
                <h2 className="font-bold text-grey-900 underline decoration-red-500 decoration-double text-2xl">Importante !!!</h2>
                    <p className="text-red-900 font-bold">Tenga en cuenta que al eliminar una CATEGORIA se eliminaran tambien todas
                         las MARCAS que esta contenga y todos los PRODUCTOS de dichas marcas!</p>
                <h2 className="my-4 font-bold">Seleccione la Categoria que desea borrar:</h2> 
                    {list.map((category)=>{
                        return(
                        <div className="bg-amber-300  flex rounded-xl shadow-xl mb-2 items-center px-2.5 justify-between">
                            <h2 className="font-bold">{category.nombre}</h2>
                            <DeleteCategory id={category.id}/>
                        </div>)
                    })}
                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button type="button" className="rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">
                        <a href={`/`}>Cancelar</a>
                        </button>
                    </div>
            </div>
        </div>
    )
}
