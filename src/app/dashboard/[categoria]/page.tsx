import { findProductByCategoryId } from "@/app/consult/fetching";
import SectionProductCard from "@/app/components/sectionProductCard";


export default async function Page({searchParams, params}:
  { searchParams: { id:string }, params: {categoria:string} }
){

    const list = await findProductByCategoryId(searchParams.id);

    return(
        <SectionProductCard list={list} />
    )
}