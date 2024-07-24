import SectionProductCard from "@/app/components/sectionProductCard"
import { findProductByMarcaId } from "@/app/consult/fetching"

export default async function Page({params}:{params: {marca:string}}){

    const cards = await findProductByMarcaId(params.marca);

    return(

        <SectionProductCard list={cards}/>
    )
}