import { findMarcasByCategoria } from "@/app/consult/fetching";
import DeleteMarcaForm from "@/app/ui/marca/deleteMarcaForm";
import Not_found from "@/app/components/not_found";
import { getServerSession } from "next-auth";



export default async function Page({params}: {params: {id:string}}){

    const session = await getServerSession();
    const marcas = await findMarcasByCategoria(params.id);

    return(
        <div className="w-full grid justify-items-center bg-amber-300 h-screen py-10">
            { session ?
            <DeleteMarcaForm list={marcas} categoriaId={params.id}/>
            : <Not_found texto="No existe esta ruta!"/>
            }
        </div>
    )

}