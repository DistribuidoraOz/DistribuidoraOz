'use client'
import Link from "next/link";
import { PlusIcon, TrashIcon, PencilIcon } from "@heroicons/react/24/outline";
import { deleteProduct } from "@/app/lib/actions";


export function AddProduct({ id }: { id: string }) {
  return (
    <Link
      href={`/admi/create/producto/${id}`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PlusIcon className="w-5" />
    </Link>
  );
}

export function UpdateProduct({ id }: { id: string }) {
    return (
      <Link
        href={`/admi/edit/${id}`}
        className="rounded-md border p-2 hover:bg-gray-100"
      >
        <PencilIcon className="w-5" />
      </Link>
    );
}
  
export function DeletProduct({ id }: { id: string }) {
    
    const deleteProductWithId = ()=>{
      window.confirm('Seguro quiere eliminar?!') ?
      deleteProduct(id).then(()=>{
        alert('Se elimino con exito el producto!');
        window.location.reload();
      })
      .catch((err)=>{
        console.log("Error al eliminar producto: ", err);
        alert('Error al eliminar producto!');
      }) :
      alert('Se cancelo Eliminar!');
    }
    return (
      <form onSubmit={e =>{
        e.preventDefault();
        deleteProductWithId();
      }}>
        <button className="rounded-md border p-2 hover:bg-gray-100">
          <span className="sr-only">Delete</span>
          <TrashIcon className="w-5" />
        </button>
      </form>
    );
}