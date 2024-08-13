import Image from "next/image";
import img from "@/app/img/404.jpg"
import { Button } from "../ui/button";
import Link from "next/link";

export default function Not_found({texto}: {texto:string}){
    return(
        <div className="flex justify-center items-center min-h-screen">
            <div className="flex flex-col justify-center items-center text-center p-4">
                <h1 className="mb-8 text-black text-4xl">{texto}</h1>
                <Image
                    className="mb-4 rounded-md object-cover"
                    src={img}
                    width={500}
                    height={500}
                    alt="not Found image"
                />
                <Link className='no-underline' href={'/'}>
                    <Button>Seguir buscando...</Button>
                </Link>
            </div>
        </div>
        
    )    
}