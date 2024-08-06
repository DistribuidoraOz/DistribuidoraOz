import Image from "next/image";
import img from "@/app/img/404.jpg"
import Link from "next/link";

export default function Not_found(){
    return(
        <div>
            <h1>No se encontraron Productos!</h1>
            <Image
                className=""
                src={img}
                width={500}
                height={500}
                alt="not Found image"
            />
            <Link href={'/'}>Vuelva a intentarlo...</Link>
        </div>
        
    )    
}