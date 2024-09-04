import NavLinks from '@/app/ui/dashboard/nav-links';
import { AddProduct } from '../product/buttons';
import { LogOut } from '../login/buttons';
import { getServerSession } from 'next-auth';
import { findMarcasByCategoria } from '@/app/consult/fetching';
import { AddMarca } from '../marca/buttons';
import { LinkDeletMarca } from '../marca/buttons';

export default async function SideNav({ id }: { id:string }) {
  
  const marcas = await findMarcasByCategoria(id);
  const session = await getServerSession();

  return (
    <div className="overflow-hidden hover:overflow-x-auto flex h-full flex-col px-3 py-4 md:px-2 bg-purple-200 md:overflow-y-auto">
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks list={marcas} ruta={id}/>
        <div className="hidden h-8 w-auto grow rounded-md bg-none md:block"></div>
        <div className='relative flex space-x-2'>
          { session ? 
            <>
              <AddMarca id={id}/>
              <LinkDeletMarca id={id}/>
              <AddProduct id={id}/>
              <LogOut/>
            </>
            : <></>
          }
        </div>
      </div>
    </div>
  );
}
