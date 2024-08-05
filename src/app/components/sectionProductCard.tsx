import Image from "next/image";
import { cardData } from "../lib/definitions";
import { Delete, Update } from "../ui/product/buttons";
import { getServerSession } from "next-auth";
import { findMarcaById } from "../consult/fetching";




export default async function SectionProductCard({list}:{list: cardData[]}){

  const session = await getServerSession();
  //const nameMarca = await findMarcaById(id);
    
  return(
    <div className="bg-none">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-2 lg:max-w-7xl lg:px-8">
        
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

          {list.map((item)=>{
          return(
            <div className="group relative" key={item.id}>
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
                  <h1 className="font-bold">{item.nombre}</h1>
                  <p className="font-medium">{item.descripcion}</p>
                </div>
              </div>
              { session ?
                <div className='absolute bottom-2 right-2 flex space-x-2'>
                  <Update id={item.id}/>
                  <Delete id={item.id}/>
                </div>
                : <></>
              }
            </div>)})}
        </div>
      </div>
    </div>
  )
};
