import { getServerSession } from "next-auth";
import { findMarcasByCategoria, findProductoById } from "@/app/consult/fetching";
import { fetchProduct, optionField } from "@/app/lib/definitions";
import EditForm from "@/app/ui/product/editForm";
import Not_found from "@/app/components/not_found";


export default async function Page({params} : {params : {id:string}}){
    const session = await getServerSession();
    const producto:fetchProduct = await findProductoById(params.id);
    const marcas: optionField[] = await findMarcasByCategoria(producto.CategoriaId)

    return(
        <div className="bg-teal-300 py-4 sm:p-6 md:p-12">
            { session ? 
                <EditForm marcas={marcas} producto={producto}/> :
                <Not_found texto="No se encontro esta ruta!"/>
            }
        </div>
    )
}