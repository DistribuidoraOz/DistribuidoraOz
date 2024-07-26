import { optionField } from '@/app/lib/definitions';
import NavLinks from '@/app/ui/dashboard/nav-links';
import { AddProduct } from './addProductButton';
import { LogOut } from '../login/buttons';
import { getServerSession } from 'next-auth';



export default async function SideNav({list, ruta}:{list: optionField[], ruta:string}) {
  
  const session = await getServerSession();

  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2 bg-amber-200">
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks list={list} ruta={ruta}/>
        <div className="hidden h-8 w-auto grow rounded-md bg-amber-200 md:block"></div>
        <div className='relative bottom-2 right-2 flex space-x-2'>
          { session ? 
            <>
              <AddProduct id={ruta}/>
              <LogOut/>
            </>
            : <></>
          }
        </div>
      </div>
    </div>
  );
}
