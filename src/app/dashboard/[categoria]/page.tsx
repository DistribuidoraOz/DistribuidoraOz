import { findProductByCategoryId } from "@/app/consult/fetching";
import SectionProductCard from "@/app/components/sectionProductCard";
import Not_found from "@/app/components/not_found_products";
import { cardData } from "@/app/lib/definitions";


export default async function Page({ params }: { params: {categoria:string} }){

    const list: cardData[] = await findProductByCategoryId(params.categoria);
    
    return( 
      <div className="h-auto bg-gradient-to-r from-violet-300 via-rose-200 to-amber-200 p-6 md:p-12">
        {
          list.length <= 0 ?
          <Not_found/> :
          <SectionProductCard list={list} />
        }
       
      </div>
    )
}