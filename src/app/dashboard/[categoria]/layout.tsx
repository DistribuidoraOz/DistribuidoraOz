import SideNav from '@/app/ui/dashboard/sidenav';

export default function Layout({ params, children }:
  { params: {categoria:string}, children: React.ReactNode }){

  return (
    <div className="flex h-full w-full flex-col md:flex-row md:overflow-hidden  bg-gradient-to-r from-violet-300 via-rose-200 to-amber-200">
      <div className="w-full flex-none md:w-64 md:overflow-y-auto">
  
        <SideNav id={params.categoria}/>
      
      </div>
      <div className="flex-grow p-6 md:p-12 md:overflow-y-auto">{children}</div>
    </div>
  );
}