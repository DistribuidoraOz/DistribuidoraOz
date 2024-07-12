
import CreateForm from "@/app/components/createForm";
import { findAllcategory, findAllmarcas } from "@/app/consult/fetching";

export default async function Page(){

    const categorias = await findAllcategory()

    const marcas = await findAllmarcas();

    return(
        <div className="flex justify-center items-center bg-gray-200">
            <div className="bg-white p-8 m-4 rounded-md shadow-md">
                <CreateForm categorias={categorias} marcas={marcas}/>
            </div>
        </div>
    );
}
