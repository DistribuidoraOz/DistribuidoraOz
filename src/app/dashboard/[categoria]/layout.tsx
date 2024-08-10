import SideNav from '@/app/ui/dashboard/sidenav';

export default function Layout({ params, children }:
  { params: {categoria:string}, children: React.ReactNode }){

  return (
    <div className="h-screen flex w-full flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64 md:overflow-y-auto">
  
        <SideNav id={params.categoria}/>
      
      </div>
      <div className="flex-grow md:overflow-y-auto">{children}</div>
    </div>
  );
}