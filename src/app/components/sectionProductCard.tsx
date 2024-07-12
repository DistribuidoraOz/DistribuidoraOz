import Image from "next/image"
import { cardData } from "../lib/definitions"




export default function SectionProductCard({list}:{list: cardData[]}){
    
  return(
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

          {list.map((item)=>{
          return(
            <div className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none transform hover:scale-110 transition duration-500 ease-in-out lg:h-80">
                <Image src={item.imagen}
                  alt="imagen del producto" 
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  width={150}
                   height={200}
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h1>{item.nombre}</h1>
                  <p>{item.descripcion}</p>
                </div>
              </div>
            </div>)})}
        </div>
      </div>
    </div>
  )
};
