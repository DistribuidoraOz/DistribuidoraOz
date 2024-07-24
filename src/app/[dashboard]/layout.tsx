import SideNav from '@/app/ui/dashboard/sidenav';
import { findCategoryByName, findMarcasByCategoria } from '../consult/fetching';
 
export default async function Layout({ children, params }: { children: React.ReactNode, params: {dashboard:string} }) {
  const id:string = params.dashboard!;

  //const categoria = await findCategoryByName(nombre);
  const list = await findMarcasByCategoria(id);
  

  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav list={list} ruta={id}/>
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}