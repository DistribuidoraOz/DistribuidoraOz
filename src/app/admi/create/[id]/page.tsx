import CreateForm from "@/app/components/createForm";
import { findMarcasByCategoria } from "@/app/consult/fetching";


export default async function Page({params}: {params: {id:string}}) {

    
    const marcas = await findMarcasByCategoria(params.id);

    console.log("soy pagenewproduct------ ", marcas);

    return(
        <CreateForm marcas={marcas} categoriaId={params.id}/>
    )
}