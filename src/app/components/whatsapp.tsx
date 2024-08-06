import Link from "next/link";
import Image from "next/image";
import logo from '../img/wappLogo.png'


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
