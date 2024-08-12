import Link from "next/link";
import Image from "next/image";
import logo from '../img/wappLogo.png';
import { Button } from "../ui/button";


export function WhatsAppImg(){
    const phoneNumber = '5491165142079';

    const message = encodeURIComponent(`Hola, Distribuidora Oz!!.
  Quisiera saber más detalles sobre sus productos.
  Espero se contacten conmigo, saludos!`);
  
    const waLink = `https://wa.me/${phoneNumber}?text=${message}`;
  
    return (
        <div className="fixed bottom-1 right-1 z-50">
            <Link
                className="shadow-lg"
                href={waLink} target="_blank" rel="noopener noreferrer">
                <Image
                    src={logo}
                    width={50}
                    height={50}
                    alt="Logo de whatsapp"
                />
            </Link>
        </div>
    );
}

export function Consultar({nombre, descripcion}:{nombre:string, descripcion:string}){
    const phoneNumber = '5491165142079';

    const message = encodeURIComponent(`Hola, Distribuidora Oz!!.
  Quisiera mas informacio del producto:
  ${nombre},
  ${descripcion}
  Espero se contacten conmigo, saludos!`);
  
    const waLink = `https://wa.me/${phoneNumber}?text=${message}`;
  
    return (
        <>
            <Link
                className="no-underline"
                href={waLink} target="_blank" rel="noopener noreferrer">
                <Button
                    className="flex h-5 items-center rounded-lg bg-lime-300 px-4 text-sm font-medium text-black transition-colors hover:bg-lime-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-500 active:bg-lime-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
                >Consultar...</Button>
            </Link>
        </>
    );
}