import Link from "next/link";
import { Button } from "@/app/ui/button";

export default function Page() {

    return(
        <>
            <h1>Soy page /admi/...</h1>
            <div className="flex justify-center items-center min-h-screen">
            <div className="flex flex-col justify-center items-center text-center p-4">
                <h1 className="mb-8 text-black text-4xl">query params</h1>
                <p className="mb-8 text-red-600	text-2xl">Voy a enviar algo</p>
                <Link href={'/context?mensaje=algogenial&&id=gagagagagagga!'}>
                    <Button>enviar</Button>
                </Link>
            </div>
        </div>
        </>
    )
}