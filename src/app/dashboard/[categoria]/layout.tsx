import SideNav from '@/app/ui/dashboard/sidenav';
import { findMarcasByCategoria, findCategoryById } from '../../consult/fetching';
 
export default async function Layout({ children, params }: { children: React.ReactNode, params: {categoria:string} }) {
  const id:string = params.categoria!;

  const categoria = await findCategoryById(id);
  const list = await findMarcasByCategoria(id);
  const bg_img = 'https://res.cloudinary.com/dnnafr8ny/image/upload/v1721862873/sunset-sky-with-cloud-in-orange-yellow-pink-purple-color-dramatic-twilight-landscape-with-sunrise-in-morning-horizon-beautiful-nanture-idyllic-dusk-sky-in-autumn-winter-evening-vector_zyxgxk.jpg';

  return (
    <div className="flex h-screen w-full flex-col md:flex-row md:overflow-hidden bg-center bg-cover">
      <div className="w-full flex-none md:w-64">
        <SideNav list={list} ruta={id}/>
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}