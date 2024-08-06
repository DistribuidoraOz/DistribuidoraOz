import SectionProductCard from "@/app/components/sectionProductCard";
import { findProductByMarcaId } from "@/app/consult/fetching";
import Not_found from "@/app/components/not_found_products";

export default async function Page({ params }:
{ params: {marca:string}}
){

    const cards = await findProductByMarcaId(params.marca) || [];

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