import 'bootstrap/dist/css/bootstrap.min.css';
import Carrusel from "./ui/home/carrusel";
import { LogIn, LogOut } from './ui/login/buttons';
import { getServerSession } from 'next-auth';
import SeccionMarcas from './ui/home/seccionMarcas';

export default async function Home() {

  const session = await getServerSession();

  return (
    <main className="bg-gradient-to-r from-violet-300 via-rose-200 to-amber-200 flex min-h-screen flex-col items-center justify-between px-2 py-4">
      <div className='w-screen sm:w-screen md:w-5/6 xl:w-5/6'>
        <Carrusel/> 
      </div>
     <SeccionMarcas/>
      
      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left">
        <a
          href="#"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Contactos{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Encuentre informacion de como ponerse en contacto con nosotros.
          </p>
        </a>
        <br/>
        <a
          href="#"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Sucursal{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Encuentre nuestras sucursales y visitenos.
          </p>
        </a>
      </div>
      { session ? <><LogOut/></> : <><LogIn/></> }
    </main>
  );
}
