
import { Target, TargetReverse } from '../ui/nosotros/nosotrosTarget';
import SectionShipping from '../ui/nosotros/nosotrosSeccion';

export default function Page() {
  return (
    <>
    <div className="w-full h-40 bg-[url('https://res.cloudinary.com/dnnafr8ny/image/upload/v1724880950/compra-segura-2_j1si4m.png')]"></div>
    <div className="bg-white py-6">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Distribuidora Oz te da la bienvenida a nuestra web. 
          </p>
          <p className="mt-6 pb-6 text-lg leading-8 text-gray-600">
          Somos una empresa que se dedica desde hace 25 años a la fabricación y distribución de productos de primera calidad. 
          Trabajamos diferentes rubros como BAZAR-JUGUETERIA-REGALERIA-PLAYA, entre otros.
          Contamos con una selección de marcas reconocidas como DURAVIT-CAROL-TRAMONTINA-CLUB IMPORT- NEW PLAST, etc.
          Nuestro objetivo es brindar al cliente un servicio PREMIUM, de solución rápida y eficaz como también productos de alta calidad y el mejor precio del mercado.
          </p>
        </div>
        <SectionShipping/>
      </div>
    </div>
    
    <Target/>
    <TargetReverse/>
    </>
  )
}
