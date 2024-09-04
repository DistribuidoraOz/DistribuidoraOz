import Link from "next/link";
import { FolderPlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import { deleteMarca } from "@/app/lib/actions";

export function AddMarca({ id }: { id: string }) {
    return (
      <Link
        href={`/admi/create/marca/${id}`}
        className="rounded-md border p-2 hover:bg-gray-100"
      >
        <FolderPlusIcon className="w-5" />
      </Link>
    );
}
export function LinkDeletMarca({id}:{id:string}){
  return(
    <Link
      href={`/admi/delete/marca/${id}`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <TrashIcon className="w-5"/>
    </Link>
  )
}

export function DeleteMarca({ id }: { id: string }) {
    
  const deleteMarcaWithId = ()=>{
    window.confirm('Seguro quiere eliminar Marca?! Al eliminar esta marca se eliminaran todos sus productos! desea continuar?') ?
    deleteMarca(id).then(()=>{
      alert('Se elimino con exito la Marca!');
      window.location.reload();
    })
    .catch((err)=>{
      console.log("Error al eliminar Marca: ", err);
      alert('Error al eliminar Marca!');
    }) :
    alert('Se cancelo Eliminar!');
  }
  return (
    <form onSubmit={e =>{
      e.preventDefault();
      deleteMarcaWithId();
    }}>
      <button className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </button>
    </form>
  );
}