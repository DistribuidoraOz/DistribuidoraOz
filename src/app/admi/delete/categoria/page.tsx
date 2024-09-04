import { findAllcategory } from "@/app/consult/fetching";
import DeletCategoryForm from "@/app/ui/categoria/deletCategoryForm";
import Not_found from "@/app/components/not_found";
import { getServerSession } from "next-auth";

export default async function Page(){

    const session = await getServerSession();
    const category = await findAllcategory();

    return(
        <div className="w-full grid justify-items-center bg-amber-300 h-screen py-10">
            { session ?
            <DeletCategoryForm list={category}/>
            : <Not_found texto="No existe esta ruta!"/>
            }
        </div>
    )
}