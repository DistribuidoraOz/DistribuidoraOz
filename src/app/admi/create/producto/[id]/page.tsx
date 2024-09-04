import CreateForm from "@/app/ui/product/createForm";
import { findMarcasByCategoria } from "@/app/consult/fetching";
import { getServerSession } from "next-auth";
import Not_found from "@/app/components/not_found";

export default async function Page({params}: {params: {id:string}}) {

    const session = await getServerSession();
    const marcas = await findMarcasByCategoria(params.id);

    return(
        <div className="bg-teal-300 py-4 sm:p-6 md:p-12">
            {
                session ?
                <CreateForm marcas={marcas} categoriaId={params.id}/> :
                <Not_found texto="No se encontro la ruta!"/>
            }
        </div> 
    )
}