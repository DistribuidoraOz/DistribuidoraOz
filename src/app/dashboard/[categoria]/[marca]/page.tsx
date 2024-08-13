import SectionProductCard from "@/app/components/sectionProductCard";
import { findProductByMarcaId } from "@/app/consult/fetching";
import Not_found from "@/app/components/not_found";
import { cardData } from "@/app/lib/definitions";

export default async function Page({ params }:
{ params: {marca:string}}
){

    const cards:cardData[] = await findProductByMarcaId(params.marca);

    return(
        <div className="h-auto bg-gradient-to-r from-violet-300 via-rose-200 to-amber-200 p-6 md:p-12">
        {
          cards.length > 0 ? 
          <SectionProductCard list={cards}/> :
          <Not_found texto="No se encontraron productos!"/>
        }
        </div>
    )
}