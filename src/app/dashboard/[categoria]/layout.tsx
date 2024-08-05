"use client"

import SideNav from '@/app/ui/dashboard/sidenav';
import { useSearchParams } from 'next/navigation';


export default function Layout({ params, children }:
  { params: {categoria:string}, children: React.ReactNode }){

  const searchParams = useSearchParams();

  const id = searchParams.get('id')!;
  
  return (
    <div className="flex h-screen w-full flex-col md:flex-row md:overflow-hidden bg-gradient-to-r from-violet-300 via-rose-200 to-amber-200">
      <div className="w-full flex-none md:w-64">
  
        <SideNav id={id}/>
      
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}