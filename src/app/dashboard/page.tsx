import SectionProductCard from "../components/sectionProductCard";
import { findAllproduct } from "../consult/fetching";

export default async function page(){

    const list = await findAllproduct();

    return(
        <SectionProductCard list={list} /> 
    );
}