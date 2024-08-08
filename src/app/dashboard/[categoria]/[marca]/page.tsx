import SectionProductCard from "@/app/components/sectionProductCard";
import { findProductByMarcaId } from "@/app/consult/fetching";
import Not_found from "@/app/components/not_found_products";
import { cardData } from "@/app/lib/definitions";

export default async function Page({ params }:
{ params: {marca:string}}
){

    var cards:cardData[] = [];
    cards = await findProductByMarcaId(params.marca);

    return(
        <>
        {
          cards.length > 0 ? 
          <SectionProductCard list={cards}/> :
          <Not_found/>
        }
        </>
    )
}