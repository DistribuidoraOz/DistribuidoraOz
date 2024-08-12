
import { searchProduct } from "../lib/actions";
import SectionProductCard from "../components/sectionProductCard";
import Not_found from "../components/not_found_products";
import { cardData } from "../lib/definitions";

export default async function Page({searchParams}:{
    searchParams: {name:string}
}) {
    const query:string = searchParams.name!;
    
    const result:cardData[] = await searchProduct(query);

    return(
        <div className="h-auto bg-gradient-to-r from-violet-300 via-rose-200 to-amber-200 p-6 md:p-12">
            {
                result.length <= 0 ?
                <Not_found /> :
                <SectionProductCard list={result} />
            }            
        </div>
    )
}