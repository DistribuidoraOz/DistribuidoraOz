
import Image from "next/image"


export function Target(){
    const imagen = 'https://res.cloudinary.com/dnnafr8ny/image/upload/v1724880434/depositphotos_53850501-stock-illustration-business-people-puzzle_cuxrbv.webp';

    return(
        <div className="w-full h-auto grid justify-items-center mb-8">
            <div className="grid grid-cols-3 gap-8 px-8 justify-items-start bg-gradient-to-r from-indigo-500">
                <Image src={imagen} width={300} height={200} alt='' className="-mt-4 -mb-4 rounded-xl shadow-md hidden sm:block"/>

                <div className="justify-between col-span-2 py-8">
                    <h1 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Nuestra empresa</h1>
                    <p className="text-sm font-semibold leading-6 text-indigo-800">
                    Nuestra filosofía de empresa es que vos tengas una experiencia gratificante y dinámica, 
                    por eso contamos con un staff de personas dedicadas y 
                    entusiastas para mejorar cada día y cumplir con cada una de las demandas en tiempo y 
                    forma.
                    </p>
                </div>

            </div>
        </div>
    )
}

export function TargetReverse(){
    const imagen = 'https://res.cloudinary.com/dnnafr8ny/image/upload/v1724880954/images_1_sqnfdv.png';

    return(
        <div className="w-full h-auto grid justify-items-center mb-8">
            <div className="grid grid-cols-3 gap-8 px-8 justify-items-end bg-gradient-to-l from-orange-500">

                <div className="justify-between col-span-2 py-8">
                    <h1 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Compra segura</h1>
                    <p className="text-sm font-semibold leading-6 text-orange-800">
                    Contamos con diversos medios de pago, con gran trasparencia en cada transacion.
                    Distribuidora Oz atiende a miles de clientes en todo el país. 
                    Manteniendo la calidez y la rapidez que nos caracterizan, hemos logrado crecer y 
                    consolidarnos gracias a la confianza de nuestros clientes.
                    </p>
                </div>
                <Image src={imagen} width={300} height={200} alt='' className="-mt-4 -mb-4 rounded-xl shadow-md hidden sm:block"/>

            </div>
        </div>
    )
}