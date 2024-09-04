import Not_found from "@/app/components/not_found";
import { findCategoryById } from "@/app/consult/fetching"
import CreateMarcaForm from "@/app/ui/marca/createMarcaForm";
import { getServerSession } from "next-auth";


export default async function Page({params}: {params:{ id:string}}){

    const session = await getServerSession();
    const category_name = await findCategoryById(params.id);

    return(
        <div className="w-full grid justify-items-center bg-amber-300 h-screen py-10">
            { session?
            <CreateMarcaForm categoryId={params.id} category_name={category_name.nombre}/>
            : <Not_found texto="No existe esta ruta!"/>
            }
        </div>
    )
}