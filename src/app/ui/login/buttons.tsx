'use client';

import { PowerIcon, LockOpenIcon } from "@heroicons/react/24/outline";
import { signIn, signOut } from 'next-auth/react';

export function LogIn() {
    return (
      <button
        className="rounded-md border p-2 hover:bg-gray-100"
        onClick={()=>{
        signIn('github');
      }}>
        <LockOpenIcon className="w-5"/>
      </button>
    );
}
  
export function LogOut() {
    
    return (
      <button
        className="rounded-md border p-2 hover:bg-gray-100"
        onClick={()=>{
        signOut({redirect: true});
      }}>
          <PowerIcon className="w-5" />
      </button>
    );
}