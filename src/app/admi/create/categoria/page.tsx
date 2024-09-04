import CreateCategoryForm from "@/app/ui/categoria/createCategoryForm";
import Not_found from "@/app/components/not_found";
import { getServerSession } from "next-auth";

export default async function Page(){

    const session = await getServerSession();

    return(
        <div className="w-full grid justify-items-center bg-amber-300 h-screen py-10">
            { session ?
            <CreateCategoryForm/>
            : <Not_found texto="No existe esta ruta!"/>
            }
        </div>
    )
}