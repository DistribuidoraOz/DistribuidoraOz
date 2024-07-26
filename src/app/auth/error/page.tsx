'use client';

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/app/ui/button";
import Image from "next/image";


const Error = () => {
    const error = useSearchParams()
    const img = 'https://res.cloudinary.com/dnnafr8ny/image/upload/v1722023307/error_yfjjc0.png';
  
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="flex flex-col justify-center items-center text-center p-4">
                <Image
                    className="mb-6"
                    src={img}
                    width={200}
                    height={200}
                    alt="error logo"
                />
                <h1 className="mb-8 text-black text-4xl">Ocurrio el siguiente error:</h1>
                <p className="mb-8 text-red-600	text-2xl">{error}</p>
                <Link href={'/'}>
                    <Button>Intentelo nuevamente!</Button>
                </Link>
            </div>
        </div>
    );
  };
  
  export default Error;