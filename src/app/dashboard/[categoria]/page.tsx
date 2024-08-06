import { findProductByCategoryId } from "@/app/consult/fetching";
import SectionProductCard from "@/app/components/sectionProductCard";
import Not_found from "@/app/components/not_found_products";

export default async function Page({ params }: { params: {categoria:string} }){

    const list = await findProductByCategoryId(params.categoria) || [];
    
    return( 
      <>
        {
          list.length <= 0 ?
          <Not_found/> :
          <SectionProductCard list={list} />
        }
       
      </>
    )
}